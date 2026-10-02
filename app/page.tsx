import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import Cover from '@/components/Cover';
import CountUp from '@/components/CountUp';
import { funds, philosophy, site, stats, whoWeAre } from '@/lib/data';

// Only render the video once public/video/hero.mp4 has been added; until then the photo shows.
const hasVideo = fs.existsSync(path.join(process.cwd(), 'public', 'video', 'hero.mp4'));

export default function Home() {
  return (
    <>
      <section className="hero">
        <Cover src={site.hero.poster} sizes="100vw" priority />
        {hasVideo && (
          <video className="hero-media" autoPlay muted loop playsInline poster={site.hero.poster} aria-hidden="true">
            <source src={site.hero.video} type="video/mp4" />
          </video>
        )}
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="hero-sub">{site.hero.subtitle}</p>
          <Link href="/funds/fund-i" className="btn-outline">View portfolio</Link>
        </div>
      </section>

      <section className="stats" aria-label="Firm highlights">
        <div className="wrap stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-n"><CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} /></span>
              <span className="stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap home-funds">
        <div className="row-head">
          <h2>Our Funds</h2>
          <span className="hint">Scroll</span>
        </div>
        <div className="fund-row">
          {funds.map((f) => (
            <Link key={f.slug} href={`/funds/${f.slug}`} className="photo-card fund-card">
              <Cover src={f.photo} sizes="(max-width: 1023px) 80vw, 20vw" />
              <span className="photo-card-tx"><b>{f.cardLabel}</b><i>{f.cardStatus}</i></span>
            </Link>
          ))}
        </div>

        <div className="who">
          <div>
            <p className="label">Who we are</p>
            <h3 className="who-h">{whoWeAre.title}</h3>
            <p className="who-p">{whoWeAre.text}</p>
          </div>
          <div>
            <p className="label">Our philosophy</p>
            <div className="principles">
              {philosophy.map((p) => (
                <div key={p.title} className="rowline"><b>{p.title}</b><small>{p.text}</small></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
