"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import type { WorkflowStep } from "@/types/project";

interface ProjectWorkflowSectionProps {
  workflow: WorkflowStep[];
}

export function ProjectWorkflowSection({ workflow }: ProjectWorkflowSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (workflow.length === 0) return null;

  return (
    <div className="relative pl-8">
      <div className="absolute top-2 left-[11px] bottom-2 w-px bg-border" />

      <div className="space-y-8">
        {workflow.map((step, i) => (
          <div key={step.step} className="relative">
            <motion.div
              {...(shouldReduceMotion
                ? {}
                : {
                    whileInView: {
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-primary-foreground)",
                      borderColor: "var(--color-primary)",
                    },
                    viewport: { once: true },
                    transition: { delay: i * 0.12, duration: 0.3 },
                  })}
              className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background text-[10px] font-bold text-foreground"
            >
              {step.step}
            </motion.div>

            <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}