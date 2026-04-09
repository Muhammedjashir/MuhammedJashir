"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = ["Projects", "Experience", "Education", "Contact"];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#07051a]/80 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-medium tracking-tight text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`pointer-events-auto flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 ease-out will-change-transform ${
            scrolled || isOpen
              ? "w-[90%] md:w-[600px] bg-white/[0.03] backdrop-blur-3xl border border-white/10" 
              : "w-[95%] md:w-[800px] bg-transparent border border-transparent"
          }`}
          style={{
            boxShadow: scrolled || isOpen
              ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.4)" 
              : "none"
          }}
        >
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-white font-bold tracking-tighter text-xl hover:opacity-80 transition-opacity"
          >
            MJ<span className="text-white/40">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              >
                {item}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors relative z-10 shrink-0"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            )}
          </button>
        </motion.nav>
      </div>
    </>
  );
}
