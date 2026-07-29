-- DSA Pattern Bible progress tracker
-- Run this file in the Supabase SQL editor or as a migration.
-- It is safe to run repeatedly.
-- Authentication is intended for verified email/GitHub accounts; keep
-- Supabase Anonymous Sign-Ins disabled (see docs/SUPABASE_SETUP.md).

begin;

create table if not exists public.user_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  leetcode_id integer not null,
  status text not null default 'not_started',
  attempts integer not null default 0,
  minutes_spent integer not null default 0,
  confidence smallint,
  notes text not null default '',
  started_at timestamptz,
  solved_at timestamptz,
  last_reviewed_at timestamptz,
  review_due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, leetcode_id),
  constraint user_progress_leetcode_id_positive check (leetcode_id > 0),
  constraint user_progress_status_valid check (
    status in ('not_started', 'attempted', 'solved', 'review', 'skipped')
  ),
  constraint user_progress_attempts_valid check (attempts between 0 and 100000),
  constraint user_progress_minutes_valid check (minutes_spent between 0 and 10000000),
  constraint user_progress_confidence_valid check (confidence is null or confidence between 1 and 5),
  constraint user_progress_notes_length check (char_length(notes) <= 10000)
);

create table if not exists public.user_settings (
  user_id uuid primary key references auth.users (id) on delete cascade,
  daily_goal integer not null default 1,
  weekly_goal integer not null default 7,
  pace_window_days integer not null default 28,
  include_reductions boolean not null default true,
  exclude_skipped_from_eta boolean not null default true,
  theme text not null default 'system',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_settings_daily_goal_valid check (daily_goal between 1 and 100),
  constraint user_settings_weekly_goal_valid check (weekly_goal between 1 and 700),
  constraint user_settings_pace_window_valid check (pace_window_days between 7 and 365),
  constraint user_settings_theme_valid check (theme in ('system', 'light', 'dark'))
);

create index if not exists user_progress_user_status_idx
  on public.user_progress (user_id, status);

create index if not exists user_progress_user_solved_at_idx
  on public.user_progress (user_id, solved_at desc)
  where solved_at is not null;

create index if not exists user_progress_user_review_due_idx
  on public.user_progress (user_id, review_due_at)
  where review_due_at is not null;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists user_progress_set_updated_at on public.user_progress;
create trigger user_progress_set_updated_at
before update on public.user_progress
for each row execute function public.set_updated_at();

drop trigger if exists user_settings_set_updated_at on public.user_settings;
create trigger user_settings_set_updated_at
before update on public.user_settings
for each row execute function public.set_updated_at();

alter table public.user_progress enable row level security;
alter table public.user_progress force row level security;
alter table public.user_settings enable row level security;
alter table public.user_settings force row level security;

drop policy if exists "Users can read their own progress" on public.user_progress;
create policy "Users can read their own progress"
on public.user_progress for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own progress" on public.user_progress;
create policy "Users can insert their own progress"
on public.user_progress for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own progress" on public.user_progress;
create policy "Users can update their own progress"
on public.user_progress for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own progress" on public.user_progress;
create policy "Users can delete their own progress"
on public.user_progress for delete
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can read their own settings" on public.user_settings;
create policy "Users can read their own settings"
on public.user_settings for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own settings" on public.user_settings;
create policy "Users can insert their own settings"
on public.user_settings for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own settings" on public.user_settings;
create policy "Users can update their own settings"
on public.user_settings for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own settings" on public.user_settings;
create policy "Users can delete their own settings"
on public.user_settings for delete
to authenticated
using ((select auth.uid()) = user_id);

-- A deliberately narrow reset endpoint. It cannot choose another user, and the
-- confirmation token prevents an accidental one-click call from clearing data.
create or replace function public.reset_my_progress(p_confirmation text)
returns integer
language plpgsql
security invoker
set search_path = ''
as $$
declare
  deleted_count integer;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if p_confirmation is distinct from 'RESET' then
    raise exception 'Pass RESET to confirm progress deletion';
  end if;

  delete from public.user_progress
  where user_id = auth.uid();

  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

revoke all on table public.user_progress from public, anon;
revoke all on table public.user_settings from public, anon;
grant select, insert, update, delete on table public.user_progress to authenticated;
grant select, insert, update, delete on table public.user_settings to authenticated;

revoke all on function public.set_updated_at() from public, anon, authenticated;
revoke all on function public.reset_my_progress(text) from public, anon;
grant execute on function public.reset_my_progress(text) to authenticated;

commit;
