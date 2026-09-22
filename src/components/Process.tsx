const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the product, users and requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the structure, UX and visual direction.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build frontend, backend, APIs and database integrations.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Check responsiveness, functionality, edge cases and production behavior.',
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Prepare the application for production deployment.',
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Iterate based on real usage and requirements.',
  },
] as const;

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4 animate-slide-up">How I Build</p>
          <h2 id="process-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            A deliberate process for building reliable software.
          </h2>
          <p className="body-md mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Every project follows a structured approach — from discovery to deployment and beyond.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative glass card-hover p-6 lg:p-8 animate-slide-up"
              style={{ animationDelay: `${100 + index * 80}ms` }}
            >
              <div className="mb-4">
                <span className="label text-indigo-400 mb-2 block">{step.number}</span>
                <h3 className="heading-sm text-white group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="body-sm text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}