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
      {/* Illustration behind hero content */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="flex items-center max-w-6xl mx-auto px-4 sm:px-6  min-h-screen">
        {/* Hero content */}
        <div>
          {/* Section header */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Crea una{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                camisa
              </span>{' '}
              tan{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                unica
              </span>{' '}
              como{' '}
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
                    // href="#0"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    Imprimir mi diseño
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
      </div>
    </section>
  );
}
