'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export type FeedItem = {
  slug: string; title: string; date: string; dateShort: string; dateMonthDay: string;
  year: number; category: string; fund: string; excerpt: string; image: string;
};

const FILTERS = [
  ['all', 'All'], ['Acquisition', 'Acquisitions'], ['Financing', 'Financing'],
  ['Construction', 'Construction'], ['Completion', 'Completions'],
] as const;

export default function NewsFeed({ items }: { items: FeedItem[] }) {
  const [filter, setFilter] = useState<string>('all');

  const grouped = useMemo(() => {
    const list = filter === 'all' ? items.slice(1) : items.filter((i) => i.category === filter);
    const by = new Map<number, FeedItem[]>();
    list.forEach((i) => by.set(i.year, [...(by.get(i.year) ?? []), i]));
    return [...by.entries()].sort((a, b) => b[0] - a[0]);
  }, [items, filter]);

  if (!items.length) {
    return (
      <div className="news-empty">
        <p className="news-empty-h">Updates coming soon.</p>
        <p>Acquisitions, financings and project milestones will be posted here.</p>
      </div>
    );
  }

  const f = items[0];
  return (
    <>
      <Link href={`/news/${f.slug}`} className="news-feat">
        <div className="news-feat-img" style={{ backgroundImage: `url(${f.image})` }} />
        <div className="news-feat-tx">
          <p className="latest">Latest</p>
          <div className="tags"><span className="tag tag-solid">{f.category}</span><span className="tag">{f.fund}</span></div>
          <h2>{f.title}</h2>
          <p className="news-ex">{f.excerpt}</p>
          <span className="meta">{f.date}</span>
          <span className="read-more">Read more</span>
        </div>
      </Link>

      <div className="news-bar">
        <div className="filters" role="group" aria-label="Filter updates">
          {FILTERS.map(([k, label]) => (
            <button key={k} className={filter === k ? 'on' : ''} aria-pressed={filter === k} onClick={() => setFilter(k)}>{label}</button>
          ))}
        </div>
        <span className="meta">{items.length} {items.length === 1 ? 'update' : 'updates'}</span>
      </div>

      {grouped.length === 0 && <p className="news-none">No other updates in this category yet.</p>}
      {grouped.map(([year, list]) => (
        <section key={year}>
          <p className="news-year">{year}</p>
          <div className="news-tl">
            {list.map((i) => (
              <Link key={i.slug} href={`/news/${i.slug}`} className="news-it">
                <div>
                  <span className="meta">{i.dateMonthDay}</span>
                  <span className="tag">{i.category}</span>
                  <b>{i.title}</b>
                  <span className="meta">{i.fund}</span>
                </div>
                <div className="news-th" style={{ backgroundImage: `url(${i.image})` }} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
