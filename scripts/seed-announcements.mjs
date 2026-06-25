#!/usr/bin/env node
// Seeds / upserts announcement rows into Supabase using the API.
//
// Requires the `public.announcements` table to already exist (apply
// supabase/migrations/0001_announcements.sql first). Uses SUPABASE_URL and
// SUPABASE_ANON_KEY from the environment.
//
// Usage: node scripts/seed-announcements.mjs

import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in the environment.');
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const rows = [
  {
    slug: 'etisios-xoros-2026',
    title: 'Ετήσιος Χορός 2026',
    excerpt:
      'Ο σύλλογος διοργανώνει τον καθιερωμένο ετήσιο χορό του. Θα ακολουθήσουν λεπτομέρειες για τον χώρο και τις προσκλήσεις.',
    href: null,
    published_at: '2026-02-15',
    is_published: true,
  },
  {
    slug: 'enarxi-eggrafon-xoreftikon',
    title: 'Έναρξη εγγραφών χορευτικών τμημάτων',
    excerpt:
      'Ξεκινούν οι εγγραφές για τα παιδικά, εφηβικά και ενήλικα χορευτικά τμήματα της νέας περιόδου.',
    href: '/xoreftika',
    published_at: '2026-01-20',
    is_published: true,
  },
  {
    slug: 'simmetoxi-festival-paradosiakon-xoron',
    title: 'Συμμετοχή σε φεστιβάλ παραδοσιακών χορών',
    excerpt:
      'Τα χορευτικά μας τμήματα συμμετέχουν σε φεστιβάλ παραδοσιακών χορών, εκπροσωπώντας τη σαρακατσάνικη παράδοση.',
    href: '/drastiriotites',
    published_at: '2025-12-05',
    is_published: true,
  },
];

const { data, error } = await supabase
  .from('announcements')
  .upsert(rows, { onConflict: 'slug' })
  .select('slug');

if (error) {
  console.error('Seed failed:', error.message);
  process.exit(1);
}

console.log(`Seeded ${data?.length ?? 0} announcement(s):`, data?.map((r) => r.slug).join(', '));
