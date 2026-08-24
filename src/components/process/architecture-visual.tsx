"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";
import { architectureLayers } from "@/data/process";

interface ArchitectureVisualProps {
  className?: string;
}

export function ArchitectureVisual({ className }: ArchitectureVisualProps) {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <div className="space-y-2">
        {architectureLayers.map((layer, index) => {
          const isActive = activeLayer === layer.layer;
          return (
            <motion.div
              key={layer.layer}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <button
                onClick={() => setActiveLayer(isActive ? null : layer.layer)}
                className="flex w-full items-center gap-4 rounded-lg border border-border bg-card p-4 text-left transition-all duration-200 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                aria-expanded={isActive}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-light">
                  <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{layer.layer}</p>
                  <p className="text-xs text-muted-foreground">{layer.tech}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={cn(
                    "flex-shrink-0 text-muted-foreground transition-transform duration-200",
                    isActive && "rotate-180"
                  )}
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-14 pb-4 pt-1 text-sm text-muted-foreground">{layer.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {index < architectureLayers.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-primary/30">
                    <path d="M6 1v14M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}