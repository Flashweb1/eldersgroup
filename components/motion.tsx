'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Standalone reveal — single element rises into view                  */
/* ------------------------------------------------------------------ */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Staggered group — children cascade in one by one                    */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className = '',
  stagger = 0.12,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  style,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitHeading — headline reveals word by word with a gold rise       */
/* ------------------------------------------------------------------ */
export function SplitHeading({
  text,
  className = '',
  accent = '',
  as: Tag = 'h2',
  delay = 0,
  testMode = false,
}: {
  text: string;
  className?: string;
  accent?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
  testMode?: boolean;
}) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.1em' }}
          variants={{ hidden: { opacity: 0, y: '0.9em' }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.05 }}
        >
          {word + (i < words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      ))}
      {accent && (
        <motion.em
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: EASE, delay: delay + words.length * 0.05 }}
          style={{ display: 'inline-block' }}
        >
          {' '}{accent}
        </motion.em>
      )}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-linked headline words (uses in-view, not scroll projection)  */
/* ------------------------------------------------------------------ */
export function HeadingInView({
  children,
  className = '',
  accentClass = 'accent',
  testMode = false,
}: {
  children: string;
  className?: string;
  accentClass?: string;
  testMode?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const words = children.split(' ');

  if (testMode) {
    return (
      <h2 ref={ref} className={className}>
        {children}
        <span className={accentClass}>.</span>
      </h2>
    );
  }

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, idx) => (
        <span key={idx} className="split-word">
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '102%' }}
            animate={inView ? { y: 0 } : { y: '102%' }}
            transition={{ duration: 0.64, delay: idx * 0.04, ease: EASE }}
          >
            {word}
          </motion.span>
          {idx < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax — element drifts slower/faster than scroll                 */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  className = '',
  strength = 60,
  style,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yPos = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const smooth = useSpring(yPos, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className={className} style={{ ...style, overflow: 'hidden' }}>
      <motion.div style={{ y: smooth, height: '100%' }}>{children}</motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — animated number when scrolled into view (spring eased)    */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  suffix = '',
  className = '',
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: EASE,
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toString();
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* MagneticButton — CTA gently follows the pointer                     */
/* ------------------------------------------------------------------ */
export function MagneticButton({
  children,
  className = '',
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      <span className={className}>{children}</span>
    </motion.div>
  );
}
