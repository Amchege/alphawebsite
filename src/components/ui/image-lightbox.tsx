"use client";

import { useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";
import type { MediaAsset } from "@/types/common";

interface ImageLightboxProps {
  images: MediaAsset[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const shouldReduceMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const animProps = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${currentIndex + 1} of ${images.length}`}
        {...animProps}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/50 text-background transition-colors hover:bg-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        {/* Previous */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/50 text-background transition-colors hover:bg-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/50 text-background transition-colors hover:bg-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Image */}
        <div
          className="max-h-[85vh] max-w-[90vw] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[80vh] w-auto rounded-lg object-contain"
          />
          {currentImage.caption && (
            <p className="mt-3 text-center text-sm text-background/70">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Counter */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-background/50">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}