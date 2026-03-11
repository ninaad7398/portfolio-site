"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const caseStudies = [
  {
    id: "doc-intel",
    title: "Document Intelligence System",
    summary: "Large-scale extraction of multilingual data using advanced vision and language models.",
    problem: "Manual extraction of data from complex, unstructured, multilingual documents was leading to high error rates and slow processing times.",
    solution: "Designed and deployed a Vision ML pipeline that automatically classifies and extracts tabular and free-text fields into structured records.",
    architecture: "Cloud Storage → OCR Engine → Vision LLM → Validation Rules → SQL Database",
    technologies: ["Python", "EasyOCR", "Vision LLMs", "React", "PostgreSQL"],
    impact: "Reduced manual data entry by 85% and improved extraction accuracy to 99.2% across English and Arabic texts."
  },
  {
    id: "chat-interface",
    title: "AI Chat Interface for Enterprise Data",
    summary: "Natural language querying system for complex business datasets and analytics.",
    problem: "Business users struggled to query massive datasets using complex SQL, relying heavily on slow data engineering requests.",
    solution: "Implemented an intuitive React chat interface powered by an LLM-based Text-to-SQL engine for conversational data exploration.",
    architecture: "User Prompt → RAG/Schema Context → LLM SQL Gen → DB Execution → Dynamic ECharts",
    technologies: ["React", "FastAPI", "OpenAI APIs", "Apache ECharts", "Snowflake"],
    impact: "Democratized data access, reducing query execution times from days (via data team tickets) to seconds."
  },
  {
    id: "dashboard",
    title: "Dashboard Modernization",
    summary: "Legacy BI transformation into responsive, high-performance web applications.",
    problem: "Existing BI dashboards were slow, rigid, and fundamentally unable to support custom predictive AI visualizations.",
    solution: "Rebuilt the entire analytics suite as a custom Next.js application with bespoke D3 visualizations and AI-driven insights.",
    architecture: "Legacy DB → Python ETL → GraphQL API → React UI → Custom D3 Visuals",
    technologies: ["Next.js", "React", "D3.js", "GraphQL", "Python"],
    impact: "Improved application load times by 300% and enabled complex AI-driven predictive charting impossible in legacy BI tools."
  },
];

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
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg text-center">
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
                  <div className="pr-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400">{study.summary}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto flex-shrink-0 bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800"
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          
                          <div className="space-y-6">
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Problem</span>
                              <p className="text-gray-300 text-sm leading-relaxed">{study.problem}</p>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Solution</span>
                              <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Architecture</span>
                              <div className="bg-[#0a0a0a] border border-gray-800/60 p-3 rounded-xl font-mono text-xs text-gray-400">
                                {study.architecture}
                              </div>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Technologies</span>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech, i) => (
                                  <span key={i} className="px-2 py-1 bg-gray-900 text-gray-300 border border-gray-700 rounded text-xs font-medium">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                      
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-800/60">
                          <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Impact</span>
                          <p className="text-green-400/90 font-medium text-sm border-l-2 border-green-500/50 pl-3 py-1 italic bg-green-500/5 rounded-r">
                            {study.impact}
                          </p>
                        </div>
                        
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
