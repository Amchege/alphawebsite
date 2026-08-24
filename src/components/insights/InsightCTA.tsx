import React from 'react';
import Link from 'next/link';
import { TechnicalGrid } from './TechnicalGrid';

export function InsightCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden border-t border-slate-800/50">
      <TechnicalGrid opacity={0.015} />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-2xl mx-auto">
          Have a Business Problem Software Could Solve?
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you're trying to improve, automate or build.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-started?source=insight-cta"
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors duration-200"
          >
            Start a Project
          </Link>
          <Link
            href="/solutions"
            className="px-8 py-3.5 border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-white font-medium rounded transition-all duration-200"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}