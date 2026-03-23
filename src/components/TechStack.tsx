import { motion } from "framer-motion";

const stack1 = [
  { name: "LangChain", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/LangChain_logo.png" },
  { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
  { name: "Zapier", icon: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" },
  { name: "Make", icon: "https://cdn.simpleicons.org/make" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Python", icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
];

const stack2 = [
  { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" },
  { name: "Airtable", icon: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg" },
  { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "PostgreSQL", icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "BigQuery", icon: "https://cdn.worldvectorlogo.com/logos/google-bigquery-1.svg" },
  { name: "HubSpot", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
  { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
];

const stack3 = [
  { name: "Cloudflare", icon: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" },
  { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog" },
  { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Twilio", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" },
  { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Intercom", icon: "https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg" },
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


