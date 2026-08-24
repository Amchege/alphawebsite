"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { SolutionListingCard } from "@/components/solutions/solution-listing-card";
import { RotatingText } from "@/components/animations/rotating-text";
import { LineReveal } from "@/components/animations/line-reveal";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { solutions } from "@/data/solutions";
import { useReducedMotion } from "@/lib/utils";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

const rotatingTerms = [
  "Business Software",
  "Custom Web Apps",
  "Automation",
  "Management Systems",
  "System Integrations",
];

const solutionsFlowNodes = [
  { id: "need", label: "Business Need", x: 50, y: 5 },
  { id: "ux", label: "User Experience", x: 50, y: 22 },
  { id: "app", label: "Application", x: 50, y: 39 },
  { id: "logic", label: "API / Logic", x: 50, y: 56 },
  { id: "db", label: "Database", x: 50, y: 73 },
  { id: "int", label: "Integrations", x: 30, y: 85 },
  { id: "insights", label: "Insights", x: 70, y: 85 },
  { id: "result", label: "Business Value", x: 50, y: 97 },
];

const solutionsFlowConnections = [
  { from: "need", to: "ux" },
  { from: "ux", to: "app" },
  { from: "app", to: "logic" },
  { from: "logic", to: "db" },
  { from: "db", to: "int" },
  { from: "db", to: "insights" },
  { from: "int", to: "result" },
  { from: "insights", to: "result" },
];

const solutionsFlowPaths = [
  [{ x: 0.5, y: 0.05 }, { x: 0.5, y: 0.22 }, { x: 0.5, y: 0.39 }, { x: 0.5, y: 0.56 }, { x: 0.5, y: 0.73 }, { x: 0.3, y: 0.85 }, { x: 0.5, y: 0.97 }],
  [{ x: 0.5, y: 0.73 }, { x: 0.7, y: 0.85 }, { x: 0.5, y: 0.97 }],
];

export default function SolutionsPage() {
  const shouldReduceMotion = useReducedMotion();
  const publishedSolutions = solutions
    .filter((s) => s.status === "published")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 pb-0 md:pt-36">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
            className="mb-6"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">What We Build</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  Software Solutions Built Around Your Business.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-4 min-h-[2em]">
                  <span className="text-lg text-primary/70">
                    From internal management platforms to customer-facing{" "}
                    <RotatingText items={rotatingTerms} interval={3000} />
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 max-w-xl text-base text-muted-foreground">
                  From internal management platforms to customer-facing applications, we design and build software that solves real operational problems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <LinkButton href="/get-started" variant="accent" size="lg">
                    Start a Project
                  </LinkButton>
                  <LinkButton href="/projects" variant="secondary" size="lg">
                    Explore Our Work
                  </LinkButton>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15} className="hidden lg:block">
              <SoftwareSystemVisual
                variant="custom"
                className="h-[400px]"
                nodes={solutionsFlowNodes}
                connections={solutionsFlowConnections}
                paths={solutionsFlowPaths}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="pt-16 pb-16 md:pb-24">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">Solution Categories</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What We Can Build For You
            </h2>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedSolutions.map((solution, index) => (
              <SolutionListingCard key={solution.slug} solution={solution} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
