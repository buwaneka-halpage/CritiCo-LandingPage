import { motion } from "framer-motion";

const features = [
  {
    icon: "./assets/icon-12.svg",
    title: "Custom Strategies",
    desc: "Tailored solutions that align with your goals, not one-size-fits-all templates."
  },
  {
    icon: "./assets/icon-13.svg",
    title: "Seamless Integration",
    desc: "We connect AI with your tools, data, and workflows for instant adoption."
  },
  {
    icon: "./assets/icon-14.svg",
    title: "Human + AI Approach",
    desc: "Balanced solutions that combine automation with real oversight."
  },
  {
    icon: "./assets/icon-15.svg",
    title: "End-to-End Delivery",
    desc: "From idea to deployment, we handle strategy, development, and optimization."
  }
];

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="choose-section py-24 bg-[#0a0d14] relative overflow-hidden">
      <div className="container max-w-[1260px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="choose-title-wrap flex flex-col items-center text-center gap-6 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pre-title-wrap flex items-center gap-4">
            <div className="pre-title-line w-12 h-[1px] bg-[#1c1f26]"></div>
            <div className="pre-title font-mono text-[11px] tracking-[0.3em] text-[#858b94] uppercase">WHY CHOOSE US</div>
            <div className="pre-title-line w-12 h-[1px] bg-[#1c1f26]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-white to-[#858b94] bg-clip-text text-transparent max-w-3xl">
            High-Performance Software & Intelligent Systems
          </h2>
          <p className="text-[#858b94] text-lg max-w-2xl leading-relaxed">
            We’re a team of software architects, engineers, and AI strategists building the digital infrastructure that moves modern companies forward.
          </p>
        </motion.div>

        {/* Central Chat Interaction Mockup */}
        <div className="choose-content-wrap flex flex-col items-center justify-center relative mb-24 min-h-[500px]">
           
           {/* Background "Flow" Lines */}
           <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <img src="./assets/bg_pattern.svg" className="w-[650px]" alt="" />
           </div>

           {/* Top Box (Chat Input) */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="choose-content-inner z-10 w-full max-w-[650px] p-6 rounded-[24px] bg-[#0a0d14]/20 backdrop-blur-sm border border-white/10 shadow-[0_0_0_6px_#161920]"
           >
              <div className="text-[14px] text-[#858b94] leading-relaxed mb-12 italic">
                How can we build a scalable platform that handles our unique business logic and automates follow-ups?
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] border border-white/5 flex items-center justify-center">
                       <img src="./assets/icon-4.svg" className="w-3.5" alt="" />
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] border border-white/5 flex items-center gap-2">
                       <img src="./assets/icon-5.svg" className="w-3.5" alt="" />
                       <span className="text-[11px] text-[#858b94] font-mono">Attach</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] border border-white/5 flex items-center justify-center">
                       <img src="./assets/icon-6.svg" className="w-3.5" alt="" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white/20 to-white/10 border border-white/20 flex items-center justify-center">
                       <img src="./assets/icon-7.svg" className="w-3.5" alt="" />
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Bottom Box (Stack Integration) */}
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="choose-content-inner two z-0 w-full max-w-[420px] p-5 rounded-b-[24px] bg-[#0a0d14]/40 backdrop-blur-md border border-white/5 -mt-[1px] shadow-[0_5px_0_6px_#161920]"
           >
              <div className="flex items-center justify-between">
                 <div className="text-[11px] font-mono text-[#858b94] uppercase tracking-wider">We plug into your stack:</div>
                 <div className="flex items-center gap-4 opacity-60">
                    <img src="./assets/icon-8.svg" className="w-3.5" alt="" />
                    <img src="./assets/icon-9.svg" className="w-3.5" alt="" />
                    <img src="./assets/icon-10.svg" className="w-3.5" alt="" />
                    <img src="./assets/icon-11.svg" className="w-3.5" alt="" />
                 </div>
              </div>
           </motion.div>

        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center text-center gap-5 cursor-default"
              >
                 <img src={f.icon} className="h-8 w-auto" alt={f.title} />
                 <h3 className="text-xl font-medium text-white">{f.title}</h3>
                 <p className="text-[14px] text-[#858b94] leading-relaxed max-w-[200px]">{f.desc}</p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};
