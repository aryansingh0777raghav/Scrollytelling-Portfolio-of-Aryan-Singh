"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Filmmaking", "Web Dev", "AI & Python"];

const projects = [
  {
    title: "The Night of Life: Before You Think About It (2026)",
    description: "A psychological drama short film exploring inner conflict and life-changing decisions.",
    role: "Writer, Director, Actor, Musician, Editor",
    link: "https://youtu.be/tEvYeAHmCHg",
    category: "Filmmaking",
    links: [
      { name: "Full Movie", url: "https://youtu.be/tEvYeAHmCHg" },
      { name: "Trailer", url: "https://youtu.be/R_THbZWmIGs" },
      { name: "IMDb", url: "https://www.imdb.com/title/tt39846631" },
      { name: "TMDB", url: "https://www.themoviedb.org/movie/1638463-the-night-of-life-before-you-think-about-it" },
      { name: "Boxd", url: "https://boxd.it/116UE" }
    ],
    tags: ["Filmmaking", "Psychological Drama", "Directing"],
  },
  {
    title: "Solexplain AI",
    description: "We are building an AI-powered tool that helps users understand their Solana wallet transactions in simple, human-readable language.",
    role: "Software Engineer",
    link: "https://github.com/aryansingh0777raghav/solexplain-ai",
    category: "AI & Python",
    tags: ["TypeScript", "AI", "Web3", "Solana"],
  },
  {
    title: "Personal AI Voice Assistant",
    description: "A desktop assistant built with Python that performs PC tasks via voice commands.",
    role: "Software Engineer",
    link: "#",
    category: "AI & Python",
    tags: ["Python", "AI", "Automation"],
  },
  {
    title: "Portfolio Terminal",
    description: "Interactive terminal-style portfolio.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/Aryan-Interactive-portfolio/",
    category: "Web Dev",
    tags: ["Web", "Terminal", "Interactive"],
  },
  {
    title: "ArTool Chrome YouTube Extension",
    description: "Download YouTube videos, audio, and thumbnails.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension",
    category: "Web Dev",
    tags: ["JavaScript", "Chrome Extension", "API"],
  },
  {
    title: "3D Concept Portfolio",
    description: "A 3D Concept Portfolio project showcasing creative frontend capabilities.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/3D-Concept-Portfolio-project",
    category: "Web Dev",
    tags: ["HTML", "3D", "Portfolio"],
  },
  {
    title: "Personal Portfolio NetUI",
    description: "A clean personal portfolio built with NetUI.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/Personal-Portfolio-NetUI",
    category: "Web Dev",
    tags: ["HTML", "Web Design", "UI"],
  },
  {
    title: "Personal Portfolio Minimal V3",
    description: "A clean, minimal, and fast personal portfolio website with a focus on simplicity and performance.",
    role: "Developer & Designer",
    link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-MinimalV3/",
    category: "Web Dev",
    tags: ["HTML", "CSS", "Minimalism"],
  },
  {
    title: "Personal-CinePortfolio",
    description: "A sleek and performance-driven portfolio, designed with minimalism at its core.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/Aryan-Singh-Cine-Portfolio/",
    category: "Web Dev",
    tags: ["UI/UX", "Web Design", "Performance"],
  },
  {
    title: "MySites",
    description: "A website saver which saves your website and gives features to search also.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/MySites/",
    category: "Web Dev",
    tags: ["Web App", "Utility", "Storage"],
  },
  {
    title: "Certilink",
    description: "A project repository for Certilink.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/certilink",
    category: "Web Dev",
    tags: ["JavaScript", "Web"],
  },
  {
    title: "Chess Game",
    description: "A functional chess game built for the web.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/Chess-Game",
    category: "Web Dev",
    tags: ["HTML", "Game", "Logic"],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const handleVoiceFilter = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTab(customEvent.detail);
    };

    window.addEventListener("VOICE_FILTER_TAB", handleVoiceFilter);
    return () => window.removeEventListener("VOICE_FILTER_TAB", handleVoiceFilter);
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full text-white scroll-mt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of my latest projects across software engineering, artificial intelligence, and filmmaking.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              suppressHydrationWarning={true}
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTab === cat 
                  ? "bg-white text-black font-semibold" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
