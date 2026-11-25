import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, HeartHandshake, ShieldCheck, Rocket, BookOpen, MessagesSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Stagger, StaggerItem } from '@/components/motion';
import { foundationThematicAreas } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Learn about The Goodness Impact Foundation and its 5 core thematic areas across Nigeria.',
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR IMPACT"
        title="Compassion into action."
        accent="Opportunity for all."
        description="The Goodness Impact Foundation is the dedicated social impact arm of Elders Group, advancing learning, wellbeing, dignity, and sustainable community empowerment."
        image="/images/stock/community.webp"
        imageAlt="Community outreach — The Goodness Impact Foundation"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="about-mission-grid">
            <div className="editorial-figure">
              <div className="main-img">
                <Image
                  src="/images/stock/community.webp"
                  alt="Community outreach — The Goodness Impact Foundation"
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="frame-accent" aria-hidden="true" />
            </div>
            <div>
              <div className="eyebrow">THE GOODNESS IMPACT FOUNDATION</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>A future where compassion knows no boundaries.</h2>
              <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.7', 
                color: 'var(--ink-light)', 
                marginBottom: '24px'
              }}>
                The Goodness Impact Foundation is a non-governmental organisation focused across five pivotal thematic areas.
                Through grassroots awareness, social learning, enterprise development, and therapeutic communication, the
                Foundation seeks to cultivate stronger, healthier, and more empowered communities.
              </p>
              <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.7', 
                color: 'var(--ink-light)', 
                marginBottom: '32px'
              }}>
                We actively welcome dialogue with philanthropic partners, civil society organisations, volunteers, and donors
                seeking to collaborate on transformative community programmes.
              </p>
              <Link href="/contact?subject=Foundation%20partnership" className="button button-secondary">
                Discuss a partnership <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="belief-section section-pad" style={{ background: 'var(--cloud-light)' }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR THEMATIC AREAS</div>
            <h2>
              Five areas of<br />
              <em>transformational focus.</em>
            </h2>
            <p>The Foundation's ongoing interventions are structured around five critical societal challenges.</p>
          </div>

          <Stagger className="grid-auto-fit-220">
            {foundationThematicAreas.map((area, i) => {
              const AreaIcon = [ShieldCheck, HeartHandshake, Rocket, BookOpen, MessagesSquare][i % 5];
              return (
                <StaggerItem key={area.title} className="mission-card card-hover">
                  <span style={{
                    display: 'inline-block',
                    padding: '8px 14px',
                    background: 'rgba(201, 169, 97, 0.15)',
                    color: 'var(--amber-dark)',
                    borderRadius: '50px',
                    fontSize: '10px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '20px'
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <AreaIcon size={32} style={{ color: 'var(--amber)', marginBottom: '20px' }} />
                  <h3 className="h4" style={{ marginBottom: '12px' }}>
                    {area.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--ink-light)'
                  }}>
                    {area.description}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="dark-band contact-band">
        <div className="container contact-band-content" style={{ padding: '92px 0' }}>
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              GET INVOLVED
            </div>
            <h2 className="display-heading">
              Be part of<br />
              <em>positive change.</em>
            </h2>
            <p style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.78)',
              maxWidth: '560px',
              marginTop: '18px'
            }}>
              Volunteer, sponsor a programme, or collaborate with The Goodness Impact Foundation on transformative
              community work.
            </p>
          </div>
          <Link href="/contact?subject=Goodness%20Impact%20Foundation" className="button button-gold">
            Connect with the Foundation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
