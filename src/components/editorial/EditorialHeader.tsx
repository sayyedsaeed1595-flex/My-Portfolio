import Link from 'next/link';
import { ArrowDownRight, Sun, Moon } from 'lucide-react';

export type EditorialVariant = 'dark' | 'light';

interface EditorialHeaderProps {
  variant: EditorialVariant;
}

export function EditorialHeader({ variant }: EditorialHeaderProps) {
  const isDark = variant === 'dark';
  const homeHref = isDark ? '/dark' : '/light';
  const otherHref = isDark ? '/light' : '/dark';

  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-3 py-5 border-b ${
            isDark ? 'border-[#22314a]' : 'border-[#ddd3c2]'
          }`}
        >
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href={homeHref}
              className={`flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                isDark
                  ? 'focus-visible:outline-[#f2ede3]'
                  : 'focus-visible:outline-[#1d2733]'
              }`}
              aria-label="Saeed Sayyed — home"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center border font-editorial text-base leading-none ${
                  isDark
                    ? 'border-[#33445e] text-[#f2ede3]'
                    : 'border-[#b9ae98] text-[#1d2733]'
                }`}
                aria-hidden="true"
              >
                S
              </span>
              <span
                className={`text-[13px] font-medium tracking-[0.08em] whitespace-nowrap ${
                  isDark ? 'text-[#f2ede3]' : 'text-[#1d2733]'
                }`}
              >
                Saeed Sayyed
              </span>
            </Link>
            <span
              className={`hidden sm:block h-4 w-px ${
                isDark ? 'bg-[#22314a]' : 'bg-[#ddd3c2]'
              }`}
              aria-hidden="true"
            />
            <a
              href="#work"
              className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              EXPLORE WORK
              <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <nav
            className="flex items-center gap-4 sm:gap-6"
            aria-label="Primary navigation"
          >
            <Link
              href="/projects"
              className={`text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              PROJECTS
            </Link>
            <Link
              href="/about"
              className={`hidden sm:inline text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className={`text-[11px] font-medium tracking-[0.18em] transition-colors ${
                isDark
                  ? 'text-[#8e99a8] hover:text-[#f2ede3]'
                  : 'text-[#7a7466] hover:text-[#1d2733]'
              }`}
            >
              CONNECT
            </Link>
            <Link
              href={otherHref}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] transition-colors ${
                isDark
                  ? 'border-[#33445e] text-[#c6cfdb] hover:border-[#4a5f7d] hover:text-[#f2ede3]'
                  : 'border-[#c9bfa9] text-[#5c6672] hover:border-[#a89c80] hover:text-[#1d2733]'
              }`}
              aria-label={
                isDark ? 'View the light mode homepage' : 'View the dark mode homepage'
              }
            >
              {isDark ? (
                <Sun className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Moon className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {isDark ? 'LIGHT' : 'DARK'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
