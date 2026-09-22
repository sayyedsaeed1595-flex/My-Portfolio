import { servicesData } from '@/data/services';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950/30 border-y border-white/10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16 lg:mb-20">
          <p className="eyebrow mb-4 animate-slide-up">What I Build</p>
          <h2 id="services-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            End-to-end development across the full product lifecycle.
          </h2>
          <p className="body-md mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            From initial architecture to production deployment, I build complete web applications — not just interfaces.
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Services"
        >
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="group relative glass card-hover card-glow p-6 lg:p-8 animate-slide-up"
              style={{ animationDelay: `${100 + index * 50}ms` }}
              role="listitem"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                  <service.icon className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>

              <h3 className="heading-sm text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {service.name}
              </h3>

              <p className="body-sm text-zinc-400 mb-6 flex-1">
                {service.description}
              </p>

              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
              >
                Learn more
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 arrow-micro"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}