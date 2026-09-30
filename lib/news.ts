import fs from 'node:fs';
import path from 'node:path';

export const CATEGORIES = ['Acquisition', 'Financing', 'Construction', 'Completion'] as const;
export type Category = (typeof CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  date: string;      // YYYY-MM-DD
  category: Category;
  fund: string;      // Must match a fund "tag" in lib/data.ts, e.g. "Pasadena Fund"
  excerpt: string;
  image?: string;    // Optional; falls back to the fund's photo
  paragraphs: string[];
};

const DIR = path.join(process.cwd(), 'content', 'news');

/** Tiny front-matter reader: `key: value` lines between --- markers, then paragraphs. */
function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`content/news/${file} is missing its --- header block`);
  const meta: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  const category = meta.category as Category;
  if (!CATEGORIES.includes(category)) {
    throw new Error(`content/news/${file}: category must be one of ${CATEGORIES.join(', ')}`);
  }
  return {
    slug: file.replace(/\.md$/, ''),
    title: meta.title ?? '',
    date: meta.date ?? '',
    category,
    fund: meta.fund ?? '',
    excerpt: meta.excerpt ?? '',
    image: meta.image || undefined,
    paragraphs: m[2].split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export function formatDate(iso: string, style: 'short' | 'long' = 'short') {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: style === 'long' ? 'long' : 'short', day: 'numeric', year: 'numeric' });
}
