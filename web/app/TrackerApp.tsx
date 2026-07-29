"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import type { User } from "@supabase/supabase-js";
import {
  applyStatus,
  buildBackup,
  calculatePace,
  createProgress,
  difficultyWeight,
  isSolved,
  loadLocalProgress,
  loadLocalSettings,
  mergeProgress,
  parseBackup,
  saveLocalProgress,
  saveLocalSettings,
  STATUS_LABELS,
} from "../lib/progress";
import {
  cloudConfigured,
  progressFromRows,
  progressToRow,
  settingsFromRow,
  settingsToRow,
  supabase,
} from "../lib/supabase";
import type {
  CurriculumData,
  CurriculumPattern,
  CurriculumProblem,
  Difficulty,
  ProgressMap,
  ProgressRecord,
  ProgressStatus,
  TrackerSettings,
} from "../lib/types";

type StatusFilter = "all" | ProgressStatus;
type DifficultyFilter = "all" | Difficulty;
type RoleFilter = "all" | "representative" | "reduction";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatDate(value: string | null): string {
  if (!value) return "Not yet";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function addDays(date: Date, days: number): string {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next.toISOString();
}

function initials(user: User): string {
  const name =
    user.user_metadata?.full_name ?? user.user_metadata?.name ?? user.email ?? "You";
  return String(name)
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function difficultyClass(difficulty: Difficulty): string {
  return `difficulty difficulty-${difficulty.toLowerCase()}`;
}

function LoadingScreen() {
  return (
    <main className="loading-shell" aria-live="polite" aria-busy="true">
      <div className="loading-mark">PA</div>
      <p className="eyebrow">Indexing the handbook</p>
      <h1>Preparing your Pattern Atlas…</h1>
      <div className="loading-rule" />
      <p>Loading 140 patterns and your saved progress.</p>
    </main>
  );
}

export default function TrackerApp() {
  const [catalog, setCatalog] = useState<CurriculumData | null>(null);
  const [loadError, setLoadError] = useState("");
  const [progress, setProgress] = useState<ProgressMap>(() => loadLocalProgress());
  const [settings, setSettings] = useState<TrackerSettings>(() => loadLocalSettings());
  const [clock, setClock] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [cloudState, setCloudState] = useState<
    "local" | "connecting" | "synced" | "error"
  >("local");
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
  const [openPatterns, setOpenPatterns] = useState<Set<number>>(new Set([1]));
  const [selectedProblemId, setSelectedProblemId] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetText, setResetText] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);
  const cloudTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  const announce = useCallback((message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3200);
  }, []);

  useEffect(() => {
    let active = true;
    fetch(`${BASE_PATH}/data/curriculum.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
        return response.json() as Promise<CurriculumData>;
      })
      .then((data) => {
        if (active) setCatalog(data);
      })
      .catch((error: unknown) => {
        if (active) {
          setLoadError(error instanceof Error ? error.message : "Catalog could not load.");
        }
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!supabase) return;
    void supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const initial = window.setTimeout(() => setClock(Date.now()), 0);
    const interval = window.setInterval(() => setClock(Date.now()), 60 * 60 * 1000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, []);

  const syncCloud = useCallback(
    async (activeUser: User) => {
      if (!supabase) return;
      setCloudState("connecting");
      const localSnapshot = loadLocalProgress();
      const [progressResult, settingsResult] = await Promise.all([
        supabase.from("user_progress").select("*"),
        supabase.from("user_settings").select("*").maybeSingle(),
      ]);

      if (progressResult.error || settingsResult.error) {
        setCloudState("error");
        announce(
          progressResult.error?.message ??
            settingsResult.error?.message ??
            "Cloud sync failed.",
        );
        return;
      }

      const remote = progressFromRows(progressResult.data ?? []);
      const merged = mergeProgress(localSnapshot, remote);
      setProgress(merged);
      saveLocalProgress(merged);

      if (settingsResult.data) {
        const remoteSettings = settingsFromRow(settingsResult.data);
        setSettings(remoteSettings);
        saveLocalSettings(remoteSettings);
      } else {
        await supabase.from("user_settings").upsert(settingsToRow(activeUser, loadLocalSettings()));
      }

      const records = Object.values(merged);
      if (records.length) {
        const { error } = await supabase
          .from("user_progress")
          .upsert(records.map((record) => progressToRow(activeUser, record)));
        if (error) {
          setCloudState("error");
          announce(error.message);
          return;
        }
      }
      setCloudState("synced");
      announce("Progress synced to your account.");
    },
    [announce],
  );

  useEffect(() => {
    if (!user) return;
    const timer = window.setTimeout(() => void syncCloud(user), 0);
    return () => window.clearTimeout(timer);
  }, [user, syncCloud]);

  useEffect(() => {
    const timers = cloudTimers.current;
    return () => {
      for (const timer of timers.values()) clearTimeout(timer);
    };
  }, []);

  const saveRecord = useCallback(
    (record: ProgressRecord) => {
      setProgress((current) => {
        const next = { ...current, [record.problemId]: record };
        saveLocalProgress(next);
        return next;
      });

      if (!supabase || !user) return;
      const existing = cloudTimers.current.get(record.problemId);
      if (existing) clearTimeout(existing);
      cloudTimers.current.set(
        record.problemId,
        setTimeout(() => {
          void supabase!
            .from("user_progress")
            .upsert(progressToRow(user, record))
            .then(({ error }) => {
              if (error) {
                setCloudState("error");
                announce(error.message);
              } else {
                setCloudState("synced");
              }
            });
        }, 450),
      );
    },
    [announce, user],
  );

  const updateRecord = useCallback(
    (problemId: number, patch: Partial<ProgressRecord>) => {
      const current = progress[problemId] ?? createProgress(problemId);
      saveRecord({ ...current, ...patch, updatedAt: new Date().toISOString() });
    },
    [progress, saveRecord],
  );

  const changeStatus = useCallback(
    (problemId: number, status: ProgressStatus) => {
      const current = progress[problemId] ?? createProgress(problemId);
      saveRecord(applyStatus(current, status));
    },
    [progress, saveRecord],
  );

  const updateSettings = useCallback(
    (patch: Partial<TrackerSettings>) => {
      const next = { ...settings, ...patch };
      setSettings(next);
      saveLocalSettings(next);
      if (supabase && user) {
        void supabase
          .from("user_settings")
          .upsert(settingsToRow(user, next))
          .then(({ error }) => {
            if (error) announce(error.message);
          });
      }
    },
    [announce, settings, user],
  );

  const signIn = async () => {
    if (!supabase) return;
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo },
    });
    if (error) announce(error.message);
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
    setCloudState("local");
    announce("Signed out. This browser still keeps a local copy.");
  };

  const exportProgress = () => {
    const backup = buildBackup(progress, settings);
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `pattern-atlas-progress-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    announce("Progress backup downloaded.");
  };

  const importProgress = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      const backup = parseBackup(JSON.parse(await file.text()));
      const merged = mergeProgress(progress, backup.progress);
      setProgress(merged);
      setSettings(backup.settings);
      saveLocalProgress(merged);
      saveLocalSettings(backup.settings);
      if (supabase && user && Object.keys(merged).length) {
        const { error } = await supabase
          .from("user_progress")
          .upsert(Object.values(merged).map((record) => progressToRow(user, record)));
        if (error) throw error;
        await supabase.from("user_settings").upsert(settingsToRow(user, backup.settings));
      }
      announce(`Imported ${Object.keys(backup.progress).length} progress records.`);
    } catch (error) {
      announce(error instanceof Error ? error.message : "Import failed.");
    }
  };

  const resetProgress = async () => {
    if (resetText !== "RESET") return;
    setProgress({});
    saveLocalProgress({});
    if (supabase && user) {
      const { error } = await supabase.rpc("reset_my_progress", {
        p_confirmation: "RESET",
      });
      if (error) announce(error.message);
    }
    setShowReset(false);
    setResetText("");
    setSelectedProblemId(null);
    announce("Progress cleared. Your curriculum is unchanged.");
  };

  const problemById = useMemo(
    () => new Map(catalog?.problems.map((problem) => [problem.id, problem]) ?? []),
    [catalog],
  );
  const patternByNumber = useMemo(
    () => new Map(catalog?.patterns.map((pattern) => [pattern.number, pattern]) ?? []),
    [catalog],
  );

  const representativeIds = useMemo(() => {
    const ids = new Set<number>();
    for (const pattern of catalog?.patterns ?? []) {
      for (const id of pattern.representativeIds) ids.add(id);
    }
    return ids;
  }, [catalog]);

  const scopeProblems = useMemo(() => {
    if (!catalog) return [];
    return settings.includeReductions
      ? catalog.problems
      : catalog.problems.filter((problem) => representativeIds.has(problem.id));
  }, [catalog, representativeIds, settings.includeReductions]);

  const solvedProblems = useMemo(
    () => scopeProblems.filter((problem) => isSolved(progress[problem.id])),
    [progress, scopeProblems],
  );
  const attemptedCount = useMemo(
    () =>
      scopeProblems.filter((problem) => progress[problem.id]?.status === "attempted")
        .length,
    [progress, scopeProblems],
  );
  const reviewDueCount = useMemo(
    () =>
      scopeProblems.filter((problem) => {
        const record = progress[problem.id];
        return (
          record?.status === "review" ||
          (record?.reviewDueAt && Date.parse(record.reviewDueAt) <= clock)
        );
      }).length,
    [clock, progress, scopeProblems],
  );

  const pace = useMemo(
    () => calculatePace(scopeProblems, progress, settings.paceWindowDays),
    [progress, scopeProblems, settings.paceWindowDays],
  );

  const eta = useMemo(() => {
    let remainingWeight = 0;
    for (const problem of scopeProblems) {
      const record = progress[problem.id];
      if (isSolved(record)) continue;
      if (settings.excludeSkippedFromEta && record?.status === "skipped") continue;
      remainingWeight += difficultyWeight(problem);
    }
    if (pace.solvedInWindow < 5 || pace.weightedPerWeek <= 0) {
      return { weeks: null, date: null, remainingWeight };
    }
    const weeks = remainingWeight / pace.weightedPerWeek;
    const date = new Date(clock + weeks * 7 * 86_400_000);
    return { weeks, date, remainingWeight };
  }, [clock, pace, progress, scopeProblems, settings.excludeSkippedFromEta]);

  const nextProblem = (() => {
    if (!catalog) return null;
    const seen = new Set<number>();
    for (const pattern of catalog.patterns) {
      const ids = settings.includeReductions ? pattern.problemIds : pattern.representativeIds;
      for (const id of ids) {
        if (seen.has(id)) continue;
        seen.add(id);
        const record = progress[id];
        if (!isSolved(record) && record?.status !== "skipped") {
          const problem = problemById.get(id);
          if (problem) return { problem, pattern };
        }
      }
    }
    return null;
  })();

  const filteredPatterns = useMemo(() => {
    if (!catalog) return [];
    const normalizedQuery = query.trim().toLowerCase();

    return catalog.patterns
      .map((pattern) => {
        const baseIds = settings.includeReductions
          ? pattern.problemIds
          : pattern.representativeIds;
        const patternMatches =
          !normalizedQuery ||
          pattern.name.toLowerCase().includes(normalizedQuery) ||
          pattern.category.toLowerCase().includes(normalizedQuery) ||
          pattern.keywords.some((keyword) =>
            keyword.toLowerCase().includes(normalizedQuery),
          );
        const ids = baseIds.filter((id) => {
          const problem = problemById.get(id);
          if (!problem) return false;
          const record = progress[id];
          const membership = problem.memberships.find(
            (item) => item.patternNumber === pattern.number,
          );
          if (roleFilter !== "all" && membership?.role !== roleFilter) return false;
          if (difficultyFilter !== "all" && problem.difficulty !== difficultyFilter) {
            return false;
          }
          if (statusFilter !== "all") {
            const status = record?.status ?? "not_started";
            if (status !== statusFilter) return false;
          }
          return patternMatches ||
            problem.title.toLowerCase().includes(normalizedQuery) ||
            String(problem.id) === normalizedQuery;
        });
        return { pattern, ids };
      })
      .filter(({ ids }) => ids.length > 0);
  }, [
    catalog,
    difficultyFilter,
    problemById,
    progress,
    query,
    roleFilter,
    settings.includeReductions,
    statusFilter,
  ]);

  const selectedProblem = selectedProblemId
    ? problemById.get(selectedProblemId) ?? null
    : null;
  const selectedRecord = selectedProblemId
    ? progress[selectedProblemId] ?? createProgress(selectedProblemId)
    : null;

  const togglePattern = (number: number) => {
    setOpenPatterns((current) => {
      const next = new Set(current);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  };

  const expandVisible = () => {
    setOpenPatterns(new Set(filteredPatterns.map(({ pattern }) => pattern.number)));
  };

  const focusNext = () => {
    if (!nextProblem) return;
    setOpenPatterns((current) => new Set(current).add(nextProblem.pattern.number));
    setSelectedProblemId(nextProblem.problem.id);
  };

  if (loadError) {
    return (
      <main className="error-shell">
        <p className="eyebrow">Catalog unavailable</p>
        <h1>The Pattern Atlas could not open.</h1>
        <p>{loadError}</p>
        <button className="button button-primary" onClick={() => window.location.reload()}>
          Try again
        </button>
      </main>
    );
  }

  if (!catalog) return <LoadingScreen />;

  const solvedPercent = scopeProblems.length
    ? Math.round((solvedProblems.length / scopeProblems.length) * 100)
    : 0;
  const activeFilterCount = [
    statusFilter !== "all",
    difficultyFilter !== "all",
    roleFilter !== "all",
    Boolean(query),
  ].filter(Boolean).length;

  return (
    <>
      <a className="skip-link" href="#curriculum">
        Skip to curriculum
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pattern Atlas home">
          <span className="brand-mark">PA</span>
          <span>
            <strong>Pattern Atlas</strong>
            <small>DSA progress lab</small>
          </span>
        </a>
        <nav className="header-actions" aria-label="Account and data">
          <span className={`sync-pill sync-${cloudState}`}>
            <span className="sync-dot" />
            {user
              ? cloudState === "synced"
                ? "Cloud synced"
                : cloudState === "connecting"
                  ? "Syncing"
                  : "Sync issue"
              : "Saved locally"}
          </span>
          {user ? (
            <div className="account-menu">
              <span className="avatar" title={user.email ?? "Signed in"}>
                {initials(user)}
              </span>
              <button className="text-button" onClick={signOut}>
                Sign out
              </button>
            </div>
          ) : cloudConfigured ? (
            <button className="button button-quiet" onClick={signIn}>
              Sign in to sync
            </button>
          ) : null}
          <button className="button button-icon" onClick={() => setShowSettings(true)}>
            <span aria-hidden="true">☰</span>
            <span className="sr-only">Open settings</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A dependency-ordered interview curriculum</p>
            <h1 id="hero-title">
              Stop collecting problems.
              <span>Start recognizing patterns.</span>
            </h1>
            <p className="hero-lede">
              Work through {catalog.stats.patterns} reusable patterns and {formatNumber(
                catalog.stats.uniqueProblems,
              )} deduplicated LeetCode problems. Every checkmark is saved instantly.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={focusNext} disabled={!nextProblem}>
                {nextProblem ? "Continue where I left off" : "Curriculum complete"}
                <span aria-hidden="true">→</span>
              </button>
              <button className="button button-quiet" onClick={() => setShowSettings(true)}>
                Manage progress
              </button>
            </div>
          </div>
          <div className="focus-card">
            <div className="focus-card-top">
              <span className="eyebrow">Up next</span>
              <span className="index-stamp">{String(solvedProblems.length + 1).padStart(4, "0")}</span>
            </div>
            {nextProblem ? (
              <>
                <span className={difficultyClass(nextProblem.problem.difficulty)}>
                  {nextProblem.problem.difficulty}
                </span>
                <h2>
                  <span>LC {nextProblem.problem.id}</span>
                  {nextProblem.problem.title}
                </h2>
                <p>
                  Pattern {nextProblem.pattern.number} · {nextProblem.pattern.name}
                </p>
                <div className="focus-card-actions">
                  <a
                    className="button button-ink"
                    href={nextProblem.problem.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open on LeetCode ↗
                  </a>
                  <button
                    className="button button-paper"
                    onClick={() => changeStatus(nextProblem.problem.id, "solved")}
                  >
                    Mark solved
                  </button>
                </div>
              </>
            ) : (
              <div className="completion-note">
                <strong>You cleared the atlas.</strong>
                <p>Review weak patterns and keep your recall fresh.</p>
              </div>
            )}
          </div>
        </section>

        <section className="metrics" aria-label="Progress overview">
          <article className="metric metric-primary">
            <div className="metric-label">
              <span>Curriculum mastery</span>
              <strong>{solvedPercent}%</strong>
            </div>
            <div className="mastery-track" aria-label={`${solvedPercent}% solved`}>
              <span style={{ width: `${solvedPercent}%` }} />
            </div>
            <p>
              <strong>{formatNumber(solvedProblems.length)}</strong> of {formatNumber(
                scopeProblems.length,
              )} unique problems
            </p>
          </article>
          <article className="metric">
            <span className="metric-kicker">Current work</span>
            <strong className="metric-value">{attemptedCount}</strong>
            <span className="metric-caption">attempted, not solved</span>
          </article>
          <article className="metric">
            <span className="metric-kicker">Review queue</span>
            <strong className="metric-value">{reviewDueCount}</strong>
            <span className="metric-caption">due for another pass</span>
          </article>
          <article className="metric metric-eta">
            <span className="metric-kicker">Estimated finish</span>
            <strong className="metric-value metric-value-small">
              {eta.date
                ? new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
                    eta.date,
                  )
                : "Building pace"}
            </strong>
            <span className="metric-caption">
              {eta.weeks
                ? `${Math.max(1, Math.ceil(eta.weeks))} weeks at ${pace.weightedPerWeek.toFixed(1)} pts/week`
                : `Solve 5 problems in ${settings.paceWindowDays} days to unlock`}
            </span>
          </article>
        </section>

        <section className="scope-banner">
          <div>
            <p className="eyebrow">Your study scope</p>
            <h2>
              {settings.includeReductions ? "Full Pattern Bible" : "Core representative set"}
            </h2>
            <p>
              {settings.includeReductions
                ? "Includes core examples and problems that secretly reduce to each pattern."
                : "A lean first pass using only each pattern’s representative problems."}
            </p>
          </div>
          <div className="scope-switch" role="group" aria-label="Curriculum scope">
            <button
              className={!settings.includeReductions ? "active" : ""}
              onClick={() => updateSettings({ includeReductions: false })}
            >
              Core
              <small>{formatNumber(representativeIds.size)} unique</small>
            </button>
            <button
              className={settings.includeReductions ? "active" : ""}
              onClick={() => updateSettings({ includeReductions: true })}
            >
              Full
              <small>{formatNumber(catalog.stats.uniqueProblems)} unique</small>
            </button>
          </div>
        </section>

        <section className="curriculum-section" id="curriculum" aria-labelledby="curriculum-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The curriculum</p>
              <h2 id="curriculum-title">Patterns in dependency order</h2>
            </div>
            <div className="section-count">
              <strong>{filteredPatterns.length}</strong>
              <span>patterns visible</span>
            </div>
          </div>

          <div className="filter-bar">
            <label className="search-field">
              <span className="sr-only">Search patterns and problems</span>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pattern, keyword, problem, or LC number"
              />
              {query ? (
                <button onClick={() => setQuery("")} aria-label="Clear search">
                  ×
                </button>
              ) : null}
            </label>
            <label>
              <span className="sr-only">Filter by status</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
              >
                <option value="all">All statuses</option>
                {Object.entries(STATUS_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by difficulty</span>
              <select
                value={difficultyFilter}
                onChange={(event) =>
                  setDifficultyFilter(event.target.value as DifficultyFilter)
                }
              >
                <option value="all">All difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by problem role</span>
              <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value as RoleFilter)}
              >
                <option value="all">Core + reductions</option>
                <option value="representative">Core only</option>
                <option value="reduction">Reductions only</option>
              </select>
            </label>
            <button className="button button-small" onClick={expandVisible}>
              Expand visible
            </button>
            {activeFilterCount ? (
              <button
                className="filter-reset"
                onClick={() => {
                  setQuery("");
                  setStatusFilter("all");
                  setDifficultyFilter("all");
                  setRoleFilter("all");
                }}
              >
                Clear {activeFilterCount}
              </button>
            ) : null}
          </div>

          <div className="pattern-list">
            {filteredPatterns.map(({ pattern, ids }) => (
              <PatternCard
                key={pattern.number}
                pattern={pattern}
                visibleIds={ids}
                problemById={problemById}
                progress={progress}
                expanded={openPatterns.has(pattern.number)}
                onToggle={() => togglePattern(pattern.number)}
                onStatus={changeStatus}
                onSelect={setSelectedProblemId}
                includeReductions={settings.includeReductions}
              />
            ))}
          </div>

          {!filteredPatterns.length ? (
            <div className="empty-state">
              <span>∅</span>
              <h3>No matching problems</h3>
              <p>Clear a filter or try a broader search term.</p>
            </div>
          ) : null}
        </section>
      </main>

      <footer>
        <div>
          <strong>Pattern Atlas</strong>
          <span>Built from the DSA Pattern Bible.</span>
        </div>
        <p>
          {formatNumber(catalog.stats.placements)} curated placements · {catalog.stats.patterns} patterns · progress owned by you
        </p>
      </footer>

      {selectedProblem && selectedRecord ? (
        <ProblemDrawer
          problem={selectedProblem}
          record={selectedRecord}
          patternByNumber={patternByNumber}
          onClose={() => setSelectedProblemId(null)}
          onStatus={(status) => changeStatus(selectedProblem.id, status)}
          onUpdate={(patch) => updateRecord(selectedProblem.id, patch)}
        />
      ) : null}

      {showSettings ? (
        <SettingsDialog
          settings={settings}
          user={user}
          cloudConfigured={cloudConfigured}
          onClose={() => setShowSettings(false)}
          onUpdate={updateSettings}
          onSignIn={signIn}
          onExport={exportProgress}
          onImport={() => importInputRef.current?.click()}
          onReset={() => {
            setShowSettings(false);
            setShowReset(true);
          }}
        />
      ) : null}

      {showReset ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowReset(false)}>
          <section
            className="modal confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setShowReset(false)} aria-label="Close">
              ×
            </button>
            <p className="eyebrow danger-text">Destructive action</p>
            <h2 id="reset-title">Clear all progress?</h2>
            <p>
              This removes every status, note, attempt, and time entry from this browser
              {user ? " and your signed-in account" : ""}. Export a backup first if needed.
            </p>
            <label className="field-stack">
              Type <strong>RESET</strong> to confirm
              <input value={resetText} onChange={(event) => setResetText(event.target.value)} />
            </label>
            <div className="modal-actions">
              <button className="button button-quiet" onClick={() => setShowReset(false)}>
                Cancel
              </button>
              <button
                className="button button-danger"
                disabled={resetText !== "RESET"}
                onClick={resetProgress}
              >
                Clear progress
              </button>
            </div>
          </section>
        </div>
      ) : null}

      <input
        ref={importInputRef}
        className="sr-only"
        type="file"
        accept="application/json,.json"
        onChange={importProgress}
      />
      <div className={`toast ${notice ? "toast-visible" : ""}`} role="status" aria-live="polite">
        {notice}
      </div>
    </>
  );
}

