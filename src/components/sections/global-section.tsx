"use client";

import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function GlobalSection() {
  return (
    <Section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Based in Nairobi. Building Globally.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Alpha Tec Solutions is based in Nairobi, Kenya and works with
            businesses and organizations looking to build practical digital
            systems — wherever they are.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}