import React from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/insights/utils';

export function MidArticleCTA() {
  return (
    <div className="my-12 p-6 border border-slate-800/80 rounded-lg bg-slate-900/30">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-white font-medium text-[15px]">
            Building something similar?
          </p>
          <p className="text-slate-500 text-sm mt-1">
            See how we approach business software development.
          </p>
        </div>
        <Link
          href="/solutions?source=insight-mid-cta"
          onClick={() => trackEvent('mid_article_cta_clicked')}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white rounded font-medium text-sm transition-all duration-200"
        >
          Explore Our Solutions
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}