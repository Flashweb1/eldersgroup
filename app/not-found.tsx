import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 ERROR"
        title="Page Not Found"
        accent=""
        description="Oops! The page you're looking for has moved or doesn't exist. Let's get you back on track."
        compact
      />

      <section className="section-pad">
        <div className="container">
          <div style={{
            background: 'var(--white)',
            padding: '60px',
            borderRadius: '24px',
            textAlign: 'center',
            border: '1px solid var(--line)'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: 'rgba(242, 201, 76, 0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px'
            }}>
              <span style={{ fontSize: '80px', fontWeight: 'bold', color: 'var(--amber)', opacity: 0.8 }}>404</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: '600',
              color: 'var(--midnight)',
              marginBottom: '16px'
            }}>
              The page you are looking for cannot be found.
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'var(--ink-light)',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              It may have been moved, renamed, or never existed. Check the URL or explore our site structure below.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="button button-secondary">
                <ArrowLeft size={16} /> Return Home
              </Link>
              <Link href="/contact" className="button button-secondary">
                Contact Support <ArrowUpRight size={16} />
              </Link>
            </div>

            <div style={{ marginTop: '48px', borderTop: '1px solid var(--line)', paddingTop: '32px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--midnight)', marginBottom: '16px' }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/about" style={{ fontSize: '14px', color: 'var(--ink-light)' }}>About Us</Link>
                <Link href="/businesses" style={{ fontSize: '14px', color: 'var(--ink-light)' }}>Our Businesses</Link>
                <Link href="/projects" style={{ fontSize: '14px', color: 'var(--ink-light)' }}>Projects</Link>
                <Link href="/impact" style={{ fontSize: '14px', color: 'var(--ink-light)' }}>Our Impact</Link>
                <Link href="/contact" style={{ fontSize: '14px', color: 'var(--ink-light)' }}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
