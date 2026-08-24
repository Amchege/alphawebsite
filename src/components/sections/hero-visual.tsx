"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Users, Layers, Code, Database, Plug, BarChart3 } from "lucide-react";
import { useReducedMotion } from "@/lib/utils";

const systemLayers = [
  { label: "Operations & Users", Icon: Users },
  { label: "Application", Icon: Layers },
  { label: "API & Logic", Icon: Code },
  { label: "Database", Icon: Database },
  { label: "Integrations", Icon: Plug },
  { label: "Reports & Insights", Icon: BarChart3 },
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  const nodeAnim = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 + index * 0.08 },
        };

  return (
    <div
      className="relative rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="flex flex-col items-center">
        {systemLayers.map((layer, index) => (
          <Fragment key={layer.label}>
            {/* Node */}
            <motion.div
              {...nodeAnim(index)}
              className="flex w-full max-w-xs items-center gap-3 rounded-lg border border-border bg-card/80 px-4 py-3 shadow-sm backdrop-blur-sm"
            >
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-primary-light">
                <layer.Icon size={14} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {layer.label}
              </span>
              {/* Small data indicators */}
              <div className="ml-auto flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
              </div>
            </motion.div>

            {/* Connector with flowing dot */}
            {index < systemLayers.length - 1 && (
              <div className="relative flex h-7 justify-center">
                <div className="w-px bg-border" />
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                    animate={{ y: [0, 24], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}