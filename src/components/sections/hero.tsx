"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { MonospaceLabel } from "@/components/ui/monospace-label";
import { RotatingText } from "@/components/animations/rotating-text";
import { SoftwareSystemVisual } from "@/components/visual/software-system-visual";
import { TechnicalGrid } from "@/components/visual/technical-grid";
import { GradientField } from "@/components/visual/gradient-field";
import { CodingVideoBackground } from "@/components/visual/coding-video-background";
import { useReducedMotion } from "@/lib/utils";
import { HeroSentinel } from "@/components/layout/HeroSentinel";

const rotatingPhrases = [
  "Business Software",
  "Custom Web Applications",
  "Business Automation",
  "Digital Management Systems",
];

const bottomLineWords = ["Around", "How", "Your", "Business", "Works."];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldReduceMotion]);

  const heroOpacity = shouldReduceMotion ? 1 : Math.max(0, 1 - scrollY / 600);
  const heroScale = shouldReduceMotion ? 1 : Math.max(0.95, 1 - scrollY / 3000);
  const visualTranslateY = shouldReduceMotion ? 0 : scrollY * 0.15;

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Video Background */}
      <CodingVideoBackground
        src="/videos/software-development.mp4"
        poster="/images/coding-poster.webp"
        videoOpacity={0.3}
        overlayOpacity={0.88}
      />

      {/* Grid + Gradient */}
      <TechnicalGrid className="z-[1]" opacity={0.03} size={32} />
      <GradientField variant="blue" intensity="low" className="z-[1]" />

      {/* Ambient labels */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
          {[
            { text: "API", x: "10%", y: "20%" },
            { text: "DATA", x: "85%", y: "15%" },
            { text: "AUTH", x: "8%", y: "70%" },
            { text: "QUERY", x: "90%", y: "75%" },
            { text: "SYSTEM", x: "15%", y: "90%" },
          ].map((item, i) => (
            <motion.span
              key={item.text}
              className="absolute font-mono text-[9px] uppercase tracking-[0.2em] text-primary-foreground/[0.05]"
              style={{ left: item.x, top: item.y }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.3 }}
            >
              {item.text}
            </motion.span>
          ))}
        </div>
      )}

      <Container className="relative z-10">
        <div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
            transition: shouldReduceMotion ? "none" : "opacity 0.1s, transform 0.1s",
          }}
        >
          {/* Text content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <MonospaceLabel className="text-primary-foreground/60">Full-Stack Software Development</MonospaceLabel>
            </motion.div>

            <div className="mt-4">
              <motion.h1
                {...fadeUp(0.1)}
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.1 }}
              >
                {/* "We Build" â€” orange with hover underline */}
                <span className="relative inline-block text-accent cursor-default after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-foreground/30 after:transition-all after:duration-300 hover:after:w-full text-balance block">
                  We Build
                </span>

                {/* Rotating phrase â€” white */}
                <span className="block mt-1 min-h-[1.3em] text-primary-foreground">
                  <RotatingText items={rotatingPhrases} interval={3500} />
                </span>

                {/* "Around How Your Business Works." â€” word-animated light orange */}
                <span className="block mt-2">
                  {shouldReduceMotion ? (
                    <span className="text-balance" style={{ color: "rgb(218, 213, 193)" }}>
                      Around How Your Business Works.
                    </span>
                  ) : (
                    bottomLineWords.map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + i * 0.13,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block mr-[0.3em] text-balance"
                        style={{ color: "rgb(248, 120, 46)" }}
                      >
                        {word}
                      </motion.span>
                    ))
                  )}
                </span>
              </motion.h1>
            </div>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/60"
            >
              Alpha Tec Solutions designs and builds custom software systems
              that streamline operations, automate workflows and give businesses
              better control of their day-to-day operations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <LinkButton
                href="/get-started"
                variant="accent"
                size="lg"
                className="hover:!bg-white hover:!text-accent hover:!border-white"
              >
                <span className="relative z-10">Start a Project</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="relative z-10 ml-1 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 8h12m0 0L9 4m5 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </LinkButton>

              <LinkButton
                href="/projects"
                variant="secondary"
                size="lg"
                className="border-primary-foreground/25 text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                Explore Our Work
              </LinkButton>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              <span className="text-xs text-primary-foreground/40">Custom software</span>
              <span className="text-xs text-primary-foreground/15">â€¢</span>
              <span className="text-xs text-primary-foreground/40">Business systems</span>
              <span className="text-xs text-primary-foreground/15">â€¢</span>
              <span className="text-xs text-primary-foreground/40">Automation</span>
              <span className="text-xs text-primary-foreground/15">â€¢</span>
              <span className="text-xs text-primary-foreground/40">Integrations</span>
            </motion.div>
          </div>

          {/* Architecture visual â€” no box */}
          <motion.div
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                })}
            className="hidden lg:block"
            style={{
              transform: `translateY(${visualTranslateY}px)`,
              transition: shouldReduceMotion ? "none" : "transform 0.1s linear",
            }}
          >
            <SoftwareSystemVisual variant="hero" className="h-[450px]" />
          </motion.div>
        </div>

        {/* Technical HUD */}
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 1.2 },
              })}
          className="mt-12 hidden md:flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-primary-foreground/20"
        >
          <span>SYSTEM / 01</span>
          <span className="h-px w-8 bg-primary-foreground/15" />
          <span>NBO / GLOBAL</span>
          <span className="h-px w-8 bg-primary-foreground/15" />
          <span>STATUS: BUILDING</span>
        </motion.div>
      </Container>
    </section>
  );
}
