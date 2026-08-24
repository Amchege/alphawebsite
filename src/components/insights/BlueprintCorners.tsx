import React from 'react';

interface BlueprintCornersProps {
  className?: string;
  size?: number;
}

export function BlueprintCorners({ className = '', size = 12 }: BlueprintCornersProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute top-0 left-0 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ width: size, height: size }}
      />
      <div
        className="absolute bottom-0 right-0 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ width: size, height: size }}
      />
    </div>
  );
}