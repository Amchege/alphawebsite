"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

const layers = [
  { label: "REPORTING", detail: "Data & Analytics" },
  { label: "INTEGRATIONS", detail: "Payments / Notifications" },
  { label: "DATABASE", detail: "PostgreSQL / Prisma" },
  { label: "API", detail: "REST Endpoints" },
  { label: "APPLICATION LOGIC", detail: "Node.js / Express" },
  { label: "FRONTEND", detail: "React / Next.js" },
  { label: "USER EXPERIENCE", detail: "Interfaces & Dashboards" },
];

export function StackLayersVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-2xl py-8">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative"
          style={{
            zIndex: layers.length - i,
            marginLeft: `${i * 12}px`,
            marginRight: `${i * 12}px`,
          }}
        >
          <div className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-3 shadow-sm transition-colors hover:border-primary/30 hover:bg-primary-light/10 hover:shadow-md hover:shadow-primary/5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold text-primary/40">
                {String(layers.length - i).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-foreground tracking-wide">
                {layer.label}
              </span>
            </div>
            <span className="hidden sm:block text-xs text-muted-foreground">
              {layer.detail}
            </span>
          </div>
          {/* Connector line to next layer */}
          {i < layers.length - 1 && (
            <div className="absolute left-1/2 top-full h-4 w-px -translate-x-1/2 bg-border z-[-1]" />
          )}
        </motion.div>
      ))}
    </div>
  );
}