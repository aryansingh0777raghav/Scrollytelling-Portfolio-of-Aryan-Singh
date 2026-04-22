"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "AVAILABLE FOR FREELANCE WORK ✦ SOFTWARE ENGINEER ✦ FILM DIRECTOR ✦ AI ENTHUSIAST ✦ ";
  
  return (
    <div className="w-full bg-[#1a1a1a] py-6 overflow-hidden border-y border-white/5 flex items-center relative z-10">
      <motion.div
        className="flex w-max whitespace-nowrap font-bold text-sm md:text-lg tracking-[0.3em] text-gray-400"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
