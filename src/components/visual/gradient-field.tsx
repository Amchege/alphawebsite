import { cn } from "@/lib/cn";

interface GradientFieldProps {
  className?: string;
  variant?: "blue" | "orange" | "mixed";
  intensity?: "low" | "medium" | "high";
}

const variants = {
  blue: {
    from: "rgba(30,58,138,VAR)",
    to: "transparent",
  },
  orange: {
    from: "rgba(234,88,12,VAR)",
    to: "transparent",
  },
  mixed: {
    from: "rgba(30,58,138,VAR)",
    via: "rgba(234,88,12,VAR2)",
    to: "transparent",
  },
};

const intensities = {
  low: 0.03,
  medium: 0.06,
  high: 0.1,
};

export function GradientField({
  className,
  variant = "blue",
  intensity = "low",
}: GradientFieldProps) {
  const op = intensities[intensity];
  const config = variants[variant] as typeof variants.mixed;

  let style: React.CSSProperties;
  if (variant === "mixed") {
    style = {
      background: `radial-gradient(ellipse at 30% 50%, ${config.from.replace("VAR", String(op))}, ${config.via?.replace("VAR2", String(op * 0.5))}, ${config.to})`,
    };
  } else {
    style = {
      background: `radial-gradient(ellipse at 50% 50%, ${config.from.replace("VAR", String(op))}, ${config.to})`,
    };
  }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={style}
      aria-hidden="true"
    />
  );
}