import { FaCube } from 'react-icons/fa';

interface CubeProps {
  isDark: boolean;
}

export default function Cube({ isDark }: CubeProps) {
  return (
    <div className="flex justify-center items-center ml-3 ">
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        href=""
      >
        <FaCube
          className={`h4 transition duration-500 text-gray-500 hover:${
            isDark ? 'text-white' : 'text-black'
          }`}
        />
      </a>
    </div>
  );
}
