'use client';

import React, { useState } from 'react';

const CATEGORY_GRADIENTS: Record<string, string> = {
  'business-software': 'from-blue-900 via-blue-950 to-slate-800',
  'software-development': 'from-sky-900 via-slate-950 to-slate-800',
  'business-automation': 'from-orange-900 via-slate-950 to-slate-800',
  'management-systems': 'from-emerald-900 via-slate-950 to-slate-800',
  'web-applications': 'from-indigo-900 via-slate-950 to-slate-800',
  'api-integrations': 'from-violet-900 via-slate-950 to-slate-800',
  'data-reporting': 'from-cyan-900 via-slate-950 to-slate-800',
  'software-strategy': 'from-amber-900 via-slate-950 to-slate-800',
  'industry-insights': 'from-rose-900 via-slate-950 to-slate-800',
};

const CATEGORY_LABELS: Record<string, string> = {
  'business-software': 'BUSINESS SOFTWARE',
  'software-development': 'DEVELOPMENT',
  'business-automation': 'AUTOMATION',
  'management-systems': 'MANAGEMENT',
  'web-applications': 'WEB APP',
  'api-integrations': 'API / INTEGRATION',
  'data-reporting': 'DATA & REPORTING',
  'software-strategy': 'STRATEGY',
  'industry-insights': 'INDUSTRY',
};

interface CoverImageProps {
  src: string;
  alt: string;
  slug?: string;
  category?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
}

function GradientFallback({ category }: { category?: string }) {
  const catKey = category || 'business-software';
  const label = CATEGORY_LABELS[catKey] || 'INSIGHT';

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Crosshair lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-white/[0.06]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-full w-px bg-white/[0.06]" />
      </div>
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-lg border border-white/10 flex items-center justify-center bg-white/[0.03]">
          <span className="font-mono text-2xl font-bold text-white/30">
            {label.charAt(0)}
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
    </div>
  );
}

export function CoverImage({
  src,
  alt,
  slug,
  category,
  className = '',
  sizes,
  priority,
  caption,
}: CoverImageProps) {
  const [failed, setFailed] = useState(false);

  const catKey = category || 'business-software';
  const gradient = CATEGORY_GRADIENTS[catKey] || CATEGORY_GRADIENTS['business-software'];

  const isExternal = src.startsWith('http://') || src.startsWith('https://');

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${className}`}>
      {isExternal ? (
        <>
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setFailed(true)}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth === 0) setFailed(true);
            }}
            style={{ display: failed ? 'none' : 'block' }}
          />
          {failed && <GradientFallback category={category} />}
        </>
      ) : (
        <GradientFallback category={category} />
      )}

      {caption && (
        <p className="absolute bottom-0 left-0 right-0 text-[12px] text-slate-400 bg-slate-950/80 backdrop-blur-sm px-5 py-2.5 z-10">
          {caption}
        </p>
      )}
    </div>
  );
}