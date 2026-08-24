import React from 'react';
import Link from 'next/link';
import { MonospaceLabel } from './MonospaceLabel';
import { TechnicalGrid } from './TechnicalGrid';
import { KnowledgeFlowVisual } from './KnowledgeFlowVisual';
import { GlowingLine } from './GlowingLine';

export function InsightsHero() {
  return (
    <section className="relative min-h-[700px] md:min-h-[750px] pt-28 md:pt-36 flex items-center bg-slate-950 overflow-hidden">
      <TechnicalGrid opacity={0.015} />

      {/* Subtle radial glow behind text — increased from /0.03 to /0.06 */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Secondary glow for depth */}
      <div
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative dots — issue #9 */}
      <div
        className="absolute bottom-[15%] left-[8%] w-48 h-48 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div
        className="absolute top-[25%] right-[5%] w-32 h-32 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text — Left */}
          <div>
            <MonospaceLabel className="block mb-6">INSIGHTS / 01</MonospaceLabel>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
              Insights on Software, Systems{' '}
              <span className="text-slate-400">&</span>{' '}
              Digital Business.
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
              Practical perspectives on building business software, automating
              workflows and designing digital systems that solve real operational
              problems.
            </p>

            {/* Metadata tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['SOFTWARE', 'BUSINESS SYSTEMS', 'ENGINEERING'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.15em] px-3 py-1.5 border border-blue-500/25 text-blue-400/80 bg-blue-950/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="#latest-insights"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded transition-colors duration-200"
            >
              Explore Insights
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>

          {/* Visual — Right */}
          <div className="relative hidden lg:block">
            <KnowledgeFlowVisual />
          </div>
        </div>
      </div>

      {/* Cinematic transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-20 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  );
}