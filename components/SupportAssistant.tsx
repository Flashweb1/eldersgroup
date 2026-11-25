'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, Compass } from 'lucide-react';
import { businesses, CONTACT, WHATSAPP, foundationThematicAreas } from '@/lib/data';

/**
 * Support assistant upgrade hook:
 * Set AI_ENDPOINT to an OpenAI-compatible chat endpoint (POST { messages } →
 * { reply, actions? }) and the widget will call it first, falling back to the
 * on-board knowledge base on any failure. Empty (default) = local answers only.
 */
const AI_ENDPOINT = '';

type ActionLink = { label: string; href: string };
type Msg = { from: 'bot' | 'user'; text: string; actions?: ActionLink[] };

const GREETING: Msg = {
  from: 'bot',
  text: "Hello 👋 I'm the Elders Group assistant. Ask me about our businesses, how to reach us, or the Goodness Impact Foundation — I'm happy to help.",
};

const CHIPS = ['Our businesses', 'Get in touch', 'Visit our office', 'The Foundation'];

function normalize(s: string) {
  return ` ${s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ')} `;
}

function bizLinks(extra: ActionLink[] = []): ActionLink[] {
  return [
    ...businesses.map((b) => ({
      label: b.name.replace('Elders ', '').replace('The Goodness ', 'Goodness '),
      href: `/businesses/${b.slug}`,
    })),
    ...extra,
  ];
}

type Intent = { keys: string[]; answer: () => Omit<Msg, 'from'> };

