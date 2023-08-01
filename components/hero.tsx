'use client';
import VideoThumb from '@/public/images/hero-image.png';
import ModalVideo from '@/components/modal-video';
import { Button } from '@material-tailwind/react';
import { MouseEvent, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [slogan, setSlogan] = useState(false);

  const [heroFocus, setHeroFocus] = useState(true);
  const handleScrollDownClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
      y: 100,
      marginTop: '100%',
    },
    visible: {
      opacity: 1,
      transition: { duration: 8, delay: 2 },
      y: 0,
      marginTop: 0,
    },
  };

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  function animationTimeout({ end = false }) {
    if (end) {
      clearTimeout(timeoutId);
    } else {
      setTimeoutId(
        setTimeout(() => {
          setVisible(!visible);
          setSlogan(false);
        }, 10000)
      );
    }
  }

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute w-screen h-screen" data-aos="zoom-y-out">
        {/* <Image src={'/images/WolfId (1).svg'} fill={true} alt="logo" /> */}
        {heroFocus && <Logo visible={logoVisible} />}
      </div>
      <div className="flex flex-col text-center justify-center items-center w-screen h-screen overflow-hidden">
        {/* Hero content */}
        <motion.div
          className="flex-col z-10 transition duration-500"
          onViewportLeave={() => {
            setSlogan(false);
            setLogoVisible(false);
            setVisible(false);
            animationTimeout({ end: true });
            setHeroFocus(false);
          }}
          onViewportEnter={() => {
            setHeroFocus(true);
          }}
        >
          {heroFocus && (
            <AnimatePresence>
              <motion.div
                variants={textVariants}
                initial="hidden"
                whileInView={visible ? 'hidden' : 'visible'}
                className="font-madsense  xl:text-9xl lg:text-8xl md:text-7xl text-6xl bg-clip-text text-transparent bg-gradient-to-r from-wolfTeal-900 to-white"
                onAnimationComplete={() => {
                  if (!visible) {
                    setSlogan(true);
                    setLogoVisible(!visible);

                    // animationTimeout({ end: true });
                    animationTimeout({});
                  } else {
                    // setSlogan(true);
                    setVisible(!visible);
                    setLogoVisible(!visible);
                  }
                }}
              >
                WOLF DI
              </motion.div>

              <motion.div
                key={'slogan'}
                variants={textVariants}
                initial="hidden"
                animate={visible ? 'hidden' : 'visible'}
                exit="hidden"
                className="font-varino lg:text-2xl md:text-xl text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-wolfTeal-900 to-white"
              >
                El futuro es nuestro lienzo
              </motion.div>

              {slogan && (
                <motion.div
                  key={'Continue'}
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                    transition: { duration: 1 },
                    marginTop: '30%',
                    marginBottom: '30%',
                    y: 100,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 1 },
                    marginTop: 0,
                    y: 0,
                  }}
                  className="font-varino text-auto font-bold bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-wolfTeal-900 to-white"
                  onClick={handleScrollDownClick}
                >
                  Desliza y crea una camisa tan unica como tu
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
      <motion.button
        className="scroll-down-icon text-lg w-16 h-16 animate-bounce z-10 text-wolfTeal-900"
        animate={{ y: [0, 10] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '0',
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
