"use client";

import {
  Lightbulb,
  Puzzle,
  Layers,
  TrendingUp,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Lightbulb,
    title: "Business-First Thinking",
    description:
      "We start with the operational problem before choosing the technical solution.",
  },
  {
    icon: Puzzle,
    title: "Built Around Your Workflow",
    description:
      "Your software should fit your processes — not force your team to change how they work.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capability",
    description:
      "From interface and APIs to databases and integrations, the system can be designed as one connected solution.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Build with a foundation that can evolve as the business grows.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Clear communication, practical decisions and a collaborative development process.",
  },
];

export function WhyUsSection() {
  return (
    <Section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: heading */}
          <ScrollReveal className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Why Build With Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Build With Alpha Tec Solutions?
            </h2>
          </ScrollReveal>

          {/* Right: principles */}
          <div className="lg:col-span-3 space-y-6">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.08}>
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-light">
                    <principle.icon
                      size={18}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}