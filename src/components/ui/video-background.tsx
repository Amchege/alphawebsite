"use client";

import { useState, useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
  overlayOpacity?: number;
  className?: string;
}

export function VideoBackground({ 
  src, 
  overlayOpacity = 0.7, // 70% dark overlay by default to ensure text pops
  className = "" 
}: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* The Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setIsLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover scale-105" // Slight scale prevents edge gaps on resize
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay (Crucial for readability) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Initial dark state so text is readable before video loads */}
      {!isLoaded && <div className="absolute inset-0 bg-background" />}
    </div>
  );
}