import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// IMPORTANT: This client is intended for BUILD-TIME / server-side use only.
// `SUPABASE_ANON_KEY` is read from `process.env` (not via a `PUBLIC_` prefix),
// so it is never bundled into client-side JavaScript. Astro evaluates page
// frontmatter at build time for static pages, so data is fetched during the
// build and only the rendered HTML is shipped to the browser.
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && key);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, key as string, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  : null;
