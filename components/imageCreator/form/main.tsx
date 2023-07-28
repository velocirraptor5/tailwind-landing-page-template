import { ShirtColorContext } from '@/contexts/ShirtColorContext';
import { useContext, useState } from 'react';
import Color from './color';
import Character from './character';
import SimpleInput from './simpleInput';
import Style from './style';
import FormButton from './button';

export default function Form() {
  const [characters, setCharacters] = useState(['Panda', 'Ferrary']);

  const [action, setAction] = useState('Driving');

  const [landscape, setLandscape] = useState('');

  const [artStyles, setArtStyles] = useState([
    'Digital Art',
    'Digital Art',
    'Pixels',
    'Van Goh',
    'Realistic',
    'Lego',
    'Water color',
    'Abstract',
  ]);

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
        <div className="mb-5">
          <Color />
        </div>
        {/* Character */}
        <div className="mb-5">
          <Character characters={characters} setCharacters={setCharacters} />
        </div>
        {/* Action */}
        <div className="mb-5">
          <SimpleInput
            title="Accion"
            atribute={action}
            setAtribute={setAction}
          />
        </div>
        {/* Landscape */}
        <div className="mb-5">
          <SimpleInput
            title="Paisaje"
            atribute={landscape}
            setAtribute={setLandscape}
          />
        </div>
        {/* Art stile */}
        <div className="mb-5">
          <Style artStyles={artStyles} setArtStyles={setArtStyles} />
        </div>
      </div>
      {/* generate button */}
      <div className="flex justify-center align-middle ">
        {/* <div className="col-start-2"> */}
        <FormButton />
        {/* </div> */}
      </div>
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <input className="hover:border-white focus:border-white" hidden={true} />
      <input className="hover:border-black focus:border-black" hidden={true} />
    </div>
  );
}
