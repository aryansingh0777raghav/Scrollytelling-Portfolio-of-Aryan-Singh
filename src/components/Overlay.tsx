"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  // Section 4 (Hero Fade): 80% to 100%
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none px-6">
      
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
          Aryan Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-lg drop-shadow-md">
          Software Engineer, AI Enthusiast & Filmmaker.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          I build <span className="text-indigo-400">digital experiences.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-md drop-shadow-md">
          From fast, minimal web applications to intelligent AI tools.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          Bridging design and <br className="hidden md:block"/>
          <span className="text-rose-400">engineering.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-md drop-shadow-md">
          A unique blend of logical problem solving and creative storytelling.
        </p>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg mb-8">
          Explore My Work
        </h2>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>

    </div>
  );
}
