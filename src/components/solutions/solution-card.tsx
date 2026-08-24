"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Globe,
  Cloud,
  Workflow,
  Plug,
  BarChart3,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import type { Solution } from "@/types/solution";

const iconMap: Record<string, LucideIcon> = {
  "business-management-systems": LayoutDashboard,
  "custom-web-applications": Globe,
  "saas-development": Cloud,
  "business-automation": Workflow,
  "api-integrations": Plug,
  "management-dashboards": BarChart3,
};

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const Icon = iconMap[solution.slug] || Layers;

  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/solutions/${solution.slug}`} className="group block h-full">
        <div className="relative flex h-full flex-col rounded-xl border border-border bg-card p-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          {/* Subtle corner accent on hover */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 transition-all duration-300 group-hover:border-primary/20" aria-hidden="true" />

          <div className="relative z-10">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light transition-all duration-300 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/20">
              <Icon size={20} className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{solution.shortDescription}</p>
            <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-1">
              Explore
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}