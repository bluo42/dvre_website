import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap page-intro">
      <p className="eyebrow">404</p>
      <h1>This page moved or doesn&apos;t exist.</h1>
      <p className="lede"><Link href="/" className="inline-link">Go to the homepage</Link></p>
    </section>
  );
}
