import { MyContext } from '@/contexts/MyContext';
import { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BiAddToQueue,
  BiPlusCircle,
  BiSearch,
  BiSolidChevronDown,
} from 'react-icons/bi';
import Cube from '../utils/cube';
import { Button } from '@material-tailwind/react';
import Cubes from '../utils/cubes';
import Color from './formComponents/color';
import Character from './formComponents/character';
import SimpleInput from './formComponents/simpleInput';
import Style from './formComponents/style';
import FormButton from './formComponents/button';

export default function Form() {
  const { shirtColor, setShirtColor } = useContext(MyContext);
  const isDark = ['black'].includes(shirtColor);

  const [character, setCharacter] = useState('Panda');

  const [action, setAction] = useState('Driving');

  const [landscape, setLandscape] = useState('');

  const [artStyle, setArtStyle] = useState('Digital Art');

  return (
    <div
      className={` col-span-3  flex justify-around flex-col transition duration-500`}
      data-aos="fade-right"
    >
      {/* header */}
      <div className="mt-5"></div>
      {/* main form */}
      <div className="align-middle justify-center">
        {/* Color */}
        <div className="grid grid-cols-2 mb-5 transition duration-500">
          {/* Title and buttons */}
          <Color isDark={isDark} setShirtColor={setShirtColor} />
          {/* Cubes */}
          <Cubes isDark={isDark} />
        </div>
        {/* Character */}
        <div className="mb-5">
          <Character
            character={character}
            setCharacter={setCharacter}
            isDark={isDark}
          />
        </div>
        {/* Action */}
        <div className="mb-5">
          <SimpleInput
            title="Accion"
            atribute={action}
            setAtribute={setAction}
            isDark={isDark}
          />
        </div>
        {/* Landscape */}
        <div className="mb-5">
          <SimpleInput
            title="Paisaje"
            atribute={landscape}
            setAtribute={setLandscape}
            isDark={isDark}
          />
        </div>
        {/* Art stile */}
        <div className="mb-5">
          <Style
            artStyle={artStyle}
            setArtStyle={setArtStyle}
            isDark={isDark}
          />
        </div>
      </div>
      {/* generate button */}
      <div className="flex justify-center align-middle ">
        {/* <div className="col-start-2"> */}
        <FormButton isDark={isDark} />
        {/* </div> */}
      </div>
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <input className="hover:border-white focus:border-white" hidden={true} />
      <input className="hover:border-black focus:border-black" hidden={true} />
    </div>
  );
}
