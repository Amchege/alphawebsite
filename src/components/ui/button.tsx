import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover focus-visible:ring-primary/30",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary-light active:bg-primary-light focus-visible:ring-primary/20",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover active:bg-accent-hover focus-visible:ring-accent/30",
  ghost:
    "text-foreground hover:bg-muted active:bg-muted focus-visible:ring-primary/20",
} as const;

export const buttonSizes = {
  sm: "h-9 px-4 text-sm rounded-md gap-1.5",
  md: "h-11 px-6 text-sm rounded-lg gap-2",
  lg: "h-12 px-8 text-base rounded-lg gap-2.5",
} as const;

type ButtonVariant = keyof typeof buttonVariants;
type ButtonSize = keyof typeof buttonSizes;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, asChild, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium transition-colors duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    if (asChild) {
      return (
        <span className={classes} role="button">
          {children}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };