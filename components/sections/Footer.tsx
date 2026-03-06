'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/15 bg-black/45 px-4 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="text-lg font-bold">Squad 140</p>
          <p className="text-sm text-white/60">Built with consistency and teamwork.</p>
        </div>
        <div className="flex gap-5 text-sm text-white/80">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#resources" className="hover:text-white">Resources</a>
          <a href="#events" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <p className="text-sm text-white/60">© {year} Squad 140</p>
      </div>
    </footer>
  );
}

