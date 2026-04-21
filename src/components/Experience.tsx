"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "MERN Full Stack Developer",
    company: "IMIT Park Thrissur",
    period: "2025 – Present",
    description: "At Imit Park Ltd, I develop and maintain high-performance MERN stack web applications, collaborating with teams to deliver seamless user experiences and optimize performance.",
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Bridgeon Solution LLP",
    period: "2024 – 2025",
    description: "Bridgeon Solution LLP is a leading software development company specializing in scalable digital solutions. During my time there, I gained hands-on experience in modern web technologies and full-stack development.",
  },

];

export default function Experience() {
  return (
    <section id="experience" className="bg-transparent py-32 px-6 relative z-10 w-full overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-indigo-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-white/20 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Subtle gradient line in background */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#060125] via-[#060125] to-[#060125] hidden md:block" />
          
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="hidden md:flex flex-col items-center shrink-0 w-20 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-black border-4 border-white/20 group-hover:border-blue-500 transition-colors duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 flex-1 hover:bg-white/10 transition-colors duration-500 group-hover:border-white/20">
                  <span className="text-sm font-bold tracking-wider text-blue-400 mb-2 block uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg md:text-xl text-white/60 mb-6 font-serif italic">
                    @ {exp.company}
                  </h4>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
