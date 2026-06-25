-- Announcements table for the Ο ΦΛΑΜΠΟΥΡΑΣ website.
-- Moves announcement content out of `src/config/site.ts` and into Supabase.
--
-- Apply with the Supabase SQL editor, or via psql:
--   psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_announcements.sql

create table if not exists public.announcements (
  id           bigint generated always as identity primary key,
  slug         text not null unique,
  title        text not null,
  excerpt      text not null,
  href         text,
  published_at date not null default current_date,
  is_published boolean not null default true,
  created_at   timestamptz not null default now()
);

create index if not exists announcements_published_at_idx
  on public.announcements (published_at desc);

-- Row Level Security: allow public read access to published announcements only.
-- (The site fetches at build time with a secret key, which bypasses RLS, but
-- this keeps the table safe if a public/anon key is ever used client-side.)
alter table public.announcements enable row level security;

drop policy if exists "Public can read published announcements" on public.announcements;
create policy "Public can read published announcements"
  on public.announcements
  for select
  to anon, authenticated
  using (is_published = true);

-- Seed data (idempotent via slug).
insert into public.announcements (slug, title, excerpt, href, published_at, is_published) values
  (
    'etisios-xoros-2026',
    'Ετήσιος Χορός 2026',
    'Ο σύλλογος διοργανώνει τον καθιερωμένο ετήσιο χορό του. Θα ακολουθήσουν λεπτομέρειες για τον χώρο και τις προσκλήσεις.',
    null,
    '2026-02-15',
    true
  ),
  (
    'enarxi-eggrafon-xoreftikon',
    'Έναρξη εγγραφών χορευτικών τμημάτων',
    'Ξεκινούν οι εγγραφές για τα παιδικά, εφηβικά και ενήλικα χορευτικά τμήματα της νέας περιόδου.',
    '/xoreftika',
    '2026-01-20',
    true
  ),
  (
    'simmetoxi-festival-paradosiakon-xoron',
    'Συμμετοχή σε φεστιβάλ παραδοσιακών χορών',
    'Τα χορευτικά μας τμήματα συμμετέχουν σε φεστιβάλ παραδοσιακών χορών, εκπροσωπώντας τη σαρακατσάνικη παράδοση.',
    '/drastiriotites',
    '2025-12-05',
    true
  )
on conflict (slug) do nothing;
