import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeMenu = () => setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", closeMenu);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", closeMenu);
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/projects" },
    { label: "SKILLS", href: "/skills" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-3 md:py-4" : "py-4 md:py-6"}`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 md:px-12 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-full overflow-hidden py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}
      >
        <a
          href="/"
          className="text-base sm:text-xl font-bold tracking-[0.2em] text-white hover:text-gray-300 transition-colors"
        >
          DIGVIJAY<span className="text-gray-500">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm tracking-widest text-gray-400 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1Ll673EU8MEvAgJ9-KdBNYshIOVL9KTSp/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block px-6 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          RESUME
        </a>

        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl text-white [webkit-tap-highlight-color:transparent] focus:outline-none transition-all duration-200 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <Menu size={20} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close mobile menu backdrop"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-black/70 backdrop-blur-2xl border-r border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="px-4 pt-6 pb-4 flex justify-end border-b border-white/10">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white [webkit-tap-highlight-color:transparent] focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="pt-2">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-4 block text-gray-200 hover:bg-white/5 active:bg-white/10 transition-colors duration-200 [webkit-tap-highlight-color:transparent] focus:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
