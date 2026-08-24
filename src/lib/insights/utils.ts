import { Insight, TOCItem } from './types';

/**
 * Generate table of contents from article content
 */
export function generateTableOfContents(content: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TOCItem[] = [];
  const headingCounts: Record<string, number> = {};
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = [0, 0, 2, 3][match[1].length - 2];
    const text = match[2].trim();
    const baseId = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const count = headingCounts[baseId] || 0;
    headingCounts[baseId] = count + 1;
    const id = count === 0 ? baseId : `${baseId}-${count}`;

    items.push({ id, text, level });
  }

  return items;
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate article schema for SEO
 */
export function generateArticleSchema(article: Insight) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage.src,
    author: {
      '@type': 'Organization',
      name: article.author.name,
      url: article.author.website,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alpha Tec Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://alphatecsolutions.com/images/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://alphatecsolutions.com/insights/${article.slug}`,
    },
  };
}

/**
 * Generate FAQ schema if article has FAQs
 */
export function generateFAQSchema(article: Insight) {
  if (!article.faq || article.faq.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Track analytics event (abstracted for future provider)
 */
export function trackEvent(name: string, properties?: Record<string, string | number | boolean>) {
  // This abstraction allows easy integration with any analytics provider
  // For now, log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics Event]', name, properties);
  }
  
  // Future: window.gtag, window.analytics, etc.
}

/**
 * Build conversion URL with source attribution
 */
export function buildConversionUrl(basePath: string, source: string, articleSlug?: string): string {
  const url = new URL(basePath, window.location.origin);
  url.searchParams.set('source', source);
  if (articleSlug) {
    url.searchParams.set('article', articleSlug);
  }
  return url.toString();
}