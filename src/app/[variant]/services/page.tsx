import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { VariantShell } from '@/components/editorial/VariantShell';
import { ServicesSection } from '@/components/editorial/ServicesSection';
import type { EditorialVariant } from '@/components/editorial/variant';

export function generateStaticParams() {
  return [{ variant: 'dark' }, { variant: 'light' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
    description: `${siteConfig.name} offers full-stack web development, AI applications, SaaS platforms, e-commerce, API development, and cloud deployment services.`,
  };
}

export default async function VariantServices({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (variant !== 'dark' && variant !== 'light') notFound();
  const v = variant as EditorialVariant;
  const isDark = v === 'dark';

  return (
    <VariantShell variant={v}>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
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
              isDark ? 'text-[#7dd3fc]' : 'text-[#1d4ed8]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-[#7dd3fc]' : 'bg-[#1d4ed8]'
              }`}
              aria-hidden="true"
            />
            WHAT I BUILD
          </p>
          <h1
            className={`mt-4 font-sans text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            End-to-end development across the full product lifecycle.
          </h1>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            From initial architecture to production deployment, I build
            complete web applications — not just interfaces.
          </p>
        </header>
      </div>
      <div className="pb-16 pt-8 sm:pb-20">
        <ServicesSection variant={v} />
      </div>
    </VariantShell>
  );
}
