import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/data';
import './globals.css';

// Fonts: swap these two lines to change the site's typography.
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const display = Inter_Tight({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dvrepartners.com'),
  title: { default: 'DVRE Partners — Value-add real estate investment', template: '%s — DVRE Partners' },
  description: site.about,
  openGraph: { title: 'DVRE Partners', description: site.about, images: [site.hero.poster] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
