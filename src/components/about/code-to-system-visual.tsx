"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

const stages = [
  { label: "Code", detail: "Writing the application" },
  { label: "Components", detail: "Reusable interface elements" },
  { label: "Application", detail: "Business logic running" },
  { label: "System", detail: "The complete solution" },
  { label: "Workflow", detail: "Operational processes" },
  { label: "Value", detail: "Business outcomes" },
];

export function CodeToSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-2">
      {stages.map((stage, i) => (
        <motion.div
          key={stage.label}
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center gap-3 text-center"
        >
          <div className="flex h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{stage.label}</p>
          </div>
          {i < stages.length - 1 && (
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              className="text-primary/25"
              aria-hidden="true"
            >
              <path d="M6 1v14M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}