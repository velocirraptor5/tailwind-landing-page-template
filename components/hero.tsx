'use client';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import { Button } from '@material-tailwind/react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Logo from '@/public/images/Logo';

export default function Hero() {
  const handleScrollDownClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'auto' });
  };

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute w-screen h-screen" data-aos="zoom-y-out">
        <Image src={'/images/WolfId (1).svg'} fill={true} alt="logo" />
      </div>
      <div className="flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6  min-h-screen">
        {/* Hero content */}
        <div>
          {/* Section header */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                tu
              </span>
             */}
        </div>
      </div>
      <motion.button
        className="scroll-down-icon w-12 h-12 animate-bounce text-wolfTeal-900"
        animate={{ y: [0, 10] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onClick={handleScrollDownClick}
      >
        <FaChevronDown />
      </motion.button>
    </section>
  );
}
