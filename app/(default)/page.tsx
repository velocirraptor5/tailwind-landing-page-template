export const metadata = {
  title: 'Art-bot',
  description: 'Crea una camisa tan unica como tu',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import { ColorProvider } from '@/contexts/MyContext';

export default function Home() {
  return (
    <>
      <ColorProvider>
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </ColorProvider>
    </>
  );
}
