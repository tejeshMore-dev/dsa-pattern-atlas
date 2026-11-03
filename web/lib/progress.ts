import type {
  CurriculumProblem,
  ProgressBackup,
  ProgressMap,
  ProgressRecord,
  ProgressStatus,
  TrackerSettings,
} from "./types";

export const LOCAL_PROGRESS_KEY = "dsa-pattern-atlas:progress:v1";
export const LOCAL_SETTINGS_KEY = "dsa-pattern-atlas:settings:v1";

export const DEFAULT_SETTINGS: TrackerSettings = {
  dailyGoal: 1,
  weeklyGoal: 7,
  paceWindowDays: 28,
  includeReductions: true,
  excludeSkippedFromEta: true,
  theme: "light",
};

export const STATUS_LABELS: Record<ProgressStatus, string> = {
  not_started: "Not started",
  attempted: "Attempted",
  solved: "Solved",
  review: "Review due",
  skipped: "Skipped",
};

export function createProgress(
  problemId: number,
  patch: Partial<ProgressRecord> = {},
): ProgressRecord {
  return {
    problemId,
    status: "not_started",
    attempts: 0,
    minutesSpent: 0,
    confidence: null,
    notes: "",
    startedAt: null,
    solvedAt: null,
    lastReviewedAt: null,
    reviewDueAt: null,
    updatedAt: new Date().toISOString(),
    ...patch,
  };
}

export function isSolved(record?: ProgressRecord): boolean {
  return record?.status === "solved" || record?.status === "review";
}

export function needsRevision(record?: ProgressRecord): boolean {
  return Boolean(record?.reviewDueAt) || record?.status === "review";
}

export function toggleRevision(current: ProgressRecord): ProgressRecord {
  const marked = needsRevision(current);
  const now = new Date().toISOString();
  return {
    ...current,
    reviewDueAt: marked ? null : now,
    // Legacy "review" records also count as complete. Preserve that when cleared.
    status: marked && current.status === "review" ? "solved" : current.status,
    updatedAt: now,
  };
}

export function applyStatus(
  current: ProgressRecord,
  status: ProgressStatus,
): ProgressRecord {
  const now = new Date().toISOString();
  const firstActivity = status !== "not_started" && status !== "skipped";
  const newlySolved = status === "solved" && !current.solvedAt;

  return {
    ...current,
    status,
    startedAt: firstActivity ? current.startedAt ?? now : current.startedAt,
    solvedAt: newlySolved ? now : current.solvedAt,
    updatedAt: now,
  };
}

export function mergeProgress(
  local: ProgressMap,
  remote: ProgressMap,
): ProgressMap {
  const merged = { ...local };
  for (const [key, remoteRecord] of Object.entries(remote)) {
    const id = Number(key);
    const localRecord = merged[id];
    if (
      !localRecord ||
      Date.parse(remoteRecord.updatedAt) >= Date.parse(localRecord.updatedAt)
    ) {
      merged[id] = remoteRecord;
    }
  }
  return merged;
}

export function difficultyWeight(problem: CurriculumProblem): number {
  return { Easy: 1, Medium: 2, Hard: 3, Unrated: 2 }[problem.difficulty];
}

export function calculatePace(
  problems: CurriculumProblem[],
  progress: ProgressMap,
  windowDays: number,
): { solvedInWindow: number; weightedPerWeek: number } {
  const cutoff = Date.now() - windowDays * 86_400_000;
  let solvedInWindow = 0;
  let weighted = 0;
  for (const problem of problems) {
    const record = progress[problem.id];
    if (!record?.solvedAt || Date.parse(record.solvedAt) < cutoff) continue;
    solvedInWindow += 1;
    weighted += difficultyWeight(problem);
  }
  return {
    solvedInWindow,
    weightedPerWeek: weighted / (windowDays / 7),
  };
}

export function buildBackup(
  progress: ProgressMap,
  settings: TrackerSettings,
): ProgressBackup {
  return {
    format: "dsa-pattern-atlas-progress",
    version: 1,
    exportedAt: new Date().toISOString(),
    records: Object.values(progress),
    settings,
  };
}

export function parseBackup(value: unknown): {
  progress: ProgressMap;
  settings: TrackerSettings;
} {
  if (!value || typeof value !== "object") throw new Error("Invalid backup file.");
  const backup = value as Partial<ProgressBackup>;
  if (backup.format !== "dsa-pattern-atlas-progress" || backup.version !== 1) {
    throw new Error("This is not a supported Pattern Atlas backup.");
  }
  if (!Array.isArray(backup.records)) throw new Error("Backup records are missing.");

  const progress: ProgressMap = {};
  for (const record of backup.records) {
    if (!record || !Number.isInteger(record.problemId)) continue;
    progress[record.problemId] = createProgress(record.problemId, record);
  }
  return {
    progress,
    settings: { ...DEFAULT_SETTINGS, ...(backup.settings ?? {}) },
  };
}
