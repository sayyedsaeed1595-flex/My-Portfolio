import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.name} to discuss your next web application project.`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
