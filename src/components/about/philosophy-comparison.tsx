"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";
import { softwarePhilosophy } from "@/data/about";

export function PhilosophyComparison() {
  const [activeSide, setActiveSide] = useState<"off-the-shelf" | "custom">("off-the-shelf");
  const shouldReduceMotion = useReducedMotion();

  const leftItems = [
    "Fixed workflow",
    "Generic features",
    "Business adapts to software",
    "One-size-fits-all approach",
    "Limited customization",
    "Rigid upgrade paths",
    "Template-based interfaces",
  ];

  const rightItems = [
    "Purpose-built workflow",
    "Specific features",
    "Software adapts to business",
    "Tailored to your organization",
    "Flexible architecture",
    "Custom interfaces",
  ];

  const activeItems = activeSide === "off-the-shelf" ? leftItems : rightItems;
  const inactiveItems = activeSide === "off-the-shelf" ? rightItems : leftItems;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {/* Off-the-shelf */}
      <motion.div
        onClick={() => setActiveSide("off-the-shelf")}
        className={cn(
          "cursor-pointer rounded-xl border-2 p-6 transition-all duration-200",
          activeSide === "off-the-shelf"
            ? "border-primary bg-primary-light/30 text-foreground shadow-sm shadow-primary/5"
            : "border-border bg-card text-muted-foreground hover:border-primary/20"
        )}
        whileTap={shouldReduceMotion ? {} : { scale: activeSide === "off-the-shelf" ? 0.98 : 1 }}
        whileHover={shouldReduceMotion ? {} : { scale: activeSide === "off-the-shelf" ? 1.02 : 1 }}
      >
        <p className="text-sm font-semibold text-foreground">Off-the-Shelf Software</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Fixed workflow, generic features, business adapts to software.
        </p>
      </motion.div>

      {/* Custom */}
      <motion.div
        onClick={() => setActiveSide("custom")}
        className={cn(
          "cursor-pointer rounded-xl border-2 p-6 transition-all duration-200",
          activeSide === "custom"
            ? "border-primary bg-primary-light/30 text-foreground shadow-sm shadow-primary/5"
            : "border-border bg-card text-muted-foreground hover:border-primary/20"
        )}
        whileTap={shouldReduceMotion ? {} : { scale: activeSide === "custom" ? 0.98 : 1 }}
        whileHover={shouldReduceMotion ? {} : { scale: activeSide === "custom" ? 1.02 : 1 }}
      >
        <p className="text-sm font-semibold text-foreground">Custom Software</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Purpose-built workflow, specific features, software adapts to business.
        </p>
      </motion.div>

      {/* Visual comparison indicator */}
      <div className="flex items-center justify-center sm:col-span-2 pt-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className={cn(
              "h-px w-8 transition-colors duration-300",
              activeSide === "off-the-shelf" ? "bg-border" : "bg-primary"
            )}
          />
          <span className={cn("transition-colors duration-300", activeSide === "custom" ? "text-primary font-medium" : "text-muted-foreground")}>
            Better fit for complex operations
          </span>
          <span
            className={cn(
              "h-px w-8 transition-colors duration-300",
              activeSide === "off-the-shelf" ? "bg-border" : "bg-primary"
            )}
          />
        </div>
      </div>

      {/* Active items */}
      <div className="mt-4 sm:col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSide}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            {activeItems.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200",
                  activeSide === "custom" ? "bg-primary/5 text-primary" : "bg-muted text-muted-foreground"
                )}
              >
                <div className={cn(
                  "flex h-4 w-4 rounded-full border transition-colors duration-200",
                  activeSide === "custom" ? "border-primary bg-primary" : "border-border bg-background"
                )} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}