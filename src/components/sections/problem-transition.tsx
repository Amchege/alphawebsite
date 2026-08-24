"use client";

import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const stages = [
  "Problem",
  "Understand",
  "Design",
  "Build",
  "Integrate",
  "Improve",
];

export function ProblemTransition() {
  return (
    <Section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            We turn operational problems into practical software.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Instead of forcing your business into a generic system, we build
            software around the way your organization actually works.
          </p>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {stages.map((stage, i) => (
            <Fragment key={stage}>
              <ScrollReveal delay={i * 0.08}>
                <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  {stage}
                </span>
              </ScrollReveal>
              {i < stages.length - 1 && (
                <ScrollReveal delay={i * 0.08 + 0.04}>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground/60 hidden sm:block"
                  />
                </ScrollReveal>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}