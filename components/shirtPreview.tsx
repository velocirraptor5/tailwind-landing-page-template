'use client';
import Image from 'next/image';
import ShirtSVG from '@/components/ui/ShirtSVG';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ShirtColorContext } from '@/contexts/ShirtColorContext';

export default function ShirtPreview() {
  const { shirtColor } = useContext(ShirtColorContext);
  const isDark = ['black'].includes(shirtColor);
  return (
    <section className="relative">
      <motion.div
        className="flex flex-col text-center justify-center items-center h-screen w-screen overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      >
        <div
          style={{
            width: '80%',
            height: '80%',
          }}
        >
          <ShirtSVG animate={true} color={shirtColor} isDark={isDark} />
        </div>
      </motion.div>
    </section>
  );
}
