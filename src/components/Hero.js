"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Wand2 } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    // Wait for a while and scroll slightly below to indicate more content
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        window.scrollBy({ top: window.innerHeight * 0.15, behavior: "smooth" });
      }
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Animated Gradient / Network effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Subtle decorative blurred circles for an AI/network vibe */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-400 font-medium tracking-wide text-sm md:text-base mb-4 uppercase">
              AI Consultant | Generative AI | Intelligent Product Experiences
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400">
              Ninaad Patnaik
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Designing AI-powered enterprise systems combining LLMs, document intelligence, and modern web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-blue-400/80 font-medium text-base md:text-lg mb-10 max-w-2xl mx-auto italic"
          >
            "Building AI systems that bridge business needs with real-world intelligence."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#ai-systems"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
            >
              View AI Systems
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Magic Brush Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ 
          opacity: { delay: 2.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-10 h-10 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center shadow-lg shadow-purple-500/10">
          <Wand2 className="w-5 h-5 text-purple-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
