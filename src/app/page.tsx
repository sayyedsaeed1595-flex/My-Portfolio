import { Hero } from '@/components/Hero';
import { InfoStrip } from '@/components/InfoStrip';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { TechStack } from '@/components/TechStack';
import { Process } from '@/components/Process';
import { ProductionMindset } from '@/components/ProductionMindset';
import { ContactCTA } from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <FeaturedProjects />
      <Services />
      <About />
      <TechStack />
      <Process />
      <ProductionMindset />
      <ContactCTA />
    </>
  );
}