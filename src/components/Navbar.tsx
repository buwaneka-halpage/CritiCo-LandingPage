import { useState, useEffect } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = ["service", "why-choose", "process", "tech", "case", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Expertise", href: "#service", id: "service" },
    { name: "Why Us", href: "#why-choose", id: "why-choose" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Tech Stack", href: "#tech", id: "tech" },
    { name: "Success Stories", href: "#case", id: "case" },
    { name: "FAQs", href: "#faq", id: "faq" }
  ];

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-[100] transition-all duration-500">
      <div className="container max-w-[1260px] mx-auto px-6 relative">
        <motion.div
          className="navbar-inner-wrap relative border backdrop-blur-xl shadow-2xl flex justify-between items-center h-16 transition-all duration-500"
          animate={{
            borderColor: scrolled ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
            backgroundColor: scrolled ? "rgba(17,20,27,0.98)" : "transparent",
          }}
          transition={{ duration: 0.4 }}
        >

          {/* Left Nav (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center pr-12">
            {links.slice(0, 3).map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link whitespace-nowrap transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-[#1c1f26] text-white"
                    : "text-[#858b94] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo (Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] z-20">
            <a href="./" className="relative block w-20 h-10">
               <div className="brand-bg-inner-wrap bg-linear-gradient">
                  <div className="nav-brand-wrap text-white">
                     <img src="./assets/footer_logo.svg" className="w-[36px] h-[42px] object-contain" alt="Critico" />
                  </div>
               </div>
            </a>
          </div>

          {/* Right Nav (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center pl-12">
            {links.slice(3).map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link whitespace-nowrap transition-all duration-200 ${
                  activeSection === link.id
                    ? "bg-[#1c1f26] text-white"
                    : "text-[#858b94] hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-1 flex justify-end pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></div>
              <div className={`w-5 h-[1.5px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></div>
            </button>
          </div>

        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-full left-6 right-6 mb-4 lg:hidden"
          >
            <div className="p-8 rounded-[20px] bg-[#11141b]/95 backdrop-blur-2xl border border-white/10 shadow-3xl">
              <div className="flex flex-col gap-4 items-center">
                {links.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg py-2 w-full text-center rounded-lg transition-colors ${
                      activeSection === link.id
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
