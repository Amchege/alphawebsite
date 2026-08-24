import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getInsightBySlug, getAllInsights, getRelatedInsights, getCategoryBySlug } from '@/lib/insights/content';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/insights/utils';
import { ArticlePageClient } from './ArticlePageClient';

export async function generateStaticParams() {
  return getAllInsights().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return { title: 'Insight Not Found' };
  return {
    title: article.seo.title || `${article.title} | Alpha Tec Solutions`,
    description: article.seo.description || article.excerpt,
    alternates: { canonical: article.seo.canonical || `https://alphatecsolutions.com/insights/${article.slug}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();
  const relatedInsights = getRelatedInsights(article.slug, article.relatedInsights);
  const category = getCategoryBySlug(article.category);
  const breadcrumbs = [
    { name: 'Home', url: 'https://alphatecsolutions.com' },
    { name: 'Insights', url: 'https://alphatecsolutions.com/insights' },
    ...(category ? [{ name: category.name, url: `https://alphatecsolutions.com/insights/category/${category.slug}` }] : []),
    { name: article.title, url: `https://alphatecsolutions.com/insights/${article.slug}` },
  ];
  const articleSchema = generateArticleSchema(article);
  const faqSchema = article.faq ? generateFAQSchema(article) : null;
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ArticlePageClient article={article} relatedInsights={relatedInsights} category={category} breadcrumbs={breadcrumbs} />
    </>
  );
}