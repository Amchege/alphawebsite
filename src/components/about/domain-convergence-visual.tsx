"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import Link from "next/link";

const domains = [
  { name: "Property Management", slug: "property-management-system" },
  { name: "Education", slug: "school-management-system" },
  { name: "Automotive Services", slug: "car-wash-management-system" },
  { name: "Beauty & Personal Care", slug: "salon-barbershop-management-system" },
];

export function DomainConvergenceVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
      {/* Left Side: Domains */}
      <div className="flex flex-col gap-3 w-full sm:w-auto">
        {domains.map((domain, i) => (
          <motion.div
            key={domain.name}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link
              href={`/projects/${domain.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5 transition-all hover:border-primary/40 hover:bg-primary-light/10 hover:shadow-sm"
            >
              <div className="h-2 w-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
              <span className="text-sm font-medium text-foreground">{domain.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Center Arrow / Convergence */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-center text-muted-foreground/30 px-2"
        aria-hidden="true"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="rotate-90 sm:rotate-0">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>

      {/* Right Side: Result */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-primary-light/5 p-6 text-center min-w-[180px]"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary/60">Result</span>
        <span className="text-lg font-bold text-foreground">Custom Business Systems</span>
      </motion.div>
    </div>
  );
}