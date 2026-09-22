const features = [
  'Responsive UI',
  'API Integration',
  'Authentication',
  'Database',
  'Performance',
  'Cloud Deployment',
  'SEO',
  'Accessibility',
] as const;

export function ProductionMindset() {
  return (
    <section id="mindset" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950/30 border-y border-white/10" aria-labelledby="mindset-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20 text-center">
          <p className="eyebrow mb-4 animate-slide-up">Production Mindset</p>
          <h2 id="mindset-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            Not just a website. A working product.
          </h2>
          <p className="body-md mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            From interface design to application logic, APIs, databases and deployment, I focus on building applications that are designed to work beyond the demo.
          </p>
        </header>

        <div
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 max-w-4xl mx-auto"
          role="list"
          aria-label="Production features"
        >
          {features.map((feature, index) => (
            <span
              key={feature}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium transition-all hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
              role="listitem"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}