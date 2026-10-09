'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import type { EditorialVariant } from './EditorialHeader';

interface EditorialFooterProps {
  variant: EditorialVariant;
}

export function EditorialFooter({ variant }: EditorialFooterProps) {
  const isDark = variant === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — mailto link remains functional
    }
  };

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-5 border-t py-8 sm:flex-row sm:items-center sm:justify-between ${
            isDark ? 'border-[#22314a]' : 'border-[#ddd3c2]'
          }`}
        >
          <p
            className={`text-xs tracking-[0.08em] ${
              isDark ? 'text-[#8e99a8]' : 'text-[#7a7466]'
            }`}
          >
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            <Mail
              className={`h-4 w-4 shrink-0 ${
                isDark ? 'text-[#8e99a8]' : 'text-[#7a7466]'
              }`}
              aria-hidden="true"
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className={`text-sm transition-colors ${
                isDark
                  ? 'text-[#c6cfdb] hover:text-[#f2ede3]'
                  : 'text-[#3d4753] hover:text-[#1d2733]'
              }`}
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
                isDark
                  ? 'border-[#2c3a4f] text-[#a7b0bd] hover:border-[#4a5f7d] hover:text-[#f2ede3]'
                  : 'border-[#d8d0bf] text-[#5c6672] hover:border-[#a89c80] hover:text-[#1d2733]'
              }`}
              aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <nav
            className="flex items-center gap-5"
            aria-label="Social and site links"
          >
            <Link
              href="/projects"
              className={`text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              WORK
            </Link>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              GITHUB
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              LINKEDIN
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
