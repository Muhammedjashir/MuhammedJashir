import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative">
      
      
      <AnimatedBackground />
      <ScrollyCanvas />
      <div id="projects">
        <Projects />
      </div>
      <Experience />
      <Education />
      <Contact />
      <footer className="py-12 bg-transparent text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Muhammed Jashir. All rights reserved.</p>
      </footer>
     
    </main>
  );
}
