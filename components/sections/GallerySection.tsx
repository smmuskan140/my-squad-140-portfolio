'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GallerySection: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1552834961-6ddda530acff?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Moments & Memories</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden glass glass-hover h-64 md:h-72"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
