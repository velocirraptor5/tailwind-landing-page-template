import { FaCube } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface CubeProps extends React.HTMLAttributes<HTMLAnchorElement> {
  isDark: boolean;
}

export default function Cube({ isDark, ...props }: CubeProps) {
  return (
    <div className="flex justify-center items-center ml-3 ">
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        {...props}
      >
        <motion.button
          className="flex justify-center items-center"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            borderRadius: '100%',
          }}
        >
          <FaCube
            className={`icon-auto transition duration-500 text-gray-500 hover:${
              isDark ? 'text-wolfTeal-900' : 'text-black'
            }`}
          />
        </motion.button>
      </a>
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <a href="" hidden={true}>
        <FaCube className={'text-gray-500 hover:text-wolfTeal-900'} />
        <FaCube className={'text-gray-500 hover:text-black'} />
      </a>
    </div>
  );
}