function PatternCard({
  pattern,
  visibleIds,
  problemById,
  progress,
  expanded,
  onToggle,
  onStatus,
  onSelect,
  includeReductions,
}: {
  pattern: CurriculumPattern;
  visibleIds: number[];
  problemById: Map<number, CurriculumProblem>;
  progress: ProgressMap;
  expanded: boolean;
  onToggle: () => void;
  onStatus: (id: number, status: ProgressStatus) => void;
  onSelect: (id: number) => void;
  includeReductions: boolean;
}) {
  const scopeIds = includeReductions ? pattern.problemIds : pattern.representativeIds;
  const solved = scopeIds.filter((id) => isSolved(progress[id])).length;
  const percent = scopeIds.length ? Math.round((solved / scopeIds.length) * 100) : 0;
  const bodyId = `pattern-${pattern.number}-body`;

  return (
    <article className={`pattern-card ${expanded ? "pattern-open" : ""}`}>
      <button
        className="pattern-header"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={bodyId}
      >
        <span className="pattern-number">{String(pattern.number).padStart(3, "0")}</span>
        <span className="pattern-title-block">
          <span className="pattern-meta">
            {pattern.category} · {pattern.difficulty}
          </span>
          <strong>{pattern.name}</strong>
        </span>
        <span className="pattern-progress">
          <span>
            {solved}/{scopeIds.length}
          </span>
          <span className="mini-track">
            <span style={{ width: `${percent}%` }} />
          </span>
        </span>
        <span className="pattern-chevron" aria-hidden="true">
          ↓
        </span>
      </button>
      {expanded ? (
        <div className="pattern-body" id={bodyId}>
          <div className="pattern-notes">
            <div>
              <span className="note-label">Core idea</span>
              <p>{pattern.coreIdea}</p>
            </div>
            <div>
              <span className="note-label">Recognition cues</span>
              <div className="keyword-list">
                {pattern.keywords.slice(0, 6).map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="problem-list" role="list">
            {visibleIds.map((id) => {
              const problem = problemById.get(id);
              if (!problem) return null;
              const record = progress[id];
              const solvedProblem = isSolved(record);
              const role = problem.memberships.find(
                (membership) => membership.patternNumber === pattern.number,
              )?.role;
              return (
                <div className={`problem-row status-${record?.status ?? "not_started"}`} role="listitem" key={id}>
                  <label className="solve-check" title={solvedProblem ? "Mark unsolved" : "Mark solved"}>
                    <input
                      type="checkbox"
                      checked={solvedProblem}
                      onChange={(event) =>
                        onStatus(id, event.target.checked ? "solved" : "not_started")
                      }
                      aria-label={`${solvedProblem ? "Mark unsolved" : "Mark solved"}: ${problem.title}`}
                    />
                    <span aria-hidden="true">✓</span>
                  </label>
                  <button className="problem-main" onClick={() => onSelect(id)}>
                    <span className="problem-id">LC {problem.id}</span>
                    <span className="problem-title">{problem.title}</span>
                  </button>
                  <span className={`role-tag role-${role}`}>
                    {role === "reduction" ? "Reduction" : "Core"}
                  </span>
                  <span className={difficultyClass(problem.difficulty)}>{problem.difficulty}</span>
                  {record?.status === "attempted" ? (
                    <span className="row-state">In progress</span>
                  ) : record?.status === "review" ? (
                    <span className="row-state">Review</span>
                  ) : record?.status === "skipped" ? (
                    <span className="row-state">Skipped</span>
                  ) : null}
                  <button className="notes-button" onClick={() => onSelect(id)} aria-label={`Edit ${problem.title}`}>
                    {record?.notes ? "●" : "···"}
                  </button>
                  <a
                    className="external-link"
                    href={problem.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${problem.title} on LeetCode`}
                  >
                    ↗
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function ProblemDrawer({
  problem,
  record,
  patternByNumber,
  onClose,
  onStatus,
  onUpdate,
}: {
  problem: CurriculumProblem;
  record: ProgressRecord;
  patternByNumber: Map<number, CurriculumPattern>;
  onClose: () => void;
  onStatus: (status: ProgressStatus) => void;
  onUpdate: (patch: Partial<ProgressRecord>) => void;
}) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  const markReviewed = () => {
    const now = new Date();
    onUpdate({
      status: "solved",
      solvedAt: record.solvedAt ?? now.toISOString(),
      lastReviewedAt: now.toISOString(),
      reviewDueAt: addDays(now, 30),
    });
  };

  return (
    <div className="drawer-backdrop" role="presentation" onMouseDown={onClose}>
      <aside
        className="problem-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="drawer-topline">
          <span className={difficultyClass(problem.difficulty)}>{problem.difficulty}</span>
          <button className="modal-close" onClick={onClose} aria-label="Close problem details">
            ×
          </button>
        </div>
        <p className="eyebrow">LeetCode {problem.id}</p>
        <h2 id="drawer-title">{problem.title}</h2>
        <div className="membership-list">
          {problem.memberships.map((membership) => (
            <span key={`${membership.patternNumber}-${membership.role}`}>
              P{membership.patternNumber} · {patternByNumber.get(membership.patternNumber)?.name}
              <small>{membership.role}</small>
            </span>
          ))}
        </div>

        <a className="button button-ink drawer-leetcode" href={problem.url} target="_blank" rel="noreferrer">
          Solve on LeetCode ↗
        </a>

        <div className="drawer-section">
          <span className="note-label">Status</span>
          <div className="status-grid" role="group" aria-label="Problem status">
            {(Object.keys(STATUS_LABELS) as ProgressStatus[]).map((status) => (
              <button
                key={status}
                className={record.status === status ? "active" : ""}
                onClick={() => onStatus(status)}
              >
                {STATUS_LABELS[status]}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-section split-fields">
          <label className="field-stack">
            Attempts
            <input
              type="number"
              min="0"
              max="100000"
              value={record.attempts}
              onChange={(event) =>
                onUpdate({ attempts: Math.max(0, Number(event.target.value) || 0) })
              }
            />
          </label>
          <label className="field-stack">
            Minutes spent
            <input
              type="number"
              min="0"
              max="10000000"
              value={record.minutesSpent}
              onChange={(event) =>
                onUpdate({ minutesSpent: Math.max(0, Number(event.target.value) || 0) })
              }
            />
          </label>
        </div>

        <div className="drawer-section">
          <span className="note-label">Confidence</span>
          <div className="confidence-row" role="group" aria-label="Confidence from one to five">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={record.confidence === value ? "active" : ""}
                onClick={() => onUpdate({ confidence: value })}
                aria-label={`Confidence ${value} of 5`}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="confidence-caption">
            <span>Need solution</span>
            <span>Can teach it</span>
          </div>
        </div>

        <label className="drawer-section field-stack">
          Notes
          <textarea
            rows={6}
            maxLength={10000}
            value={record.notes}
            placeholder="Key invariant, mistake, or insight to remember…"
            onChange={(event) => onUpdate({ notes: event.target.value })}
          />
        </label>

        <div className="review-card">
          <div>
            <span className="note-label">Recall schedule</span>
            <p>
              Last reviewed: {formatDate(record.lastReviewedAt)}
              <br />
              Next review: {formatDate(record.reviewDueAt)}
            </p>
          </div>
          <button className="button button-small" onClick={markReviewed}>
            Reviewed today
          </button>
        </div>
      </aside>
    </div>
  );
}

function SettingsDialog({
  settings,
  user,
  cloudConfigured: isCloudConfigured,
  onClose,
  onUpdate,
  onSignIn,
  onExport,
  onImport,
  onReset,
}: {
  settings: TrackerSettings;
  user: User | null;
  cloudConfigured: boolean;
  onClose: () => void;
  onUpdate: (patch: Partial<TrackerSettings>) => void;
  onSignIn: () => void;
  onExport: () => void;
  onImport: () => void;
  onReset: () => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal settings-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close settings">
          ×
        </button>
        <p className="eyebrow">Preferences & data</p>
        <h2 id="settings-title">Your study system</h2>

        <div className="settings-section">
          <h3>Pace model</h3>
          <div className="split-fields">
            <label className="field-stack">
              Daily goal
              <input
                type="number"
                min="1"
                max="100"
                value={settings.dailyGoal}
                onChange={(event) =>
                  onUpdate({ dailyGoal: Math.max(1, Number(event.target.value) || 1) })
                }
              />
            </label>
            <label className="field-stack">
              Weekly goal
              <input
                type="number"
                min="1"
                max="700"
                value={settings.weeklyGoal}
                onChange={(event) =>
                  onUpdate({ weeklyGoal: Math.max(1, Number(event.target.value) || 1) })
                }
              />
            </label>
          </div>
          <label className="field-stack">
            Pace calculation window
            <select
              value={settings.paceWindowDays}
              onChange={(event) => onUpdate({ paceWindowDays: Number(event.target.value) })}
            >
              <option value="14">Last 14 days</option>
              <option value="28">Last 28 days</option>
              <option value="56">Last 56 days</option>
              <option value="84">Last 84 days</option>
            </select>
          </label>
          <label className="toggle-row">
            <span>
              <strong>Exclude skipped problems from ETA</strong>
              <small>Skipped work will not delay your estimated finish.</small>
            </span>
            <input
              type="checkbox"
              checked={settings.excludeSkippedFromEta}
              onChange={(event) => onUpdate({ excludeSkippedFromEta: event.target.checked })}
            />
          </label>
        </div>

        <div className="settings-section">
          <h3>Account</h3>
          {user ? (
            <div className="account-card">
              <span className="avatar">{initials(user)}</span>
              <span>
                <strong>Cloud sync is on</strong>
                <small>{user.email}</small>
              </span>
            </div>
          ) : isCloudConfigured ? (
            <div className="account-card">
              <span className="cloud-symbol">↟</span>
              <span>
                <strong>Use this tracker on any device</strong>
                <small>Each GitHub account gets private progress.</small>
              </span>
              <button className="button button-small" onClick={onSignIn}>
                Sign in
              </button>
            </div>
          ) : (
            <div className="account-card">
              <span className="cloud-symbol">⌂</span>
              <span>
                <strong>Local mode</strong>
                <small>Progress stays in this browser. Supabase is optional.</small>
              </span>
            </div>
          )}
        </div>

        <div className="settings-section">
          <h3>Progress data</h3>
          <div className="data-actions">
            <button className="button button-quiet" onClick={onExport}>
              Export backup
            </button>
            <button className="button button-quiet" onClick={onImport}>
              Import backup
            </button>
            <button className="button button-danger-quiet" onClick={onReset}>
              Clear progress
            </button>
          </div>
          <p className="privacy-note">
            The shared curriculum never changes when you reset. Only your personal
            statuses, timing, and notes are removed.
          </p>
        </div>
      </section>
    </div>
  );
}
