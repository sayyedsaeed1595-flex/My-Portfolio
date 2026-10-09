import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllProjectSlugs } from '@/data/projects';

export const dynamic = 'force-static';

const LAST_MODIFIED = '2026-09-22';

const VARIANTS = ['dark', 'light'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const variantHomes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...VARIANTS.map((variant) => ({
      url: `${base}/${variant}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 1,
    })),
  ];

  const sectionRoutes: MetadataRoute.Sitemap = VARIANTS.flatMap((variant) =>
    ['projects', 'services', 'about', 'contact'].map((section) => ({
      url: `${base}/${variant}/${section}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  );

  const projectRoutes: MetadataRoute.Sitemap = VARIANTS.flatMap((variant) =>
    getAllProjectSlugs().map((slug) => ({
      url: `${base}/${variant}/projects/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  );

  return [...variantHomes, ...sectionRoutes, ...projectRoutes];
}
