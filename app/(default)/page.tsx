export const metadata = {
  title: 'Art-bot',
  description: 'Crea una camisa tan unica como tu',
};

import Hero from '@/components/hero';
import FeaturesBlocks from '@/components/features-blocks';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import { ColorProvider } from '@/contexts/ShirtColorContext';
import ImageCreator from '@/components/imageCreator/main';

export default function Home() {
  return (
    <>
      <ColorProvider>
        <div className="bg-wolfBg-900">
          <Hero />
          <ImageCreator />
          <FeaturesBlocks />
          <Testimonials />
          <Newsletter />
        </div>
      </ColorProvider>
    </>
  );
}
