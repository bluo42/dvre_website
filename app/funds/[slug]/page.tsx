import Link from 'next/link';
import Cover from '@/components/Cover';
import StatusBadge from '@/components/StatusBadge';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { fundBySlug, funds, hasProjectPage, projectsForFund } from '@/lib/data';

export const generateStaticParams = () => funds.map((f) => ({ slug: f.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const f = fundBySlug(params.slug);
  return f ? { title: f.name, description: f.description } : {};
}

export default function FundPage({ params }: { params: { slug: string } }) {
  const fund = fundBySlug(params.slug);
  if (!fund) notFound();
  const list = projectsForFund(fund.slug);

  return (
    <>
      <section className="wrap fund-head">
        <div>
          <p className="eyebrow">{fund.kicker}</p>
          <h1>{fund.name}</h1>
          <p className="lede">{fund.description}</p>
          <div className="tags">{fund.pills.map((p) => <span key={p} className="tag">{p}</span>)}</div>
        </div>
        <div>
          <p className="label">Fund at a glance</p>
          <dl className="facts">
            {fund.facts.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
        </div>
      </section>

      <section className="wrap fund-projects">
        <h2 className="section-h">{fund.projectsHeading}</h2>
        {list.length ? (
          <div className="project-grid">
            {list.map((p) => {
              const inner = (
                <>
                  <Cover src={p.photos[0]} sizes="(max-width: 767px) 100vw, 50vw" />
                  <StatusBadge status={p.status} />
                  <span className="photo-card-tx"><b>{p.name}</b>{p.address && <i>{p.address}</i>}</span>
                </>
              );
              // Only completed projects with their own photos open a project page.
              return hasProjectPage(p) ? (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="photo-card project-card">{inner}</Link>
              ) : (
                <div key={p.slug} className="photo-card project-card is-static">{inner}</div>
              );
            })}
          </div>
        ) : (
          <p className="lede">{fund.comingSoon ? 'Projects will be announced here.' : 'No projects yet.'}</p>
        )}
      </section>
    </>
  );
}
