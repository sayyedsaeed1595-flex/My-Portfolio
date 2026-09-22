'use client';

import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { useState } from 'react';

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow animate-slide-up" style={{ animationDelay: '100ms' }}>
            FULL-STACK WEB APPLICATION DEVELOPER
          </p>

          <h1 className="heading-xl text-white mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            I build digital products
            <br />
            <span className="text-gradient-accent">that are made to work.</span>
          </h1>

          <p className="body-lg mt-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '300ms' }}>
            Production-ready web applications, AI platforms, SaaS products and modern digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <a
              href={siteConfig.cta.secondaryHref}
              className="btn-primary w-full sm:w-auto"
            >
              {siteConfig.cta.secondary}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.cta.primaryHref}
              className="btn-secondary w-full sm:w-auto"
            >
              {siteConfig.cta.primary}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-16 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-500">
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium">{siteConfig.email}</span>
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

        <div className="mt-24 relative animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="visual-card aspect-[4/3] lg:aspect-[16/9] max-w-5xl mx-auto">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 rounded-3xl" />
        
        <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
          <div className="col-span-2 rounded-2xl bg-zinc-900/50 border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3 font-mono text-sm text-zinc-300">
              <div className="flex gap-2 text-indigo-400">
                <span>{'>'} npm run dev</span>
              </div>
              <div className="text-zinc-500">
                <span>{'> '}</span>Starting development server...
              </div>
              <div className="text-green-400">
                <span>{'> '}</span>Ready on http://localhost:3000
              </div>
              <div className="text-indigo-400 mt-4">
                <span>{'> '}</span>Building production bundle...
              </div>
              <div className="text-green-400">
                <span>{'> '}</span>Compiled successfully in 2.3s
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900/50 border border-white/10 p-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>API Gateway</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-400">GET</span>
                <span className="text-green-400">/api/projects</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">POST</span>
                <span className="text-yellow-400">/api/generate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">GET</span>
                <span className="text-blue-400">/api/health</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900/50 border border-white/10 p-6">
            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Database</span>
            </div>
            <div className="space-y-2 text-sm font-mono text-zinc-400">
              <div>users</div>
              <div>projects</div>
              <div>sessions</div>
              <div>analytics</div>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-900/50 border border-white/10 p-6 col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Deployment</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Live</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <div className="text-2xl font-bold text-indigo-400">99.9%</div>
                <div className="text-xs text-zinc-500 mt-1">Uptime</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <div className="text-2xl font-bold text-purple-400">{'<'}100ms</div>
                <div className="text-xs text-zinc-500 mt-1">Latency</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5">
                <div className="text-2xl font-bold text-green-400">Global</div>
                <div className="text-xs text-zinc-500 mt-1">Edge Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}