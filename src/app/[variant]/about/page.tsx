import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { VariantShell } from '@/components/editorial/VariantShell';
import { TechStackSection } from '@/components/editorial/TechStackSection';
import type { EditorialVariant } from '@/components/editorial/variant';

export function generateStaticParams() {
  return [{ variant: 'dark' }, { variant: 'light' }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About',
    description: `Learn more about ${siteConfig.name}, a full-stack web application developer building production-ready web applications, AI platforms, and SaaS products.`,
  };
}

const VALUES = [
  'Clean architecture',
  'Responsive interfaces',
  'Maintainable code',
  'Real-world workflows',
  'Production readiness',
  'Performance',
  'Usability',
] as const;

export default async function VariantAbout({
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
            ABOUT
          </p>
          <h1
            className={`mt-4 font-sans text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight ${
              isDark ? 'text-white' : 'text-[#101b2a]'
            }`}
          >
            Building with purpose.
          </h1>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-[#9aa6b8]' : 'text-[#4b5665]'
            }`}
          >
            I&apos;m a full-stack developer focused on building modern web
            applications that solve practical problems.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div
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
              How I work
            </h2>
            <div
              className={`mt-4 space-y-4 text-[15px] leading-relaxed ${
                isDark ? 'text-[#a7b0bd]' : 'text-[#4b5665]'
              }`}
            >
              <p>
                My work spans full-stack applications, AI-powered products,
                SaaS platforms, e-commerce systems and cloud deployments.
              </p>
              <p>
                I care about building things that work reliably in production
                — not just in demos. That means clean code, thoughtful
                architecture, and attention to the details that matter in
                real-world usage.
              </p>
              <p>
                Every project is an opportunity to deliver something genuinely
                useful — something that holds up under real usage, scales when
                needed, and is straightforward to maintain.
              </p>
            </div>
          </div>

          <div
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
              What I care about
            </h2>
            <ul className="mt-4 space-y-3" role="list">
              {VALUES.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${
                      isDark
                        ? 'border-white/10 bg-white/[0.04]'
                        : 'border-[#d8d0bf] bg-[#f8f3e9]'
                    }`}
                    aria-hidden="true"
                  >
                    <Check
                      className={`h-3.5 w-3.5 ${
                        isDark ? 'text-cyan-300' : 'text-[#1d4ed8]'
                      }`}
                    />
                  </span>
                  <span
                    className={`pt-0.5 text-[15px] ${
                      isDark ? 'text-[#c6cfdb]' : 'text-[#3d4753]'
                    }`}
                  >
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="pb-16">
        <TechStackSection variant={v} />
      </div>
    </VariantShell>
  );
}
