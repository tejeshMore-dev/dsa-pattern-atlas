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
import ThemeToggle from "./ThemeToggle";
import FilterSelect from "./FilterSelect";
import HeaderSettings from "./HeaderSettings";
import FilterPanel from "./FilterPanel";
import SlidingWindowStudy from "./SlidingWindowStudy";
import PatternStudy from "./PatternStudy";
import { STUDY_LESSONS } from "../lib/study-lessons";
import { COMPLEXITY_TARGETS } from "../lib/complexity-targets";
import { buildStudyPatterns, STUDY_SCOPES, type StudyScope } from "../lib/study-scopes";
import {
  applyStatus,
  buildBackup,
  createProgress,
  DEFAULT_SETTINGS,
  isSolved,
  needsRevision,
  toggleRevision,
  mergeProgress,
  parseBackup,
} from "../lib/progress";
import {
  loadLocalData,
  saveLocalProgressRecord,
  saveLocalProgressSnapshot,
  saveLocalSettings,
} from "../lib/local-db";
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

type StatusFilter = "all" | "complete" | "incomplete" | "revision";
type DifficultyFilter = "all" | Difficulty;

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Keep the teaching prototype unavailable until it is ready for release.
const STUDY_ENABLED = false;

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
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
      <h1>Preparing your DSA Pattern Atlas…</h1>
      <div className="loading-rule" />
      <p>Loading 140 patterns and your saved progress.</p>
    </main>
  );
}

