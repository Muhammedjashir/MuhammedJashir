import AnimatedBackground from "@/components/AnimatedBackground";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic Websites | Muhammed Jashir",
  description: "Collection of dynamic website projects developed by Muhammed Jashir.",
};

const dynamicProjects = [
  {
    id: 1,
    title: "E-Learning Platform",
    category: "Full Stack",
    description: "A comprehensive learning management system with dynamic video tracking, quizzes, and user dashboards.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2374&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Real Estate Portal",
    category: "Web App",
    description: "Dynamic property listings with advanced filtering, map integration, and user login capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2373&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    category: "SaaS",
    description: "Analytics dashboard parsing real-time dynamic data to generate user growth statistics and graphs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Booking System App",
    category: "Full Stack",
    description: "Real-time calendar and scheduling interface for dynamic appointment mapping and payment gateway.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2370&auto=format&fit=crop",
    link: "#"
  }
];

export default function DynamicWebsitesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative top-0 pb-32">
      {/* Background layer */}
      <AnimatedBackground />

      {/* Internal Navigation */}
      <nav className="relative z-50 px-8 py-10 w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/#projects" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Portfolio</span>
        </Link>
        <div className="text-white font-bold tracking-tighter text-xl">
          MJ<span className="text-white/40">.</span>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-20 pb-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Dynamic Websites</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A deeper dive into the robust data-driven applications I've built using the MERN stack.
          </p>
          <div className="w-24 h-1 bg-white/20 mx-auto" />
        </div>
      </section>

      {/* Grid Content */}
      <section className="px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {dynamicProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-[450px]"
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
                      <p className="text-white/80 max-w-sm hidden md:block">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:bg-white text-white group-hover:text-black">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
