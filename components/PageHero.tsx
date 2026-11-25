import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Fragment } from 'react';

type Crumb = { href: string; label: string };

export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt = '',
  breadcrumb,
  compact = false,
  ctaText = 'Start a conversation',
  ctaLink = '/contact',
  secondaryCtaText = 'Explore our businesses',
  secondaryCtaLink = '/businesses',
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  /** Cover photo; falls back to a rich gradient hero when omitted */
  image?: string;
  imageAlt?: string;
  breadcrumb?: Crumb;
  compact?: boolean;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}) {
  const words = title.split(' ');

  function AnimatedTitle() {
    return (
      <h1>
        <span className="page-hero-line">
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span className="word-mask">
                <span style={{ animationDelay: `${120 + i * 65}ms` }}>{word}</span>
              </span>
              {i < words.length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </span>
        {accent && (
          <span className="page-hero-line page-hero-accent">
            {accent.split(' ').map((word, i) => (
              <Fragment key={`${word}-a-${i}`}>
                <span className="word-mask">
                  <em>
                    <span className="page-hero-accent-word" style={{ animationDelay: `${360 + i * 65}ms` }}>
                      {word}
                    </span>
                  </em>
                </span>
                {i < accent.split(' ').length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </span>
        )}
      </h1>
    );
  }

  return (
    <section className={`page-hero ${compact ? 'page-hero-compact' : ''}`}>
      {image && (
        <div className="page-hero-bg" aria-hidden="true">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      )}

      <div className="container">
        <div className="page-hero-content">
          {breadcrumb && (
            <nav className="page-hero-crumb" aria-label="Breadcrumb">
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              <ChevronRight size={13} aria-hidden="true" />
            </nav>
          )}
          <div className="eyebrow eyebrow-white">{eyebrow}</div>
          <AnimatedTitle />
          <p>{description}</p>

          <div className="page-hero-actions">
            <Link href={ctaLink} className="button button-gold">
              {ctaText} <ArrowUpRight size={16} />
            </Link>
            <Link href={secondaryCtaLink} className="text-link-white">
              {secondaryCtaText} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
