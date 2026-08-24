"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/utils";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import type { Project } from "@/types/project";

interface ProjectArchitectureSectionProps {
  project: Project;
}

interface ArchLayer {
  label: string;
  techs: string[];
}

export function ProjectArchitectureSection({ project }: ProjectArchitectureSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const layers: ArchLayer[] = [];

  if (project.frontendTechnologies.length > 0) {
    layers.push({ label: "Frontend", techs: project.frontendTechnologies });
  }
  if (project.backendTechnologies.length > 0) {
    layers.push({ label: "Backend", techs: project.backendTechnologies });
  }
  if (project.databaseTechnologies.length > 0) {
    layers.push({ label: "Database", techs: project.databaseTechnologies });
  }
  if (project.otherTechnologies.length > 0) {
    layers.push({ label: "Other", techs: project.otherTechnologies });
  }

  if (layers.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/20 py-12 text-center">
        <MonospaceLabel>Architecture Details</MonospaceLabel>
        <p className="mt-2 text-sm text-muted-foreground/60">
          Architecture details to be documented.
        </p>
      </div>
    );
  }

  const nodeAnim = (index: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: index * 0.1 },
        };

  return (
    <div className="mx-auto max-w-lg">
      <div className="relative rounded-xl border border-border bg-card overflow-hidden">
        {layers.map((layer, index) => (
          <Fragment key={layer.label}>
            <motion.div {...nodeAnim(index)} className="px-6 py-5">
              <MonospaceLabel className="text-primary">{layer.label}</MonospaceLabel>
              <div className="mt-2 flex flex-wrap gap-2">
                {layer.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary-light px-2.5 py-1 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            {index < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="w-px h-4 bg-border" />
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className="text-border -mt-0.5 -mb-0.5"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}