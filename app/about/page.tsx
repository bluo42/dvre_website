import Link from 'next/link';
import type { Metadata } from 'next';
import { journey, photos, projects, site } from '@/lib/data';

export const metadata: Metadata = { title: 'About us', description: site.about };

const steps = [
  { title: 'Feasibility & entitlements', text: 'Sourcing, underwriting and the approvals path for every site.' },
  { title: 'Design & construction', text: 'Built in-house through our affiliate, Deluxury Homes.' },
  { title: 'Property management', text: 'Lease-up and long-term operations after delivery.' },
];

export default function About() {
  return (
    <>
      <section className="banner" style={{ backgroundImage: `url(${photos.pasadena})` }}>
        <div className="wrap banner-copy">
          <p className="eyebrow">About us</p>
          <h1>Small-scale housing, done right.</h1>
        </div>
      </section>

      <section className="wrap split">
        <div>
          <p className="label">Our story</p>
          <h2>A Pasadena-rooted infill developer</h2>
          <p className="lede">Founded in 2021, DVRE Partners acquires and repositions small multifamily properties, adding new homes to established neighborhoods through ADUs, SB 9 and by-right development.</p>
          <p className="lede">Since then we have acquired and operated $12M+ of real estate across Pasadena and Altadena, handling every step from feasibility to long-term management.</p>
        </div>
        <div className="split-img" style={{ backgroundImage: `url(${photos.altadena})` }} />
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

      <section className="wrap block">
        <p className="label">How we work</p>
        <ol className="step-cards">
          {steps.map((s, i) => (
            <li key={s.title}><span className="step-n">0{i + 1}</span><b>{s.title}</b><span>{s.text}</span></li>
          ))}
        </ol>
      </section>

      <section className="band-white">
        <div className="wrap band-row">
          <div>
            <p className="label">Our portfolio</p>
            <h2>{projects.length} projects across three funds</h2>
          </div>
          <Link href="/funds/fund-i" className="btn-outline btn-dark">View portfolio</Link>
        </div>
      </section>
    </>
  );
}
