'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import type { EditorialVariant } from './variant';

interface CopyEmailButtonProps {
  variant: EditorialVariant;
}

export function CopyEmailButton({ variant }: CopyEmailButtonProps) {
  const isDark = variant === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — mailto link remains functional
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
        isDark
          ? 'border-white/15 text-[#c6cfdb] hover:border-white/30 hover:text-white'
          : 'border-[#c9bfa9] text-[#3d4753] hover:border-[#a89c80] hover:text-[#16202e]'
      }`}
      aria-label={copied ? 'Email copied' : 'Copy email to clipboard'}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
