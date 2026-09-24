'use client';

import { Project } from '@/data/projects';

interface ProjectVisualProps {
  type: Project['visualType'];
  coverImage?: string;
  alt?: string;
  className?: string;
  /** Darken image for readable text overlays (cards). Default true when coverImage is set. */
  withOverlay?: boolean;
}

export function ProjectVisual({
  type,
  coverImage,
  alt,
  className,
  withOverlay = true,
}: ProjectVisualProps) {
  const gradientClass = getGradient(type);

  if (coverImage) {
    return (
      <div className={`absolute inset-0 ${className ?? ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverImage}
          alt={alt ?? ''}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {withOverlay && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} ${className ?? ''}`}
    />
  );
}

function getGradient(type: Project['visualType']): string {
  switch (type) {
    case 'text2img':
      return 'from-indigo-900/30 via-zinc-900 to-purple-900/30';
    case 'flexshop':
      return 'from-emerald-900/20 via-zinc-900 to-teal-900/20';
    case 'toolzypro':
      return 'from-amber-900/20 via-zinc-900 to-orange-900/20';
    case 'aao-urdu':
      return 'from-rose-900/20 via-zinc-900 to-pink-900/20';
    case 'ecommerce':
      return 'from-blue-900/20 via-zinc-900 to-cyan-900/20';
    default:
      return 'from-zinc-800 via-zinc-900 to-zinc-800';
  }
}
