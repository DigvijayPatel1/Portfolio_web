import React from "react";
import { BriefcaseBusiness, SquareTerminal } from "lucide-react";

const LandingSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Glowing Orbs (Monochrome) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col md:flex-row items-center gap-12">
        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-gray-400 tracking-widest text-sm font-medium uppercase animate-pulse">
            Welcome to the future
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Digvijay Patel.
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-light text-gray-400">
            I am a <span className="text-white font-medium">Developer</span>
          </h2>

          <p className="max-w-xl text-gray-400 leading-relaxed text-lg mx-auto md:mx-0">
            I am a student at{" "}
            <span className="text-white font-medium">NIT Calicut</span>,
            pursuing Civil Engineering. building web apps and AI/ML solutions for real-world problems.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a
              href="https://github.com/DigvijayPatel1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <SquareTerminal size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/digvijay-patel123/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-300"
            >
              <BriefcaseBusiness size={28} />
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wide hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              CONNECT
            </a>
          </div>
        </div>

        {/* IMAGE / AVATAR */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* Holographic Ring Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-gray-600/20 rounded-full blur-2xl animate-spin-slow"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl p-4 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <img
              src="../assets/avatar.jpg"
              alt="Avatar Placeholder"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
