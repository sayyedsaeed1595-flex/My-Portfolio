'use client';

import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function ContactCTA() {
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
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4 animate-slide-up">Get In Touch</p>
          <h2 id="contact-heading" className="heading-xl text-white animate-slide-up" style={{ animationDelay: '100ms' }}>
            Have a project in mind?
          </h2>
          <p className="body-lg mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Let&apos;s build something useful.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <a
              href={siteConfig.cta.primaryHref}
              className="btn-primary w-full sm:w-auto cursor-pointer"
            >
              {siteConfig.cta.primary}
              <ArrowUpRight className="w-4 h-4 arrow-micro" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-center gap-4 text-zinc-500">
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
      </div>
    </section>
  );
}