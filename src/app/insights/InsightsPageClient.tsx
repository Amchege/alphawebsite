'use client';

import { useState, useMemo } from 'react';
import { Insight } from '@/lib/insights/types';
import { INSIGHTS_CATEGORIES } from '@/lib/insights/constants';
import { InsightCard } from '@/components/insights/InsightCard';
import { InsightSearch } from '@/components/insights/InsightSearch';
import { CategoryFilter } from '@/components/insights/CategoryFilter';
import { CategoryCard } from '@/components/insights/CategoryCard';
import { MonospaceLabel } from '@/components/insights/MonospaceLabel';
import { TechnicalGrid } from '@/components/insights/TechnicalGrid';
import { GlowingLine } from '@/components/insights/GlowingLine';

interface Props {
  initialInsights: Insight[];
}

export function InsightsPageClient({ initialInsights }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | undefined>();

  // Compute category counts for the cards
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    initialInsights.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, [initialInsights]);

  const filtered = useMemo(() => {
    let results = initialInsights;
    if (activeCategory) {
      results = results.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter((a) => {
        const haystack = [
          a.title,
          a.excerpt,
          a.content,
          ...a.topics,
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    return results;
  }, [initialInsights, activeCategory, searchQuery]);

  return (
    <section
      id="latest-insights"
      className="relative pt-10 lg:pt-16 pb-20 lg:pb-28 bg-slate-950"
    >
      <TechnicalGrid opacity={0.015} />

      {/* Decorative dot-grid — issue #9 */}
      <div
        className="absolute top-[10%] right-[3%] w-40 h-40 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div
        className="absolute bottom-[15%] left-[2%] w-48 h-48 opacity-[0.02] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-10">
          <MonospaceLabel className="block mb-4">
            LATEST INSIGHTS
          </MonospaceLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Explore Our Thinking
          </h2>
        </div>

        <div className="space-y-5 mb-10">
          <InsightSearch onSearch={setSearchQuery} />
          <CategoryFilter
            categories={INSIGHTS_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="mb-8">
          <span className="font-mono text-[11px] text-slate-500 tracking-wider">
            {filtered.length}{' '}
            {filtered.length === 1 ? 'INSIGHT' : 'INSIGHTS'} FOUND
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filtered.map((article, idx) => (
              <InsightCard
                key={article.id}
                article={article}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-slate-700 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <p className="text-slate-400 text-lg mb-3">
              No insights found.
            </p>
            <p className="text-slate-500 text-sm">
              Try adjusting your search or{' '}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory(undefined);
                }}
                className="text-orange-500 hover:text-orange-400 transition-colors underline underline-offset-2"
              >
                clear all filters
              </button>
            </p>
          </div>
        )}

        {/* Explore by Topic */}
        <div className="mt-28">
          <GlowingLine className="mb-16" color="blue" />
          <MonospaceLabel className="block mb-8">
            EXPLORE BY TOPIC
          </MonospaceLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSIGHTS_CATEGORIES.slice(0, 6).map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                count={categoryCounts[cat.slug]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}