import Link from "next/link";
import { ImagePlus } from "lucide-react";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ScrollReveal key={project.slug} delay={i * 0.08}>
          <div className="group h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md">
            <Link
              href={`/projects/${project.slug}/`}
              className="block h-full"
            >
              <div className="flex items-center justify-center border-b border-border bg-muted/30 py-8">
                <div className="text-center">
                  <ImagePlus
                    size={22}
                    className="mx-auto text-muted-foreground/25"
                    strokeWidth={1.5}
                  />
                  <p className="mt-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/40">
                    Preview
                  </p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <MonospaceLabel>
                    SYSTEM / {String(project.order).padStart(2, "0")}
                  </MonospaceLabel>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.technologies.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <Badge key={t} variant="muted" className="text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}