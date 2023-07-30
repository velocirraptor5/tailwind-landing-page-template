import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CubeProps extends React.HTMLAttributes<HTMLAnchorElement> {
  isDark: boolean;
  isPlus?: boolean;
}

export default function PlusMinus({
  isDark,
  isPlus = true,
  ...props
}: CubeProps) {
  return (
    <div className="flex justify-center items-center ml-3 ">
      <a {...props}>
        <motion.button
          className="flex justify-center items-center"
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{
            scale: 0.8,
            rotate: -180,
          }}
        >
          {isPlus ? (
            <BiPlusCircle
              className={`icon-auto transition duration-500 text-gray-500 hover:${
                isDark ? 'text-wolfTeal-900' : 'text-black'
              }`}
            />
          ) : (
            <BiMinusCircle
              className={`icon-auto transition duration-500 text-gray-500 hover:${
                isDark ? 'text-wolfTeal-900' : 'text-black'
              }`}
            />
          )}
        </motion.button>
      </a>
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <a href="" hidden={true}>
        <BiPlusCircle className={'text-gray-500 hover:text-white'} />
        <BiPlusCircle className={'text-gray-500 hover:text-black'} />
      </a>
    </div>
  );
}
