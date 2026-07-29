import { createClient, type User } from "@supabase/supabase-js";
import type { ProgressMap, ProgressRecord, TrackerSettings } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const cloudConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = cloudConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

type ProgressRow = {
  leetcode_id: number;
  status: ProgressRecord["status"];
  attempts: number;
  minutes_spent: number;
  confidence: number | null;
  notes: string;
  started_at: string | null;
  solved_at: string | null;
  last_reviewed_at: string | null;
  review_due_at: string | null;
  updated_at: string;
};

export function progressFromRows(rows: ProgressRow[]): ProgressMap {
  return Object.fromEntries(
    rows.map((row) => [
      row.leetcode_id,
      {
        problemId: row.leetcode_id,
        status: row.status,
        attempts: row.attempts,
        minutesSpent: row.minutes_spent,
        confidence: row.confidence,
        notes: row.notes,
        startedAt: row.started_at,
        solvedAt: row.solved_at,
        lastReviewedAt: row.last_reviewed_at,
        reviewDueAt: row.review_due_at,
        updatedAt: row.updated_at,
      },
    ]),
  );
}

export function progressToRow(user: User, record: ProgressRecord) {
  return {
    user_id: user.id,
    leetcode_id: record.problemId,
    status: record.status,
    attempts: record.attempts,
    minutes_spent: record.minutesSpent,
    confidence: record.confidence,
    notes: record.notes.slice(0, 10_000),
    started_at: record.startedAt,
    solved_at: record.solvedAt,
    last_reviewed_at: record.lastReviewedAt,
    review_due_at: record.reviewDueAt,
    updated_at: record.updatedAt,
  };
}

export function settingsFromRow(row: Record<string, unknown>): TrackerSettings {
  return {
    dailyGoal: Number(row.daily_goal ?? 1),
    weeklyGoal: Number(row.weekly_goal ?? 7),
    paceWindowDays: Number(row.pace_window_days ?? 28),
    includeReductions: Boolean(row.include_reductions ?? true),
    excludeSkippedFromEta: Boolean(row.exclude_skipped_from_eta ?? true),
    theme: (row.theme as TrackerSettings["theme"]) ?? "light",
  };
}

export function settingsToRow(user: User, settings: TrackerSettings) {
  return {
    user_id: user.id,
    daily_goal: settings.dailyGoal,
    weekly_goal: settings.weeklyGoal,
    pace_window_days: settings.paceWindowDays,
    include_reductions: settings.includeReductions,
    exclude_skipped_from_eta: settings.excludeSkippedFromEta,
    theme: settings.theme,
  };
}
