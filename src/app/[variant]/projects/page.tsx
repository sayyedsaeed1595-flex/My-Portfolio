import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { showcaseProjects } from '@/data/showcase';
import { VariantShell } from '@/components/editorial/VariantShell';
import { EditorialProjectCard } from '@/components/editorial/EditorialProjectCard';
import type { EditorialVariant } from '@/components/editorial/variant';

export function generateStaticParams() {
  return [{ variant: 'dark' }, { variant: 'light' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Selected Work',
    description:
      'A selection of web applications and digital products: Text2IMG, FlexShop, ToolzyPro, PrimeCare Clinic Demo and E-Commerce Platform.',
  };
}

export default async function VariantProjects({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (variant !== 'dark' && variant !== 'light') notFound();
  const v = variant as EditorialVariant;
  const isDark = v === 'dark';
  const total = showcaseProjects.length;

  return (
    <VariantShell variant={v}>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <Link
          href={`/${v}#top`}
          className={`inline-flex items-center gap-2 text-[13px] font-semibold transition-colors ${
            isDark
              ? 'text-[#9aa6b8] hover:text-white'
              : 'text-[#5d6878] hover:text-[#16202e]'
          }`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Home
        </Link>

        <header className="mt-8 max-w-3xl">
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
          <h1
            className={`mt-4 font-sans text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            A selection of web applications I&apos;ve built.
          </h1>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            Each project represents a unique challenge — from AI-powered
            generation platforms to scalable e-commerce systems and clinic
            operations.
          </p>
        </header>

        <div
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          role="list"
          aria-label="All projects"
        >
          {showcaseProjects.map((project, index) => (
            <div key={project.slug} role="listitem" className="min-w-0">
              <EditorialProjectCard
                variant={v}
                project={project}
                positionLabel={`${String(index + 1).padStart(2, '0')} / ${String(
                  total,
                ).padStart(2, '0')}`}
              />
            </div>
          ))}
        </div>
      </div>
    </VariantShell>
  );
}
