import { HtmlProps } from 'next/dist/shared/lib/html-context';
import { FaCube } from 'react-icons/fa';

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
        <FaCube
          className={`h4 transition duration-500 text-gray-500 hover:${
            isDark ? 'text-white' : 'text-black'
          }`}
        />
      </a>
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <a href="" hidden={true}>
        <FaCube className={'text-gray-500 hover:text-white'} />
        <FaCube className={'text-gray-500 hover:text-black'} />
      </a>
    </div>
  );
}
