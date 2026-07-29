# GitHub Pages setup

The tracker is built from `web/` and published as a static site whenever `main` is pushed. The workflow automatically uses `/<repository-name>` as the asset base path for a project site and an empty base path for an `<owner>.github.io` repository.

## 1. Enable Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

Push to `main`, or run **Actions → Deploy tracker to GitHub Pages → Run workflow**. The deployment URL appears in the workflow summary after both jobs succeed.

## 2. Optional Supabase sync

The site can build without Supabase credentials for browser-only tracking. To enable accounts and cross-device sync, open **Settings → Secrets and variables → Actions** and add:

- Repository variable `NEXT_PUBLIC_SUPABASE_URL`: the Supabase project URL.
- Repository secret `NEXT_PUBLIC_SUPABASE_ANON_KEY`: the project's anonymous/public client key.

Only use the anonymous/public client key in the frontend. Never add a Supabase service-role key to GitHub Pages.

In **Supabase → Authentication → URL Configuration**, configure:

- Site URL: `https://<owner>.github.io/<repository>/`
- Redirect URL: `https://<owner>.github.io/<repository>/`
- Local redirect URL: `http://localhost:3000/`

For an `<owner>.github.io` repository, omit `/<repository>` from the URLs. If GitHub is the login provider, the GitHub OAuth application's authorization callback must be Supabase's callback URL, `https://<project-ref>.supabase.co/auth/v1/callback`, as shown in the Supabase provider settings.

## Build contract

The workflow runs `npm ci` and `npm run build:pages` in `web/`, then uploads `web/out`. The build receives:

- `NEXT_PUBLIC_BASE_PATH`
- `NEXT_PUBLIC_SUPABASE_URL` (optional)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (optional)

If the default branch is not `main`, update the branch under `on.push.branches` in `.github/workflows/deploy-pages.yml`. For a custom domain, change the base-path step to emit an empty `NEXT_PUBLIC_BASE_PATH` and configure the domain in **Settings → Pages**.

## Common failures

- **`npm ci` fails:** commit the `web/package-lock.json` that matches `web/package.json`.
- **The site loads but assets return 404:** confirm the app's build configuration reads `NEXT_PUBLIC_BASE_PATH`.
- **Login returns a redirect error:** add the exact deployed callback URL, including the repository path, to Supabase's redirect allow list.
