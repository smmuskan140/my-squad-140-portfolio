'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StudentsSection: React.FC = () => {
  const totalStudents = 46;

  // Create a visual grid of students
  const studentsArray = Array.from({ length: totalStudents }, (_, i) => i + 1);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Our Community</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass glass-hover rounded-3xl p-12 text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="text-7xl md:text-9xl font-black text-blue-300">
                {totalStudents}
              </div>
            </motion.div>
          </div>
          
          <p className="text-2xl md:text-3xl font-bold mb-12">
            Talented Students Building the Future
          </p>

          {/* Student avatars grid */}
          <motion.div
            className="grid grid-cols-4 md:grid-cols-8 gap-3 justify-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {studentsArray.slice(0, 16).map((num) => (
              <motion.div
                key={num}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: num * 0.02 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold hover:scale-125 transition-transform cursor-pointer"
                title={`Student ${num}`}
              >
                {num}
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-gray-200">
            Join a community of innovators and creators pushing boundaries
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentsSection;
