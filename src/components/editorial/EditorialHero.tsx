'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';
import { HeroVisual } from './HeroVisual';
import type { EditorialVariant } from './variant';

interface EditorialHeroProps {
  variant: EditorialVariant;
}

export function EditorialHero({ variant }: EditorialHeroProps) {
  const isDark = variant === 'dark';
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // clipboard unavailable — mailto link remains functional
    }
  }, []);

  return (
    <section className="w-full" aria-labelledby="dashboard-headline">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:px-8 lg:pb-20">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] ${
              isDark ? 'text-[#7dd3fc]' : 'text-[#1d4ed8]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-emerald-400' : 'bg-emerald-600'
              }`}
              aria-hidden="true"
            />
            AI • CLOUD • DIGITAL PRODUCTS
          </motion.p>

          <motion.h1
            id="dashboard-headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className={`mt-5 text-balance font-sans text-[clamp(2.1rem,4.6vw,3.6rem)] font-bold leading-[1.08] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            I build{' '}
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400'
                  : 'bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#92400e]'
              }`}
            >
              digital products
            </span>{' '}
            that are made to work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
            className={`mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            I build production-ready web applications, AI-powered products, SaaS
            platforms, and modern digital experiences using React, Next.js, and
            cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_32px_-10px_rgba(245,158,11,0.65)] transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={siteConfig.cta.primaryHref}
              className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isDark
                  ? 'border-white/15 text-[#eef2f7] hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-[#7dd3fc]'
                  : 'border-[#c9bfa9] text-[#16202e] hover:border-[#a89c80] hover:bg-black/[0.03] focus-visible:outline-[#1d4ed8]'
              }`}
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
            className={`mt-6 inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border px-4 py-2.5 ${
              isDark
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-[#d5cbb4] bg-white'
            }`}
          >
            <Mail
              className={`h-4 w-4 shrink-0 ${
                isDark ? 'text-[#7dd3fc]' : 'text-[#1d4ed8]'
              }`}
              aria-hidden="true"
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className={`min-w-0 truncate text-[13px] font-medium transition-colors ${
                isDark
                  ? 'text-[#c6cfdb] hover:text-white'
                  : 'text-[#3d4753] hover:text-[#16202e]'
              }`}
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                isDark
                  ? 'border-white/10 text-[#9aa6b8] hover:border-white/25 hover:text-white'
                  : 'border-[#d5cbb4] text-[#5d6878] hover:border-[#a89c80] hover:text-[#16202e]'
              }`}
              aria-label={emailCopied ? 'Email copied' : 'Copy email to clipboard'}
            >
              {emailCopied ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          className="min-w-0"
        >
          <HeroVisual variant={variant} />
        </motion.div>
      </div>
    </section>
  );
}
