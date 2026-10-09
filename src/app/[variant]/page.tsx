import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { EditorialPage } from '@/components/editorial/EditorialPage';
import type { EditorialVariant } from '@/components/editorial/variant';

export function generateStaticParams() {
  return [{ variant: 'dark' }, { variant: 'light' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  const mode = variant === 'light' ? 'Light Mode' : 'Dark Mode';
  return {
    title: `Saeed Sayyed — Crafting High-End Web Applications (${mode})`,
    description:
      'Portfolio of Saeed Sayyed: Text2IMG, FlexShop, ToolzyPro, PrimeCare Clinic Demo and E-Commerce Platform. Web development portfolio, available for projects.',
  };
}

export default async function VariantHome({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (variant !== 'dark' && variant !== 'light') notFound();
  return <EditorialPage variant={variant as EditorialVariant} />;
}
