import Cube from '@/components/utils/cube';
import Title from '@/components/utils/title';
import { Dispatch, SetStateAction, useState } from 'react';
import { BiSolidChevronDown } from 'react-icons/bi';

interface styleProps {
  isDark: boolean;
  artStyle: string;
  setArtStyle: Dispatch<SetStateAction<string>>;
}

export default function Style({ isDark, artStyle, setArtStyle }: styleProps) {
  const [isArtFocused, setArtFocused] = useState(false);

  return (
    <div>
      {/* Title */}
      <Title text="Estilo" isDark={isDark} />
      {/* Form */}
      <div className="flex">
        {/* Input and menu */}
        <div
          className={`flex shadow-md border-2 rounded-lg transition duration-500${
            isDark ? 'text-white' : ''
          } hover:${isDark ? 'border-white' : 'border-black '}  ${
            isArtFocused
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
            onFocus={() => setArtFocused(true)}
            onBlur={() => setArtFocused(false)}
            value={artStyle}
            onChange={(e) => setArtStyle(e.target.value)}
          />
          {/* Drop Menu */}
          <div className="flex justify-center items-center ">
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              href=""
            >
              <BiSolidChevronDown
                className={`h4 transition duration-500 text-gray-500 hover:${
                  isDark ? 'text-white' : 'text-black'
                }`}
              />
            </a>
          </div>
        </div>
        <Cube isDark={isDark} />
      </div>
    </div>
  );
}
