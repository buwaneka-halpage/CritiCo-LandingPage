import { Zap, Database, Workflow, Settings, Activity, Layers, Bot, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "preact/hooks";
import { motion, type Variants } from "framer-motion";
import Spotlight from "./reactbits/Spotlight";
import ShinyText from "./reactbits/ShinyText";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let startTime: number | null = null;
          const duration = 2000;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) window.requestAnimationFrame(step);
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

const cardHover: Variants = {
  rest: { y: 0, borderColor: "rgba(133,139,148,0.2)" },
  hover: { y: -5, borderColor: "rgba(96,165,250,0.3)", transition: { duration: 0.3, ease: "easeOut" } }
};

export const Expertise = () => {
  return (
    <section id="service" className="feature-section py-24 bg-[#0a0d14]">
      <div className="container max-w-[1260px] mx-auto px-6">

        {/* Section Title */}
        <motion.div
          className="flex flex-col items-center mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#1c1f26]"></div>
            <ShinyText text="EXPERTISE & CAPABILITIES" speed={4} color="#858b94" shineColor="#60a5fa" className="font-mono text-[11px] tracking-[0.25em] uppercase font-medium" />
            <div className="w-12 h-[1px] bg-[#1c1f26]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight bg-gradient-to-b from-white to-[#858b94] bg-clip-text text-transparent">
            Custom Software & AI Engineering
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
            {/* Process Automation */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
            >
              <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] p-10 h-full flex flex-col justify-between" spotlightColor="rgba(96,165,250,0.1)">
                <div className="flex flex-col gap-6 relative z-10">
                  <div>
                    <h3 className="text-2xl text-white mb-2">Process Automation</h3>
                    <p className="text-[#858b94] max-w-sm">We design intelligent systems that automate complex business processes and ensure smooth, error-free operations.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {["Workflow mapping", "Real-time system integration."].map(text => (
                      <div key={text} className="flex items-center gap-3">
                        <img src="./assets/icon-3.svg" className="w-3 h-3" alt="" />
                        <div className="font-mono text-[10px] text-[#858b94] uppercase tracking-wider">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 relative h-72 w-full flex items-center justify-center">
                  {/*
                    Pentagon hub-and-spoke layout.
                    All CSS positions derived from SVG coords (viewBox 400x288):
                      CSS left = x/400*100%,  CSS top = y/288*100%
                    Center=(200,144) r=105px, 5 nodes every 72deg from top:
                      Node 0 top         (200, 39)  left 50.00%  top 13.54%
                      Node 1 upper-right (300,112)  left 75.00%  top 38.89%
                      Node 2 lower-right (262,229)  left 65.50%  top 79.51%
                      Node 3 lower-left  (138,229)  left 34.50%  top 79.51%
                      Node 4 upper-left  (100,112)  left 25.00%  top 38.89%
                  */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 288" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="wg0" x1="200" y1="144" x2="200" y2="39"  gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9"/><stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/></linearGradient>
                      <linearGradient id="wg1" x1="200" y1="144" x2="300" y2="112" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#ec4899" stopOpacity="0.9"/><stop offset="100%" stopColor="#ec4899" stopOpacity="0"/></linearGradient>
                      <linearGradient id="wg2" x1="200" y1="144" x2="262" y2="229" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#22c55e" stopOpacity="0.9"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0"/></linearGradient>
                      <linearGradient id="wg3" x1="200" y1="144" x2="138" y2="229" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#a855f7" stopOpacity="0.9"/><stop offset="100%" stopColor="#a855f7" stopOpacity="0"/></linearGradient>
                      <linearGradient id="wg4" x1="200" y1="144" x2="100" y2="112" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9"/><stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/></linearGradient>
                    </defs>
                    <path d="M 200 144 L 200 39"  stroke="#ffffff07" strokeWidth="1" fill="none"/>
                    <path d="M 200 144 L 300 112" stroke="#ffffff07" strokeWidth="1" fill="none"/>
                    <path d="M 200 144 L 262 229" stroke="#ffffff07" strokeWidth="1" fill="none"/>
                    <path d="M 200 144 L 138 229" stroke="#ffffff07" strokeWidth="1" fill="none"/>
                    <path d="M 200 144 L 100 112" stroke="#ffffff07" strokeWidth="1" fill="none"/>
                    {([
                      ["M 200 144 L 200 39",  "wg0", 0   ],
                      ["M 200 144 L 300 112", "wg1", 0.6 ],
                      ["M 200 144 L 262 229", "wg2", 1.2 ],
                      ["M 200 144 L 138 229", "wg3", 1.8 ],
                      ["M 200 144 L 100 112", "wg4", 2.4 ],
                    ] as [string, string, number][]).map(([d, grad, delay], i) => (
                      <motion.path
                        key={i}
                        d={d}
                        stroke={`url(#${grad})`}
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay, ease: "linear" }}
                      />
                    ))}
                  </svg>

                  {/* Centre hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] shadow-[0_0_30px_rgba(96,165,250,0.3)] flex items-center justify-center z-10 border border-white/20">
                    <Zap size={24} className="text-white animate-pulse" />
                  </div>

                  {([
                    { Icon: Database, color: "#60a5fa", label: "Data",       left: "47%",   top: "5.5%"   },
                    { Icon: Layers,   color: "#ec4899", label: "App Stack",  left: "67%",   top: "30.89%" },
                    { Icon: Activity, color: "#22c55e", label: "Monitoring", left: "60.5%", top: "80.51%" },
                    { Icon: Workflow, color: "#a855f7", label: "Workflows",  left: "32.5%", top: "80.51%" },
                    { Icon: Settings, color: "#f59e0b", label: "Config",     left: "24%",   top: "31.89%" },
                  ] as { Icon: React.ComponentType<{ size: number; style: React.CSSProperties; className: string }>, color: string, label: string, left: string, top: string }[]).map((node, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.12 }}
                      transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute z-10 flex flex-col items-center gap-1.5"
                      style={{ left: node.left, top: node.top }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl bg-[#11141b] border border-white/[0.08] flex items-center justify-center group hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg relative"
                        style={{ boxShadow: `0 0 18px ${node.color}1a` }}
                      >
                        <node.Icon size={16} style={{ color: node.color }} className="opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 rounded-xl animate-ping opacity-[0.08]" style={{ backgroundColor: node.color, animationDuration: "4s" }} />
                      </div>
                      <span className="font-mono text-[7.5px] text-[#858b94]/60 uppercase tracking-widest whitespace-nowrap">{node.label}</span>
                    </motion.div>
                  ))}
                </div>
              </Spotlight>
            </motion.div>

            {/* Bespoke Software */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
            >
              <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] p-10 h-full flex flex-col justify-between" spotlightColor="rgba(168,85,247,0.1)">
                <div>
                  <h3 className="text-2xl text-white mb-2">Bespoke Software</h3>
                  <p className="text-[#858b94]">We build modern, scalable web and mobile applications tailored to your specific business needs and user requirements.</p>
                </div>
                <div className="mt-8 relative h-48 overflow-hidden rounded-2xl bg-[#0d1017] border border-white/5 p-5 font-mono text-[11px] leading-relaxed group shadow-2xl">
                  <div className="flex items-center justify-between mb-4 opacity-40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em]">infrastructure.ts</span>
                  </div>

                  <div className="space-y-1.5 selection:bg-white/10">
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">01</span>
                      <span className="text-blue-400/90">export <span className="text-purple-400/90">const</span> <span className="text-emerald-400/90">AppConfig</span> = {'{'}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">02</span>
                      <span className="pl-4">strategy: <span className="text-orange-300/80">'high-performance'</span>,</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">03</span>
                      <span className="pl-4 text-white/80">scaling: <span className="text-orange-300/80">'auto-optimized'</span>,</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">04</span>
                      <span className="pl-4"><span className="text-blue-400/90">deploy</span>: <span className="text-purple-400/90">async</span> (env) <span className="text-emerald-400/90">=&gt;</span> {'{'}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">05</span>
                      <span className="pl-8 text-white/50">await infrastructure.provision(env);</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">06</span>
                      <span className="pl-4">{'}'}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="opacity-10 w-3 text-right">07</span>
                      <span>{'}'};</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#60a5fa]/5 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d1017] to-transparent pointer-events-none"></div>
                </div>
              </Spotlight>
            </motion.div>
          </div>

          {/* MIDDLE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.6fr_1fr] gap-6">
            {/* Autonomous Support Agent */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
            >
              <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] p-8 h-full" spotlightColor="rgba(34,197,94,0.08)">
                <h3 className="text-xl text-white mb-4">Autonomous Support Agent</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#11141b] border border-white/5 flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-[#858b94]" />
                    </div>
                    <div className="bg-[#11141b] p-3 rounded-2xl rounded-tl-none text-[10px] text-[#858b94] border border-white/5">
                      Welcome back. Should I begin triaging the pending support tickets?
                    </div>
                  </div>
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src="./assets/icon-19.svg" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none text-[10px] text-white border border-white/10">
                      Yes, prioritize high-revenue accounts first.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#11141b] border border-white/5 flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-[#858b94]" />
                    </div>
                    <div className="bg-[#11141b] p-3 rounded-2xl rounded-tl-none text-[10px] text-[#858b94] border border-white/5">
                      Processing. 12 responses drafted based on v2 docs. Ready for review.
                    </div>
                  </div>
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src="./assets/icon-19.svg" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="bg-white/10 p-3 rounded-2xl rounded-tr-none text-[10px] text-white border border-white/10">
                      Excellent. Send them over for a final check.
                    </div>
                  </div>
                </div>
              </Spotlight>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="flex-1 p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
              >
                <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] h-full flex flex-col items-center justify-center text-center p-8" spotlightColor="rgba(96,165,250,0.12)">
                  <div className="flex -space-x-3 mb-4">
                    {[
                      { code: 'ae', name: 'UAE' },
                      { code: 'gb', name: 'UK' },
                      { code: 'lk', name: 'Sri Lanka' },
                      { code: 'au', name: 'Australia' }
                    ].map((flag) => (
                      <img
                        key={flag.code}
                        src={`https://flagcdn.com/w80/${flag.code}.png`}
                        className="w-10 h-10 rounded-full border-2 border-[#1c1f26] object-cover"
                        alt={flag.name}
                      />
                    ))}
                  </div>
                  <span className="text-3xl font-medium text-white mb-1">
                    <Counter target={15} />+
                  </span>
                  <span className="text-[10px] font-mono text-[#858b94] uppercase tracking-[0.2em]">Countries Reached</span>
                </Spotlight>
              </motion.div>

              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="flex-1 p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
              >
                <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] h-full flex flex-col items-center justify-center text-center p-8" spotlightColor="rgba(96,165,250,0.12)">
                  <span className="text-3xl font-medium text-white mb-1">
                    <Counter target={99} />%
                  </span>
                  <span className="text-[10px] font-mono text-[#858b94] uppercase tracking-[0.2em]">Client Satisfaction rate</span>
                </Spotlight>
              </motion.div>
            </div>

            {/* Technical Strategy */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
            >
              <Spotlight className="bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] p-8 h-full flex flex-col justify-between overflow-hidden" spotlightColor="rgba(168,85,247,0.1)">
                <div className="mb-4">
                  <h3 className="text-xl text-white mb-2">Technical Strategy</h3>
                  <p className="text-[#858b94] text-[12px]">We guide organizations through digital transformation, from architectural audits to AI implementation roadmaps.</p>
                </div>
                <div className="relative flex-1 mt-4 overflow-hidden rounded-xl bg-[#0d1017] flex items-center justify-center p-6 border border-white/5">
                  <div className="relative w-full h-full min-h-[140px] flex items-center justify-between z-10 px-4">
                    <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-transparent via-[#a855f7] to-transparent w-full"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="relative group z-10">
                      <div className="w-10 h-10 rounded-lg bg-[#1c1f26] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#60a5fa]/50 transition-colors relative z-10">
                        <Layers size={18} className="text-[#858b94] group-hover:text-[#60a5fa] transition-colors relative z-10" />
                        <div className="absolute inset-0 bg-[#60a5fa] opacity-0 group-hover:opacity-20 blur-md transition-opacity rounded-lg"></div>
                      </div>
                      <div className="absolute -bottom-6 -left-4 -right-4 flex justify-center">
                        <span className="text-[9px] font-mono text-[#858b94] group-hover:text-[#60a5fa] transition-colors uppercase tracking-wider">Audit</span>
                      </div>
                    </div>

                    <div className="relative group z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#1c1f26] border border-white/20 flex items-center justify-center shadow-xl group-hover:border-[#a855f7]/50 transition-colors relative z-10">
                        <Settings size={22} className="text-[#a855f7] animate-[spin_10s_linear_infinite] relative z-10" />
                        <div className="absolute inset-0 bg-[#a855f7] opacity-20 group-hover:opacity-40 blur-md transition-opacity rounded-xl"></div>
                      </div>
                      <div className="absolute -bottom-6 -left-4 -right-4 flex justify-center">
                        <span className="text-[9px] font-mono text-white group-hover:text-[#a855f7] transition-colors uppercase tracking-wider font-bold">Strategy</span>
                      </div>
                    </div>

                    <div className="relative group z-10">
                      <div className="w-10 h-10 rounded-lg bg-[#1c1f26] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#ec4899]/50 transition-colors relative z-10">
                        <Activity size={18} className="text-[#858b94] group-hover:text-[#ec4899] transition-colors relative z-10" />
                        <div className="absolute inset-0 bg-[#ec4899] opacity-0 group-hover:opacity-20 blur-md transition-opacity rounded-lg"></div>
                      </div>
                      <div className="absolute -bottom-6 -left-4 -right-4 flex justify-center">
                        <span className="text-[9px] font-mono text-[#858b94] group-hover:text-[#ec4899] transition-colors uppercase tracking-wider">Roadmap</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-[#0d1017] pointer-events-none"></div>
                </div>
              </Spotlight>
            </motion.div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">

            {/* Data & Workflow Automation */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="feature-item p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] flex flex-col overflow-hidden cursor-default"
            >
              <Spotlight className="item-inner h-full bg-gradient-to-b from-[#161a23] to-[#0a0d14] rounded-[18px]" spotlightColor="rgba(96,165,250,0.08)">
                <div className="feature-inner-content feature-bottom flex flex-col lg:flex-row justify-between p-10 h-full overflow-hidden relative">

                  <div className="feature-top-content flex flex-col gap-6 relative z-10 lg:w-[40%]">
                    <div className="feature-title-info">
                      <h3 className="feature-title text-[32px] text-white font-medium leading-tight mb-4">Data & workflow Automation</h3>
                      <p className="feature-description text-[#858b94] text-[15px] leading-relaxed">We unify data across your ecosystem to power intelligent workflows that move information automatically and accurately.</p>
                    </div>
                    <div className="feature-list-wrap flex flex-col gap-3">
                      <div className="problem-list-item flex items-center gap-3">
                        <img src="./assets/icon-3.svg" className="list-icon w-4 h-4" alt="" />
                        <div className="list-text font-mono text-[10px] text-[#858b94] uppercase tracking-[0.2em]">Data pipeline setup</div>
                      </div>
                      <div className="problem-list-item flex items-center gap-3">
                        <img src="./assets/icon-3.svg" className="list-icon w-4 h-4" alt="" />
                        <div className="list-text font-mono text-[10px] text-[#858b94] uppercase tracking-[0.2em]">cross-platform automation.</div>
                      </div>
                    </div>
                  </div>

                  <div className="item-seven-image-wrap flex-1 relative mt-12 lg:mt-0 min-h-[320px] flex items-center justify-center overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 300">
                      <defs>
                        <linearGradient id="pipeline-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                          <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M 80 120 L 320 120" stroke="#ffffff10" strokeWidth="1" fill="none" />
                      <path d="M 80 200 L 320 200" stroke="#ffffff10" strokeWidth="1" fill="none" />
                      <motion.circle
                        r="2.5"
                        fill="#a855f7"
                        initial={{ cx: 80, cy: 120, opacity: 0 }}
                        animate={{ cx: 320, opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle
                        r="2.5"
                        fill="#ec4899"
                        initial={{ cx: 320, cy: 200, opacity: 0 }}
                        animate={{ cx: 80, opacity: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                      />
                    </svg>

                    <div className="w-full max-w-[400px] px-8 relative z-10">
                      <div className="flex justify-between items-center mb-16">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-12 h-12 rounded-2xl bg-[#11141b] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-sm"
                        >
                          {/* Premium Cloud icon */}
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <filter id="cloud-glow" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.2" result="blur"/>
                                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                              </filter>
                              <linearGradient id="cloud-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#93c5fd"/>
                                <stop offset="1" stopColor="#3b82f6"/>
                              </linearGradient>
                            </defs>
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke="url(#cloud-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" filter="url(#cloud-glow)"/>
                            <path d="M12 19v-5" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
                            <path d="M9.5 16.5L12 14l2.5 2.5" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                          </svg>
                        </motion.div>

                        <div className="relative group">
                          <div className="absolute inset-0 bg-[#a855f7]/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] p-[1px] shadow-2xl">
                            <div className="w-full h-full rounded-full bg-[#0a0d14] flex items-center justify-center overflow-hidden">
                              {/* Premium Network hub icon */}
                              <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-[spin_10s_linear_infinite]">
                                <defs>
                                  <filter id="hub-glow" x="-30%" y="-30%" width="160%" height="160%">
                                    <feGaussianBlur stdDeviation="1" result="blur"/>
                                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                  </filter>
                                </defs>
                                {/* Center hub */}
                                <circle cx="20" cy="20" r="4.5" fill="white" opacity="0.95" filter="url(#hub-glow)"/>
                                <circle cx="20" cy="20" r="2.5" fill="white"/>
                                {/* Cardinal spokes */}
                                <line x1="20" y1="15.5" x2="20" y2="9" stroke="white" strokeWidth="1.2" opacity="0.6"/>
                                <line x1="20" y1="24.5" x2="20" y2="31" stroke="white" strokeWidth="1.2" opacity="0.6"/>
                                <line x1="15.5" y1="20" x2="9" y2="20" stroke="white" strokeWidth="1.2" opacity="0.6"/>
                                <line x1="24.5" y1="20" x2="31" y2="20" stroke="white" strokeWidth="1.2" opacity="0.6"/>
                                {/* Cardinal nodes */}
                                <circle cx="20" cy="7" r="2.5" fill="white" opacity="0.8"/>
                                <circle cx="20" cy="33" r="2.5" fill="white" opacity="0.8"/>
                                <circle cx="7" cy="20" r="2.5" fill="white" opacity="0.8"/>
                                <circle cx="33" cy="20" r="2.5" fill="white" opacity="0.8"/>
                                {/* Diagonal spokes */}
                                <line x1="17.2" y1="17.2" x2="12.5" y2="12.5" stroke="white" strokeWidth="1" opacity="0.35"/>
                                <line x1="22.8" y1="17.2" x2="27.5" y2="12.5" stroke="white" strokeWidth="1" opacity="0.35"/>
                                <line x1="17.2" y1="22.8" x2="12.5" y2="27.5" stroke="white" strokeWidth="1" opacity="0.35"/>
                                <line x1="22.8" y1="22.8" x2="27.5" y2="27.5" stroke="white" strokeWidth="1" opacity="0.35"/>
                                {/* Diagonal nodes */}
                                <circle cx="11" cy="11" r="1.8" fill="white" opacity="0.5"/>
                                <circle cx="29" cy="11" r="1.8" fill="white" opacity="0.5"/>
                                <circle cx="11" cy="29" r="1.8" fill="white" opacity="0.5"/>
                                <circle cx="29" cy="29" r="1.8" fill="white" opacity="0.5"/>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <motion.div
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          className="w-12 h-12 rounded-2xl bg-[#11141b] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-sm"
                        >
                          {/* Premium Database icon */}
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <filter id="db-glow" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.2" result="blur"/>
                                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                              </filter>
                              <linearGradient id="db-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#d8b4fe"/>
                                <stop offset="1" stopColor="#7c3aed"/>
                              </linearGradient>
                            </defs>
                            <ellipse cx="12" cy="6" rx="7.5" ry="2.5" stroke="url(#db-grad)" strokeWidth="1.4" filter="url(#db-glow)"/>
                            <path d="M4.5 6v5c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5V6" stroke="url(#db-grad)" strokeWidth="1.4"/>
                            <path d="M4.5 11v5c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-5" stroke="url(#db-grad)" strokeWidth="1.4"/>
                            {/* Highlight streak */}
                            <path d="M6 6.8 Q8 5.6 10 6" stroke="#d8b4fe" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
                            <path d="M6 11.8 Q8 10.6 10 11" stroke="#d8b4fe" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
                          </svg>
                        </motion.div>
                      </div>

                      <div className="flex justify-around items-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 5, repeat: Infinity }}
                          className="w-10 h-10 rounded-xl bg-[#11141b] border border-white/10 flex items-center justify-center shadow-lg"
                        >
                          {/* Premium Mail icon */}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <filter id="mail-glow" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.2" result="blur"/>
                                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                              </filter>
                              <linearGradient id="mail-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#f9a8d4"/>
                                <stop offset="1" stopColor="#be185d"/>
                              </linearGradient>
                            </defs>
                            <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="url(#mail-grad)" strokeWidth="1.4" filter="url(#mail-glow)"/>
                            <path d="M2 6.5L12 13.5L22 6.5" stroke="url(#mail-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            {/* Side fold hints */}
                            <line x1="2" y1="17" x2="8" y2="13" stroke="#f9a8d4" strokeWidth="0.8" opacity="0.4"/>
                            <line x1="22" y1="17" x2="16" y2="13" stroke="#f9a8d4" strokeWidth="0.8" opacity="0.4"/>
                          </svg>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1.1, 1, 1.1] }}
                          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                          className="w-10 h-10 rounded-xl bg-[#11141b] border border-white/10 flex items-center justify-center shadow-lg"
                        >
                          {/* Premium Server icon */}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <filter id="srv-glow" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.2" result="blur"/>
                                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                              </filter>
                              <linearGradient id="srv-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#86efac"/>
                                <stop offset="1" stopColor="#15803d"/>
                              </linearGradient>
                            </defs>
                            <rect x="2" y="2" width="20" height="8" rx="2" stroke="url(#srv-grad)" strokeWidth="1.4" filter="url(#srv-glow)"/>
                            <rect x="2" y="14" width="20" height="8" rx="2" stroke="url(#srv-grad)" strokeWidth="1.4"/>
                            {/* Status LEDs */}
                            <circle cx="18.5" cy="6" r="1.5" fill="#22c55e"/>
                            <circle cx="18.5" cy="18" r="1.5" fill="#22c55e" opacity="0.6"/>
                            {/* Port lines */}
                            <line x1="5" y1="6" x2="13" y2="6" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
                            <line x1="5" y1="18" x2="10" y2="18" stroke="#86efac" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </motion.div>

            {/* Consultation CTA Card */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="feature-item _02 p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] relative group flex flex-col overflow-hidden cursor-default"
            >
              <Spotlight className="item-inner two h-full bg-gradient-to-b from-[#1c1f26] via-[#0a0d14] to-[#0a0d14] rounded-[18px] relative z-10" spotlightColor="rgba(236,72,153,0.1)">
                <div className="feature-inner-content two p-10 flex flex-col justify-center items-center text-center h-full">

                  <div className="feature-title-info">
                    <h3 className="feature-title text-[38px] text-white font-medium leading-[1.1] tracking-tight">Need a Bespoke<br />Software Solution?</h3>
                  </div>

                  <div className="feature-item-eight-cta mt-10 flex flex-col items-center gap-6 w-full">
                    <div className="feature-button w-full max-w-sm">
                      <motion.a
                        href="./contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group/btn p-[2px] rounded-[10px] bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] flex items-center justify-center relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out rounded-[10px]" />
                        <div className="bg-[#0a0d14] rounded-[8px] px-8 py-4 flex items-center justify-center gap-3 w-full relative z-10">
                          <div className="p-1 rounded-sm bg-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-black transition-colors">
                            <ArrowUpRight size={14} />
                          </div>
                          <span className="font-mono text-[13px] font-bold tracking-widest text-white uppercase whitespace-nowrap">SCHEDULE A CONSULTATION</span>
                        </div>
                      </motion.a>
                    </div>
                    <div className="cta-text text-[12px] text-[#858b94] italic font-light leading-snug">Only 20-30min. Friendly chat, no pressure.</div>
                  </div>

                </div>
              </Spotlight>

              <div className="feature-bg absolute inset-0 z-0 overflow-hidden rounded-[18px] opacity-10 grayscale brightness-125">
                <video autoPlay loop muted playsInline className="feature-bg-video w-full h-full object-cover">
                  <source src="./assets/hero_bg_video.mp4" type="video/mp4" />
                </video>
                <div className="feature-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0d14]/80"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
