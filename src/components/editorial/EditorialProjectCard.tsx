'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ShowcaseProject } from '@/data/showcase';
import type { EditorialVariant } from './variant';

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-label={`${project.number} ${project.name}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? 'border-white/[0.07] bg-[#0d1728] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] hover:border-cyan-300/25 hover:shadow-[0_28px_64px_-24px_rgba(56,189,248,0.25)]'
          : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_48px_-30px_rgba(60,50,30,0.4)] hover:-translate-y-1 hover:border-[#b9ac8d] hover:shadow-[0_30px_56px_-26px_rgba(60,50,30,0.45)]'
      }`}
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p
          className={`text-[15px] font-bold tracking-wide ${
            isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
          }`}
        >
          <span className={isDark ? 'font-medium text-[#67748a]' : 'font-medium text-[#9a917e]'}>
            {project.number} /{' '}
          </span>
          {project.name}
        </p>
        <p
          className={`mt-2 min-h-[3.75rem] text-[13px] leading-relaxed ${
            isDark ? 'text-[#9aa6b8]' : 'text-[#5d6878]'
          }`}
        >
          {project.description}
        </p>

        <div
          className={`mt-4 overflow-hidden rounded-xl border ${
            isDark ? 'border-white/[0.08] bg-black/30' : 'border-[#e7dfcd] bg-[#f4efe4]'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${
                isDark
                  ? 'border-white/10 bg-white/[0.04] text-[#a7b0bd]'
                  : 'border-[#d8d0bf] bg-black/[0.02] text-[#5d6878]'
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isDark
                ? 'border-white/12 text-[#dfe5ee] hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:outline-[#7dd3fc]'
                : 'border-[#c9bfa9] text-[#3d4753] hover:border-[#1d4ed8]/50 hover:bg-[#1d4ed8]/5 focus-visible:outline-[#1d4ed8]'
            }`}
            aria-label={`View ${project.name} project`}
          >
            VIEW PROJECT
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <span
            className={`text-[11px] font-medium tracking-[0.18em] ${
              isDark ? 'text-[#4d5a70]' : 'text-[#a89c80]'
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
