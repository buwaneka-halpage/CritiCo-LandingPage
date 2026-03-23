import { motion } from "framer-motion";

const stack1 = [
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai" },
  { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic" },
  { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier" },
  { name: "Make", icon: "https://cdn.simpleicons.org/make" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
];

const stack2 = [
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
  { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "BigQuery", icon: "https://cdn.simpleicons.org/googlebigquery" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot" },
  { name: "Salesforce", icon: "https://cdn.simpleicons.org/salesforce" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe" },
  { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
];

const stack3 = [
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare" },
  { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Twilio", icon: "https://cdn.simpleicons.org/twilio" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { name: "Intercom", icon: "https://cdn.simpleicons.org/intercom" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
];

const MarqueeRow = ({ items, direction = "left", duration = 20 }: { items: typeof stack1, direction?: "left" | "right", duration?: number }) => {
  return (
    <div className="tech-stack-info">
      <div className="tech-stack-marquee-list">
        <motion.div
          animate={{ x: direction === "left" ? [0, "-50%"] : ["-50%", 0] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          className="flex gap-[30px] whitespace-nowrap"
        >
          {/* We need at least 4 copies to ensure no gaps during animation if the list is short */}
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <div key={`${item.name}-${i}`} className="tech-stack-item">
              <img src={item.icon} className="tech-stack-icon" alt={item.name} />
              <div className="tech-stack-text text-linear-gradient">{item.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const TechStack = () => {
  return (
    <section id="tech" className="tech-stack-section section-spacing-top">
      <div className="tech-stack-main section-title-spacing one">
        <div className="container">
          <div className="section-title-wrap mb-12">
            <div className="opacity-100 flex flex-col items-center">
              <div className="pre-title-wrap">
                <div className="pre-title-line"></div>
                <div className="pre-title">PLATFORMS WE USE</div>
                <div className="pre-title-line"></div>
              </div>
              <h2 className="tech-stack-title text-linear-gradient text-4xl md:text-5xl font-medium mt-8 text-center tracking-tight">
                Battle Tested Tools
              </h2>
            </div>
          </div>
        </div>
        
        <div className="tech-stack-content-main w-full">
          <div className="tech-stack-content mx-auto overflow-hidden">
            <div className="flex flex-col gap-[40px] w-full">
              <MarqueeRow items={stack1} direction="left" duration={40} />
              <MarqueeRow items={stack2} direction="right" duration={45} />
              <MarqueeRow items={stack3} direction="left" duration={50} />
            </div>
            
            <div className="tech-stack-content-overlay"></div>
            
            <div className="tech-stack-cta">
              <div className="tech-stack-cta-inner">
                <a href="mailto:critico@gmail.com?subject=New%20Project%20Inquiry" className="button-primary w-inline-block">
                  <div className="button-primary-inner justify-center">
                    <div className="button-text">Turn This Stack Into Results</div>
                  </div>
                </a>
              </div>
              <div className="tech-stack-cta-blur"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tech-stack-info-text text-linear-gradient mt-16 opacity-80">
            We use this stack to engineer high-performance systems — not experiments.
          </div>
        </div>
      </div>
    </section>
  );
};


