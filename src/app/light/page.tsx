import type { Metadata } from 'next';
import { EditorialPage } from '@/components/editorial/EditorialPage';

export const metadata: Metadata = {
  title: 'Saeed Sayyed — Crafting High-End Web Applications',
  description:
    'Light mode portfolio of Saeed Sayyed: Text2IMG, FlexShop, ToolzyPro, Clinic Demo and E-Commerce Platform. Web development portfolio, available for projects.',
};

export default function LightHome() {
  return <EditorialPage variant="light" />;
}
