import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getInsightsByCategory, getCategoryBySlug, getAllInsights } from '@/lib/insights/content';
import { INSIGHTS_CATEGORIES } from '@/lib/insights/constants';
import { InsightCard } from '@/components/insights/InsightCard';
import { RelatedSolutions } from '@/components/insights/RelatedSolutions';
import { InsightCTA } from '@/components/insights/InsightCTA';
import { MonospaceLabel } from '@/components/insights/MonospaceLabel';
import { TechnicalGrid } from '@/components/insights/TechnicalGrid';
import { GlowingLine } from '@/components/insights/GlowingLine';

const CAT_SOLUTION_MAP: Record<string, string[]> = {
  'business-software': ['business-software', 'custom-web-applications'],
  'business-automation': ['business-automation'],
  'management-systems': ['management-systems'],
  'api-integrations': ['api-integrations'],
  'data-reporting': ['data-business-intelligence'],
  'web-applications': ['custom-web-applications'],
  'software-development': ['business-software', 'custom-web-applications'],
};

export async function generateStaticParams() {
  return getAllInsights().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: 'Category Not Found' };
  return {
    title: `${cat.name} Insights | Alpha Tec Solutions`,
    description: cat.description,
    alternates: { canonical: `https://alphatecsolutions.com/insights/category/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const articles = getInsightsByCategory(slug);
  if (articles.length === 0) notFound();
  const solutions = CAT_SOLUTION_MAP[slug] || [];
  return (
    <main className="bg-slate-950 min-h-screen">
      <header className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <TechnicalGrid opacity={0.01} />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-[13px] text-slate-500">              
              <li className="flex items-center gap-2"><Link href="/" className="hover:text-slate-400 transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span className="text-slate-800">/</span><Link href="/insights" className="hover:text-slate-400 transition-colors">Insights</Link></li>
              <li className="flex items-center gap-2"><span className="text-slate-700">/</span><span className="text-slate-400">{category.name}</span></li>
            </ol>
          </nav>
          <MonospaceLabel className="block mb-5">{category.name.toUpperCase()}</MonospaceLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">{category.name} Insights</h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
        <GlowingLine className="absolute bottom-0 left-0 right-0" color="blue" />
      </header>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <span className="font-mono text-[11px] text-slate-500 tracking-wider">{articles.length} {articles.length === 1 ? 'INSIGHT' : 'INSIGHTS'}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {articles.map((a, idx) => <InsightCard key={a.id} article={a} index={idx} />)}
          </div>
        </div>
      </section>
      {solutions.length > 0 && (
        <section className="py-16 border-t border-slate-800/50">
          <div className="container mx-auto px-6 lg:px-12"><RelatedSolutions solutionSlugs={solutions} /></div>
        </section>
      )}
      <InsightCTA />
    </main>
  );
}
