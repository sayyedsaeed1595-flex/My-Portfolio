import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4 animate-slide-up">Selected Work</p>
          <h2 id="work-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            A selection of web applications and digital products I&apos;ve worked on.
          </h2>
          <p className="body-md mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Each project represents a unique challenge — from AI-powered generation platforms to scalable e-commerce systems and developer tooling.
          </p>
        </header>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          role="list"
          aria-label="Featured projects"
        >
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.slug} className="animate-slide-up" style={{ animationDelay: `${300 + index * 100}ms` }} role="listitem">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
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