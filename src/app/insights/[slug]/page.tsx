import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from "@/config/site";
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
    alternates: { canonical: article.seo.canonical || `${SITE_CONFIG.url}/insights/${slug}/` },
    authors: [{ name: 'Abraham Kariuki, Alpha Tec Solutions', url: 'https://www.linkedin.com/in/abraham-kariuki/' }],
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();
  const relatedInsights = getRelatedInsights(article.slug, article.relatedInsights);
  const category = getCategoryBySlug(article.category);
  const breadcrumbs = [
    { name: 'Home', url: 'https://alphatecdesigns.co.ke' },
    { name: 'Insights', url: 'https://alphatecdesigns.co.ke/insights' },
    ...(category ? [{ name: category.name, url: `https://alphatecdesigns.co.ke/insights/category/${category.slug}` }] : []),
    { name: article.title, url: `https://alphatecdesigns.co.ke/insights/${article.slug}` },
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