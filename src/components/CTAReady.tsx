import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export const CTAReady = () => {
  return (
    <section id="ready-to-start" className="split-cta-section relative flex flex-col items-center justify-center py-[13.75rem] overflow-hidden bg-[#0a0d14]">

      {/* Background Layer */}
      <div className="split-bg absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="history-bg-video split-bg w-full h-full object-cover opacity-50 grayscale"
          poster="./assets/hero_bg_poster.jpg"
        >
          <source src="./assets/hero_bg_video.mp4" type="video/mp4" />
        </video>

        <div className="history-overlay-top absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-[#0a0d14] to-transparent pointer-events-none z-[1]"></div>
        <div
          className="history-overlay split-overlay absolute inset-0 z-[2] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle farthest-side at 50% 50%, #0a0d14 52%, transparent 100%)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="split-cta-content relative z-10 flex flex-col items-center gap-7 max-w-[570px] w-full px-6 text-center">

        <motion.div
          className="split-cta-title-wrap flex flex-col gap-3 items-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="split-cta-title text-4xl md:text-5xl font-medium leading-[1.2] max-w-[350px] mx-auto"
            style={{
              backgroundImage: 'linear-gradient(90deg, #edf0f5, #858b94 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Ready to Start<br />Your Next<br />Big Project?
          </h2>
          <p className="split-cta-description text-[#858b94] text-[1.125rem] leading-[1.3] max-w-[570px] mx-auto">
            Tell us about your project. We'll set up a brief, friendly call to map out a plan — no jargon, no pressure.
          </p>
        </motion.div>

        <motion.div
          className="split-cta-button flex flex-wrap justify-center items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="mailto:critico@gmail.com?subject=New%20Project%20Inquiry"
            className="button-primary group relative p-[2px] transition-transform active:scale-95 no-underline rounded-[10px] hover:scale-105"
            style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #a855f7 50%, #ec4899)' }}
          >
            <div className="button-primary-inner bg-[#0a0d14] rounded-[8px] py-[0.875rem] px-[1.5rem] flex items-center gap-3 transition-colors group-hover:bg-[#111]">
              <Phone size={14} className="text-white opacity-80" />
              <div className="button-text font-mono text-[1rem] font-medium uppercase tracking-tight text-white">
                Talk to an Expert
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="font-mono text-[9px] text-[#858b94] uppercase tracking-widest opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          20–30 min. Friendly chat, no pressure.
        </motion.div>
      </div>
    </section>
  );
};
