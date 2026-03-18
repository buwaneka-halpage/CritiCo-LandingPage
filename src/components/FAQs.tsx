import { useState } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Why should I build custom instead of using a subscription tool?",
    a: "Subscription tools are great for starting, but they often become a 'feature prison' as you grow. Bespoke software eliminates monthly per-user fees and gives you 100% control over the roadmap—meaning the software fits your business, not the other way around."
  },
  {
    q: "What if I only have a rough idea and no technical specs?",
    a: "That's where most of our best projects start. We don't just write code; we help with product strategy. We'll work together to turn your vision into a clickable prototype and then a technical roadmap before a single line of production code is written."
  },
  {
    q: "Can you integrate with my existing (and probably messy) data?",
    a: "Absolutely. Whether it's a legacy SQL database, a tangle of spreadsheets, or various third-party APIs, we specialize in building the 'glue' that makes disparate systems work together seamlessly."
  },
  {
    q: "How do we handle changes during the development process?",
    a: "We work in transparent 'sprints,' meaning you see progress every two weeks. If we discover a better way to do things mid-build, we pivot. You're never locked into a rigid plan that was made before the work even started."
  },
  {
    q: "When the project ends, are we still 'married' to you?",
    a: "Only if you want to be! You own 100% of the IP and source code. While we offer ongoing support, we build using industry-standard tools so any competent engineering team could take over if you ever decided to move in-house."
  }
];

export const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faqs-section pb-[9.375rem] bg-[#0a0d14] relative">
      <div className="container max-w-[1260px] mx-auto px-[1.875rem]">
        <div className="w-layout-grid grid grid-cols-1 lg:grid-cols-[minmax(200px,0.65fr)_minmax(200px,1fr)] gap-[70px] items-start">
          
          {/* Left Column: Title + FAQ CTA Box */}
          <motion.div
            className="left-info flex flex-col gap-[60px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-title-wrap title-left faq-top flex flex-col gap-6">
              <h2 className="faq-title text-[3.875rem] leading-[1.2] font-medium m-0 tracking-tight"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #edf0f5, #858b94 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Your Questions, <br />Answered
              </h2>
              <p className="section-description description-left text-[1.125rem] leading-[1.3em] text-[#858b94] m-0 max-w-[360px]">
                Here are answers to the questions we get most often about our projects, pricing, and process.
              </p>
            </div>


          </motion.div>

          {/* Right Column: Accordion */}
          <div className="faqs-wrap flex flex-col gap-[30px]">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="accordion-item rounded-[10px] bg-[#0a0d14] border border-[#858b9433] shadow-[0_0_0_6px_#161920] overflow-hidden"
              >
                <div 
                  className="accordion-heading cursor-pointer flex items-center justify-between p-[1.25rem] gap-5 group"
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                >
                  <h3 className="accordion-title text-[1.125rem] leading-[1.3em] font-medium m-0 transition-all flex-1"
                      style={{
                        backgroundImage: activeIndex === idx ? 'none' : 'linear-gradient(90deg, #edf0f5, #858b94)',
                        WebkitBackgroundClip: activeIndex === idx ? 'none' : 'text',
                        WebkitTextFillColor: activeIndex === idx ? 'white' : 'transparent',
                        backgroundClip: activeIndex === idx ? 'none' : 'text',
                        color: activeIndex === idx ? 'white' : 'inherit'
                      }}>
                    {faq.q}
                  </h3>
                  
                  <div className="accordion-icon-wrap w-[34px] h-[34px] flex-none rounded-full bg-[#86868633] flex items-center justify-center">
                    <motion.div 
                      className="accordion-icon-inner relative w-[12px] h-[12px] flex items-center justify-center"
                      animate={{ rotate: activeIndex === idx ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="accordion-line-hr absolute w-[12px] h-[2px] bg-[#f2f2f2]"></div>
                      <div className="accordion-line-vr absolute w-[2px] h-[12px] bg-[#f2f2f2]"></div>
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="accordion-content">
                        <p className="accordion-description px-[1.25rem] pb-[1.25rem] text-[1rem] leading-[1.3em] text-[#858b94] m-0">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
