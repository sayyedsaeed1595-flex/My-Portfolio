'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import type { EditorialVariant } from './variant';

interface ContactSectionProps {
  variant: EditorialVariant;
}

export function ContactSection({ variant }: ContactSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section aria-labelledby="contact-heading" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={`relative overflow-hidden rounded-2xl border p-6 text-center sm:p-10 ${
            isDark
              ? 'border-amber-300/20 bg-gradient-to-b from-[#14202f] to-[#0d1728]'
              : 'border-[#d9c9a8] bg-gradient-to-b from-[#fffdf8] to-[#f6efdd]'
          }`}
        >
          <p
            className={`flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] ${
              isDark ? 'text-amber-300' : 'text-[#b45309]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-amber-300' : 'bg-[#b45309]'
              }`}
              aria-hidden="true"
            />
            LET&apos;S WORK TOGETHER
          </p>
          <h2
            id="contact-heading"
            className={`mx-auto mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            Have a project in mind?
          </h2>
          <p
            className={`mx-auto mt-3 max-w-lg text-[15px] leading-relaxed ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            I&apos;m always open to discussing new ideas, collaborations and
            opportunities.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${variant}/contact`}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/60 px-6 py-3 text-sm font-semibold text-amber-300 transition-all hover:-translate-y-0.5 hover:bg-amber-400/10"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? 'text-[#9aa6b8] hover:text-white'
                  : 'text-[#4b5665] hover:text-[#16202e]'
              }`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
