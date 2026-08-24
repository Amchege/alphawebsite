import React from 'react';
import { CalloutType } from '@/lib/insights/types';

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode;
}

const STYLES: Record<CalloutType, { border: string; bg: string; label: string; labelColor: string }> = {
  info: {
    border: 'border-l-blue-500',
    bg: 'bg-blue-950/20',
    label: 'INFO',
    labelColor: 'text-blue-400',
  },
  tip: {
    border: 'border-l-orange-500',
    bg: 'bg-orange-950/20',
    label: 'TIP',
    labelColor: 'text-orange-400',
  },
  important: {
    border: 'border-l-blue-500',
    bg: 'bg-blue-950/20',
    label: 'IMPORTANT',
    labelColor: 'text-blue-400',
  },
  warning: {
    border: 'border-l-red-500',
    bg: 'bg-red-950/20',
    label: 'WARNING',
    labelColor: 'text-red-400',
  },
};

export function Callout({ type, children }: CalloutProps) {
  const s = STYLES[type];

  return (
    <div className={`my-8 p-5 border-l-4 ${s.border} ${s.bg} rounded-r-lg`}>
      <p className={`font-mono text-[10px] ${s.labelColor} uppercase tracking-[0.15em] mb-2.5`}>
        {s.label}
      </p>
      <div className="text-slate-300 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}