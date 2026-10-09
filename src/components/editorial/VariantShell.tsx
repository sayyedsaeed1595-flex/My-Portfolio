import type { ReactNode } from 'react';
import { EditorialNavbar } from './EditorialNavbar';
import { EditorialFooter } from './EditorialFooter';
import type { EditorialVariant } from './variant';

interface VariantShellProps {
  variant: EditorialVariant;
  children: ReactNode;
}

export function VariantShell({ variant, children }: VariantShellProps) {
  const isDark = variant === 'dark';

  return (
    <div
      id="top"
      className={`min-h-screen w-full overflow-x-clip ${
        isDark ? 'bg-[#070d18] text-[#eef2f7]' : 'bg-[#f4f1ea] text-[#16202e]'
      }`}
    >
      <EditorialNavbar variant={variant} />
      <main className="w-full">{children}</main>
      <EditorialFooter variant={variant} />
    </div>
  );
}
