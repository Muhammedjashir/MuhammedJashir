"use client";

import { motion } from "framer-motion";

const educationDetails = [
  {
    id: 1,
    degree: "Software Development in MERN Stack",
    institution: "Bridgeon Solution LLP",
    period: "2024 - 2025",
    description: "Expanding expertise in modern web technologies, specializing in Software Development within the MERN Stack. This phase marks a transition into a technical, development-focused career, equipping with skills to build scalable and modern web applications.",
  },
  {
    id: 2,
    degree: "BA Mass Communication and Journalism",
    institution: "University of Calicut / CM College Wayanad",
    period: "Graduated 2021",
    description: "University of Calicut is a renowned institution in Kerala. The BA program builds strong media knowledge, communication theory, and practical application.",
  },
  {
    id: 3,
    degree: "Higher Secondary (HSE)",
    institution: "National Council of Educational Research and Training, Kerala",
    period: "2016 - 2018",
    description: "Kerala HSE is a pre-university program preparing students for higher education and professional development through a balanced curriculum.",
  }
];

export default function Education() {
  return (
    <section id="education" className="bg-transparent py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Education </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group h-full flex flex-col"
            >
              <div className="mb-6 flex-1">
                <span className="text-sm font-bold tracking-wider text-pink-500 mb-3 block">
                  {edu.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-white/60 font-serif italic mb-6">
                  {edu.institution}
                </h4>
                <p className="text-white/70 leading-relaxed text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
