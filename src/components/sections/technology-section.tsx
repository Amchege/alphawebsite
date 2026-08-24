"use client";

import { Fragment } from "react";
import { Section } from "@/components/ui/section";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LineReveal } from "@/components/animations/line-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { GradientField } from "@/components/visual/gradient-field";
import { TechnicalGrid } from "@/components/visual/technical-grid";

const layers = [
  { label: "User Interface", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Application Layer", tech: ["Node.js", "Express", "TypeScript"] },
  { label: "Data Layer", tech: ["PostgreSQL", "Prisma"] },
  { label: "Integrations", tech: ["APIs", "Payment Systems"] },
];

export function TechnologySection() {
  return (
    <Section className="bg-muted/40 relative overflow-hidden">
      <TechnicalGrid opacity={0.02} className="z-0" />
      <GradientField variant="blue" intensity="low" className="z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MonospaceLabel className="text-primary/60">Engineering</MonospaceLabel>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
          Built With Modern Engineering
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Technology is chosen around the problem, not the other way around.
        </p>
        <LineReveal className="mt-6 max-w-xs" />

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative rounded-xl border border-border bg-card overflow-hidden">
            {layers.map((layer, index) => (
              <Fragment key={layer.label}>
                <ScrollReveal delay={index * 0.1}>
                  <div className="flex items-start gap-4 px-6 py-5">
                    <div className="flex flex-col items-center pt-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm shadow-primary/30" />
                      {index < layers.length - 1 && <div className="w-px flex-1 bg-border mt-1.5" />}
                    </div>
                    <div className="flex-1 pb-1">
                      <MonospaceLabel>{layer.label}</MonospaceLabel>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {layer.tech.map((t) => (
                          <span key={t} className="inline-flex rounded-md bg-primary-light px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                {index < layers.length - 1 && <div className="border-b border-border" />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}