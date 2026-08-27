'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Process', href: '/process/' },
  { label: 'Insights', href: '/insights/' },
];

type WalkPhase = 'idle' | 'appear' | 'walk' | 'disappear';

interface FlameParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  variant: number;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [phase, setPhase] = useState<WalkPhase>('idle');
  const [walkerX, setWalkerX] = useState(0);
  const [flames, setFlames] = useState<FlameParticle[]>([]);
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLSpanElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const flameIdRef = useRef(0);
  const flameIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const walkBoundsRef = useRef({
    startX: 0,
    endX: 0,
    duration: 5000,
    startTime: 0,
  });

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (flameIntervalRef.current) {
      clearInterval(flameIntervalRef.current);
      flameIntervalRef.current = null;
    }
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  /* Dark hero pages */
 const darkHeroPaths = ['/', '/projects', '/insights', '/contact'];
const isDarkHero = darkHeroPaths.some((p) => {
  if (p === '/') return pathname === '/';
  return pathname.startsWith(p);
});

  /* ═══════════════════════════════════════════
     FLAME SPAWNER
     ═══════════════════════════════════════════ */
  const spawnFlame = useCallback(() => {
    const { startX, endX, duration, startTime } = walkBoundsRef.current;
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    const currentX = startX + (endX - startX) * eased;

    const id = flameIdRef.current++;
    const y = 14 + Math.random() * 10;
    const size = 5 + Math.random() * 9;
    const variant = Math.floor(Math.random() * 3);

    setFlames((prev) => [...prev, { id, x: currentX - 4, y, size, variant }]);
    setTimeout(() => {
      setFlames((prev) => prev.filter((f) => f.id !== id));
    }, 700);
  }, []);

  const spawnBurst = useCallback((x: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const id = flameIdRef.current++;
      const y = 10 + Math.random() * 16;
      const size = 4 + Math.random() * 10;
      const variant = Math.floor(Math.random() * 3);
      const offsetX = (Math.random() - 0.5) * 20;
      setTimeout(() => {
        setFlames((prev) => [...prev, { id, x: x + offsetX, y, size, variant }]);
        setTimeout(() => {
          setFlames((prev) => prev.filter((f) => f.id !== id));
        }, 700);
      }, i * 40);
    }
  }, []);

  /* ═══════════════════════════════════════════
     WALK CYCLE
     ═══════════════════════════════════════════ */
  const startWalkCycle = useCallback(() => {
    const container = containerRef.current;
    const logo = logoRef.current;
    const cta = ctaRef.current;
    if (!container || !logo || !cta) return;

    clearTimers();
    setFlames([]);

    const cRect = container.getBoundingClientRect();
    const logoRight = logo.getBoundingClientRect().right - cRect.left + 12;
    const ctaRight = cta.getBoundingClientRect().right - cRect.left + 12;
    const duration = 5000;

    walkBoundsRef.current = { startX: logoRight, endX: ctaRight, duration, startTime: 0 };

    timersRef.current.push(setTimeout(() => {
      setWalkerX(logoRight);
      setPhase('appear');
      spawnBurst(logoRight, 6);
    }, 0));

    timersRef.current.push(setTimeout(() => {
      walkBoundsRef.current.startTime = Date.now();
      setWalkerX(ctaRight);
      setPhase('walk');
      flameIntervalRef.current = setInterval(spawnFlame, 90);
    }, 400));

    timersRef.current.push(setTimeout(() => {
      if (flameIntervalRef.current) {
        clearInterval(flameIntervalRef.current);
        flameIntervalRef.current = null;
      }
    }, 400 + duration));

    timersRef.current.push(setTimeout(() => {
      spawnBurst(ctaRight, 8);
      setPhase('disappear');
    }, 400 + duration + 200));

    timersRef.current.push(setTimeout(() => {
      setPhase('idle');
    }, 400 + duration + 600));
  }, [spawnFlame, spawnBurst]);

  useEffect(() => {
    const init = setTimeout(() => {
      startWalkCycle();
      const loop = setInterval(startWalkCycle, 16000);
      return () => clearInterval(loop);
    }, 2000);
    return () => { clearTimeout(init); clearTimers(); };
  }, [startWalkCycle]);

  useEffect(() => () => clearTimers(), []);

  const walkerOpacity = phase === 'idle' ? 0 : phase === 'disappear' ? 0 : 1;
  const isWalking = phase === 'walk';
  const isAppearing = phase === 'appear';

  /* ═══════════════════════════════════════════
     NAV CLASSES — THREE STATES
     ═══════════════════════════════════════════ */
  const getNavItemClasses = (active: boolean) => {
    if (isScrolled) {
      /* SCROLLED: white text, ORANGE for active */
      return active
        ? 'text-orange-400 font-bold'
        : 'text-white/80 hover:text-white';
    }
    if (isDarkHero) {
      /* DARK HERO (home, insights): white text */
      return active
        ? 'text-white font-semibold'
        : 'text-white/60 hover:text-white';
    }
    /* LIGHT HERO (solutions, projects, process, about): BLUE-950 text */
    return active
      ? 'text-blue-950 font-bold'
      : 'text-slate-500 hover:text-blue-950';
  };

  const renderActiveIndicator = (active: boolean) => {
    if (!active) return null;
    if (isScrolled) {
      return (
        <span className="absolute -bottom-1 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-orange-400" />
      );
    }
    if (isDarkHero) {
      return (
        <span className="absolute -bottom-1 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-orange-400" />
      );
    }
    return (
      <span className="absolute -bottom-1 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-orange-500" />
    );
  };

  const hamburgerColor = (isScrolled || isDarkHero)
    ? 'text-white'
    : 'text-slate-600';

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes at-bounce-walk {
              0%   { transform: translateY(-50%) rotate(-3deg); }
              30%  { transform: translateY(calc(-50% - 14px)) rotate(1deg); }
              50%  { transform: translateY(-50%) rotate(-1deg); }
              80%  { transform: translateY(calc(-50% - 10px)) rotate(2deg); }
              100% { transform: translateY(-50%) rotate(-3deg); }
            }
            @keyframes at-pop-in {
              0%   { transform: translateY(-50%) scale(0) rotate(-15deg); opacity: 0; }
              50%  { transform: translateY(calc(-50% - 8px)) scale(1.2) rotate(4deg); opacity: 1; }
              70%  { transform: translateY(calc(-50% + 2px)) scale(0.95) rotate(-2deg); opacity: 1; }
              100% { transform: translateY(-50%) scale(1) rotate(0deg); opacity: 1; }
            }
            @keyframes at-spark-1 {
              0%   { opacity: 1; transform: translateY(0) scale(1); }
              100% { opacity: 0; transform: translateY(-22px) scale(0); }
            }
            @keyframes at-spark-2 {
              0%   { opacity: 0.9; transform: translateY(0) translateX(0) scale(1); }
              100% { opacity: 0; transform: translateY(-16px) translateX(-12px) scale(0); }
            }
            @keyframes at-spark-3 {
              0%   { opacity: 0.8; transform: translateY(0) translateX(0) scale(0.7); }
              100% { opacity: 0; transform: translateY(-28px) translateX(6px) scale(0); }
            }
            @keyframes at-glow-pulse {
              0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleX(1); }
              50%      { opacity: 0.6; transform: translateX(-50%) scaleX(1.3); }
            }
          `,
        }}
      />

      {/* ════════════════ HEADER ════════════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-blue-950 shadow-lg shadow-blue-950/30 border-b border-blue-800/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          ref={containerRef}
          className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
          style={{ overflow: 'visible' }}
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-24 lg:h-[104px]">

            {/* ── Logo ── */}
            <Link href="/" className="relative flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={logoRef}
                src={
                  isScrolled || isDarkHero
                    ? '/images/logo.png'
                    : '/images/logo-light-bg.png'
                }
                alt="Alpha Tec Solutions"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* ── Nav ── */}
            <nav className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="flex items-center gap-8">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-1 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 ${getNavItemClasses(active)}`}
                    >
                      {item.label}
                      {renderActiveIndicator(active)}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* ── Flames ── */}
            <div
              className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
              style={{ overflow: 'visible' }}
            >
              {flames.map((flame) => (
                <span
                  key={flame.id}
                  className="absolute pointer-events-none"
                  style={{
                    left: flame.x,
                    top: `calc(50% + ${flame.y}px)`,
                    animation: `at-spark-${flame.variant + 1} ${
                      0.45 + Math.random() * 0.3
                    }s ease-out forwards`,
                  }}
                >
                  <span
                    className="block rounded-full"
                    style={{
                      width: flame.size,
                      height: flame.size,
                      background:
                        flame.variant === 0
                          ? 'radial-gradient(circle, #fde68a, #f97316, #ea580c)'
                          : flame.variant === 1
                            ? 'radial-gradient(circle, #fff7ed, #fb923c)'
                            : 'radial-gradient(circle, #fca5a5, #ef4444)',
                      boxShadow:
                        '0 0 6px 2px rgba(249, 115, 22, 0.5), 0 0 12px 4px rgba(249, 115, 22, 0.2)',
                    }}
                  />
                </span>
              ))}
            </div>

            {/* ── Walking Character ── */}
            <div
              className="pointer-events-none absolute top-1/2 z-30 hidden lg:block"
              style={{
                left: walkerX,
                transform: 'translateY(-50%)',
                opacity: walkerOpacity,
                transition:
                  phase === 'walk'
                    ? 'left 5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease'
                    : 'left 0.15s ease-out, opacity 0.4s ease',
                animation: isWalking
                  ? 'at-bounce-walk 0.38s ease-in-out infinite'
                  : isAppearing
                    ? 'at-pop-in 0.4s ease-out forwards'
                    : 'none',
              }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mascot.png"
                alt=""
                className="h-12 w-auto"
                style={{
                  filter:
                    'drop-shadow(0 2px 8px rgba(0,0,0,0.5)) drop-shadow(0 4px 16px rgba(249, 115, 22, 0.3))',
                }}
              />
              <div
                className="absolute -bottom-2 left-1/2 h-3 w-10 rounded-full bg-orange-500/50 blur-md"
                style={{
                  animation: isWalking
                    ? 'at-glow-pulse 0.38s ease-in-out infinite'
                    : 'none',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-3 justify-end">
              <span ref={ctaRef} className="hidden sm:inline-flex">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold text-white bg-orange-500 shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/40 active:translate-y-0"
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </span>

              <button
                type="button"
                onClick={() => setIsMobileOpen((v) => !v)}
                className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5 lg:hidden ${hamburgerColor}`}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-all duration-300 ${isMobileOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                  <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`absolute transition-all duration-300 ${isMobileOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════ MOBILE MENU ════════════════ */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase">Navigation</span>
            <button
              type="button"
              onClick={() => setIsMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-0.5 p-4">
            {navItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-blue-950/10 text-blue-950 font-bold border-l-2 border-blue-950'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent'
                  }`}
                  style={{ transitionDelay: isMobileOpen ? `${i * 40}ms` : '0ms' }}
                >
                  <span className={`transition-all duration-300 ${isMobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}

            <div
              className={`mt-4 transition-all duration-300 ${isMobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMobileOpen ? `${navItems.length * 40}ms` : '0ms' }}
            >
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </nav>

          <div className="absolute bottom-0 inset-x-0 border-t border-slate-200 p-5">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Prefer to talk?
              <a href="mailto:hello@alphatecsolutions.com" className="ml-1 text-blue-950 hover:text-blue-800 transition-colors">
                hello@alphatecsolutions.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
