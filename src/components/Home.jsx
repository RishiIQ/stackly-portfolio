import React, { useState, useEffect } from "react";
import { ArrowDownRight } from "lucide-react";

export default function Home({ setCurrentPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationStage, setAnimationStage] = useState(0); // 0: Together in center, 1: Split apart & show image, 2: Back together
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previewImages = [
    "/images/vespa.png",
    "/images/saas.png",
    "/images/travel.png",
    "/images/helpdesk.png",
  ];

  useEffect(() => {
    // Stage 1: After 700ms, split the names apart and show the widescreen image in the middle
    const splitTimer = setTimeout(() => {
      setAnimationStage(1);
    }, 700);

    // Cycle through images while split apart
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
    }, 750);

    // Stage 2: After 3.8 seconds total, hide the image and bring names back together permanently
    const resetTimer = setTimeout(() => {
      setAnimationStage(2);
      clearInterval(slideInterval);
    }, 3800);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(resetTimer);
      clearInterval(slideInterval);
    };
  }, [previewImages.length]);

  const handleScrollTo = (id) => {
    setCurrentPage(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-16 lg:px-24 pt-32 sm:pt-36 pb-16 bg-[#FDFCF7] text-[#2D312E] select-none overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-1/4 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#E3EBE4]/70 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* Top Meta info */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#EAE6DF] pb-4 sm:pb-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#6C7570] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse shrink-0" />
          <span className="truncate">Available for Select Projects • 2026</span>
        </div>
        <div className="hidden sm:block text-xs uppercase tracking-widest text-[#9A948C] font-mono">
          Tamil Nadu, India
        </div>
      </div>

     <div className="flex justify-center items-center w-full my-6">
  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-4 rounded-[2.5rem] bg-[#FAF9F6] border border-[#EAE6DF] shadow-lg hover:shadow-xl transition-all duration-500 group">
    <div className="flex justify-center items-center w-full h-64 sm:h-80 rounded-[2rem] overflow-hidden bg-[#F0ECE1] border border-[#DCD6C9] relative">
      <img 
        src="/public/rishi.jpeg" 
        alt="Rishi M." 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
  </div>
</div>

      {/* Main Massive Editorial Typography */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12 flex flex-col items-center text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.255em] sm:tracking-[0.3em] text-[#8A9A86] font-mono mb-4 sm:mb-6">
          Frontend Architect & UI Motion Specialist
        </p>
        
        {/* Row Container with Responsive Center Split Logic */}
        <div className="flex items-center justify-center w-full overflow-hidden py-2 sm:py-4 gap-0">
          
          {/* RISHI Name (Starts centered, moves left when stage >= 1) */}
          <h1 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`text-[11vw] sm:text-[8.5vw] lg:text-[7.5vw] font-black tracking-tighter uppercase leading-[0.85] text-[#2D312E] flex cursor-pointer shrink-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              animationStage === 0 ? "translate-x-[22%] sm:translate-x-[26%]" : "translate-x-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {"RISHI".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  transform: isHovered ? "rotateY(360deg) scale(1.05)" : "rotateY(0deg) scale(1)",
                  transitionDelay: `${index * 60}ms`,
                  transformStyle: "preserve-3d"
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Middle Widescreen Image Container (Fully responsive width/height scaling) */}
          <div 
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden flex items-center justify-center shrink-0 ${
              animationStage === 1 
                ? "opacity-100 scale-100 mx-2 sm:mx-4 lg:mx-6 w-[50px] sm:w-[40px] md:w-[150px] lg:w-[200px] h-[40px] sm:h-[20px] md:h-[80px] lg:h-[100px]" 
                : "opacity-0 scale-50 mx-0 w-0 h-0 pointer-events-none"
            }`}
          >
            <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0ECE1] border border-[#DCD6C9] shadow-xl sm:shadow-2xl relative">
              <img 
                key={currentImageIndex}
                src={previewImages[currentImageIndex]} 
                alt="Site Preview"
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* MURUGAN Last Name (Starts centered, moves right when stage >= 1) */}
          <span className={`text-[11vw] sm:text-[8.5vw] lg:text-[7.5vw] font-light tracking-tighter uppercase leading-[0.85] text-[#A8B2A6] shrink-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            animationStage === 0 ? "-translate-x-[22%] sm:-translate-x-[26%]" : "translate-x-0"
          }`}>
            Murugan
          </span>

        </div>

        <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl font-light text-[#5A635E] leading-relaxed px-2">
          Crafting high-performance React architectures, fluid interface designs, and immersive digital web experiences with rigorous precision.
        </p>
      </div>

      {/* Bottom Action Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 border-t border-[#EAE6DF] pt-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={() => handleScrollTo("projects")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#8A9A86] text-white hover:bg-[#778573] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
          >
            <span>Explore Works</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF9F6] hover:bg-[#F0ECE1] text-[#2D312E] border border-[#DCD6C9] transition-all cursor-pointer text-center"
          >
            Read Bio
          </button>
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9A948C] font-mono text-center sm:text-right">
          Scroll Down to Discover
        </span>
      </div>

    </section>
  );
}