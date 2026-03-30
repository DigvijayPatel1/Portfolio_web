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
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
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
        className={`max-w-6xl mx-auto px-4 md:px-12 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-full py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "bg-transparent"}`}
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
          href="#"
          className="hidden md:block px-6 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          RESUME
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/10 text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto px-4 mt-2">
          <div className="bg-black/80 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
            <ul className="flex flex-col gap-2 text-sm tracking-wide text-gray-200 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
