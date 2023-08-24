'use client';
import Logo from '@/components/ui/Logo';
import { MouseEvent, useEffect, useState } from 'react';
import AOS from 'aos';

export default function Us() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="relative mt-10">
      {/* Illustration behind content */}
      <div className="absolute w-screen h-screen z-0" data-aos="zoom-y-out">
        <Logo opacity="30" />
      </div>
      <div className=" relative flex flex-col justify-evenly z-10 bg-wolfBg-900 bg-opacity-70">
        {/* Title */}
        <div className="text-center m-10">
          <div className="title-auto font-varino font-bold text-wolfTeal-900">
            Quienes somos
          </div>
        </div>
        {/* Mision */}
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 m-20">
          <div className="icon-auto text-wolfTeal-900 font-varino font-bold">
            Misión
          </div>
          <div className="text-auto text-white">
            Nuestra mision es potenciar la creatividad a través de IA de
            vanguardia, redefiniendo el diseño personalizado de ropa y productos
            únicos, haciendo que la expresión individual sea accesible para
            todos.
          </div>
        </div>
        {/* Vision */}
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 m-20">
          <div className="icon-auto font-varino font-bold text-wolfTeal-900">
            Visión
          </div>
          <div className="text-auto text-white">
            Nuestra visión es revolucionar la industria del diseño con
            personalización impulsada por IA, ofreciendo una amplia gama de
            productos que reflejen la singularidad y pasiones de cada persona.
          </div>
        </div>
      </div>
    </div>
  );
}
