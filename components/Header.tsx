'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { funds, showNews, site } from '@/lib/data';

const portfolio = funds.map((f) => ({ href: `/funds/${f.slug}`, label: f.name }));
const after = [
  ...(showNews ? [{ href: '/news', label: 'News' }] : []),
  { href: '/team', label: 'Team' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menus on navigation.
  useEffect(() => { setOpen(false); setDd(false); }, [pathname]);

  // Lock page scroll behind the mobile menu; Escape closes everything.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); setDd(false); } };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  // Tapping outside the open dropdown closes it.
  useEffect(() => {
    if (!dd) return;
    const onDown = (e: PointerEvent) => { if (!ddRef.current?.contains(e.target as Node)) setDd(false); };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [dd]);

  const current = (href: string) => (pathname === href || pathname.startsWith(`${href}/`) ? 'page' : undefined);
  const inPortfolio = ['/portfolio', '/funds/', '/projects/'].some((p) => pathname.startsWith(p));

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="DVRE Partners home">
          <span className="logo-box">DVRE</span>
          <span className="logo-word">Partners</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          <Link href="/about" className="nav-link" aria-current={current('/about')}>About us</Link>
          <div className={`nav-dd${dd ? ' is-open' : ''}`} ref={ddRef}>
            <button className={`nav-link${inPortfolio ? ' is-current' : ''}`} aria-haspopup="true" aria-expanded={dd} onClick={() => setDd(!dd)}>
              Portfolio
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
            </button>
            <div className="nav-dd-menu">
              {portfolio.map((i) => <Link key={i.href} href={i.href} aria-current={current(i.href)}>{i.label}</Link>)}
            </div>
          </div>
          {after.map((l) => <Link key={l.href} href={l.href} className="nav-link" aria-current={current(l.href)}>{l.label}</Link>)}
          <a href={site.investorPortal} className="nav-link nav-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile" hidden={!open}>
        <div className="wrap">
          <Link href="/about">About us</Link>
          <Link href="/portfolio">Portfolio</Link>
          {portfolio.map((i) => <Link key={i.href} href={i.href} className="nav-mobile-sub">{i.label}</Link>)}
          {after.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          <a href={site.investorPortal} className="nav-mobile-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </div>
      </nav>
    </header>
  );
}
