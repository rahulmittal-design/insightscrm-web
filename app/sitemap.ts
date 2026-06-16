import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { MARKETS } from '@/data/markets';
import { ARTICLES } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const now = new Date();
  const staticRoutes = ['', '/markets', '/solutions', '/resources', '/about', '/contact', '/request-demo', '/privacy-policy', '/cookie-policy'];
  return [
    ...staticRoutes.map((r) => ({ url: `${base}${r}`, lastModified: now, changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.7 })),
    ...MARKETS.map((m) => ({ url: `${base}/markets/${m.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...ARTICLES.map((a) => ({ url: `${base}/resources/${a.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
