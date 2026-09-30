import type { Metadata } from 'next';
import Image from 'next/image';
import { team } from '@/lib/data';

export const metadata: Metadata = { title: 'Team', description: 'The partners leading DVRE Partners.' };

export default function Team() {
  return (
    <>
      <section className="wrap page-intro">
        <p className="eyebrow">Our team</p>
        <h1>The team behind DVRE.</h1>
        <p className="lede">Architects, operators and investors building small-scale housing across Los Angeles since 2021.</p>
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
          <p className="label">What we do</p>
          <h2>One team, start to finish</h2>
          <p className="lede">Feasibility and entitlements, in-house construction through Deluxury Homes, and long-term property management.</p>
        </div>
        <div>
          <p className="label">Track record</p>
          <div className="record">
            <div><b>$12M+</b><small>Acquired</small></div>
            <div><b>11</b><small>Projects</small></div>
            <div><b>3</b><small>Funds</small></div>
            <div><b>2021</b><small>Founded</small></div>
          </div>
        </div>
      </section>
    </>
  );
}
