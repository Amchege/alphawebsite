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
  const [isMobile, setIsMobile] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Detect desktop on mount
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Handle video readiness for smooth fade-in
  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => setIsVideoReady(true);
    videoElement.addEventListener("canplaythrough", handleCanPlay);
    if (videoElement.readyState >= 3) setIsVideoReady(true);
    return () => videoElement.removeEventListener("canplaythrough", handleCanPlay);
  }, [isMobile, shouldReduceMotion]);

  // Mobile or reduced motion: static background only
  if (isMobile || shouldReduceMotion) {
    return (
      <div
        className={cn("absolute inset-0 z-0", className)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-primary" />
        {poster && (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            aria-hidden="true"
            loading="eager"
          />
        )}
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

  // Desktop: video background
  return (
    <div
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
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
      </video>

      {!isVideoReady && <div className="absolute inset-0 bg-primary" />}

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