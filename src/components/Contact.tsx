"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs.sendForm(
      'service_z7njq9g', // Service ID
      'template_rup62mm', // Template ID
      formRef.current,
      {
        publicKey: 'dLHC9bfTyMyukMUKm',
      }
    )
      .then((result) => {
          setStatus('success');
          if(formRef.current) formRef.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="bg-transparent py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 ">Let's Connect </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Column: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">My details</h3>
              <p className="text-white/60 mb-10 leading-relaxed text-sm">
                I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="https://www.linkedin.com/in/muhammedjashir/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white/80 hover:text-blue-400 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-blue-400/20 group-hover:border-blue-400/40 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                  <div>
                    <span className="text-sm text-white/40 block mb-1">Social Profile</span>
                    <span className="text-lg font-medium group-hover:underline">LinkedIn</span>
                  </div>
                </a>
                
                <a href="https://github.com/Muhammedjashir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white/80 hover:text-white transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </div>
                  <div>
                    <span className="text-sm text-white/40 block mb-1">Code Repository</span>
                    <span className="text-lg font-medium group-hover:underline">GitHub</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/muhammedjashir_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-white/80 hover:text-pink-400 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-pink-400/20 group-hover:border-pink-400/40 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </div>
                  <div>
                    <span className="text-sm text-white/40 block mb-1">Visual Portfolio</span>
                    <span className="text-lg font-medium group-hover:underline">Instagram</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 h-64 overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none rounded-3xl" />
              <iframe 
                src="https://maps.google.com/maps?q=11.7622951,76.0286499&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: "1.25rem", filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600/20 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-600/20 blur-[80px] pointer-events-none" />

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="user_name" className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3 block">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors font-medium text-lg"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3 block">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email"
                    required 
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors font-medium text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex-1 mt-4">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3 block">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  required
                  rows={6}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/[0.05] transition-all font-medium resize-none text-lg leading-relaxed shadow-inner"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="mt-4 flex items-center justify-end">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full md:w-auto bg-white text-black font-bold px-10 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 hover:bg-gray-200 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  {status === 'sending' ? (
                    <span className="inline-block animate-pulse">Sending...</span>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} className="text-green-600" />
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle size={20} className="text-red-500" />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
