import Link from 'next/link';
import { funds, showNews, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="logo logo-dark" aria-label="DVRE Partners home">
            <span className="logo-box">DVRE</span>
            <span className="logo-word">Partners</span>
          </Link>
          <p className="footer-tag">{site.tagline}<br />{site.location}</p>
        </div>
        <div>
          <p className="footer-h">Explore</p>
          <Link href="/about">About us</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/team">Team</Link>
        </div>
        <div>
          <p className="footer-h">Portfolio</p>
          {funds.map((f) => <Link key={f.slug} href={`/funds/${f.slug}`}>{f.cardLabel}</Link>)}
        </div>
        <div>
          <p className="footer-h">Connect</p>
          {showNews && <Link href="/news">News</Link>}
          <a href={site.investorPortal} target="_blank" rel="noreferrer">Investor Portal</a>
          <a href={`mailto:${site.email}`} className="footer-email">{site.email}</a>
        </div>
      </div>
      <div className="wrap footer-base">© {new Date().getFullYear()} DVRE Partners. All rights reserved.</div>
    </footer>
  );
}
