"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, Search, Loader2, UploadCloud, MessageSquare, Play, CheckCircle2 } from "lucide-react";

const ComplaintExtractor = () => {
  const [input, setInput] = useState("We visited the Starbucks on 5th Avenue yesterday and the coffee was completely cold. The barista was also very rude when we asked for a replacement.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult({
        shop: "Starbucks",
        location: "5th Avenue",
        type: "Product Quality / Customer Service",
        summary: "Customer received cold coffee and experienced poor service from staff when requesting a replacement."
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
          <Search className="w-5 h-5 text-pink-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Complaint Extractor</h3>
      </div>
      
      <div className="flex-grow flex flex-col gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-32 bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-gray-300 text-sm focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 resize-none transition-all"
        />
        
        <button
          onClick={analyze}
          disabled={loading || !input}
          className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? "Analyzing..." : "Analyze Complaint"}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2 bg-gray-900/80 border border-gray-800 rounded-xl p-4 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Shop Name</span>
                  <span className="text-white text-sm">{result.shop}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Location</span>
                  <span className="text-white text-sm">{result.location}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Complaint Type</span>
                  <span className="inline-block px-2 py-1 bg-pink-500/10 text-pink-400 text-xs font-medium rounded border border-pink-500/20">{result.type}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-800">
                <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Structured Summary</span>
                <p className="text-gray-300 text-sm">{result.summary}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const DocumentDemo = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const simulateUpload = () => {
    setFile("invoice_october_2023.pdf");
    setResult(null);
  };

  const extract = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        vendor: "Acme Corp Ltd.",
        date: "Oct 15, 2023",
        amount: "4,520.00",
        currency: "USD"
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
          <FileText className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Document Intelligence</h3>
      </div>
      
      <div className="flex-grow flex flex-col gap-4">
        {!file ? (
          <button 
            onClick={simulateUpload}
            className="w-full h-32 border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-gray-400 hover:text-blue-400 cursor-pointer"
          >
            <UploadCloud className="w-6 h-6" />
            <span className="text-sm font-medium">Click to upload sample PDF</span>
          </button>
        ) : (
          <div className="w-full h-32 border border-gray-800 bg-gray-900/50 rounded-xl flex items-center justify-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
            <span className="text-gray-300 font-medium text-sm">{file}</span>
          </div>
        )}
        
        <button
          onClick={extract}
          disabled={loading || !file}
          className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          {loading ? "Extracting Data..." : "Extract Data"}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2 bg-gray-900/80 border border-gray-800 rounded-xl p-4 overflow-hidden"
            >
               <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Vendor Name</span>
                  <span className="text-white text-sm font-medium">{result.vendor}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Invoice Date</span>
                  <span className="text-white text-sm font-medium">{result.date}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Total Amount</span>
                  <span className="text-white text-xl font-bold">{result.amount}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Currency</span>
                  <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded border border-blue-500/20">{result.currency}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PromptPlayground = () => {
  const [prompt, setPrompt] = useState("Explain the impact of GenAI on enterprise software architecture in 2 short sentences.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generate = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult("Generative AI shifts enterprise architecture from rigid deterministic workflows to dynamic, intent-driven systems capable of reasoning over unstructured data. This requires integrating robust API gateways, specialized vector databases, and LLM orchestration layers to ensure scalability and security.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
          <MessageSquare className="w-5 h-5 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Prompt Playground</h3>
      </div>
      
      <div className="flex-grow flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-gray-300 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 resize-none transition-all"
        />
        
        <button
          onClick={generate}
          disabled={loading || !prompt}
          className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? "Generating..." : "Generate Response"}
        </button>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2 bg-gray-900/80 border border-gray-800 rounded-xl p-4 overflow-hidden relative"
            >
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-indigo-500/30" />
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">AI Response</span>
              <p className="text-indigo-100 text-sm leading-relaxed">{result}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AILab = () => {
  return (
    <section id="ai-lab" className="py-24 bg-[#050505] relative border-t border-gray-900">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AI Lab &ndash; Interactive Experiments</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Explore small simulated AI-powered micro-tools demonstrating real-world enterprise use cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ComplaintExtractor />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DocumentDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PromptPlayground />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
