import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

const LINKS = [
  {
    label: 'Email',
    value: 'hgonper03@gmail.com',
    href: 'mailto:hgonper03@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/hugogonzalezperez',
    href: 'https://github.com/hugogonzalezperez',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.24-.06.49-.1.74-.12.25.02.5.06.74.12 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hugogonzalezperez',
    href: 'https://www.linkedin.com/in/hugogonzalezperez',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hgonper03@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center"
      style={{ background: '#0D0805' }}
    >
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 py-28 w-full flex flex-col items-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="font-greeting text-accent text-3xl -rotate-2 inline-block">let's talk</p>
          <h2 className="font-hero text-5xl md:text-6xl text-primary uppercase tracking-wide text-shadow-3d">
            Connect
          </h2>
          <p className="font-body text-primary/60 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to bring your next interactive experience to life? I'm open to interesting projects, freelancing, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_360px] gap-12 items-start w-full">
          
          {/* Left Column: Links */}
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {LINKS.map(({ label, value, href, icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                  className="comic-card bg-background/40 hover:bg-background/80 p-4 flex items-center gap-4 group transition-all duration-300"
                >
                  <div className="text-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-hero text-[10px] text-accent uppercase tracking-widest">{label}</p>
                    <p className="font-body text-primary/80 text-sm font-semibold truncate group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
              
              {/* Copy Email Button */}
              <motion.button
                onClick={copyEmail}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.5 }}
                className="comic-card bg-accent text-background p-4 flex items-center justify-center gap-2 font-hero uppercase tracking-wide hover:shadow-[3px_4px_0px_#1f1307] active:scale-95 transition-all w-full relative h-16 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      ✓ Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Copy hgonper03@gmail.com
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Terminal Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="comic-card bg-background p-6 space-y-4 shadow-[8px_8px_0px_#1f1307]"
          >
            <div className="flex gap-2 border-b border-primary/10 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="font-body text-[10px] text-primary/30 uppercase tracking-widest ml-auto">status.json</span>
            </div>
            
            <div className="font-body text-xs font-mono leading-relaxed space-y-3 pt-2">
              <div className="text-primary/40 leading-none flex gap-2">
                <span className="text-primary/10">1</span> {'{'}
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-primary/10">2</span> <span><span className="text-accent">"available"</span>: <span className="text-green-500">true</span>,</span>
              </div>
              <div className="pl-4 flex gap-2 text-primary/80">
                <span className="text-primary/10">3</span> <span><span className="text-accent">"role"</span>: <span className="text-yellow-500">"Front-end"</span>,</span>
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-primary/10">4</span> <span><span className="text-accent">"origin"</span>: <span className="text-yellow-500">"Tenerife"</span>,</span>
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-primary/10">5</span> <span><span className="text-accent">"focus"</span>: [<span className="text-yellow-500">"UI"</span>, <span className="text-yellow-500">"Perf"</span>]</span>
              </div>
              <div className="text-primary/40 leading-none flex gap-2">
                <span className="text-primary/10">6</span> {'}'}
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent/20 rounded-xl p-4 mt-6">
              <p className="font-body text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Current Focus</p>
              <p className="font-body text-primary/60 text-xs italic">
                "Exploring the limits of interactive UI and high-performance algorithms."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer line */}
        <div className="mt-24 pt-8 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-primary/20 text-sm">
            Designed & built by Hugo González Pérez
          </p>
          <p className="font-greeting text-accent/30 text-lg">
            © {new Date().getFullYear()} — Tenerife
          </p>
        </div>
      </div>
    </section>
  );
}
