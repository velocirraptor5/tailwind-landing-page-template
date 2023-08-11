export const metadata = {
  title: 'Art-bot',
  description: 'Crea una camisa tan unica como tu',
};

import Hero from '@/components/hero';
import ShirtPreview from '@/components/shirtPreview';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import { ColorProvider } from '@/contexts/ShirtColorContext';
import ImageCreator from '@/components/imageCreator/main';

export default function Home() {
  return (
    <>
      <ColorProvider>
        <Hero />
        <ImageCreator />
        <ShirtPreview />
        <Testimonials />
        <Newsletter />
      </ColorProvider>
    </>
  );
}
