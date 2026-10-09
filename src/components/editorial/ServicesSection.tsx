'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/services';
import type { EditorialVariant } from './variant';

interface ServicesSectionProps {
  variant: EditorialVariant;
}

export function ServicesSection({ variant }: ServicesSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-2xl border p-5 sm:p-7 ${
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
            SERVICES
          </p>
          <h2
            id="services-heading"
            className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${
              isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
            }`}
          >
            What I can build for you
          </h2>
          <div
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            role="list"
            aria-label="Services offered"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                role="listitem"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: 'easeOut' }}
              >
                <Link
                  href={`/${variant}/contact`}
                  className={`group flex h-full flex-col gap-2.5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    isDark
                      ? 'border-white/[0.07] bg-white/[0.02] hover:border-cyan-300/25 hover:bg-white/[0.05]'
                      : 'border-[#e7dfcd] bg-[#f8f3e9] hover:border-[#1d4ed8]/40 hover:bg-white'
                  }`}
                  aria-label={`${service.name} — get in touch`}
                >
                  <service.icon
                    className={`h-5 w-5 ${
                      isDark
                        ? 'text-cyan-300'
                        : 'text-[#1d4ed8]'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-[13px] font-semibold leading-snug ${
                      isDark
                        ? 'text-[#dfe5ee] group-hover:text-white'
                        : 'text-[#2b3648] group-hover:text-[#16202e]'
                    }`}
                  >
                    {service.name}
                  </span>
                  <span
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-[#7d8aa0]' : 'text-[#6b7686]'
                    }`}
                  >
                    {service.description}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
