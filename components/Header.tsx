'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { businesses } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/impact', label: 'Impact' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === '/';

  // Close the mobile menu whenever navigation occurs.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape and lock body scroll while the menu is open.
  useEffect(() => {
    if (!mobileOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className={`site-header${isHome ? ' site-header-home' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logos/eldersgroup-crest.png"
            alt="Elders Group"
            width={40}
            height={40}
            className="brand-image"
          />
          <span className="brand-text">
            <strong>ELDERS GROUP</strong>
            <small>OF COMPANIES</small>
          </span>
        </Link>

        <nav className="main-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/partner" className="nav-cta">
            Partner
          </Link>
        </nav>

        {isHome && (
          <Link href="/contact" className="header-cta">
            Get In Touch
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="mobile-nav">
          <div className="container mobile-nav-inner">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/partner" className="nav-cta">
              Partner
            </Link>

            <div className="mobile-nav-businesses">
              <div className="footer-title">Our Businesses</div>
              {businesses.map((b) => (
                <Link key={b.slug} href={`/businesses/${b.slug}`}>
                  {b.name.replace('Elders ', '').replace('The Goodness ', 'Goodness ')}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
