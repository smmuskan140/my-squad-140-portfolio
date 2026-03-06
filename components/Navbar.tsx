'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Resources', href: '#resources' },
  { label: 'Projects', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <button onClick={() => go('#home')} className="text-xl font-bold tracking-wide text-white">
          Squad 140
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="text-sm font-medium text-white/85 transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('#contact')}
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Get in touch
          </button>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-white/10 px-4 py-3 md:hidden">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="block w-full rounded-md px-3 py-2 text-left text-white/90 hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

