import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "preact/hooks";
import BlurText from "./reactbits/BlurText";
import RotatingText from "./reactbits/RotatingText";
import DecryptedText from "./reactbits/DecryptedText";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden bg-[#0a0d14]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mouse-follow glow */}
      <div
        className="absolute pointer-events-none z-[1] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(20px)",
          transition: "left 0.15s ease-out, top 0.15s ease-out, opacity 0.5s",
        }}
      />

      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="./assets/hero_bg_poster.jpg"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="./assets/hero_bg_video.mp4" type="video/mp4" />
          <source src="./assets/hero_bg_video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-transparent to-[#0a0d14]"></div>
        <div className="absolute inset-0 bg-[#0a0d14]/40"></div>
      </div>

      {/* Main Container */}
      <div className="z-10 container max-w-[1260px] mx-auto px-6 flex flex-col items-center">

        {/* Hero Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 mt-0 md:mt-[-5vh] flex justify-center w-full"
        >
          <img src="./assets/critico.svg" alt="Critico" className="w-[180px] h-[40px] brightness-125 mx-auto" />
        </motion.div>

        {/* Pre-title — DecryptedText: scrambled chars resolve left-to-right on view */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center w-full max-w-[800px] mb-12"
        >
          <div className="flex-1 h-[1px] bg-[#1c1f26] shadow-[0_1.5px_0_#000]"></div>
          <span className="px-6 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase whitespace-nowrap">
            <DecryptedText
              text="Bespoke Engineering for High-Growth Teams"
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={30}
              className="text-[#858b94]"
              encryptedClassName="text-[#60a5fa]/50"
              parentClassName=""
            />
          </span>
          <div className="flex-1 h-[1px] bg-[#1c1f26] shadow-[0_1.5px_0_#000]"></div>
        </motion.div>

        {/* Title — static lines with RotatingText for the key noun phrase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[42px] md:text-[62px] font-medium leading-[1.2] text-center max-w-[900px] mb-8 tracking-[-0.02em] text-white"
        >
          <h1 className="flex flex-col items-center gap-1">
            <span>Build the</span>
            {/* Rotating phrase — overflow-hidden clips the spring enter/exit animation */}
            <span className="overflow-hidden flex items-center justify-center h-[1.25em]">
              <RotatingText
                texts={["Custom Software", "AI Systems", "Automation Tools", "Bespoke Platform"]}
                mainClassName="inline-flex items-center justify-center"
                elementLevelClassName="bg-gradient-to-r from-[#60a5fa] to-[#a855f7] bg-clip-text text-transparent"
                rotationInterval={2800}
                staggerDuration={0.03}
                staggerFrom="center"
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                splitBy="characters"
              />
            </span>
            <span>That Scales Your Business</span>
          </h1>
        </motion.div>

        {/* Description — BlurText: word-by-word blur-in on enter viewport */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-14 flex justify-center"
        >
          <BlurText
            text="Stop settling for off-the-shelf tools. We build high-performance software and intelligent systems tailored precisely to your unique workflows."
            animateBy="words"
            delay={60}
            stepDuration={0.3}
            direction="bottom"
            className="text-[#858b94] text-lg md:text-xl text-center max-w-[620px] leading-[1.4] justify-center"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-10"
        >
          <motion.a
            href="#ready-to-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group p-[2px] rounded-[10px] bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-[10px]" />
            <div className="bg-[#0a0d14] rounded-[8px] px-8 py-4 flex items-center gap-3 relative z-10">
              <div className="p-1 rounded-sm bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors duration-200">
                <ArrowUpRight size={14} />
              </div>
              <span className="font-mono text-[13px] font-bold tracking-widest text-white uppercase">Start a Project</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-mono text-[9px] text-[#858b94] uppercase tracking-widest opacity-60"
        >
          From initial concept to full-scale deployment.
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#858b94] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
};
