'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/theme';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(() =>
    typeof window === 'undefined' ? '/' : window.location.pathname,
  );
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      suppressHydrationWarning
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-2rem)] md:max-w-[calc(100%-4rem)] transition-all duration-500',
        isScrolled ? 'top-4' : 'top-6'
      )}
      style={{ willChange: 'transform, top' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative"
      >
        <nav
          className={cn(
            'glass-strong rounded-full px-5 py-3 shadow-2xl',
            'border border-white/10',
            isScrolled && 'shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5),0_0_80px_-30px_rgba(245,158,11,0.08)]'
          )}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg tracking-tight text-white hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-mono text-sm">
                S
              </span>
              <span className="hidden sm:block">Saeed Sayyed</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 relative" role="menubar">
              <motion.div
                className="pill-indicator pointer-events-none"
                style={{ width: activeItem !== '/' ? 100 : 0 }}
                animate={{
                  x: navigationItems.findIndex(item => item.href === activeItem) * 96 + 4,
                  width: activeItem !== '/' ? 92 : 0,
                  opacity: activeItem !== '/' ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                aria-hidden="true"
              />
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'nav-pill relative z-10',
                    activeItem === item.href && 'active'
                  )}
                  role="menuitem"
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(window.location.pathname)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                href={siteConfig.cta.primaryHref}
                className="btn-primary"
              >
                {siteConfig.cta.primary}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-4 glass-strong rounded-2xl p-6 md:hidden overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <nav className="flex flex-col items-center gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="w-full text-center py-3 px-4 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="w-full flex items-center justify-center gap-3 mt-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  <Link
                    href={siteConfig.cta.primaryHref}
                    className="btn-primary w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {siteConfig.cta.primary}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}