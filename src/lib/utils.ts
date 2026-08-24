"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Detects user preference for reduced motion.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * Validate that a URL string is non-empty.
 */
export function isValidUrl(url: string | null | undefined): url is string {
  return typeof url === "string" && url.trim().length > 0;
}

/**
 * Format a phone number for display.
 */
export function formatPhone(raw: string): string {
  return raw;
}