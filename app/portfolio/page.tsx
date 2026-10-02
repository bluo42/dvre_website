import Link from 'next/link';
import type { Metadata } from 'next';
import Cover from '@/components/Cover';
import { funds } from '@/lib/data';

export const metadata: Metadata = { title: 'Portfolio', description: "DVRE Partners' funds and projects." };

export default function Portfolio() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Portfolio</p>
        <h1>Our funds</h1>
      </section>
      <section className="wrap portfolio-grid">
        {funds.map((f) => (
          <Link key={f.slug} href={`/funds/${f.slug}`} className="photo-card portfolio-card">
            <Cover src={f.photo} sizes="(max-width: 767px) 100vw, 50vw" />
            <span className="photo-card-tx"><b>{f.name}</b><i>{f.cardStatus}</i></span>
          </Link>
        ))}
      </section>
    </>
  );
}
