import Link from 'next/link';
import Cover from '@/components/Cover';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fundBySlug, hasProjectPage, projects } from '@/lib/data';

export const generateStaticParams = () => projects.filter(hasProjectPage).map((p) => ({ slug: p.slug }));
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p || !hasProjectPage(p)) notFound();
  const fund = fundBySlug(p.fund)!;
  const facts: [string, string][] = [
    ['Fund', fund.name],
    ['Status', p.status],
    ...(p.units ? [['Units', p.units] as [string, string]] : []),
  ];

  return (
    <>
      <section className="banner banner-tall">
        <Cover src={p.photos[0]} sizes="100vw" priority />
        <div className="wrap banner-copy">
          <Link href={`/funds/${fund.slug}`} className="back">{fund.name}</Link>
          <h1>{p.name}</h1>
          <p className="eyebrow">{p.status}{p.renderings ? ' · Renderings' : ''}</p>
        </div>
      </section>

      <section className="wrap split split-top">
        <div>
          <p className="label">Overview</p>
          <p className="lede lede-lg">{p.summary}</p>
        </div>
        <dl className="facts">
          {facts.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
      </section>

      {p.renderings && <p className="wrap render-note">Images are renderings of the planned homes.</p>}
      {p.photos.length > 1 && (
        <section className="wrap gallery">
          {p.photos.slice(1).map((src) => (
            <div key={src} className="gallery-item"><Cover src={src} alt={`${p.name} ${p.renderings ? 'rendering' : 'photo'}`} sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
          ))}
        </section>
      )}
    </>
  );
}
