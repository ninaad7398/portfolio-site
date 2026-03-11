"use client";

import { motion } from "framer-motion";
import { FileText, Default, MessageSquare, ArrowRight, Database, LayoutDashboard, BrainCircuit } from "lucide-react";

// Replacing existing systems array with architecture-focused content
const systems = [
  {
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    title: "Document Intelligence Pipeline",
    problem: "Enterprises need automated extraction of data from invoices and documents.",
    architecture: ["PDF Upload", "OCR (EasyOCR)", "Vision LLM", "Field Extraction", "Structured JSON", "Dashboard"],
    technology: ["Python", "LLM APIs", "EasyOCR", "React"],
    impact: "Automates document data extraction and reduces manual effort by 80%.",
    accentColor: "from-blue-500/20 to-cyan-500/5",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
    title: "Multilingual AI Extraction",
    problem: "Extract structured information from multilingual documents including English and Arabic.",
    architecture: ["User Upload", "OCR", "Language Detection", "Multilingual LLM", "Entity Extraction", "Structured Output"],
    technology: ["Python", "LLMs", "OCR", "React"],
    impact: "Enables enterprise document understanding across multiple languages seamlessly.",
    accentColor: "from-indigo-500/20 to-purple-500/5",
    borderColor: "group-hover:border-indigo-500/50"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    title: "AI Complaint Analysis System",
    problem: "Businesses receive thousands of unstructured complaints that require analysis.",
    architecture: ["User Chat", "LLM Intent Detection", "Entity Extraction", "Complaint Structuring", "Backend Processing", "Dashboard"],
    technology: ["React", "Python APIs", "LLMs"],
    impact: "Transforms unstructured complaints into structured actionable business insights.",
    accentColor: "from-purple-500/20 to-pink-500/5",
    borderColor: "group-hover:border-purple-500/50"
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
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Systems I Designed</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg mx-auto">
            Real-world AI architectures successfully deployed for complex enterprise use cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 transition-all duration-300 group relative flex flex-col h-full overflow-hidden ${system.borderColor}`}
            >
              {/* Subtle gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${system.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="mb-6 bg-gray-900/50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-800 relative z-10">
                {system.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{system.title}</h3>
              
              <div className="space-y-6 flex-grow relative z-10">
                {/* Problem Section */}
                <div>
                  <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-2">Problem</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{system.problem}</p>
                </div>

                {/* Architecture Flow Section */}
                <div>
                  <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-3">Architecture Flow</span>
                  <div className="bg-[#050505]/50 border border-gray-800/50 rounded-lg p-4 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-y-2 text-gray-400">
                      {system.architecture.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-gray-200 bg-gray-900 border border-gray-700 px-2 py-1 rounded whitespace-nowrap">
                            {step}
                          </span>
                          {idx < system.architecture.length - 1 && (
                            <ArrowRight className="w-3 h-3 mx-2 text-gray-600 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Section */}
                <div>
                  <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-2">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {system.technology.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-900 text-gray-300 border border-gray-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Section - Stick to bottom */}
              <div className="mt-8 pt-6 border-t border-gray-800/60 relative z-10">
                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest block mb-2">Impact</span>
                <p className="text-blue-200/90 font-medium text-sm italic">{system.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISystems;
