import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "preact/hooks";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden bg-[#0a0d14]">
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
        {/* Overlays for depth */}
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

        {/* Pre-title Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center w-full max-w-[800px] mb-12"
        >
          <div className="flex-1 h-[1px] bg-[#1c1f26] shadow-[0_1.5px_0_#000]"></div>
          <span className="px-6 font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-[#858b94] uppercase whitespace-nowrap">
            Bespoke Engineering for High-Growth Teams
          </span>
          <div className="flex-1 h-[1px] bg-[#1c1f26] shadow-[0_1.5px_0_#000]"></div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[42px] md:text-[62px] font-medium leading-[1.2] text-center max-w-[900px] mb-8 tracking-[-0.02em] text-white"
        >
          Build the Custom Software <br className="hidden md:block" /> That Scales Your Business
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#858b94] text-lg md:text-xl text-center max-w-[620px] mb-14 leading-[1.4]"
        >
          Stop settling for off-the-shelf tools. We build high-performance software and intelligent systems tailored precisely to your unique workflows.
        </motion.p>


        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-10"
        >
          {/* Start Project Button (Rainbow Border) */}
          <a href="#ready-to-start" className="group p-[2px] rounded-[10px] bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] hover:scale-105 active:scale-95 transition-all duration-300">
            <div className="bg-[#0a0d14] rounded-[8px] px-8 py-4 flex items-center gap-3">
              <div className="p-1 rounded-sm bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors">
                 <ArrowUpRight size={14} />
              </div>
              <span className="font-mono text-[13px] font-bold tracking-widest text-white uppercase">Start a Project</span>
            </div>
          </a>
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
    </section>
  );
};
