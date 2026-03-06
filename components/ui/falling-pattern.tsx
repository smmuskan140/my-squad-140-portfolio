"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FallingPatternProps = React.ComponentProps<"div"> & {
  color?: string;
  backgroundColor?: string;
  duration?: number;
  blurIntensity?: string;
  density?: number;
};

export function FallingPattern({
  color = "var(--primary)",
  backgroundColor = "var(--background)",
  duration = 150,
  blurIntensity = "1em",
  density = 1,
  className,
}: FallingPatternProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundImage = useMemo(() => {
    const patterns = [
      `radial-gradient(4px 100px at 0px 235px, ${color}, transparent)`,
      `radial-gradient(4px 100px at 300px 235px, ${color}, transparent)`,
      `radial-gradient(1.5px 1.5px at 150px 117.5px, ${color} 100%, transparent 150%)`,
    ];
    return new Array(12)
      .fill(0)
      .flatMap((_, i) =>
        patterns.map((p) =>
          p
            .replace("235px", `${150 + (i % 6) * 17}px`)
            .replace("117.5px", `${75 + (i % 6) * 8.5}px`)
        )
      )
      .join(", ");
  }, [color]);

  const backgroundSizes = useMemo(() => new Array(36).fill("300px 235px").join(", "), []);

  const startPositions =
    "0px 220px, 3px 220px, 151px 337px, 25px 24px, 28px 24px, 176px 150px, 50px 16px, 53px 16px, 201px 91px";
  const endPositions =
    "0px 6800px, 3px 6800px, 151px 6917px, 25px 13632px, 28px 13632px, 176px 13758px, 50px 5416px, 53px 5416px, 201px 5491px";

  return (
    <div className={cn("relative h-full w-full p-1", className)}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: mounted ? 1 : 0 }} transition={{ duration: 0.2 }} className="size-full">
        <motion.div
          className="relative z-0 size-full"
          style={{
            backgroundColor,
            backgroundImage,
            backgroundSize: backgroundSizes,
          }}
          variants={{
            initial: { backgroundPosition: startPositions },
            animate: {
              backgroundPosition: [startPositions, endPositions],
              transition: {
                duration,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              },
            },
          }}
          initial="initial"
          animate="animate"
        />
      </motion.div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backdropFilter: `blur(${blurIntensity})`,
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px)`,
          backgroundSize: `${8 * density}px ${8 * density}px`,
        }}
      />
    </div>
  );
}