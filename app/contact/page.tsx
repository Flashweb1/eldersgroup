import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock3, ExternalLink, ArrowUpRight, MessageCircle, ChevronDown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { CONTACT, WHATSAPP, FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Elders Group for business, service, investment, and partnership enquiries.',
};

export default function ContactPage() {
  const addressQuery = encodeURIComponent(CONTACT.addressShort);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <>
      <PageHero
        eyebrow="CONTACT ELDERS GROUP"
        title="We're ready."
        accent="Let's talk."
        description="Have a question, a business enquiry, or an opportunity to explore? Send us a message and let us know how we can assist you."
        image="/images/hero/headquarters.webp"
        imageAlt="Elders Group corporate headquarters, Lagos"
        breadcrumb={{ href: '/', label: 'Home' }}
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">GET IN TOUCH</div>
              <h2 className="display-heading" style={{ marginBottom: '24px' }}>
                We are a<br />
                <em>click away.</em>
              </h2>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--ink-light)', marginBottom: '40px' }}>
                Reach Elders Group using the details below. If your enquiry is for a specific subsidiary, select it in the form
                or mention it in your message for immediate routing.
              </p>

              <ContactForm title="Send us a message" />
            </div>

            <div style={{ background: 'var(--cloud-light)', padding: '48px', borderRadius: '24px', border: '1px solid var(--line)' }}>
              <h3 className="h3" style={{ color: 'var(--midnight)', marginBottom: '32px' }}>
                Contact Information
              </h3>

              <div className="contact-info-box">
                <span className="contact-icon">
                  <MapPin size={22} />
                </span>
                <div>
                  <span className="eyebrow" style={{ fontSize: '10px', marginBottom: '8px', display: 'inline-block' }}>
                    VISIT OUR OFFICE
                  </span>
                  <p className="contact-content" style={{ fontSize: '15px' }}>
                    {CONTACT.addressShort}.
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    style={{ fontSize: '13px', fontWeight: '500' }}
                  >
                    View on Google Maps <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="contact-info-box">
                <span className="contact-icon">
                  <Mail size={22} />
                </span>
                <div>
                  <span className="eyebrow" style={{ fontSize: '10px', marginBottom: '8px', display: 'inline-block' }}>
                    EMAIL US
                  </span>
                  <a href={`mailto:${CONTACT.email}`} style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink)' }}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-box">
                <span className="contact-icon">
                  <Phone size={22} />
                </span>
                <div>
                  <span className="eyebrow" style={{ fontSize: '10px', marginBottom: '8px', display: 'inline-block' }}>
                    CALL US
                  </span>
                  <a href={CONTACT.phonePrimaryHref} style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--ink)', display: 'block' }}>
                    {CONTACT.phonePrimary}
                  </a>
                  <p style={{ fontSize: '14px', color: 'var(--ink-light)', marginTop: '4px' }}>
                    Alternative: <a href={CONTACT.phoneSecondaryHref} style={{ color: 'var(--amber)', fontWeight: '500' }}>{CONTACT.phoneSecondary}</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-box" style={{ marginBottom: 0 }}>
                <span className="contact-icon">
                  <Clock3 size={22} />
                </span>
                <div>
                  <span className="eyebrow" style={{ fontSize: '10px', marginBottom: '8px', display: 'inline-block' }}>
                    OFFICE HOURS
                  </span>
                  <p className="contact-content" style={{ fontSize: '15px', marginBottom: 0 }}>
                    Monday – Friday: 8:00 AM – 5:00 PM (WAT)
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--ink-light)', marginTop: '4px' }}>
                    Weekend enquiries answered via email.
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP.href}
                target="_blank"
                rel="noopener noreferrer"
                className="button egwa-cta"
                style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }}
              >
                <MessageCircle size={17} /> {WHATSAPP.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">GOOD TO KNOW</div>
            <h2>
              Frequently asked<br />
              <em>questions.</em>
            </h2>
          </div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>
                  {faq.question}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band contact-band">
        <div className="container contact-band-content">
          <div>
            <div className="eyebrow eyebrow-white" style={{ marginBottom: '16px' }}>
              VISIT OUR OFFICE
            </div>
            <h2>
              Find us in<br />
              <em>{CONTACT.addressShort}.</em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.78)', marginTop: '14px' }}>
              Headquarters for Elders Group of Companies and its operational facilities.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold"
              style={{ marginTop: '22px' }}
            >
              Open in Google Maps <ExternalLink size={16} />
            </a>
          </div>
          <div className="contact-map">
            <iframe
              src={`https://www.google.com/maps?q=${addressQuery}&output=embed`}
              title={`Map — ${CONTACT.addressShort}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
