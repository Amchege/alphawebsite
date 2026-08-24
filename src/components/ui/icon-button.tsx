import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";
}

const iconButtonSizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "ghost", size = "md", "aria-label": ariaLabel, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          "inline-flex items-center justify-center rounded-lg transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-muted text-foreground hover:bg-muted-foreground/10",
          variant === "ghost" && "text-foreground hover:bg-muted",
          iconButtonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };