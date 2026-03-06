"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function ParticleSphere() {
  const PARTICLE_COUNT = 900;
  const PARTICLE_SIZE_MIN = 0.005;
  const PARTICLE_SIZE_MAX = 0.01;
  const SPHERE_RADIUS = 9;
  const POSITION_RANDOMNESS = 4;
  const ROTATION_SPEED_Y = 0.0007;
  const IMAGE_COUNT = 12;
  const IMAGE_SIZE = 1.4;

  const groupRef = useRef<THREE.Group>(null);

  const textures = useTexture([
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60",
  ]);

  useEffect(() => {
    textures.forEach((texture) => {
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.flipY = false;
    });
  }, [textures]);

  const particles = useMemo(() => {
    const data: { position: [number, number, number]; scale: number; color: THREE.Color }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const radiusVariation = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;
      const x = radiusVariation * Math.cos(theta) * Math.sin(phi);
      const y = radiusVariation * Math.cos(phi);
      const z = radiusVariation * Math.sin(theta) * Math.sin(phi);

      data.push({
        position: [x, y, z],
        scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.05, 0.8, 0.6 + Math.random() * 0.3),
      });
    }

    return data;
  }, [PARTICLE_COUNT]);

  const orbitingImages = useMemo(() => {
    const images: { position: [number, number, number]; rotation: [number, number, number]; textureIndex: number }[] = [];

    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      const x = SPHERE_RADIUS * Math.cos(angle);
      const y = 0;
      const z = SPHERE_RADIUS * Math.sin(angle);

      const position = new THREE.Vector3(x, y, z);
      const outwardDirection = position.clone().normalize();

      const euler = new THREE.Euler();
      const matrix = new THREE.Matrix4();
      matrix.lookAt(position, position.clone().add(outwardDirection), new THREE.Vector3(0, 1, 0));
      euler.setFromRotationMatrix(matrix);
      euler.z += Math.PI;

      images.push({
        position: [x, y, z],
        rotation: [euler.x, euler.y, euler.z],
        textureIndex: i % textures.length,
      });
    }

    return images;
  }, [textures.length]);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += ROTATION_SPEED_Y;
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={`p-${index}`} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 6]} />
          <meshBasicMaterial color={particle.color} transparent opacity={1} />
        </mesh>
      ))}

      {orbitingImages.map((image, index) => (
        <mesh key={`i-${index}`} position={image.position} rotation={image.rotation}>
          <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
          <meshBasicMaterial map={textures[image.textureIndex]} opacity={1} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
