import Title from '@/components/utils/title';

interface ColorProps {
  isDark: boolean;
  setShirtColor: (color: string) => void;
}

export default function Color({ isDark, setShirtColor }: ColorProps) {
  return (
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
        }}
      />
      {/* White button */}
      <button
        className="w-6 h-6 rounded-full bg-white shadow-md border border-black hover:bg-slate-100"
        onClick={(e) => {
          e.preventDefault();
          // heightFix();
          setShirtColor('white');
        }}
      />
    </div>
  );
}
