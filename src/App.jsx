import React from 'react'
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import OtherProjectsSection from './components/OtherProjectsSection';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-white/30 selection:text-white font-sans relative">
      
      {/* Global Style overrides for smooth scrolling and animations */}
      <style>{`
        html { scroll-behavior: smooth; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        /* Tech Grid Background pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      {/* Fixed Background Grid */}
      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
      
      {/* Noise Texture Overlay for that modern gritty tech feel */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* App Container */}
      <div className="relative z-10">
        <Navbar />
        <LandingSection />
        <ProjectsSection />
        <OtherProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
