'use client';

const resources = [
  {
    title: 'Skill Tracks',
    text: 'Structured paths for frontend, backend, and deployment workflows.',
  },
  {
    title: 'Code Reviews',
    text: 'Weekly peer and mentor reviews focused on quality and clarity.',
  },
  {
    title: 'Project Playbooks',
    text: 'Reusable templates for planning, execution, and final showcase.',
  },
];

export default function KalviansSection() {
  return (
    <section id="resources" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Resources</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <article key={r.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-2xl font-bold">{r.title}</h3>
              <p className="mt-3 text-white/75">{r.text}</p>
              <button className="mt-5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
                Explore
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

