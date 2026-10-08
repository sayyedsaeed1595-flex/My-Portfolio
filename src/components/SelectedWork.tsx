'use client';

import Link from 'next/link';
import { ArrowUpRight, Cloud, Cpu, Server, Database, Globe, Code, ShoppingCart, CreditCard, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'text2img',
    number: '01',
    name: 'text2img',
    subtitle: 'An AI-powered text-to-image web application designed around a clean generation workflow, cloud APIs and a modern user experience.',
    tech: ['AWS', 'AI', 'API Gateway', 'Cloud Infrastructure'],
    techIcons: [Cloud, Cpu, Server, Database],
    accentColor: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245,158,11,0.2)',
    visual: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-sm max-h-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10 rounded-2xl blur-2xl" />
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-amber-500/20 p-6 flex items-center justify-center"
            animate={{ rotate: [0, 1, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="text-center">
              <Cpu className="w-16 h-16 mx-auto mb-4 text-amber-400 opacity-80" />
              <p className="text-zinc-400 text-sm font-mono">AI Generation Pipeline</p>
            </div>
          </motion.div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-xl" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
        </div>
      </div>
    )
  },
  {
    slug: 'flexshop',
    number: '02',
    name: 'FlexShop',
    subtitle: 'A modern e-commerce web application focused on product discovery, shopping workflows and a polished responsive experience.',
    tech: ['Next.js', 'React', 'TypeScript', 'Database'],
    techIcons: [Code, Globe, Smartphone, Database],
    accentColor: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(56,189,248,0.2)',
    visual: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-sm max-h-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 rounded-2xl blur-2xl" />
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-cyan-500/20 p-6 flex items-center justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {[ShoppingCart, CreditCard, Smartphone, Globe].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-xl" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-xl" />
        </div>
      </div>
    )
  }
];

const springEase = [0.34, 1.56, 0.64, 1] as const;

export function SelectedWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: springEase }
    }
  };

  return (
    <section id="work" className="py-20 lg:py-32 relative" aria-labelledby="work-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_60%)]" pointer-events="none" />
      
      <div className="section-container relative">
        <motion.header
          className="max-w-3xl mb-16 lg:mb-20 text-center"
          variants={containerVariants}
        >
          <motion.span
            className="eyebrow inline-block mb-4"
            variants={itemVariants}
          >
            SELECTED WORK
          </motion.span>
          <motion.h2
            id="work-heading"
            className="heading-lg text-white max-w-2xl mx-auto mb-6"
            variants={itemVariants}
          >
            A selection of web applications and digital products I&apos;ve built.
          </motion.h2>
          <motion.p
            className="body-md text-zinc-400 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Each project represents a unique challenge — from AI-powered generation platforms to scalable e-commerce systems.
          </motion.p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          role="list"
          aria-label="Featured projects"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={itemVariants}
              role="listitem"
            >
              <ProjectCard project={project} index={index} />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          style={{ transitionDelay: '0.3s' }}
        >
          <Link
            href="/projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    hover: {
      y: -8,
      scale: 1.01,
      transition: { duration: 0.3, ease: springEase }
    }
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block project-card relative overflow-hidden"
      aria-label={`View ${project.name} project`}
    >
      <motion.div
        className="project-card-visual"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="absolute inset-0">
          {project.visual}
        </div>
        <div className="project-card-atmosphere" style={{ background: `radial-gradient(ellipse at center, ${project.glowColor} 0%, transparent 70%)` }} />
      </motion.div>

      <div className="project-card-glow" style={{ background: `linear-gradient(135deg, ${project.glowColor.replace('0.2', '0.15')}, transparent 60%, ${project.glowColor.replace('0.2', '0.05')})` }} />

      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="label text-amber-400">{project.number}</span>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">
              {index === 0 ? 'AI Platform' : 'E-Commerce'}
            </span>
          </div>
          <motion.div
            className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-all">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-0 sm:min-h-[220px]">
          <div className="pr-0 sm:pr-16">
            <motion.h3
              className="heading-sm text-white mb-3 group-hover:text-amber-400 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.name}
            </motion.h3>
            <motion.p
              className="body-sm text-zinc-400 line-clamp-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.subtitle}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.05, duration: 0.3 }}
                className="badge badge-neutral"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
            View Project
          </span>
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
}