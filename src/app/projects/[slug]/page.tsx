import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs, Project } from '@/data/projects';
import { siteConfig } from '@/lib/site';
import { ProjectVisual } from '@/components/projects/ProjectVisual';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} — ${project.category}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${siteConfig.name}`,
      description: project.description,
      type: 'article',
    },
  };
}

function ProjectDetailHeader({ project }: { project: Project }) {
  return (
    <header className="mb-16 lg:mb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        <span className="text-sm font-medium">Back to Work</span>
      </Link>

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="label text-indigo-400">{project.number}</span>
          <span className="text-zinc-500 text-xs uppercase tracking-wide">{project.category}</span>
        </div>
        <h1 className="heading-xl text-white mb-6">{project.name}</h1>
        <p className="body-lg text-zinc-400">{project.longDescription}</p>
      </div>
    </header>
  );
}

function ProjectVisualSection({ project }: { project: Project }) {
  const detailImages = project.images ?? [];

  return (
    <section className="mb-16 lg:mb-20 space-y-6">
      <div className="visual-card relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
        <ProjectVisual
          type={project.visualType}
          coverImage={project.coverImage}
          alt={`${project.name} main screenshot`}
          withOverlay={false}
        />
      </div>

      {detailImages.length > 0 && (
        <div
          className={`grid gap-6 ${
            detailImages.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {detailImages.map((src, index) => (
            <div
              key={src}
              className="visual-card relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${project.name} detail ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="mb-16 lg:mb-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="heading-md text-white mb-4">Overview</h2>
          <p className="body-md text-zinc-400">{project.longDescription}</p>
        </div>
        <div>
          <h2 className="heading-md text-white mb-4">Goal</h2>
          <p className="body-md text-zinc-400">{project.problem}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="heading-md text-white mb-4">Solution</h2>
        <p className="body-md text-zinc-400">{project.solution}</p>
      </div>
    </section>
  );
}

function ProjectFeatures({ project }: { project: Project }) {
  return (
    <section className="mb-16 lg:mb-20">
      <h2 className="heading-md text-white mb-8">Key Features</h2>
      <ul className="grid sm:grid-cols-2 gap-4" role="list">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 group" role="listitem">
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-200">
              <Check className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
            </div>
            <span className="body-md text-zinc-300 pt-0.5">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectTechStack({ project }: { project: Project }) {
  const techCategories = [
    { name: 'Frontend', techs: project.technologies.filter(t => ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'].includes(t)) },
    { name: 'Backend', techs: project.technologies.filter(t => ['Node.js', 'REST APIs', 'API Gateway', 'Authentication', 'Prisma'].includes(t)) },
    { name: 'Database', techs: project.technologies.filter(t => ['PostgreSQL', 'Database'].includes(t)) },
    { name: 'Cloud & DevOps', techs: project.technologies.filter(t => ['AWS', 'Cloudflare', 'Cloud Infrastructure', 'Cloud Storage', 'Payments', 'Git', 'GitHub'].includes(t)) },
    { name: 'AI & Processing', techs: project.technologies.filter(t => ['AI', 'PDF processing', 'Image processing', 'Cloud Infrastructure'].includes(t)) },
  ].filter(cat => cat.techs.length > 0);

  return (
    <section className="mb-16 lg:mb-20">
      <h2 className="heading-md text-white mb-8">Technology Stack</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category) => (
          <div key={category.name} className="glass p-6">
            <h3 className="label text-indigo-400 mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectArchitecture({ project }: { project: Project }) {
  return (
    <section className="mb-16 lg:mb-20">
      <h2 className="heading-md text-white mb-6">Architecture & Workflow</h2>
      <div className="glass p-6 lg:p-8">
        <p className="body-md text-zinc-400 whitespace-pre-wrap">{project.architecture}</p>
      </div>
    </section>
  );
}

function ProjectDeployment({ project }: { project: Project }) {
  return (
    <section className="mb-16 lg:mb-20">
      <h2 className="heading-md text-white mb-6">Deployment</h2>
      <div className="glass p-6 lg:p-8">
        <p className="body-md text-zinc-400 whitespace-pre-wrap">{project.deployment}</p>
      </div>
    </section>
  );
}

function ProjectHighlights({ project }: { project: Project }) {
  return (
    <section className="mb-16 lg:mb-20">
      <h2 className="heading-md text-white mb-8">Development Highlights</h2>
      <ul className="space-y-4" role="list">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 group" role="listitem">
            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-200">
              <Check className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
            </div>
            <span className="body-md text-zinc-300 pt-0.5">{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function NextProjectNav({ project }: { project: Project }) {
  const allProjects = getAllProjectSlugs().map(getProjectBySlug).filter(Boolean) as Project[];
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  return (
    <section>
      <div className="glass p-6 lg:p-8 rounded-3xl">
        <p className="label text-indigo-400 mb-2">Next Project</p>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex items-center justify-between group"
        >
          <div>
            <p className="text-zinc-500 text-sm mb-1">{nextProject.category}</p>
            <h3 className="heading-sm text-white group-hover:text-indigo-400 transition-colors">{nextProject.name}</h3>
          </div>
          <ArrowRight className="w-6 h-6 text-indigo-400 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ProjectDetailHeader project={project} />
        <ProjectVisualSection project={project} />
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
        <ProjectTechStack project={project} />
        <ProjectArchitecture project={project} />
        <ProjectDeployment project={project} />
        <ProjectHighlights project={project} />
        <NextProjectNav project={project} />
      </div>
    </div>
  );
}