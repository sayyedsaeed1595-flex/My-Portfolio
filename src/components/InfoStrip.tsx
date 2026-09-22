import { cn } from '@/lib/utils';

const infoItems = [
  'WEB APPLICATIONS',
  'AI APPLICATIONS',
  'SAAS PRODUCTS',
  'E-COMMERCE',
  'CLOUD DEPLOYMENT',
] as const;

export function InfoStrip() {
  return (
    <section className="border-y border-white/10 bg-zinc-950/30" aria-label="Expertise areas">
      <div className="section-container">
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0">
          <div className="flex items-center gap-8 min-w-max py-8 sm:py-6">
            {infoItems.map((item, index) => (
              <div
                key={item}
                className={cn(
                  'flex items-center gap-3 whitespace-nowrap shrink-0',
                  index > 0 && 'border-l border-white/10 pl-8'
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-indigo-400">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}