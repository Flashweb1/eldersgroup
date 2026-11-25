import type { MetadataRoute } from 'next';
import { businesses } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eldersgroup.com.ng';
  const routes = [
    '',
    '/about',
    '/businesses',
    '/projects',
    '/impact',
    '/news',
    '/contact',
    '/partner',
    '/careers',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const businessRoutes = businesses.map((b) => ({
    url: `${baseUrl}/businesses/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...businessRoutes];
}
