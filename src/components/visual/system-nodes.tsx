"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
}

interface SystemNodesProps {
  nodes: NodeData[];
  connections: Connection[];
  className?: string;
  interactive?: boolean;
  showLabels?: boolean;
}

export function SystemNodes({
  nodes,
  connections,
  className,
  interactive = true,
  showLabels = true,
}: SystemNodesProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!interactive || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x: -x * 6, y: -y * 6 });
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, [interactive, shouldReduceMotion]);

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  const nodeAnim = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.4, delay: 0.8 + index * 0.1 },
        };

  const parallaxStyle = shouldReduceMotion
    ? {}
    : {
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        transition: "transform 0.3s ease-out",
      };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={parallaxStyle}>
        {/* Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {connections.map((conn, i) => {
            const from = getNodeById(conn.from);
            const to = getNodeById(conn.to);
            if (!from || !to) return null;
            return (
              <motion.line
                key={`${conn.from}-${conn.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.25"
                {...(shouldReduceMotion
                  ? {}
                  : {
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { pathLength: 1, opacity: 1 },
                      transition: { duration: 0.8, delay: 0.5 + i * 0.08 },
                    })}
              />
            );
          })}
        </svg>

        {/* Nodes — centering done via inner wrapper, not transform */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            {...nodeAnim(index)}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <div style={{ transform: "translate(-50%, -50%)" }}>
              <div className="relative group/node">
                <div
                  className={cn(
                    "h-8 w-8 rounded-md flex items-center justify-center",
                    "transition-all duration-200",
                    "bg-accent text-foreground",
                    "hover:bg-white hover:text-foreground hover:shadow-lg hover:shadow-white/20"
                  )}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/60 group-hover/node:bg-accent transition-colors duration-200" />
                </div>
                {showLabels && (
                  <span
                    className={cn(
                      "absolute left-full top-1/2 -translate-y-1/2 ml-2.5 whitespace-nowrap",
                      "text-[10px] font-medium uppercase tracking-[0.12em]",
                      "text-primary-foreground/35 transition-colors duration-200",
                      "group-hover/node:text-primary-foreground/60"
                    )}
                  >
                    {node.label}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}