# Optional multi-user progress sync

The tracker can run without Supabase; each browser then keeps independent local progress. Add Supabase only when users need accounts and cross-device sync. The curriculum remains a static asset, while Supabase stores only rows that users change.

## 1. Create and configure the project

1. Create a free Supabase project.
2. Open **SQL Editor**, paste [`../supabase/schema.sql`](../supabase/schema.sql), and run it. The script is idempotent, so rerunning it is safe.
3. In **Authentication → URL Configuration**, set the production **Site URL** to your GitHub Pages URL:

   ```text
   https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/
   ```

4. Add every exact callback origin/path used by the app to **Redirect URLs**, including local development and GitHub Pages:

   ```text
   http://localhost:3000/**
   http://127.0.0.1:3000/**
   https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/**
   ```

   If the local server uses a different port, add that exact port. Keep production URLs narrow; do not use a wildcard domain.

## 2. Choose a sign-in method

### Email

Enable **Authentication → Providers → Email**. Magic links are the simplest option. During testing, confirm that the email link returns to an allow-listed redirect URL. Supabase's built-in email sender is rate-limited; configure custom SMTP before relying on email for a larger public deployment.

### GitHub OAuth

1. Create a GitHub OAuth App under **GitHub Settings → Developer settings → OAuth Apps**.
2. Use the GitHub Pages URL as the **Homepage URL**.
3. Supabase shows the provider callback URL under **Authentication → Providers → GitHub**. Copy that exact Supabase callback URL into the OAuth App's **Authorization callback URL**. It normally has this form:

   ```text
   https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback
   ```

4. Paste the GitHub OAuth client ID and client secret into the Supabase GitHub provider settings. The client secret belongs in Supabase only, never in this repository.

The OAuth provider callback is the Supabase URL above. The post-login destination is controlled separately by Supabase's Site URL/Redirect URLs and the frontend's `redirectTo` value.

## 3. Configure the frontend safely

Expose only these two public values to browser code or GitHub Actions build variables:

```text
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
```

The current publishable key is designed for browser code and replaces the legacy public `anon` key; either has low privileges and relies on Row Level Security (RLS). Prefer the publishable key for a new project. **Never expose or commit a secret key or legacy `service_role` key**: those bypass RLS and belong only in a trusted server environment. GitHub Pages is entirely client-side, so it has no legitimate use for either one. See Supabase's [API key guide](https://supabase.com/docs/guides/getting-started/api-keys).

Do not commit a real OAuth client secret either. GitHub OAuth secrets are stored in the Supabase dashboard.

## 4. Data and security model

- `user_progress` uses `(user_id, leetcode_id)` as its primary key, so one solved problem stays synchronized everywhere it appears in the Bible.
- `user_settings` stores one preference row per account.
- Both user IDs reference `auth.users` with `on delete cascade`, so deleting an account removes its tracker data.
- RLS is enabled and forced. Authenticated users can select, insert, update, and delete only rows whose `user_id` equals `auth.uid()`.
- Signed-out requests using the `anon` database role have no table privileges. They can still use the tracker's local-only mode.
- Database checks constrain status, counters, confidence, notes length, goals, and theme values.
- `updated_at` is maintained by database triggers; clients should not use their own clock for it.

When writing progress, obtain the signed-in user's ID from the active Supabase session and use it as `user_id`. Never accept a user ID copied from a URL or another browser-controlled field.

Keep Supabase **Anonymous Sign-Ins** disabled for this app. An anonymous Auth user is different from a signed-out `anon` database request and receives the `authenticated` role. The intended account methods are verified email and GitHub OAuth.

## 5. Safe reset

Export the user's progress to JSON in the app before resetting it. Then call the authenticated RPC with the exact confirmation string:

```js
const { data: deletedRows, error } = await supabase.rpc('reset_my_progress', {
  p_confirmation: 'RESET'
})
```

The function rejects unauthenticated calls and cannot receive or target another user's ID. RLS remains active because it is a `security invoker` function. It deletes progress only; preferences and the account remain intact. A full account deletion should be a separate, server-admin workflow and should require fresh authentication.

## 6. Pre-launch verification

Use two test accounts and verify all of the following before publishing:

- Each account can create, read, update, and delete its own progress and settings.
- Neither account can read or mutate rows belonging to the other, even when requests are made directly through the REST API.
- A signed-out request cannot access either table or invoke the reset function.
- OAuth returns to both localhost and the repository's exact GitHub Pages path.
- No service-role key or OAuth secret appears in source files, browser bundles, Actions logs, or repository history.
