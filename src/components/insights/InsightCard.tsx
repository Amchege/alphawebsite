'use client';

import React from 'react';
import Link from 'next/link';
import { Insight } from '@/lib/insights/types';
import { BlueprintCorners } from './BlueprintCorners';
import { CoverImage } from './CoverImage';
import { formatDate, trackEvent } from '@/lib/insights/utils';

interface InsightCardProps {
  article: Insight;
  index?: number;
}

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  const handleClick = () => {
    trackEvent('insight_card_clicked', {
      slug: article.slug,
      category: article.category,
      position: index,
    });
  };

  return (
    <Link
      href={`/insights/${article.slug}`}
      onClick={handleClick}
      className="group relative block bg-slate-900 border border-slate-800/80 rounded-lg overflow-hidden hover:border-blue-500/60 hover:bg-slate-900/80 transition-all duration-500"
    >
      {/* Image — with gradient fallback for missing files */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <CoverImage slug={article.slug} src={article.coverImage.src} alt={article.coverImage.alt} category={article.category} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <BlueprintCorners size={10} />

        {/* Subtle grid on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6">
        <span className="font-mono text-[10px] text-orange-500/80 uppercase tracking-[0.15em]">
          {article.category.replace(/-/g, ' ')}
        </span>

        <h3 className="text-[17px] font-semibold text-white mt-2.5 mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 leading-snug">
          {article.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span className="text-slate-700">·</span>
            <span>{article.readingTime} min</span>
          </div>

          <svg
            className="w-4 h-4 text-orange-500/70 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}