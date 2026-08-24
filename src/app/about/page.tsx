import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { FounderSection } from "@/components/about/founder-section";
import { PhilosophyComparison } from "@/components/about/philosophy-comparison";
import { CodeToSystemVisual } from "@/components/about/code-to-system-visual";
import { PrinciplesSection } from "@/components/about/principles-section";
import { WorkingPrinciplesSection } from "@/components/about/working-principles-section";
import { StackLayersVisual } from "@/components/about/stack-layers-visual";
import { DomainConvergenceVisual } from "@/components/about/domain-convergence-visual";
import { TrustIntersectionVisual } from "@/components/about/trust-intersection-visual";
import { FaqAccordion } from "@/components/solutions/faq-accordion";
import { cn } from "@/lib/cn";
import { SITE_CONFIG } from "@/config/site";
import { COMPANY } from "@/config/company";
import { brandStory, softwarePhilosophy, workingWithClients, aboutFaqs } from "@/data/about";
import { founder } from "@/data/founder";
import { projects } from "@/data/projects";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

const aboutProjects = projects.filter((p) => p.status === "published");

const heroNodes = [
  { id: "idea", label: "Idea", x: 50, y: 5 },
  { id: "process", label: "Business Process", x: 50, y: 22 },
  { id: "software", label: "Software", x: 50, y: 39 },
  { id: "system", label: "Business System", x: 50, y: 56 },
  { id: "outcome", label: "Business Value", x: 50, y: 73 },
];

const heroConnections = [
  { from: "idea", to: "process" },
  { from: "process", to: "software" },
  { from: "software", to: "system" },
  { from: "system", to: "outcome" },
];

const heroPaths = [
  [{ x: 0.5, y: 0.05 }, { x: 0.5, y: 0.22 }, { x: 0.5, y: 0.39 }, { x: 0.5, y: 0.56 }, { x: 0.5, y: 0.73 }],
];

export const metadata = generatePageMetadata({
  title: "About Alpha Tec Solutions | Full-Stack Software Development",
  description:
    "Learn about Alpha Tec Solutions, a Kenya-based full-stack software development practice building custom business software, web applications and digital systems for businesses globally.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generatePersonSchema()} />
      <JsonLd
        data={generateWebPageSchema({
          title: "About Alpha Tec Solutions",
          description:
            "Learn about Alpha Tec Solutions, a Kenya-based full-stack software development practice building custom business software, web applications and digital systems.",
          path: "/about",
        })}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-0 md:pt-36">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
            className="mb-8"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">About / 01</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-tight">
                  We Build Software Around
                  <br />
                  <span className="text-primary">How Businesses Actually Work.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  {SITE_CONFIG.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
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

            <ScrollReveal delay={0.2} className="hidden lg:block">
              <SoftwareSystemVisual
                variant="custom"
                className="h-[400px]"
                nodes={heroNodes}
                connections={heroConnections}
                paths={heroPaths}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== BRAND STORY ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Our Journey</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                {brandStory.headline}
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              {brandStory.paragraphs.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p className="text-base text-muted-foreground leading-relaxed">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== FOUNDER ===== */}
      <FounderSection />

      {/* ===== PHILOSOPHY ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Philosophy</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                {softwarePhilosophy.headline}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {softwarePhilosophy.description}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <PhilosophyComparison />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== FULL-STACK CAPABILITIES (UPGRADED VISUAL) ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">What We Actually Do</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                From Interface to Infrastructure
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We handle the full software stack â€” from user interfaces and application logic to databases, APIs and system integrations.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <StackLayersVisual />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== PROJECTS ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">Our Work</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Software We&apos;ve Built
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Real systems designed to solve real operational challenges.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.06}>
                <a
                  href={`/projects/${project.slug}`}
                  className="group block rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">{project.industry}</p>
                  <h3 className="mt-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-1">
                    View Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 text-center">
              <LinkButton href="/projects" variant="secondary" size="md">
                View All Projects
              </LinkButton>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== INDUSTRY CONVERGENCE (UPGRADED VISUAL) ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Industries We Work With</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Software That Adapts to the Business
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <DomainConvergenceVisual />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <PrinciplesSection />

      {/* ===== WORKING WITH CLIENTS ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Collaboration</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Built With the People Who Understand the Business
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {workingWithClients.description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {workingWithClients.clientContributes.map((item, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">You bring</p>
                    <p className="text-sm text-foreground">{item}</p>
                    <hr className="my-3 border-border" />
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">We bring</p>
                    <p className="text-sm text-foreground">{workingWithClients.alphaTecContributes[i]}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== GLOBAL DELIVERY ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Location</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Based in Kenya. Building Globally.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {COMPANY.location.globalPositioning}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-muted-foreground">
                <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <p className="font-medium text-foreground">Clear communication</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <p className="font-medium text-foreground">Remote collaboration</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <p className="font-medium text-foreground">Modern dev tools</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <p className="font-medium text-foreground">Structured workflows</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== TECHNOLOGY PHILOSOPHY ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Technology</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Technology Is the Tool. The Business Problem Is the Starting Point.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We choose technologies based on what the project requires â€” performance, maintainability, security and long-term support â€” not because they are trending.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== CODE â†’ SYSTEM VISUAL ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                We Don&apos;t Just Write Code. We Build Systems.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <CodeToSystemVisual />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== WORKING PRINCIPLES ===== */}
      <WorkingPrinciplesSection />

      {/* ===== TRUST VISUAL (UPGRADED VENN DIAGRAM) ===== */}
      <Section className="py-12 md:py-16 bg-muted/40 overflow-hidden">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-8">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Trust</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Technical Capability. Business Understanding.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <TrustIntersectionVisual />
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== FAQ ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">FAQ</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Common Questions
              </h2>
            </ScrollReveal>
            <div className="mt-8">
              <FaqAccordion items={aboutFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Have a Business Problem That Software Could Solve?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Tell us what you&apos;re trying to improve, automate or build. We&apos;ll start by understanding the problem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton href="/get-started" variant="accent" size="lg">
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
