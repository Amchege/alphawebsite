import React from 'react';

interface TechnicalGridProps {
  opacity?: number;
  className?: string;
  color?: 'blue' | 'orange';
}

export function TechnicalGrid({
  opacity = 0.025,
  className = '',
  color = 'blue',
}: TechnicalGridProps) {
  const rgb = color === 'blue' ? '59, 130, 246' : '249, 115, 22';

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(${rgb}, ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(${rgb}, ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
  );
}