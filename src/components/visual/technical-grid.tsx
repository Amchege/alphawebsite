"use client";

import { cn } from "@/lib/cn";

interface TechnicalGridProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export function TechnicalGrid({
  className,
  opacity = 0.03,
  size = 24,
}: TechnicalGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(rgba(30,58,138,${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,58,138,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
      aria-hidden="true"
    />
  );
}