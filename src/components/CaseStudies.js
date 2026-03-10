"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code, Database, Globe, LineChart, Cpu, LayoutDashboard } from "lucide-react";

const caseStudies = [
  {
    id: "doc-intel",
    title: "Document Intelligence System",
    summary: "Large-scale extraction of multilingual data using advanced vision and language models.",
    details: [
      { icon: <Cpu className="w-5 h-5" />, text: "Built an OCR pipeline to digitize scanned documents" },
      { icon: <Database className="w-5 h-5" />, text: "Implemented Vision model extraction for complex table structures" },
      { icon: <Code className="w-5 h-5" />, text: "Engineered LLM-based semantic understanding for contextual parsing" },
      { icon: <Globe className="w-5 h-5" />, text: "Enabled multilingual extraction supporting both English and Arabic" },
    ],
  },
  {
    id: "chat-interface",
    title: "AI Chat Interface for Enterprise Data",
    summary: "Natural language querying system for complex business datasets and analytics.",
    details: [
      { icon: <MessageSquare className="w-5 h-5" />, text: "Developed a robust React chat interface with streaming responses" },
      { icon: <Database className="w-5 h-5" />, text: "Integrated LLM backend for SQL generation and data reasoning" },
      { icon: <LineChart className="w-5 h-5" />, text: "Rendered interactive charts dynamically using Apache ECharts and Recharts" },
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard Modernization",
    summary: "Legacy BI transformation into responsive, high-performance web applications.",
    details: [
      { icon: <LayoutDashboard className="w-5 h-5" />, text: "Transformed legacy Tableau dashboards into custom React dashboards" },
      { icon: <LineChart className="w-5 h-5" />, text: "Created bespoke D3 visualizations for highly specific enterprise analytics" },
      { icon: <Globe className="w-5 h-5" />, text: "Improved load times and unlocked deeper interactive analytics" },
    ],
  },
];

// Reusable icon import to avoid missing icon error
import { MessageSquare } from "lucide-react";

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#0a0a0a] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Deep dive into the architectures and implementations of key enterprise AI solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-800 rounded-2xl overflow-hidden bg-[#050505]"
              >
                <button
                  onClick={() => toggleExpand(study.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between focus:outline-none hover:bg-gray-900/50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400">{study.summary}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 flex-shrink-0 bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="h-px w-full bg-gradient-to-r from-gray-800 via-gray-800 to-transparent mb-6"></div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Implementation Highlights</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {study.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start gap-3 bg-[#0a0a0a] border border-gray-800/60 p-4 rounded-xl"
                            >
                              <div className="text-blue-400 mt-0.5">{detail.icon}</div>
                              <span className="text-gray-300 text-sm leading-relaxed">{detail.text}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
