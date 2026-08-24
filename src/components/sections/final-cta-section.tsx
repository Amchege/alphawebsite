"use client";

import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { LineReveal } from "@/components/animations/line-reveal";
import { SITE_CONFIG } from "@/config/site";

export function FinalCtaSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }} aria-hidden="true" />

      <Container className="relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <MonospaceLabel className="text-primary-foreground/40">Get Started</MonospaceLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Have a Business Problem That Software Could Solve?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
              Let&apos;s turn the way your business works into a system that works for you.
            </p>
          </ScrollReveal>
          <LineReveal className="mx-auto mt-8 max-w-[100px] bg-primary-foreground/20" delay={0.1} />

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <LinkButton href="/get-started" variant="accent" size="lg">
                Start a Project
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="ghost"
                size="lg"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground/30"
              >
                Get in Touch
              </LinkButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/50">
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Mail size={14} />
                {SITE_CONFIG.contact.email}
              </a>
              <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <Phone size={14} />
                {SITE_CONFIG.contact.phone}
              </a>
              <span className="font-mono text-[10px] uppercase tracking-widest">NBO / Global</span>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}