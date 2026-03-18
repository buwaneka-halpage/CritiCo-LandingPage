import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { WhyChoose } from "./components/WhyChoose";
import { Process } from "./components/Process";
import { TechStack } from "./components/TechStack";
import { CaseStudies } from "./components/CaseStudies";

import { FAQs } from "./components/FAQs";
import { CTAReady } from "./components/CTAReady";
import { Footer } from "./components/Footer";


export function App() {
  return (
    <main className="relative min-h-screen bg-[#0a0d14] text-white selection:bg-[#60a5fa] selection:text-white overflow-x-hidden">
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(96,165,250,0.08),transparent_80%)] pointer-events-none z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Expertise />
        <WhyChoose />
        <Process />
        <TechStack />
        <CaseStudies />
        
        {/* Spacing Divider */}
        <div className="divider-horizontal w-full h-[1px] bg-[#1c2331] shadow-[inset_0_1.5px_#000] my-20"></div>

        <FAQs />
        <CTAReady />
        <Footer />
      </div>
    </main>
  );
}
