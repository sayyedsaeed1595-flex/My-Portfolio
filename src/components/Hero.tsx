'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Copy, Check, Monitor, BarChart3, Zap, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

const springEase = [0.34, 1.56, 0.64, 1] as const;

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: springEase }
    }
  };

  return (
    <section className="hero-container relative min-h-screen flex items-center overflow-hidden pt-24" aria-label="Hero">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />
      
      <div className="absolute top-1/4 right-10 w-96 h-96 hero-glow-orb hero-glow-orb-amber" style={{ animationDelay: '0s' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 hero-glow-orb hero-glow-orb-cyan" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="section-container relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[calc(100vh-6rem)] pt-8 pb-16 lg:pb-0 gap-12">
          <motion.div
            className="flex-1 flex items-center lg:max-w-2xl"
            variants={itemVariants}
          >
            <div className="w-full lg:pt-8">
              <motion.p
                className="eyebrow mb-6"
                variants={itemVariants}
                style={{ transitionDelay: '0s' }}
              >
                FULL-STACK WEB APPLICATION DEVELOPER
              </motion.p>
              
              <motion.h1
                className="hero-title heading-xl text-white mb-6 leading-[1.05] tracking-tight"
                variants={itemVariants}
                style={{ transitionDelay: '0.1s' }}
              >
                I build
                <br />
                <span className="text-gradient-accent">digital products</span>
                <br />
                that are made
                <br />
                to work<span className="text-gradient-accent">.</span>
              </motion.h1>
              
              <motion.p
                className="body-md text-zinc-400 max-w-md mb-10"
                variants={itemVariants}
                style={{ transitionDelay: '0.2s' }}
              >
                Production-ready web applications, AI platforms, SaaS products and modern digital experiences.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4 mb-10"
                variants={itemVariants}
                style={{ transitionDelay: '0.3s' }}
              >
                <Link href={siteConfig.cta.secondaryHref} className="btn-primary w-full sm:w-auto">
                  {siteConfig.cta.secondary}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href={siteConfig.cta.primaryHref} className="btn-secondary w-full sm:w-auto">
                  {siteConfig.cta.primary}
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-zinc-500"
                variants={itemVariants}
                style={{ transitionDelay: '0.4s' }}
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm"
                  >
                    <span>{siteConfig.email}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
                  </a>
                  <motion.button
                    onClick={handleCopyEmail}
                    className={cn(
                      'copy-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300',
                      emailCopied && 'copied'
                    )}
                    aria-label={emailCopied ? 'Email copied' : 'Copy email to clipboard'}
                    whileTap={{ scale: 0.95 }}
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3 h-3" aria-hidden="true" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative flex items-center justify-center lg:pl-8"
            variants={itemVariants}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="scene-3d relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.05)_0%,_transparent_70%)]" />
        
        <div className="relative p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 font-mono">
              dashboard.text2img.local
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-hidden">
            <div className="grid grid-cols-2 gap-3 flex-1">
              <MetricCard
                icon={<Zap className="w-5 h-5" />}
                label="Generations"
                value="12,847"
                change="+23.4%"
                changeColor="text-green-400"
                glowColor="rgba(245,158,11,0.15)"
              />
              <MetricCard
                icon={<Cloud className="w-5 h-5" />}
                label="API Calls"
                value="89.2k"
                change="+12.1%"
                changeColor="text-cyan-400"
                glowColor="rgba(56,189,248,0.15)"
              />
              <MetricCard
                icon={<Database className="w-5 h-5" />}
                label="Storage"
                value="2.4 TB"
                change="+5.2%"
                changeColor="text-amber-400"
                glowColor="rgba(245,158,11,0.15)"
              />
              <MetricCard
                icon={<BarChart3 className="w-5 h-5" />}
                label="Avg Time"
                value="2.3s"
                change="-8.1%"
                changeColor="text-green-400"
                glowColor="rgba(34,197,94,0.15)"
              />
            </div>

            <div className="flex-1 min-h-0 flex gap-3">
              <div className="flex-1 bg-zinc-950/50 rounded-2xl border border-white/5 p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Generation Queue</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
                <QueueVisualization />
              </div>

              <div className="w-72 bg-zinc-950/50 rounded-2xl border border-white/5 p-4 overflow-hidden flex flex-col">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-3">Active Models</span>
                <div className="flex-1 space-y-3">
                  {['SDXL Turbo', 'DALL-E 3', 'Midjourney v6', 'Stable Diffusion 3'].map((model, i) => (
                    <motion.div
                      key={model}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
                    >
                      <span className="text-sm text-zinc-300 font-medium">{model}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs text-green-400 font-mono">{Math.floor(Math.random() * 50) + 10}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingOrbs />
      <FloatingParticles />
    </div>
  );
}

function MetricCard({ icon, label, value, change, changeColor, glowColor }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  changeColor: string;
  glowColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
      className="relative bg-zinc-950/50 rounded-2xl border border-white/5 p-4 overflow-hidden group"
      style={{ boxShadow: `inset 0 1px 0 ${glowColor}` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[${glowColor}] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-xl bg-white/5 text-zinc-400 group-hover:text-amber-400 transition-colors">
            {icon}
          </div>
        </div>
        <div className="pt-2">
          <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wide">{label}</p>
        </div>
        <p className={cn('text-xs font-medium', changeColor)}>{change} vs last month</p>
      </div>
    </motion.div>
  );
}

function QueueVisualization() {
  const bars = Array.from({ length: 24 }, (_, i) => ({
    height: Math.max(10, Math.min(100, 30 + Math.sin(i * 0.5) * 25 + Math.random() * 30)),
    delay: i * 0.05
  }));

  return (
    <div className="flex items-end justify-between h-32 gap-1">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: bar.delay, duration: 0.4, ease: springEase }}
          className="flex-1 rounded-t transition-all duration-300"
          style={{
            height: `${bar.height}%`,
            background: `linear-gradient(to top, rgb(245,158,11), rgb(234,88,12))`,
            boxShadow: `0 0 ${bar.height > 60 ? 12 : 4}px rgb(245,158,11,${bar.height > 60 ? 0.6 : 0.3})`
          }}
        />
      ))}
    </div>
  );
}

function FloatingOrbs() {
  const orbs = [
    { x: '5%', y: '15%', size: 80, color: 'rgba(245,158,11,0.1)', delay: 0 },
    { x: '85%', y: '10%', size: 60, color: 'rgba(56,189,248,0.1)', delay: 1 },
    { x: '10%', y: '80%', size: 50, color: 'rgba(245,158,11,0.08)', delay: 2 },
    { x: '80%', y: '85%', size: 70, color: 'rgba(56,189,248,0.08)', delay: 3 },
    { x: '50%', y: '5%', size: 40, color: 'rgba(245,158,11,0.12)', delay: 0.5 },
    { x: '50%', y: '95%', size: 45, color: 'rgba(56,189,248,0.1)', delay: 1.5 },
  ];

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 6,
    color: Math.random() > 0.5 ? 'rgba(245,158,11,0.6)' : 'rgba(56,189,248,0.5)'
  }));

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}