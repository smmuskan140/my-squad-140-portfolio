'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EventsSection: React.FC = () => {
  const events = [
    {
      title: 'KLAPS Session',
      date: 'Monthly',
      description: 'Interactive workshops and collaborative learning sessions for skill enhancement.',
    },
    {
      title: 'Tech Talks',
      date: 'Bi-weekly',
      description: 'Industry experts sharing insights on latest technologies and trends.',
    },
    {
      title: 'Hackathon',
      date: 'Quarterly',
      description: 'Build innovative projects and compete with your team members.',
    },
  ];

  return (
    <section id="events" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Our Events</h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass glass-hover rounded-2xl p-6 border-l-4 border-blue-400"
            >
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-blue-300 font-semibold mb-3">{event.date}</p>
              <p className="text-gray-200 leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
