"use client";

import { gsap } from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Points, ShaderMaterial } from "three";
import * as THREE from "three";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface DistortionBackgroundProps {
  mousePosition: { x: number; y: number };
}

function DistortionBackground({ mousePosition }: DistortionBackgroundProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: [0, 0] },
      uResolution: { value: [1, 1] },
      uNoiseScale: { value: 8.0 },
      uDistortionStrength: { value: 0.3 },
    }),
    []
  );

  useEffect(() => {
    const updateResolution = () => {
      uniforms.uResolution.value = [window.innerWidth, window.innerHeight];
    };
    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, [uniforms]);

  const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uDistortionStrength;
    float noise(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
    void main() {
      vUv = uv;
      vec3 pos = position;
      float n1 = noise(uv * 10.0 + uTime * 0.5);
      float n2 = noise(uv * 20.0 - uTime * 0.3);
      pos.z += sin(pos.x * 5.0 + uTime * 2.0) * uDistortionStrength * n1;
      pos.z += cos(pos.y * 8.0 + uTime * 1.5) * uDistortionStrength * n2;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uNoiseScale;
    varying vec2 vUv;

    float random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vec2 uv = vUv;
      vec2 st = uv * uNoiseScale;
      float t = uTime * 0.35;
      float f = fbm(st + vec2(t, -t));
      vec2 m = (uMouse + 1.0) * 0.5;
      float d = 1.0 - smoothstep(0.0, 0.5, length(uv - m));
      vec3 color = vec3(0.06 + f * 0.35, 0.02 + f * 0.18 + d * 0.22, 0.14 + f * 0.42 + d * 0.15);
      float scanline = sin(uv.y * 860.0) * 0.03;
      color += scanline;
      float vignette = 1.0 - length(uv - 0.5) * 1.15;
      color *= vignette;
      gl_FragColor = vec4(color, 0.95);
    }
  `;

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value = [mousePosition.x, mousePosition.y];
    materialRef.current.uniforms.uDistortionStrength.value = 0.2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh position={[0, 0, -1]}>
      <planeGeometry args={[25, 25, 100, 100]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} transparent />
    </mesh>
  );
}

interface NoiseParticlesProps {
  count: number;
  mousePosition: { x: number; y: number };
}

function NoiseParticles({ count, mousePosition }: NoiseParticlesProps) {
  const pointsRef = useRef<Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const c = Math.random();
      colors[i3] = c > 0.66 ? 1 : 0;
      colors[i3 + 1] = c > 0.33 ? 1 : 0;
      colors[i3 + 2] = c < 0.66 ? 1 : 0;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] += (Math.random() - 0.5) * 0.02;
      positions[i3 + 1] += (Math.random() - 0.5) * 0.02;
      positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 3 + i * 0.1) * 0.01;

      const mouseInfluence = 1 / (1 + Math.abs(positions[i3] - mousePosition.x * 10) + Math.abs(positions[i3 + 1] - mousePosition.y * 10));
      if (mouseInfluence > 0.1) {
        positions[i3] += (Math.random() - 0.5) * 0.08;
        positions[i3 + 1] += (Math.random() - 0.5) * 0.08;
      }

      if (Math.abs(positions[i3]) > 10) positions[i3] *= -0.8;
      if (Math.abs(positions[i3 + 1]) > 10) positions[i3 + 1] *= -0.8;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  glitchIntensity?: number;
  glitchFrequency?: number;
}

function GlitchText({
  text,
  className = "",
  fontSize = "4rem",
  fontFamily = "inherit",
  fontWeight = "900",
  color = "#ffffff",
  glitchIntensity = 0.8,
  glitchFrequency = 100,
}: GlitchTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const originalText = text;
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const glitchAnimation = () => {
      if (Math.random() > 1 - glitchIntensity * 0.05) {
        const glitchedText = originalText
          .split("")
          .map((char) => (Math.random() > 1 - glitchIntensity * 0.2 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join("");

        element.textContent = glitchedText;
        window.setTimeout(() => {
          element.textContent = originalText;
        }, 70);
      }
    };

    const interval = window.setInterval(glitchAnimation, glitchFrequency);

    gsap.to(element, {
      textShadow: `${2 * glitchIntensity}px 0 #ff0000, ${-2 * glitchIntensity}px 0 #00ffff`,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => window.clearInterval(interval);
  }, [glitchFrequency, glitchIntensity, text]);

  return (
    <h1
      ref={textRef}
      className={`${className} relative`}
      style={{
        fontSize,
        fontFamily,
        fontWeight,
        color,
        textShadow: "2px 0 #ff0000, -2px 0 #00ffff, 0 0 20px rgba(255, 255, 255, 0.5)",
      }}
    >
      {text}
    </h1>
  );
}

export default function DistortHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 100,
        scale: 0.8,
        filter: "blur(10px)",
      });

      gsap.set(canvasRef.current, { opacity: 0, scale: 1.2 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(canvasRef.current, { opacity: 1, scale: 1, duration: 1.6, ease: "power4.out" })
        .to(titleRef.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "back.out(1.7)" }, "-=1.2")
        .to(subtitleRef.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, "-=0.9")
        .to(buttonRef.current, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black" id="home">
      <div ref={canvasRef} className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <DistortionBackground mousePosition={mousePosition} />
          <NoiseParticles count={500} mousePosition={mousePosition} />
        </Canvas>
      </div>

      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div ref={heroRef} className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div ref={titleRef}>
            <GlitchText
              text="SQUAD 140"
              fontSize="clamp(4rem, 12vw, 10rem)"
              fontFamily="'Courier New', monospace"
              fontWeight="900"
              color="#ffffff"
              glitchIntensity={0.9}
              glitchFrequency={90}
              className="leading-none tracking-tighter"
            />
          </div>

          <div className="mt-4">
            <GlitchText
              text="BUILD. LEARN. SHIP."
              fontSize="clamp(1.2rem, 4vw, 2.4rem)"
              fontFamily="'Courier New', monospace"
              fontWeight="400"
              color="#ff4d4d"
              glitchIntensity={0.6}
              glitchFrequency={160}
              className="tracking-widest opacity-80"
            />
          </div>

          <p
            ref={subtitleRef}
            className="mx-auto mb-12 max-w-3xl text-xl uppercase tracking-wider text-red-300 md:text-2xl lg:text-3xl"
            style={{ textShadow: "0 0 10px rgba(255, 0, 0, 0.5), 2px 0 #00ffff, -2px 0 #ff0000" }}
          >
            {">"} REALITY.CORRUPTED {"<"}
            <br />
            {">"} NOISE.AMPLIFIED {"<"}
          </p>

          <div ref={buttonRef}>
            <Button
              size="lg"
              className="group relative overflow-hidden border-2 border-red-500 bg-red-600/20 px-10 py-4 font-mono text-lg uppercase tracking-wider text-red-300 transition-all duration-300 hover:bg-red-600/40 hover:text-white"
            >
              <span className="relative z-10">{">"} ENTER_CHAOS {"<"}</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-8 z-30 text-xs tracking-wider text-red-400">{">"} SYSTEM.CORRUPTED</div>
      <div className="absolute right-8 top-8 z-30 text-xs tracking-wider text-cyan-400">ERROR_404 {"<"}</div>

      <div
        className="pointer-events-none absolute inset-0 z-[15] opacity-10"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)" }}
      />
    </div>
  );
}

export const Component = () => {
  return <DistortHero />;
};
