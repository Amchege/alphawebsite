import React from 'react';

interface MonospaceLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'div' | 'p';
}

export function MonospaceLabel({ children, className = '', as: Tag = 'span' }: MonospaceLabelProps) {
  return (
    <Tag
      className={`font-mono text-[11px] tracking-[0.2em] uppercase text-orange-500 ${className}`}
    >
      {children}
    </Tag>
  );
}