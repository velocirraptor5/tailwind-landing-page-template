'use client';

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import SmallLogo from './smallLogo';
import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

interface headerProps {
  mainPage?: boolean;
}

export default function Header({ mainPage = false }: headerProps) {
  const [top, setTop] = useState<boolean>(false);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-80 transition duration-500 ease-in-out ${
        top ? '' : 'bg-wolfBg-900 backdrop-blur-sm shadow-lg'
      }`}
    >
      <motion.div className="h-2 bg-wolfTeal-900" style={{ scaleX }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          {mainPage && (
            <AnimatePresence>
              {!top && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                    transition: { duration: 1 },
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 1 },
                    marginTop: 0,
                    y: 10,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  // className={`shrink-0 mr-4 rounded-full w-20 h-20 `}
                  className={`font-madsense cursor-pointer icon-auto bg-clip-text text-transparent bg-gradient-to-r from-wolfTeal-900 to-white`}
                >
                  <Link href="">Wolf DI</Link>
                </motion.div>
              )}
            </AnimatePresence>
          )}
          {!mainPage && (
            <div
              className={`font-madsense cursor-pointer icon-auto bg-clip-text text-transparent bg-gradient-to-r from-wolfTeal-900 to-white`}
            >
              <Link href="">Wolf DI</Link>
            </div>
          )}

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium  text-gray-600 hover:text-wolfTeal-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
