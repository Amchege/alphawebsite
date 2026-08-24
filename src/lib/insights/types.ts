export type ArticleStatus = 'draft' | 'published' | 'archived';
export type SearchIntent = 'informational' | 'commercial' | 'comparative' | 'transactional' | 'navigational';
export type ContentGoal = 'EDUCATE' | 'BUILD_TRUST' | 'GENERATE_DISCOVERY' | 'SUPPORT_SOLUTION' | 'SUPPORT_PROJECT' | 'GENERATE_INQUIRY';
export type CalloutType = 'info' | 'tip' | 'important' | 'warning';

export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  order: number;
}

export interface Topic {
  slug: string;
  name: string;
  description?: string;
}

export interface ArticleSEO {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface CoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ContentBrief {
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  searchIntent: SearchIntent;
  targetAudience?: string;
  contentGoal: ContentGoal;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category['slug'];
  topics: Topic['slug'][];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
  coverImage: CoverImage;
  seo: ArticleSEO;
  faq?: ArticleFAQ[];
  relatedSolutions: string[]; // Solution slugs
  relatedProjects: string[]; // Project slugs
  relatedInsights: string[]; // Article slugs
  status: ArticleStatus;
  order: number;
  contentBrief: ContentBrief;
  tableOfContents?: TOCItem[];
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

export interface InsightsFilter {
  category?: string;
  topic?: string;
  search?: string;
  contentType?: string;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}