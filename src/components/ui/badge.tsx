import { cn } from "@/lib/cn";

const badgeVariants = {
  primary: "bg-primary-light text-primary",
  accent: "bg-accent-light text-accent",
  muted: "bg-muted text-muted-foreground",
  outline: "border border-border text-foreground bg-transparent",
} as const;

type BadgeVariant = keyof typeof badgeVariants;

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "primary", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}