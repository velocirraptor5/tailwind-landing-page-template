'use client';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import { Button } from '@material-tailwind/react';
import { MouseEvent } from 'react';

export default function Hero() {
  const handleMouseDown = (event: MouseEvent) => {
    event.currentTarget.classList.add('scale-90');
  };

  const handleMouseUp = (event: MouseEvent) => {
    event.currentTarget.classList.remove('scale-90');
  };
  return (
    <section className="relative">
      <div className="flex items-center max-w-6xl mx-auto px-4 sm:px-6  min-h-screen">
        {/* Hero content */}
        <div>
          {/* Section header */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              {'Crea una '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                camisa
              </span>
              {' tan '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                unica
              </span>
              {' como '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                tu
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Crea camisas a tu gusto con ayuda de una IA.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Button
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 shadow-blue-200"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    Iniciar creacion
                  </Button>
                </div>
                <div>
                  <Button
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:ml-4 shadow-gray-300"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    Imprimir mi diseño
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
