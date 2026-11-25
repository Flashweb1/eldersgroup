import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { businesses, CONTACT, SOCIAL } from '@/lib/data';
import NewsletterForm from '@/components/NewsletterForm';

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook size={16} />,
  Instagram: <Instagram size={16} />,
  LinkedIn: <Linkedin size={16} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand" style={{ marginBottom: '20px', display: 'inline-flex' }}>
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
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px' }}>
            A unified venture turning ideas into reality. Empowering and enriching lives through diverse businesses.
          </p>
          <div className="social-links">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
              >
                {socialIcons[s.name]}
              </a>
            ))}
          </div>
          <NewsletterForm />
        </div>

        <div>
          <div className="footer-title">Navigation</div>
          <Link href="/about">About Us</Link>
          <Link href="/businesses">Businesses</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/partner">Partnership</Link>
        </div>

        <div>
          <div className="footer-title">Our Businesses</div>
          {businesses.map((b) => (
            <Link key={b.slug} href={`/businesses/${b.slug}`}>
              {b.name.replace('Elders ', '')}
            </Link>
          ))}
        </div>

        <div>
          <div className="footer-title">Contact</div>
          <a href={`mailto:${CONTACT.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Mail size={14} />
            {CONTACT.email}
          </a>
          <a href={CONTACT.phonePrimaryHref} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Phone size={14} />
            {CONTACT.phonePrimary}
          </a>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '14px' }}>{CONTACT.addressShort}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {currentYear} Elders Group. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
