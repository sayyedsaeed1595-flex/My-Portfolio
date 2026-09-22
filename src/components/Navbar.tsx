'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
        isScrolled ? 'glass-strong' : 'bg-transparent'
      )}
    >
      <div className="section-container h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          aria-label={`${siteConfig.name} - Home`}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={siteConfig.cta.primaryHref}
            className="btn-secondary"
          >
            {siteConfig.cta.primary}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-sm',
          isMobileMenuOpen ? 'animate-fade-in' : 'hidden'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col items-center gap-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.cta.primaryHref}
            className="btn-primary mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {siteConfig.cta.primary}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}