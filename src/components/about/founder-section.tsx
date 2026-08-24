"use client";

import { User } from "lucide-react";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { LinkButton } from "@/components/ui/link-button";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { founder } from "@/data/founder";

interface FounderSectionProps {
  className?: string;
}

export function FounderSection({ className }: FounderSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      {/* Subtle background grid */}
      <TechnicalGrid opacity={0.02} className="absolute inset-0 z-0" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <MonospaceLabel className="text-primary/60">Who We Are</MonospaceLabel>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            The Developer Behind Alpha Tec Solutions
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Image / Placeholder */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center">
              {founder.image ? (
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="h-56 w-56 rounded-2xl border-2 border-border bg-muted/30 object-cover shadow-lg shadow-primary/5"
                />
              ) : (
                <div className="relative flex h-56 w-56 overflow-hidden rounded-2xl border-2 border-border bg-muted/10 shadow-lg shadow-primary/5">
                  <TechnicalGrid opacity={0.05} className="absolute inset-0" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/30">
                    <User size={48} strokeWidth={1} />
                    <span className="mt-3 text-[10px] font-mono uppercase tracking-widest">Portrait</span>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 h-4 w-4 border-l-2 border-t-2 border-primary/30" />
                  <div className="absolute bottom-2 right-2 h-4 w-4 border-r-2 border-b-2 border-primary/30" />
                </div>
              )}
              <p className="mt-4 text-center text-sm font-medium text-foreground">{founder.name}</p>
              <p className="mt-0.5 text-center text-sm text-primary">{founder.role}</p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8 h-full shadow-sm">
              <p className="text-base leading-relaxed text-muted-foreground">
                {founder.longBio}
              </p>
            </div>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8 h-full flex flex-col justify-center shadow-sm">
              <p className="text-sm font-medium text-foreground mb-4">Connect</p>
              <div className="space-y-3">
                {[
                  { platform: "LinkedIn", href: founder.linkedin, icon: Linkedin },
                  { platform: "GitHub", href: founder.github, icon: Github },
                ].map((item) => (
                  <LinkButton
                    key={item.platform}
                    href={item.href}
                    external
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted h-auto py-2.5 px-0"
                  >
                    <item.icon size={16} className="mr-3 text-current" />
                    <span>{item.platform}</span>
                    <ArrowRight size={14} className="ml-auto text-current opacity-40" />
                  </LinkButton>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}