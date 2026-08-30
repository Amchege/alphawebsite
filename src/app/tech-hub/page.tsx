import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rocket, BookOpen, Code2, LayoutTemplate } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/structured-data";
import { techHubSections, techGuides, getGuidesBySection } from "@/data/tech-hub";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Tech Hub — Guides, Templates & Technical Resources",
  description:
    "Practical guides, technical resources, and ready-to-use templates from Alpha Tec Solutions. Learn how we work, prepare your project, and understand the technology behind our solutions.",
  path: "/tech-hub",
});

const sectionIcons: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-5 w-5" />,
  book: <BookOpen className="h-5 w-5" />,
  code: <Code2 className="h-5 w-5" />,
  template: <LayoutTemplate className="h-5 w-5" />,
};

export default function TechHubPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tech Hub", path: "/tech-hub" },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema({
          title: "Tech Hub — Guides, Templates & Technical Resources",
          description:
            "Practical guides, technical resources, and ready-to-use templates from Alpha Tec Solutions.",
          path: "/tech-hub",
        })}
      />

      {/* ===== HERO ===== */}
      <Section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20">
        <TechnicalGrid opacity={0.04} className="z-0" />
        <GradientField variant="blue" intensity="low" className="z-0" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tech Hub" },
            ]}
            className="mb-6"
          />

          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-accent/70">TECH HUB</MonospaceLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Guides, Templates & Technical Resources
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Everything you need to work with us effectively — from understanding our process
                to preparing your project brief to diving into technical architecture.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="muted">{techGuides.length} Guides</Badge>
                <Badge variant="muted">{techHubSections.length} Categories</Badge>
                <Badge variant="muted">Free Templates</Badge>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== QUICK NAV ===== */}
      <Section className="border-b border-border bg-muted/30 py-6">
        <Container>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
              {techHubSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="text-primary/60">{sectionIcons[section.icon]}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ===== SECTIONS ===== */}
      {techHubSections.map((section, sIdx) => {
        const guides = getGuidesBySection(section.id);
        if (guides.length === 0) return null;

        return (
          <Section
            key={section.id}
            id={section.id}
            className={sIdx % 2 === 1 ? "bg-muted/30" : ""}
          >
            <Container>
              {/* Section Header */}
              <ScrollReveal>
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-primary">
                    {sectionIcons[section.icon]}
                  </div>
                  <div>
                    <MonospaceLabel className="text-primary/60">
                      SECTION {String(sIdx + 1).padStart(2, "0")}
                    </MonospaceLabel>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </ScrollReveal>

              {/* Guide Cards Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide, i) => (
                  <ScrollReveal key={guide.id} delay={i * 0.06}>
                    <Link
                      href={`/tech-hub/${guide.slug}/`}
                      className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                      {/* Corner accents on hover */}
                      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l border-primary/0 transition-all duration-300 group-hover:border-primary/50" />
                      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-primary/0 transition-all duration-300 group-hover:border-primary/50" />

                      {/* Order number */}
                      <span className="mb-3 text-[10px] font-bold tracking-widest text-muted-foreground/60 uppercase">
                        {String(guide.order).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {guide.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                        {guide.shortDescription}
                      </p>

                      {/* CTA */}
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary/70 transition-colors group-hover:text-primary">
                        <span>Read guide</span>
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* ===== CTA ===== */}
      <Section className="bg-primary py-16 md:py-20">
        <Container>
          <div className="text-center">
            <ScrollReveal>
              <MonospaceLabel className="text-primary-foreground/40">READY TO START?</MonospaceLabel>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Have a Project in Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
                Use the guides above to prepare your brief, then get in touch. We&apos;ll take it from there.
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