const INTENTS: Intent[] = [
  {
    keys: ['hello', 'hi ', 'hey', 'good morning', 'good afternoon', 'good evening', 'how are you'],
    answer: () => ({
      text: 'Hello! 👋 Welcome to Elders Group. What would you like to know — our businesses, our contact details, or our foundation?',
      actions: [{ label: 'Our businesses', href: '/businesses' }],
    }),
  },
  {
    keys: ['business', 'businesses', 'companies', 'company', 'services', 'service', 'subsidiaries', 'subsidiary', 'ventures', 'what do you do', 'group'],
    answer: () => ({
      text: 'Elders Group runs six ventures — Travels & Tours, Outsourcing & Consulting, Travel Business School, Hospitality & Comfort, Security Services and the Goodness Impact Foundation. Which one can I point you to?',
      actions: bizLinks([{ label: 'All businesses', href: '/businesses' }]),
    }),
  },
  {
    keys: ['travel', 'tour', 'flight', 'ticket', 'visa', 'trip', 'journey', 'vacation'],
    answer: () => ({
      text: 'Elders Travels & Tours has turned travel dreams into memorable journeys since May 2013 — planning, ticketing and end-to-end trip management.',
      actions: [{ label: 'Explore Travels & Tours', href: '/businesses/travels-tours' }],
    }),
  },
  {
    keys: ['consult', 'outsourc', 'advisory', 'optimi', 'efficiency', 'bpo'],
    answer: () => ({
      text: 'Elders Outsourcing & Consulting helps organisations improve efficiency through management consulting, business optimisation and outsourcing support.',
      actions: [{ label: 'Explore Consulting', href: '/businesses/outsourcing-consulting' }],
    }),
  },
  {
    keys: ['school', 'training', 'course', 'education', 'academy', 'learn', 'class', 'study'],
    answer: () => ({
      text: 'Elders Travel Business School offers professional learning that connects academic knowledge with real-world business and transportation practice.',
      actions: [{ label: 'Explore the School', href: '/businesses/travel-business-school' }],
    }),
  },
  {
    keys: ['hospitality', 'hotel', 'lounge', 'accommodat', 'stay', 'comfort', 'event'],
    answer: () => ({
      text: 'Elders Hospitality & Comfort delivers hospitality experiences informed by our deep exposure to travel, tourism, consulting and customer care.',
      actions: [{ label: 'Explore Hospitality', href: '/businesses/hospitality' }],
    }),
  },
  {
    keys: ['security', 'guard', 'protection', 'protect', 'safety', 'asset', 'cctv'],
    answer: () => ({
      text: 'Elders Security Services provides professional security solutions that protect people, property, assets and business operations.',
      actions: [{ label: 'Explore Security Services', href: '/businesses/security-services' }],
    }),
  },
  {
    keys: ['foundation', 'ngo', 'charity', 'donate', 'donation', 'volunteer', 'drug', 'violence', 'goodness impact', 'impact', 'community', 'csr'],
    answer: () => ({
      text: `The Goodness Impact Foundation is our non-governmental organisation, focused on five areas: ${foundationThematicAreas
        .map((a) => a.title)
        .join(', ')}.`,
      actions: [
        { label: 'See our impact', href: '/impact' },
        { label: 'Partner with the foundation', href: '/partner' },
      ],
    }),
  },
  {
    keys: ['contact', 'email', 'phone', 'call', 'number', 'reach', 'whatsapp', 'talk', 'speak', 'message'],
    answer: () => ({
      text: `You can reach us at ${CONTACT.email} or ${CONTACT.phonePrimary} (alt. ${CONTACT.phoneSecondary}). The contact page is the fastest way to get a reply.`,
      actions: [
        { label: 'Contact page', href: '/contact' },
        { label: 'Email us', href: `mailto:${CONTACT.email}` },
        { label: WHATSAPP.label, href: WHATSAPP.href },
      ],
    }),
  },
  {
    keys: ['address', 'location', 'where', 'office', 'located', 'find you', 'visit', 'direction'],
    answer: () => ({
      text: `Our head office is at ${CONTACT.addressShort}. You're very welcome to visit — it helps to call ahead.`,
      actions: [
        { label: 'Contact page', href: '/contact' },
        { label: 'Our businesses', href: '/businesses' },
      ],
    }),
  },
  {
    keys: ['hours', 'open', 'closing', 'time do', 'when are you'],
    answer: () => ({
      text: "We don't publish fixed opening hours on the site, but we're responsive during regular business hours (WAT) by phone and email.",
      actions: [{ label: 'Contact page', href: '/contact' }],
    }),
  },
  {
    keys: ['partner', 'partnership', 'collaborat', 'invest', 'sponsor', 'work with', 'opportunity'],
    answer: () => ({
      text: "We'd love to explore a partnership. The Partner page outlines how to collaborate, invest or sponsor our work.",
      actions: [
        { label: 'Partner with us', href: '/partner' },
        { label: 'Contact page', href: '/contact' },
      ],
    }),
  },
  {
    keys: ['about', 'who are you', 'history', 'founded', 'when did', 'story', 'mission', 'vision', '2013', 'legacy'],
    answer: () => ({
      text: 'Elders Group is a diversified group of companies founded in Lagos in 2013, committed to innovation, excellence and creating meaningful opportunities across multiple industries.',
      actions: [
        { label: 'About us', href: '/about' },
        { label: 'Our businesses', href: '/businesses' },
      ],
    }),
  },
  {
    keys: ['leader', 'ceo', 'founder', 'team', 'management', 'director', 'who runs'],
    answer: () => ({
      text: 'Elders Group is guided by an experienced leadership team, including Dr. Amb. Daniel Olabintan. You can meet the whole team on the About page.',
      actions: [{ label: 'Meet the team', href: '/about' }],
    }),
  },
  {
    keys: ['project', 'portfolio'],
    answer: () => ({
      text: 'Our projects page shows the ventures and initiatives we have delivered across the group.',
      actions: [{ label: 'View projects', href: '/projects' }],
    }),
  },
  {
    keys: ['news', 'blog', 'press', 'update', 'announcement'],
    answer: () => ({
      text: 'The latest news and announcements from across the group live on our news page.',
      actions: [{ label: 'Read the news', href: '/news' }],
    }),
  },
  {
    keys: ['job', 'jobs', 'career', 'careers', 'hire', 'hiring', 'vacancy', 'vacancies', 'vacanc', 'opening', 'apply', 'application', 'employment', 'internship', 'intern', 'cv', 'resume', 'recruit'],
    answer: () => ({
      text: `Openings aren't always advertised, but we welcome CVs — email yours to ${CONTACT.email} and it stays on file. See the careers page for how we hire.`,
      actions: [
        { label: 'Careers page', href: '/careers' },
        { label: 'Email your CV', href: `mailto:${CONTACT.email}` },
      ],
    }),
  },
  {
    keys: ['price', 'cost', 'fee', 'quote', 'how much', 'rate', 'charge'],
    answer: () => ({
      text: 'Pricing depends on the service and scope — travel packages, consulting engagements and training all differ. Share what you need and the team will prepare a tailored quote.',
      actions: [
        { label: 'Request a quote', href: '/contact' },
        { label: 'Our businesses', href: '/businesses' },
      ],
    }),
  },
  {
    keys: ['human', 'agent', 'person', 'representative', 'real person', 'staff'],
    answer: () => ({
      text: `Of course — our team is happy to help personally. Call ${CONTACT.phonePrimary}, message us on WhatsApp, or email ${CONTACT.email}.`,
      actions: [
        { label: 'Call us', href: CONTACT.phonePrimaryHref },
        { label: WHATSAPP.label, href: WHATSAPP.href },
        { label: 'Contact page', href: '/contact' },
      ],
    }),
  },
  {
    keys: ['thank', 'thanks', 'appreciate'],
    answer: () => ({
      text: "You're most welcome! Is there anything else I can help with?",
    }),
  },
  {
    keys: ['bye', 'goodbye', 'see you', 'later'],
    answer: () => ({
      text: 'Thank you for visiting Elders Group — have a wonderful day! 🙏',
      actions: [{ label: 'Our businesses', href: '/businesses' }],
    }),
  },
];

