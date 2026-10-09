'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import type { EditorialVariant } from './variant';

interface EditorialNavbarProps {
  variant: EditorialVariant;
}

export function EditorialNavbar({ variant }: EditorialNavbarProps) {
  const isDark = variant === 'dark';
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const base = isDark ? '/dark' : '/light';
  const otherBase = isDark ? '/light' : '/dark';

  const navLinks = [
    { label: 'Home', href: `${base}#top` },
    { label: 'Work', href: `${base}#work` },
    { label: 'Services', href: `${base}#services` },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleThemeSwitch = () => {
    const hash =
      typeof window === 'undefined' ? '' : window.location.hash;
    if (pathname && pathname.startsWith(base)) {
      const rest = pathname.slice(base.length);
      router.push(`${otherBase}${rest}${hash}`);
    } else {
      router.push(`${otherBase}${hash}`);
    }
  };

  return (
    <div className="sticky top-3 z-50 w-full px-3 sm:px-4">
      <div className="mx-auto max-w-6xl">
        <nav
          aria-label="Primary navigation"
          className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl sm:px-5 ${
            isDark
              ? 'border-white/[0.08] bg-[#0b1424]/85 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)]'
              : 'border-[#ddd3c2] bg-[#f6f1e7]/90 shadow-[0_16px_36px_-20px_rgba(60,50,30,0.4)]'
          }`}
        >
          <Link
            href={base}
            className={`flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 ${
              isDark
                ? 'focus-visible:outline-[#7dd3fc]'
                : 'focus-visible:outline-[#1d4ed8]'
            }`}
            aria-label="Saeed Sayyed — home"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 font-editorial text-base leading-none text-black"
              aria-hidden="true"
            >
              S
            </span>
            <span
              className={`whitespace-nowrap text-[15px] font-semibold tracking-tight ${
                isDark ? 'text-[#eef2f7]' : 'text-[#16202e]'
              }`}
            >
              Saeed Sayyed
            </span>
          </Link>

          <div
            className={`hidden items-center gap-1 rounded-full border px-1.5 py-1 lg:flex ${
              isDark ? 'border-white/[0.07] bg-white/[0.03]' : 'border-[#e0d7c3] bg-black/[0.03]'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                  isDark
                    ? 'text-[#9aa6b8] hover:bg-white/[0.06] hover:text-[#eef2f7]'
                    : 'text-[#5d6878] hover:bg-black/[0.05] hover:text-[#16202e]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={handleThemeSwitch}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11px] font-semibold tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isDark
                  ? 'border-white/10 text-[#9aa6b8] hover:border-white/25 hover:text-[#eef2f7] focus-visible:outline-[#7dd3fc]'
                  : 'border-[#c9bfa9] text-[#5d6878] hover:border-[#a89c80] hover:text-[#16202e] focus-visible:outline-[#1d4ed8]'
              }`}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">
                {isDark ? 'LIGHT' : 'DARK'}
              </span>
            </button>
            <Link
              href={siteConfig.cta.primaryHref}
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-[13px] font-semibold text-black shadow-[0_8px_24px_-8px_rgba(245,158,11,0.6)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`inline-flex rounded-lg border p-2 transition-colors lg:hidden ${
                isDark
                  ? 'border-white/10 text-[#9aa6b8] hover:text-[#eef2f7]'
                  : 'border-[#c9bfa9] text-[#5d6878] hover:text-[#16202e]'
              }`}
              aria-expanded={menuOpen}
              aria-controls="editorial-mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="editorial-mobile-menu"
            className={`mt-2 rounded-2xl border p-3 backdrop-blur-xl lg:hidden ${
              isDark
                ? 'border-white/[0.08] bg-[#0b1424]/95'
                : 'border-[#ddd3c2] bg-[#f6f1e7]/95'
            }`}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-[#c6cfdb] hover:bg-white/[0.06] hover:text-white'
                      : 'text-[#3d4753] hover:bg-black/[0.04] hover:text-[#16202e]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteConfig.cta.primaryHref}
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 text-sm font-semibold text-black"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
