import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Lightbulb, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/structured-data";
import {
  getTechGuideBySlug,
  getRelatedGuides,
  techGuides,
  techHubSections,
} from "@/data/tech-hub";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTechGuideBySlug(slug);
  if (!guide) return {};

  return generatePageMetadata({
    title: guide.seo.title,
    description: guide.seo.description,
    path: `/tech-hub/${guide.slug}`,
  });
}

export function generateStaticParams() {
  return techGuides.map((g) => ({ slug: g.slug }));
}

export default async function TechGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getTechGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide.slug, 3);
  const sectionInfo = techHubSections.find((s) => s.id === guide.section);

  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tech Hub", path: "/tech-hub" },
          { name: guide.title, path: `/tech-hub/${guide.slug}` },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema({
          title: guide.title,
          description: guide.seo.description,
          path: `/tech-hub/${guide.slug}`,
        })}
      />

      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-12 md:pt-36 md:pb-16">
        <TechnicalGrid opacity={0.03} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tech Hub", href: "/tech-hub/" },
              { label: guide.title },
            ]}
            className="mb-6"
          />

          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <MonospaceLabel className="text-accent/70">
                  GUIDE {String(guide.order).padStart(2, "0")}
                </MonospaceLabel>
                {sectionInfo && (
                  <Badge variant="muted">{sectionInfo.title}</Badge>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] text-balance leading-tight">
                {guide.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {guide.description}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== CONTENT SECTIONS ===== */}
      {guide.content.map((block, i) => (
        <Section
          key={i}
          className={i % 2 === 1 ? "bg-muted/30 py-12 md:py-16" : "py-12 md:py-16"}
        >
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1.5 hidden sm:flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-border bg-card">
                    <span className="text-[10px] font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {block.heading}
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p className="text-base text-muted-foreground leading-relaxed sm:pl-9">
                  {block.body}
                </p>
              </ScrollReveal>

              {block.items && block.items.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <ul className="mt-6 space-y-3 sm:pl-9">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </Container>
        </Section>
      ))}

      {/* ===== KEY TAKEAWAYS ===== */}
      {guide.keyTakeaways.length > 0 && (
        <Section className="py-12 md:py-16 bg-muted/30">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">Key Takeaways</h2>
                  </div>
                  <ul className="space-y-3">
                    {guide.keyTakeaways.map((point, i) => (
                      <ScrollReveal key={i} delay={i * 0.05}>
                        <li className="flex items-start gap-3">
                          <Check
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-primary"
                            strokeWidth={2}
                          />
                          <span className="text-sm text-foreground leading-relaxed">
                            {point}
                          </span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      )}

      {/* ===== RELATED GUIDES ===== */}
      {relatedGuides.length > 0 && (
        <Section className="py-12 md:py-16">
          <Container>
            <ScrollReveal>
              <MonospaceLabel className="text-primary/60">CONTINUE READING</MonospaceLabel>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Related Guides
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((rel, i) => (
                <ScrollReveal key={rel.id} delay={i * 0.08}>
                  <Link
                    href={`/tech-hub/${rel.slug}/`}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="mb-2 text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
                      {String(rel.order).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {rel.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {rel.shortDescription}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary/70 group-hover:text-primary">
                      Read guide
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ===== BACK + CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <Link
                href="/tech-hub/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/60 transition-colors hover:text-primary-foreground mb-8"
              >
                <ArrowLeft size={14} />
                Back to Tech Hub
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <MonospaceLabel className="text-primary-foreground/40">READY TO START?</MonospaceLabel>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Put This Into Practice
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Now that you understand how we work, let&apos;s talk about your project.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}