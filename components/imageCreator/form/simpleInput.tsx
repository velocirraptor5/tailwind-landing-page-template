import Cube from '@/components/utils/cube';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
    >
      {/* Title */}
      <Title text={title} isDark={isDark} />
      {/* Form */}
      <div className="flex justify-start">
        {/* Input */}
        <div>
          <input
            type="text"
            className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:${
              isDark ? 'border-wolfTeal-900' : 'border-black'
            } hover:${isDark ? 'text-white' : 'text-black'} ${
              focus ? (isDark ? 'text-white' : 'text-black') : 'text-gray-600'
            } focus:ring-transparent focus:${
              isDark ? 'border-wolfTeal-900' : 'border-black'
            }`}
            value={atribute}
            onChange={(e) => setAtribute(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
        <Cube isDark={isDark} />
      </div>
      <input hidden={true} className="focus:border-wolfTeal-900"></input>
    </motion.div>
  );
}
