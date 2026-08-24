"use client";

import { MotionWrapper } from "./motion-wrapper";

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  y?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  duration = 0.5,
  delay = 0,
  className,
  y = 30,
  threshold = 0.1,
}: ScrollRevealProps) {
  return (
    <MotionWrapper
      {...{
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: threshold },
        transition: { duration, delay, ease: "easeOut" },
        className,
      } as any}
    >
      {children}
    </MotionWrapper>
  );
}