"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20% (visible), 20% to 25% (fade out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 25% to 30% (fade in), 30% to 50% (visible), 50% to 55% (fade out)
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.5, 0.55, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [100, -100]);

  // Section 3: 55% to 60% (fade in), 60% to 80% (visible), 80% to 85% (fade out)
  const opacity3 = useTransform(scrollYProgress, [0, 0.55, 0.6, 0.8, 0.85, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [100, -100]);

  // Section 4 (Hero Fade): 85% to 90% (fade in), 90% to 100% (visible)
  const opacity4 = useTransform(scrollYProgress, [0, 0.85, 0.9, 1], [0, 0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.85, 1], [100, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none px-6">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}>
          Aryan Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-lg" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          Software Engineer, AI Enthusiast & Filmmaker.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}>
          I build <span className="text-indigo-400">digital experiences.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-md" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          From fast, minimal web applications to intelligent AI tools.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}>
          Bridging design and <br className="hidden md:block"/>
          <span className="text-rose-400">engineering.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-md" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
          A unique blend of logical problem solving and creative storytelling.
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}>
          Explore My Work
        </h2>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>

    </div>
  );
}
