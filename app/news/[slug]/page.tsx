import Link from 'next/link';
import Cover from '@/components/Cover';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fundByTag, photos, showNews, site } from '@/lib/data';
import { formatDate, getPost, getPosts } from '@/lib/news';

export const generateStaticParams = () => (showNews ? getPosts().map((p) => ({ slug: p.slug })) : []);

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = showNews ? getPost(params.slug) : undefined;
  if (!post) notFound();
  const fund = fundByTag(post.fund);
  const image = post.image ?? fund?.photo ?? photos.pasadena;
  const others = getPosts().filter((p) => p.slug !== post.slug);
  const sameFund = others.filter((p) => p.fund === post.fund).slice(0, 3);

  return (
    <article>
      <section className="wrap post-top">
        <div>
          <Link href="/news" className="back">All updates</Link>
          <div className="tags"><span className="tag tag-solid">{post.category}</span><span className="tag">{post.fund}</span></div>
          <h1>{post.title}</h1>
          <span className="meta">{formatDate(post.date)}</span>
        </div>
        <div className="post-img"><Cover src={image} sizes="(max-width: 767px) 100vw, 50vw" priority /></div>
      </section>

      <section className="band-white">
        <div className="wrap post-body">
          <div>
            <p className="dateline">{fund?.dateline ?? 'LOS ANGELES, CA'} — {formatDate(post.date, 'long').toUpperCase()}</p>
            <div className="post-text">{post.paragraphs.map((t, i) => <p key={i}>{t}</p>)}</div>
          </div>
          <aside>
            {fund && (
              <>
                <p className="label label-dark">Part of</p>
                <Link href={`/funds/${fund.slug}`} className="fund-mini">
                  <span className="fund-mini-img"><Cover src={fund.photo} sizes="(max-width: 767px) 100vw, 33vw" /></span>
                  <span className="fund-mini-tx">
                    <b>{fund.name}</b>
                    <small>{fund.facts[0][1]} · {fund.facts[1]?.[1]}</small>
                    <em>View fund</em>
                  </span>
                </Link>
              </>
            )}
            {sameFund.length > 0 && (
              <div className="more-fund">
                <p className="label label-dark">More from this fund</p>
                {sameFund.map((p) => <Link key={p.slug} href={`/news/${p.slug}`}>{p.title}</Link>)}
              </div>
            )}
          </aside>
        </div>
        <div className="wrap boilerplate"><b>About DVRE Partners</b> — {site.about}</div>
      </section>

      {others.length > 0 && (
        <section className="wrap more-updates">
          <p className="label">More updates</p>
          <div className="more-grid">
            {others.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`}>
                <span className="more-img"><Cover src={p.image ?? fundByTag(p.fund)?.photo ?? photos.pasadena} sizes="(max-width: 767px) 100vw, 33vw" /></span>
                <span className="meta">{formatDate(p.date)}</span>
                <b>{p.title}</b>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
