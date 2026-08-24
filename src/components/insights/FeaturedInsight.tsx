'use client';

import React from 'react';
import Link from 'next/link';
import { Insight } from '@/lib/insights/types';
import { MonospaceLabel } from './MonospaceLabel';
import { BlueprintCorners } from './BlueprintCorners';
import { TechnicalGrid } from './TechnicalGrid';
import { CoverImage } from './CoverImage';
import { formatDate, trackEvent } from '@/lib/insights/utils';

interface FeaturedInsightProps {
  article: Insight;
}

export function FeaturedInsight({ article }: FeaturedInsightProps) {
  const handleClick = () => {
    trackEvent('featured_insight_clicked', { slug: article.slug });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900/25 via-slate-950 to-slate-950">
      <TechnicalGrid opacity={0.018} />

      {/* Subtle orange accent glow for editorial warmth */}
      <div
        className="absolute top-0 right-[20%] w-[500px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <MonospaceLabel className="mb-0">FEATURED INSIGHT</MonospaceLabel>
          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
        </div>

        <Link
          href={`/insights/${article.slug}`}
          onClick={handleClick}
          className="group block"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Image — with gradient fallback */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-800/80 group-hover:border-blue-500/50 transition-colors duration-500">
             <CoverImage slug={article.slug} src={article.coverImage.src} alt={article.coverImage.alt} category={article.category} sizes="(max-width: 1024px) 100vw, 50vw" className="group-hover:scale-[1.02] transition-transform duration-700" />
              <BlueprintCorners size={14} />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <span className="font-mono text-[11px] text-orange-500 uppercase tracking-[0.15em] mb-5">
                {article.category.replace(/-/g, ' ')}
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight mb-5 group-hover:text-blue-400 transition-colors duration-300">
                {article.title}
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
                <span>{formatDate(article.publishedAt)}</span>
                <span className="hidden sm:inline text-slate-700">·</span>
                <span>{article.readingTime} min read</span>
                <span className="hidden sm:inline text-slate-700">·</span>
                <span>{article.author.name}</span>
              </div>

              <span className="inline-flex items-center gap-2.5 text-orange-500 font-medium text-[15px] group-hover:gap-4 transition-all duration-300">
                Read Insight
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
      </section>
  );
}