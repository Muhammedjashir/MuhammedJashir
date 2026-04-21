"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Many Dynamic Websites",
    category: "Full Stack",
    description: "Various dynamic website projects demonstrating advanced data management and interactivity.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "/dynamic-websites"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Web App",
    description: "A highly performant storefront with seamless shopping flows and animations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Arabbia",
    category: "Corporate",
    description: "Digital presence for an Arab related company, built with modern tech.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2364&auto=format&fit=crop",
    link: "https://vercel.com/muhammedjashirs-projects/arabbia-com"
  },
  {
    id: 4,
    title: "E-Commerce Static",
    category: "Frontend",
    description: "Fast, responsive static layout for E-Commerce platform.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Furniture Static",
    category: "UI Design",
    description: "Modern furniture catalog landing page with elegant typography.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2370&auto=format&fit=crop",
    link: "https://voicence-task-167n.vercel.app/"
  },
  {
    id: 6,
    title: "Company Website for Imit",
    category: "Brand Platform",
    description: "Official modern corporate website built for Imit Park Ltd.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="bg-transparent py-32 px-6 relative z-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-white/20" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link !== "#" ? project.link : undefined}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (project.link === "#") {
                  e.preventDefault();
                  alert("This web is private");
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index % 3 === 0 ? "md:col-span-2 md:h-[500px]" : "h-[450px]"
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-sm font-bold tracking-wider text-blue-400 mb-3 block uppercase drop-shadow-md">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/80 max-w-sm text-sm md:text-base mt-2 line-clamp-2 md:line-clamp-none">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white text-white group-hover:text-black">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
