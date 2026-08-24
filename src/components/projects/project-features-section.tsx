import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { Check } from "lucide-react";
import type { ProjectFeatureGroup } from "@/types/project";

interface ProjectFeaturesSectionProps {
  features: ProjectFeatureGroup[];
}

export function ProjectFeaturesSection({ features }: ProjectFeaturesSectionProps) {
  if (features.length === 0) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {features.map((group, i) => (
        <ScrollReveal key={group.label} delay={i * 0.1}>
          <div>
            <MonospaceLabel className="text-primary">{group.label}</MonospaceLabel>
            <ul className="mt-4 space-y-3">
              {group.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-primary"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}