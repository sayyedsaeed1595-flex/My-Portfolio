import { showcaseProjects } from '@/data/showcase';
import { EditorialHeader, type EditorialVariant } from './EditorialHeader';
import { EditorialHero } from './EditorialHero';
import { EditorialProjectCard } from './EditorialProjectCard';
import { EditorialFooter } from './EditorialFooter';

interface EditorialPageProps {
  variant: EditorialVariant;
}

export function EditorialPage({ variant }: EditorialPageProps) {
  const isDark = variant === 'dark';
  const total = showcaseProjects.length;

  return (
    <div
      className={`min-h-screen w-full ${
        isDark ? 'bg-[#0b1424] text-[#f2ede3]' : 'bg-[#f6f1e7] text-[#1d2733]'
      }`}
    >
      <EditorialHeader variant={variant} />
      <main className="w-full">
        <EditorialHero variant={variant} />
        <section
          id="work"
          className="w-full pb-20 sm:pb-24"
          aria-label="Selected work"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:gap-8">
              {showcaseProjects.map((project, index) => (
                <EditorialProjectCard
                  key={project.slug}
                  variant={variant}
                  project={project}
                  positionLabel={`${String(index + 1).padStart(2, '0')} / ${String(
                    total,
                  ).padStart(2, '0')}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <EditorialFooter variant={variant} />
    </div>
  );
}
