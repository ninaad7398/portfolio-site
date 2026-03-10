"use client";

import { motion } from "framer-motion";
import { Brain, Layout, BarChart3, Server } from "lucide-react";

const skillCategories = [
  {
    title: "AI & LLM Systems",
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    skills: ["Generative AI", "LLM Applications", "Prompt Engineering", "Document Intelligence", "OCR + Vision Models"],
  },
  {
    title: "Frontend Engineering",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    skills: ["ReactJS", "Next.js", "Angular", "JavaScript"],
  },
  {
    title: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    skills: ["Apache ECharts", "Recharts", "D3.js", "Highcharts"],
  },
  {
    title: "Backend / AI Integration",
    icon: <Server className="w-6 h-6 text-pink-400" />,
    skills: ["Python", "FastAPI", "LLM APIs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive stack enabling end-to-end delivery of intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-900/50 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    className="flex items-center text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
