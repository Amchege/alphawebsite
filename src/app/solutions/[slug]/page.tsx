import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/structured-data";
import { getSolutionBySlug, getRelatedSolutions } from "@/data/solutions";
import { getProjectBySlug } from "@/data/projects";
import { SolutionListingCard } from "@/components/solutions/solution-listing-card";
import { FaqAccordion } from "@/components/solutions/faq-accordion";
import { CapabilityVisual } from "@/components/solutions/capability-visual";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { ProjectListingCard } from "@/components/projects/project-listing-card";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LineReveal } from "@/components/animations/line-reveal";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { cn } from "@/lib/cn";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return generatePageMetadata({
    title: solution.seo.title,
    description: solution.seo.description,
    path: `/solutions/${solution.slug}`,
  });
}

export function generateStaticParams() {
  return [
    { slug: "business-software" },
    { slug: "custom-web-applications" },
    { slug: "business-automation" },
    { slug: "management-systems" },
    { slug: "api-integrations" },
    { slug: "data-business-intelligence" },
  ];
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const relatedSolutions = getRelatedSolutions(solution.slug, 3);
  const relatedProjects = solution.relatedProjects
    .map((pSlug) => getProjectBySlug(pSlug))
    .filter(Boolean);

  const faqSchema = solution.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: solution.shortTitle, path: `/solutions/${solution.slug}` },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema({
          title: solution.title,
          description: solution.seo.description,
          path: `/solutions/${solution.slug}`,
        })}
      />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-0 md:pt-36">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.shortTitle },
            ]}
            className="mb-6"
          />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-accent/70">SOLUTION / {String(solution.order).padStart(2, "0")}</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] text-balance leading-tight">
                  {solution.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <LinkButton href={`/get-started?solution=${solution.slug}`} variant="accent" size="lg">
                    Discuss Your Project
                  </LinkButton>
                  {relatedProjects.length > 0 && (
                    <LinkButton href={relatedProjects[0]?.slug ? `/projects/${relatedProjects[0].slug}` : "/projects"} variant="secondary" size="lg">
                      See Related Projects
                    </LinkButton>
                  )}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="muted">{solution.category}</Badge>
                  <Badge variant="muted">Full-Stack Development</Badge>
                  <Badge variant="muted">Web Application</Badge>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.1} className="hidden lg:block">
              <SoftwareSystemVisual variant="custom" className="h-[380px]" nodes={solution.systemFlow.map((s, i) => ({ id: `flow-${i}`, label: s.layer, x: 50, y: (i / (solution.systemFlow.length - 1)) * 90 + 5 }))} connections={solution.systemFlow.slice(0, -1).map((_, i) => ({ from: `flow-${i}`, to: `flow-${i + 1}` }))} paths={([{ x: 0.5, y: 0.05 }, ...solution.systemFlow.map((s, i) => ({ x: 0.5, y: (i / (solution.systemFlow.length - 1)) * 0.9 + 0.05 }))] as any)} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== PROBLEM ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <MonospaceLabel className="text-accent/70">The Problem</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Where Business Operations Get Complicated
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {solution.problem}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== SOLUTION ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">The Solution</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Software Designed Around How You Work
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {solution.solution}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== WHO IT'S FOR ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">Who It's For</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built For Businesses That Have Outgrown Manual Processes
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-4xl">
            {solution.whoItsFor.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== USE CASES ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">Use Cases</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What This Can Look Like
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.useCases.map((useCase, i) => (
              <ScrollReveal key={useCase.title} delay={i * 0.06}>
                <Link
                  href={useCase.projectSlug ? `/projects/${useCase.projectSlug}` : "#"}
                  className={cn(
                    "group block h-full rounded-xl border border-border bg-card p-5 transition-all duration-200",
                    useCase.projectSlug && "hover:border-primary/30 hover:shadow-md"
                  )}
                >
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
                  {useCase.projectSlug && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      See example
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== CAPABILITIES ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Capabilities</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  What We Build
                </h2>
              </ScrollReveal>
              <div className="mt-8 space-y-6">
                {solution.capabilities.map((group, i) => (
                  <ScrollReveal key={group.label} delay={i * 0.08}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{group.label}</h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.15}>
              <CapabilityVisual capabilities={solution.capabilities} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Process</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                From Business Problem to Working Software
              </h2>
            </ScrollReveal>
          </div>
          <div className="mt-10 relative pl-8 max-w-3xl mx-auto">
            <div className="absolute top-2 left-[11px] bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {solution.workflow.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.08}>
                  <div className="relative">
                    <div className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background text-[10px] font-bold text-foreground">
                      {step.number}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== ARCHITECTURE ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <MonospaceLabel className="text-primary/60">Architecture</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What&apos;s Under the Hood
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
                {solution.architecture}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mx-auto max-w-md">
              <div className="space-y-2">
                {solution.systemFlow.map((layer, i) => (
                  <div
                    key={layer.layer}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{layer.layer}</span>
                    {layer.detail && (
                      <span className="text-xs text-muted-foreground ml-auto">{layer.detail}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== TECHNOLOGY ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary/60">Technology</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Built With Modern Engineering
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(solution.technology)
              .filter(([, items]) => items.length > 0)
              .map(([category, items], i) => (
                <ScrollReveal key={category} delay={i * 0.08}>
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <MonospaceLabel className="text-primary">{category}</MonospaceLabel>
                    <div className="mt-3 space-y-1.5">
                      {items.map((tech) => (
                        <p key={tech} className="text-sm font-medium text-foreground">{tech}</p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>
        </Container>
      </Section>

      {/* ===== BENEFITS ===== */}
      {solution.businessBenefits.length > 0 && (
        <Section className="py-12 md:py-16 bg-muted/40">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <MonospaceLabel className="text-primary/60">Business Value</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  What This Delivers for Your Business
                </h2>
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                {solution.businessBenefits.map((benefit, i) => (
                  <ScrollReveal key={benefit} delay={i * 0.06}>
                    <div className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" strokeWidth={2} />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ===== RELATED PROJECTS ===== */}
      {relatedProjects.length > 0 && (
        <Section className="py-12 md:py-16">
          <Container>
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Proof</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Systems We&apos;ve Built
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                See how these capabilities have been applied in real projects.
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedProjects.filter(Boolean).map((project, i) => (
                <ScrollReveal key={project!.slug} delay={i * 0.08}>
                  <ProjectListingCard project={project!} />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ===== FAQ ===== */}
      {solution.faqs.length > 0 && (
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
                <FaqAccordion items={solution.faqs} />
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ===== RELATED SOLUTIONS ===== */}
      {relatedSolutions.length > 0 && (
        <Section className="py-12 md:py-16">
          <Container>
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">Explore More</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Related Solutions
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSolutions.map((relSol, i) => (
                <ScrollReveal key={relSol.slug} delay={i * 0.08}>
                  <SolutionListingCard solution={relSol} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ===== FINAL CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary-foreground/40">Get Started</MonospaceLabel>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Let&apos;s Build the Right System for Your Business.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Tell us about your business and the operational problems you&apos;re trying to solve. We&apos;ll help you figure out the right approach.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton href={`/get-started?solution=${solution.slug}`} variant="accent" size="lg">
                  Start a Project
                </LinkButton>
                <LinkButton
                  href="/contact/"
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground/30"
                >
                  Get in Touch
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
