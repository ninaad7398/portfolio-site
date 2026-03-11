"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Consultant",
    company: "Infosys",
    description: "Working on AI-powered enterprise applications with LLM backends and React chat interfaces.",
    active: true,
  },
  {
    role: "Senior Associate Consultant",
    company: "Infosys",
    description: "Developed analytics dashboards and AI marketplace solutions.",
    active: false,
  },
  {
    role: "Associate Consultant",
    company: "Infosys",
    description: "Built ReactJS and Docusaurus documentation platforms for a global consumer technology client.",
    active: false,
  },
  {
    role: "Senior Software Engineer",
    company: "ValueLabs",
    description: "Developed ReactJS based pages for an Airlines client where complex dashboards were built.",
    active: false,
  },
  {
    role: "Software Engineer",
    company: "ValueLabs",
    description: "Worked on .NET and ReactJS applications for an Airlines client.",
    active: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">Consulting Experience</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl shadow-xl shadow-black/50">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Global Reach</h3>
              <p className="text-gray-400 text-sm leading-relaxed bg-[#050505] p-4 rounded-xl border border-gray-800/50">
                Worked closely with enterprise clients across the <span className="text-white font-medium">United States</span>, <span className="text-white font-medium">India</span>, and the <span className="text-white font-medium">Middle East</span>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-sm">Focus Areas</h3>
              <ul className="text-gray-300 text-sm space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div> 
                  AI-powered enterprise dashboards
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div> 
                  Document intelligence systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div> 
                  LLM-powered automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div> 
                  AI-assisted analytics
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-[30px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500 via-gray-800 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24 group"
              >
                {/* Timeline node */}
                <div className={`absolute left-0 md:left-2 top-1.5 w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#050505] ${exp.active ? 'bg-blue-500' : 'bg-gray-800 group-hover:bg-blue-900 transition-colors'}`}>
                  <div className={`w-3 h-3 rounded-full ${exp.active ? 'bg-white' : 'bg-gray-400'}`}></div>
                </div>

                <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full text-sm self-start md:self-auto">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
