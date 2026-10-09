'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const BARE_ROUTES = new Set(['/', '/dark', '/light']);

export function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname && BARE_ROUTES.has(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
