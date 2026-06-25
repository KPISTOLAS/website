# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **static Astro 5 website** (Greek cultural association site). There is no separate backend; pages are pre-rendered to `dist/`.

### Services & commands
- Dev server: `npm run dev` → http://localhost:4321 (the only service needed for local development).
- Build static site: `npm run build` (outputs to `dist/`).
- Preview a build: `npm run preview`.
- There is no separate lint or test script defined in `package.json`; `npm run build` (Astro's type-aware build) is the de-facto check.

### Supabase announcements (non-obvious)
- Home-page announcements are sourced from a Supabase `announcements` table via `src/lib/announcements.ts`, with a graceful fallback to the static list in `src/config/site.ts` when Supabase is unavailable or the table is missing. The site always builds even if Supabase is down.
- The secret `SUPABASE_ANON_KEY` actually holds a Supabase **secret** key (`sb_secret_…`), not a public anon key. It is read via `process.env` (never a `PUBLIC_` prefix), so it is used at **build time only** and is never shipped to the browser. Do not reference it from client-side `<script>` blocks.
- The Supabase table is provisioned by `supabase/migrations/0001_announcements.sql` (schema + seed). Provisioning requires DDL, which the API keys cannot do. Run `node scripts/apply-migrations.mjs` (needs a `SUPABASE_DB_URL` connection string), or paste the SQL into the Supabase SQL editor. Once the table exists, `node scripts/seed-announcements.mjs` upserts/refreshes rows using the API key.
- Use the **Session pooler** connection string for `SUPABASE_DB_URL` (IPv4-compatible). The direct `db.<ref>.supabase.co:5432` host is often IPv6-only and may be unreachable from the VM.
- Note on secret timing: secrets added mid-run are injected into the **next** VM session, not the currently running one. If you just added `SUPABASE_DB_URL`, it becomes available on the next agent session.
