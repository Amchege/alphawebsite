"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LinkButton } from "@/components/ui/link-button";
import { LineReveal } from "@/components/animations/line-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useReducedMotion } from "@/lib/utils";

const stages = [
  { number: "01", title: "Discover", description: "Understand the business, users and operational challenges." },
  { number: "02", title: "Plan", description: "Translate requirements into workflows, architecture and a practical roadmap." },
  { number: "03", title: "Design", description: "Create intuitive interfaces and experiences around real user needs." },
  { number: "04", title: "Build", description: "Develop, integrate and test the system using modern engineering practices." },
  { number: "05", title: "Improve", description: "Launch, learn and continuously improve the product." },
];

export function ProcessPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MonospaceLabel className="text-primary/60">How We Work</MonospaceLabel>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
          From Business Problem to Working Software
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Good software starts with understanding the problem — not choosing a technology.
        </p>
        <LineReveal className="mt-6 max-w-xs" />

        {/* Desktop timeline */}
        <div className="mt-14 hidden lg:block">
          <div className="relative flex justify-between">
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-border" />

            {stages.map((stage, i) => (
              <div key={stage.number} className="relative flex flex-col items-center" style={{ width: "20%" }}>
                <motion.div
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        whileInView: {
                          borderColor: "var(--color-primary)",
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-primary-foreground)",
                          boxShadow: "0 0 20px rgba(30,58,138,0.3)",
                        },
                        viewport: { once: true, amount: 0.5 },
                        transition: { delay: i * 0.15, duration: 0.4 },
                      })}
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background text-sm font-bold text-foreground"
                >
                  {stage.number}
                </motion.div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-2 max-w-[160px] text-center text-xs leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="mt-10 lg:hidden">
          <div className="relative pl-8">
            <div className="absolute top-1.5 left-[11px] bottom-1.5 w-px bg-border" />
            {stages.map((stage, i) => (
              <div key={stage.number} className="relative pb-8 last:pb-0">
                <motion.div
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        whileInView: {
                          borderColor: "var(--color-primary)",
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-primary-foreground)",
                        },
                        viewport: { once: true },
                        transition: { delay: i * 0.1, duration: 0.3 },
                      })}
                  className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-border bg-background text-[10px] font-bold text-foreground"
                >
                  {stage.number}
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <LinkButton href="/process" variant="ghost" size="md">
              See How We Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LinkButton>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}