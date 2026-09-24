'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from '@/components/projects/ProjectVisual';
import { useMouseProximity, getProximityTransform } from '@/hooks/useMouseProximity';

export function InteractiveProjectCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [transforms, setTransforms] = useState<Map<string, { x: number; y: number; rotation: number; scale: number }>>(new Map());
  const { mousePosition, isClient } = useMouseProximity();
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateTransforms = () => {
      const newTransforms = new Map<string, { x: number; y: number; rotation: number; scale: number }>();
      cardRefs.current.forEach((el, slug) => {
        const rect = el.getBoundingClientRect();
        newTransforms.set(slug, getProximityTransform(rect, mousePosition, 350, 10, 4));
      });
      setTransforms(newTransforms);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateTransforms);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mousePosition]);

  if (!isClient) return null;

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      role="list"
      aria-label="Featured projects"
    >
      {projects.slice(0, 4).map((project, index) => (
        <div
          key={project.slug}
          ref={(el) => {
            if (el) cardRefs.current.set(project.slug, el);
          }}
          className="animate-slide-up"
          style={{ animationDelay: `${100 + index * 80}ms` }}
          role="listitem"
        >
          <ProjectCardInteractive
            project={project}
            transform={transforms.get(project.slug) ?? { x: 0, y: 0, rotation: 0, scale: 1 }}
          />
        </div>
      ))}
    </div>
  );
}

function ProjectCardInteractive({
  project,
  transform,
}: {
  project: typeof projects[0];
  transform: { x: number; y: number; rotation: number; scale: number };
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block visual-card card-hover card-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotation}deg) scale(${transform.scale})`,
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      aria-label={`View ${project.name} project`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="img-hover absolute inset-0">
          <ProjectVisual type={project.visualType} />
        </div>
        <div className="project-visual-atmosphere absolute inset-0" />
      </div>

      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="label text-amber-400">{project.number}</span>
            <span className="text-zinc-500 ml-2 text-xs uppercase tracking-wide">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-all">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-0 sm:min-h-[200px]">
          <div className="pr-0 sm:pr-16">
            <h3 className="heading-sm text-white mb-3 group-hover:text-amber-400 transition-colors">
              {project.name}
            </h3>
            <p className="body-sm text-zinc-400 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="badge-hover text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
            View Project
          </span>
          <ArrowUpRight
            className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}