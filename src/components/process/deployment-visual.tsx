"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";

const deployStages = [
  { label: "Local Development", status: "complete" },
  { label: "Staging / Validation", status: "complete" },
  { label: "Production", status: "ready" },
];

export function DeploymentVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-3">
      {deployStages.map((stage, i) => (
        <motion.div
          key={stage.label}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className={cn(
            "flex w-full max-w-xs items-center justify-between rounded-lg border px-4 py-3",
            stage.status === "ready" ? "border-accent/30 bg-accent-light/30" : "border-border bg-card"
          )}
        >
          <span className="text-sm font-medium text-foreground">{stage.label}</span>
          {stage.status === "complete" ? (
            <span className="text-xs text-muted-foreground">Complete</span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Ready
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}