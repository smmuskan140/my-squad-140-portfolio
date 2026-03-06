'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const MentorsSection: React.FC = () => {
  const mentors = [
    {
      name: 'Mentor Name',
      title: 'Campus Manager',
      description: 'Academic mentor focused on student development and problem-solving excellence.',
    },
    {
      name: 'Mentor Name',
      title: 'Technical Lead',
      description: 'Guides students through technology-driven learning and career readiness.',
    },
    {
      name: 'Mentor Name',
      title: 'Project Coordinator',
      description: 'Oversees project execution and ensures quality across all initiatives.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="mentors" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Our Mentors</h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass glass-hover rounded-2xl p-6"
            >
              {/* Placeholder Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mb-4 flex items-center justify-center text-3xl font-bold">
                👤
              </div>
              
              <h3 className="text-lg font-bold mb-1">{mentor.name}</h3>
              <p className="text-blue-300 text-sm font-semibold mb-3">{mentor.title}</p>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed">{mentor.description}</p>
              
              {/* Social Icons */}
              <div className="flex gap-2">
                <button className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all">
                  <Mail size={16} className="text-blue-300" />
                </button>
                <button className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all">
                  <Linkedin size={16} className="text-blue-300" />
                </button>
                <button className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all">
                  <Github size={16} className="text-blue-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MentorsSection;
