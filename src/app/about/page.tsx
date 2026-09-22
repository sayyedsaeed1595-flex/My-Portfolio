import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.name}, a full-stack web application developer building production-ready web applications, AI platforms, and SaaS products.`,
};

const values = [
  'Clean architecture',
  'Responsive interfaces',
  'Maintainable code',
  'Real-world workflows',
  'Production readiness',
  'Performance',
  'Usability',
] as const;

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'AWS',
  'Cloudflare',
  'Tailwind CSS',
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4">About</p>
          <h1 className="heading-xl text-white mb-6">Building with purpose.</h1>
          <p className="body-lg">
            I&apos;m a full-stack developer focused on building modern web applications that solve practical problems.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="space-y-6">
            <p className="body-md text-zinc-300">
              My work spans full-stack applications, AI-powered products, SaaS platforms, e-commerce systems and cloud deployments.
            </p>
            <p className="body-md text-zinc-400">
              I care about building things that work reliably in production — not just in demos. That means clean code, thoughtful architecture, and attention to the details that matter in real-world usage.
            </p>
            <p className="body-md text-zinc-400">
              Every project is an opportunity to deliver something genuinely useful — something that holds up under real usage, scales when needed, and is straightforward to maintain.
            </p>
          </div>

          <div>
            <h2 className="heading-sm text-white mb-6">What I care about</h2>
            <ul className="space-y-4" role="list">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-200">
                    <Check className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                  </div>
                  <span className="body-md text-zinc-300 pt-0.5">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16">
          <h2 className="heading-md text-white mb-8">Technology Stack</h2>
          <div
            className="flex flex-wrap gap-3"
            role="list"
            aria-label="Technology stack"
          >
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
