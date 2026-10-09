import {
  Monitor,
  Layers,
  Sparkles,
  ShoppingBag,
  Cloud,
  Webhook,
  Database,
  CloudUpload,
  LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const serviceIconMap = {
  Monitor,
  Layers,
  Sparkles,
  ShoppingBag,
  Cloud,
  Webhook,
  Database,
  CloudUpload,
} as const;

export const servicesData = [
  {
    id: 'web-applications',
    name: 'Web Application Development',
    description: 'Modern responsive web applications built around real user workflows.',
    icon: serviceIconMap.Monitor,
    href: '/contact',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Application Development',
    description: 'Frontend, backend, APIs, authentication and database integration.',
    icon: serviceIconMap.Layers,
    href: '/contact',
  },
  {
    id: 'ai-applications',
    name: 'AI-Powered Applications',
    description: 'AI-powered applications and interfaces connected to modern AI services.',
    icon: serviceIconMap.Sparkles,
    href: '/contact',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Applications',
    description: 'Modern online stores and commerce experiences with scalable architecture.',
    icon: serviceIconMap.ShoppingBag,
    href: '/contact',
  },
  {
    id: 'saas',
    name: 'SaaS Product Development',
    description: 'Product-oriented web applications designed around scalable workflows.',
    icon: serviceIconMap.Cloud,
    href: '/contact',
  },
  {
    id: 'api-development',
    name: 'API Integrations',
    description: 'Clean APIs and service integrations for modern web applications.',
    icon: serviceIconMap.Webhook,
    href: '/contact',
  },
  {
    id: 'database-backend',
    name: 'Database and Backend Architecture',
    description: 'Structured backend systems, data models and application logic.',
    icon: serviceIconMap.Database,
    href: '/contact',
  },
  {
    id: 'cloud-deployment',
    name: 'Cloud Deployment and Infrastructure',
    description: 'Production deployment and cloud-based application infrastructure.',
    icon: serviceIconMap.CloudUpload,
    href: '/contact',
  },
] as const satisfies readonly Service[];

export type ServiceId = typeof servicesData[number]['id'];
