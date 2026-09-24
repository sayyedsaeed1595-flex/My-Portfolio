'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { useMouseProximity } from '@/hooks/useMouseProximity';
import { GeometricObject } from '@/components/Hero/GeometricObjects';
import { LaptopMockup } from '@/components/Hero/LaptopMockup';

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [laptopTransform, setLaptopTransform] = useState({ rotateY: 0, rotateX: 0, x: 0, y: 0 });
  const { mousePosition } = useMouseProximity();
  const rafRef = useRef<number>(0);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const cx = window.innerWidth * 0.75;
      const cy = window.innerHeight * 0.35;
      const dx = mousePosition.x - cx;
      const dy = mousePosition.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 400;
      const intensity = dist > maxDist ? 0 : (1 - dist / maxDist) ** 2;
      setLaptopTransform({
        rotateY: (dx / maxDist) * 3 * intensity,
        rotateX: -(dy / maxDist) * 2 * intensity,
        x: (dx / maxDist) * 8 * intensity,
        y: (dy / maxDist) * 5 * intensity,
      });
    });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePosition]);

  return (
    <section className="hero-container relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="section-container relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[90vh] pt-8 pb-16 lg:pb-0">
          {/* Left: Headline */}
          <div className="flex-1 flex items-center lg:max-w-xl">
            <div className="lg:pt-16">
              <p className="eyebrow mb-6 text-amber-400/80">
                FULL-STACK WEB APPLICATION DEVELOPER
              </p>
              <h1 className="hero-title heading-xl text-white mb-6">
                I build
                <br />
                <span className="text-gradient-accent">digital products</span>
                <br />
                that are made
                <br />
                to work<span className="text-gradient-accent">.</span>
              </h1>
              <p className="body-md text-zinc-400 max-w-md mb-8">
                Production-ready web applications, AI platforms, SaaS products and modern digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
                <Link href={siteConfig.cta.secondaryHref} className="btn-primary">
                  {siteConfig.cta.secondary}
                  <ArrowUpRight className="w-4 h-4 arrow-micro" aria-hidden="true" />
                </Link>
                <Link href={siteConfig.cta.primaryHref} className="btn-secondary">
                  {siteConfig.cta.primary}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex items-center gap-4 text-zinc-500">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                >
                  <span className="text-sm">{siteConfig.email}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:border-white/20 transition-all text-xs"
                  aria-label={emailCopied ? 'Email copied' : 'Copy email to clipboard'}
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3 h-3 text-green-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Laptop + 3D Objects */}
          <div className="flex-1 relative flex items-center justify-center" style={{ minHeight: '500px' }}>
            {/* Laptop */}
            <div
              className="laptop-3d object-3d"
              style={{
                transform: `translate(${laptopTransform.x}px, ${laptopTransform.y}px) rotateY(${laptopTransform.rotateY}deg) rotateX(${laptopTransform.rotateX}deg)`,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                willChange: 'transform',
              }}
            >
              <LaptopMockup />
            </div>

            {/* 3D Objects - Lower portion */}
            <div className="absolute bottom-0 left-0 w-full h-64" aria-hidden="true">
              {/* Large cube - left */}
              <GeometricObject
                type="cube"
                size={60}
                position={{ x: '5%', y: '20%' }}
                color="#1a1a2e"
                glowColor="rgba(245,200,66,0.3)"
                mousePosition={mousePosition}
              />

              {/* Sphere - center-left */}
              <GeometricObject
                type="sphere"
                size={40}
                position={{ x: '15%', y: '40%' }}
                color="#F5C842"
                glowColor="rgba(245,200,66,0.5)"
                mousePosition={mousePosition}
              />

              {/* Cylinder - center */}
              <GeometricObject
                type="cylinder"
                size={50}
                position={{ x: '30%', y: '15%' }}
                color="#16213e"
                glowColor="rgba(99,102,241,0.3)"
                mousePosition={mousePosition}
              />

              {/* Small cube - right-center */}
              <GeometricObject
                type="cube"
                size={30}
                position={{ x: '50%', y: '35%' }}
                color="#2a2a4e"
                glowColor="rgba(245,200,66,0.2)"
                mousePosition={mousePosition}
              />

              {/* Sphere - far right */}
              <GeometricObject
                type="sphere"
                size={25}
                position={{ x: '65%', y: '25%' }}
                color="#F5C842"
                glowColor="rgba(245,200,66,0.4)"
                mousePosition={mousePosition}
              />

              {/* Large cube - bottom right */}
              <GeometricObject
                type="cube"
                size={45}
                position={{ x: '40%', y: '55%' }}
                color="#0f3460"
                glowColor="rgba(99,102,241,0.2)"
                mousePosition={mousePosition}
              />

              {/* Small sphere */}
              <GeometricObject
                type="sphere"
                size={20}
                position={{ x: '20%', y: '55%' }}
                color="#F5C842"
                glowColor="rgba(245,200,66,0.3)"
                mousePosition={mousePosition}
              />

              {/* Cylinder - bottom left */}
              <GeometricObject
                type="cylinder"
                size={35}
                position={{ x: '10%', y: '65%' }}
                color="#1a1a2e"
                glowColor="rgba(99,102,241,0.2)"
                mousePosition={mousePosition}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}