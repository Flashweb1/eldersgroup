'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AUTOPLAY_INTERVAL = 6500; // spec: 6–7s automatic transition

type Slide = {
  id: number;
  label: string;
  lines: [{ text: string; tone: 'navy' | 'gold' }, { text: string; tone: 'navy' | 'gold' }, { text: string; tone: 'navy' | 'gold' }];
  paragraph: string;
  image: string;
  alt: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    id: 1,
    label: 'WELCOME TO ELDERS GROUP',
    lines: [
      { text: 'A Unified Venture,', tone: 'navy' },
      { text: 'Turning Ideas', tone: 'gold' },
      { text: 'Into Reality.', tone: 'navy' },
    ],
    paragraph:
      'Elders Group is a diversified group of companies committed to innovation, excellence and creating meaningful opportunities across multiple industries.',
    image: '/images/hero/headquarters.webp',
    alt: 'Elders Group corporate headquarters — modern glass architecture with landscaped grounds',
    primary: { label: 'Explore Elders Group', href: '/about' },
    secondary: { label: 'Discover Our Companies', href: '/businesses' },
  },
  {
    id: 2,
    label: 'OUR BUSINESSES',
    lines: [
      { text: 'Diverse Businesses.', tone: 'navy' },
      { text: 'One Vision.', tone: 'gold' },
      { text: 'Endless Possibilities.', tone: 'navy' },
    ],
    paragraph:
      'From travel and hospitality to security, consulting and professional education, our network delivers solutions that empower individuals, businesses and communities.',
    image: '/images/hero/corporate-hero.webp',
    alt: 'African business professionals collaborating in a modern corporate boardroom',
    primary: { label: 'Explore Our Network', href: '/businesses' },
    secondary: { label: 'View Our Services', href: '/about' },
  },
  {
    id: 3,
    label: 'PEOPLE & IMPACT',
    lines: [
      { text: 'Empowering Lives.', tone: 'navy' },
      { text: 'Creating Opportunities.', tone: 'gold' },
      { text: 'Building Legacies.', tone: 'navy' },
    ],
    paragraph:
      'We believe in the power of people, purposeful partnerships and sustainable growth. Together, we are shaping opportunities and creating lasting impact.',
    image: '/images/hero/staff.webp',
    alt: 'Professionals in a sophisticated modern office environment',
    primary: { label: 'Get to Know Us', href: '/about' },
    secondary: { label: 'Partner With Us', href: '/partner' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [timerOn, setTimerOn] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);
  const [resetKey, setResetKey] = useState(0); // bumps to restart the autoplay clock cleanly
  const reducedMotion = useRef(false);

  // Honour the reduced-motion preference: content is shown, autoplay is off.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = mq.matches;
    setTimerOn(!mq.matches && document.visibilityState === 'visible');
    const onVisibility = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Single autoplay clock: re-created whenever slide, hover or visibility
  // changes, and on manual navigation — timers can never stack.
  useEffect(() => {
    if (!timerOn || hovering || !visible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [timerOn, hovering, visible, resetKey, current]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setResetKey((k) => k + 1);
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
    setResetKey((k) => k + 1);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="eghero"
      aria-roledescription="carousel"
      aria-label="Elders Group highlights"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Right: architectural photograph, crossfading stack */}
      <div className="eghero-media" aria-hidden="false">
        {slides.map((s, i) => (
          <Image
            key={s.id}
            src={s.image}
            alt={i === current ? s.alt : ''}
            fill
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            sizes="58vw"
            className={`eghero-img ${i === current ? 'is-active' : ''}`}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ))}
        {/* Left-edge mask blending the photo seamlessly into the light page */}
        <div className="eghero-media-blend" aria-hidden="true" />
      </div>

      {/* Left: text column */}
      <div className="eghero-inner container-wide">
        <div className="eghero-copy" key={`copy-${slide.id}`}>
          <div className="eghero-label">
            <span className="eghero-label-rule" aria-hidden="true" />
            {slide.label}
          </div>

          <h1 className="eghero-title">
            {slide.lines.map((line, i) => (
              <span key={i} className={`eghero-line eghero-line-${line.tone}`} style={{ animationDelay: `${140 + i * 130}ms` }}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="eghero-text">{slide.paragraph}</p>

          <div className="eghero-ctas">
            <Link href={slide.primary.href} className="eghero-btn eghero-btn-gold">
              <span>{slide.primary.label}</span>
              <ArrowRight size={16} className="eghero-btn-icon" aria-hidden="true" />
            </Link>
            <Link href={slide.secondary.href} className="eghero-btn eghero-btn-outline">
              <span>{slide.secondary.label}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom treatment: gold curve melting into a deep navy accent band */}
      <svg
        className="eghero-wave"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0,56 C240,34 480,54 760,46 C1040,38 1240,58 1440,48 L1440,130 L0,130 Z"
          fill="#06152E"
        />
        <path
          d="M0,56 C240,34 480,54 760,46 C1040,38 1240,58 1440,48"
          fill="none"
          stroke="#D9A21B"
          strokeWidth="2"
          opacity="0.85"
        />
      </svg>

      {/* Bottom chrome: controls on the left, brand values on the right */}
      <div className="eghero-bottom" key={`bottom-${slide.id}`}>
        <div className="eghero-controls">
          <button
            className="eghero-arrow"
            onClick={() => step(-1)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="eghero-dots" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                className={`eghero-dot ${i === current ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            className="eghero-arrow"
            onClick={() => step(1)}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="eghero-values" aria-label="Our values">
          <span>Innovation</span>
          <i aria-hidden="true">•</i>
          <span>Excellence</span>
          <i aria-hidden="true">•</i>
          <span>Impact</span>
        </div>
      </div>
    </section>
  );
}
