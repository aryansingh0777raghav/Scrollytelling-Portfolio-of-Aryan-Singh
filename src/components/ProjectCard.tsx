"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  role: string;
  link: string;
  category: string;
  links?: ProjectLink[];
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Spotlight mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt values (from -1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D Tilt
  const springConfig = { stiffness: 300, damping: 30 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to rotation angle (max 10 degrees)
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // For spotlight (pixel coordinates relative to card)
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // For 3D Tilt (normalized -1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set((e.clientX - rect.left - centerX) / centerX);
    y.set((e.clientY - rect.top - centerY) / centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset tilt to 0
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 1000 }}
      className="h-full z-10 hover:z-50"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-colors duration-300 backdrop-blur-md overflow-hidden h-full"
      >
        {/* Spotlight Gradient */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: background,
          }}
        />

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
          <ArrowUpRight className="w-6 h-6 text-white hover:text-indigo-400 transition-colors" />
        </a>
        
        <div className="flex-grow relative z-10">
          <h3 className="text-2xl font-semibold mb-3 pr-8">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              {project.title}
            </a>
          </h3>
          <p className="text-gray-400 text-sm mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-4 relative z-10">
          <p className="text-indigo-400 text-sm font-medium mb-3">
            {project.role}
          </p>
          
          {project.links && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.links.map((l, i) => (
                <a 
                  key={i} 
                  href={l.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> {l.name}
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
