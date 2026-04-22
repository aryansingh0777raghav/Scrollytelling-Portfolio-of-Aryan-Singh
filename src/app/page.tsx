"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="w-full relative bg-[#121212]">
      {/* Cinematic Scrollytelling Section */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
      
      {/* Further Content Below */}
      <div className="relative z-10 bg-[#121212]">
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  );
}
