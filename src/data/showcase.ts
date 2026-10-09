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
    name: 'Text2IMG',
    description:
      'An AI-powered image generation platform designed around an intuitive creation workflow and cloud-based AI integrations.',
    technologies: ['React', 'AI', 'Node.js', 'AWS'],
    image: '/images/projects/Screenshot (230).png',
    imageAlt: 'Text2IMG AI image generation interface',
  },
  {
    slug: 'flexshop',
    number: '02',
    name: 'FlexShop',
    description:
      'A modern e-commerce application focused on product discovery, responsive shopping experiences, and streamlined product browsing.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Database'],
    image: '/images/projects/1789492968636.png',
    imageAlt: 'FlexShop e-commerce storefront interface',
  },
  {
    slug: 'toolzypro',
    number: '03',
    name: 'ToolzyPro',
    description:
      'A collection of 15+ browser-based utilities for image conversion, PDF operations, calculations, and everyday tasks.',
    technologies: ['Next.js', 'TypeScript', 'Cloudflare'],
    image: '/images/projects/Screenshot (277).png',
    imageAlt: 'ToolzyPro online tools platform interface',
  },
  {
    slug: 'clinic',
    number: '04',
    name: 'Clinic Demo',
    description:
      'A clinic queue and appointment management demo designed to streamline patient registration, token management, and staff workflows.',
    technologies: ['Next.js', 'PostgreSQL', 'Cloudflare'],
    image: '/images/projects/Screenshot 1.png',
    imageAlt: 'Clinic management dashboard interface',
  },
  {
    slug: 'ecommerce',
    number: '05',
    name: 'E-Commerce Platform',
    description:
      'A full-stack commerce application demonstrating product browsing, shopping workflows, and modern responsive UI.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: '/images/projects/Screenshot (178).png',
    imageAlt: 'E-commerce platform storefront interface',
  },
];
