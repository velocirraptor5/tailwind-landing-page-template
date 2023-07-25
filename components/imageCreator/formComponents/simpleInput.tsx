import Cube from '@/components/utils/cube';
import Title from '@/components/utils/title';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  title: string;
  isDark: boolean;
  atribute: string;
  setAtribute: Dispatch<SetStateAction<string>>;
}
export default function SimpleInput({
  title,
  isDark,
  atribute,
  setAtribute,
}: InputProps) {
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
            className={`shadow-md border-2 rounded-lg text-xl bg-transparent w-full transition duration-500
                        ${isDark ? 'text-white' : ''}
                        hover:${isDark ? 'border-white' : 'border-black'}
                        focus:ring-transparent
                        focus:${isDark ? 'border-white' : 'border-black'}
                        `}
            value={atribute}
            onChange={(e) => setAtribute(e.target.value)}
          />
        </div>
        <Cube isDark={isDark} />
      </div>
    </div>
  );
}
