import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal, { Stagger, StaggerItem } from '@/components/motion';

export const metadata: Metadata = {
  title: 'News & Insights',
  description: 'News, announcements, and corporate insights from across the Elders Group network.',
};

const upcomingStories = [
  {
    title: 'Elders Travels & Tours Expands Corporate Travel Management Solutions',
    category: 'Travel & Tourism',
    date: 'Upcoming Announcement',
    summary:
      'A new suite of structured corporate travel booking and logistics services designed to simplify organizational journeys and employee travel.',
    label: 'Corporate Travel Update',
  },
  {
    title: 'Elders Travel Business School Announces New Professional Development Cohort',
    category: 'Education & Training',
    date: 'Upcoming Announcement',
    summary:
      'Applications opening for practical certifications in transportation operations, travel agency management, and tourism entrepreneurship.',
    label: 'Executive Education',
  },
  {
    title: 'The Goodness Impact Foundation Expands Community Youth Mentorship Drive',
    category: 'Social Impact',
    date: 'Upcoming Announcement',
    summary:
      'Scaling grassroots interventions in substance abuse prevention, social enterprise workshops, and therapeutic family communication.',
    label: 'Community Impact',
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="NEWS & INSIGHTS"
        title="Perspectives, updates"
        accent="and stories."
        description="A dedicated space for official announcements, subsidiary updates, programme milestones, and industry perspectives from across the Elders Group network."
        image="/images/stock/hotel-lounge.webp"
        imageAlt="Elders Group editorial photograph"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">LATEST UPDATES</div>
            <h2>
              Stories from<br />
              <em>our network.</em>
            </h2>
            <p>Official announcements, milestones, and subsidiary insights — the newsroom pipeline is in final preparation. Topics below preview what's next.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '26px', alignItems: 'stretch' }} className="news-editorial">
            <Reveal>
              <article style={{
                position: 'relative',
                height: '100%',
                minHeight: '460px',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'flex-end'
              }}>
                <Image
                  src="/images/stock/office-lounge.webp"
                  alt={upcomingStories[0].title}
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(14,14,28,0.05) 30%, rgba(14,14,28,0.88) 100%)'
                }} />
                <div style={{ position: 'relative', padding: '36px', color: 'var(--bg)' }}>
                  <div className="eyebrow eyebrow-white">{upcomingStories[0].label}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    margin: '16px 0 12px',
                    maxWidth: '540px'
                  }}>
                    {upcomingStories[0].title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.82)', maxWidth: '500px' }}>
                    {upcomingStories[0].summary}
                  </p>
                  <div style={{ marginTop: '18px', fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={14} /> {upcomingStories[0].date} · {upcomingStories[0].category}
                  </div>
                </div>
              </article>
            </Reveal>

            <Stagger className="news-stack">
              {upcomingStories.slice(1).map((story) => (
                <StaggerItem key={story.title}>
                  <article style={{
                    background: 'var(--white)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid var(--line)',
                    transition: 'all var(--transition-normal)',
                    boxShadow: 'var(--shadow-md)',
                    height: '100%'
                  }}>
                    <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                      <Image
                        src={story === upcomingStories[1] ? '/images/stock/workshop.webp' : '/images/stock/community.webp'}
                        alt={story.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 420px"
                        style={{ objectFit: 'cover' }}
                      />
                      <span className="business-tag">{story.label}</span>
                    </div>
                    <div style={{ padding: '26px 28px' }}>
                      <div className="eyebrow" style={{ fontSize: '10px' }}>{story.category}</div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: 'var(--midnight)',
                        lineHeight: 1.35,
                        margin: '12px 0 10px'
                      }}>
                        {story.title}
                      </h3>
                      <div style={{ fontSize: '12.5px', color: 'var(--ink-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={13} /> {story.date}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal>
            <div className="dark-band" style={{
              marginTop: '26px',
              borderRadius: '22px',
              padding: '34px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <p style={{ margin: 0, fontSize: '16px', color: 'rgba(255,255,255,0.85)' }}>
                <strong style={{ color: 'var(--secondary)' }}>Press &amp; media desk</strong> — verified corporate press releases and interview requests.
              </p>
              <Link href="/contact?subject=Media%20and%20press" className="text-link-white">
                Contact our media team <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
