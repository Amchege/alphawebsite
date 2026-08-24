import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import type { Project } from "@/types/project";

interface ProjectTechStackProps {
  project: Project;
}

interface TechCategory {
  label: string;
  techs: string[];
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  const categories: TechCategory[] = [
    { label: "Frontend", techs: project.frontendTechnologies },
    { label: "Backend", techs: project.backendTechnologies },
    { label: "Database", techs: project.databaseTechnologies },
    { label: "Other", techs: project.otherTechnologies },
  ].filter((c) => c.techs.length > 0);

  if (categories.length === 0 && project.technologies.length === 0) {
    return null;
  }

  return (
    <div>
      {categories.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} delay={i * 0.08}>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <MonospaceLabel>{cat.label}</MonospaceLabel>
                <div className="mt-3 space-y-1.5">
                  {cat.techs.map((tech) => (
                    <p key={tech} className="text-sm font-medium text-foreground">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex rounded-md bg-primary-light px-3 py-1.5 text-sm font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}