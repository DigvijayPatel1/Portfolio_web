import React from "react";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

        <Mail className="mx-auto text-white mb-5 md:mb-6 relative z-10" size={44} />

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 md:mb-6 relative z-10">
          Let&apos;s Build The Future
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto relative z-10">
          Currently open to new opportunities. Whether you have a question, a
          project idea, or just want to say hi, my inbox is always open.
        </p>

        <a
          href="mailto:dpat19122@gmail.com"
          className="inline-block px-5 sm:px-8 py-3.5 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-bold rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 relative z-10 break-all sm:break-normal"
        >
          dpat19122@gmail.com
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-14 md:mt-24 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500 text-center md:text-left">
        <p>Built with React & Tailwind CSS.</p>
        <p>Copyright &copy; 2026 - Digvijay Patel</p>
      </div>
    </section>
  );
};

export default ContactSection;
