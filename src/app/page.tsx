'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    window.location.replace('/dark');
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#0b1424] px-6 text-center">
      <p className="font-editorial text-2xl text-[#f2ede3]">
        Saeed Sayyed — Portfolio
      </p>
      <p className="text-xs tracking-[0.22em] text-[#8e99a8]">
        REDIRECTING TO THE DARK HOMEPAGE
      </p>
      <Link
        href="/dark"
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#33445e] px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-[#dfe5ee] transition-colors hover:border-[#4a5f7d]"
      >
        CONTINUE TO /DARK
      </Link>
    </div>
  );
}
