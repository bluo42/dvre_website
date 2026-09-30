'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { funds, site } from '@/lib/data';

const company = [
  { href: '/about', label: 'About us' },
  { href: '/team', label: 'Team' },
];
const portfolio = funds.map((f) => ({ href: `/funds/${f.slug}`, label: f.name }));

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="nav-dd">
      <button className="nav-link" aria-haspopup="true">
        {label}
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
      </button>
      <div className="nav-dd-menu">
        {items.map((i) => (
          <Link key={i.href} href={i.href}>{i.label}</Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="DVRE Partners home">
          <span className="logo-box">DVRE</span>
          <span className="logo-word">Partners</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          <Dropdown label="Company" items={company} />
          <Dropdown label="Portfolio" items={portfolio} />
          <Link href="/news" className="nav-link">News</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <a href={site.investorPortal} className="nav-link nav-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          <p className="nav-mobile-h">Company</p>
          {company.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
          <p className="nav-mobile-h">Portfolio</p>
          {portfolio.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
          <p className="nav-mobile-h">More</p>
          <Link href="/news">News</Link>
          <a href={site.investorPortal} target="_blank" rel="noreferrer">Investor Portal</a>
        </nav>
      )}
    </header>
  );
}
