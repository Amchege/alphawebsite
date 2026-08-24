"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import { MonospaceLabel } from "@/components/ui/monospace-label";

const stackLayers = [
  { label: "User Experience", tech: "React · Next.js · Tailwind CSS" },
  { label: "Application", tech: "Node.js · Express · TypeScript" },
  { label: "Data", tech: "PostgreSQL · Prisma" },
  { label: "Integrations", tech: "REST APIs · Webhooks · Third-party" },
];

export function TechnologyStackVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {stackLayers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-lg border border-border bg-card p-4"
        >
          <MonospaceLabel className="text-primary">{layer.label}</MonospaceLabel>
          <p className="mt-2 text-sm text-muted-foreground">{layer.tech}</p>
        </motion.div>
      ))}
    </div>
  );
}