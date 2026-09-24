import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}