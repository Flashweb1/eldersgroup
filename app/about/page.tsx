import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal, { Stagger, StaggerItem } from '@/components/motion';
import { leaders, values } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Elders Group, our founding story, mission, vision, core values, and corporate leadership.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ELDERS GROUP"
        title="A vision that brings"
        accent="ventures together."
        description="We are a diversified group of companies committed to delivering thoughtful services, building enduring relationships, and creating sustainable opportunities across diverse sectors."
        image="/images/hero/tables-office.webp"
        imageAlt="Elders Group boardroom — Excellence, Integrity, Growth"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="about-mission-grid">
            <div className="editorial-figure">
              <div className="main-img">
                <Image
                  src="/images/hero/corporate-hero.webp"
                  alt="Elders Group boardroom — Excellence, Integrity, Growth"
                  fill
                  sizes="(max-width: 900px) 100vw, 620px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="frame-accent" aria-hidden="true" />
              <div className="float-card" style={{ left: '22px', bottom: '22px' }}>
                <strong>2013</strong>
                <small>Guided by one standard since day one</small>
              </div>
            </div>
            <div>
              <div className="eyebrow">OUR STORY</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>Empowering and enriching lives.</h2>
              <p style={{ 
                fontSize: '20px', 
                lineHeight: '1.7', 
                color: 'var(--ink-light)', 
                marginBottom: '24px',
                fontWeight: '500'
              }}>
                One vision. Many ventures.
              </p>
              <p className="body-copy">
                Elders Group unites dynamic enterprises across travel and tourism, management consulting, professional
                education, hospitality, security, and social impact under a singular standard of integrity and excellence.
              </p>
              <p className="body-copy">
                Whether advising a growing corporation, managing corporate voyages, upskilling transport executives, or
                driving community interventions through the Goodness Impact Foundation, we believe meaningful progress starts
                with deeply understanding human needs and responding with purpose.
              </p>
              <Link href="/businesses" className="button button-secondary">
                Discover our businesses <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR JOURNEY</div>
            <h2>
              From one desk in Lagos to<br />
              <em>a network of ventures.</em>
            </h2>
          </div>
          <div className="timeline-strip">
            <div className="timeline-event">
              <span className="timeline-year">2013</span>
              <span className="timeline-rail" aria-hidden="true" />
              <div>
                <h3>The journey begins</h3>
                <p>Elders Travels &amp; Tours is founded in Lagos — the seed of what would become a diversified group of companies.</p>
              </div>
            </div>
            <div className="timeline-event">
              <span className="timeline-year">—</span>
              <span className="timeline-rail" aria-hidden="true" />
              <div>
                <h3>The growing years</h3>
                <p>Diversification into management consulting, professional education, hospitality, and enterprise security — each built on the same operating standard.</p>
              </div>
            </div>
            <div className="timeline-event">
              <span className="timeline-year">—</span>
              <span className="timeline-rail" aria-hidden="true" />
              <div>
                <h3>Impact with intention</h3>
                <p>The Goodness Impact Foundation extends the group's purpose into drug-abuse prevention, empowerment, and inclusive learning.</p>
              </div>
            </div>
            <div className="timeline-event">
              <span className="timeline-year">Today</span>
              <span className="timeline-rail" aria-hidden="true" />
              <div>
                <h3>Six ventures, one standard</h3>
                <p>A unified network serving corporate, institutional, and community clients across Nigeria and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="belief-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR FOUNDATION</div>
            <h2>
              Clear direction.<br />
              <em>Shared values.</em>
            </h2>
            <p>Our mission and vision provide a solid moral compass and strategic direction for every venture in the group.</p>
          </div>

          <div className="grid-2" style={{ gap: '24px', alignItems: 'stretch' }}>
            <div className="mission-card">
              <span className="eyebrow" style={{ marginBottom: '16px', display: 'inline-block' }}>OUR MISSION</span>
              <h3 className="h4">
                Transforming Visions into Valuable Reality: Crafting Solutions, Connecting Futures.
              </h3>
            </div>
            <div className="mission-card">
              <span className="eyebrow" style={{ marginBottom: '16px', display: 'inline-block' }}>OUR VISION</span>
              <h3 className="h4">
                Simplicity in Complexity; Brilliance in Every Venture.
              </h3>
            </div>
          </div>

          <div style={{
            marginTop: '60px',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
          }} className="dark-band section-pad" >
            <div className="container">
              <div className="section-heading" style={{ marginBottom: '40px' }}>
                <div className="eyebrow eyebrow-white">OUR CORE VALUES</div>
                <h2>
                  Five commitments,<br />
                  <em>kept every day.</em>
                </h2>
              </div>
              <div className="values-editorial">
                {values.map((v, i) => (
                  <div key={v} className="value-item">
                    <i>{String(i + 1).padStart(2, '0')}</i>
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" id="leadership">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR MANAGEMENT TEAM</div>
            <h2>
              People behind<br />
              <em>the vision.</em>
            </h2>
            <p>A cross-section of experienced professionals entrusted with directing the group's strategic governance and operational growth.</p>
          </div>

          <Stagger className="leader-grid">
            {leaders.map((leader) => (
              <StaggerItem key={leader.name} className="leader-card">
                <div className="leader-visual" style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                  />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                  {leader.credentials && <span>{leader.credentials}</span>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">INSIDE ELDERS GROUP</div>
            <h2>
              The people and places<br />
              <em>behind the work.</em>
            </h2>
          </div>
          <div className="gallery-strip">
            {[
              { src: '/images/hero/headquarters.webp', alt: 'Elders Group corporate headquarters in Lagos' },
              { src: '/images/hero/corporate-hero.webp', alt: 'Strategy session in the Elders Group boardroom' },
              { src: '/images/hero/staff.webp', alt: 'Our team in the office' },
              { src: '/images/stock/hotel-lounge.webp', alt: 'Elders Hospitality lounge experience' },
              { src: '/images/stock/workshop.webp', alt: 'Professional training workshop at the Travel Business School' },
              { src: '/images/stock/community.webp', alt: 'Goodness Impact Foundation community outreach' },
            ].map((img) => (
              <figure key={img.src} className="gallery-item">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 320px" style={{ objectFit: 'cover' }} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              GROW WITH US
            </div>
            <h2>
              Let's create<br />
              <em>lasting value.</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-primary">
            Contact our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
