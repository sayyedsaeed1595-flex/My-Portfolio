'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LEGACY_TARGETS: Record<string, string> = {
  '/about': '/dark/about',
  '/services': '/dark/services',
  '/contact': '/dark/contact',
  '/projects': '/dark/projects',
};

function resolveTarget(pathname: string | null): string {
  if (!pathname) return '/dark';
  if (pathname.startsWith('/projects/')) return `/dark${pathname}`;
  return LEGACY_TARGETS[pathname] ?? '/dark';
}

export function LegacyRedirect() {
  const pathname = usePathname();
  const target = resolveTarget(pathname);

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#0b1424] px-6 text-center">
      <p className="text-xs tracking-[0.22em] text-[#8e99a8]">
        THIS PAGE HAS MOVED
      </p>
      <Link
        href={target}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#33445e] px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#dfe5ee] transition-colors hover:border-[#4a5f7d]"
      >
        CONTINUE
      </Link>
    </div>
  );
}
