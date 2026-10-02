import type { Metadata } from 'next';
import Image from 'next/image';
import { team } from '@/lib/data';

export const metadata: Metadata = { title: 'Team', description: 'The partners leading DVRE Partners.' };

export default function Team() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Team</p>
        <h1>Leadership</h1>
        <p className="lede">DVRE Partners is led by three partners with backgrounds in real estate development, investment management and asset management.</p>
      </section>

      <section className="band-white">
        <div className="wrap team-grid">
          {team.map((m) => (
            <article key={m.name} className="member">
              <Image src={m.photo} alt={`Portrait of ${m.name}`} width={900} height={900} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
              <h2>{m.name}</h2>
              <p className="role">{m.role}</p>
              <p className="bio">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap split split-top">
        <div>
          <p className="label">Platform</p>
          <h2>Vertically integrated</h2>
          <p className="lede">DVRE manages each investment from acquisition through development, leasing and asset management, with construction performed by its affiliate, Deluxury Homes.</p>
        </div>
        <div>
          <p className="label">Track record</p>
          <div className="record">
            <div><b>$20M+</b><small>Capitalization</small></div>
            <div><b>11</b><small>Projects</small></div>
            <div><b>3</b><small>Funds</small></div>
            <div><b>2021</b><small>Founded</small></div>
          </div>
        </div>
      </section>
    </>
  );
}
