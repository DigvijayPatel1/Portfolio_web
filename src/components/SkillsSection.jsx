import React, { useState } from "react";
import { ChevronDown, Code2, Database, Layout } from "lucide-react";

const SkillsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="text-white" size={24} />,
      items: ["C++", "Python", "JavaScript / ES6+"],
    },
    {
      title: "Frameworks & Tools",
      icon: <Layout className="text-white" size={24} />,
      items: ["React.js" , "Tailwind CSS", "Express", "Node.js", "FastAPI", "Docker", "Git & GitHub", "Pandas", "scikit-learn", "Numpy", "Seaborn", "Matplotlib"],
    },
    {
      title: "Database & Services",
      icon: <Database className="text-white" size={24} />,
      items: ["MongoDB", "REST APIs", "Git & GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 md:mb-16 flex items-center justify-center gap-4 text-center">
          Technical Arsenal
        </h2>

        <div className="md:hidden space-y-3">
          {categories.map((cat, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full px-4 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-white font-semibold">
                    {cat.icon}
                    <span className="text-base">{cat.title}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2 w-full">
                      {cat.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-300 bg-white/5 backdrop-blur-md rounded-xl py-2.5 px-3 text-sm font-medium border border-white/10"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4">
                {cat.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6">{cat.title}</h3>
              <ul className="space-y-3 w-full">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 bg-white/5 backdrop-blur-md rounded-xl py-2.5 px-3 md:py-3 md:px-4 text-sm font-medium border border-white/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
