'use client';

import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim();
    if (!clean) return;
    const subject = encodeURIComponent('Newsletter subscription');
    const body = encodeURIComponent(
      `Hello Elders Group,\n\nPlease add me to your newsletter mailing list.\n\nEmail: ${clean}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setEmail('');
  }

  return (
    <form className="footer-newsletter" onSubmit={subscribe}>
      <label htmlFor="newsletter-email" className="footer-newsletter-label">
        <Mail size={14} />
        Get updates from the group
      </label>
      <div className="footer-newsletter-row">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
        />
        <button type="submit" aria-label="Subscribe">
          <Send size={15} />
        </button>
      </div>
    </form>
  );
}
