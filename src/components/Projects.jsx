import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projectsData = [
  { id: "01", title: "Vesper Commerce Engine", category: "E-Commerce", description: "High-performance e-commerce dashboard with real-time inventory tracking.", link: "https://e-commerce-dashboard-two-phi.vercel.app/", Image: "/images/vespa.png" },
  { id: "02", title: "Authentication & Access Control", category: "Security", description: "Secure user access dashboard featuring role-based permissions.", link: "https://auth-dashboard-pearl.vercel.app/", Image: "/images/helpdesk.png" },
  { id: "03", title: "SaaS Management Engine", category: "Analytics", description: "Comprehensive SaaS metrics dashboard tracking MRR and activity.", link: "https://saas-dashboard-teal-kappa.vercel.app/", Image: "/images/saas.png" },
  { id: "04", title: "Travel & Booking Portal", category: "Hospitality", description: "Immersive travel booking management dashboard with live itineraries.", link: "https://travel-booking-dashboard-olive.vercel.app/", Image: "/images/travel.png" },
  { id: "05", title: "Helpdesk Support Center", category: "Operations", description: "Streamlined support ticket management with priority queues.", link: "https://help-desk-dashboard-three.vercel.app/", Image: "/images/helpdesk.png" },
  { id: "06", title: "Auth & Identity Hub", category: "Identity", description: "Advanced authentication control panel for secure enterprise gateways.", link: "https://authendication-dashbord.vercel.app/", Image: "/images/authIden.png" },
];

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".project-stack-card");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      cards.forEach((card, index) => {
        const top = card.offsetTop;
        const height = card.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative w-full bg-[#e9f2eb] text-[#2D312E] py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#c5ded0]/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8A9A86] block mb-3 font-semibold">
              03 // Archive
            </span>
            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase text-[#2D312E]">
              Featured <span className="font-light text-[#A8B2A6]">Works.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#5A635E]">
            <span>[SCROLL TO STACK]</span>
            <span className="px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#EAE6DF]">
              0{activeIndex + 1} / 0{projectsData.length}
            </span>
          </div>
        </div>

        <div className="relative flex flex-col gap-16 md:gap-32 pb-32">
          {projectsData.map((project, index) => {
            const distance = index - activeIndex;

            return (
              <div
                key={project.id}
                className="project-stack-card sticky top-28 md:top-32 w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  zIndex: index + 1,
                  transform: `scale(${Math.max(0.85, 1 - Math.abs(distance) * 0.05)}) translateY(${distance * 15}px)`,
                  opacity: distance > 2 ? 0 : 1,
                }}
              >
                <div className="p-8 sm:p-14 rounded-[3rem] bg-[#F4F1EA] border border-[#EAE6DF] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 group transition-all duration-500">
                  <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono tracking-widest text-[#8A9A86] uppercase font-semibold">
                          {project.id} // {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#9A948C]">DEPLOYED VERCEL</span>
                      </div>
                      <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#2D312E] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg font-light text-[#5A635E] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2D312E] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#8A9A86] transition-all duration-300 shadow-md group/btn"
                      >
                        <span>Launch Live Preview</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                      <span className="text-xs font-mono text-[#9A948C] hidden sm:block">SECURE HTTPS</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden bg-[#EAE6DF] border border-[#DCD6C9] relative group/img shadow-lg cursor-pointer"
                    >
                      <img 
                        src={project.Image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover/img:scale-105 group-hover/img:grayscale-0 transition-all duration-700 ease-out"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-[#2D312E]/10 group-hover/img:bg-transparent transition-colors" />
                      <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-[#FAF9F6]/90 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#2D312E] shadow-sm flex items-center gap-2">
                        <span>Explore</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}