const FALLBACK: Omit<Msg, 'from'> = {
  text: "I don't have an answer for that just yet — but our team will be glad to help directly. In the meantime, I can tell you about our businesses, contact details, or the Goodness Impact Foundation.",
  actions: [
    { label: 'Contact page', href: '/contact' },
    { label: 'Our businesses', href: '/businesses' },
  ],
};

function localAnswer(input: string): Omit<Msg, 'from'> {
  const q = normalize(input);
  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const key of intent.keys) {
      if (q.includes(key)) score += key.length > 3 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  return best ? best.answer() : FALLBACK;
}

function ActionChip({ label, href }: ActionLink) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {label}
      </a>
    );
  }
  return <Link href={href}>{label}</Link>;
}

export default function SupportAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep the conversation pinned to the newest message.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, open]);

  // Focus the input when the panel opens, Esc closes it.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function toggle() {
    if (!open && messages.length === 0) setMessages([GREETING]);
    setOpen(!open);
  }

  async function send(raw: string) {
    const clean = raw.trim();
    if (!clean) return;
    setMessages((m) => [...m, { from: 'user', text: clean }]);
    setInput('');
    setTyping(true);

    let reply: Omit<Msg, 'from'>;
    if (AI_ENDPOINT) {
      try {
        const res = await fetch(AI_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages }),
        });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = await res.json();
        if (!data.reply) throw new Error('empty reply');
        reply = { text: String(data.reply), actions: Array.isArray(data.actions) ? data.actions : undefined };
      } catch {
        reply = localAnswer(clean);
      }
    } else {
      reply = localAnswer(clean);
    }

    // A short beat so the typing indicator reads naturally.
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', ...reply }]);
      setTyping(false);
    }, 750);
  }

  return (
    <>
      {open && (
        <section className="egchat-panel" role="dialog" aria-label="Elders Group support assistant">
          <header className="egchat-head">
            <span className="egchat-head-logo" aria-hidden="true">
              <Compass size={19} />
            </span>
            <div>
              <div className="egchat-head-title">Elders Assistant</div>
              <div className="egchat-head-sub">
                <span className="egchat-status" aria-hidden="true" />
                Typically replies instantly
              </div>
            </div>
            <button className="egchat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={19} />
            </button>
          </header>

          <div className="egchat-body" ref={bodyRef} aria-live="polite">
            {messages.map((msg, i) => (
              <div key={i} className={`egchat-msg egchat-msg-${msg.from}`}>
                {msg.text}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="egchat-actions">
                    {msg.actions.map((a) => (
                      <ActionChip key={a.href + a.label} label={a.label} href={a.href} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="egchat-typing" aria-hidden="true">
                <i style={{ animationDelay: '0s' }} />
                <i style={{ animationDelay: '0.15s' }} />
                <i style={{ animationDelay: '0.3s' }} />
              </div>
            )}
          </div>

          <div className="egchat-chips" aria-label="Suggested questions">
            {CHIPS.map((chip) => (
              <button key={chip} className="egchat-chip" onClick={() => send(chip)}>
                {chip}
              </button>
            ))}
          </div>

          <form
            className="egchat-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our businesses, contacts…"
              aria-label="Type your message"
              maxLength={500}
            />
            <button className="egchat-send" type="submit" disabled={!input.trim()} aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        className="egchat-fab"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="egchat-panel"
        aria-label={open ? 'Close support chat' : 'Open support chat'}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}
