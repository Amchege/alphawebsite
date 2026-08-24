"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
}

export function ScaleReveal({
  children,
  className,
  delay = 0,
  scale = 0.95,
}: ScaleRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}