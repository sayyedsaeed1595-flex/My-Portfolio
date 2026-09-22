import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform" aria-hidden="true" />
          <span className="text-sm font-medium">Back to Work</span>
        </Link>
        <h1 className="heading-xl text-white mb-4">Project Not Found</h1>
        <p className="body-lg text-zinc-400">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="btn-primary mt-8 inline-flex items-center gap-2"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}