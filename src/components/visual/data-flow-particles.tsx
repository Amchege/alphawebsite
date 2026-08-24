"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  pathIndex: number;
  progress: number;
  speed: number;
  size: number;
  opacity: number;
}

interface DataFlowParticlesProps {
  paths: { x: number; y: number }[][];
  color?: string;
  maxParticles?: number;
  className?: string;
}

export function DataFlowParticles({
  paths,
  color = "rgba(234,88,12,0.6)",
  maxParticles = 6,
  className,
}: DataFlowParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || paths.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    const resizeHandler = () => resizeCanvas();
    window.addEventListener("resize", resizeHandler);

    for (let i = 0; i < maxParticles; i++) {
      particlesRef.current.push({
        x: 0,
        y: 0,
        pathIndex: Math.floor(Math.random() * paths.length),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        size: 1.5 + Math.random() * 1,
        opacity: 0.4 + Math.random() * 0.4,
      });
    }

    const getPointOnPath = (path: { x: number; y: number }[] | null, progress: number) => {
      if (!path || path.length === 0) return { x: 0, y: 0 };
      if (path.length === 1) return { x: path[0].x, y: path[0].y };

      const totalSegments = path.length - 1;
      const segment = Math.min(Math.floor(progress * totalSegments), totalSegments - 1);
      const segmentProgress = (progress * totalSegments) - segment;
      const p1 = path[segment];
      const p2 = path[segment + 1];

      if (!p1 || !p2) return { x: 0, y: 0 };

      return {
        x: (p1.x + (p2.x - p1.x) * segmentProgress) * canvas.width,
        y: (p1.y + (p2.y - p1.y) * segmentProgress) * canvas.height,
      };
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.progress += particle.speed;
        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.pathIndex = Math.floor(Math.random() * paths.length);
        }

        const path = paths[particle.pathIndex];
        if (!path) return;

        const pos = getPointOnPath(path, particle.progress);
        particle.x = pos.x;
        particle.y = pos.y;

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = particle.opacity * 0.15;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [paths, color, maxParticles, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}