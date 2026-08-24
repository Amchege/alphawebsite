'use client';

import React, { useState } from 'react';
import { TOCItem } from '@/lib/insights/types';

interface TableOfContentsProps {
  items: TOCItem[];
  activeSection: string;
}

export function TableOfContents({ items, activeSection }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (items.length === 0) return null;

  return (
    <div className="border border-slate-800/80 rounded-lg overflow-hidden bg-slate-900/30">
      {/* Mobile toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden w-full flex items-center justify-between p-4 text-left hover:bg-slate-900/30 transition-colors"
        aria-expanded={!isCollapsed}
      >
        <span className="font-mono text-[10px] text-orange-500 uppercase tracking-[0.15em]">
          On This Page
        </span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
            isCollapsed ? '' : 'rotate-180'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <nav
        className={`${isCollapsed ? 'hidden lg:block' : 'block'} p-4 lg:p-5`}
        aria-label="Table of contents"
      >
        <span className="hidden lg:block font-mono text-[10px] text-orange-500 uppercase tracking-[0.15em] mb-4">
          On This Page
        </span>

        <ul className="space-y-0.5">
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <a
                href={`#${item.id}`}
                className={`block text-[13px] py-1.5 transition-colors duration-200 border-l-2 ${
                  item.level === 3 ? 'pl-5' : 'pl-3'
                } ${
                  activeSection === item.id
                    ? 'text-orange-400 border-orange-500'
                    : 'text-slate-500 border-transparent hover:text-slate-300 hover:border-slate-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 96;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}