export default function TrackerApp() {
  const [catalog, setCatalog] = useState<CurriculumData | null>(null);
  const [loadError, setLoadError] = useState("");
  const [progress, setProgress] = useState<ProgressMap>({});
  const [settings, setSettings] = useState<TrackerSettings>(DEFAULT_SETTINGS);
  const [localDatabaseReady, setLocalDatabaseReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cloudState, setCloudState] = useState<
    "local" | "connecting" | "synced" | "error"
  >("local");
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("all");
  const [openPatterns, setOpenPatterns] = useState<Set<number>>(new Set());
  const [showInfo, setShowInfo] = useState(false);
  const [studyScope, setStudyScope] = useState<StudyScope>("essentials");
  const importInputRef = useRef<HTMLInputElement>(null);
  const cloudTimers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dsa-pattern-atlas:study-scope");
      if (saved === "essentials" || saved === "interview" || saved === "full") {
        // Restore after hydration so the initial server and client renders agree.
        const timer = window.setTimeout(() => setStudyScope(saved), 0);
        return () => window.clearTimeout(timer);
      }
    } catch { /* Scope switching still works when storage is unavailable. */ }
  }, []);

  const selectStudyScope = (scope: StudyScope) => {
    setStudyScope(scope);
    setOpenPatterns(new Set());
    try { localStorage.setItem("dsa-pattern-atlas:study-scope", scope); } catch { /* Keep the selection for this session. */ }
  };

  useEffect(() => {
    if (!showInfo) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowInfo(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [showInfo]);

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
    let active = true;
    void loadLocalData()
      .then((localData) => {
        if (!active) return;
        setProgress(localData.progress);
        setSettings(localData.settings);
        setLocalDatabaseReady(true);
      })
      .catch((error: unknown) => {
        if (!active) return;
        setLoadError(
          error instanceof Error
            ? error.message
            : "DSA Pattern Atlas could not open its local database.",
        );
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

  const syncCloud = useCallback(
    async (activeUser: User) => {
      if (!supabase) return;
      setCloudState("connecting");
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

      const localData = await loadLocalData();
      const remote = progressFromRows(progressResult.data ?? []);
      const merged = mergeProgress(localData.progress, remote);
      setProgress(merged);
      await saveLocalProgressSnapshot(merged);

      if (settingsResult.data) {
        const remoteSettings = settingsFromRow(settingsResult.data);
        setSettings(remoteSettings);
        await saveLocalSettings(remoteSettings);
      } else {
        await supabase
          .from("user_settings")
          .upsert(settingsToRow(activeUser, localData.settings));
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
    if (!user || !localDatabaseReady) return;
    const timer = window.setTimeout(() => {
      void syncCloud(user).catch((error: unknown) => {
        setCloudState("error");
        announce(error instanceof Error ? error.message : "Cloud sync failed.");
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [announce, localDatabaseReady, user, syncCloud]);

  useEffect(() => {
    const timers = cloudTimers.current;
    return () => {
      for (const timer of timers.values()) clearTimeout(timer);
    };
  }, []);

  const saveRecord = useCallback(
    (record: ProgressRecord) => {
      setProgress((current) => ({ ...current, [record.problemId]: record }));
      void saveLocalProgressRecord(record).catch((error: unknown) => {
        announce(
          error instanceof Error ? error.message : "The local database write failed.",
        );
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

  const changeStatus = useCallback(
    (problemId: number, status: ProgressStatus) => {
      const current = progress[problemId] ?? createProgress(problemId);
      saveRecord(applyStatus(current, status));
    },
    [progress, saveRecord],
  );

  const changeRevision = (problemId: number) => {
    saveRecord(toggleRevision(progress[problemId] ?? createProgress(problemId)));
  };

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
      await Promise.all([
        saveLocalProgressSnapshot(merged),
        saveLocalSettings(backup.settings),
      ]);
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

  const problemById = useMemo(
    () => new Map(catalog?.problems.map((problem) => [problem.id, problem]) ?? []),
    [catalog],
  );
  const studyPatterns = useMemo(
    () => catalog ? buildStudyPatterns(catalog, studyScope) : [],
    [catalog, studyScope],
  );
  const scopeCounts = useMemo(() => Object.fromEntries(STUDY_SCOPES.map(({ id }) => [
    id, catalog ? new Set(buildStudyPatterns(catalog, id).flatMap(({ ids }) => ids)).size : 0,
  ])), [catalog]);
  const scopeIds = new Set(studyPatterns.flatMap(({ ids }) => ids));
  const solvedCount = [...scopeIds].filter((id) => isSolved(progress[id])).length;
  const coveredPatternCount = studyPatterns.filter(({ ids }) => ids.length > 0 && ids.every((id) => isSolved(progress[id]))).length;

  const filteredPatterns = useMemo(() => {
    if (!catalog) return [];
    const normalizedQuery = query.trim().toLowerCase();

    return studyPatterns
      .map(({ pattern, ids: baseIds }) => {
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
          if (difficultyFilter !== "all" && problem.difficulty !== difficultyFilter) {
            return false;
          }
          if (statusFilter === "revision") {
            if (!needsRevision(record)) return false;
          } else if (statusFilter !== "all") {
            if ((statusFilter === "complete") !== isSolved(record)) return false;
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
    studyPatterns,
    statusFilter,
  ]);

  const togglePattern = (number: number) => {
    setOpenPatterns((current) => {
      const next = new Set(current);
      if (next.has(number)) next.delete(number);
      else next.add(number);
      return next;
    });
  };

  const allVisibleExpanded = filteredPatterns.length > 0 && filteredPatterns.every(({ pattern }) => openPatterns.has(pattern.number));
  const toggleVisible = () => {
    setOpenPatterns((current) => {
      const next = new Set(current);
      const shouldCollapse = filteredPatterns.every(({ pattern }) => current.has(pattern.number));
      for (const { pattern } of filteredPatterns) {
        if (shouldCollapse) next.delete(pattern.number);
        else next.add(pattern.number);
      }
      return next;
    });
  };

  if (loadError) {
    return (
      <main className="error-shell">
        <p className="eyebrow">Catalog unavailable</p>
        <h1>The DSA Pattern Atlas could not open.</h1>
        <p>{loadError}</p>
        <button className="button button-primary" onClick={() => window.location.reload()}>
          Try again
        </button>
      </main>
    );
  }

  if (!catalog || !localDatabaseReady) return <LoadingScreen />;

  const activeFilterCount = [
    statusFilter !== "all",
    difficultyFilter !== "all",
  ].filter(Boolean).length;

  return (
    <>
      <a className="skip-link" href="#curriculum">
        Skip to curriculum
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DSA Pattern Atlas home">
          <span>
            <strong><span className="brand-dsa">DSA</span> Pattern Atlas</strong>
          </span>
        </a>
        <div className="completion-summary" aria-label={`${solvedCount} of ${scopeIds.size} questions complete; ${coveredPatternCount} of ${studyPatterns.length} patterns covered`}>
          <div className="question-progress"><strong>{solvedCount}<span> / {scopeIds.size}</span></strong><span>questions</span></div>
          <small className="pattern-coverage" title="A pattern is covered when all its questions in the selected study scope are complete.">{coveredPatternCount} / {studyPatterns.length} patterns covered</small>
        </div>
        <nav className="header-actions" aria-label="Account and data">
          <ThemeToggle />
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
          <HeaderSettings onAbout={() => setShowInfo(true)} onImport={() => importInputRef.current?.click()} onExport={exportProgress} />
        </nav>
      </header>

      <main id="top">
        <section className="curriculum-section" id="curriculum" aria-labelledby="curriculum-title">
          <h1 id="curriculum-title" className="curriculum-intro">Learn patterns. Recognize solutions.<span>In dependency order</span></h1>

          <div className="study-scope-row">
            <div className="study-tabs" role="group" aria-label="Study scope">
              {STUDY_SCOPES.map((scope) => (
                <button key={scope.id} aria-pressed={studyScope === scope.id} onClick={() => selectStudyScope(scope.id)}>
                  <span>{scope.label}</span><small className="scope-tab-count">{formatNumber(scopeCounts[scope.id])}</small>
                </button>
              ))}
            </div>
          </div>
          <div className="filter-bar">
            <label className="search-field">
              <span className="sr-only">Search patterns and problems</span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search patterns or questions"
              />
              {query ? (
                <button onClick={() => setQuery("")} aria-label="Clear search">
                  ×
                </button>
              ) : null}
            </label>
            <FilterPanel count={activeFilterCount} onReset={() => { setStatusFilter("all"); setDifficultyFilter("all"); }}>
            <div className="filter-panel-field"><span>Completion</span><FilterSelect label="Filter by status" value={statusFilter} onChange={(value) => setStatusFilter(value as StatusFilter)} options={[
              { value: "all", label: "All questions" },
              { value: "incomplete", label: "Incomplete", tone: "muted" },
              { value: "complete", label: "Complete", tone: "green" },
              { value: "revision", label: "Needs revision", tone: "gold" },
            ]} /></div>
            <div className="filter-panel-field"><span>Difficulty</span><FilterSelect label="Filter by difficulty" value={difficultyFilter} onChange={(value) => setDifficultyFilter(value as DifficultyFilter)} options={[
              { value: "all", label: "All difficulties" },
              { value: "Easy", label: "Easy", tone: "green" },
              { value: "Medium", label: "Medium", tone: "gold" },
              { value: "Hard", label: "Hard", tone: "coral" },
            ]} /></div>
            </FilterPanel>
            <button className="button button-small expand-toggle" disabled={!filteredPatterns.length} onClick={toggleVisible}>
              {allVisibleExpanded ? "Collapse all" : "Expand all"}
            </button>
          </div>

          {activeFilterCount > 0 && <div className="active-filter-chips" aria-label="Active filters">
            {statusFilter !== "all" && <button onClick={() => setStatusFilter("all")} aria-label="Remove completion filter">{statusFilter === "revision" ? "Needs revision" : statusFilter === "complete" ? "Complete" : "Incomplete"}<span aria-hidden="true">×</span></button>}
            {difficultyFilter !== "all" && <button onClick={() => setDifficultyFilter("all")} aria-label="Remove difficulty filter">{difficultyFilter}<span aria-hidden="true">×</span></button>}
            <span>{filteredPatterns.length} matching patterns</span>
          </div>}

          <div className="pattern-list">
            {filteredPatterns.map(({ pattern, ids }, index) => (
              <PatternCard
                key={pattern.number}
                pattern={pattern}
                displayNumber={index + 1}
                visibleIds={ids}
                problemById={problemById}
                progress={progress}
                expanded={openPatterns.has(pattern.number)}
                onToggle={() => togglePattern(pattern.number)}
                onStatus={changeStatus}
                onRevision={changeRevision}
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
          <strong>DSA Pattern Atlas</strong>
          <span>Built from the DSA Pattern Bible.</span>
        </div>
        <p>
          {formatNumber(catalog.stats.placements)} curated placements · {catalog.stats.patterns} patterns · progress owned by you
        </p>
      </footer>


      {showInfo ? (
        <div className="modal-backdrop" onMouseDown={() => setShowInfo(false)}>
          <section className="modal about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title" onMouseDown={(event) => event.stopPropagation()}>
            <button autoFocus className="modal-close" aria-label="Close information" onClick={() => setShowInfo(false)}>×</button>
            <h2 id="about-title">DSA Pattern Atlas</h2>
            <p>Recognize reusable patterns, then apply them to unfamiliar questions. Patterns follow an intended dependency order; expand one for its core idea and recognition cues.</p>
            <dl>
              <div><dt>Essentials</dt><dd>Main pattern families, fewer questions.</dd></div>
              <div><dt>Interview revision</dt><dd>Common variations for about a week of revision.</dd></div>
              <div><dt>Full</dt><dd>Complete catalog, including advanced techniques.</dd></div>
            </dl>
            <p>Questions appear once per scope. Completion carries across scopes and saves in this browser. Use Export / Import to back up or restore progress.</p>
            <p>Bookmark a question you found difficult, then choose Needs revision in the question filter. The bookmark is separate from completion; clear it whenever you feel confident.</p>
            <p className="about-credit">By <a href="https://tejeshmore.com/" target="_blank" rel="noreferrer">Tejesh More ↗</a></p>
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
  displayNumber,
  visibleIds,
  problemById,
  progress,
  expanded,
  onToggle,
  onStatus,
  onRevision,
}: {
  pattern: CurriculumPattern;
  displayNumber: number;
  visibleIds: number[];
  problemById: Map<number, CurriculumProblem>;
  progress: ProgressMap;
  expanded: boolean;
  onToggle: () => void;
  onStatus: (id: number, status: ProgressStatus) => void;
  onRevision: (id: number) => void;
}) {
  const scopeIds = visibleIds;
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
        <span className="pattern-number">{String(displayNumber).padStart(2, "0")}</span>
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
              <span className="note-label">Use when</span>
              <div className="keyword-list">
                {pattern.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>
          </div>
          {STUDY_ENABLED && pattern.number === 24 ? <SlidingWindowStudy /> : null}
          {STUDY_ENABLED && STUDY_LESSONS[pattern.number] ? <PatternStudy lesson={STUDY_LESSONS[pattern.number]} number={pattern.number} /> : null}
          <div className="problem-list" role="list">
            {!visibleIds.length ? <p className="study-description">This foundation shares its examples with the practical patterns below. Those questions are listed there once to avoid duplicate practice.</p> : null}
            {visibleIds.map((id) => {
              const problem = problemById.get(id);
              if (!problem) return null;
              const record = progress[id];
              const solvedProblem = isSolved(record);
              return (
                <div className={`problem-row status-${record?.status ?? "not_started"}`} role="listitem" key={id}>
                  <label className="solve-check" title={solvedProblem ? "Mark incomplete" : "Mark complete"}>
                    <input
                      type="checkbox"
                      checked={solvedProblem}
                      onChange={(event) =>
                        onStatus(id, event.target.checked ? "solved" : "not_started")
                      }
                      aria-label={`${solvedProblem ? "Mark incomplete" : "Mark complete"}: ${problem.title}`}
                    />
                    <span aria-hidden="true">✓</span>
                  </label>
                  <a className="problem-main" href={problem.url} target="_blank" rel="noreferrer">
                    <span className="problem-id">LC {problem.id}</span>
                    <span className="problem-title">{problem.title}</span>
                    {COMPLEXITY_TARGETS[id] ? <span className="complexity-target" title={COMPLEXITY_TARGETS[id].note}>Target: {COMPLEXITY_TARGETS[id].time} time · {COMPLEXITY_TARGETS[id].space} space</span> : null}
                  </a>
                  <button className="revision-marker" aria-pressed={needsRevision(record)} aria-label={`${needsRevision(record) ? "Unmark revision" : "Mark for revision"}: ${problem.title}`} title={needsRevision(record) ? "Needs revision — click to clear" : "Had difficulty? Mark for revision"} onClick={() => onRevision(id)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path className="revision-bookmark" d="M7 3.5h10a1 1 0 0 1 1 1v16L12 17l-6 3.5v-16a1 1 0 0 1 1-1Z" />
                      <path className="revision-bookmark-detail" d="M10 8h4M10 11h4" />
                    </svg>
                  </button>
                  <span className={difficultyClass(problem.difficulty)}>{problem.difficulty}</span>
                  <a
                    className="external-link"
                    href={problem.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${problem.title} on LeetCode`}
                  >
                    LeetCode ↗
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
