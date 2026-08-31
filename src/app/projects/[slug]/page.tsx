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
    title: `${project.title} `,
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

      {/* ===== HERO ===== */}
      <Section className="pt-32 pb-0 md:pt-36">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects/" },
              { label: project.title },
            ]}
            className="mb-8"
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <ScrollReveal>
                <MonospaceLabel>Case Study</MonospaceLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] text-balance">
                  {project.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <MonospaceLabel>Industry</MonospaceLabel>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.industry}
                    </p>
                  </div>
                  <div>
                    <MonospaceLabel>Type</MonospaceLabel>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.projectType}
                    </p>
                  </div>
                  {project.frontendTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel>Frontend</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {project.frontendTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                  {project.backendTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel>Backend</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {project.backendTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                  {project.databaseTechnologies.length > 0 && (
                    <div>
                      <MonospaceLabel>Database</MonospaceLabel>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {project.databaseTechnologies.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {project.liveUrl && project.liveUrl !== "#" && (
                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5"
                  >
                    View Live System
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <ScrollReveal delay={0.15} className="hidden lg:block">
              <ProjectDetailVisual steps={project.systemFlow} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

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

      {/* ===== CHALLENGE + SOLUTION ===== */}
      <Section className="py-12 md:py-16 bg-muted/40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 h-full">
                <MonospaceLabel className="text-accent">The Challenge</MonospaceLabel>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl text-balance">
                  What problem needed to be solved
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 h-full">
                <MonospaceLabel className="text-primary">The Solution</MonospaceLabel>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl text-balance">
                  How the system addresses it
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== FEATURES ===== */}
      {project.features.length > 0 && (
        <Section className="py-12 md:py-16">
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
        <Section className="py-12 md:py-16 bg-muted/40">
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

      {/* ===== ARCHITECTURE + TECH STACK — side by side ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Architecture */}
            <div>
              <ScrollReveal>
                <MonospaceLabel className="text-primary">Under the Hood</MonospaceLabel>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  System Architecture
                </h2>
              </ScrollReveal>
              <div className="mt-8">
                <ProjectArchitectureSection project={project} />
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <ScrollReveal delay={0.1}>
                <MonospaceLabel className="text-primary">Tech Stack</MonospaceLabel>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Technologies Used
                </h2>
              </ScrollReveal>
              <div className="mt-8">
                <ProjectTechStack project={project} />
              </div>
            </div>
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
                {project.showcaseVideo ? (
                  <video
                    src={project.showcaseVideo}
                    poster={project.heroImage.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      className="w-full h-auto object-cover"
                    />
                  </video>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      {/* ===== BUSINESS VALUE + FUTURE IMPROVEMENTS — side by side ===== */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Business Value */}
            {project.valuePoints.length > 0 && (
              <div>
                <ScrollReveal>
                  <MonospaceLabel className="text-primary">Business Value</MonospaceLabel>
                  <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl text-balance">
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
            )}

            {/* Future Improvements */}
            {project.futureImprovements.length > 0 && (
              <div>
                <ScrollReveal delay={0.1}>
                  <MonospaceLabel className="text-accent">What&apos;s Next</MonospaceLabel>
                  <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl text-balance">
                    Potential future improvements
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Planned enhancements, not currently implemented features.
                  </p>
                </ScrollReveal>
                <div className="mt-8 grid gap-3 sm:grid-cols-1">
                  {project.futureImprovements.map((item, i) => (
                    <ScrollReveal key={item} delay={0.1 + i * 0.06}>
                      <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                        <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ===== RELATED PROJECTS ===== */}
      {relatedProjects.length > 0 && (
        <Section className="py-12 md:py-16 bg-muted/40">
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
