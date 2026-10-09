import { LegacyRedirect } from '@/components/LegacyRedirect';
import { getAllProjectSlugs } from '@/data/projects';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage() {
  return <LegacyRedirect />;
}
