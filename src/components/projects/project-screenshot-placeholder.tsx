import { ImagePlus } from "lucide-react";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { cn } from "@/lib/cn";

interface ProjectScreenshotPlaceholderProps {
  label?: string;
  className?: string;
  large?: boolean;
}

export function ProjectScreenshotPlaceholder({
  label = "Project Preview",
  className,
  large = false,
}: ProjectScreenshotPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/20",
        large ? "py-20 sm:py-28" : "py-12 sm:py-16",
        className
      )}
    >
      <ImagePlus
        size={large ? 32 : 24}
        className="text-muted-foreground/20"
        strokeWidth={1.5}
      />
      <MonospaceLabel className="mt-3">{label}</MonospaceLabel>
      <p className="mt-1 text-xs text-muted-foreground/40">
        Screenshot will be added soon
      </p>
    </div>
  );
}