"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";
import type { ProcessStage } from "@/types/process";

interface DevelopmentPipelineProps {
  stages: ProcessStage[];
  className?: string;
}

export function DevelopmentPipeline({ stages, className }: DevelopmentPipelineProps) {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleStage = (id: string) => {
    setActiveStage(activeStage === id ? null : id);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Progress line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" aria-hidden="true">
        <motion.div
          className="w-full bg-primary origin-top"
          initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Stages */}
      <div className="space-y-0">
        {stages.map((stage, index) => {
          const isActive = activeStage === stage.number;

          return (
            <div
              key={stage.number}
              className="relative pl-14"
            >
              {/* Node */}
              <button
                onClick={() => toggleStage(stage.number)}
                className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background text-sm font-bold text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 z-10 cursor-pointer hover:border-primary/50"
                aria-expanded={isActive}
                aria-label={`${stage.number} ${stage.title}`}
              >
                {stage.number}
              </button>

              {/* Content — uses whileInView for reliable scroll visibility */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{stage.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="hidden sm:block flex-shrink-0">
                    <span className="inline-block rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground whitespace-nowrap">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-lg border border-border bg-muted/30 p-5">
                        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">What this involves</p>
                        <ul className="space-y-2">
                          {stage.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2.5">
                              <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                              <span className="text-sm text-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}