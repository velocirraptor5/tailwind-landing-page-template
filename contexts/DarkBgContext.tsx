'use client';
import { createContext, useState } from 'react';

interface DarkBgContextProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const DarkBgContext = createContext<DarkBgContextProps>({
  isDark: false,
  setIsDark: () => {},
});
interface IDarkBgProviderProps {
  children:
    | React.ReactElement<{ isDark: boolean }>
    | React.ReactElement<{ isDark: boolean }>[];
}

export const DarkBgProvider: React.FC<IDarkBgProviderProps> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkBgContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkBgContext.Provider>
  );
};
