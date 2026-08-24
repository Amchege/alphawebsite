"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

interface RotatingTextProps {
  items: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  items,
  interval = 3500,
  className,
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (shouldReduceMotion || items.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval, items.length, shouldReduceMotion]);

  if (shouldReduceMotion || items.length <= 1) {
    return <span className={className}>{items[0]}</span>;
  }

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}