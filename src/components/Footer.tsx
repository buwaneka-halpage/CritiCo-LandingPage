

export const Footer = () => {
  return (
    <footer className="footer bg-[#0a0d14] relative border-t border-white/5 pt-20">
      <div className="max-width footer-spacing relative px-6 md:px-0 mx-auto max-w-[1260px]">
        {/* Main Footer Info */}
        <div className="footer-info">
          <div className="container mx-auto">
            <div className="footer-info-wrap">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pb-20">
                
                {/* Brand & Newsletter Column (footer-about-info) */}
                <div className="footer-about-info flex flex-col gap-10">
                  <img src="./assets/footer_logo.svg" className="w-[42px] h-auto" alt="Footer Logo" />
                  <div className="subscribe-wrap flex flex-col gap-6">
                    <h2 className="subscribe-title text-2xl font-medium text-white tracking-tight">Stay Ahead of the Curve</h2>
                    <div className="form-subscribe-wrap relative max-w-sm">
                      <form id="wf-form-Subscribe-Form" className="form-subscribe relative flex items-center">
                        <input 
                          type="email" 
                          id="Email-Address"
                          required
                          placeholder="Enter email address" 
                          className="form-input form-input-subscribe w-full bg-[#0a0d14] border border-white/10 rounded-xl py-4 pl-6 pr-16 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                        />
                        <button 
                          type="submit" 
                          className="button-subscribe absolute right-2 top-2 bottom-2 w-12 bg-[#1c2331] hover:bg-[#111] rounded-lg flex items-center justify-center transition-colors group"
                        >
                          <div className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                               style={{ 
                                 backgroundImage: 'url("https://cdn.prod.website-files.com/69217b531c82e74322a4631d/6923dcb2f7fe20cf455aeeb8_Footer%20Subscribe%20Icon.svg")',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundPosition: 'center',
                                 backgroundSize: 'contain'
                               }}>
                          </div>
                        </button>
                      </form>
                    </div>
                    <div className="subscribe-text text-[12px] text-[#858b94] font-medium">
                      By submitting, you agree to <a href="./privacy-policy" className="legal-link text-white/40 hover:text-white underline underline-offset-4 decoration-white/10">our policy.</a>
                    </div>
                  </div>
                </div>

                {/* Contact Info Column (footer-contact-info) */}
                <div className="footer-contact-info flex flex-col gap-10">
                  <div className="contact-info-inner flex flex-col gap-4">
                    <div className="footer-title text-[11px] font-mono font-bold text-white/20 uppercase tracking-[0.4em]">Contact Info</div>
                    <div className="contact-links-wrap flex flex-col gap-2">
                       <a href="tel:+1(415)555-0167" className="contact-link text-xl text-[#858b94] hover:text-white transition-colors">+1 (415) 555-0167</a>
                       <a href="mailto:support@example.com" className="contact-link text-xl text-[#858b94] hover:text-white transition-colors">support@example.com</a>
                    </div>
                  </div>
                  <div className="contact-info-inner flex flex-col gap-4">
                    <div className="footer-title text-[11px] font-mono font-bold text-white/20 uppercase tracking-[0.4em]">Address</div>
                    <a href="#" className="footer-contact-address text-xl text-[#858b94] hover:text-white transition-colors leading-tight">
                      1238 Echo Ridge Blvd, CA 94103<br />United States
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Vertical Pipes (left-pipe & right-pipe) */}
        <div className="left-pipe absolute inset-y-0 left-0 w-24 flex gap-4 opacity-10 pointer-events-none px-6">
          <div className="left-line w-[1px] h-full bg-[#1c2331] shadow-[1.5px_0_#000]"></div>
          <div className="right-line w-[1px] h-full bg-[#1c2331] shadow-[1.5px_0_#000]"></div>
        </div>
        <div className="right-pipe absolute inset-y-0 right-0 w-24 flex flex-row-reverse gap-4 opacity-10 pointer-events-none px-6">
          <div className="left-line w-[1px] h-full bg-[#1c2331] shadow-[-1.5px_0_#000]"></div>
          <div className="right-line w-[1px] h-full bg-[#1c2331] shadow-[-1.5px_0_#000]"></div>
        </div>

      </div>

      {/* Footer Bottom - full bleed */}
      <div className="w-full pt-10 pb-20">
        <svg 
          viewBox="0 0 1209 257" 
          className="w-full h-auto select-none pointer-events-none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fontFamily="Inter, sans-serif" 
            fontWeight="700" 
            fontSize="180" 
            fill="white" fillOpacity="0.1"
          >
            Critico
          </text>
        </svg>
      </div>
    </footer>
  );
};
