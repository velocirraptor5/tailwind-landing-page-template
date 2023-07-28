import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Images() {
  const images = [
    { id: 1, src: '/images/_fa334aad-c073-43b4-9c78-8c57c98e3621.jpg' },
    { id: 2, src: '/images/_3f7c7b5d-8686-4fab-a528-bb6b29518aab.jpg' },
    { id: 3, src: '/images/_8eaf0f7a-c515-4339-8ff6-dfdfe2bbac9a.jpg' },
    { id: 4, src: '/images/_f5f87b4f-ea75-4e0f-b3c7-1af58dafabc9.jpg' },
  ];

  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => setScreenWidth(window.innerWidth);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  }, []);

  const [mainImageSize, setMainImageSize] = useState(600);
  const [imagesSize, setImagesSize] = useState(150);

  useEffect(() => {
    if (screenWidth > 1280) {
      setImagesSize(150);
      setMainImageSize(600);
      return;
    }
    if (screenWidth > 1024) {
      setImagesSize(112);
      setMainImageSize(471);
      return;
    }
    if (screenWidth > 768) {
      setImagesSize(84);
      setMainImageSize(353);
      return;
    }
    setImagesSize(70);
    setMainImageSize(295);
    return;
  }, [screenWidth]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="col-span-6 flex justify-center my-10" data-aos="fade-left">
      <div className="flex flex-col justify-center overflow-hidden">
        <div
          className="overflow-hidden mb-5 aspect-square transition duration-500"
          style={{ width: mainImageSize }}
        >
          {images.map((image) => (
            <AnimatePresence key={image.id}>
              {image.id === selectedImage.id && (
                <motion.img
                  key={image.id}
                  initial={{
                    opacity: 0,
                    width: 0,
                    height: 0,
                    x: -100,
                    y: -100,
                  }}
                  animate={{
                    opacity: 1,
                    width: mainImageSize,
                    height: mainImageSize,
                    x: 0,
                    y: 0,
                  }}
                  exit={{ opacity: 0, width: 0, height: 0, x: 100, y: 100 }}
                  transition={{ duration: 1 }}
                  src={selectedImage.src}
                  alt="selecciona para recargar la imagen"
                />
              )}
            </AnimatePresence>
          ))}
        </div>
        <div className="flex align-middle justify-center">
          {images.map((image) => (
            <AnimatePresence key={image.id}>
              {selectedImage.id !== image.id && (
                <motion.img
                  key={image.id}
                  initial={{ opacity: 0, width: 0, marginRight: 0 }}
                  animate={{ opacity: 1, width: imagesSize, marginRight: 5 }}
                  exit={{ opacity: 0, width: 0, marginRight: 0 }}
                  transition={{ duration: 1 }}
                  onClick={() => setSelectedImage(image)}
                  src={image.src}
                  alt="selecciona para recargar la imagen"
                />
              )}
            </AnimatePresence>
            // </button>
          ))}
        </div>
      </div>
    </div>
  );
}
