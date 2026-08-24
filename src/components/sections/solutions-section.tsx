"use client";

import { Section } from "@/components/ui/section";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { SolutionCard } from "@/components/solutions/solution-card";
import { LineReveal } from "@/components/animations/line-reveal";
import { solutions } from "@/data/solutions";
import { GradientField } from "@/components/visual/gradient-field";

const homepageSlugs = [
  "business-management-systems",
  "custom-web-applications",
  "saas-development",
  "business-automation",
  "api-integrations",
  "management-dashboards",
];

export function SolutionsSection() {
  const homepageSolutions = homepageSlugs
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <Section className="relative overflow-hidden">
      <GradientField variant="blue" intensity="low" className="z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MonospaceLabel className="text-primary/60">What We Build</MonospaceLabel>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
          Custom digital systems designed around real business workflows.
        </h2>
        <LineReveal className="mt-6 max-w-xs" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageSolutions.map(
            (solution, index) =>
              solution && <SolutionCard key={solution.slug} solution={solution} index={index} />
          )}
        </div>
      </div>
    </Section>
  );
}