import { Button } from '@material-tailwind/react';

interface buttonProps {
  isDark: boolean;
}

export default function FormButton({ isDark }: buttonProps) {
  return (
    <div>
      <Button
        className={`btn mb-5 ${
          isDark
            ? 'text-black bg-white  hover:bg-slate-200 '
            : 'bg-wolfBg-900  hover:bg-wolfBg-700 '
        }  `}
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
        crear
      </Button>
    </div>
  );
}
