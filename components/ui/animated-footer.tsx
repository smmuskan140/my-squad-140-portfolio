"use client";

import React, { useEffect, useRef, useState } from "react";

interface LinkItem {
  href: string;
  label: string;
}

interface FooterProps {
  leftLinks: LinkItem[];
  rightLinks: LinkItem[];
  copyrightText: string;
  barCount?: number;
}

const AnimatedFooter: React.FC<FooterProps> = ({ leftLinks, rightLinks, copyrightText, barCount = 23 }) => {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(!!entry?.isIntersecting), { threshold: 0.2 });
    const current = footerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      let offset = 0;
      waveRefs.current.forEach((element, index) => {
        if (!element) return;
        offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
        element.style.transform = `translateY(${index + offset}px)`;
      });
      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <footer ref={footerRef} className="relative flex h-full w-full select-none flex-col justify-between bg-black text-white lg:h-screen">
      <div className="container mx-auto flex w-full flex-col justify-between gap-4 px-4 pb-24 pt-8 md:flex-row">
        <div className="space-y-2">
          <ul className="flex flex-wrap gap-4">
            {leftLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-sky-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 flex items-center gap-x-1 text-sm">{copyrightText}</p>
        </div>

        <div className="space-y-4">
          <ul className="flex flex-wrap gap-4">
            {rightLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-sky-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <button className="inline-flex items-center text-sm hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to top
            </button>
          </div>
        </div>
      </div>
      <div aria-hidden="true" style={{ overflow: "hidden", height: 200 }}>
        <div style={{ marginTop: 0 }}>
          {Array.from({ length: barCount }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                waveRefs.current[index] = el;
              }}
              style={{
                height: `${index + 1}px`,
                backgroundColor: "rgb(255, 255, 255)",
                transition: "transform 0.1s ease",
                willChange: "transform",
                marginTop: "-2px",
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;