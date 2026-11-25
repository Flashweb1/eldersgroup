import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Handshake, TrendingUp, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'Explore strategic partnerships, business collaborations, and joint initiatives with Elders Group.',
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIPS"
        title="Better outcomes"
        accent="through collaboration."
        description="We actively cultivate enduring collaborations with organisations, institutions, and visionary leaders interested in creating synergistic value across our multi-sector network."
        image="/images/stock/team-meeting.webp"
        imageAlt="Elders Group partnership meeting"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'stretch' }} className="partner-grid">
            <div>
              <div className="eyebrow">WORK WITH ELDERS GROUP</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>
                Let's build<br />
                <em>something lasting.</em>
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)', marginBottom: '40px' }}>
                Whether your strategic interest aligns with corporate travel management, management consulting, executive
                training, hospitality facilities, enterprise security, or corporate social investment, we invite you to start a
                dialogue.
              </p>

              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(242, 201, 76, 0.15)',
                    borderRadius: '12px',
                    color: 'var(--amber)',
                    flexShrink: 0
                  }}>
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--midnight)', marginBottom: '6px' }}>
                      Commercial Joint Ventures
                    </h4>
                    <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: 'var(--ink-light)' }}>
                      Co-developing service solutions and expanding market distribution across Nigeria and West Africa.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(242, 201, 76, 0.15)',
                    borderRadius: '12px',
                    color: 'var(--amber)',
                    flexShrink: 0
                  }}>
                    <Handshake size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--midnight)', marginBottom: '6px' }}>
                      Corporate Supplier & Vendor Relations
                    </h4>
                    <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: 'var(--ink-light)' }}>
                      Long-term institutional supply, security deployment, and enterprise travel frameworks.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(242, 201, 76, 0.15)',
                    borderRadius: '12px',
                    color: 'var(--amber)',
                    flexShrink: 0
                  }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--midnight)', marginBottom: '6px' }}>
                      Social Impact & CSR Collaborations
                    </h4>
                    <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: 'var(--ink-light)' }}>
                      Joint initiatives with The Goodness Impact Foundation touching youth, women, and vulnerable communities.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '32px',
                padding: '24px',
                background: 'rgba(242, 201, 76, 0.1)',
                borderLeft: '3px solid var(--amber)',
                borderRadius: '12px'
              }}>
                <h4 style={{ margin: '0 0 12px', color: 'var(--midnight)', fontSize: '15px', fontWeight: '600' }}>Our Partnership Principles</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: 'var(--ink-light)' }}>
                  Mutual integrity, transparent governance, long-term commitment, and high-impact value delivery guide every
                  alliance we form.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '24px', alignContent: 'start' }}>
              <div className="editorial-figure" style={{ minHeight: '300px' }}>
                <div className="main-img">
                  <Image
                    src="/images/stock/team-meeting.webp"
                    alt="Elders Group partnership discussion"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="frame-accent" aria-hidden="true" />
              </div>
              <ContactForm title="Tell us about your proposal" initialSubject="Partnership opportunity" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
