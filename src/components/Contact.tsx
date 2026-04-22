"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aryansingh979211@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )} (${encodeURIComponent(email)})&body=${encodeURIComponent(
      message + "\n\nSender Email: " + email
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-3xl mx-auto w-full text-white border-t border-white/10 scroll-mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Me</h2>
        <p className="text-gray-400 text-lg">
          Have a project in mind or just want to say hi? Send me a message!
        </p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        suppressHydrationWarning={true} 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-6 bg-white/[0.03] border border-white/[0.05] p-8 md:p-12 rounded-2xl backdrop-blur-md"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
          <input
            suppressHydrationWarning={true}
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
          <input
            suppressHydrationWarning={true}
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
          <textarea
            suppressHydrationWarning={true}
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
          />
        </div>

        <button
          suppressHydrationWarning={true}
          type="submit"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-white text-black hover:bg-gray-200 font-semibold py-4 px-6 rounded-lg transition-colors"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4" />
        </button>
      </motion.form>
    </section>
  );
}
