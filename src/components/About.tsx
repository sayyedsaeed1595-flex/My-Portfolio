import { Check } from 'lucide-react';

export function About() {
  const values = [
    'Clean architecture',
    'Responsive interfaces',
    'Maintainable code',
    'Real-world workflows',
    'Production readiness',
    'Performance',
    'Usability',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="max-w-xl">
            <p className="eyebrow mb-4 animate-slide-up">About</p>
            <h2 id="about-heading" className="heading-lg text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
              Building with purpose.
            </h2>
            <div className="mt-8 space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <p className="body-md text-zinc-300">
                I&apos;m a developer focused on building modern web applications that solve practical problems.
              </p>
              <p className="body-md text-zinc-400">
                My work spans full-stack applications, AI-powered products, SaaS platforms, e-commerce systems and cloud deployments.
              </p>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="heading-sm text-white mb-6">What I care about</h3>
            <ul className="space-y-4" role="list">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-200">
                    <Check className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                  </div>
                  <span className="body-md text-zinc-300 pt-0.5">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}