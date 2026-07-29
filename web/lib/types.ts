export type Difficulty = "Easy" | "Medium" | "Hard" | "Unrated";

export type ProgressStatus =
  | "not_started"
  | "attempted"
  | "solved"
  | "review"
  | "skipped";

export type ProblemRole = "representative" | "reduction";

export interface ProblemMembership {
  patternNumber: number;
  role: ProblemRole;
}

export interface CurriculumProblem {
  id: number;
  title: string;
  url: string;
  difficulty: Difficulty;
  memberships: ProblemMembership[];
}

export interface CurriculumPattern {
  number: number;
  name: string;
  category: string;
  difficulty: string;
  keywords: string[];
  coreIdea: string;
  prerequisites: string[];
  commonAlgorithms: string[];
  relatedPatterns: string[];
  problemIds: number[];
  representativeIds: number[];
  reductionIds: number[];
}

export interface CurriculumData {
  generatedAt: string;
  stats: {
    patterns: number;
    placements: number;
    uniqueProblems: number;
    representativePlacements: number;
    reductionPlacements: number;
  };
  patterns: CurriculumPattern[];
  problems: CurriculumProblem[];
}

export interface ProgressRecord {
  problemId: number;
  status: ProgressStatus;
  attempts: number;
  minutesSpent: number;
  confidence: number | null;
  notes: string;
  startedAt: string | null;
  solvedAt: string | null;
  lastReviewedAt: string | null;
  reviewDueAt: string | null;
  updatedAt: string;
}

export type ProgressMap = Record<number, ProgressRecord>;

export interface TrackerSettings {
  dailyGoal: number;
  weeklyGoal: number;
  paceWindowDays: number;
  includeReductions: boolean;
  excludeSkippedFromEta: boolean;
  theme: "system" | "light" | "dark";
}

export interface ProgressBackup {
  format: "dsa-pattern-atlas-progress";
  version: 1;
  exportedAt: string;
  records: ProgressRecord[];
  settings: TrackerSettings;
}
