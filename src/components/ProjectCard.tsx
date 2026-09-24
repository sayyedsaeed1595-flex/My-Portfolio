'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { ProjectVisual } from '@/components/projects/ProjectVisual';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative card-glow">
      <Link
        href={`/projects/${project.slug}`}
        className="block visual-card card-hover aspect-[4/3] lg:aspect-[16/9] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`View ${project.name} project`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="img-hover absolute inset-0">
            <ProjectVisual type={project.visualType} />
          </div>
        </div>

        <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="label text-indigo-400">{project.number}</span>
              <span className="text-zinc-500 ml-2 text-xs uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/50 transition-all">
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between min-h-0 sm:min-h-[200px]">
            <div className="pr-0 sm:pr-16">
              <h3 className="heading-sm text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              <p className="body-sm text-zinc-400 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="badge-hover text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              {project.technologies.length > 6 && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
              View Project
            </span>
            <ArrowUpRight
              className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
