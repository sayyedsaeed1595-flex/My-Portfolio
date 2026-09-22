'use client';

import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // clipboard write failed silently
    }
  };

  return (
    <main className="min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        <p className="eyebrow mb-4">Get In Touch</p>
        <h1 className="heading-xl text-white mb-6">
          Have a project in mind?
        </h1>
        <p className="body-lg mb-12">
          I&apos;m available for freelance and contract work. Reach out and let&apos;s talk about what you&apos;re building.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="btn-primary inline-flex items-center gap-2 mb-10"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          Send an Email
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <div className="flex items-center justify-center gap-4 text-zinc-500 flex-wrap">
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
    </main>
  );
}
