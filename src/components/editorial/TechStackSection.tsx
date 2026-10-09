'use client';

import { motion } from 'framer-motion';
import type { EditorialVariant } from './variant';

interface TechStackSectionProps {
  variant: EditorialVariant;
}

const TECHNOLOGIES = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'AWS',
  'Cloudflare',
  'Git',
  'GitHub',
];

export function TechStackSection({ variant }: TechStackSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section aria-labelledby="stack-heading" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className={`rounded-2xl border p-6 sm:p-8 ${
            isDark
              ? 'border-white/[0.07] bg-[#0d1728]'
              : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_48px_-32px_rgba(60,50,30,0.35)]'
          }`}
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
            TECHNOLOGY STACK
          </p>
          <h2
            id="stack-heading"
            className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${
              isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
            }`}
          >
            Tools behind the work
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {TECHNOLOGIES.map((tech) => (
              <li
                key={tech}
                className={`rounded-lg border px-3.5 py-2 text-[13px] font-semibold ${
                  isDark
                    ? 'border-white/10 bg-white/[0.03] text-[#dfe5ee]'
                    : 'border-[#d8d0bf] bg-[#f8f3e9] text-[#2b3648]'
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
