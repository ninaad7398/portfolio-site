"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Designing AI Systems for Business",
    category: "Architecture",
    date: "Coming Soon",
    summary: "A practical guide to moving beyond prototypes and deploying robust LLM applications in enterprise environments.",
  },
  {
    title: "How LLMs Transform Document Processing",
    category: "Technical Guide",
    date: "Coming Soon",
    summary: "Exploring the hybrid approach of vision models and language pipelines for extracting structured data from messy documents.",
  },
  {
    title: "Building Conversational AI Interfaces",
    category: "UX / Frontend",
    date: "Coming Soon",
    summary: "UX patterns and technical considerations for creating chat-based analytics dashboards in React.",
  },
  {
    title: "Challenges in Multilingual AI Extraction",
    category: "Research",
    date: "Coming Soon",
    summary: "Overcoming tokenization and alignment issues when processing combined English and Arabic corpora.",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-24 bg-[#0a0a0a] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">AI Insights</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Thoughts, technical guides, and lessons learned from building enterprise AI platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block p-8 bg-[#050505] border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-600 text-sm font-medium">{article.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-blue-400 transition-colors relative z-10">
                {article.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                {article.summary}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-blue-400 transition-colors relative z-10">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
