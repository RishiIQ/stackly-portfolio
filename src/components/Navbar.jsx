export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl flex items-center justify-between px-6 py-2.5 bg-[#FAF9F6]/90 backdrop-blur-xl border border-[#EAE6DF] rounded-full shadow-lg transition-all text-[#2D312E]">
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}
        className="text-sm font-bold tracking-tighter uppercase text-[#2D312E] flex items-center gap-2 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-[#8A9A86]"></span>
        Rishi M.
      </a>

      <nav className="hidden md:flex items-center gap-1 bg-[#F0ECE1]/80 p-1 rounded-full border border-[#EAE6DF]">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { 
                e.preventDefault(); 
                if (item.id === "about") {
                  const homeEl = document.getElementById("home");
                  if (homeEl) {
                    window.scrollTo({ top: homeEl.offsetTop + window.innerHeight * 1.5, behavior: "smooth" });
                  }
                } else {
                  handleNavClick(item.id); 
                }
              }}
              className={`px-4 py-1 text-[11px] uppercase tracking-wider rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#8A9A86] text-white font-bold shadow-sm"
                  : "text-[#6C7570] hover:text-[#2D312E] hover:bg-[#E2DDD5]/60"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
        className="relative group px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#8A9A86] text-white overflow-hidden shadow-md transition-all duration-500 hover:shadow-lg cursor-pointer"
      >
        <span className="absolute inset-0 bg-[#2D312E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"></span>
        <span className="relative block h-4 overflow-hidden">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-full">
            Let's Talk
          </span>
          <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0 text-white">
            Let's Talk
          </span>
        </span>
      </a>
    </header>
  );
}