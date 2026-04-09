"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0 → 25%
  const opacity1 = useTransform(progress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [100, -100]);

  // Section 2: 25 → 55%
  const opacity2 = useTransform(progress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.25, 0.55], [100, -100]);

  // Section 3: 60 → 90% (FIXED ✅)
  const opacity3 = useTransform(progress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.6, 0.9], [100, -100]);

  // Section 4: 90 → 100% (NEW ✅)
  const opacity4 = useTransform(progress, [0.9, 0.93, 0.97, 1], [0, 1, 1, 0]);
  const y4 = useTransform(progress, [0.9, 1], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6 z-10 h-screen w-full">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full text-center left-0"
      >
        <h1 className="text-3xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl">
          Muhammed Jashir.
          <br />
          <span className="text-white text-2xl font-semibold">
            Creative Developer.
          </span>
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full left-6 md:left-24"
      >
        <h2 className="text-4xl md:text-7xl font-bold max-w-2xl text-white drop-shadow-2xl leading-tight">
          Crafting high-performance web applications.
        </h2>
      </motion.div>

      {/* Section 3 (FIXED ✅) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute w-full text-right right-6 md:right-24 z-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl ml-auto text-white drop-shadow-2xl leading-tight">
          Specializing in MongoDB, Express.js, React & Node.js.
        </h2>
      </motion.div>

      {/* Section 4 (NEW ✅) */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute w-full text-center left-0 z-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
          Let’s build something amazing 🚀
        </h2>
      </motion.div>

    </div>
  );
}