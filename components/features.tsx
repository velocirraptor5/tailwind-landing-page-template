'use client';

import { useState, useRef, useEffect, useContext } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { MyContext } from '@/contexts/MyContext';
import { FaCube, FaCubes } from 'react-icons/fa';
import {
  BiAddToQueue,
  BiPlusCircle,
  BiSearch,
  BiSolidChevronDown,
} from 'react-icons/bi';

export default function Features() {
  const { shirtColor, setShirtColor } = useContext(MyContext);

  const [character, setCharacter] = useState('Panda');
  const [isCharFocused, setCharFocused] = useState(false);
  const [charMenu, setCharMenu] = useState(false);
  const [charSearch, setCharSearch] = useState('');

  const [action, setAction] = useState('Driving');

  const [landscape, setLandscape] = useState('');

  const [artStile, setArtStile] = useState('Digital Art');
  const [isArtFocused, setArtFocused] = useState(false);

  const images = [
    { id: 1, src: '/images/_fa334aad-c073-43b4-9c78-8c57c98e3621.jpg' },
    { id: 2, src: '/images/_3f7c7b5d-8686-4fab-a528-bb6b29518aab.jpg' },
    { id: 3, src: '/images/_8eaf0f7a-c515-4339-8ff6-dfdfe2bbac9a.jpg' },
    { id: 4, src: '/images/_f5f87b4f-ea75-4e0f-b3c7-1af58dafabc9.jpg' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const isDark = ['black'].includes(shirtColor);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className={`absolute inset-0  pointer-events-none mb-16`}
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-blue-600 transform -translate-y-1/2"></div>

      <div className={`mx-auto px-4 sm:px-6`}>
        <div
          className={`rounded-lg shadow-lg shadow-gray-400 transition duration-500 
            ${
              ['white', 'black'].includes(shirtColor)
                ? 'bg-' + shirtColor
                : 'bg-' + shirtColor + '-400'
            } 
            `}
        >
          {/* Section header */}
          <p className="text-sm text-gray-600 mx-3">
            crea tu diseño con ayuda de una IA.
          </p>

          {/* Section Content */}
          <div className="md:grid grid-cols-9 gap-4 mx-3">
            {/* Form */}
            <div
              className="col-span-3 flex-col items-center"
              data-aos="fade-right"
            >
              {/* Color */}
              <div className="grid grid-cols-2 mb-5">
                {/* Title and buttons */}
                <div>
                  {/* Title */}
                  <h2
                    className={`h2 transition duration-500 ${
                      isDark ? 'text-white' : ''
                    }`}
                  >
                    Color
                  </h2>
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
                {/* Cubes */}
                <div className=" flex justify-center items-center ">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    href=""
                    className={`h2 transition duration-500 ${
                      isDark ? 'text-white' : ''
                    }`}
                  >
                    <FaCubes className="h2 " />
                  </a>
                </div>
              </div>
              {/* Character */}
              <div className="mb-5">
                {/* Title */}
                <h2
                  className={`h2 transition duration-500 ${
                    isDark ? 'text-white' : ''
                  }`}
                >
                  Personaje u Objeto
                </h2>
                {/* Character N */}
                <div className="">
                  {/* Input */}
                  <div className="flex flex-row">
                    {/* Input and DropMenuIcon */}
                    <div
                      className={`flex flex-row shadow-md border-2 rounded-lg transition duration-500${
                        isDark ? 'text-white' : ''
                      } hover:${isDark ? 'border-white' : 'border-black '}  ${
                        isCharFocused
                          ? isDark
                            ? 'border-white'
                            : 'border-black'
                          : 'border-gray-500'
                      } ${charMenu ? 'border-b-0' : ''}`}
                    >
                      {/* Input */}
                      <input
                        type="text"
                        className={`text-xl bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
                        onFocus={() => setCharFocused(true)}
                        onBlur={() => setCharFocused(false)}
                        value={character}
                        onChange={(e) => setCharacter(e.target.value)}
                      />
                      {/* Drop Menu Icon*/}
                      <div className={`flex justify-center items-center `}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            setCharMenu(!charMenu);
                          }}
                          onFocus={() => setCharFocused(true)}
                          onBlur={() => setCharFocused(false)}
                          href=""
                        >
                          {charMenu ? (
                            <BiSolidChevronDown
                              className={`h4 transform rotate-180 transition duration-500 ease-in-out text-gray-500 hover:${
                                isDark ? 'text-white' : 'text-black'
                              } `}
                            />
                          ) : (
                            <BiSolidChevronDown
                              className={`h4 transform rotate-0 transition duration-500 ease-in-out text-gray-500 hover:${
                                isDark ? 'text-white' : 'text-black'
                              } `}
                            />
                          )}
                        </a>
                      </div>
                    </div>
                    {/* Cube */}
                    <div className="flex justify-center items-center mx-3 ">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href=""
                      >
                        <FaCube
                          className={`h4 transition duration-500 ${
                            isDark ? 'text-white' : ''
                          }`}
                        />
                      </a>
                    </div>
                    {/* Plus */}
                    <div className="flex justify-center items-center">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href=""
                      >
                        <BiPlusCircle
                          className={`h4 transition duration-500 ${
                            isDark ? 'text-white' : ''
                          }`}
                        />
                      </a>
                    </div>
                  </div>
                  {/* Menu */}
                  <Transition
                    appear={true}
                    show={charMenu}
                    enter="transition-opacity duration-900 transform -translate-y-full opacity-0"
                    enterFrom="opacity-0 transform -translate-y-full"
                    enterTo="opacity-100 transform translate-y-0"
                    leave="transition-opacity duration-900 "
                    leaveFrom="opacity-100 transform "
                    leaveTo="opacity-0 transform "
                  >
                    {/* SearchInput and InsertImage */}
                    <div
                      className={`shadow-md border-2 rounded-lg transition duration-500 ${
                        isDark ? 'text-white' : ''
                      } hover:${isDark ? 'border-white' : 'border-black '}  ${
                        isCharFocused
                          ? isDark
                            ? 'border-white'
                            : 'border-black'
                          : 'border-gray-500'
                      }`}
                    >
                      {/* Input and SearchIcon */}
                      <div
                        className={`flex m-3 shadow-md border-2 rounded-lg transition duration-500 ${
                          isDark ? 'text-white' : ''
                        } hover:${isDark ? 'border-white' : 'border-black '}  ${
                          isCharFocused
                            ? isDark
                              ? 'border-white'
                              : 'border-black'
                            : 'border-gray-500'
                        }`}
                      >
                        {/* Input */}
                        <input
                          type="text"
                          className={`text-xl bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
                          onFocus={() => setCharFocused(true)}
                          onBlur={() => setCharFocused(false)}
                          value={charSearch}
                          onChange={(e) => setCharSearch(e.target.value)}
                        />
                        {/* Search */}
                        <div className="flex justify-center items-center">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            href=""
                          >
                            <BiSearch
                              className={`h4 transition duration-500 text-gray-500 hover:${
                                isDark ? 'text-white' : 'text-black'
                              }`}
                            />
                          </a>
                        </div>
                      </div>
                      {/* Insert image */}
                      <div className="grid grid-cols-2 ">
                        <a
                          className={`mb-3 mx-3 flex justify-center items-center border-2 border-dotted aspect-square transition duration-500 text-gray-500 ${
                            isDark ? 'text-white bg-gray-700' : 'bg-gray-200'
                          } hover:${
                            isDark
                              ? 'border-white text-white'
                              : 'border-black text-black'
                          }  ${
                            isCharFocused
                              ? isDark
                                ? 'border-white'
                                : 'border-black'
                              : 'border-gray-500'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href=""
                        >
                          <BiAddToQueue
                            className={`h4 transition duration-500`}
                          />
                        </a>
                        <div
                          className={`mb-3 mx-3 border-2 transition duration-500 ${
                            isCharFocused
                              ? isDark
                                ? 'border-white'
                                : 'border-black'
                              : 'border-gray-500'
                          } hover:${isDark ? 'border-white' : 'border-black'} `}
                        >
                          b
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
              {/* Action */}
              <div className="mb-5">
                {/* Title */}
                <h2
                  className={`h2 transition duration-500 ${
                    isDark ? 'text-white' : ''
                  }`}
                >
                  Accion
                </h2>
                {/* Form */}
                <div className="flex justify-start">
                  {/* Input */}
                  <div>
                    <input
                      type="text"
                      className={`shadow-md border-2 rounded-lg text-xl bg-transparent w-full transition duration-500
                        ${isDark ? 'text-white' : ''}
                        hover:${isDark ? 'border-white' : 'border-black'}
                        focus:ring-transparent
                        focus:${isDark ? 'border-white' : 'border-black'}
                        `}
                      value={action}
                      onChange={(e) => setAction(e.target.value)}
                    />
                  </div>
                  {/* Cube */}
                  <div className="flex justify-center items-center ml-3 ">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href=""
                    >
                      <FaCube
                        className={`h4 transition duration-500 text-gray-500 hover:${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Landscape */}
              <div className="mb-5">
                {/* Title */}
                <h2
                  className={`h2 transition duration-500 ${
                    isDark ? 'text-white' : ''
                  }`}
                >
                  Paisaje
                </h2>
                {/* Form */}
                <div className="flex justify-start">
                  {/* Input */}
                  <div>
                    <input
                      type="text"
                      className={`shadow-md border-2 rounded-lg text-xl bg-transparent w-full transition duration-500
                        ${isDark ? 'text-white' : ''}
                        hover:${isDark ? 'border-white' : 'border-black'}
                        focus:ring-transparent
                        focus:${isDark ? 'border-white' : 'border-black'}
                        `}
                      value={landscape}
                      onChange={(e) => setLandscape(e.target.value)}
                    />
                  </div>
                  {/* Cube */}
                  <div className="flex justify-center items-center ml-3 ">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href=""
                    >
                      <FaCube
                        className={`h4 transition duration-500 text-gray-500 hover:${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Art stile */}
              <div className="mb-5">
                {/* Title */}
                <h2
                  className={`h2 transition duration-500 ${
                    isDark ? 'text-white' : ''
                  }`}
                >
                  Estilo
                </h2>
                {/* Form */}
                <div className="flex">
                  {/* Input and menu */}
                  <div
                    className={`flex shadow-md border-2 rounded-lg transition duration-500${
                      isDark ? 'text-white' : ''
                    } hover:${isDark ? 'border-white' : 'border-black '}  ${
                      isArtFocused
                        ? isDark
                          ? 'border-white'
                          : 'border-black'
                        : 'border-gray-500'
                    }`}
                  >
                    {/* Input */}
                    <input
                      type="text"
                      className={`text-xl bg-transparent w-full border-none transition duration-500 focus:ring-transparent
                          ${isDark ? 'text-white' : ''}`}
                      onFocus={() => setArtFocused(true)}
                      onBlur={() => setArtFocused(false)}
                      value={artStile}
                      onChange={(e) => setArtStile(e.target.value)}
                    />
                    {/* Drop Menu */}
                    <div className="flex justify-center items-center ">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href=""
                      >
                        <BiSolidChevronDown
                          className={`h4 transition duration-500 text-gray-500 hover:${
                            isDark ? 'text-white' : 'text-black'
                          }`}
                        />
                      </a>
                    </div>
                  </div>
                  {/* Cube */}
                  <div className="flex justify-center items-center ml-3 ">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      href=""
                    >
                      <FaCube
                        className={`h4 transition duration-500 text-gray-500 hover:${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="col-span-6 ">
              {/* <div className="flex aspect-square  justify-center align-middle">
                
              </div> */}

              <div>
                <Transition
                  show={true}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="opacity-0 scale-95 translate-y-full"
                  enterTo="opacity-100 scale-100 translate-y-0"
                  leave="transition ease-in duration-200 transform shrink"
                  leaveFrom="opacity-100 scale-100 translate-y-0"
                  leaveTo="opacity-0 scale-95 translate-y-full"
                >
                  {(ref) => (
                    <div ref={ref}>
                      <Image
                        src={selectedImage.src}
                        width={500}
                        height={500}
                        alt="selcted"
                      />
                    </div>
                  )}
                </Transition>
              </div>
              <div>
                {images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    style={{
                      border: 'none',
                      margin: '10px',
                      padding: '0',
                      cursor: 'pointer',
                    }}
                  >
                    <Transition
                      show={selectedImage.id !== image.id}
                      enter="transition ease-out duration-300 transform"
                      enterFrom="opacity-0 scale-95 translate-y-full"
                      enterTo="opacity-100 scale-100 translate-y-0"
                      leave="transition ease-in duration-200 transform shrink"
                      leaveFrom="opacity-100 scale-100 translate-y-0"
                      leaveTo="opacity-0 scale-95 translate-y-full"
                    >
                      {(ref) => (
                        <div ref={ref}>
                          <Image
                            src={image.src}
                            width={150}
                            height={150}
                            alt="preview"
                          />
                        </div>
                      )}
                    </Transition>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Transition
                  show={!!selectedImage}
                  enter="transition-all duration-500 ease-in-out"
                  enterFrom="transform scale-y-0 translate-y-full"
                  enterTo="transform scale-y-100 translate-y-0"
                  leave="transition-all duration-500 ease-in-out"
                  leaveFrom="transform scale-y-100 translate-y-0"
                  leaveTo="transform scale-y-0 translate-y-full"
                >
                  <img
                    src={selectedImage.src}
                    alt={`Selected image ${selectedImage.id}`}
                    className="max-h-full max-w-full"
                  />
                </Transition>
  
                <div className="flex flex-wrap justify-center">
                  {images.map((image) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className={`w-32 h-32 m-2 cursor-pointer ${
                        selectedImage.id === image.id
                          ? 'border-red-500 border-4'
                          : ''
                      }`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div> */}
      {/* ghost elementes */}
      {/* es importante esta parte debido a que hay momentos en que el css no es carga adecuadamente en los condicionales de antes y esto fuerza a cargar todas las variantes */}
      <input className="hover:border-white focus:border-white" hidden={true} />
      <input className="hover:border-black focus:border-black" hidden={true} />
      <a href="" hidden={true}>
        <FaCube className={'text-gray-500 hover:text-white'} />
        <FaCube className={'text-gray-500 hover:text-black'} />
        {/* <BiSolidChevronDown
          className={`h4 transform rotate-180 transition duration-500 ease-in-out text-gray-500  `}
        />
        <BiSolidChevronUp
          className={`h4 transform rotate-0 transition duration-500 ease-in-out text-gray-500 `}
        /> */}
      </a>
    </section>
  );
}
