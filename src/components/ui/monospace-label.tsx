import { cn } from "@/lib/cn";

interface MonospaceLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MonospaceLabel({ children, className }: MonospaceLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60",
        className
      )}
    >
      {children}
    </span>
  );
}