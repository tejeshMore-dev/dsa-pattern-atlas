# Pattern Atlas

Pattern Atlas is a dependency-ordered DSA curriculum and progress tracker for interview preparation. It organizes problems by reusable algorithmic patterns instead of by data-structure chapters, then helps each learner record attempts, notes, review dates, pace, and completion.

The repository contains both the complete [DSA Pattern Bible](./DSA_PATTERN_BIBLE.md) and a deployable web application.

## At a glance

| Curriculum | Coverage |
| --- | ---: |
| Patterns | 140 |
| Unique LeetCode problems | 1,197 |
| Total pattern placements | 2,036 |
| Representative placements | 1,315 |
| Reduction placements | 721 |

Problems that appear under multiple patterns are deduplicated by LeetCode number. Solving a problem once updates it everywhere in the tracker.

## Features

- Dependency-ordered, pattern-first DSA curriculum
- Direct LeetCode link for every problem
- Core representative set and full curriculum modes
- Statuses for not started, attempted, solved, review due, and skipped
- Attempts, time spent, confidence, personal notes, and review scheduling
- Search by pattern, keyword, problem name, or LeetCode number
- Filters for status, difficulty, and representative/reduction role
- Progress percentage, active work, review queue, and estimated finish date
- Persistent browser IndexedDB with no account or backend required
- JSON backup and merge-safe import
- Optional GitHub sign-in and private cross-device sync through Supabase
- Static GitHub Pages deployment workflow

## How progress tracking works

Signed-out progress is stored in an IndexedDB database named `dsa-pattern-atlas` inside the current browser. The tracker remains fully usable without Supabase or any account. Existing progress from the earlier `localStorage` version is migrated automatically the first time the updated app opens.

The estimated completion date uses a rolling pace window and difficulty weights:

| Difficulty | Pace weight |
| --- | ---: |
| Easy | 1 point |
| Medium | 2 points |
| Hard | 3 points |

The estimate becomes available after at least five problems have been solved inside the selected pace window. Skipped problems can be excluded from the estimate. Export a JSON backup before clearing browser data or moving to another device.

When Supabase is configured, every authenticated user receives separate progress rows protected by Row Level Security. Local and cloud records are merged using their latest update timestamps.

## Technology

- Next.js 16 and React 19
- TypeScript
- vinext/Vite for local and worker builds
- Static Next.js export for GitHub Pages
- Supabase Auth and PostgreSQL for optional multi-user sync
- Plain CSS with no UI framework dependency

## Prerequisites

