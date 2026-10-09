import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { VariantShell } from '@/components/editorial/VariantShell';
import { CopyEmailButton } from '@/components/editorial/CopyEmailButton';
import type { EditorialVariant } from '@/components/editorial/variant';

export function generateStaticParams() {
  return [{ variant: 'dark' }, { variant: 'light' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact',
    description: `Get in touch with ${siteConfig.name} to discuss your next web application project.`,
  };
}

export default async function VariantContact({
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

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p
            className={`flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] ${
              isDark ? 'text-[#7dd3fc]' : 'text-[#1d4ed8]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? 'bg-[#7dd3fc]' : 'bg-[#1d4ed8]'
              }`}
              aria-hidden="true"
            />
            GET IN TOUCH
          </p>
          <h1
            className={`mt-4 font-sans text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            Have a project in mind?
          </h1>
          <p
            className={`mx-auto mt-4 max-w-xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            I&apos;m available for freelance and contract work. Reach out and
            let&apos;s talk about what you&apos;re building.
          </p>

          <div
            className={`mx-auto mt-10 rounded-2xl border p-6 text-center sm:p-10 ${
              isDark
                ? 'border-white/[0.07] bg-[#0d1728]'
                : 'border-[#e0d7c3] bg-[#fffdf8] shadow-[0_24px_48px_-32px_rgba(60,50,30,0.35)]'
            }`}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_12px_32px_-10px_rgba(245,158,11,0.65)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send an Email
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Mail
                className={`h-4 w-4 shrink-0 ${
                  isDark ? 'text-[#7dd3fc]' : 'text-[#1d4ed8]'
                }`}
                aria-hidden="true"
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-[#c6cfdb] hover:text-white'
                    : 'text-[#3d4753] hover:text-[#16202e]'
                }`}
              >
                {siteConfig.email}
              </a>
              <CopyEmailButton variant={v} />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
                  isDark
                    ? 'text-[#9aa6b8] hover:text-white'
                    : 'text-[#5d6878] hover:text-[#16202e]'
                }`}
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
                  isDark
                    ? 'text-[#9aa6b8] hover:text-white'
                    : 'text-[#5d6878] hover:text-[#16202e]'
                }`}
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </VariantShell>
  );
}
