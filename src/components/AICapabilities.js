"use client";

import { motion } from "framer-motion";
import { FileSearch, MessageSquareText, LayoutDashboard, Globe, ServerCog } from "lucide-react";

const capabilities = [
  {
    icon: <FileSearch className="w-6 h-6 text-blue-400" />,
    title: "Document Intelligence",
    description: "Extracting structured data from complex unstructured documents using advanced Vision LLMs and OCR technologies.",
    color: "group-hover:border-blue-500/50"
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-purple-400" />,
    title: "Conversational AI",
    description: "Building context-aware, RAG-powered chat interfaces that securely query internal enterprise knowledge bases.",
    color: "group-hover:border-purple-500/50"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-pink-400" />,
    title: "AI Analytics Dashboards",
    description: "Creating modern, intuitive web applications that visualize complex AI text extraction and statistical data.",
    color: "group-hover:border-pink-500/50"
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    title: "Multilingual AI Extraction",
    description: "Scaling data processing globally with LLMs capable of translating and extracting entities across languages.",
    color: "group-hover:border-emerald-500/50"
  },
  {
    icon: <ServerCog className="w-6 h-6 text-orange-400" />,
    title: "Enterprise AI Integration",
    description: "Connecting raw LLM endpoints into robust, secure, and production-grade business workflows and scalable APIs.",
    color: "group-hover:border-orange-500/50"
  }
];

const AICapabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-[#0a0a0a] relative border-t border-gray-900 overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Specialized expertise dedicated to turning sophisticated AI algorithms into practical business toolsets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-[#050505] p-8 rounded-2xl border border-gray-800 transition-all cursor-pointer group flex flex-col items-center text-center ${cap.color}`}
            >
              <div className="mb-6 p-4 bg-gray-900 rounded-full border border-gray-800 group-hover:bg-gray-800 transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
