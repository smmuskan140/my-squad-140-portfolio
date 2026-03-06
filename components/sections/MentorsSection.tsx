'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const mentors = [
  {
    name: 'Ayesha Rahman',
    role: 'Campus Manager',
    bio: 'Leads academic flow, student wellbeing, and performance tracking across squads.',
  },
  {
    name: 'Rafiul Karim',
    role: 'Technical Mentor',
    bio: 'Guides architecture, clean code practices, and production-ready implementation.',
  },
  {
    name: 'Nabila Islam',
    role: 'Project Coordinator',
    bio: 'Aligns project planning, deadlines, and showcase readiness with team goals.',
  },
];

export default function MentorsSection() {
  return (
    <section id="mentors" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Mentors</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mentors.map((m) => (
            <article key={m.name} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold">
                {m.name.split(' ').map((v) => v[0]).join('').slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="mt-1 text-blue-300">{m.role}</p>
              <p className="mt-3 text-white/75">{m.bio}</p>
              <div className="mt-4 flex gap-2 text-blue-200">
                <Mail className="h-4 w-4" />
                <Linkedin className="h-4 w-4" />
                <Github className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

