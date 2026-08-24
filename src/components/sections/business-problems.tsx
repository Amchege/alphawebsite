"use client";

import {
  FileText,
  Unlink,
  Table2,
  BarChart3,
  RefreshCw,
  Eye,
  ArrowLeftRight,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { LineReveal } from "@/components/animations/line-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { TechnicalGrid } from "@/components/visual/technical-grid";

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const problems: Problem[] = [
  { icon: FileText, title: "Manual processes", description: "Tasks that could be automated still require manual input and supervision." },
  { icon: Unlink, title: "Disconnected systems", description: "Different parts of the business run on tools that don't communicate." },
  { icon: Table2, title: "Spreadsheet dependency", description: "Critical operations managed in spreadsheets that are difficult to maintain." },
  { icon: BarChart3, title: "Difficult reporting", description: "Generating insights requires manual data compilation across sources." },
  { icon: RefreshCw, title: "Repetitive administrative work", description: "Staff spend significant time on repetitive tasks instead of productive work." },
  { icon: Eye, title: "Limited operational visibility", description: "Leadership lacks a clear, real-time view of business operations." },
  { icon: ArrowLeftRight, title: "Payment reconciliation challenges", description: "Matching payments to transactions is manual and error-prone." },
  { icon: TrendingUp, title: "Systems that don't scale", description: "Current processes work at small scale but break as the business grows." },
];

export function BusinessProblems() {
  return (
    <Section className="bg-muted/40 relative overflow-hidden">
      <TechnicalGrid opacity={0.02} className="z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MonospaceLabel className="text-accent/60">The Problem</MonospaceLabel>
        <SectionHeading
          title="Your business shouldn't have to work around your software."
          description="Manual processes, disconnected tools and spreadsheet-heavy workflows can make everyday operations harder than they need to be."
        />
        <LineReveal className="mt-8 max-w-xs bg-accent/20" />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.06}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group rounded-xl border border-border bg-card p-5 h-full transition-all duration-300 hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5">
                <problem.icon size={20} className="text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-foreground">{problem.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}