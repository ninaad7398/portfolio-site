import Hero from "@/components/Hero";
import AISystems from "@/components/AISystems";
import AILab from "@/components/AILab";
import AICapabilities from "@/components/AICapabilities";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <AISystems />
      <AILab />
      <AICapabilities />
      <CaseStudies />
      <Skills />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}
