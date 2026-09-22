'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Link2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();
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
    <footer className="border-t border-white/10 bg-zinc-950/50">
      <div className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="max-w-xs">
            <p className="font-bold text-xl tracking-tight mb-4">{siteConfig.name}</p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              {siteConfig.role}
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:border-white/20 transition-all text-xs"
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

          <nav className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="label mb-4">Navigation</h3>
                <ul className="space-y-3">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="label mb-4">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={siteConfig.social.github}
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Link2 className="w-4 h-4" aria-hidden="true" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.social.linkedin}
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Link2 className="w-4 h-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <h3 className="label mb-4">Work Together</h3>
                <p className="text-zinc-500 text-sm mb-4 max-w-xs">
                  Have a project in mind? Let&apos;s build something useful.
                </p>
                <Link
                  href={siteConfig.cta.primaryHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {siteConfig.cta.primary}
                  <ArrowUpRight className="w-4 h-4 transition-transform hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <span>Built with Next.js</span>
            <span>Deployed on Cloudflare</span>
          </div>
        </div>
      </div>
    </footer>
  );
}