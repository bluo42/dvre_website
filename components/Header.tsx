'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { showNews, site } from '@/lib/data';

const links = [
  { href: '/about', label: 'About us' },
  { href: '/portfolio', label: 'Portfolio' },
  ...(showNews ? [{ href: '/news', label: 'News' }] : []),
  { href: '/team', label: 'Team' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock page scroll behind the mobile menu; Escape closes it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  // Fund and project pages count as Portfolio.
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`) ||
    (href === '/portfolio' && (pathname.startsWith('/funds/') || pathname.startsWith('/projects/')));

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="DVRE Partners home">
          <span className="logo-box">DVRE</span>
          <span className="logo-word">Partners</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" aria-current={isCurrent(l.href) ? 'page' : undefined}>{l.label}</Link>
          ))}
          <a href={site.investorPortal} className="nav-link nav-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className="nav-mobile" aria-label="Mobile" hidden={!open}>
        <div className="wrap">
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          <a href={site.investorPortal} className="nav-mobile-portal" target="_blank" rel="noreferrer">Investor Portal</a>
        </div>
      </nav>
    </header>
  );
}
