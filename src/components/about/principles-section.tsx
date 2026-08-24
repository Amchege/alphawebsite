"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { principles } from "@/data/about";

export function PrinciplesSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <MonospaceLabel className="text-primary/60">Our Principles</MonospaceLabel>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            What Makes Our Approach Different
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl">
            We focus on solving real problems with well-engineered software, not chasing trends or padding portfolios.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.number} delay={i * 0.06}>
              <div className="rounded-xl border border-border bg-card p-6 h-full">
                <span className="text-2xl font-bold text-primary/20">{principle.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}