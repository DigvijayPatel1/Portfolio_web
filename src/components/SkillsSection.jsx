import React from "react";
import { Code2, Layout, Database } from "lucide-react";

const SkillsSection = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="text-white mb-4" size={32} />,
      items: ["C++", "Python", "JavaScript / ES6+"],
    },
    {
      title: "Frameworks & Tools",
      icon: <Layout className="text-white mb-4" size={32} />,
      items: ["React.js" , "Tailwind CSS", "Express", "Node.js", "FastAPI", "Docker", "Git & GitHub", "Pandas", "scikit-learn", "Numpy", "Seaborn", "Matplotlib"],
    },
    {
      title: "Database & Services",
      icon: <Database className="text-white mb-4" size={32} />,
      items: ["MongoDB", "REST APIs", "Git & GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-16 flex items-center justify-center gap-4 text-center">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              {cat.icon}
              <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
              <ul className="space-y-3 w-full">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-300 bg-white/5 backdrop-blur-md rounded-xl py-3 px-4 text-sm font-medium border border-white/10"
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
