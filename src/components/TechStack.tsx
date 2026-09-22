const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'REST APIs',
  'AWS',
  'Cloudflare',
  'Git',
  'GitHub',
  'Tailwind CSS',
] as const;

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950/30 border-y border-white/10" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20 text-center">
          <p className="eyebrow mb-4 animate-slide-up">Tools I Work With</p>
          <h2 id="tech-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            A pragmatic, modern stack for building production applications.
          </h2>
        </header>

        <div
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto"
          role="list"
          aria-label="Technology stack"
        >
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium transition-all hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}