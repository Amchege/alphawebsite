import { MetadataRoute } from 'next';
import { getAllInsights } from '@/lib/insights/content';
import { INSIGHTS_CATEGORIES } from '@/lib/insights/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alphatecsolutions.com';
  const insights = getAllInsights();

  const insightPages = insights.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: a.updatedAt || a.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const catPages = INSIGHTS_CATEGORIES.filter((c) =>
    insights.some((a) => a.category === c.slug)
  ).map((c) => ({
    url: `${base}/insights/category/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/insights`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...insightPages,
    ...catPages,
  ];
}