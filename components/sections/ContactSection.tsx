'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur md:p-12">
        <h2 className="text-center text-4xl font-black md:text-5xl">Contact Squad 140</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/75">
          For collaborations, mentorship, or joining our next showcase, connect with us directly.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40" placeholder="Your name" />
          <input className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40" placeholder="Email" />
          <textarea className="rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 md:col-span-2" rows={4} placeholder="Message" />
          <button className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-600 md:col-span-2">Send message</button>
        </div>

        <div className="mt-7 flex justify-center gap-4 text-blue-200">
          <a href="mailto:contact@squad140.com" className="rounded-full bg-blue-500/20 p-3 hover:bg-blue-500/35"><Mail className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com" className="rounded-full bg-blue-500/20 p-3 hover:bg-blue-500/35"><Linkedin className="h-5 w-5" /></a>
          <a href="https://github.com" className="rounded-full bg-blue-500/20 p-3 hover:bg-blue-500/35"><Github className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}

