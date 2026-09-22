'use client';

import { ReactNode } from 'react';
import { useInView } from '@/lib/useInView';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const hiddenStyles = variant === 'slide-left' ? 'opacity-0 -translate-x-8'
    : variant === 'slide-right' ? 'opacity-0 translate-x-8'
    : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0 translate-x-0' : hiddenStyles,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}