"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { Badge } from "@/components/ui/badge";
import { SystemFlowMini } from "@/components/projects/project-system-flow-mini";
import type { Project } from "@/types/project";

interface ProjectListingCardProps {
  project: Project;
  className?: string;
}

export function ProjectListingCard({ project, className }: ProjectListingCardProps) {
  const number = String(project.order).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative block rounded-xl border border-border bg-card overflow-hidden",
        "transition-all duration-500 ease-out",
        "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1",
        className
      )}
    >
      {/* Grid overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(30,58,138,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-7 z-0">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
          <MonospaceLabel className="text-primary/70">SYSTEM / {number}</MonospaceLabel>
          <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent/80 bg-accent/10 px-2 py-1 rounded">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technical System Flow Visual (Classy Dark Panel) */}
        <div className="mt-5 rounded-lg border border-border/50 bg-muted/30 p-4 transition-all duration-500 group-hover:border-primary/20 group-hover:bg-muted/50 relative overflow-hidden">
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="relative z-10 mb-3 flex items-center justify-between border-b border-border/30 pb-2">
            <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-muted-foreground/40">System Architecture</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/20" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <SystemFlowMini nodes={project.systemFlow} />
        </div>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="muted" className="text-[10px] font-mono bg-muted/50 text-muted-foreground/80 border-0">{tech}</Badge>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
          <span>View Case Study</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Blueprint corner accents */}
      <div className="pointer-events-none absolute top-0 left-0 h-8 w-8 border-l-2 border-t-2 border-primary/0 transition-all duration-500 group-hover:border-primary/50 z-20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-r-2 border-b-2 border-primary/0 transition-all duration-500 group-hover:border-primary/50 z-20" aria-hidden="true" />
    </Link>
  );
}