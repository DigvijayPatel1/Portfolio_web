import React from "react";
import { ExternalLink } from "lucide-react";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";

const ProjectsSection = () => {
  const projects = [
    {
      role: "Founder & Lead Developer",
      title: "Campus Voice",
      desc: "Developed a student community platform connecting alumni, and students. Features include seniors can post the experiences of their job interviews for intership and placements and juniors can ask questions and get guidance. Built with React, Node.js, MongoDB, and Tailwind CSS.",
      tech: [
        "React.js",
        "Tailwind",
        "MongoDB",
        "Node.js",
        "Express.js",
        "redux-toolkit",
        "nodemailer",
      ],
      image: project1Image,
      live: "https://www.campusvoice.in/",
    },
    {
      role: "Backend Developer",
      title: "Clinical Medication Reconciliation & Conflict Detection System",
      desc: "FastAPI-based backend for multi-source medication reconciliation with rule-based conflict detection, versioned audit trails, and RESTful APIs deployed on Render.",
      tech: ["FastAPI", "Python", "MongoDB", "Pydantic", "Pytest"],
      image: project2Image,
      live: "https://med-reconciliation-7320.onrender.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-16 flex items-center gap-4">
          Featured Work
        </h2>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              {/* IMAGE */}
              <div
                className={`lg:col-span-7 rounded-2xl overflow-hidden relative ${i % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* DETAILS */}
              <div
                className={`lg:col-span-5 space-y-5 ${i % 2 !== 0 ? "lg:text-right" : ""}`}
              >
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                  {p.role}
                </p>
                <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {p.title}
                </h3>

                {/* Intense Glass Box */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-gray-300 leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                  {p.desc}
                </div>

                <ul
                  className={`flex flex-wrap gap-3 text-sm text-gray-300 ${i % 2 !== 0 ? "lg:justify-end" : ""}`}
                >
                  {p.tech.map((t, idx) => (
                    <li
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex items-center gap-4 pt-4 ${i % 2 !== 0 ? "lg:justify-end" : ""}`}
                >
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide"
                  >
                    VIEW PROJECT <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
