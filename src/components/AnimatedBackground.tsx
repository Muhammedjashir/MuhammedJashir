"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 min-h-screen overflow-hidden bg-[#07051a] -z-10 pointer-events-none">
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,#5b3fff,transparent_60%)] opacity-40 blur-[80px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[40%] right-[0%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,#00d4ff,transparent_60%)] opacity-30 blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,#8b5cf6,transparent_60%)] opacity-20 blur-[100px]"
      />
    </div>
  );
}
