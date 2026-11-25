import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Briefcase, HeartHandshake, GraduationCap } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Explore career opportunities across the Elders Group of Companies — submit your CV and grow with us.',
};

const growthPaths = [
  {
    icon: <Briefcase size={22} />,
    title: 'Venture roles',
    text: 'Positions across travel, consulting, education, hospitality and security services.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Foundation work',
    text: 'Programme and community roles with the Goodness Impact Foundation.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Learning pathway',
    text: 'Professional development through the Elders Travel Business School.',
  },
];

export default function CareersPage() {
  const subject = encodeURIComponent('CV Submission — Elders Group Careers');
  const body = encodeURIComponent(
    'Hello Elders Group,\n\nI would like to submit my CV for consideration.\n\nName:\nField of interest:\n\n(Attach your CV to this email.)'
  );

  return (
    <>
      <PageHero
        eyebrow="CAREERS AT ELDERS GROUP"
        title="Build with"
        accent="purpose."
        description="Join a diversified group of companies where integrity, excellence and opportunity shape the way we work every day."
        image="/images/stock/team-meeting.webp"
        imageAlt="Elders Group team collaborating in a meeting"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">OPEN OPPORTUNITIES</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>
                No advertised roles<br />
                <em>right now.</em>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--ink-light)', marginBottom: '16px' }}>
                We don&apos;t always advertise publicly — but we&apos;re always interested in capable people. Send us your
                CV and tell us which part of the group fits you best; it stays on file for when a matching role opens.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--ink-light)', marginBottom: '32px' }}>
                Speculative applications are welcome for Lagos-based and field roles across all six ventures.
              </p>
              <a href={`mailto:${CONTACT.email}?subject=${subject}&body=${body}`} className="button button-primary">
                Email your CV <ArrowUpRight size={16} />
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {growthPaths.map((p) => (
                <div key={p.title} className="contact-info-box">
                  <span className="contact-icon">{p.icon}</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--midnight)' }}>{p.title}</strong>
                    <p className="contact-content" style={{ margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              NOT THE RIGHT TIME?
            </div>
            <h2>
              Follow our<br />
              <em>journey anyway.</em>
            </h2>
          </div>
          <Link href="/news" className="button button-primary">
            Read our news <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
