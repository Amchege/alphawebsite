import Link from "next/link";
import { cn } from "@/lib/cn";
import { mainNavLinks } from "@/data/navigation";

interface DesktopNavProps {
  className?: string;
}

export function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="flex items-center gap-1">
        {mainNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "inline-flex items-center px-3 py-2 text-sm font-medium text-muted-foreground",
                "transition-colors duration-150 rounded-md",
                "hover:text-foreground hover:bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}