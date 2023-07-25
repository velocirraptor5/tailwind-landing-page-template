import Cube from '@/components/utils/cube';
import Plus from '@/components/utils/plus';
import { Dispatch, SetStateAction, useState } from 'react';
import { BiAddToQueue, BiSearch, BiSolidChevronDown } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import Title from '@/components/utils/title';

interface characterProps {
  isDark: boolean;
  character: string;
  setCharacter: Dispatch<SetStateAction<string>>;
}

export default function Character({
  isDark,
  character,
  setCharacter,
}: characterProps) {
  const [isCharFocused, setCharFocused] = useState(false);
  const [charMenu, setCharMenu] = useState(false);
  const [charSearch, setCharSearch] = useState('');

  return (
    <div>
      {/* Title */}
      <Title text="Personaje u Objeto" isDark={isDark} />
      {/* Character N */}
      <div className="">
        {/* Input */}
        <div className="flex flex-row">
          {/* Input and DropMenuIcon */}
          <div
            className={`flex flex-row shadow-md border-2 rounded-lg transition duration-500${
              isDark ? 'text-white' : ''
            } hover:${isDark ? 'border-white' : 'border-black '}  ${
              isCharFocused
                ? isDark
                  ? 'border-white'
                  : 'border-black'
                : 'border-gray-500'
            } ${charMenu ? 'border-b-0' : ''}`}
          >
            {/* Input */}
            <input
              type="text"
              className={`text-xl bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
              onFocus={() => setCharFocused(true)}
              onBlur={() => setCharFocused(false)}
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
            />
            {/* Drop Menu Icon*/}
            <div className={`flex justify-center items-center `}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCharMenu(!charMenu);
                }}
                onFocus={() => setCharFocused(true)}
                onBlur={() => setCharFocused(false)}
                href=""
              >
                <BiSolidChevronDown
                  className={`h4 transform ${
                    charMenu ? 'rotate-180' : 'rotate-0'
                  } transition duration-500 ease-in-out text-gray-500 hover:${
                    isDark ? 'text-white' : 'text-black'
                  } `}
                />
              </a>
            </div>
          </div>
          {/* Cube */}
          <Cube isDark={isDark} />
          {/* Plus */}
          <Plus isDark={isDark} />
        </div>
        {/* Menu */}
        <AnimatePresence>
          {charMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5 }}
              className={`shadow-md border-2 rounded-lg transition duration-500 overflow-hidden ${
                isDark ? 'text-white' : ''
              } hover:${isDark ? 'border-white' : 'border-black '}  ${
                isCharFocused
                  ? isDark
                    ? 'border-white'
                    : 'border-black'
                  : 'border-gray-500'
              }`}
            >
              {/* Input and SearchIcon */}
              <div
                className={`flex m-3 shadow-md border-2 rounded-lg transition duration-500 ${
                  isDark ? 'text-white' : ''
                } hover:${isDark ? 'border-white' : 'border-black '}  ${
                  isCharFocused
                    ? isDark
                      ? 'border-white'
                      : 'border-black'
                    : 'border-gray-500'
                }`}
              >
                {/* Input */}
                <input
                  type="text"
                  className={`text-xl bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
                  onFocus={() => setCharFocused(true)}
                  onBlur={() => setCharFocused(false)}
                  value={charSearch}
                  onChange={(e) => setCharSearch(e.target.value)}
                />
                {/* Search */}
                <div className="flex justify-center items-center">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    href=""
                  >
                    <BiSearch
                      className={`h4 transition duration-500 text-gray-500 hover:${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    />
                  </a>
                </div>
              </div>
              {/* Insert image */}
              <div className="grid grid-cols-2 ">
                <a
                  className={`mb-3 mx-3 flex justify-center items-center border-2 border-dotted aspect-square transition duration-500 text-gray-500 ${
                    isDark ? 'text-white bg-gray-700' : 'bg-gray-200'
                  } hover:${
                    isDark
                      ? 'border-white text-white'
                      : 'border-black text-black'
                  }  ${
                    isCharFocused
                      ? isDark
                        ? 'border-white'
                        : 'border-black'
                      : 'border-gray-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  href=""
                >
                  <BiAddToQueue className={`h4 transition duration-500`} />
                </a>
                <div
                  className={`mb-3 mx-3 border-2 transition duration-500 ${
                    isCharFocused
                      ? isDark
                        ? 'border-white'
                        : 'border-black'
                      : 'border-gray-500'
                  } hover:${isDark ? 'border-white' : 'border-black'} `}
                >
                  b
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
