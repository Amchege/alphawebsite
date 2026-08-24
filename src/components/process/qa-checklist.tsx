"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useReducedMotion } from "@/lib/utils";

const checklistItems = [
  "User Flow",
  "API Endpoints",
  "Database Operations",
  "Responsive UI",
  "Authentication",
  "Error Handling",
  "Performance",
];

export function QaChecklist() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-xl border border-border bg-muted/20 p-6">
      <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
        Illustrative QA Checklist
      </p>
      <div className="space-y-3">
        {checklistItems.map((item, i) => (
          <motion.div
            key={item}
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <Check size={12} className="text-primary" />
            </div>
            <span className="text-sm text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}