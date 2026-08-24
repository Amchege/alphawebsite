"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface LineRevealProps {
  className?: string;
  delay?: number;
}

export function LineReveal({ className, delay = 0 }: LineRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} style={{ height: 1 }} />;
  }

  return (
    <motion.div
      className={className}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: 1, transformOrigin: "left" }}
    />
  );
}