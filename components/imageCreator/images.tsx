import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Images() {
  const images = [
    { id: 1, src: '/images/_fa334aad-c073-43b4-9c78-8c57c98e3621.jpg' },
    { id: 2, src: '/images/_3f7c7b5d-8686-4fab-a528-bb6b29518aab.jpg' },
    { id: 3, src: '/images/_8eaf0f7a-c515-4339-8ff6-dfdfe2bbac9a.jpg' },
    { id: 4, src: '/images/_f5f87b4f-ea75-4e0f-b3c7-1af58dafabc9.jpg' },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="col-span-6 flex justify-center my-10" data-aos="fade-left">
      <div className="flex flex-col justify-center ">
        <AnimatePresence>
          {images.map((image) => (
            <div key={image.id}>
              {image.id === selectedImage.id && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                >
                  <Image
                    width={600}
                    height={600}
                    src={selectedImage.src}
                    alt="selected"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </AnimatePresence>
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
              <AnimatePresence>
                {selectedImage.id !== image.id && (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                  >
                    <Image
                      src={image.src}
                      width={150}
                      height={150}
                      alt="preview"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
