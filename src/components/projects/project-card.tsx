"use client";

import Link from "next/link";
import Image from "next/image";
import { ImagePlus, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "standard";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "standard",
  className,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const number = String(project.order).padStart(2, "0");

  return (
    // Changed from <Link> to <div> to prevent nested <a> tags
    <div
      className={cn(
        "group relative block rounded-xl border border-border bg-card overflow-hidden",
        "transition-all duration-300",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(30,58,138,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 z-20"
        style={{ top: "var(--scan-y, 50%)" }}
        aria-hidden="true"
      />

      {isFeatured ? (
        <div className="grid md:grid-cols-2 relative z-0">
          <div className="relative w-full h-full min-h-[250px] border-b md:border-b-0 md:border-r border-border bg-muted/30 transition-colors duration-300 group-hover:bg-primary-light/5 overflow-hidden">
            {project.heroImage ? (
              <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <ImagePlus size={28} className="mx-auto text-muted-foreground/25" strokeWidth={1.5} />
                  <MonospaceLabel className="mt-2 text-muted-foreground/30">Project Preview</MonospaceLabel>
                </div>
              </div>
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <MonospaceLabel>SYSTEM / {number}</MonospaceLabel>
              <span className="text-xs font-medium uppercase tracking-wider text-accent">{project.industry}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>
            {project.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="muted">{tech}</Badge>
                ))}
              </div>
            )}
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-200 hover:translate-x-1">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 hover:translate-x-0.5"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              {project.liveUrl && project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground border border-border px-3 py-1 rounded-md hover:border-primary/30 hover:text-primary transition-colors">
                  Visit Live Portal <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-0">
          <div className="relative w-full h-48 border-b border-border bg-muted/30 transition-colors duration-300 group-hover:bg-primary-light/5 overflow-hidden">
            {project.heroImage ? (
              <Image src={project.heroImage.src} alt={project.heroImage.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="flex items-center justify-center h-full py-10">
                <div className="text-center">
                  <ImagePlus size={24} className="mx-auto text-muted-foreground/25" strokeWidth={1.5} />
                  <MonospaceLabel className="mt-2 text-muted-foreground/30">Preview</MonospaceLabel>
                </div>
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <MonospaceLabel>SYSTEM / {number}</MonospaceLabel>
              <span className="text-[10px] font-medium uppercase tracking-wider text-accent">{project.category}</span>
            </div>
            <h3 className="mt-1.5 text-base font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.shortDescription}</p>
            {project.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="muted">{tech}</Badge>
                ))}
              </div>
            )}
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-200 hover:translate-x-1">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 hover:translate-x-0.5"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              {project.liveUrl && project.liveUrl !== "#" && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground border border-border px-3 py-1 rounded-md hover:border-primary/30 hover:text-primary transition-colors">
                  Visit Live Portal <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}