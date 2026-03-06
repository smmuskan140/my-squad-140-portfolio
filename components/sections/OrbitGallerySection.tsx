"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleSphere } from "@/components/ui/3d-orbit-gallery";

const OrbitGallerySection = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black/70">
      <div className="absolute left-0 right-0 top-8 z-10 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-white md:text-5xl">Orbit Gallery</h2>
      </div>
      <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSphere />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </section>
  );
};

export default OrbitGallerySection;