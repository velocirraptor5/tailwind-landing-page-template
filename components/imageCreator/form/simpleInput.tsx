import Cube from '@/components/utils/cube';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

interface InputProps {
  title: string;
  atribute: string;
  setAtribute: Dispatch<SetStateAction<string>>;
}
export default function SimpleInput({
  title,
  atribute,
  setAtribute,
}: InputProps) {
  const { isDark } = useContext(DarkBgContext);
  const [focus, setFocus] = useState(false);
  return (
    <div>
      {/* Title */}
      <Title text={title} isDark={isDark} />
      {/* Form */}
      <div className="flex justify-start">
        {/* Input */}
        <div>
          <input
            type="text"
            className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:${
              isDark ? 'border-white' : 'border-black'
            } hover:${isDark ? 'text-white' : 'text-black'} ${
              focus ? (isDark ? 'text-white' : 'text-black') : 'text-gray-600'
            } focus:ring-transparent focus:${
              isDark ? 'border-white' : 'border-black'
            }`}
            value={atribute}
            onChange={(e) => setAtribute(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
        <Cube isDark={isDark} />
      </div>
    </div>
  );
}
