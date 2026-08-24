"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { workingPrinciples } from "@/data/about";

export function WorkingPrinciplesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Working Principles
          </p>
          <div className="mt-4 space-y-3">
            {workingPrinciples.map((principle, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle}</p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}