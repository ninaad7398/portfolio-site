import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ninaad Patnaik | AI Consultant | Generative AI | LLM Applications",
  description: "Ninaad Patnaik, Infosys, India, Saudi Arabia, AI Consultant specializing in LLM applications, document intelligence, enterprise AI dashboards, and intelligent product experiences.",
  openGraph: {
    title: "Ninaad Patnaik | AI Consultant | Generative AI | LLM Applications",
    description: "Ninaad Patnaik, Infosys, India, Saudi Arabia, AI Consultant specializing in LLM applications, document intelligence, enterprise AI dashboards, and intelligent product experiences.",
    url: "https://github.com/ninaad7398", // Fallback URL
    siteName: "Ninaad Patnaik Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#050505] text-gray-100 selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
