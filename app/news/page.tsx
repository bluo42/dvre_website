import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsFeed, { type FeedItem } from '@/components/NewsFeed';
import { fundByTag, photos, showNews } from '@/lib/data';
import { formatDate, getPosts } from '@/lib/news';

export const metadata: Metadata = { title: 'News', description: "Acquisitions, financings and milestones across DVRE's funds." };

export default function News() {
  if (!showNews) notFound();
  const items: FeedItem[] = getPosts().map((p) => {
    const d = new Date(p.date + 'T12:00:00');
    return {
      slug: p.slug, title: p.title, category: p.category, fund: p.fund, excerpt: p.excerpt,
      date: formatDate(p.date), dateShort: formatDate(p.date),
      dateMonthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      year: d.getFullYear(),
      image: p.image ?? fundByTag(p.fund)?.photo ?? photos.pasadena,
    };
  });

  return (
    <section className="wrap news-page">
      <p className="eyebrow">News</p>
      <h1>Project updates</h1>
      <p className="lede news-sub">Acquisitions, financings and milestones across DVRE&apos;s funds.</p>
      <NewsFeed items={items} />
    </section>
  );
}
