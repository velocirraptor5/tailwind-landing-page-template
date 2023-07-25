interface titleProps {
  text: string;
  isDark?: boolean;
}
export default function Title({ isDark = false, text }: titleProps) {
  return (
    <div
      className={`font-bold xl:text-3xl lg:text-2xl  md:text-xl text-lg transition duration-500 ${
        isDark ? 'text-white' : ''
      }`}
    >
      {text}
    </div>
  );
}
