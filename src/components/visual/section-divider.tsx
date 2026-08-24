"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import { cn } from "@/lib/cn";

interface SectionDividerProps {
  className?: string;
  variant?: "line" | "gradient" | "dots";
}

export function SectionDivider({
  className,
  variant = "line",
}: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "dots") {
    return (
      <div className={cn("flex justify-center gap-1 py-8", className)} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1 w-1 rounded-full bg-border"
          />
        ))}
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        className={cn("h-px bg-gradient-to-r from-transparent via-border to-transparent", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className={cn("h-px bg-border origin-left", className)}
      {...(shouldReduceMotion
        ? {}
        : {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          })}
      aria-hidden="true"
    />
  );
}