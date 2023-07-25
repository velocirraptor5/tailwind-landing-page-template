'use client';

import { useState, useContext } from 'react';
import { ShirtColorContext } from '@/contexts/ShirtColorContext';
import Form from './form/main';
import Images from './images';
import { DarkBgContext, DarkBgProvider } from '@/contexts/DarkBgContext';

export default function ImageCreator() {
  const { shirtColor } = useContext(ShirtColorContext);

  return (
    <section className="relative">
      <div className={`mx-auto px-4 sm:px-6 my-16`}>
        <div
          className={`rounded-lg shadow-lg shadow-wolfTeal-900 transition duration-500 
            ${
              ['white', 'black'].includes(shirtColor)
                ? 'bg-' + shirtColor
                : 'bg-' + shirtColor + '-400'
            } 
            `}
        >
          {/* Section Content */}
          <div className="mx-10 my-5 md:grid grid-cols-9 gap-4">
            <DarkBgProvider>
              {/* Form */}
              <Form />

              {/* Images */}
              <Images />
            </DarkBgProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
