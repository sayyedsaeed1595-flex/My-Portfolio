'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';
import { LaptopMockup } from './Hero/LaptopMockup';
import { Floating3DScene } from './Hero/Floating3DScene';

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

      <div className="section-container relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[calc(100vh-6rem)] pt-8 pb-16 lg:pb-0 gap-12 relative">
          <motion.div
            className="flex-1 flex items-center lg:max-w-2xl z-20"
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
            className="flex-1 relative flex items-end justify-center lg:pl-8 z-10"
            variants={itemVariants}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-2xl lg:max-w-3xl">
              <LaptopMockup />
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 top-1/2 -z-10 pointer-events-none lg:pointer-events-auto">
            <Floating3DScene />
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}