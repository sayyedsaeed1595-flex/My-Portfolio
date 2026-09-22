import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform" aria-hidden="true" />
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>

        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4">Selected Work</p>
          <h1 className="heading-xl text-white mb-6">A selection of web applications and digital products I&apos;ve worked on.</h1>
          <p className="body-lg text-zinc-400">Each project represents a unique challenge — from AI-powered generation platforms to scalable e-commerce systems and developer tooling.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block visual-card card-hover aspect-[4/3] lg:aspect-[16/9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={`View ${project.name} project`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-zinc-900 to-purple-900/30" />
              </div>

              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="label text-indigo-400">{project.number}</span>
                    <span className="text-zinc-500 ml-2 text-xs uppercase tracking-wide">{project.category}</span>
                  </div>
                  <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-all">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex-1 flex flex-col justify-between min-h-0 sm:min-h-[200px]">
                  <div className="pr-0 sm:pr-16">
                    <h3 className="heading-sm text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
                    <p className="body-sm text-zinc-400 line-clamp-3">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500">+{project.technologies.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">View Project</span>
                  <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}