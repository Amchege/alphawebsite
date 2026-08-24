"use client";

import { DataFlowParticles } from "./data-flow-particles";
import { SystemNodes } from "./system-nodes";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";

type VisualVariant = "hero" | "project" | "minimal" | "custom";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface ConnectionData {
  from: string;
  to: string;
}

interface PathPoint {
  x: number;
  y: number;
}

interface SoftwareSystemVisualProps {
  variant?: VisualVariant;
  className?: string;
  nodes?: NodeData[];
  connections?: ConnectionData[];
  paths?: PathPoint[][];
}

const heroNodes = [
  { id: "user", label: "User", x: 50, y: 8 },
  { id: "frontend", label: "Frontend", x: 50, y: 28 },
  { id: "api", label: "API", x: 50, y: 48 },
  { id: "auth", label: "Auth", x: 28, y: 64 },
  { id: "data", label: "Data", x: 72, y: 64 },
  { id: "database", label: "Database", x: 50, y: 76 },
  { id: "reporting", label: "Reporting", x: 50, y: 94 },
];

const heroConnections = [
  { from: "user", to: "frontend" },
  { from: "frontend", to: "api" },
  { from: "api", to: "auth" },
  { from: "api", to: "data" },
  { from: "api", to: "database" },
  { from: "database", to: "reporting" },
];

const heroPaths = [
  [{ x: 0.5, y: 0.08 }, { x: 0.5, y: 0.28 }, { x: 0.5, y: 0.48 }, { x: 0.5, y: 0.76 }, { x: 0.5, y: 0.94 }],
  [{ x: 0.5, y: 0.48 }, { x: 0.28, y: 0.64 }],
  [{ x: 0.5, y: 0.48 }, { x: 0.72, y: 0.64 }],
];

const projectNodes = [
  { id: "app", label: "App", x: 50, y: 15 },
  { id: "logic", label: "Logic", x: 50, y: 45 },
  { id: "db", label: "Database", x: 50, y: 75 },
  { id: "output", label: "Output", x: 50, y: 95 },
];

const projectConnections = [
  { from: "app", to: "logic" },
  { from: "logic", to: "db" },
  { from: "db", to: "output" },
];

const projectPaths = [
  [{ x: 0.5, y: 0.15 }, { x: 0.5, y: 0.45 }, { x: 0.5, y: 0.75 }, { x: 0.5, y: 0.95 }],
];

const variants = {
  hero: {
    nodes: heroNodes,
    connections: heroConnections,
    paths: heroPaths,
    showLabels: true,
    interactive: true,
    particleCount: 6,
  },
  project: {
    nodes: projectNodes,
    connections: projectConnections,
    paths: projectPaths,
    showLabels: true,
    interactive: false,
    particleCount: 3,
  },
  minimal: {
    nodes: projectNodes.slice(0, 3),
    connections: projectConnections.slice(0, 2),
    paths: [projectPaths[0].slice(0, 3)],
    showLabels: false,
    interactive: false,
    particleCount: 2,
  },
  custom: {
    nodes: [],
    connections: [],
    paths: [],
    showLabels: true,
    interactive: false,
    particleCount: 3,
  },
};

export function SoftwareSystemVisual({
  variant = "hero",
  className,
  nodes: customNodes,
  connections: customConnections,
  paths: customPaths,
}: SoftwareSystemVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  const config =
    variant === "custom"
      ? {
          nodes: customNodes || [],
          connections: customConnections || [],
          paths: customPaths || [],
          showLabels: true,
          interactive: false,
          particleCount: 3,
        }
      : variants[variant];

  if (config.nodes.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!shouldReduceMotion && config.paths.length > 0 && (
        <DataFlowParticles
          paths={config.paths}
          maxParticles={config.particleCount}
          className="absolute inset-0 z-10"
        />
      )}

      <SystemNodes
        nodes={config.nodes}
        connections={config.connections}
        className="absolute inset-0 z-20"
        interactive={config.interactive}
        showLabels={config.showLabels}
      />
    </div>
  );
}