"use client";

import { motion, type MotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

type MotionWrapperProps = MotionProps & {
  children: React.ReactNode;
  as?: "div" | "span" | "section" | "article";
};

/**
 * Wrapper that respects the user's reduced motion preference.
 * When reduced motion is enabled, renders a plain HTML element with no animation.
 */
export function MotionWrapper({
  children,
  as = "div",
  ...motionProps
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag>{children}</Tag>;
  }

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}