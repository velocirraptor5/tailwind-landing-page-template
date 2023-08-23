import Cubes from '@/components/utils/cubes';
import Title from '@/components/utils/title';
import { DarkBgContext } from '@/contexts/DarkBgContext';
import { ShirtColorContext } from '@/contexts/ShirtColorContext';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import ShirtSVG from '@/components/ui/ShirtSVG';

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
        <div className="flex">
          <motion.div
            className="xl:w-12 lg:w-10 md:w-6 w-6 aspect-square mr-2 rounded-md hover:bg-gradient-to-br from-wolfTeal-900 to-transparent cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              // heightFix();
              setShirtColor('black');
              setIsDark(true);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShirtSVG color="black" isDark={true} />
          </motion.div>
          <motion.div
            className="xl:w-12 lg:w-10 md:w-6 w-6 aspect-square mr-2 rounded-md hover:bg-gradient-to-br from-wolfTeal-900 to-transparent cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              // heightFix();
              setShirtColor('white');
              setIsDark(false);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShirtSVG color="white" isDark={false} />
          </motion.div>
        </div>
        {/* <button
          className="w-6 h-6 rounded-full bg-black mr-2 shadow-md border border-white hover:bg-gray-800"
          onClick={(e) => {
            e.preventDefault();
            // heightFix();
            setShirtColor('black');
            setIsDark(true);
          }}
        />
        <button
          className="w-6 h-6 rounded-full bg-white shadow-md border border-black hover:bg-slate-100"
          onClick={(e) => {
            e.preventDefault();
            // heightFix();
            setShirtColor('white');
            setIsDark(false);
          }}
        /> */}
      </div>
      {/* Cubes */}
      <Cubes isDark={isDark} />
    </motion.div>
  );
}
