import { DarkBgContext } from '@/contexts/DarkBgContext';
import { Button } from '@material-tailwind/react';
import { MouseEvent, useContext } from 'react';
import { motion } from 'framer-motion';

export default function FormButton() {
  const { isDark } = useContext(DarkBgContext);
  const handleMouseDown = (event: MouseEvent) => {
    event.currentTarget.classList.add('scale-90');
  };

  const handleMouseUp = (event: MouseEvent) => {
    event.currentTarget.classList.remove('scale-90');
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
    >
      <Button
        className={`icon-auto font-varino font-bold ${
          isDark ? 'text-wolfTeal-900' : 'text-black'
        } border-2 ${isDark ? 'border-wolfTeal-900' : 'border-black'}`}
        // className={`btn mb-5  ${
        //   isDark
        //     ? 'text-black bg-white  hover:bg-slate-200 '
        //     : 'text-white bg-wolfBg-900  hover:bg-wolfBg-700 '
        // }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      >
        <p className="icon-auto mx-5">crear</p>
      </Button>
    </motion.div>
  );
}
