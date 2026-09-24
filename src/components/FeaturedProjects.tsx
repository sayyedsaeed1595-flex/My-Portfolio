import Link from 'next/link';
import { InteractiveProjectCards } from '@/components/InteractiveProjectCards';

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 id="work-heading" className="heading-lg text-white">
            A selection of web applications and digital products I&apos;ve worked on.
          </h2>
          <p className="body-md mt-6 text-zinc-400">
            Each project represents a unique challenge — from AI-powered generation platforms to scalable e-commerce systems and developer tooling.
          </p>
        </header>

        <InteractiveProjectCards />

        <div className="mt-16 text-center animate-fade-in">
          <Link
            href="/projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Projects
            <span className="w-4 h-4" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}