- [Node.js](https://nodejs.org/) 22 LTS, version 22.13.0 or newer (Node 23+ is not currently supported)
- npm, included with Node.js
- Git, if cloning or contributing

Check the installed versions:

```bash
node --version
npm --version
git --version
```

## Run locally

Clone the repository and install the web dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/dsa-pattern-atlas.git
cd dsa-pattern-atlas/web
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are needed for local-only progress tracking. Stop the development server with `Ctrl+C`.

### Windows PowerShell

If PowerShell blocks `npm.ps1`, use the Windows command shim:

```powershell
cd web
npm.cmd ci
npm.cmd run dev
```

Alternatively, change PowerShell's execution policy only if you understand and accept the security implications.

## Optional Supabase account sync

Supabase is needed only when multiple people need private accounts or one person wants progress synchronized across browsers and devices.

### 1. Create the database

1. Create a Supabase project.
2. Open its SQL Editor.
3. Run [`supabase/schema.sql`](./supabase/schema.sql).
4. Keep anonymous sign-ins disabled.

The schema creates `user_progress` and `user_settings`, validation constraints, timestamp triggers, indexes, user-only CRUD policies, and a caller-scoped reset function.

### 2. Configure GitHub authentication

1. Create a GitHub OAuth App under **GitHub Settings > Developer settings > OAuth Apps**.
2. Copy the callback URL shown by **Supabase Authentication > Providers > GitHub** into the OAuth App's authorization callback field. It normally looks like:

   ```text
   https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback
   ```

3. Add the GitHub OAuth client ID and secret to the Supabase provider settings. Never add the OAuth secret to this repository.
4. Add these URLs under **Supabase Authentication > URL Configuration**:

   ```text
   http://localhost:3000/
   https://YOUR_USERNAME.github.io/dsa-pattern-atlas/
   ```

Use your exact deployed URL if the repository name or domain is different.

### 3. Configure local environment variables

Create `web/.env.local`:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_OR_PUBLISHABLE_KEY
```

Despite the environment variable's legacy `ANON_KEY` name, a current Supabase publishable key can be used. Never place a secret key or legacy `service_role` key in browser code, `.env.local`, or GitHub Actions.

Restart the development server after changing environment variables. The header should offer **Sign in to sync** when Supabase is configured correctly.

See [docs/SUPABASE_SETUP.md](./docs/SUPABASE_SETUP.md) for the complete authentication and security checklist.

## Deploy to GitHub Pages

The included [GitHub Actions workflow](./.github/workflows/deploy-pages.yml) builds and publishes the static application whenever `main` is pushed.

### 1. Push the repository

Create an empty GitHub repository named `dsa-pattern-atlas`, then run from the project root:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dsa-pattern-atlas.git
git push -u origin main
```

If `origin` already exists, inspect it with `git remote -v` instead of adding it again.

### 2. Enable Pages

In the GitHub repository:

1. Open **Settings > Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Push to `main`, or manually run **Deploy tracker to GitHub Pages** from the Actions tab.

For a project repository, the expected address is:

```text
https://YOUR_USERNAME.github.io/dsa-pattern-atlas/
```

The workflow derives the repository base path automatically, so static assets and curriculum data work under the `/dsa-pattern-atlas` path.

### 3. Optional cloud credentials

To enable Supabase in the deployed app, add these under **Settings > Secrets and variables > Actions**:

| GitHub setting | Name | Value |
| --- | --- | --- |
| Repository variable | `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| Repository secret | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public/publishable client key |

Do not use a service-role or secret Supabase key. GitHub Pages is a client-side application and cannot protect server credentials.

See [docs/GITHUB_PAGES.md](./docs/GITHUB_PAGES.md) for custom-domain and deployment troubleshooting details.

## Available commands

Run these commands from `web/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint across the web project |
| `npm test` | Verify the committed curriculum and run catalog tests |
| `npm run build` | Build the vinext worker version |
| `npm run build:pages` | Produce the static GitHub Pages site in `web/out/` |
| `npm run catalog:verify` | Reparse the Bible and verify committed catalog integrity offline |
| `npm run catalog:refresh` | Refresh difficulty metadata and regenerate the catalog using the LeetCode API |

For repeatable CI-style verification:

```bash
cd web
npm ci
npm run lint
npm test
npm run build:pages
```

## Updating the curriculum

[`DSA_PATTERN_BIBLE.md`](./DSA_PATTERN_BIBLE.md) is the canonical human-readable source. The web app consumes the generated [`web/public/data/curriculum.json`](./web/public/data/curriculum.json).

After editing the Bible, regenerate and verify the catalog:

```bash
cd web
npm run catalog:refresh
npm test
```

`catalog:refresh` requires internet access because it reads current LeetCode difficulty metadata. `catalog:verify` is deterministic and works offline against the committed catalog.

The generator checks the expected pattern and problem counts, source ordering, relationship integrity, LeetCode IDs and URLs, representative/reduction roles, and duplicate memberships.

## Project structure

```text
dsa-pattern-atlas/
|-- DSA_PATTERN_BIBLE.md          # Canonical 140-pattern handbook
|-- README.md                     # Project setup and usage guide
|-- .github/workflows/
|   `-- deploy-pages.yml          # Automatic GitHub Pages deployment
|-- docs/
|   |-- GITHUB_PAGES.md           # Detailed hosting guide
|   `-- SUPABASE_SETUP.md         # Auth, RLS, and security guide
|-- supabase/
|   `-- schema.sql                # Optional multi-user database schema
`-- web/
    |-- app/                      # Next.js tracker interface
    |-- lib/                      # Progress, types, and Supabase integration
    |-- public/data/
    |   `-- curriculum.json       # Generated browser catalog
    |-- scripts/
    |   `-- generate-curriculum.mjs
    |-- tests/                    # Catalog integrity tests
    |-- next.config.ts            # Static export and Pages base path
    `-- package.json
```

## Privacy and data ownership

- Local mode sends no progress data to an application backend.
- IndexedDB storage is specific to the current browser profile and site origin.
- Exported JSON files contain personal notes and study history; store them accordingly.
- Supabase mode stores only progress and tracker preferences for the authenticated user.
- Row Level Security prevents users from accessing another user's rows.
- The tracker does not expose a reset-progress action. Export and import remain available from the settings panel.

Before a public launch with accounts, test with two separate users and confirm that neither can read or modify the other's data.

## Troubleshooting

### `npm` is blocked in PowerShell

Use `npm.cmd` instead:

```powershell
npm.cmd ci
npm.cmd run dev
```

### Port 3000 is already in use

Stop the existing process with `Ctrl+C`, or follow the alternate URL printed by the development server if it selects another port. Add that exact URL to the Supabase redirect allow list when testing authentication.

### Progress disappeared

Local progress belongs to the exact browser profile and site origin. `localhost`, a GitHub Pages URL, another browser, and private browsing all use separate IndexedDB databases. Import a JSON backup or enable Supabase sync to carry progress between them.

To inspect the local database in Chrome or Edge, open Developer Tools and select **Application > IndexedDB > dsa-pattern-atlas**.

### GitHub Pages shows a blank page or asset 404 errors

Confirm that Pages uses **GitHub Actions**, the workflow completed successfully, and the repository was not renamed without redeploying. The workflow sets `NEXT_PUBLIC_BASE_PATH` from the current repository name.

### GitHub sign-in returns a redirect error

Add the exact local and production application URLs to the Supabase redirect allow list. The GitHub OAuth App itself must use Supabase's `/auth/v1/callback` URL, not the GitHub Pages URL, as its authorization callback.

### Curriculum verification fails

Run the command from `web/` and confirm that `DSA_PATTERN_BIBLE.md` exists at the repository root:

```bash
npm run catalog:verify
```

If the Bible was intentionally edited, run `npm run catalog:refresh` before testing.

## Cost and hosting

The application has no required paid backend. Local mode runs entirely on your computer, and the generated app is a static site. Optional hosting, custom domains, and Supabase sync remain subject to the current quotas and pricing of the providers you choose.

## Contributing

When adding or changing a pattern:

1. Edit `DSA_PATTERN_BIBLE.md` while preserving its documented pattern format.
2. Regenerate `web/public/data/curriculum.json`.
3. Run lint, tests, and the Pages build.
4. Commit the handbook and generated catalog together.

Keep representative problems ordered from easy to hard, use direct canonical LeetCode links, and reserve reduction lists for problems whose structure genuinely maps to the pattern.

## Disclaimer

Pattern Atlas is an independent educational project and is not affiliated with or endorsed by LeetCode. Problem names and links are included for study navigation; problem statements remain on their respective platform.
