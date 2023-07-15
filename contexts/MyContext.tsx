'use client';
import { createContext, useState } from 'react';

interface MyContextProps {
  shirtColor: string;
  setShirtColor: (color: string) => void;
}

export const MyContext = createContext<MyContextProps>({
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
    <MyContext.Provider value={{ shirtColor, setShirtColor }}>
      {children}
    </MyContext.Provider>
  );
};
