'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  const stats = [
    { icon: '⏱️', label: 'Hours Invested', value: '1000+' },
    { icon: '👥', label: 'Team Members', value: '46' },
    { icon: '📁', label: 'Projects Built', value: '12' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass glass-hover rounded-3xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-4xl font-black text-blue-300">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
