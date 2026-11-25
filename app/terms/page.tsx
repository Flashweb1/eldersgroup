import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service governing the use of the Elders Group of Companies corporate website and services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL & TERMS"
        title="Terms of"
        accent="Service."
        description="Standard terms and conditions governing the access and use of the Elders Group web portal and official channels."
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
                1. Acceptance of Terms
              </h2>
              <p style={{ marginBottom: '24px' }}>
                By accessing and using this website, you agree to comply with and be bound by these terms. If you disagree
                with any part of these terms, please discontinue use of our site.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                2. Intellectual Property
              </h2>
              <p style={{ marginBottom: '24px' }}>
                All content, brand names, marks, logos, graphics, and documentation across this website are the intellectual
                property of Elders Group of Companies and its registered subsidiaries. Reproduction or redistribution without
                prior written consent is strictly prohibited.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                3. Service Engagements
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Enquiries and preliminary proposals transmitted through this website do not constitute a binding commercial
                contract until formal terms, statements of work, or service-level agreements are countersigned by authorized
                officers of the relevant Elders Group subsidiary.
              </p>

              <h2 style={{ color: 'var(--midnight)', fontSize: '22px', marginTop: '32px', marginBottom: '16px', fontWeight: '600' }}>
                4. Governing Law
              </h2>
              <p style={{ marginBottom: '24px' }}>
                These terms are governed by and construed in accordance with the Laws of the Federal Republic of Nigeria.
              </p>
            </article>

            <div style={{ marginTop: '48px', padding: '32px', background: 'var(--cloud-light)', borderRadius: '20px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: 'var(--ink-light)', marginBottom: '24px' }}>
                Need legal clarification or have questions about these terms?
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
