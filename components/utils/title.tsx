interface titleProps {
  text: string;
  isDark?: boolean;
}
export default function Title({ isDark = false, text }: titleProps) {
  return (
    <div
      className={`font-bold title-auto transition duration-500 ${
        isDark ? 'text-white' : ''
      }`}
    >
      {text}
    </div>
  );
}
