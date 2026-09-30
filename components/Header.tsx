'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { funds, site } from '@/lib/data';

type Item = { href: string; label: string };
const company: Item[] = [
  { href: '/about', label: 'About us' },
  { href: '/team', label: 'Team' },
];
const portfolio: Item[] = funds.map((f) => ({ href: `/funds/${f.slug}`, label: f.name }));

function Dropdown({ label, items, open, onToggle }: { label: string; items: Item[]; open: boolean; onToggle: () => void }) {
  return (
    <div className={`nav-dd${open ? ' is-open' : ''}`}>
      <button className="nav-link" aria-haspopup="true" aria-expanded={open} onClick={onToggle}>
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
  const [dd, setDd] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close menus on navigation.
  useEffect(() => { setOpen(false); setDd(null); }, [pathname]);

  // Lock page scroll behind the mobile menu; Escape closes everything.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); setDd(null); } };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  // Tapping outside an open dropdown closes it.
  useEffect(() => {
    if (!dd) return;
    const onDown = (e: PointerEvent) => { if (!navRef.current?.contains(e.target as Node)) setDd(null); };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [dd]);

  const toggle = (name: string) => setDd(dd === name ? null : name);

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="DVRE Partners home">
          <span className="logo-box">DVRE</span>
          <span className="logo-word">Partners</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main" ref={navRef}>
          <Dropdown label="Company" items={company} open={dd === 'company'} onToggle={() => toggle('company')} />
          <Dropdown label="Portfolio" items={portfolio} open={dd === 'portfolio'} onToggle={() => toggle('portfolio')} />
          <Link href="/news" className="nav-link">News</Link>
          <Link href="/team" className="nav-link">Team</Link>
          <a href={site.investorPortal} className="nav-link nav-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile" hidden={!open}>
        <div className="wrap">
          <p className="nav-mobile-h">Company</p>
          {company.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
          <p className="nav-mobile-h">Portfolio</p>
          {portfolio.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
          <p className="nav-mobile-h">More</p>
          <Link href="/news">News</Link>
          <a href={site.investorPortal} className="nav-mobile-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </div>
      </nav>
    </header>
  );
}
