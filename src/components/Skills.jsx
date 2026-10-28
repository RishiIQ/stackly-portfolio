import React, { useEffect, useRef, useState } from "react";
import { Code2, Cpu, Database, Wrench } from "lucide-react";

export default function Skills() {
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

  const categories = [
    { icon: Code2, title: "Frontend Architecture", subtitle: "UI & Design", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"] },
    { icon: Cpu, title: "Motion & Animation", subtitle: "Interactions", skills: ["GSAP", "Framer Motion", "Micro-interactions", "3D Transforms", "Lucide Icons"] },
    { icon: Database, title: "Backend & Database", subtitle: "Ecosystem", skills: ["Python", "MySQL", "Node.js", "Express.js", "MongoDB", "REST APIs"] },
    { icon: Wrench, title: "Development Tools", subtitle: "Environment", skills: ["Git & GitHub", "VS Code", "Vite", "Vercel"] }
  ];

  return (
    <section id="skills" ref={containerRef} className="relative w-full min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-[#FDFCF7] text-[#2D312E] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className={`mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8A9A86] block mb-3 font-semibold">02 // Capabilities</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase text-[#2D312E]">
            Technical <span className="font-light text-[#A8B2A6]">Proficiency.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`p-10 rounded-[2.5rem] bg-[#cad9ce] border border-[#EAE6DF] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-700 ease-out overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0ECE1] flex items-center justify-center text-[#2D312E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-black uppercase">0{idx+1} // {cat.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 text-[#2D312E]">{cat.title}</h3>
                </div>

                {/* Infinite Train-Like Moving Ticker inside the card container */}
                <div className="w-full relative overflow-hidden py-3 bg-[#F4F1EA] rounded-2xl border border-[#EAE6DF] mt-4">
                  <div className="flex w-max animate-infinite-train hover:[animation-play-state:paused]">
                    {[...cat.skills, ...cat.skills, ...cat.skills].map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="flex items-center mx-2.5 px-4 py-1.5 rounded-xl bg-[#FAF9F6] border border-[#DCD6C9] shadow-sm shrink-0 text-[11px] font-mono tracking-wider uppercase text-[#5A635E] select-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] mr-2"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Inline CSS for Infinite Train Keyframe Animation */}
      <style>{`
        @keyframes infiniteTrain {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-infinite-train {
          animation: infiniteTrain 18s linear infinite;
        }
      `}</style>
    </section>
  );
}