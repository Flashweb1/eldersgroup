import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/motion';
import { businesses } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Businesses',
  description: 'Explore the six distinct business subsidiaries within Elders Group of Companies.',
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR BUSINESS NETWORK"
        title="Different strengths."
        accent="One collective purpose."
        description="Explore the companies that make up Elders Group. Each venture brings its own sector expertise, specialized teams, and tailored solutions, connected by a shared commitment to quality and service."
        image="/images/stock/office-lounge.webp"
        imageAlt="Elders Group business portfolio"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">SIX DISTINCT VENTURES</div>
            <h2>
              A network of<br />
              <em>possibilities.</em>
            </h2>
            <p>Select any enterprise below to explore its operations, service offerings, leadership scope, and direct enquiry channels.</p>
          </div>

          <div className="business-roster">
            {businesses.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.06}>
                <Link href={`/businesses/${b.slug}`} className={`business-row ${i % 2 === 1 ? 'business-row-flip' : ''}`}>
                  <div className="business-row-media">
                    <Image
                      src={b.image || b.logo}
                      alt={`${b.name} — ${b.category}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="business-row-number">{b.number}</span>
                  </div>
                  <div className="business-row-body">
                    <span className="eyebrow">{b.category}</span>
                    <h3>{b.name}</h3>
                    <p>{b.description}</p>
                    <span className="business-link">
                      {b.linkLabel} <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              BUSINESS ENQUIRIES
            </div>
            <h2>
              Looking for the<br />
              <em>right connection?</em>
            </h2>
          </div>
          <Link href="/contact" className="button button-primary">
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
