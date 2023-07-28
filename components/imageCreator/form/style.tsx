import Cube from '@/components/utils/cube';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { objectType } from '@material-tailwind/react/types/components/checkbox';

interface styleProps {
  artStyles: string[];
  setArtStyles: Dispatch<SetStateAction<string[]>>;
}

export default function Style({ artStyles, setArtStyles }: styleProps) {
  const [isArtFocused, setArtFocused] = useState(false);
  const [menu, setMenu] = useState(false);
  const { isDark } = useContext(DarkBgContext);
  const [screenWidth, setScreenWidth] = useState(0);

  const menuAnimation: Variants = {
    hidden: {
      opacity: 1,
      height: 0,
      transition: { duration: 1, staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0, marginTop: 0 },
    visible: {
      y: 0,
      opacity: 1,
      marginTop: 5,
    },
  };
  // const subItem: Variants = {
  //   hidden: { marginLeft: 0 },
  //   // visible: { marginLeft: 'auto' },
  // };

  const newArtStyle = [...artStyles];

  return (
    <div>
      {/* Title */}
      <Title text="Estilo" isDark={isDark} />
      {/* Form */}
      <>
        {/* Input */}
        <div className="flex">
          {/* Input and drop menu */}
          <div
            className={`flex shadow-md border-2 rounded-lg transition duration-500 hover:${
              isDark ? 'border-wolfTeal-900' : 'border-black '
            }  ${
              isArtFocused
                ? isDark
                  ? 'border-wolfTeal-900'
                  : 'border-black'
                : 'border-gray-500'
            } ${menu ? 'border-b-0' : ''}`}
          >
            {/* Input */}
            <input
              type="text"
              className={`text-auto bg-transparent w-full border-none transition duration-500 focus:ring-transparent ${
                isArtFocused
                  ? isDark
                    ? 'text-white'
                    : 'text-black'
                  : 'text-gray-600'
              } hover:${isDark ? 'text-white' : 'text-black '}`}
              onFocus={() => setArtFocused(true)}
              onBlur={() => setArtFocused(false)}
              value={artStyles[0]}
              onChange={(e) => {
                newArtStyle.splice(0, 1, e.target.value);
                setArtStyles(newArtStyle);
              }}
            />
            {/* Drop Menu */}
            <div className="flex justify-center items-center ">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setMenu(!menu);
                }}
                href=""
              >
                <BiSolidChevronDown
                  className={`icon-auto transform ${
                    menu ? 'rotate-180' : 'rotate-0'
                  }  transition duration-500 ease-in-out text-gray-500 hover:${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                />
              </a>
            </div>
          </div>
          {/* Cube */}
          <Cube isDark={isDark} />
        </div>
        {/* Menu */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuAnimation}
              className={`shadow-md border-2 border-gray-600 rounded-lg transition duration-500 overflow-hidden hover:${
                isDark ? 'border-wolfTeal-900' : 'border-black '
              }
              `}
            >
              {artStyles.map((style, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={item}
                    className={`cursor-pointer border-b-2 border-gray-600 text-gray-600 hover:${
                      isDark ? 'border-wolfTeal-900' : 'border-black '
                    } hover:${isDark ? 'text-white' : 'text-black '}`}
                    onClick={(e) => {
                      setMenu(!menu);
                      newArtStyle.splice(0, 1, style);
                      setArtStyles(newArtStyle);
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      // variants={subItem}
                      className="text-auto xl:ml-8 lg:ml-6 md:ml-4 ml-6 "
                    >
                      {style}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </>
      <div className="hidden">
        <input className="hover:border-wolfTeal-900"></input>
      </div>
    </div>
  );
}
