'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Campus Dashboard',
    type: 'Web App',
    summary: 'Centralized dashboard for student progress, attendance, and milestone tracking.',
  },
  {
    name: 'Mentor Connect',
    type: 'Platform',
    summary: 'Scheduling and communication tool for mentor office hours and feedback loops.',
  },
  {
    name: 'Showcase Hub',
    type: 'Portfolio',
    summary: 'Public project gallery for live demos, documentation, and version history.',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">{p.type}</p>
              <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-white/75">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

