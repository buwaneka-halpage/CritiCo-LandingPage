import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "preact/hooks";

const cases = [
  {
    title: "AI-Powered Support Automation for a SaaS Company",
    desc: "We engineered a sophisticated AI support ecosystem for a high-growth SaaS platform, reducing average response times by 70%. By training custom models on their unique product documentation, historical tickets, and evolving FAQs, the system now autonomously resolves 40% of standard inquiries, allowing their human support team to focus on high-priority strategic client needs.",
    stats: ["70% FASTER SUPPORT REPLIES", "40% REDUCTION IN HUMAN TICKET LOAD", "2 WEEK BUILD TIME"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    client: "./assets/client-4.svg",
    clientName: "Recharge"
  },
  {
    title: "AI-powered product catalog management",
    desc: "A global e-commerce brand faced bottlenecks in managing thousands of SKU updates. We implemented a custom AI agent that automatically classifies new products, generates SEO-optimized descriptions in multiple languages, and synchronizes inventory across four different platforms. This transformation resulted in 5× faster catalog updates and ensured 100% data consistency across their entire digital storefront.",
    stats: ["5× FASTER PRODUCT UPDATES", "UNIFIED DATA ACROSS PLATFORMS", "BETTER SEO-READY DESCRIPTIONS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    client: "./assets/client-2.svg",
    clientName: "Shopify"
  },
  {
    title: "Automating financial reporting workflows",
    desc: "To eliminate the risk of manual errors in complex financial reporting, we developed an automated pipeline that consolidates data from multiple accounting streams. The AI identifies discrepancies in real-time and generates comprehensive monthly reports 80% faster than their previous manual process. This system provides executive teams with daily verified financial insights without requiring a single manual spreadsheet update.",
    stats: ["80% FASTER MONTHLY REPORTING", "REDUCED MANUAL SPREADSHEET WORK", "REAL-TIME ERROR DETECTION"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    client: "./assets/client-3_1.svg",
    clientName: "QuickBooks"
  },
  {
    title: "Reducing support workload with AI chatbots",
    desc: "We deployed a fleet of contextual AI support agents for a fast-growth technology company to manage increasing ticket volumes. Unlike standard chatbots, these agents utilize retrieval-augmented generation to provide human-like, accurate responses based on real-time internal knowledge. This initiative cut ticket volume by 50% and significantly improved customer satisfaction by providing instant, high-quality resolutions 24/7.",
    stats: ["50% REDUCTION IN TICKET VOLUME", "CONSISTENT, HUMAN-LIKE RESPONSES", "FASTER RESOLUTIONS, AUTOMATED RETRIEVAL"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    client: "./assets/client-5_1.svg",
    clientName: "Zendesk"
  }
];

export const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play — pauses on hover and restarts after manual navigation
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-[#0a0d14] relative overflow-hidden">
      <div id="case" className="absolute -top-24"></div>
      <div className="container max-w-[1260px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="flex flex-row items-end justify-between mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="pre-title-line"></div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-[#858b94] uppercase">CASE STUDIES</div>
            </div>
            <h2 className="text-4xl lg:text-[54px] font-medium tracking-tight text-linear-gradient leading-[1.1]">
              Success Stories
            </h2>
          </div>

          <div className="flex items-center gap-2 pb-1">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#ffffff1a] bg-[#161920] flex items-center justify-center transition-all hover:bg-[#1c1f26] active:scale-95 group"
              aria-label="Previous case study"
            >
              <ChevronLeft size={16} strokeWidth={1.5} className="text-[#858b94] group-hover:text-white" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#ffffff1a] bg-[#161920] flex items-center justify-center transition-all hover:bg-[#1c1f26] active:scale-95 group"
              aria-label="Next case study"
            >
              <ChevronRight size={16} strokeWidth={1.5} className="text-[#858b94] group-hover:text-white" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative min-h-[420px] overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch h-full px-4">

                {/* Image Side */}
                <div className="relative min-h-[380px] rounded-[12px] bg-[#0a0d14] shadow-[0_0_0_6px_#161920] overflow-hidden border border-[#ffffff14] p-[6px]">
                  <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                    <img
                      src={cases[currentIndex].image}
                      alt={cases[currentIndex].title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] brightness-[0.8]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0d14]/10 to-[#0a0d14]/70"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="relative rounded-[12px] bg-[#0a0d14] shadow-[0_0_0_6px_#161920] border border-[#ffffff14] p-[6px] flex flex-col h-full">
                  <div className="flex-1 rounded-[8px] bg-gradient-to-b from-[#161a23] to-[#0a0d14] p-8 lg:p-10 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-[38px] font-medium text-white leading-[1.2] tracking-tight">
                        {cases[currentIndex].title}
                      </h3>
                      <p className="text-[#858b94] text-[16px] lg:text-[17px] leading-[1.6] max-w-xl">
                        {cases[currentIndex].desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cases[currentIndex].stats.map(stat => (
                          <div key={stat} className="px-4 py-2 rounded-full border border-[#ffffff0a] bg-[#0a0d14] text-[#858b94] text-[9px] font-mono tracking-[0.1em]">
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center gap-2 mt-10 px-4">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to case study ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-400 ${
                i === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
