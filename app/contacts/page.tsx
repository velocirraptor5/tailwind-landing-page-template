'use client';
import Image from 'next/image';
import TestimonialImage from '@/public/images/testimonial.jpg';
import Logo from '@/components/ui/Logo';
import { MouseEvent, useEffect, useState } from 'react';
import { FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import AOS from 'aos';
import { Button, Input } from '@material-tailwind/react';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const formFilled = name && email && city && message;

  const handleMouseDown = (event: MouseEvent) => {
    event.currentTarget.classList.add('scale-90');
  };

  const handleMouseUp = (event: MouseEvent) => {
    event.currentTarget.classList.remove('scale-90');
  };

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="relative mt-10">
      {/* Illustration behind content */}
      <div className="absolute w-screen h-screen z-0" data-aos="zoom-y-out">
        <Logo opacity="30" />
      </div>
      <div className=" relative flex flex-col justify-evenly z-10">
        {/* Title */}
        <div className="text-center m-10">
          <div className="title-auto font-varino font-bold text-wolfTeal-900">
            CONTACTO
          </div>
        </div>
        {/* Contacts */}
        <div className="flex justify-evenly m-10">
          {/* Phone */}
          <div className="flex text-wolfTeal-100 hover:text-wolfTeal-900 items-center cursor-pointer">
            <FaPhone className={`icon-auto mr-3 rotate-90`} />
            <div>
              <div className="icon-auto font-varino font-bold ">llamanos</div>
              <div className="text-auto">+57 300 1234567</div>
            </div>
          </div>
          {/* Address */}
          <div className="flex text-wolfTeal-100 hover:text-wolfTeal-900 items-center cursor-pointer">
            <FaLocationArrow className={`icon-auto mr-3`} />
            <div>
              <div className="icon-auto font-varino font-bold ">Dirección</div>
              <div className="text-auto">Manizales - Caldas - Colombia</div>
            </div>
          </div>
          {/* Email */}
          <div className="flex text-wolfTeal-100 hover:text-wolfTeal-900 items-center cursor-pointer">
            <MdMail className={`icon-auto mr-3`} />
            <div>
              <div className="icon-auto font-varino font-bold ">Email</div>
              <div className="text-auto">wolfDI@gmail.com</div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="m-10">
          <div className="grid grid-cols-2 gap-3 m-3">
            <input
              type="text"
              placeholder="Nombre"
              className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:border-wolfTeal-900 hover:text-white focus:text-white text-gray-600 focus:ring-transparent focus:border-wolfTeal-900`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ciudad"
              className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:border-wolfTeal-900 hover:text-white focus:text-white text-gray-600 focus:ring-transparent focus:border-wolfTeal-900 `}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="m-3">
            <input
              type="text"
              placeholder="Correo Electronico"
              className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:border-wolfTeal-900 hover:text-white focus:text-white text-gray-600 focus:ring-transparent focus:border-wolfTeal-900`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="m-3">
            <textarea
              placeholder="Mensaje"
              className={`shadow-md border-2 rounded-lg bg-transparent w-full transition duration-500 text-auto  hover:border-wolfTeal-900 hover:text-white focus:text-white text-gray-600 focus:ring-transparent focus:border-wolfTeal-900`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        {/* Button */}
        <div className="m-10 self-center">
          <Button
            className={`text-auto font-varino ${
              formFilled ? 'text-wolfTeal-900' : 'text-gray-600'
            }  border-2 ${
              formFilled ? 'border-wolfTeal-900' : 'border-gray-600'
            } `}
            onMouseDown={formFilled ? handleMouseDown : undefined}
            onMouseUp={formFilled ? handleMouseUp : undefined}
            onMouseOut={formFilled ? handleMouseUp : undefined}
          >
            <p className="icon-auto mx-5">Enviar</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
