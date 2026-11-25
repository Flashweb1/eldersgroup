import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and data governance standards of Elders Group of Companies.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL & COMPLIANCE"
        title="Privacy"
        accent="Policy."
        description="How Elders Group and its subsidiaries collect, manage, and safeguard information provided by clients, partners, and website visitors."
        compact
      />

      <section className="section-pad">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <Link href="/" className="button button-secondary" style={{ padding: '10px 20px' }}>
                <ArrowLeft size={14} /> Back to Home
              </Link>
            </div>

            <article style={{ fontSize: '18px', lineHeight: '1.85', color: 'var(--ink)' }}>
              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                1. Information Collection
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Elders Group of Companies (&quot;Elders Group&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
                We collect information that you voluntarily provide to us when submitting an enquiry, seeking corporate services,
                applying for training programmes, or engaging with our subsidiaries.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                2. Use of Information
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We utilize collected details solely to respond to your specific service requests, provide quotes, coordinate
                travel and consulting engagements, and communicate necessary administrative updates. We do not sell, rent, or
                trade your personal data to third parties.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                3. Data Security & Storage
              </h2>
              <p style={{ marginBottom: '24px' }}>
                We enforce appropriate physical, administrative, and technological protections to preserve the confidentiality
                and integrity of your information against unauthorized access, loss, or disclosure.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                4. Contact Us
              </h2>
              <p style={{ marginBottom: '24px' }}>
                If you have any questions regarding this policy, contact our compliance officer at{' '}
                <a href="mailto:eldersgroup@gmail.com" style={{ color: 'var(--amber)', fontWeight: '600' }}>
                  eldersgroup@gmail.com
                </a>
                {' '}or visit our headquarters at 13 Ola Street, Oke-Ira, Ogba, Ikeja, Lagos, Nigeria.
              </p>
            </article>

            <div style={{ marginTop: '48px', padding: '32px', background: 'var(--cloud-light)', borderRadius: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: 'var(--ink-light)', marginBottom: '24px' }}>
                Have questions about our privacy practices?
              </p>
              <Link href="/contact" className="button button-secondary">
                Contact our team <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
