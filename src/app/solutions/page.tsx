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
import { HeroSentinel } from "@/components/layout/HeroSentinel";
import { solutions } from "@/data/solutions";

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
  [
    { x: 0.5, y: 0.05 },
    { x: 0.5, y: 0.22 },
    { x: 0.5, y: 0.39 },
    { x: 0.5, y: 0.56 },
    { x: 0.5, y: 0.73 },
    { x: 0.3, y: 0.85 },
    { x: 0.5, y: 0.97 },
  ],
  [
    { x: 0.5, y: 0.73 },
    { x: 0.7, y: 0.85 },
    { x: 0.5, y: 0.97 },
  ],
];

/* ── Generalized process (derived from solution workflows) ── */
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, operations, and where current processes create friction.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Map workflows, design the user experience, and define the system architecture.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the frontend, backend, database, and integrations.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Validate functionality, security, and usability with real scenarios.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Launch the system with monitoring and support in place.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Iterate based on feedback and evolving business needs.",
  },
];

/* ── Aggregate unique technologies from all solutions ── */
function getAggregatedTech() {
  const categories: Record<string, string[]> = {
    Frontend: [],
    Backend: [],
    Database: [],
    APIs: [],
    Infrastructure: [],
    Analytics: [],
  };

  solutions.forEach((s) => {
    categories.Frontend.push(...s.technology.frontend);
    categories.Backend.push(...s.technology.backend);
    categories.Database.push(...s.technology.database);
    categories.APIs.push(...s.technology.apis);
    categories.Infrastructure.push(...s.technology.infrastructure);
    categories.Analytics.push(...s.technology.analytics);
  });

  return Object.entries(categories)
    .map(([label, items]) => ({
      label,
      items: [...new Set(items)].filter(Boolean),
    }))
    .filter((group) => group.items.length > 0);
}

const techStack = getAggregatedTech();

/* ── Aggregate unique audience segments ── */
const audiences = [...new Set(solutions.flatMap((s) => s.whoItsFor))];

/* ─────────────────────────────────────────────────────────── */

export default function SolutionsPage() {
  const publishedSolutions = solutions
    .filter((s) => s.status === "published")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {/* ── Hero ── */}
      <Section className="relative overflow-hidden pt-32 pb-0 md:pt-36">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions" },
            ]}
            className="mb-6"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">
                  What We Build
                </MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  Software Solutions Built Around Your Business.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-4 min-h-[2em]">
                  <span className="text-lg text-primary/70">
                    We design and build{" "}
                    <RotatingText
                      items={rotatingTerms}
                      interval={3000}
                    />{" "}
                    that solve real operational problems.
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 max-w-xl text-base text-muted-foreground">
                  No generic templates. No forcing your business into
                  off-the-shelf tools. We start with how you actually work and
                  build from there.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <LinkButton
                    href="/get-started"
                    variant="accent"
                    size="lg"
                  >
                    Start a Project
                  </LinkButton>
                  <LinkButton
                    href="/projects"
                    variant="secondary"
                    size="lg"
                  >
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

      <HeroSentinel />

      {/* ── Solutions Grid ── */}
      <Section className="pt-16 pb-16 md:pb-24">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">
              Solution Categories
            </MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What We Can Build For You
            </h2>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedSolutions.map((solution, index) => (
              <SolutionListingCard
                key={solution.slug}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How We Build ── */}
      <Section className="relative border-t border-border/50 pt-16 pb-16 md:pt-24 md:pb-24">
        <TechnicalGrid opacity={0.02} className="z-0" />
        <Container className="relative z-10">
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">
              Our Process
            </MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How We Build
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              A structured approach that moves from understanding your business
              to delivering a system that works in production.
            </p>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.06}>
                <div className="bg-card p-6 sm:p-7">
                  <span className="font-mono text-3xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Technology Stack ── */}
      <Section className="border-t border-border/50 pt-16 pb-16 md:pt-24 md:pb-24">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">
              Technology
            </MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built With a Modern Stack
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              We use proven, well-supported technologies that are built to last.
            </p>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 space-y-8">
            {techStack.map((group, groupIndex) => (
              <ScrollReveal
                key={group.label}
                delay={groupIndex * 0.06}
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                    {group.label}
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border border-border/60 bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Who We Build For ── */}
      <Section className="relative border-t border-border/50 pt-16 pb-16 md:pt-24 md:pb-24">
        <GradientField variant="blue" intensity="low" className="z-0" />
        <Container className="relative z-10">
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">
              Who We Build For
            </MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              If This Sounds Like You
            </h2>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <ScrollReveal key={audience} delay={index * 0.04}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {audience}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Bottom CTA ── */}
      <Section className="relative border-t border-border/50 pt-16 pb-24 md:pt-24 md:pb-32">
        <GradientField variant="blue" intensity="low" className="z-0" />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">
              Get Started
            </MonospaceLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Have a Problem to Solve?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Tell us about your business and what you&apos;re trying to
              achieve. We&apos;ll figure out the best way to get there.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <LinkButton
                href="/get-started"
                variant="accent"
                size="lg"
              >
                Start a Project
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Contact Us
              </LinkButton>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}