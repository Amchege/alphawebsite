"use client";

import { Section } from "@/components/ui/section";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { ProjectCard } from "@/components/projects/project-card";
import { LineReveal } from "@/components/animations/line-reveal";
import { ScaleReveal } from "@/components/animations/scale-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { projects } from "@/data/projects";

const featuredOrder = [
  "property-management-system",
  "school-management-system",
  "car-wash-management-system",
  "salon-barbershop-management-system",
];

export function FeaturedProjects() {
  const orderedProjects = featuredOrder
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  const featured = orderedProjects[0];
  const rest = orderedProjects.slice(1);

  return (
    <Section className="bg-muted/40 relative overflow-hidden">
      <TechnicalGrid opacity={0.02} className="z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MonospaceLabel className="text-primary/60">Our Work</MonospaceLabel>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
          Software We've Built
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Real systems designed to solve real operational challenges.
        </p>
        <LineReveal className="mt-6 max-w-xs" />

        <div className="mt-12 space-y-6">
          {featured && (
            <ScaleReveal>
              <ProjectCard project={featured} variant="featured" />
            </ScaleReveal>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project) =>
              project ? (
                <ScaleReveal key={project.slug} delay={0.1}>
                  <ProjectCard project={project} variant="standard" />
                </ScaleReveal>
              ) : null
            )}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <LinkButton href="/projects" variant="secondary" size="md">
              View All Projects
            </LinkButton>
            <p className="mt-3 text-sm text-muted-foreground">
              Explore the systems, workflows and technologies behind our work.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}