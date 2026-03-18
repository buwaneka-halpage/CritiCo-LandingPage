import { motion, AnimatePresence } from "framer-motion";
import { useState } from "preact/hooks";
import { ArrowUpRight, CheckCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export const CTAReady = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json() as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  };

  return (
    <section id="ready-to-start" className="split-cta-section relative flex flex-col items-center justify-center py-[10rem] overflow-hidden bg-[#0a0d14]">

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
      <div className="split-cta-content relative z-10 w-full max-w-[620px] px-6">
        <AnimatePresence mode="wait">
          {state === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={28} className="text-emerald-400" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-medium leading-[1.2]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #edf0f5, #858b94 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Message received.
              </h2>
              <p className="text-[#858b94] text-lg leading-[1.4]">
                We'll be back in touch within 1 business day. Check your inbox for a confirmation.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Heading */}
              <motion.div
                className="flex flex-col gap-3 items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  className="text-4xl md:text-5xl font-medium leading-[1.2] max-w-[380px]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #edf0f5, #858b94 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Ready to Start<br />Your Next<br />Big Project?
                </h2>
                <p className="text-[#858b94] text-[1.125rem] leading-[1.3] max-w-[500px]">
                  Tell us what you're building. We'll reply within 1 business day — no jargon, no pressure.
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col gap-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={name}
                    onInput={(e) => setName((e.target as HTMLInputElement).value)}
                    required
                    disabled={state === "loading"}
                    placeholder="Your name"
                    className="w-full bg-[#0a0d14]/80 border border-white/10 rounded-xl py-3.5 px-5 text-sm text-white placeholder:text-[#858b94]/60 focus:outline-none focus:border-white/20 transition-colors backdrop-blur-sm disabled:opacity-60"
                  />
                  <input
                    type="email"
                    value={email}
                    onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                    required
                    disabled={state === "loading"}
                    placeholder="Email address"
                    className="w-full bg-[#0a0d14]/80 border border-white/10 rounded-xl py-3.5 px-5 text-sm text-white placeholder:text-[#858b94]/60 focus:outline-none focus:border-white/20 transition-colors backdrop-blur-sm disabled:opacity-60"
                  />
                </div>
                <textarea
                  value={message}
                  onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                  required
                  rows={4}
                  disabled={state === "loading"}
                  placeholder="Tell us about your project — what are you building and what's the challenge?"
                  className="w-full bg-[#0a0d14]/80 border border-white/10 rounded-xl py-3.5 px-5 text-sm text-white placeholder:text-[#858b94]/60 focus:outline-none focus:border-white/20 transition-colors resize-none backdrop-blur-sm disabled:opacity-60"
                />

                {state === "error" && (
                  <p className="text-[12px] text-red-400/80 pl-1">{errorMsg}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={state === "loading"}
                  whileHover={{ scale: state === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: state === "loading" ? 1 : 0.98 }}
                  className="group relative p-[2px] rounded-[10px] overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #a855f7 50%, #ec4899)' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-[10px]" />
                  <div className="button-primary-inner bg-[#0a0d14] rounded-[8px] py-[0.875rem] px-[1.5rem] flex items-center justify-center gap-3 transition-colors group-hover:bg-[#111] relative z-10">
                    {state === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                        <span className="font-mono text-sm font-medium uppercase tracking-tight text-white">Sending...</span>
                      </>
                    ) : (
                      <>
                        <ArrowUpRight size={16} className="text-white opacity-80" />
                        <span className="font-mono text-sm font-medium uppercase tracking-tight text-white">Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>

                <p className="font-mono text-[9px] text-[#858b94] uppercase tracking-widest opacity-60 text-center">
                  20–30 min call to follow. No pressure.
                </p>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
