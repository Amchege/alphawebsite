'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { trackEvent } from '@/lib/insights/utils';

interface InsightSearchProps {
  onSearch: (query: string) => void;
}

export function InsightSearch({ onSearch }: InsightSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (debounceRef.current) clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(() => {
        onSearch(value);
        if (value.trim()) {
          trackEvent('insight_search_performed', { query: value });
        }
      }, 250);
    },
    [onSearch]
  );

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div
      className={`relative border rounded-lg transition-all duration-200 ${
        isFocused
          ? 'border-blue-500/50 shadow-[0_0_0_1px_rgba(59,130,246,0.1)]'
          : 'border-slate-700/80 hover:border-slate-600'
      }`}
    >
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className={`w-5 h-5 transition-colors duration-200 ${
            isFocused ? 'text-blue-400' : 'text-slate-500'
          }`}
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

      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search insights by title, topic, or keyword..."
        className="w-full pl-12 pr-12 py-3.5 bg-slate-900/60 text-white placeholder-slate-600 focus:outline-none text-[15px]"
        aria-label="Search insights"
      />

      {query && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
          aria-label="Clear search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}