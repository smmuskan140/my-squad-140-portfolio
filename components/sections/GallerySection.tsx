'use client';

import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=600&fit=crop',
];

export default function GallerySection() {
  return (
    <section className="px-4 py-20" id="images">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div key={src} className="relative h-64 overflow-hidden rounded-2xl border border-white/15 md:h-72">
              <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover transition duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

