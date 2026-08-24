"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { RotatingText } from "@/components/animations/rotating-text";
import { LineReveal } from "@/components/animations/line-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { DevelopmentPipeline } from "@/components/process/development-pipeline";
import { ArchitectureVisual } from "@/components/process/architecture-visual";
import { CollaborationVisual } from "@/components/process/collaboration-visual";
import { QaChecklist } from "@/components/process/qa-checklist";
import { DeploymentVisual } from "@/components/process/deployment-visual";
import { TechnologyStackVisual } from "@/components/process/technology-stack-visual";
import { FaqAccordion } from "@/components/solutions/faq-accordion";
import { processStages, processFaqs, processExpectations, collaborationPoints } from "@/data/process";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/utils";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

const rotatingTerms = [
  "Business Problem",
  "Product Requirements",
  "Software Architecture",
  "User Experience",
  "Production Software",
];

const pipelineNodes = [
  { id: "problem", label: "Business Problem", x: 50, y: 3 },
  { id: "requirements", label: "Requirements", x: 50, y: 15 },
  { id: "architecture", label: "Architecture", x: 50, y: 27 },
  { id: "design", label: "Design", x: 50, y: 39 },
  { id: "development", label: "Development", x: 50, y: 51 },
  { id: "testing", label: "Testing", x: 50, y: 63 },
  { id: "deployment", label: "Deployment", x: 50, y: 75 },
  { id: "improvement", label: "Improvement", x: 50, y: 90 },
];

const pipelineConnections = [
  { from: "problem", to: "requirements" },
  { from: "requirements", to: "architecture" },
  { from: "architecture", to: "design" },
  { from: "design", to: "development" },
  { from: "development", to: "testing" },
  { from: "testing", to: "deployment" },
  { from: "deployment", to: "improvement" },
];

const pipelinePaths = [
  [{ x: 0.5, y: 0.03 }, { x: 0.5, y: 0.15 }, { x: 0.5, y: 0.27 }, { x: 0.5, y: 0.39 }, { x: 0.5, y: 0.51 }, { x: 0.5, y: 0.63 }, { x: 0.5, y: 0.75 }, { x: 0.5, y: 0.9 }],
];

export default function ProcessPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-0 md:pt-36">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Process" }]}
            className="mb-6"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Process / 01</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                  From Business Problem to Working Software.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-4">
                  <span className="text-lg text-muted-foreground">
                    We combine business understanding, product thinking and full-stack engineering to turn complex workflows into{" "}
                    <RotatingText items={rotatingTerms} interval={3000} />.
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <LinkButton href="/get-started?source=process" variant="accent" size="lg">
                    Start a Project
                  </LinkButton>
                  <LinkButton href="/solutions" variant="secondary" size="lg">
                    Explore Our Solutions
                  </LinkButton>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="muted">Software Development</Badge>
                  <Badge variant="muted">Full-Stack Engineering</Badge>
                  <Badge variant="muted">Global Delivery</Badge>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1} className="hidden lg:block">
              <SoftwareSystemVisual
                variant="custom"
                className="h-[420px]"
                nodes={pipelineNodes}
                connections={pipelineConnections}
                paths={pipelinePaths}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== PHILOSOPHY ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-accent/70">Our Approach</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Before We Build, We Understand.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every business has its own workflows. Our job isn&apos;t to force your operations into a generic templateâ€”it&apos;s to understand what you&apos;re trying to achieve and build software around that.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { text: "What the business is trying to achieve" },
              { text: "Where the current process breaks down" },
              { text: "What information moves between teams" },
              { text: "Where repetitive work occurs" },
              { text: "What users need to accomplish" },
              { text: "What management needs to see" },
              { text: "What should be automated" },
              { text: "What needs to integrate" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== THE PROCESS ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">The Process</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Eight Stages from Problem to Production
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">
              Click any stage to see what it involves.
            </p>
          </ScrollReveal>
          <LineReveal className="mt-6 max-w-xs" delay={0.1} />

          <div className="mt-12 max-w-3xl mx-auto">
            <DevelopmentPipeline stages={processStages} />
          </div>
        </Container>
      </Section>

      {/* ===== ARCHITECTURE ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Architecture</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  We Think Beyond the Interface
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Good software requires thinking about how the frontend, backend, database, and integrations work togetherâ€”not just what the screen looks like.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <ArchitectureVisual />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== TESTING ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal>
              <QaChecklist />
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Quality</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Make Sure It Works in the Real World
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Testing isn&apos;t just about finding bugs. It&apos;s about validating that the software works the way users will actually use itâ€”on real devices, with real data, in real conditions.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== DEPLOYMENT ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Deployment</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Prepare for Real Users
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Deployment is more than moving code to a server. It&apos;s about making sure the production environment is configured correctly and the system is ready for real-world use.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <DeploymentVisual />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== COLLABORATION ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Collaboration</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Software Is Built With You, Not Just For You
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                The best software sits at the intersection of business understanding and engineering expertise. That requires genuine collaboration.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <CollaborationVisual />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {collaborationPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">You bring</p>
                  <p className="text-sm text-foreground">{point.client}</p>
                  <hr className="my-3 border-border" />
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">We bring</p>
                  <p className="text-sm text-foreground">{point.alphaTec}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== EXPECTATIONS ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">What You Can Expect</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What You Can Expect From Us
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processExpectations.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 h-full">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{exp.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== TECHNOLOGY ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Engineering</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Built With Modern Technology
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  We use modern, proven technologies that are well-supported, well-documented, and designed for building real applicationsâ€”not just prototypes.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Technology choices are driven by the project requirements, not trends. Every stack is selected for a reason.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <TechnologyStackVisual />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== ITERATIVE APPROACH ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Approach</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Built to Evolve
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                A business doesn&apos;t always need everything at once. A focused first release can validate the core workflow before expanding.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 max-w-lg mx-auto">
              {[
                { label: "Start Small", sublabel: "Core functionality" },
                { label: "Validate", sublabel: "Test with real users" },
                { label: "Improve", sublabel: "Expand based on feedback" },
                { label: "Scale", sublabel: "Grow with the business" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary-light">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.sublabel}</p>
                  </div>
                  {i < 3 && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="hidden sm:block text-primary/30 mx-4" aria-hidden="true">
                      <path d="M4 8h8M8 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== MID-PAGE CTA ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Have a Business Process You Want to Improve?
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Let&apos;s talk about how we can turn it into reliable software.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton href="/get-started?source=process" variant="accent" size="lg">
                  Let&apos;s Talk
                </LinkButton>
                <LinkButton href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </LinkButton>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">FAQ</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Common Questions
              </h2>
            </ScrollReveal>
            <div className="mt-8">
              <FaqAccordion items={processFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary-foreground/40">Start Here</MonospaceLabel>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Let&apos;s Turn Your Business Process Into Software
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Tell us about the operational problems you&apos;re trying to solve. We&apos;ll help you figure out the right approach.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton href="/get-started?source=process" variant="accent" size="lg">
                  Start a Project
                </LinkButton>
                <LinkButton
                  href="/solutions"
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground/30"
                >
                  Explore Solutions
                </LinkButton>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/50">
                <Link href="/projects" className="flex items-center gap-1.5 transition-colors hover:text-primary-foreground">
                  See our work <ArrowRight size={12} />
                </Link>
                <span className="text-primary-foreground/20">â€¢</span>
                <Link href="/contact" className="transition-colors hover:text-primary-foreground">
                  Contact us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
