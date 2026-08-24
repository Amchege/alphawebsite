import React from 'react';

interface GlowingLineProps {
  className?: string;
  color?: 'blue' | 'orange';
}

export function GlowingLine({ className = '', color = 'blue' }: GlowingLineProps) {
  const gradient =
    color === 'blue'
      ? 'from-transparent via-blue-500/60 to-transparent'
      : 'from-transparent via-orange-500/40 to-transparent';

  return (
    <div className={`relative w-full h-px ${className}`} aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-sm`}
      />
    </div>
  );
}