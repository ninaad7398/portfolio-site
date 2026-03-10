"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, Layers } from "lucide-react";

const systems = [
  {
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    title: "AI Document Intelligence Platform",
    description: "Enterprise document processing system using OCR, vision models, and LLM pipelines to extract structured information from multilingual documents.",
    problem: "Manual processing of high-volume multilingual enterprise documents.",
    technology: ["OCR", "Vision Models", "LLM Pipelines", "Python"],
    impact: "Automated extraction of structured data, significantly reducing processing time and errors across languages.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    title: "AI Chat Analytics Platform",
    description: "Chat-based analytics system combining LLM reasoning with interactive data visualization.",
    problem: "Business users struggling to derive insights from complex enterprise data dashboards.",
    technology: ["React", "LLMs", "Apache ECharts", "Recharts"],
    impact: "Enabled conversational querying of enterprise analytics, providing instant visual insights.",
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    title: "AI Marketplace Platform",
    description: "Platform for hosting and managing multiple AI solutions including dashboards, document extraction tools, and conversational AI services.",
    problem: "Fragmented AI tools and services across the organization.",
    technology: ["Next.js", "Python", "FastAPI", "React"],
    impact: "Centralized AI service delivery, streamlining access and management of intelligent tools.",
  },
];

const AISystems = () => {
  return (
    <section id="ai-systems" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Systems Built</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Core intelligent platforms developed for enterprise scale, integrating advanced language models with modern web architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 bg-gray-900/50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-800">
                {system.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{system.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {system.description}
              </p>
              
              <div className="space-y-4 text-sm relative z-10">
                <div>
                  <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider block mb-1">Problem</span>
                  <span className="text-gray-300">{system.problem}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider block mb-2">Technology</span>
                  <div className="flex flex-wrap gap-2">
                    {system.technology.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-xs font-semibold tracking-wider block mb-1">Impact</span>
                  <span className="text-gray-300">{system.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISystems;
