'use client';
import { createContext, useState } from 'react';

interface ShirtColorContextProps {
  shirtColor: string;
  setShirtColor: (color: string) => void;
}

export const ShirtColorContext = createContext<ShirtColorContextProps>({
  shirtColor: 'white',
  setShirtColor: () => {},
});
interface IColorProviderProps {
  children:
    | React.ReactElement<{ color: string }>
    | React.ReactElement<{ color: string }>[];
}

export const ColorProvider: React.FC<IColorProviderProps> = ({ children }) => {
  const [shirtColor, setShirtColor] = useState('white');

  return (
    <ShirtColorContext.Provider value={{ shirtColor, setShirtColor }}>
      {children}
    </ShirtColorContext.Provider>
  );
};
