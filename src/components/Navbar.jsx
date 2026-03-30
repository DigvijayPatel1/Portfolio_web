import React, { use, useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? "bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}
      >
        <a
          href="#home"
          className="text-xl font-bold tracking-widest text-white hover:text-gray-300 transition-colors"
        >
          DIGVIJAY<span className="text-gray-500">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm tracking-widest text-gray-400 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-white transition-colors duration-300"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-white transition-colors duration-300"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-white transition-colors duration-300"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              CONTACT
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="hidden md:block px-6 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
