import { Metadata } from 'next';
import { INSIGHTS_CATEGORIES } from '@/lib/insights/constants';
import { InsightsHero } from '@/components/insights/InsightsHero';
import { FeaturedInsight } from '@/components/insights/FeaturedInsight';
import { InsightsPageClient } from './InsightsPageClient';
import { InsightCTA } from '@/components/insights/InsightCTA';
import { GlowingLine } from '@/components/insights/GlowingLine';
import { getAllInsights, getFeaturedInsight } from '@/lib/insights/content';

export const metadata: Metadata = {
  title:
    'Insights on Software, Systems & Digital Business | Alpha Tec Solutions',
  description:
    'Practical perspectives on building business software, automating workflows, and designing digital systems that solve real operational problems.',
  openGraph: {
    title: 'Insights on Software, Systems & Digital Business',
    description:
      'Practical perspectives on building business software, automating workflows, and designing digital systems.',
    type: 'website',
    url: 'https://alphatecdesigns.co.ke/insights',
  },
  alternates: {
    canonical: 'https://alphatecdesigns.co.ke/insights',
  },
};

export default function InsightsPage() {
  const allInsights = getAllInsights();
  const featured = getFeaturedInsight();
  const others = allInsights.filter((a) => !a.featured);

  // Compute stats for the bar
  const topicCount = [
    ...new Set(allInsights.flatMap((a) => a.topics)),
  ].length;

  return (
    <main className="bg-slate-950">
      <InsightsHero />

      {/* Stats bar — adds visual substance between hero and featured */}
      <div className="border-y border-slate-800/50 bg-slate-900/20">
        <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-10">
          <div className="grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <span className="text-2xl md:text-3xl font-bold text-white">
                {allInsights.length}
              </span>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mt-1.5">
                Articles
              </p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-white">
                {INSIGHTS_CATEGORIES.length}
              </span>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mt-1.5">
                Categories
              </p>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold text-white">
                {topicCount}
              </span>
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em] mt-1.5">
                Topics
              </p>
            </div>
          </div>
        </div>
      </div>

      {featured && <FeaturedInsight article={featured} />}
      <InsightsPageClient initialInsights={others} />
      <InsightCTA />
    </main>
  );
}