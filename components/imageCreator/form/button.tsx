import { DarkBgContext } from '@/contexts/DarkBgContext';
import { Button } from '@material-tailwind/react';
import { useContext } from 'react';

export default function FormButton() {
  const { isDark } = useContext(DarkBgContext);
  return (
    <div>
      <Button
        className={`btn mb-5  ${
          isDark
            ? 'text-black bg-white  hover:bg-slate-200 '
            : 'text-white bg-wolfBg-900  hover:bg-wolfBg-700 '
        }`}
        onMouseDown={(e) => {
          e.currentTarget.classList.add('scale-90');
        }}
        onMouseUp={(e) => {
          e.currentTarget.classList.remove('scale-90');
        }}
        onMouseOut={(e) => {
          e.currentTarget.classList.remove('scale-90');
        }}
      >
        <p className="text-auto">crear</p>
      </Button>
    </div>
  );
}
