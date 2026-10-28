import React, { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 bg-[#FDFCF7] text-[#2D312E]">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8A9A86] block mb-3 font-semibold">04 // Connect</span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-4 text-[#2D312E]">
            Let's <span className="font-light text-[#A8B2A6]">Talk.</span>
          </h2>
          <p className="text-[#5A635E] font-light text-base max-w-lg mx-auto">
            Have a project in mind, want to collaborate, or connect? Drop a message below.
          </p>
        </div>

        <div className={`p-8 sm:p-12 rounded-[3rem] bg-[#FAF9F6] border border-[#EAE6DF] shadow-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          {submitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-[#8A9A86] animate-bounce" />
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#2D312E]">Message Dispatched</h3>
              <p className="text-sm font-light text-[#9A948C]">Thank you for reaching out. I will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#6C7570]">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rishi M."
                  className="px-5 py-4 rounded-2xl bg-[#F4F1EA] border border-[#EAE6DF] text-[#2D312E] placeholder-[#A8B2A6] focus:outline-none focus:border-[#2D312E] transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#6C7570]">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="rishirishim0@gmail.com"
                  className="px-5 py-4 rounded-2xl bg-[#F4F1EA] border border-[#EAE6DF] text-[#2D312E] placeholder-[#A8B2A6] focus:outline-none focus:border-[#2D312E] transition-colors text-sm"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#6C7570]">Your Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Let's build something exceptional..."
                  className="px-5 py-4 rounded-2xl bg-[#F4F1EA] border border-[#EAE6DF] text-[#2D312E] placeholder-[#A8B2A6] focus:outline-none focus:border-[#2D312E] transition-colors resize-none text-sm"
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl font-bold uppercase tracking-widest bg-[#2D312E] text-white hover:bg-[#434945] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}