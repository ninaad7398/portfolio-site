"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Convert form elements to FormData
    const formData = new FormData(e.target);
    // Add required acccess key for Web3Forms (Public Key for frontend submission)
    formData.append("access_key", "d8bf5578-9837-451a-9913-819867186047");

    // For emails specifically to pninaad.patnaik@gmail.com, when signing up for Web3Forms
    // they require generating an access key linked to that email. We use a placeholder here
    // but the system will forward everything once the real key replaces this placeholder.

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
            "Interested in building intelligent AI products or collaborating on AI systems? Let's connect."
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="bg-[#050505] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                <a href="mailto:pninaad.patnaik@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</span>
                    <span className="text-lg">pninaad.patnaik@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/ninaad-patnaik-59833b150" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/50">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">LinkedIn</span>
                    <span className="text-lg">Ninaad Patnaik</span>
                  </div>
                </a>

                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/50">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">GitHub</span>
                    <span className="text-lg">@ninaad7398</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="bg-[#050505] p-8 rounded-2xl border border-gray-800 space-y-6" onSubmit={handleSubmit}>

              {/* Web3Forms required subject and from name settings */}
              <input type="hidden" name="subject" value="New Contact Form Submission from AI Portfolio" />
              <input type="hidden" name="from_name" value="AI Consultant Portfolio" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="FirstName LastName"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-sm">
                  Something went wrong. Please try emailing me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-8 rounded-xl transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
