import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
  type Project,
} from '@/data/projects';
import { siteConfig } from '@/lib/site';
import { VariantShell } from '@/components/editorial/VariantShell';
import type { EditorialVariant } from '@/components/editorial/variant';

interface PageProps {
  params: Promise<{ variant: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return (['dark', 'light'] as const).flatMap((variant) =>
    slugs.map((slug) => ({ variant, slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — ${project.category}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${siteConfig.name}`,
      description: project.description,
      type: 'article',
    },
  };
}

function SectionCard({
  isDark,
  title,
  children,
}: {
  isDark: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-2xl border p-6 sm:p-8 ${
        isDark
          ? 'border-white/[0.07] bg-[#0d1728]'
          : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_48px_-32px_rgba(60,50,30,0.35)]'
      }`}
    >
      <h2
        className={`text-lg font-bold tracking-tight ${
          isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
        }`}
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function VariantProjectDetail({ params }: PageProps) {
  const { variant, slug } = await params;
  if (variant !== 'dark' && variant !== 'light') notFound();
  const v = variant as EditorialVariant;
  const isDark = v === 'dark';

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = projects;
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const nextProject =
    allProjects[(currentIndex + 1) % allProjects.length] as Project;
  const detailImages = project.images ?? [];

  const bodyText = isDark ? 'text-[#a7b0bd]' : 'text-[#4b5665]';
  const mutedText = isDark ? 'text-[#8e99a8]' : 'text-[#5d6878]';

  return (
    <VariantShell variant={v}>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <Link
          href={`/${v}/projects`}
          className={`inline-flex items-center gap-2 text-[13px] font-semibold transition-colors ${
            isDark
              ? 'text-[#9aa6b8] hover:text-white'
              : 'text-[#5d6878] hover:text-[#16202e]'
          }`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Work
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3">
            <span
              className={`text-xs font-bold tracking-[0.2em] ${
                isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
              }`}
            >
              {project.number}
            </span>
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${mutedText}`}
            >
              {project.category}
            </span>
          </p>
          <h1
            className={`mt-4 font-sans text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            {project.name}
          </h1>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-relaxed sm:text-base ${bodyText}`}
          >
            {project.longDescription}
          </p>
        </header>

        {project.coverImage && (
          <div
            className={`mt-10 overflow-hidden rounded-2xl border ${
              isDark
                ? 'border-white/[0.08] bg-black/30'
                : 'border-[#e2d9c6] bg-white'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.coverImage}
              alt={`${project.name} main screenshot`}
              className="aspect-[16/9] w-full object-cover object-top"
            />
          </div>
        )}

        {detailImages.length > 0 && (
          <div
            className={`mt-5 grid gap-5 ${
              detailImages.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {detailImages.map((src, index) => (
              <div
                key={src}
                className={`overflow-hidden rounded-2xl border ${
                  isDark
                    ? 'border-white/[0.08] bg-black/30'
                    : 'border-[#e2d9c6] bg-white'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${project.name} screenshot ${index + 2} of ${detailImages.length + 1}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <SectionCard isDark={isDark} title="Overview">
            <p className={`text-[15px] leading-relaxed ${bodyText}`}>
              {project.problem}
            </p>
          </SectionCard>
          <SectionCard isDark={isDark} title="Solution">
            <p className={`text-[15px] leading-relaxed ${bodyText}`}>
              {project.solution}
            </p>
          </SectionCard>
        </div>

        <div className="mt-5">
          <SectionCard isDark={isDark} title="Key Features">
            <ul className="grid gap-3 sm:grid-cols-2" role="list">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      isDark
                        ? 'border-white/10 bg-white/[0.04]'
                        : 'border-[#d8d0bf] bg-[#f8f3e9]'
                    }`}
                    aria-hidden="true"
                  >
                    <Check
                      className={`h-3 w-3 ${
                        isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#c6cfdb]' : 'text-[#3d4753]'
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="mt-5">
          <SectionCard isDark={isDark} title="Technology Stack">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className={`rounded-lg border px-3 py-1.5 text-[13px] font-medium ${
                    isDark
                      ? 'border-white/10 bg-white/[0.03] text-[#dfe5ee]'
                      : 'border-[#d8d0bf] bg-[#f8f3e9] text-[#2b3648]'
                  }`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <SectionCard isDark={isDark} title="Architecture">
            <p
              className={`whitespace-pre-wrap text-[15px] leading-relaxed ${bodyText}`}
            >
              {project.architecture}
            </p>
          </SectionCard>
          <SectionCard isDark={isDark} title="Deployment">
            <p
              className={`whitespace-pre-wrap text-[15px] leading-relaxed ${bodyText}`}
            >
              {project.deployment}
            </p>
          </SectionCard>
        </div>

        <div className="mt-5">
          <SectionCard isDark={isDark} title="Development Highlights">
            <ul className="space-y-3" role="list">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                      isDark
                        ? 'border-white/10 bg-white/[0.04]'
                        : 'border-[#d8d0bf] bg-[#f8f3e9]'
                    }`}
                    aria-hidden="true"
                  >
                    <Check
                      className={`h-3 w-3 ${
                        isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
                      }`}
                    />
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#c6cfdb]' : 'text-[#3d4753]'
                    }`}
                  >
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <Link
          href={`/${v}/projects/${nextProject.slug}`}
          className={`mt-5 flex items-center justify-between gap-4 rounded-2xl border p-6 transition-all hover:-translate-y-0.5 sm:p-8 ${
            isDark
              ? 'border-white/[0.07] bg-[#0d1728] hover:border-cyan-300/25'
              : 'border-[#e0d7c3] bg-[#fffdf8] hover:border-[#1d4ed8]/40'
          }`}
          aria-label={`Next project: ${nextProject.name}`}
        >
          <div>
            <p
              className={`text-[11px] font-semibold tracking-[0.22em] ${
                isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
              }`}
            >
              NEXT PROJECT
            </p>
            <p className={`mt-1 text-sm ${mutedText}`}>{nextProject.category}</p>
            <p
              className={`mt-1 text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#101b2a]'
              }`}
            >
              {nextProject.name}
            </p>
          </div>
          <ArrowRight
            className={`h-6 w-6 shrink-0 ${
              isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
            }`}
            aria-hidden="true"
          />
        </Link>
      </div>
    </VariantShell>
  );
}
