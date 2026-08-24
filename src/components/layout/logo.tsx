import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

/**
 * Logo component that loads the Alpha Tec Designs logo from the public directory.
 * Replace /public/images/branding/logo.svg with the actual logo file.
 * The component maintains proper aspect ratio and does not distort the image.
 */
export function Logo({ variant = "desktop", className }: LogoProps) {
  const dimensions = {
    desktop: { width: 160, height: 40 },
    mobile: { width: 120, height: 30 },
  };

  const { width, height } = dimensions[variant];

  return (
    <Image
      src="/images/branding/logo.svg"
      alt="Alpha Tec Designs"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );
}