'use client';

import Link from 'next/link';
import { MotionConfig } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { showcaseProjects } from '@/data/showcase';
import { siteConfig } from '@/lib/site';
import { EditorialNavbar } from './EditorialNavbar';
import type { EditorialVariant } from './variant';
import { EditorialHero } from './EditorialHero';
import { EditorialProjectCard } from './EditorialProjectCard';
import { ServicesSection } from './ServicesSection';
import { AboutSection } from './AboutSection';
import { TechStackSection } from './TechStackSection';
import { ContactSection } from './ContactSection';
import { EditorialFooter } from './EditorialFooter';

interface EditorialPageProps {
  variant: EditorialVariant;
}

function WorkCtaCard({ variant }: { variant: EditorialVariant }) {
  const isDark = variant === 'dark';

  return (
    <article
      aria-label="Work together"
      className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 ${
        isDark
          ? 'border-amber-300/20 bg-gradient-to-br from-[#16273d] via-[#0d1728] to-[#0d1728]'
          : 'border-[#d9c9a8] bg-gradient-to-br from-[#fffdf8] via-[#faf3e3] to-[#f4ecd9]'
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${
          isDark ? 'bg-amber-400/15' : 'bg-amber-500/15'
        }`}
      />
      <div>
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
          LET&apos;S WORK TOGETHER
        </p>
        <h3
          className={`mt-3 text-xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-[#101b2a]'
          }`}
        >
          Have a project in mind?
        </h3>
        <p
          className={`mt-2 text-[13px] leading-relaxed ${
            isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
          }`}
        >
          I&apos;m always open to discussing new ideas, collaborations and
          opportunities.
        </p>
      </div>
      <Link
        href={siteConfig.cta.primaryHref}
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/60 px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-amber-300 transition-all hover:-translate-y-0.5 hover:bg-amber-400/10"
        aria-label="Get in touch about a project"
      >
        GET IN TOUCH
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function EditorialPage({ variant }: EditorialPageProps) {
  const isDark = variant === 'dark';
  const total = showcaseProjects.length;

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="top"
        className={`min-h-screen w-full overflow-x-clip ${
          isDark ? 'bg-[#070d18] text-[#eef2f7]' : 'bg-[#f4f1ea] text-[#16202e]'
        }`}
      >
        <EditorialNavbar variant={variant} />
        <main className="w-full">
          <EditorialHero variant={variant} />

          <section
            id="work"
            aria-labelledby="work-heading"
            className="w-full scroll-mt-24"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
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
                    SELECTED WORK
                  </p>
                  <h2
                    id="work-heading"
                    className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${
                      isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
                    }`}
                  >
                    Featured projects
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
                    isDark
                      ? 'text-[#9aa6b8] hover:text-white'
                      : 'text-[#5d6878] hover:text-[#16202e]'
                  }`}
                >
                  View All Projects
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div
                className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
                role="list"
                aria-label="Featured projects"
              >
                {showcaseProjects.map((project, index) => (
                  <div key={project.slug} role="listitem" className="min-w-0">
                    <EditorialProjectCard
                      variant={variant}
                      project={project}
                      positionLabel={`${String(index + 1).padStart(2, '0')} / ${String(
                        total,
                      ).padStart(2, '0')}`}
                    />
                  </div>
                ))}
                <WorkCtaCard variant={variant} />
              </div>
            </div>
          </section>

          <div className="pt-4">
            <ServicesSection variant={variant} />
          </div>
          <AboutSection variant={variant} />
          <TechStackSection variant={variant} />
          <div className="pb-16 sm:pb-20">
            <ContactSection variant={variant} />
          </div>
        </main>
        <EditorialFooter variant={variant} />
      </div>
    </MotionConfig>
  );
}
