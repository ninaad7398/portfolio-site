import Hero from "@/components/Hero";
import AISystems from "@/components/AISystems";
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
      <CaseStudies />
      <Skills />
      <Writing />
      <Experience />
      <Contact />
    </main>
  );
}
