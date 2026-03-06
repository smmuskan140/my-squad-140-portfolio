'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass glass-hover rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you. 
            Reach out through any of our social channels or send us a message.
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="mailto:contact@squad140.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all group"
              title="Email"
            >
              <Mail size={32} className="text-blue-300 group-hover:text-blue-200" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all group"
              title="LinkedIn"
            >
              <Linkedin size={32} className="text-blue-300 group-hover:text-blue-200" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-all group"
              title="GitHub"
            >
              <Github size={32} className="text-blue-300 group-hover:text-blue-200" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
