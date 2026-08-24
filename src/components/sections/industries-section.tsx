"use client";

import {
  Building2,
  GraduationCap,
  Car,
  Scissors,
  ShoppingBag,
  Briefcase,
  Settings,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface Industry {
  name: string;
  Icon: LucideIcon;
}

const industries: Industry[] = [
  { name: "Property Management", Icon: Building2 },
  { name: "Education", Icon: GraduationCap },
  { name: "Automotive Services", Icon: Car },
  { name: "Beauty & Personal Care", Icon: Scissors },
  { name: "Retail", Icon: ShoppingBag },
  { name: "Professional Services", Icon: Briefcase },
  { name: "Operations", Icon: Settings },
  { name: "Other Industries", Icon: MoreHorizontal },
];

export function IndustriesSection() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Industries"
            title="Software That Adapts to the Business"
            description="Experience across different operational environments."
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 0.05}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors duration-150 hover:bg-muted hover:border-primary/20">
                <industry.Icon
                  size={18}
                  className="flex-shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-foreground truncate">
                  {industry.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}