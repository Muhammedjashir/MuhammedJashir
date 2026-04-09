"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

// 🔥 Lazy load all heavy components
const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"), {
  ssr: false,
});

const ScrollyCanvas = dynamic(() => import("@/components/ScrollyCanvas"), {
  loading: () => <div className="h-screen" />,
  ssr: false,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <Skeleton />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <Skeleton />,
});

const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <Skeleton />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <Skeleton />,
});

// 🔹 Skeleton Loader
function Skeleton() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-pulse w-40 h-10 bg-white/20 rounded"></div>
    </div>
  );
}

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    projects: false,
    experience: false,
    education: false,
    contact: false,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  const refs = {
    projects: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    education: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  // 🔥 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && id) {
            setVisibleSections((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "100px",
      }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // 🔥 Scroll listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-transparent relative scroll-smooth">

      {/* 🔥 Navbar */}
      <Navbar />

      {/* 🔥 Background */}
      <AnimatedBackground />

      {/* 🔥 Canvas */}
      <ScrollyCanvas />

      {/* 🔥 Sections */}
      <div id="projects" ref={refs.projects} data-id="projects">
        {visibleSections.projects ? <Projects /> : <Skeleton />}
      </div>

      <div id="experience" ref={refs.experience} data-id="experience">
        {visibleSections.experience ? <Experience /> : <Skeleton />}
      </div>

      <div id="education" ref={refs.education} data-id="education">
        {visibleSections.education ? <Education /> : <Skeleton />}
      </div>

      <div id="contact" ref={refs.contact} data-id="contact">
        {visibleSections.contact ? <Contact /> : <Skeleton />}
      </div>

      {/* 🔥 Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-white/10 backdrop-blur-md text-white shadow-lg hover:bg-white/20 transition-all duration-300"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="py-12 text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Muhammed Jashir. All rights reserved.</p>
      </footer>
    </main>
  );
}