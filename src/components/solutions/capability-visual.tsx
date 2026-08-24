"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";
import type { CapabilityGroup } from "@/types/solution";

interface CapabilityVisualProps {
  capabilities: CapabilityGroup[];
}

const flowVisuals: Record<string, { steps: string[] }> = {
  Frontend: {
    steps: ["User", "Interface", "Application"],
  },
  Backend: {
    steps: ["Request", "API", "Logic", "Database"],
  },
  Data: {
    steps: ["Input", "Process", "Store", "Report"],
  },
  Integrations: {
    steps: ["Application", "Payment", "Notify", "External API"],
  },
  Triggers: {
    steps: ["Event", "Evaluate", "Execute"],
  },
  Actions: {
    steps: ["Trigger", "Action", "Result"],
  },
  "Flow Control": {
    steps: ["Input", "Branch", "Execute"],
  },
  Monitoring: {
    steps: ["Execute", "Log", "Alert"],
  },
  "User Experience": {
    steps: ["User", "Navigate", "Interact"],
  },
  Architecture: {
    steps: ["Request", "Route", "Process"],
  },
  Security: {
    steps: ["Request", "Authenticate", "Authorize"],
  },
  Performance: {
    steps: ["Request", "Cache", "Respond"],
  },
  Records: {
    steps: ["Input", "Validate", "Store"],
  },
  Operations: {
    steps: ["Action", "Process", "Update"],
  },
  Financial: {
    steps: ["Transaction", "Validate", "Record"],
  },
  Reporting: {
    steps: ["Data", "Aggregate", "Visualize"],
  },
  Dashboards: {
    steps: ["Data", "Calculate", "Display"],
  },
  Reports: {
    steps: ["Schedule", "Generate", "Distribute"],
  },
  Analytics: {
    steps: ["Collect", "Analyze", "Insight"],
  },
  "Data Layer": {
    steps: ["Source", "Process", "Store"],
  },
  "API Design": {
    steps: ["Request", "Validate", "Respond"],
  },
};

export function CapabilityVisual({ capabilities }: CapabilityVisualProps) {
  const [activeGroup, setActiveGroup] = useState(capabilities[0]?.label || "");
  const shouldReduceMotion = useReducedMotion();

  const currentVisual = flowVisuals[activeGroup];

  return (
    <div className="rounded-xl border border-border bg-muted/20 p-6">
      {/* Group tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {capabilities.map((group) => (
          <button
            key={group.label}
            onClick={() => setActiveGroup(group.label)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
              activeGroup === group.label
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Visual */}
      <div className="min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentVisual && (
            <motion.div
              key={activeGroup}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              {currentVisual.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex h-10 w-24 items-center justify-center rounded-lg border border-border bg-card px-3">
                    <span className="text-xs font-medium text-foreground">{step}</span>
                  </div>
                  {i < currentVisual.steps.length - 1 && (
                    <div className="flex flex-col items-center">
                      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-primary/40">
                        <path d="M6 1v14M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}