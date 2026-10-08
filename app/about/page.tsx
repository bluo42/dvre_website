import Cover from '@/components/Cover';
import type { Metadata } from 'next';
import { journey, philosophy, photos, site, whoWeAre } from '@/lib/data';

export const metadata: Metadata = { title: 'About us', description: site.about };

export default function About() {
  return (
    <>
      <section className="banner">
        <Cover src={photos.about} sizes="100vw" priority />
        <div className="wrap banner-copy">
          <p className="eyebrow">About us</p>
          <h1>Full-cycle real estate investment.</h1>
        </div>
      </section>

      <section className="wrap split">
        <div>
          <p className="label">Who we are</p>
          <h2>{whoWeAre.title}</h2>
          {whoWeAre.text.map((t) => <p key={t} className="lede">{t}</p>)}
        </div>
        <div className="split-img"><Cover src={photos.altadena} sizes="(max-width: 767px) 100vw, 50vw" /></div>
      </section>

      <section className="wrap block">
        <p className="label">Our philosophy</p>
        <ol className="step-cards step-cards-4">
          {philosophy.map((p, i) => (
            <li key={p}><span className="step-n">0{i + 1}</span><b>{p}</b></li>
          ))}
        </ol>
      </section>

      <section className="wrap block">
        <p className="label">Our journey</p>
        <ol className="journey">
          {journey.map((j) => (
            <li key={j.year} className={j.upcoming ? 'upcoming' : ''}>
              <b>{j.year}</b><span>{j.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
