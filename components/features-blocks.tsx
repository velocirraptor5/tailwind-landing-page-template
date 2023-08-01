'use client';
import Image from 'next/image';
import ShirtSVG from '@/components/ui/ShirtSVG';

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}
      <div className="flex flex-col text-center justify-center items-center h-screen w-screen overflow-hidden">
        <div
          style={{
            width: '80%',
            height: '80%',
          }}
        >
          <ShirtSVG color="#000000" />
        </div>
      </div>
    </section>
  );
}
