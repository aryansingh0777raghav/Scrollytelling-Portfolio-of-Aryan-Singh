import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Night of Life: Before You Think About It (2026)",
    description: "A psychological drama short film exploring inner conflict and life-changing decisions.",
    role: "Writer, Director, Actor, Musician, Editor",
    link: "https://youtu.be/tEvYeAHmCHg",
    tags: ["Filmmaking", "Psychological Drama", "Directing"],
  },
  {
    title: "Solexplain AI",
    description: "We are building an AI-powered tool that helps users understand their Solana wallet transactions in simple, human-readable language.",
    role: "Software Engineer",
    link: "https://github.com/aryansingh0777raghav/solexplain-ai",
    tags: ["TypeScript", "AI", "Web3", "Solana"],
  },
  {
    title: "Personal AI Voice Assistant",
    description: "A desktop assistant built with Python that performs PC tasks via voice commands.",
    role: "Software Engineer",
    link: "#",
    tags: ["Python", "AI", "Automation"],
  },
  {
    title: "Portfolio Terminal",
    description: "Interactive terminal-style portfolio.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/Aryan-Interactive-portfolio/",
    tags: ["Web", "Terminal", "Interactive"],
  },
  {
    title: "ArTool Chrome YouTube Extension",
    description: "Download YouTube videos, audio, and thumbnails.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension",
    tags: ["JavaScript", "Chrome Extension", "API"],
  },
  {
    title: "3D Concept Portfolio",
    description: "A 3D Concept Portfolio project showcasing creative frontend capabilities.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/3D-Concept-Portfolio-project",
    tags: ["HTML", "3D", "Portfolio"],
  },
  {
    title: "Personal Portfolio NetUI",
    description: "A clean personal portfolio built with NetUI.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/Personal-Portfolio-NetUI",
    tags: ["HTML", "Web Design", "UI"],
  },
  {
    title: "Personal Portfolio Minimal V3",
    description: "A clean, minimal, and fast personal portfolio website with a focus on simplicity and performance.",
    role: "Developer & Designer",
    link: "https://aryansingh0777raghav.github.io/Personal-Portfolio-MinimalV3/",
    tags: ["HTML", "CSS", "Minimalism"],
  },
  {
    title: "Personal-CinePortfolio",
    description: "A sleek and performance-driven portfolio, designed with minimalism at its core.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/Aryan-Singh-Cine-Portfolio/",
    tags: ["UI/UX", "Web Design", "Performance"],
  },
  {
    title: "MySites",
    description: "A website saver which saves your website and gives features to search also.",
    role: "Developer",
    link: "https://aryansingh0777raghav.github.io/MySites/",
    tags: ["Web App", "Utility", "Storage"],
  },
  {
    title: "Certilink",
    description: "A project repository for Certilink.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/certilink",
    tags: ["JavaScript", "Web"],
  },
  {
    title: "Chess Game",
    description: "A functional chess game built for the web.",
    role: "Developer",
    link: "https://github.com/aryansingh0777raghav/Chess-Game",
    tags: ["HTML", "Game", "Logic"],
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full text-white">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A collection of my latest projects across software engineering, artificial intelligence, and filmmaking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 pr-8">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              <p className="text-indigo-400 text-sm font-medium mb-4">
                {project.role}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
