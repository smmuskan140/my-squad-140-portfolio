'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-24">
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-8 left-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-white/20 px-4 py-1 text-sm text-blue-200"
        >
          Portfolio of Squad 140
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl"
        >
          We Build Real Projects,
          <br />
          Not Just Assignments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-3xl text-lg text-white/80 md:text-2xl"
        >
          A focused cohort of 46 students shipping products with mentors, collaboration, and consistent execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#events" className="rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white hover:bg-blue-600">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-white/50 px-7 py-3 font-semibold text-white hover:bg-white hover:text-black">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

