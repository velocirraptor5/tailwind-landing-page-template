interface titleProps {
  text: string;
  isDark?: boolean;
}
export default function Title({ isDark = false, text }: titleProps) {
  return (
    <div
      className={`icon-auto font-varino font-bold transition duration-500 ${
        isDark ? 'text-wolfTeal-900' : ''
      }`}
    >
      {text}
    </div>
  );
}
