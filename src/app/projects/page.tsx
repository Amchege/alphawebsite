"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectListingCard } from "@/components/projects/project-listing-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GradientField } from "@/components/visual/gradient-field";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { VideoBackground } from "@/components/ui/video-background";
import { projects } from "@/data/projects";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

// Tech visual configuration for the Hero
const heroNodes = [
  { id: "problem", label: "Business Problem", x: 25, y: 15 },
  { id: "arch", label: "System Architecture", x: 75, y: 20 },
  { id: "eng", label: "Engineering", x: 30, y: 75 },
  { id: "sys", label: "Business System", x: 70, y: 80 },
];

const heroConnections = [
  { from: "problem", to: "arch" },
  { from: "problem", to: "eng" },
  { from: "eng", to: "sys" },
  { from: "arch", to: "sys" },
];

const heroPaths = [
  [
    { x: 0.25, y: 0.15 }, 
    { x: 0.75, y: 0.20 }, 
    { x: 0.70, y: 0.80 }, 
    { x: 0.30, y: 0.75 }, 
    { x: 0.25, y: 0.15 } 
  ]
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    const published = projects
      .filter((p) => p.status === "published")
      .sort((a, b) => a.order - b.order);

    if (activeCategory === "All") return published;
    return published.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* ===== CINEMATIC VIDEO HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24 min-h-[550px] md:min-h-[650px] flex items-center">
        
        {/* 1. Video Background Layer */}
        <VideoBackground 
          src="/videos/hero-tech-bg.mp4" 
          overlayOpacity={0.80} 
        />

        {/* 2. Subtle Color Wash */}
        <GradientField variant="blue" intensity="low" className="absolute inset-0 z-[1] mix-blend-overlay" />
        
        {/* 3. Content Layer */}
        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects" },
            ]}
            className="mb-8 opacity-60"
          />

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/90 text-xs">Portfolio</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-[1.1] drop-shadow-sm">
                  Software Built Around <br />
                  <span className="text-primary">Real Business Problems.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-lg text-lg text-muted-foreground/90 leading-relaxed">
                  Explore business systems and applications designed to simplify operations, connect workflows, and give organizations better visibility.
                </p>
              </ScrollReveal>
            </div>

            {/* Interactive Tech Visual */}
            <ScrollReveal delay={0.2} className="hidden lg:block">
              <div className="opacity-80 blur-[1px]">
                <SoftwareSystemVisual
                  variant="custom"
                  className="h-[350px] xl:h-[420px]"
                  nodes={heroNodes}
                  connections={heroConnections}
                  paths={heroPaths}
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== GLOWING TRANSITION DIVIDER ===== */}
      <div className="relative h-px w-full overflow-hidden bg-border z-10">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      </div>

      {/* ===== FILTERS + GRID ===== */}
      <Section className="relative pt-12 pb-20 md:pb-28">
        <Container className="relative z-10">
          <ScrollReveal delay={0.15}>
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onFilterChange={setActiveCategory}
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.1}>
                <ProjectListingCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-muted-foreground font-mono text-sm">
                // No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
