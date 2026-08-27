import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/structured-data";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { ProjectDetailVisual } from "@/components/projects/project-detail-visual";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectFeaturesSection } from "@/components/projects/project-features-section";
import { ProjectWorkflowSection } from "@/components/projects/project-workflow-section";
import { ProjectArchitectureSection } from "@/components/projects/project-architecture-section";
import { RelatedProjects } from "@/components/projects/related-projects";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Check } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return generatePageMetadata({
    title: `${project.title} | Alpha Tec Solutions`,
    description: project.seo.description,
    path: `/projects/${project.slug}/`,
  });
}

export function generateStaticParams() {
  return [
    { slug: "property-management-system" },
    { slug: "school-management-system" },
    { slug: "car-wash-management-system" },
    { slug: "salon-barbershop-management-system" },
  ];
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 3);

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects/" },
          { name: project.title, path: `/projects/${project.slug}/` },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema({
          title: project.title,
          description: project.seo.description,
          path: `/projects/${project.slug}/`,
        })}
      />

      {/* ===== CINEMATIC DARK HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20 min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Base dark fill */}
        <div className="absolute inset-0 bg-blue-950" />

        {/* Hero image layer */}
        {project.heroImage && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              className="h-full w-full object-cover opacity-25"
            />
          </div>
        )}

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-transparent to-blue-950/60" />

        {/* Subtle blue accent glow */}
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects/" },
              { label: project.title },
            ]}
            className="mb-8 [&_a]:text-white/60 [&_a:hover]:text-white [&>*:last-child]:text-white/40"
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Text column */}
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary/90">Case Study</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] text-balance leading-[1.1] drop-shadow-sm">
                  {project.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-lg text-white/70 leading-relaxed">
                  {project.shortDescription}
                </p>
              </ScrollReveal>

              {/* Metadata row */}
              <ScrollReveal delay={0.15}>
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <MonospaceLabel className="text-white/50">Industry</MonospaceLabel>
                    <p className="mt-1 text-sm font-medium text-white/90">
                      {project.industry}
                    </p>
                  </div>
                  <div>
                    <MonospaceLabel className="text-white/50">Type</MonospaceLabel>
                    <p className="mt-1 text-sm font-medium text-white/90">
                      {project.projectType}
                    </p>
                  </div>
                  {project.frontendTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel className="text-white/50">Frontend</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-white/90">
                        {project.frontendTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                  {project.backendTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel className="text-white/50">Backend</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-white/90">
                        {project.backendTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                  {project.databaseTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel className="text-white/50">Database</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-white/90">
                        {project.databaseTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Visual column */}
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <ProjectDetailVisual steps={project.systemFlow} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== GLOWING TRANSITION DIVIDER ===== */}
      <div className="relative h-px w-full overflow-hidden bg-border z-10">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      </div>

      {/* ===== OVERVIEW ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="rounded-xl border border-border bg-muted/30 p-6 sm:p-8">
                <MonospaceLabel className="text-primary">Overview</MonospaceLabel>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {project.overview}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== CHALLENGE ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <MonospaceLabel className="text-accent">The Challenge</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                What problem needed to be solved
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
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
              <MonospaceLabel className="text-primary">The Solution</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                How the system addresses it
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== FEATURES ===== */}
      {project.features.length > 0 && (
        <Section className="py-12 md:py-16 bg-muted/40">
          <Container>
            <ScrollReveal>
              <MonospaceLabel className="text-primary">Key Features</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What the system includes
              </h2>
            </ScrollReveal>
            <div className="mt-10">
              <ProjectFeaturesSection features={project.features} />
            </div>
          </Container>
        </Section>
      )}

      {/* ===== WORKFLOW ===== */}
      {project.workflow.length > 0 && (
        <Section className="py-12 md:py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <ScrollReveal>
                  <MonospaceLabel className="text-primary">How It Works</MonospaceLabel>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    From input to output
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    A simplified view of how data moves through the system.
                  </p>
                </ScrollReveal>
              </div>
              <div>
                <ProjectWorkflowSection workflow={project.workflow} />
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ===== ARCHITECTURE ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-10">
              <MonospaceLabel className="text-primary">Under the Hood</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                System Architecture
              </h2>
            </div>
          </ScrollReveal>
          <ProjectArchitectureSection project={project} />
        </Container>
      </Section>

      {/* ===== TECHNOLOGY ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <ScrollReveal>
            <MonospaceLabel className="text-primary">Tech Stack</MonospaceLabel>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technologies Used
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <ProjectTechStack project={project} />
          </div>
        </Container>
      </Section>

      {/* ===== SYSTEM SHOWCASE ===== */}
      {project.heroImage && (
        <Section className="py-12 md:py-16 bg-muted/40">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-10">
                <MonospaceLabel className="text-primary">Interface</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  System Showcase
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* ===== BUSINESS VALUE ===== */}
      {project.valuePoints.length > 0 && (
        <Section className="py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <MonospaceLabel className="text-primary">Business Value</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Built to improve the way the business operates
                </h2>
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                {project.valuePoints.map((point, i) => (
                  <ScrollReveal key={point} delay={i * 0.06}>
                    <div className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-primary"
                        strokeWidth={2}
                      />
                      <span className="text-sm text-foreground">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ===== FUTURE IMPROVEMENTS ===== */}
      {project.futureImprovements.length > 0 && (
        <Section className="py-12 md:py-16 bg-muted/40">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <MonospaceLabel className="text-accent">What&apos;s Next</MonospaceLabel>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  Potential future improvements
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  These are planned enhancements, not currently implemented features.
                </p>
              </ScrollReveal>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {project.futureImprovements.map((item, i) => (
                  <ScrollReveal key={item} delay={i * 0.06}>
                    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                      <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{item}</span>
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
              <MonospaceLabel className="text-primary">Explore More</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Related Systems
              </h2>
            </ScrollReveal>
            <div className="mt-10">
              <RelatedProjects projects={relatedProjects} />
            </div>
          </Container>
        </Section>
      )}

      {/* ===== FINAL CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Need a System Like This?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Let&apos;s design a solution around the way your business actually works.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <LinkButton
                  href="/get-started/"
                  variant="accent"
                  size="lg"
                >
                  Start a Project
                </LinkButton>
                <LinkButton
                  href="/projects/"
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  View All Projects
                </LinkButton>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}