'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Glitch effect animation
    const animateGlitch = () => {
      if (titleRef.current) {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const originalText = 'Squad 140';
        
        const glitchText = originalText
          .split('')
          .map((char) => {
            if (Math.random() > 0.8) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('');

        titleRef.current.textContent = glitchText;

        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.textContent = originalText;
          }
        }, 100);
      }
    };

    const interval = setInterval(animateGlitch, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
            style={{
              textShadow: '2px 0 #ff0000, -2px 0 #00ffff, 0 0 20px rgba(255, 255, 255, 0.5)',
            }}
          >
            Squad 140
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl text-blue-300 mb-8 font-mono tracking-wider">
            Building the Future Together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all hover:scale-105">
            Learn More
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 transition-all">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
