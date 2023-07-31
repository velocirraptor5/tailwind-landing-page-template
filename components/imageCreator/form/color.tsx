import Cubes from '@/components/utils/cubes';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import { ShirtColorContext } from '@/contexts/ShirtColorContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export default function Color() {
  const { setShirtColor } = useContext(ShirtColorContext);
  const { setIsDark, isDark } = useContext(DarkBgContext);

  return (
    <motion.div
      className="grid grid-cols-2 transition duration-500"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      {/* Title and buttons */}
      <div>
        {/* Title */}
        <Title text="Color" isDark={isDark} />
        {/* Black button */}
        <button
          className="w-6 h-6 rounded-full bg-black mr-2 shadow-md border border-white hover:bg-gray-800"
          onClick={(e) => {
            e.preventDefault();
            // heightFix();
            setShirtColor('black');
            setIsDark(true);
          }}
        />
        {/* White button */}
        <button
          className="w-6 h-6 rounded-full bg-white shadow-md border border-black hover:bg-slate-100"
          onClick={(e) => {
            e.preventDefault();
            // heightFix();
            setShirtColor('white');
            setIsDark(false);
          }}
        />
      </div>
      {/* Cubes */}
      <Cubes isDark={isDark} />
    </motion.div>
  );
}
