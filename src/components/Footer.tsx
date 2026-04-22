import { Film, Mail } from "lucide-react";
// @ts-ignore
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaImdb } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Aryan Singh</h2>
          <p className="text-gray-500 text-sm">
            &copy; 2025 Aryan Singh. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/iam_aryannnn07" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@cineonstudio7" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://github.com/aryansingh0777raghav" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/iamaryan07" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://www.imdb.com/name/nm18214429" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white" title="IMDb">
            <FaImdb className="w-5 h-5" />
          </a>
          <a href="mailto:aryansingh979211@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
