import React from "react";
import { ExternalLink, Terminal } from "lucide-react";

const OtherProjectsSection = () => {
  const projects = [
    {
      title: "Insurance Premium Prediction System",
      desc: "ML-powered application to predict insurance premium categories using FastAPI and Streamlit, with automated feature engineering and probability-based predictions.",
      tech: [
        "Python",
        "FastAPI",
        "Streamlit",
        "scikit-learn",
        "Pandas",
        "Docker",
      ],
      link: "https://github.com/DigvijayPatel1/insurance-ml-app",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">
          Other Experiments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)] hover:border-white/30 transition-all duration-500 flex flex-col justify-between min-h-[260px] md:min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors backdrop-blur-md border border-white/10">
                    <Terminal size={24} />
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-mono text-gray-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/5"
                  >
                    {t}
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

export default OtherProjectsSection;
