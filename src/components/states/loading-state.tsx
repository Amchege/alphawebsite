import { cn } from "@/lib/cn";

interface LoadingStateProps {
  text?: string;
  className?: string;
}

export function LoadingState({ text = "Loading...", className }: LoadingStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16",
        className
      )}
      role="status"
      aria-label={text}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-primary" />
      <p className="mt-3 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}