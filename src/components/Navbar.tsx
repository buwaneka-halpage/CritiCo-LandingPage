import { useState, useEffect } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Expertise", href: "#service" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Process", href: "#process" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Success Stories", href: "#case" },
    { name: "FAQs", href: "#faq" }
  ];

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-[100] transition-all duration-500">
      <div className="container max-w-[1260px] mx-auto px-6 relative">
        <div className="navbar-inner-wrap relative border border-white/10 backdrop-blur-xl shadow-2xl flex justify-between items-center h-16">
          
          {/* Left Nav (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center pr-12">
            {links.slice(0, 3).map(link => (
              <a key={link.name} href={link.href} className="nav-link whitespace-nowrap">
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
              <a key={link.name} href={link.href} className="nav-link whitespace-nowrap">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Centered on Mobile) */}
          <div className="lg:hidden flex-1 flex justify-end pr-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5"
            >
              <div className={`w-5 h-[1.5px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></div>
              <div className={`w-5 h-[1.5px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-[1.5px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay (Animated Upwards) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full left-6 right-6 mb-4 lg:hidden"
          >
            <div className="p-8 rounded-[20px] bg-[#11141b]/95 backdrop-blur-2xl border border-white/10 shadow-3xl">
              <div className="flex flex-col gap-4 items-center">
                {links.map(link => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg text-white/60 hover:text-white transition-colors py-2 w-full text-center hover:bg-white/5 rounded-lg">
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
