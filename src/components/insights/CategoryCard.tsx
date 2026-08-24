import React from 'react';
import Link from 'next/link';
import { Category } from '@/lib/insights/types';
import { BlueprintCorners } from './BlueprintCorners';

const CATEGORY_ACCENTS: Record<string, string> = {
  'business-software': 'border-t-blue-500/60',
  'business-automation': 'border-t-orange-500/60',
  'management-systems': 'border-t-emerald-500/60',
  'api-integrations': 'border-t-violet-500/60',
  'data-reporting': 'border-t-cyan-500/60',
  'web-applications': 'border-t-indigo-500/60',
  'software-development': 'border-t-sky-500/60',
};

const CATEGORY_ICON_COLORS: Record<string, string> = {
  'business-software': 'text-blue-400',
  'business-automation': 'text-orange-400',
  'management-systems': 'text-emerald-400',
  'api-integrations': 'text-violet-400',
  'data-reporting': 'text-cyan-400',
  'web-applications': 'text-indigo-400',
  'software-development': 'text-sky-400',
};

interface CategoryCardProps {
  category: Category;
  count?: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  const accentBorder = CATEGORY_ACCENTS[category.slug] || 'border-t-blue-500/60';
  const iconColor = CATEGORY_ICON_COLORS[category.slug] || 'text-blue-400';

  return (
    <Link
      href={`/insights/category/${category.slug}`}
      className={`group relative block p-6 border border-slate-800/80 border-t-2 ${accentBorder} rounded-lg hover:border-slate-700 transition-all duration-500 bg-slate-900/60 hover:bg-slate-900/80`}
    >
      <BlueprintCorners size={10} />

      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300 text-[15px]">
          {category.name}
        </h3>
        {typeof count === 'number' && (
          <span className="font-mono text-[10px] text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded shrink-0">
            {count}
          </span>
        )}
      </div>

      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {category.description}
      </p>

      {/* Arrow cue */}
      <span className={`inline-flex items-center gap-1.5 text-[12px] ${iconColor} opacity-70 group-hover:opacity-100 group-hover:gap-2.5 transition-all duration-300`}>
        Explore
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>

      {/* Subtle grid on hover */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </Link>
  );
}