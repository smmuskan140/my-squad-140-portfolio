'use client';

export default function StudentsSection() {
  const students = 46;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-10 backdrop-blur md:p-14">
        <h2 className="section-title !mb-6">Students</h2>
        <div className="text-center">
          <p className="text-7xl font-black text-blue-200 md:text-9xl">{students}</p>
          <p className="mt-2 text-2xl font-semibold">Total students in Squad 140</p>
          <p className="mx-auto mt-4 max-w-3xl text-white/75">
            This cohort is actively building team projects, practicing interviews, and presenting weekly progress demos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-6 gap-2 md:grid-cols-12">
          {Array.from({ length: students }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-full bg-gradient-to-br from-blue-400/70 to-purple-500/70"
              title={`Student ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

