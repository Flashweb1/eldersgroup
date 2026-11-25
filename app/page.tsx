import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import Testimonials from '@/components/Testimonials';
import { businesses, leaders, foundationThematicAreas, values } from '@/lib/data';
import Reveal, { Stagger, StaggerItem, CountUp } from '@/components/motion';

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Values marquee strip */}
      <div className="values-strip" aria-hidden="true">
        <div className="values-track">
          {[...values, ...values].map((value, i) => (
            <span key={i}>{value}</span>
          ))}
        </div>
      </div>

      {/* Who We Are — editorial split with branded HQ image */}
      <section className="section-pad">
        <div className="container">
          <div className="editorial-grid">
            <Reveal>
              <div className="eyebrow">WHO WE ARE</div>
              <h2 className="h1" style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', margin: '20px 0 24px', lineHeight: 1.12 }}>
                A unified network.
                <br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>With shared purpose.</em>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--ink-light)', maxWidth: '540px' }}>
                Elders Group is a diversified network of ventures united by a commitment to excellence, innovation, and
                service. Each business brings specialized expertise while remaining connected to our shared mission of
                creating lasting value.
              </p>
              <div style={{ marginTop: '36px' }}>
                <Link href="/about" className="button button-primary">
                  Discover Our Story <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="editorial-figure" style={{ marginLeft: 'auto', maxWidth: '560px' }}>
                <div className="main-img">
                  <Image
                    src="/images/hero/headquarters.webp"
                    alt="Elders Group corporate headquarters, Lagos"
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="frame-accent" aria-hidden="true" />
                <div className="float-card">
                  <strong>2013</strong>
                  <small>Travels &amp; Tours — where the group began</small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band — dark cinematic */}
      <section className="dark-band section-pad" style={{ padding: '84px 0' }}>
        <div className="container">
          <Stagger className="stats-grid">
            <StaggerItem className="stat">
              <span className="stat-number">
                <CountUp to={6} />
              </span>
              <span className="stat-label">Distinct business ventures</span>
            </StaggerItem>
            <StaggerItem className="stat">
              <span className="stat-number">
                <CountUp to={13} />
                <sup>+</sup>
              </span>
              <span className="stat-label">Years of operating excellence</span>
            </StaggerItem>
            <StaggerItem className="stat">
              <span className="stat-number">
                <CountUp to={5} />
              </span>
              <span className="stat-label">Foundation thematic areas</span>
            </StaggerItem>
            <StaggerItem className="stat">
              <span className="stat-number">
                <CountUp to={8} />
              </span>
              <span className="stat-label">Directors &amp; executive heads</span>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Client voices — renders once real testimonials are added in lib/data.ts */}
      <Testimonials />

      {/* Businesses */}
      <section className="section-pad business-section">
        <div className="container">
          <div className="section-heading" style={{ marginBottom: '60px' }}>
            <div className="eyebrow">OUR VENTURES</div>
            <h2>
              Six distinct
              <br />
              <em>businesses. One standard.</em>
            </h2>
            <p>Every venture is led with the same discipline, service culture and attention to detail that built our name.</p>
          </div>

          <div className="business-grid">
            {businesses.map((business) => (
              <Link href={`/businesses/${business.slug}`} key={business.slug} className="business-card">
                <div className="business-visual">
                  <Image
                    src={business.image || business.logo}
                    alt={business.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="business-number">{business.number}</span>
                  <span className="business-tag">{business.category}</span>
                </div>
                <div className="business-body">
                  <h3 className="business-title">{business.name}</h3>
                  <p className="business-desc">{business.short}</p>
                  <span className="business-link">
                    Learn more <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation spotlight — dark, with field photography */}
      <section className="dark-band section-pad">
        <div className="container">
          <div className="editorial-grid" style={{ alignItems: 'center' }}>
            <Reveal>
              <div className="eyebrow eyebrow-white">THE GOODNESS IMPACT FOUNDATION</div>
              <h2 className="h1" style={{ fontSize: 'clamp(32px, 4vw, 52px)', margin: '20px 0 24px', lineHeight: 1.14 }}>
                Compassion,
                <br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>engineered for impact.</em>
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: '1.8', color: 'rgba(255,255,255,0.78)', maxWidth: '520px', marginBottom: '28px' }}>
                Our non-governmental arm advances drug-abuse prevention, gender-based violence intervention, social
                enterprise, inclusive learning and therapeutic communication — reaching people where change matters most.
              </p>
              <div className="spotlight-list" style={{ marginBottom: '32px' }}>
                {foundationThematicAreas.map((area, i) => (
                  <div className="spotlight-item" key={area.title}>
                    <i>{String(i + 1).padStart(2, '0')}</i>
                    {area.title}
                  </div>
                ))}
              </div>
              <Link href="/impact" className="text-link-white">
                Explore the Foundation <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="editorial-figure" style={{ maxWidth: '540px', marginLeft: 'auto' }}>
                <div className="main-img">
                  <Image
                    src="/images/stock/community.webp"
                    alt="Community outreach — The Goodness Impact Foundation"
                    fill
                    sizes="(max-width: 900px) 100vw, 540px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="frame-accent" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad">
        <div className="container">
          <div className="section-heading" style={{ marginBottom: '60px' }}>
            <div className="eyebrow">LEADERSHIP</div>
            <h2>
              People behind
              <br />
              <em>the vision.</em>
            </h2>
            <p>Board advisory, group operations and specialized heads — experience spanning projects, law, ICT and enterprise.</p>
          </div>

          <Stagger className="leader-grid">
            {leaders.slice(0, 4).map((leader) => (
              <StaggerItem key={leader.name} className="leader-card">
                <div className="leader-visual">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
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

          <Reveal>
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <Link href="/about" className="button button-primary">
                Full Leadership Team <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-band contact-band">
        <div className="container contact-band-content" style={{ padding: '96px 0' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 600, lineHeight: 1.12 }}>
              Ready to
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--secondary)' }}>work together?</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-gold">
            Get In Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
