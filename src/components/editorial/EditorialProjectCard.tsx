'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ShowcaseProject } from '@/data/showcase';
import type { EditorialVariant } from './EditorialHeader';

interface EditorialProjectCardProps {
  variant: EditorialVariant;
  project: ShowcaseProject;
  positionLabel: string;
}

export function EditorialProjectCard({
  variant,
  project,
  positionLabel,
}: EditorialProjectCardProps) {
  const isDark = variant === 'dark';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-[14px] border p-6 sm:p-8 lg:p-10 ${
        isDark
          ? 'border-[#263650] bg-[#101a2c] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]'
          : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_50px_-28px_rgba(60,50,30,0.35)]'
      }`}
      aria-label={`${project.number} ${project.name}`}
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-center">
        <div className="flex min-h-full flex-col items-start text-left">
          <p
            className={`font-editorial text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[0.01em] ${
              isDark ? 'text-[#f2ede3]' : 'text-[#1d2733]'
            }`}
          >
            <span className={isDark ? 'text-[#67748a]' : 'text-[#9a917e]'}>
              {project.number} /{' '}
            </span>
            {project.name}
          </p>
          <p
            className={`mt-3 max-w-md text-[15px] leading-relaxed ${
              isDark ? 'text-[#a7b0bd]' : 'text-[#5c6672]'
            }`}
          >
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                  isDark
                    ? 'border-[#2c3a4f] text-[#a7b0bd]'
                    : 'border-[#d8d0bf] text-[#5c6672]'
                }`}
              >
                {tech}
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className={`mt-7 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isDark
                ? 'border-[#33445e] text-[#dfe5ee] hover:border-[#4a5f7d] hover:bg-white/5 focus-visible:outline-[#f2ede3]'
                : 'border-[#c9bfa9] text-[#3d4753] hover:border-[#a89c80] hover:bg-black/[0.03] focus-visible:outline-[#1d2733]'
            }`}
            aria-label={`View ${project.name} project`}
          >
            VIEW PROJECT
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative">
          <div
            className={`overflow-hidden rounded-[10px] border ${
              isDark ? 'border-[#2c3a4f] bg-[#0b1322]' : 'border-[#e2d9c6] bg-white'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="aspect-[16/10] h-full w-full object-cover object-top"
            />
          </div>
          <span
            className={`pointer-events-none absolute bottom-3 right-4 text-[11px] font-medium tracking-[0.2em] ${
              isDark ? 'text-[#67748a]' : 'text-[#9a917e]'
            }`}
            aria-hidden="true"
          >
            {positionLabel}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
