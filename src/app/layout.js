import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ninaad Patnaik | AI Consultant",
  description: "Consultant at Infosys building AI-powered systems that combine LLMs, document intelligence, and modern web applications to solve enterprise problems.",
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
