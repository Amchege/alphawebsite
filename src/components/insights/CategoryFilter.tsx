'use client';

import React from 'react';
import { Category } from '@/lib/insights/types';
import { trackEvent } from '@/lib/insights/utils';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const handleClick = (slug: string | undefined) => {
    onCategoryChange(slug);
    trackEvent('category_selected', { category: slug || 'all' });
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      <button
        onClick={() => handleClick(undefined)}
        className={`px-4 py-2 rounded font-mono text-[10px] tracking-[0.15em] uppercase transition-all duration-200 ${
          !activeCategory
            ? 'bg-blue-500/90 text-white shadow-[0_0_12px_rgba(59,130,246,0.2)]'
            : 'bg-slate-900/50 text-slate-500 border border-slate-800 hover:border-slate-600 hover:text-slate-300'
        }`}
        aria-pressed={!activeCategory}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleClick(cat.slug)}
          className={`px-4 py-2 rounded font-mono text-[10px] tracking-[0.15em] uppercase transition-all duration-200 ${
            activeCategory === cat.slug
              ? 'bg-blue-500/90 text-white shadow-[0_0_12px_rgba(59,130,246,0.2)]'
              : 'bg-slate-900/50 text-slate-500 border border-slate-800 hover:border-slate-600 hover:text-slate-300'
          }`}
          aria-pressed={activeCategory === cat.slug}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}