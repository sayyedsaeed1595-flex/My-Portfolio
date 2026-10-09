'use client';

import { motion } from 'framer-motion';
import type { EditorialVariant } from './EditorialHeader';

interface EditorialHeroProps {
  variant: EditorialVariant;
}

export function EditorialHero({ variant }: EditorialHeroProps) {
  const isDark = variant === 'dark';

  return (
    <section className="w-full" aria-labelledby="editorial-headline">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16 text-center">
        <motion.h1
          id="editorial-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`font-editorial leading-[1.04] tracking-[-0.01em] text-balance text-[clamp(2.6rem,7vw,5.25rem)] ${
            isDark ? 'text-[#f2ede3]' : 'text-[#1d2733]'
          }`}
        >
          <span className="block font-semibold">CRAFTING HIGH-END</span>
          <span
            className={`block font-light ${
              isDark ? 'text-[#c3ccd8]' : 'text-[#435060]'
            }`}
          >
            WEB APPLICATIONS
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className={`mt-6 text-[11px] font-medium tracking-[0.22em] ${
            isDark ? 'text-[#8e99a8]' : 'text-[#7a7466]'
          }`}
        >
          WEB DEVELOPMENT PORTFOLIO // AVAILABLE FOR PROJECTS
        </motion.p>
      </div>
    </section>
  );
}
