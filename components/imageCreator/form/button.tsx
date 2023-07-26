import { DarkBgContext } from '@/contexts/DarkBgContext';
import { Button } from '@material-tailwind/react';
import { MouseEvent, useContext } from 'react';

export default function FormButton() {
  const { isDark } = useContext(DarkBgContext);
  const handleMouseDown = (event: MouseEvent) => {
    event.currentTarget.classList.add('scale-90');
  };

  const handleMouseUp = (event: MouseEvent) => {
    event.currentTarget.classList.remove('scale-90');
  };
  return (
    <div>
      <Button
        className={`btn mb-5  ${
          isDark
            ? 'text-black bg-white  hover:bg-slate-200 '
            : 'text-white bg-wolfBg-900  hover:bg-wolfBg-700 '
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
      >
        <p className="text-auto">crear</p>
      </Button>
    </div>
  );
}
