import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const steps = [
  {
    number: "Step - 01",
    icon: "./assets/icon-step-01.svg",
    title: "Discovery & Consultation",
    desc: "We begin by understanding your business goals, challenges, and where technology or AI can drive measurable impact.",
    listText: "Identify automation opportunities",
    listItems: ["Discovery", "Planning", "Development", "Optimization", "Review"]
  },
  {
    number: "Step - 02",
    icon: "./assets/icon-step-02.svg",
    title: "Strategy & Blueprint",
    desc: "We create a detailed roadmap outlining software architecture, AI solutions, and seamless integration points.",
    listText: "Build your strategy blueprint",
    listItems: [
      "Outline project scope and success metrics",
      "Map AI workflow architecture",
      "Approve the final implementation plan"
    ]
  },
  {
    number: "Step - 03",
    icon: "./assets/icon-step-03.svg",
    title: "Development & Implementation",
    desc: "Our engineers and specialists build and deploy your custom solution — engineered for scale and high performance.",
    listText: "Design, build, and test your solution",
    listItems: ["Our engineers bring the plan to life — developing custom AI agents, automation pipelines, and chat systems. Each component is integrated with your internal tools..."]
  },
  {
    number: "Step - 04",
    icon: "./assets/icon-step-04.svg",
    title: "Optimization & Support",
    desc: "After deployment, we monitor performance, refine workflows, and provide ongoing support.",
    listText: "Continuous improvement and support",
    listItems: ["Task success rate", "Response accuracy", "Processing speed"]
  }
];

export const Process = () => {
  return (
    <section id="process" className="step-section py-24 bg-[#0a0d14]">
      <div className="container max-w-[1260px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
          
          {/* Left Column: Sticky Info */}
          <motion.div
            className="lg:sticky lg:top-32 h-fit max-w-[400px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-b from-white to-[#858b94] bg-clip-text text-transparent">
                From Strategy to <br /> Scalable Solutions
              </h2>
              <p className="text-[#858b94] text-lg leading-relaxed">
                A framework that unites human insight with automation to drive growth at every stage.
              </p>
              <motion.a
                href="./contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group p-[2px] rounded-[10px] bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] inline-block relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-[10px]" />
                <div className="bg-[#0a0d14] rounded-[8px] px-8 py-4 flex items-center gap-3 relative z-10">
                  <div className="p-1 rounded-sm bg-white/10 group-hover:bg-white text-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                  <div className="button-text font-mono text-[11px] font-bold text-white tracking-widest uppercase">Start a Project</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Step List */}
          <div className="flex flex-col gap-14">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, borderColor: "rgba(96,165,250,0.2)" }}
                className="step-item p-[0.375rem] rounded-[24px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] cursor-default"
              >
                <div className="step-item-inner bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] rounded-[18px] overflow-hidden">
                  {/* Top Content */}
                  <div className="step-item-top p-10 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-[#11141b] border border-white/5 flex items-center justify-center">
                        <img src={step.icon} className="w-5 h-5" alt="" />
                      </div>
                      <div className="step-text font-mono text-[11px] text-[#858b94] uppercase tracking-wider underline underline-offset-8 decoration-white/10">
                        [ {step.number} ]
                      </div>
                    </div>
                    <h3 className="step-title text-2xl text-white font-medium">{step.title}</h3>
                    <p className="step-description text-[#858b94] leading-relaxed italic">{step.desc}</p>
                  </div>

                  {/* Bottom Content / Drawer */}
                  <div className="step-item-bottom p-8 md:px-10 border-t border-[#1c1f26] relative bg-[#0a0d14]/40">
                    <div className="step-list-icon-wrap absolute -top-4 right-10 w-8 h-8 rounded-full bg-gradient-to-b from-[#1c1f26] to-[#0a0d14] border border-[#1c1f26] flex items-center justify-center shadow-lg">
                      <img src="./assets/icon-4.svg" alt="" className="w-3.5 h-3.5" />
                    </div>
                    <div className="step-list-text text-[13px] font-medium bg-gradient-to-r from-white to-[#858b94] bg-clip-text text-transparent uppercase tracking-wider mb-6">
                      {step.listText}
                    </div>
                    
                    <div className="step-list flex flex-wrap items-center gap-x-4 gap-y-3">
                      {step.listItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          {idx > 0 && idx < step.listItems.length && step.listItems.length > 3 && (
                             <img src="./assets/icon-3.svg" className="w-2.5 h-2.5 opacity-30" alt="" />
                          )}
                          {step.listItems.length === 3 ? (
                            <div className="flex items-start gap-3 w-full">
                               <img src="./assets/icon-3.svg" className="w-2.5 h-2.5 mt-1.5 opacity-50" alt="" />
                               <span className="text-[12px] text-[#858b94] leading-relaxed">{item}</span>
                            </div>
                          ) : (
                            <span className="text-[12px] text-[#858b94] leading-relaxed">{item}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
