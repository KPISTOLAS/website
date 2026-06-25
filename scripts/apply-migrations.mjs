#!/usr/bin/env node
// Applies SQL migrations in supabase/migrations/ to the Supabase Postgres
// database. Requires a SUPABASE_DB_URL connection string (Project Settings >
// Database > Connection string). This performs DDL, which the Supabase API
// keys cannot do.
//
// Usage: node scripts/apply-migrations.mjs

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import pg from 'pg';

const connectionString = process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error(
    'Missing SUPABASE_DB_URL. Set it to your Supabase Postgres connection string ' +
      '(Project Settings > Database > Connection string).'
  );
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(here, '..', 'supabase', 'migrations');

const files = (await readdir(migrationsDir)).filter((f) => f.endsWith('.sql')).sort();

if (files.length === 0) {
  console.log('No .sql migrations found in supabase/migrations/.');
  process.exit(0);
}

const client = new pg.Client({
  connectionString,
  // Supabase requires TLS; relax cert verification to match repo posture.
  ssl: { rejectUnauthorized: false },
});

await client.connect();
try {
  for (const file of files) {
    const sql = await readFile(join(migrationsDir, file), 'utf8');
    console.log(`Applying ${file} ...`);
    await client.query(sql);
    console.log(`  done.`);
  }
  console.log('All migrations applied successfully.');
} finally {
  await client.end();
}
