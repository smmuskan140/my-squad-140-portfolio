'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const KalviansSection: React.FC = () => {
  const members = [
    { name: 'Member 1', role: 'Developer' },
    { name: 'Member 2', role: 'Designer' },
    { name: 'Member 3', role: 'Developer' },
    { name: 'Member 4', role: 'Product Manager' },
    { name: 'Member 5', role: 'Developer' },
    { name: 'Member 6', role: 'Designer' },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Kalvians</h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-2xl p-4"
            >
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-2xl flex-shrink-0">
                  👤
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-blue-300 text-sm mb-2">{member.role}</p>
                  <div className="flex gap-2">
                    <Mail size={14} className="text-gray-300" />
                    <Linkedin size={14} className="text-gray-300" />
                    <Github size={14} className="text-gray-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all hover:scale-105">
            View All Members
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default KalviansSection;
