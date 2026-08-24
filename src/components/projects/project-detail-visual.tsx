"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import type { SystemFlowStep } from "@/types/project";

interface ProjectDetailVisualProps {
  steps: SystemFlowStep[];
}

export function ProjectDetailVisual({ steps }: ProjectDetailVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  const nodeAnim = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12, scale: 0.9 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <div
      className="relative rounded-xl border border-border/60 bg-muted/15 p-5 sm:p-6 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/20 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/20 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20 z-10" />

      <div className="relative z-10">
        <MonospaceLabel className="text-center text-muted-foreground/40">Conceptual System Flow</MonospaceLabel>

        <div className="flex flex-col items-center mt-6">
          {steps.map((step, index) => (
            <Fragment key={step.label}>
              <motion.div
                {...nodeAnim(index)}
                className="flex w-full max-w-[260px] items-center gap-3 rounded-lg border border-border bg-card/90 px-4 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <div className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/30" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{step.label}</p>
                  {step.detail && (
                    <p className="text-[11px] text-muted-foreground truncate">{step.detail}</p>
                  )}
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="relative flex h-6 justify-center">
                  <div className="w-px bg-border" />
                  {!shouldReduceMotion && (
                    <motion.div
                      className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent shadow-sm shadow-accent/30"
                      animate={{ y: [0, 20], opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: index * 0.4,
                        ease: "linear",
                      }}
                    />
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}