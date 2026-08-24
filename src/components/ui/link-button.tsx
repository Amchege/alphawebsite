import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  buttonVariants,
  buttonSizes,
  type ButtonVariant,
  type ButtonSize,
} from "./button";

interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external = false,
}: LinkButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}