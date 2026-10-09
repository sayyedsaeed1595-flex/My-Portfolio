'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { EditorialVariant } from './variant';

interface AboutSectionProps {
  variant: EditorialVariant;
}

const FOCUS_AREAS = [
  'Web application architecture',
  'AI-powered applications',
  'SaaS product development',
  'React and Next.js',
  'TypeScript',
  'AWS and cloud technologies',
  'API integrations',
  'Responsive interfaces',
  'Deployment and production readiness',
];

export function AboutSection({ variant }: AboutSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 rounded-2xl border p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10 ${
            isDark
              ? 'border-white/[0.07] bg-[#0d1728]'
              : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_48px_-32px_rgba(60,50,30,0.35)]'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p
              className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] ${
                isDark ? 'text-amber-300' : 'text-[#b45309]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isDark ? 'bg-amber-300' : 'bg-[#b45309]'
                }`}
                aria-hidden="true"
              />
              ABOUT
            </p>
            <h2
              id="about-heading"
              className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${
                isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
              }`}
            >
              Practical products, built for production
            </h2>
            <p
              className={`mt-4 text-[15px] leading-relaxed ${
                isDark ? 'text-[#a7b0bd]' : 'text-[#4b5665]'
              }`}
            >
              I build practical digital products by combining modern web
              technologies, AI integrations, and cloud infrastructure. My focus
              is on applications that work reliably in production — clean
              architecture, thoughtful interfaces, and attention to the details
              that matter in real-world use.
            </p>
            <Link
              href="/about"
              className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                isDark
                  ? 'text-cyan-300 hover:text-white'
                  : 'text-[#1d4ed8] hover:text-[#16202e]'
              }`}
            >
              More about me
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <p
              className={`text-[11px] font-semibold tracking-[0.22em] ${
                isDark ? 'text-[#7d8aa0]' : 'text-[#7a7466]'
              }`}
            >
              FOCUS AREAS
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className={`rounded-full border px-3 py-1.5 text-[13px] font-medium ${
                    isDark
                      ? 'border-white/10 bg-white/[0.03] text-[#c6cfdb]'
                      : 'border-[#d8d0bf] bg-[#f8f3e9] text-[#3d4753]'
                  }`}
                >
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
