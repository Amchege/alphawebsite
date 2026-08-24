"use client";

import Link from "next/link";
import {
  Layers,
  Globe,
  Zap,
  LayoutDashboard,
  Plug,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import type { Solution } from "@/types/solution";

const iconMap: Record<string, LucideIcon> = {
  "business-software": Layers,
  "custom-web-applications": Globe,
  "business-automation": Zap,
  "management-systems": LayoutDashboard,
  "api-integrations": Plug,
  "data-business-intelligence": BarChart3,
};

interface SolutionListingCardProps {
  solution: Solution;
  index: number;
}

export function SolutionListingCard({ solution, index }: SolutionListingCardProps) {
  const Icon = iconMap[solution.slug] || Layers;
  const number = String(solution.order).padStart(2, "0");

  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/solutions/${solution.slug}`} className="group block h-full">
        <div className="relative flex h-full flex-col rounded-xl border border-border bg-card p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          {/* Hover grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{
              backgroundImage: "linear-gradient(rgba(30,58,138,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          />

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 transition-all duration-300 group-hover:border-primary/20 z-10" aria-hidden="true" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <MonospaceLabel>SYSTEM / {number}</MonospaceLabel>
              <span className="text-[10px] font-medium uppercase tracking-wider text-accent">{solution.category}</span>
            </div>

            <div className="mt-4 mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light transition-all duration-300 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/20">
              <Icon size={20} className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </div>

            <h3 className="text-lg font-semibold text-foreground">{solution.shortTitle}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{solution.shortDescription}</p>

            <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-200 group-hover:translate-x-1">
              Explore Solution
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