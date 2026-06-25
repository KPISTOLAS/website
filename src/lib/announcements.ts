import { supabase } from './supabase';
import { announcements as fallbackAnnouncements, type Announcement } from '../config/site';

interface AnnouncementRow {
  title: string;
  excerpt: string;
  href: string | null;
  published_at: string;
}

/**
 * Returns announcements for the home page.
 *
 * Source of truth is the Supabase `announcements` table. If Supabase is not
 * configured, the table is missing, or the request fails, we gracefully fall
 * back to the static list in `src/config/site.ts` so the site always builds.
 */
export async function getAnnouncements(): Promise<Announcement[]> {
  if (!supabase) {
    return fallbackAnnouncements;
  }

  const { data, error } = await supabase
    .from('announcements')
    .select('title, excerpt, href, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error || !data) {
    console.warn(
      `[announcements] Falling back to static data (Supabase error: ${error?.message ?? 'no data'})`
    );
    return fallbackAnnouncements;
  }

  return (data as AnnouncementRow[]).map((row) => ({
    title: row.title,
    excerpt: row.excerpt,
    href: row.href ?? undefined,
    date: row.published_at,
  }));
}
