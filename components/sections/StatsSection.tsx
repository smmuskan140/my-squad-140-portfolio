'use client';

import { motion } from 'framer-motion';
import { FolderKanban, Timer, Users } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '46', Icon: Users },
  { label: 'Projects Delivered', value: '12+', Icon: FolderKanban },
  { label: 'Practice Hours', value: '1000+', Icon: Timer },
];

export default function StatsSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((item, i) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur"
          >
            <item.Icon className="mx-auto mb-4 h-10 w-10 text-blue-300" />
            <p className="text-4xl font-black text-blue-200">{item.value}</p>
            <p className="mt-2 text-white/80">{item.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

