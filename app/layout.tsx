import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportAssistant from '@/components/SupportAssistant';
import Analytics from '@/components/Analytics';
import { CONTACT } from '@/lib/data';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Elders Group | One Vision. Many Ventures.',
    template: '%s | Elders Group',
  },
  description:
    'Elders Group is a diversified group of businesses spanning travel, consulting, professional training, hospitality, security and social impact.',
  metadataBase: new URL('https://eldersgroup.com.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elders Group | One Vision. Many Ventures.',
    description: 'A unified venture turning ideas into reality.',
    type: 'website',
    siteName: 'Elders Group',
    locale: 'en_NG',
    url: '/',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Elders Group of Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elders Group | One Vision. Many Ventures.',
    description: 'A unified venture turning ideas into reality.',
    images: ['/images/og/og-default.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a2e',
};

// Structured data for search engines — keep in sync with lib/data.ts.
const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elders Group of Companies',
  url: 'https://eldersgroup.com.ng',
  logo: 'https://eldersgroup.com.ng/logos/eldersgroup-crest.png',
  description:
    'Elders Group is a diversified group of businesses spanning travel, consulting, professional training, hospitality, security and social impact.',
  email: CONTACT.email,
  telephone: '+2348124979132',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13 Ola Street, Oke-Ira, off Ayo Alabi, Ogba',
    addressLocality: 'Ikeja',
    addressRegion: 'Lagos',
    addressCountry: 'NG',
  },
  sameAs: ['https://facebook.com', 'https://instagram.com', 'https://linkedin.com'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SupportAssistant />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
