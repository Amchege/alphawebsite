import React from 'react';
import Link from 'next/link';
import { BlueprintCorners } from './BlueprintCorners';

const SOLUTIONS_MAP: Record<string, { name: string; description: string; href: string }> = {
  'business-software': {
    name: 'Business Software',
    description: 'Custom software built around your operational processes.',
    href: '/solutions/business-software',
  },
  'management-systems': {
    name: 'Management Systems',
    description: 'Centralized systems for managing daily operations.',
    href: '/solutions/management-systems',
  },
  'custom-web-applications': {
    name: 'Custom Web Applications',
    description: 'Web applications that solve specific business problems.',
    href: '/solutions/custom-web-applications',
  },
  'business-automation': {
    name: 'Business Automation',
    description: 'Automate repetitive workflows and reduce manual work.',
    href: '/solutions/business-automation',
  },
  'api-integrations': {
    name: 'API & Integrations',
    description: 'Connect your business systems through APIs.',
    href: '/solutions/api-integrations',
  },
  'data-business-intelligence': {
    name: 'Data & Business Intelligence',
    description: 'Dashboards and reporting for better visibility.',
    href: '/solutions/data-business-intelligence',
  },
};

interface RelatedSolutionsProps {
  solutionSlugs: string[];
  compact?: boolean;
}

export function RelatedSolutions({ solutionSlugs, compact = false }: RelatedSolutionsProps) {
  const solutions = solutionSlugs.map((s) => SOLUTIONS_MAP[s]).filter(Boolean);
  if (solutions.length === 0) return null;

  return (
    <div>
      <h3 className="font-mono text-[10px] text-orange-500 uppercase tracking-[0.15em] mb-5">
        Related Solutions
      </h3>
      <div className={`grid gap-4 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
        {solutions.map((sol) => (
          <Link
            key={sol.href}
            href={`${sol.href}?source=insight-related`}
            className="group relative p-5 border border-slate-800/80 rounded-lg hover:border-blue-500/40 transition-all duration-500 bg-slate-900/20"
          >
            <BlueprintCorners size={10} />
            <h4 className="text-white font-medium mb-1.5 group-hover:text-blue-400 transition-colors duration-300 text-[15px]">
              {sol.name}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">{sol.description}</p>
            <span className="text-[13px] text-orange-500 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
              Explore This Solution
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}