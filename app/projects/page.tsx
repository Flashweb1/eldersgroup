import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/motion';
import { businesses } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description: 'Explore active initiatives, operations, and enterprise projects across the Elders Group network.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PROJECTS"
        title="Ideas into action."
        accent="Work with purpose."
        description="Our portfolio highlights active operations, structured programmes, and service delivery initiatives across travel, consulting, professional education, hospitality, security, and community impact."
        image="/images/stock/workshop.webp"
        imageAlt="Elders Group project delivery workshop"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">PROJECT PORTFOLIO</div>
            <h2>
              A closer look at<br />
              <em>our work across sectors.</em>
            </h2>
            <p>Active operations, structured programmes, and service-delivery initiatives — one flagship engagement at a time, per venture.</p>
          </div>

          <div className="business-roster">
            {businesses.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.05}>
                <Link href={`/businesses/${b.slug}`} className={`business-row ${i % 2 === 1 ? 'business-row-flip' : ''}`}>
                  <div className="business-row-media">
                    <Image
                      src={b.image || b.logo}
                      alt={`${b.name} — delivery in progress`}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="business-row-number">{b.number}</span>
                  </div>
                  <div className="business-row-body">
                    <span className="eyebrow">
                      <FolderGit2 size={11} /> {b.category}
                    </span>
                    <h3>{b.name}</h3>
                    <p><strong>{b.short}.</strong> {b.description}</p>
                    <span className="business-link">
                      Explore business operations <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band contact-band" style={{ background: 'linear-gradient(140deg, var(--primary) 0%, var(--midnight) 55%, #0e0e1c 100%)' }}>
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              INITIATE A PROJECT
            </div>
            <h2>
              Have an initiative<br />
              <em>to discuss with us?</em>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(255,255,255,0.78)', maxWidth: '540px', marginTop: '18px' }}>
              From turnkey corporate travel management to bespoke institutional consulting and facility security, our
              cross-functional teams are prepared to consult and execute.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link href="/contact" className="text-link-white">
                Contact Elders Group <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="editorial-figure" style={{ maxWidth: '520px', width: '100%' }}>
            <div className="main-img">
              <Image
                src="/images/stock/team-meeting.webp"
                alt="Elders Group cross-functional delivery teams"
                fill
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="frame-accent" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
