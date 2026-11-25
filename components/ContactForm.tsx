'use client';

import { FormEvent, useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { CONTACT } from '@/lib/data';

/**
 * Submission mode.
 *
 * 'mailto'  — opens the visitor's email client with the enquiry pre-filled.
 *             Works today with no third-party dependency.
 *
 * 'formspree' — posts the enquiry to a Formspree (or any other) endpoint and
 *             falls back to 'mailto' if the fetch fails. Active once a real
 *             endpoint is configured below.
 */
const SUBMISSION_MODE: 'mailto' | 'formspree' = 'mailto';

// Required when SUBMISSION_MODE === 'formspree' (e.g. https://formspree.io/f/abcdwxyz).
const FORM_ENDPOINT = '';

interface ContactFormProps {
  title?: string;
  initialSubject?: string;
  initialBusiness?: string;
}

function ContactFormInner({ title = 'Send us a message', initialSubject = '', initialBusiness = '' }: ContactFormProps) {
  const searchParams = useSearchParams();
  const queryBusiness = searchParams?.get('business') || initialBusiness;
  const querySubject = searchParams?.get('subject') || initialSubject;

  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (queryBusiness) {
      setSelectedBusiness(queryBusiness);
      setSelectedSubject('Business services & subsidiaries');
    } else if (querySubject) {
      setSelectedSubject(querySubject);
    }
  }, [queryBusiness, querySubject]);

  function collectFormData(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const subject = String(data.get('subject') || 'Website enquiry');
    const business = String(data.get('business') || selectedBusiness || '');
    const message = String(data.get('message') || '');

    const fullSubject = business ? `[${business}] ${subject}` : subject;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}${business ? `\nBusiness Unit: ${business}` : ''}\n\nMessage:\n${message}`;

    return { name, email, phone, fullSubject, fullBody: body, business, message };
  }

  function openMailClient(fullSubject: string, fullBody: string) {
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;
    setSubmitted(true);
    setError('');
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSending(true);

    const formEl = e.currentTarget;
    const { fullSubject, fullBody } = collectFormData(formEl);

    try {
      if (SUBMISSION_MODE === 'formspree' && FORM_ENDPOINT) {
        const { email, message, name, phone, business } = collectFormData(formEl);
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, subject: fullSubject, message, business }),
        });

        if (!response.ok) throw new Error('Form submission failed');
        setSubmitted(true);
      } else {
        openMailClient(fullSubject, fullBody);
      }
    } catch {
      // Graceful fallback: let the visitor send the enquiry from their mail client.
      openMailClient(fullSubject, fullBody);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>{title}</h3>

      {selectedBusiness && (
        <div className="business-enquiry-banner">
          <Building2 size={16} color="var(--secondary)" aria-hidden="true" />
          <span>
            Enquiring specifically about: <strong>{selectedBusiness}</strong>
          </span>
        </div>
      )}

      <div className="form-grid">
        <label htmlFor="form-name">
          Full name
          <input id="form-name" name="name" required placeholder="e.g. John Doe" autoComplete="name" />
        </label>

        <label htmlFor="form-email">
          Email address
          <input id="form-email" type="email" name="email" required placeholder="you@example.com" autoComplete="email" />
        </label>

        <label htmlFor="form-phone">
          Phone number
          <input id="form-phone" type="tel" name="phone" placeholder="+234 ..." autoComplete="tel" />
        </label>

        <label htmlFor="form-subject">
          Subject / Area of interest
          <select
            id="form-subject"
            name="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            required
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="General enquiry">General enquiry</option>
            <option value="Business services & subsidiaries">Business services & subsidiaries</option>
            <option value="Travels & Tours">Elders Travels & Tours</option>
            <option value="Outsourcing & Consulting">Elders Outsourcing & Consulting</option>
            <option value="Travel Business School">Elders Travel Business School</option>
            <option value="Hospitality & Comfort">Elders Hospitality & Comfort</option>
            <option value="Security Services">Elders Security Services</option>
            <option value="Goodness Impact Foundation">The Goodness Impact Foundation</option>
            <option value="Partnership opportunity">Partnership opportunity</option>
            <option value="Media and press">Media and press</option>
            <option value="Careers">Careers & Recruitment</option>
          </select>
        </label>
      </div>

      {selectedBusiness && <input type="hidden" name="business" value={selectedBusiness} />}

      <label htmlFor="form-message" className="form-full">
        Your message
        <textarea
          id="form-message"
          name="message"
          rows={5}
          required
          placeholder="How can we assist you with our services, partnerships, or information?"
        />
      </label>

      <button className="button button-gold" type="submit" disabled={sending}>
        {sending ? 'Preparing your enquiry...' : 'Send enquiry'} <ArrowUpRight size={16} />
      </button>

      <div role="status" aria-live="polite">
        {submitted && (
          <p className="form-note" style={{ marginTop: '16px' }}>
            <CheckCircle2 size={16} /> Your email application has opened with your message prepared. Please hit send to
            complete your submission.
          </p>
        )}
        {error && (
          <p className="form-note" style={{ marginTop: '16px', color: 'var(--amber-dark)' }}>
            {error}
          </p>
        )}
      </div>

      <p className="form-disclaimer">
        This form prepares an email directly to {CONTACT.email} in your email application. Online database storage will
        be active when backend integration is completed.
      </p>
    </form>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<div className="contact-form"><p>Loading form...</p></div>}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
