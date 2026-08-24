"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

export function TrustIntersectionVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 py-8 sm:flex-row sm:gap-0">
      
      {/* Business Circle */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 flex h-52 w-52 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full border-2 border-border bg-card/80 shadow-sm backdrop-blur-sm"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Left Side</span>
        <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">Business</h3>
        <div className="mt-3 space-y-1 text-center text-xs text-muted-foreground">
          <p>Workflows</p>
          <p>Operations</p>
          <p>Users</p>
          <p>Goals</p>
        </div>
      </motion.div>

      {/* Engineering Circle */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 -ml-16 flex h-52 w-52 sm:-ml-24 sm:h-64 sm:w-64 flex-col items-center justify-center rounded-full border-2 border-border bg-card/80 shadow-sm backdrop-blur-sm"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Right Side</span>
        <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">Engineering</h3>
        <div className="mt-3 space-y-1 text-center text-xs text-muted-foreground">
          <p>Frontend & Backend</p>
          <p>Database & APIs</p>
          <p>Architecture</p>
          <p>Integration</p>
        </div>
      </motion.div>

      {/* Center Intersection Label */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-full border-2 border-primary bg-background px-5 py-3 text-center shadow-lg shadow-primary/10">
          <p className="text-sm font-bold text-primary whitespace-nowrap">Business Software</p>
        </div>
      </motion.div>
    </div>
  );
}