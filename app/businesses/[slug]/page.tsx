import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { businesses } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = businesses.find((x) => x.slug === slug);
  return {
    title: b ? `${b.name} | Elders Group` : 'Business Details',
    description: b?.description,
  };
}

export default async function BusinessDetail({ params }: Props) {
  const { slug } = await params;
  const b = businesses.find((x) => x.slug === slug);
  if (!b) notFound();

  const otherBusinesses = businesses.filter((x) => x.slug !== slug);

  return (
    <>
      <div style={{
        background: 'var(--cloud-light)',
        borderBottom: '1px solid var(--line)',
        padding: '14px 0'
      }}>
        <div className="container">
          <Link
            href="/businesses"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '500',
              color: 'var(--ink-light)',
              padding: '10px 16px',
              borderRadius: '8px',
              transition: 'all var(--transition-fast)',
              maxWidth: 'fit-content'
            }}
            className="button-secondary"
          >
            <ArrowLeft size={14} /> Back to all businesses
          </Link>
        </div>
      </div>

      <PageHero
        eyebrow={b.category.toUpperCase()}
        title={b.name}
        description={b.description}
        image={b.image || b.logo}
        imageAlt={`${b.name} — ${b.category}`}
        breadcrumb={{ href: '/businesses', label: 'All businesses' }}
        ctaText="Make an enquiry"
        ctaLink={`/contact?business=${encodeURIComponent(b.name)}`}
        secondaryCtaText="All ventures"
        secondaryCtaLink="/businesses"
      />

      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">ABOUT THIS BUSINESS</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>{b.short}</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)', marginBottom: '24px' }}>
                {b.overview}
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)', marginBottom: '32px' }}>
                As part of Elders Group, this business is connected to a wider network of ventures while maintaining a
                distinct service focus, specialized expertise, and tailored customer experience.
              </p>
              <Link href={`/contact?business=${encodeURIComponent(b.name)}`} className="button button-secondary">
                Make an enquiry <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="dark-band" style={{
              padding: '48px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="eyebrow eyebrow-white" style={{ marginBottom: '24px' }}>AT A GLANCE</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '96px',
                fontWeight: 600,
                lineHeight: 1,
                color: 'var(--secondary)'
              }}>
                {b.number}
              </div>
              <div style={{ marginTop: '18px', fontSize: '14px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.05em' }}>
                VENTURE OF {b.category.toUpperCase()}
              </div>
              <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                <div style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.82)' }}>
                  One of <strong style={{ color: 'var(--secondary)' }}>six</strong> Elders Group ventures — connected
                  expertise, unified standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--cloud-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>
                Services and<br />
                <em>areas of focus.</em>
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)' }}>
                Our service areas are shaped around the practical needs of the people, communities, and organisations we
                serve.
              </p>
            </div>
            <div style={{
              background: 'var(--white)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--line)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {b.services.map((s, i) => (
                  <div key={s} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    paddingBottom: '20px',
                    borderBottom: i < b.services.length - 1 ? '1px solid var(--line)' : 'none'
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: 'rgba(242, 201, 76, 0.15)',
                      borderRadius: '10px',
                      color: 'var(--amber)',
                      flexShrink: 0
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <strong style={{ fontSize: '16px', fontWeight: '600', color: 'var(--midnight)' }}>{s}</strong>
                      <CheckCircle2 size={16} style={{ color: 'var(--amber)', marginLeft: '12px', float: 'right', marginTop: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div style={{
            background: 'var(--white)',
            padding: '60px',
            borderRadius: '24px',
            border: '1px solid var(--line)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">WHO WE SERVE</div>
                <h2 className="display-heading" style={{ marginBottom: '24px' }}>
                  Built around<br />
                  <em>your needs.</em>
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)' }}>{b.audience}</p>
              </div>
              <div style={{
                position: 'relative',
                height: '320px',
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <Image
                  src={b.image || b.logo}
                  alt={`${b.name} — who we serve`}
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(150deg, rgba(26, 26, 46, 0.35) 0%, transparent 55%)'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--cloud-light)' }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">EXPLORE MORE</div>
            <h2>
              Other ventures in<br />
              <em>our network.</em>
            </h2>
            <p>Discover the full range of Elders Group companies working together to deliver excellence across sectors.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {otherBusinesses.slice(0, 3).map((other, idx) => (
              <Link
                href={`/businesses/${other.slug}`}
                key={other.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--white)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--line)',
                  transition: 'all var(--transition-normal)',
                  boxShadow: 'var(--shadow-md)',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '180px',
                  overflow: 'hidden',
                  background: 'var(--cloud-light)'
                }}>
                  <Image
                    src={other.image || other.logo}
                    alt={`${other.name} — ${other.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    style={{ objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50px',
                    fontSize: '10px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    zIndex: 1
                  }}>
                    {other.category}
                  </span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--midnight)', marginBottom: '8px' }}>
                    {other.name}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--ink-light)', marginBottom: '16px' }}>
                    {other.short}
                  </p>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--amber-dark)'
                  }}>
                    {other.linkLabel} <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              CONNECT WITH {b.name.toUpperCase()}
            </div>
            <h2>
              Let's discuss<br />
              <em>what you need.</em>
            </h2>
          </div>
          <Link href={`/contact?business=${encodeURIComponent(b.name)}`} className="button button-primary">
            Enquire about this business <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
