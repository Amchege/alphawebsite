"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

export function TrustVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center"
      >
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Business</p>
        <p className="text-2xl font-bold text-foreground">Workflows</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Engineering</p>
        <p className="text-2xl font-bold text-foreground">Software</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">Result</p>
        <p className="text-2xl font-bold text-foreground">Business Value</p>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center"
        aria-hidden="true"
      >
        <div className="h-px w-12 bg-primary mx-auto mt-8" />
      </motion.div>

      <motion.p
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-6 text-center text-sm text-primary font-medium"
      >
        Business Software
      </motion.p>
    </div>
  );
}