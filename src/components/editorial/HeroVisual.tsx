'use client';

import { useEffect, useRef } from 'react';
import { BadgeCheck } from 'lucide-react';
import type { EditorialVariant } from './variant';

interface HeroVisualProps {
  variant: EditorialVariant;
}

const TECH_CHIPS = ['React', 'Next.js', 'TypeScript', 'Tailwind'];

export function HeroVisual({ variant }: HeroVisualProps) {
  const isDark = variant === 'dark';
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const floaters =
      sceneRef.current?.querySelectorAll<HTMLElement>('[data-float]');
    const state = new Map<string, { x: number; y: number; r: number }>();

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      floaters?.forEach((el) => {
        const key = el.dataset.float ?? '';
        const depth = Number(el.dataset.depth ?? '1');
        const rect = el.getBoundingClientRect();
        const scene = sceneRef.current?.getBoundingClientRect();
        let influence = 0;
        if (scene && scene.width > 0) {
          const cx = rect.left + rect.width / 2 - (scene.left + scene.width / 2);
          const cy = rect.top + rect.height / 2 - (scene.top + scene.height / 2);
          const dist = Math.sqrt(
            (cx - (mx * scene.width) / 2) ** 2 +
              (cy - (my * scene.height) / 2) ** 2,
          );
          influence = Math.max(0, 1 - dist / (scene.width * 0.75));
        }
        const prev = state.get(key) ?? { x: 0, y: 0, r: 0 };
        const target = {
          x: mx * 14 * depth * (0.25 + influence),
          y: my * -10 * depth * (0.25 + influence),
          r: mx * 6 * depth * influence,
        };
        const next = {
          x: prev.x + (target.x - prev.x) * 0.06,
          y: prev.y + (target.y - prev.y) * 0.06,
          r: prev.r + (target.r - prev.r) * 0.06,
        };
        state.set(key, next);
        el.style.transform = `translate3d(${next.x.toFixed(2)}px, ${next.y.toFixed(
          2,
        )}px, 0) rotate(${next.r.toFixed(2)}deg)`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative w-full"
      style={{ perspective: '1200px' }}
      aria-hidden="false"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-8 rounded-[28px] blur-3xl ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),rgba(139,92,246,0.08),transparent_70%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),rgba(180,83,9,0.08),transparent_70%)]'
        }`}
      />

      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        <div
          data-float="cube-left"
          data-depth="1.4"
          className={`absolute -left-4 top-16 hidden h-16 w-16 sm:block ${
            isDark ? 'opacity-90' : 'opacity-80'
          }`}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          aria-hidden="true"
        >
          <div
            className={`h-full w-full rounded-lg border ${
              isDark
                ? 'border-cyan-300/25 bg-gradient-to-br from-[#16273d] to-[#0b1626] shadow-[0_0_36px_-6px_rgba(56,189,248,0.45)]'
                : 'border-[#9db4d0] bg-gradient-to-br from-white to-[#dbe5f1] shadow-[0_18px_36px_-16px_rgba(37,99,235,0.45)]'
            }`}
          />
        </div>
        <div
          data-float="sphere-glow"
          data-depth="1.8"
          className="absolute -right-3 top-6 h-10 w-10 sm:-right-5 sm:h-14 sm:w-14"
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#fde68a_0%,#f59e0b_45%,#92400e_100%)] shadow-[0_0_32px_6px_rgba(245,158,11,0.45)]" />
        </div>
        <div
          data-float="cylinder-right"
          data-depth="1.1"
          className={`absolute -bottom-6 right-10 hidden h-20 w-12 md:block ${
            isDark ? 'opacity-90' : 'opacity-80'
          }`}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        >
          <div
            className={`h-full w-full rounded-full border ${
              isDark
                ? 'border-white/10 bg-gradient-to-b from-[#1a2a44] via-[#0e1930] to-[#080f1d] shadow-[0_0_30px_-8px_rgba(139,92,246,0.5)]'
                : 'border-[#b9c4d4] bg-gradient-to-b from-white via-[#e4ebf5] to-[#c3cfdf] shadow-[0_18px_30px_-14px_rgba(30,64,175,0.4)]'
            }`}
          />
        </div>

        <div
          data-float="browser"
          data-depth="0.5"
          className={`relative overflow-hidden rounded-2xl border will-change-transform ${
            isDark
              ? 'border-white/10 bg-[#0d1728] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)]'
              : 'border-[#d5cbb4] bg-white shadow-[0_32px_64px_-28px_rgba(60,50,30,0.45)]'
          }`}
          style={{ willChange: 'transform' }}
        >
          <div
            className={`flex items-center gap-2 border-b px-4 py-3 ${
              isDark ? 'border-white/[0.07]' : 'border-[#e7dfcd]'
            }`}
          >
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
            </span>
            <span
              className={`ml-2 hidden rounded-md px-3 py-1 font-mono text-[11px] sm:block ${
                isDark
                  ? 'bg-white/[0.05] text-[#8e99a8]'
                  : 'bg-black/[0.04] text-[#5d6878]'
              }`}
            >
              flexshop — product discovery
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/projects/1789492968636.png"
            alt="FlexShop e-commerce storefront: product catalog and shopping interface"
            loading="eager"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>

        <div
          data-float="badge-card"
          data-depth="1.2"
          className={`absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-md sm:left-8 ${
            isDark
              ? 'border-white/10 bg-[#0d1728]/90 shadow-[0_20px_44px_-16px_rgba(0,0,0,0.7)]'
              : 'border-[#d5cbb4] bg-white/95 shadow-[0_20px_40px_-18px_rgba(60,50,30,0.4)]'
          }`}
          style={{ willChange: 'transform' }}
        >
          <BadgeCheck
            className={`h-6 w-6 shrink-0 ${
              isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
            }`}
            aria-hidden="true"
          />
          <div>
            <p
              className={`text-[13px] font-semibold leading-tight ${
                isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
              }`}
            >
              Production-ready
            </p>
            <p
              className={`text-xs leading-tight ${
                isDark ? 'text-[#8e99a8]' : 'text-[#5d6878]'
              }`}
            >
              Responsive &amp; accessible builds
            </p>
          </div>
        </div>

        <div
          data-float="tech-row"
          data-depth="0.8"
          className="mt-8 flex flex-wrap items-center gap-2"
          style={{ willChange: 'transform' }}
        >
          {TECH_CHIPS.map((tech) => (
            <span
              key={tech}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
                isDark
                  ? 'border-white/10 bg-white/[0.04] text-[#c6cfdb]'
                  : 'border-[#d5cbb4] bg-white text-[#3d4753]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isDark ? 'bg-cyan-300' : 'bg-[#1d4ed8]'
                }`}
                aria-hidden="true"
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
