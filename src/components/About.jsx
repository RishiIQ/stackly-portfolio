import React, { useEffect, useRef, useState } from "react";
import { Terminal, Cpu, Award, Briefcase, GraduationCap, Code, Layers } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative w-full min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-[#e9f2eb] text-[#2D312E] flex flex-col justify-center overflow-hidden">
      
      {/* Ambient Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5ded0]/40 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8A9A86] block mb-3 font-semibold">01 // Background & Profile</span>
            <h2 className="lg:text-7xl md:text-5xl sm:text-3xl text-4xl font-black tracking-tighter uppercase text-[#2D312E]">
              Architecting <span className="font-light text-[#A8B2A6]">Excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#5A635E] font-light text-base leading-relaxed">
            Bridging rigorous frontend architecture, fluid motion design, and high-performance React component ecosystems.
          </p>
        </div>

        {/* Professional Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Professional Summary & Current Role (Span 7) */}
          <div className={`lg:col-span-7 p-10 rounded-[2.5rem] bg-[#F4F1EA] border border-[#EAE6DF] flex flex-col justify-between transition-all duration-700 hover:-translate-y-1 hover:shadow-xl group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`} style={{ transitionDelay: "150ms" }}>
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#8A9A86] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-md">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 bg-[#FAF9F6] border border-[#EAE6DF] rounded-full text-[#778573]">
                  Active Role
                </span>
              </div>
              
              <span className="text-xs font-mono tracking-widest text-[#778573] uppercase mb-2 block font-semibold">Software Builder @ Stackly</span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4 text-[#2D312E]">
                Frontend Architect & UI Specialist
              </h3>
              
              <p className="text-[#5A635E] font-light leading-relaxed text-base mb-6">
                Currently engineering scalable production dashboards, modular UI engines, and high-performance web solutions. I specialize in clean React architectures, responsive layouts, and meticulous user experience engineering.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#9A948C]">
              <span>Tamil Nadu, India • Remote / On-Site</span>
              <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse" />
            </div>
          </div>

          {/* Card 2: Core Engineering Focus (Span 5) */}
          <div className={`lg:col-span-5 p-10 rounded-[2.5rem] bg-[#F4F1EA] border border-[#EAE6DF] flex flex-col justify-between transition-all duration-700 hover:-translate-y-1 hover:shadow-xl group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`} style={{ transitionDelay: "300ms" }}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8A9A86] text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-md">
                <Code className="w-5 h-5" />
              </div>
              
              <span className="text-xs font-mono tracking-widest text-[#778573] uppercase mb-2 block font-semibold">Technical Expertise</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-[#2D312E]">
                Stack & Philosophy
              </h3>
              
              <p className="text-[#5A635E] font-light leading-relaxed text-sm mb-6">
                Rooted in modern JavaScript/TypeScript, React ecosystems, Python backends, and SQL database management. Focused on type safety, modular component reusability, and buttery-smooth micro-interactions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind CSS", "Python", "MySQL", "UI Motion"].map(t => (
                <span key={t} className="text-[10px] font-mono uppercase px-3 py-1 bg-[#FAF9F6] border border-[#EAE6DF] rounded-full text-[#5A635E]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Education, Roots & Certification (Span 12 Full-Width Banner) */}
          <div className={`lg:col-span-12 p-8 sm:p-10 rounded-[2.5rem] bg-[#2D312E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-700 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`} style={{ transitionDelay: "450ms" }}>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#8A9A86] shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#DCD6C9] uppercase block mb-1">Education & Credentials</span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">GUVI Zen Class Full-Stack Software Engineering Graduate</h3>
                <p className="text-xs text-neutral-400 font-light mt-1">Intensive technical bootcamp focusing on professional web development standards and industry deployment workflows.</p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full bg-white/10 text-neutral-200 border border-white/10">
                Certified Full-Stack Dev
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}