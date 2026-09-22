import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '@/data/services';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: `${siteConfig.name} offers full-stack web development, AI applications, SaaS platforms, e-commerce, API development, and cloud deployment services.`,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4">What I Build</p>
          <h1 className="heading-xl text-white mb-6">
            End-to-end development across the full product lifecycle.
          </h1>
          <p className="body-lg">
            From initial architecture to production deployment, I build complete web applications — not just interfaces.
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
          role="list"
          aria-label="Services"
        >
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="group relative glass card-hover card-glow p-6 lg:p-8"
              role="listitem"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                  <service.icon className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>

              <h2 className="heading-sm text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {service.name}
              </h2>

              <p className="body-sm text-zinc-400 mb-6">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16 text-center">
          <p className="body-lg mb-8">Ready to start a project?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            {siteConfig.cta.primary}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
