"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";

export function CollaborationVisual() {
  const shouldReduceMotion = useReducedMotion();

  const nodeAnim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay },
        };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-lg items-center justify-center gap-6 sm:gap-10">
        <motion.div {...nodeAnim(0)} className="flex-1 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-primary/30 bg-primary-light">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-foreground">Business Knowledge</p>
          <p className="mt-1 text-xs text-muted-foreground">Domain expertise</p>
        </motion.div>

        <motion.div
          {...(shouldReduceMotion ? {} : { initial: { opacity: 0, scale: 0.5 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.4, delay: 0.3 } })}
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">+</div>
        </motion.div>

        <motion.div {...nodeAnim(0.15)} className="flex-1 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-accent/30 bg-accent-light">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M16 18l6-6-6-6M8 6l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-foreground">Technical Engineering</p>
          <p className="mt-1 text-xs text-muted-foreground">Implementation</p>
        </motion.div>
      </div>

      <motion.div
        {...(shouldReduceMotion ? {} : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.4, delay: 0.5 } })}
        className="mt-8 flex flex-col items-center"
        aria-hidden="true"
      >
        <div className="flex h-px w-12 bg-border" />
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="my-2 text-primary/40">
          <path d="M6 1v14M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="rounded-lg border border-primary/20 bg-primary-light px-5 py-2.5">
          <span className="text-sm font-semibold text-primary">Working Software</span>
        </div>
      </motion.div>
    </div>
  );
}