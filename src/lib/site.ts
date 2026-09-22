export const siteConfig = {
  name: 'Saeed Sayyed',
  role: 'Full-Stack Web Application Developer',
  email: 'sayyedsaeed1595@gmail.com',
  description: 'Saeed Sayyed builds production-ready web applications, AI platforms, SaaS products and modern digital experiences.',
  url: 'https://saeedsayyed.dev',
  navigation: [
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  social: {
    github: 'https://github.com/saeedsayyed',
    linkedin: 'https://linkedin.com/in/saeedsayyed'
  },
  cta: {
    primary: "Let's Talk",
    primaryHref: '/contact',
    secondary: 'View Projects',
    secondaryHref: '/projects'
  }
} as const;

export type SiteConfig = typeof siteConfig;