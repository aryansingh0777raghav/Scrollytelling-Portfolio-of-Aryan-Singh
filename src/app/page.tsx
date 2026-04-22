"use client";

import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import VoiceAssistant from "@/components/VoiceAssistant";
import AudioPlayer, { AudioPlayerHandle } from "@/components/AudioPlayer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioPlayerHandle>(null);
  const [entered, setEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      {!entered && <Preloader onEnter={handleEnter} />}
      
      <main className="w-full relative bg-[#121212]">
        <Navbar />
        <AudioPlayer ref={audioRef} />
        <VoiceAssistant />

        {/* Cinematic Scrollytelling Section */}
        <div ref={containerRef} className="relative h-[500vh] w-full">
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212] pt-[72px]">
            <ScrollyCanvas scrollYProgress={scrollYProgress} />
            <Overlay scrollYProgress={scrollYProgress} />
          </div>
        </div>
        
        {/* Further Content Below */}
        <div className="relative z-10 bg-[#121212]">
          <Projects />
          <Marquee />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
