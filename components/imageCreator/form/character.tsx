import Cube from '@/components/utils/cube';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { BiAddToQueue, BiSearch, BiSolidChevronDown } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import PlusMinus from '@/components/utils/plusMinus';

interface characterProps {
  characters: string[];
  setCharacters: Dispatch<SetStateAction<string[]>>;
}

export default function Character({
  characters,
  setCharacters,
}: characterProps) {
  const { isDark } = useContext(DarkBgContext);
  const [charFocused, setCharFocused] = useState<undefined | number>();
  const [charsMenu, setCharMenu] = useState<number[]>([]);
  const [charsSearch, setCharSearch] = useState(characters);

  return (
    <div>
      {/* Title */}
      <Title text="Personaje u Objeto" isDark={isDark} />
      {/* Character N */}
      <AnimatePresence>
        {characters.map((character, index) => {
          const newCharacters = [...characters];
          const newCharactersSearchs = [...charsSearch];
          const isCharFocused = charFocused === index;
          const charMenu = charsMenu.includes(index);

          return (
            <motion.div
              key={index}
              initial={{ height: 0, marginBottom: 0 }}
              animate={{ height: 'auto', marginBottom: 5 }}
              exit={{ height: 0, marginBottom: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
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
                    className={`bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white text-auto' : 'text-auto'}`}
                    onFocus={() => setCharFocused(index)}
                    onBlur={() => setCharFocused(undefined)}
                    value={character}
                    onChange={(e) => {
                      newCharacters.splice(index, 1, e.target.value);
                      setCharacters(newCharacters);
                    }}
                  />
                  {/* Drop Menu Icon*/}
                  <div className={`flex justify-center items-center `}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        // temporal index inside the chars menu
                        const temporalIndex = charsMenu.indexOf(index);
                        if (temporalIndex > -1) {
                          const newCharsMenu = [...charsMenu];
                          newCharsMenu.splice(temporalIndex, 1);
                          setCharMenu(newCharsMenu);
                        } else {
                          setCharMenu(charsMenu.concat([index]));
                        }
                      }}
                      onFocus={() => setCharFocused(index)}
                      onBlur={() => setCharFocused(undefined)}
                      href=""
                    >
                      <BiSolidChevronDown
                        className={`icon-auto transform ${
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
                {/* PlusMinus */}
                <AnimatePresence>
                  {characters.length === 1 ? (
                    <motion.div
                      key={index + 'plus'}
                      className="flex"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <PlusMinus
                        isDark={isDark}
                        onClick={(e) => {
                          setCharacters(characters.concat(['']));
                          setCharSearch(charsSearch.concat(['']));
                        }}
                      />
                    </motion.div>
                  ) : (
                    <AnimatePresence>
                      {index > 0 && (
                        <motion.div
                          key={index + 'minus'}
                          className="flex"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 'auto', opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <PlusMinus
                            isDark={isDark}
                            isPlus={false}
                            onClick={(e) => {
                              const temporalIndex = charsMenu.indexOf(index);
                              if (temporalIndex > -1) {
                                const newCharsMenu = [...charsMenu];
                                newCharsMenu.splice(temporalIndex, 1);
                                setCharMenu(newCharsMenu);
                              }
                              newCharacters.splice(index, 1);
                              newCharactersSearchs.splice(index, 1);
                              setCharacters(newCharacters);
                              setCharSearch(newCharactersSearchs);
                            }}
                          />
                        </motion.div>
                      )}
                      {index === characters.length - 1 && (
                        <motion.div
                          key={index + 'plus'}
                          className="flex"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 'auto', opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <PlusMinus
                            isDark={isDark}
                            onClick={(e) => {
                              setCharacters(characters.concat(['']));
                              setCharSearch(charsSearch.concat(['']));
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </AnimatePresence>
              </div>
              {/* Menu */}
              <AnimatePresence>
                {charMenu && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 1 }}
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
                        className={`text-auto bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
                        onFocus={() => setCharFocused(index)}
                        onBlur={() => setCharFocused(undefined)}
                        value={charsSearch[index]}
                        onChange={(e) => {
                          newCharactersSearchs.splice(index, 1, e.target.value);
                          setCharSearch(newCharactersSearchs);
                        }}
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
                            className={`icon-auto transition duration-500 text-gray-500 hover:${
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
                          isDark ? 'bg-gray-700' : 'bg-gray-200'
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
                        <BiAddToQueue
                          className={`icon-auto transition duration-500`}
                        />
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
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
