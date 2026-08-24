"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/utils";

interface CodingVideoBackgroundProps {
  src: string;
  poster?: string;
  videoOpacity?: number;
  overlayOpacity?: number;
  className?: string;
}

export function CodingVideoBackground({
  src,
  poster,
  videoOpacity = 0.3,
  overlayOpacity = 0.7,
  className,
}: CodingVideoBackgroundProps) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Handle video readiness for smooth fade-in
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    videoElement.addEventListener("canplaythrough", handleCanPlay);
    
    // If already loaded (e.g., cached)
    if (videoElement.readyState >= 3) {
      setIsVideoReady(true);
    }

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  // If user prefers reduced motion, or data saver is on, render static poster/bg only
  if (shouldReduceMotion) {
    return (
      <div
        className={cn("absolute inset-0 z-0", className)}
        aria-hidden="true"
      >
        {/* Static fallback background matching the brand */}
        <div className="absolute inset-0 bg-primary" />
        {poster && (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* LAYER 1: Coding Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        className={cn(
          "absolute inset-0 h-full w-full object-cover scale-105",
          "transition-opacity duration-700 ease-out",
          isVideoReady ? "opacity-100" : "opacity-0"
        )}
        style={{ opacity: isVideoReady ? videoOpacity : 0 }}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback for browsers that don't support the video tag gracefully */}
      </video>

      {/* Fallback if video fails entirely */}
      {!isVideoReady && (
        <div className="absolute inset-0 bg-primary" />
      )}

      {/* LAYER 2: Royal Blue Overlay with sophisticated gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom, 
            rgba(30, 58, 138, ${overlayOpacity}) 0%, 
            rgba(30, 58, 138, ${overlayOpacity * 0.85}) 50%, 
            rgba(15, 23, 42, ${overlayOpacity * 0.95}) 100%
          )`,
        }}
      />
    </div>
  );
}