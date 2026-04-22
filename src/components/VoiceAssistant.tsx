"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      setTranscript(text);
      setShowToast(true);
      handleCommand(text);
      
      setTimeout(() => setShowToast(false), 4000);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error("Speech recognition error:", e);
      }
    }
  };

  const handleCommand = (cmd: string) => {
    let scrolled = false;

    // About
    if (cmd.includes("about") || cmd.includes("who are you")) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      scrolled = true;
    }
    // Contact
    else if (cmd.includes("contact") || cmd.includes("message") || cmd.includes("email") || cmd.includes("hire")) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      scrolled = true;
    }
    
    // Project Filtering
    let targetTab = null;
    if (cmd.includes("film") || cmd.includes("movie") || cmd.includes("direct")) {
      targetTab = "Filmmaking";
    } else if (cmd.includes("web") || cmd.includes("software") || cmd.includes("site") || cmd.includes("app")) {
      targetTab = "Web Dev";
    } else if (cmd.includes("ai") || cmd.includes("python") || cmd.includes("data") || cmd.includes("machine learning")) {
      targetTab = "AI & Python";
    } else if (cmd.includes("project") || cmd.includes("work") || cmd.includes("all")) {
      targetTab = "All";
    }

    if (targetTab) {
      if (!scrolled) {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }
      window.dispatchEvent(new CustomEvent("VOICE_FILTER_TAB", { detail: targetTab }));
    }
  };

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
      <button
        onClick={toggleListening}
        className={`p-4 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border flex items-center justify-center
          ${isListening 
            ? "bg-rose-500/20 border-rose-500/50 text-rose-400 hover:bg-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.3)]" 
            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20"
          }`}
        title="AI Voice Assistant"
      >
        {isListening ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Mic className="w-6 h-6" />
          </motion.div>
        ) : (
          <MicOff className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-2xl text-sm shadow-xl flex flex-col"
          >
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">AI Assistant Heard:</span>
            <span className="font-medium text-indigo-400 text-base">"{transcript}"</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
