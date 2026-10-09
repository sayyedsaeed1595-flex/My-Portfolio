export interface ShowcaseProject {
  slug: string;
  number: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: 'text2img',
    number: '01',
    name: 'TEXT2IMG',
    description: 'AI-powered text-to-image generation platform.',
    technologies: ['React', 'AI', 'Node.js', 'AWS'],
    image: '/images/projects/Screenshot (230).png',
    imageAlt: 'Text2IMG AI image generation interface',
  },
  {
    slug: 'flexshop',
    number: '02',
    name: 'FLEXSHOP',
    description:
      'Modern e-commerce application focused on product discovery and shopping experiences.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Database'],
    image: '/images/projects/1789492968636.png',
    imageAlt: 'FlexShop e-commerce storefront interface',
  },
  {
    slug: 'toolzypro',
    number: '03',
    name: 'TOOLZYPRO',
    description: 'All-in-one online tools platform for everyday tasks.',
    technologies: ['Next.js', 'TypeScript', 'Cloudflare'],
    image: '/images/projects/Screenshot (277).png',
    imageAlt: 'ToolzyPro online tools platform interface',
  },
  {
    slug: 'clinic',
    number: '04',
    name: 'CLINIC DEMO',
    description:
      'Clinic management and patient queue application with appointment and staff workflows.',
    technologies: ['Next.js', 'PostgreSQL', 'Cloudflare'],
    image: '/images/projects/Screenshot 1.png',
    imageAlt: 'Clinic management dashboard interface',
  },
  {
    slug: 'ecommerce',
    number: '05',
    name: 'E-COMMERCE PLATFORM',
    description: 'Full-stack e-commerce application.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: '/images/projects/Screenshot (178).png',
    imageAlt: 'E-commerce platform storefront interface',
  },
];
