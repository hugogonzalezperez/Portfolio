import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Cloud } from '@/components/Cloud';

const FACTS = [
  { label: 'Ubicación',  value: 'Tenerife, Spain' },
  { label: 'Educación',   value: 'Ing. Informática (ULL)' },
  { label: 'Core',        value: 'Performance & UX' },
];

const SKILL_GROUPS = [
  { label: 'Languages', value: 'Python, Java, C++, JS/TS' },
  { label: 'Tools & DB', value: 'Git, GitHub, MySQL, VS Code' },
  { label: 'Interests', value: 'AI, Web Dev, Scalable Apps' },
];

export function AboutSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #9DD4EE 0%, #AAD8F0 50%, #87CEEB 100%)' }}
    >
      {/* Background clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[6%]  animate-cloud-xl  opacity-80 [animation-delay:-8s]" ><Cloud variant={0} width={280} /></div>
        <div className="absolute top-[22%] animate-cloud-rev opacity-65 [animation-delay:-26s]"><Cloud variant={2} width={200} /></div>
        <div className="absolute top-[50%] animate-cloud-lg  opacity-55 [animation-delay:-15s]"><Cloud variant={1} width={240} /></div>
        <div className="absolute top-[70%] animate-cloud-rev-sm opacity-40 [animation-delay:-6s]"><Cloud variant={0} width={180} /></div>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 pt-36 md:pt-48 pb-24 flex flex-col items-center gap-14">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-1"
        >
          <p className="font-greeting text-2xl text-background/60 -rotate-2 inline-block">a bit</p>
          <h2 className="font-hero text-4xl md:text-5xl uppercase text-background text-shadow-3d">About me</h2>
        </motion.div>

        {/* Speech bubble card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
        >
          <div className="bg-primary comic-card p-8 md:p-14">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
              {/* Bio */}
              <div className="space-y-6 text-center">
                <h3 className="font-hero text-3xl md:text-4xl text-background leading-tight">
                  Transformando código en <span className="text-accent underline decoration-4 underline-offset-4">experiencias visuales</span>.
                </h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="font-body text-background text-lg md:text-xl leading-relaxed">
                    Graduado en Ingeniería Informática por la <span className="font-bold">Universidad de La Laguna</span>, mi misión es construir interfaces modernas que no solo funcionen a la perfección, sino que cautiven al usuario. 
                  </p>
                  <p className="font-body text-background/70 text-base md:text-lg leading-relaxed">
                    Como <span className="font-bold text-background">Front-end Developer</span>, combino mi sólida base técnica en algoritmos con una obsesión por el detalle y el rendimiento. Me especializo en dar vida a ideas complejas mediante código limpio, escalable y visualmente impactante.
                  </p>
                </div>
              </div>

              {/* Side Cards (Facts) - Now as a row */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {FACTS.map(({ label, value }) => (
                  <div key={label} className="comic-card bg-accent/10 px-6 py-3 text-center min-w-[160px]">
                    <p className="font-body text-[10px] text-background/50 uppercase tracking-widest">{label}</p>
                    <p className="font-display text-background font-bold text-sm mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bubble tail */}
          <div className="absolute -bottom-5 left-14 w-0 h-0"
            style={{ borderLeft:'12px solid transparent', borderRight:'12px solid transparent', borderTop:'20px solid #1f1307' }}
          />
          <div className="absolute -bottom-[14px] left-[58px] w-0 h-0"
            style={{ borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderTop:'18px solid #F5F0E0' }}
          />
        </motion.div>

        {/* Tech categories */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="comic-card bg-background px-6 py-4 space-y-1">
              <p className="font-hero text-accent text-sm uppercase tracking-wider">{group.label}</p>
              <p className="font-body text-primary/70 text-xs font-mono">{group.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
