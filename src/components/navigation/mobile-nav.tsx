"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { mainNavLinks } from "@/data/navigation";
import { useReducedMotion } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const shouldReduceMotion = useReducedMotion();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const nav = navRef.current;
      if (!nav) return;

      const focusableElements = nav.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const animationProps = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2, ease: "easeOut" },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={navRef}
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          {...animationProps}
          className="border-t border-border bg-background md:hidden"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4">
            <ul className="flex flex-col gap-1">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium text-foreground",
                      "transition-colors duration-150",
                      "hover:bg-muted",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <a
                href="/get-started"
                onClick={onClose}
                className={cn(
                  "flex h-12 w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-medium text-accent-foreground",
                  "transition-colors duration-150",
                  "hover:bg-accent-hover active:bg-accent-hover",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2"
                )}
              >
                Start a Project
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}