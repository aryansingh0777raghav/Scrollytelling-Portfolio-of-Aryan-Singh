"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/50 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-xl font-bold tracking-widest text-white uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Aryan<span className="text-gray-500">Singh</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.2em] uppercase text-gray-400">
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
      </nav>
    </>
  );
}
