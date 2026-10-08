export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture: string;
  deployment: string;
  highlights: string[];
  visualType: 'text2img' | 'flexshop' | 'toolzypro' | 'clinic' | 'ecommerce';
  /** Main project cover image under /public */
  coverImage?: string;
  /** Additional detail images under /public */
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'text2img',
    number: '01',
    name: 'Text2IMG',
    category: 'AI Image Generation Platform',
    description: 'An AI-powered text-to-image web application designed around a clean generation workflow, cloud APIs and a modern user experience.',
    longDescription: 'Text2IMG is a production-ready AI image generation platform that provides users with an intuitive interface for creating images from text prompts. The application is built on a modern serverless architecture leveraging cloud infrastructure for scalable image generation.',
    problem: 'Creating high-quality AI-generated images typically requires technical knowledge of APIs, prompt engineering, and complex parameter tuning. Existing tools either lack polish or require significant setup.',
    solution: 'A streamlined web application that abstracts away the complexity of AI image generation, providing a clean interface where users can focus on creativity rather than configuration.',
    features: [
      'Real-time prompt-to-image generation',
      'Generation history with local persistence',
      'Advanced parameter controls (steps, guidance, sampler)',
      'Multiple model support',
      'Image download and sharing',
      'Responsive dark-mode interface',
      'Keyboard shortcuts for power users',
      'Generation queue management'
    ],
    technologies: [
      'AWS',
      'AI',
      'API Gateway',
      'Cloud Infrastructure',
      'React',
      'Next.js',
      'TypeScript'
    ],
    architecture: 'Serverless architecture with API Gateway routing to Lambda functions for image generation. Frontend deployed on Cloudflare Pages with edge caching. Image assets stored in cloud object storage with CDN distribution.',
    deployment: 'Deployed on Cloudflare Pages with AWS Lambda backend for generation workloads. CI/CD via GitHub Actions with automated testing and preview deployments.',
    highlights: [
      'Sub-3-second average generation time',
      'Zero-downtime deployments',
      'Edge-cached static assets globally',
      'Type-safe API contracts with Zod validation'
    ],
    visualType: 'text2img',
    coverImage: '/images/projects/Screenshot (230).png',
    images: ['/images/projects/Screenshot (231).png'],
    githubUrl: undefined,
    liveUrl: undefined
  },
  {
    slug: 'flexshop',
    number: '02',
    name: 'FlexShop',
    category: 'E-Commerce Web Application',
    description: 'A modern e-commerce web application focused on product discovery, shopping workflows and a polished responsive experience.',
    longDescription: 'FlexShop is a full-featured e-commerce platform demonstrating modern shopping experiences. It includes product browsing, category filtering, cart management, and a streamlined checkout flow — all built with performance and accessibility in mind.',
    problem: 'Many e-commerce templates prioritize feature lists over user experience. Real-world shopping workflows require careful attention to state management, responsive design, and conversion-focused UX.',
    solution: 'A thoughtfully crafted e-commerce experience with optimized product discovery, persistent cart state, and a checkout flow designed to minimize friction.',
    features: [
      'Product catalog with category filtering',
      'Product detail pages with image galleries',
      'Persistent shopping cart (localStorage + sync)',
      'Responsive product grid layouts',
      'Search with debounced input',
      'Wishlist functionality',
      'Mobile-first responsive design',
      'Accessible form validation'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Database',
      'API',
      'Responsive UI'
    ],
    architecture: 'Next.js App Router with Server Components for product data fetching. Client Components for interactive cart and UI state. API routes handle cart operations. Database layer abstracted for flexibility.',
    deployment: 'Vercel deployment with edge functions. Database hosted on managed PostgreSQL. Static generation for product pages with ISR for inventory updates.',
    highlights: [
      'Lighthouse 95+ performance scores',
      'Full TypeScript coverage',
      'WCAG 2.1 AA compliant',
      'Optimistic UI updates for cart actions'
    ],
    visualType: 'flexshop',
    images: [
      '/images/projects/1789492968636.png',
      '/images/projects/24f0f33b467fc5f32fe5af72c559f09fcc60b08cb02049492d6c18fe97f13612.1.jpg',
    ],
    githubUrl: undefined,
    liveUrl: undefined
  },
  {
    slug: 'toolzypro',
    number: '03',
    name: 'ToolzyPro',
    category: 'Online Tools Platform',
    description: 'A collection of useful browser-based tools designed as a fast, accessible and scalable web platform.',
    longDescription: 'ToolzyPro is a comprehensive suite of browser-based utilities covering image processing, PDF manipulation, calculators, and generators. Each tool runs client-side where possible for privacy and speed, with server-side fallbacks for heavy operations.',
    problem: 'Users often need quick, single-purpose tools but are forced to use ad-laden websites, install software, or upload sensitive files to unknown servers.',
    solution: 'A privacy-first tools platform where most operations run entirely in the browser. No file uploads for client-side tools, no tracking, no accounts required.',
    features: [
      'Image Compressor (client-side)',
      'Image Resizer (client-side)',
      'JPG ↔ PNG Converter (client-side)',
      'PDF ↔ JPG Converter',
      'PDF Merge / Split',
      'Percentage Calculator',
      'Age Calculator',
      'Attendance Calculator',
      'Word / Character Counter',
      'QR Code Generator',
      'Password Generator',
      'Dark/light theme persistence',
      'Offline-capable via Service Worker',
      'Shareable tool links'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'PDF processing',
      'Image processing',
      'Cloudflare'
    ],
    architecture: 'Hybrid architecture: client-side WebAssembly/Web Workers for image/PDF processing, serverless functions for operations requiring server resources. Cloudflare Workers for edge routing and caching.',
    deployment: 'Cloudflare Pages with Workers for API routes. Assets served from Cloudflare CDN. Service Worker for offline support.',
    highlights: [
      '100% client-side processing for image tools',
      'Zero file uploads for conversions',
      'Sub-100ms tool load times',
      'PWA installable with offline support'
    ],
    visualType: 'toolzypro',
    coverImage: '/images/projects/Screenshot (277).png',
    images: [
      '/images/projects/Screenshot (278).png',
      '/images/projects/Screenshot (279).png',
    ],
    githubUrl: undefined,
    liveUrl: undefined
  },
  {
    slug: 'clinic',
    number: '04',
    name: 'Smart Clinic Management System',
    category: 'Clinic Management / SaaS',
    description: 'A clinic management web application for online appointments, QR check-ins, digital tokens, queue management, doctors, and staff operations.',
    longDescription: 'Smart Clinic Management System is a comprehensive SaaS platform designed to streamline clinic operations. It enables patients to book appointments online, check in via QR codes, receive digital tokens, and view real-time queue status. Doctors and staff get dedicated dashboards for schedule management, appointment handling, and clinic operations oversight.',
    problem: 'Clinics often rely on manual processes for appointment booking, patient check-in, and queue management — leading to long wait times, scheduling conflicts, and poor patient experience. Existing solutions are either too complex, expensive, or lack the specific workflows needed for outpatient clinics.',
    solution: 'A purpose-built clinic management platform with patient-facing booking and check-in flows, real-time queue display, digital token system, and role-based dashboards for doctors and staff — all in a responsive, accessible web application.',
    features: [
      'Online appointment booking with real-time availability',
      'QR code-based patient check-in',
      'Digital token generation and display',
      'Real-time clinic queue with live updates',
      'Doctor schedule management with time slots',
      'Staff dashboard for appointment operations',
      'Appointment management (create, reschedule, cancel)',
      'Clinic operations dashboard with analytics',
      'Role-based access (patient, doctor, staff, admin)',
      'Responsive design for mobile and desktop'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'Authentication'
    ],
    architecture: 'Next.js App Router with Server Components for data fetching. Prisma ORM with PostgreSQL for type-safe database access. NextAuth for authentication with role-based access control. Real-time updates via Server-Sent Events for queue display. QR codes generated client-side for check-in.',
    deployment: 'Deployed on Cloudflare Pages with Cloudflare D1/PostgreSQL database. CI/CD via GitHub Actions. Edge caching for static assets. Environment-based configuration for multi-clinic support.',
    highlights: [
      'Sub-second queue updates via SSE',
      'Zero-dependency QR code generation',
      'Full TypeScript coverage with Prisma',
      'WCAG 2.1 AA compliant patient flows'
    ],
    visualType: 'clinic',
    coverImage: '/images/projects/Screenshot 1.png',
    images: [
      '/images/projects/Screenshot 2.png',
      '/images/projects/Screenshot 3.png',
      '/images/projects/Screenshot 4.png',
      '/images/projects/Screenshot 5.png',
      '/images/projects/Screenshot 6.png',
      '/images/projects/Screenshot 7.png',
      '/images/projects/Screenshot 8.png',
      '/images/projects/Screenshot 9.png',
      '/images/projects/Screenshot 10.png',
    ],
    githubUrl: undefined,
    liveUrl: undefined
  },
  {
    slug: 'ecommerce',
    number: '05',
    name: 'E-Commerce Platform',
    category: 'Full-Stack Commerce Application',
    description: 'A full-stack commerce experience covering product browsing, shopping workflows and application-level backend functionality.',
    longDescription: 'A comprehensive full-stack e-commerce platform demonstrating end-to-end commerce workflows. From product catalog management to order processing, this platform showcases production-grade patterns for inventory, authentication, payments, and order fulfillment.',
    problem: 'Building production e-commerce requires integrating many complex systems: inventory, payments, authentication, email, admin tooling — all while maintaining data consistency and security.',
    solution: 'A modular commerce architecture with clear separation between storefront, admin, and backend services. Each domain is independently deployable and testable.',
    features: [
      'Product catalog with variants',
      'Inventory tracking',
      'User authentication and profiles',
      'Shopping cart and checkout',
      'Order management',
      'Admin dashboard',
      'Email notifications',
      'Payment processing integration',
      'Discount codes and promotions',
      'Shipping calculation'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Database',
      'API',
      'Authentication'
    ],
    architecture: 'Monorepo structure with shared packages for types, validation, and UI components. Next.js for storefront and admin. Separate API service for business logic. PostgreSQL with Prisma. Event-driven order processing.',
    deployment: 'Multi-service deployment on cloud infrastructure. Database migrations in CI/CD. Health checks and observability.',
    highlights: [
      'Modular monorepo architecture',
      'Type-safe across frontend/backend',
      'Comprehensive test coverage',
      'Production monitoring and alerting'
    ],
    visualType: 'ecommerce',
    coverImage: '/images/projects/Screenshot (178).png',
    githubUrl: undefined,
    liveUrl: undefined
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}