import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const SKILLS = [
  { name: 'React',       icon: '⚛',  color: '#61DAFB' },
  { name: 'TypeScript',  icon: 'TS', color: '#3178C6' },
  { name: 'Node.js',     icon: 'N',  color: '#8CC84B' },
  { name: 'Three.js',    icon: '3D', color: '#ffffff' },
  { name: 'Supabase',    icon: 'SB', color: '#3ECF8E' },
  { name: 'PostgreSQL',  icon: 'PG', color: '#336791' },
  { name: 'Tailwind',    icon: 'TW', color: '#38BDF8' },
  { name: 'Vite',        icon: '⚡', color: '#BD34FE' },
  { name: 'C++',         icon: 'C++',color: '#f34b7d' },
  { name: 'Expo',        icon: '📱', color: '#000000' },
];

const JOBS = [
  {
    role: 'Cybersecurity Analyst',
    company: 'SATEC',
    period: '2025 – Present',
    desc: 'Analyzing and mitigating security threats. Implementing and maintaining security systems. Collaborating with cross-functional teams to ensure the security of the organization.',
    skills: ['Fortinet', 'Palo Alto', 'IronPort', 'Vulnerability Assessment', 'Incident Response', 'Network Security', 'Bash'],
  },
  {
    role: 'Computer Science student',
    company: 'University of La Laguna',
    period: '2021 – 2025',
    desc: 'Studied Computer Science at the University of La Laguna. Gained extensive experience in modern web technologies and optimizing performance.',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'C/C++', 'C#', 'Python', 'SQL', 'React'],
  },
];

export function SkillsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const expRef   = useRef<HTMLDivElement>(null);
  const isStack  = useInView(stackRef, { once: true, margin: '-80px' });
  const isExp    = useInView(expRef,   { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative w-full overflow-hidden">

      {/* ═══ ZONE 1: STACK (sky → sunset) ═══ */}
      <div
        className="relative w-full"
        style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #FFCC66 35%, #FFB84D 55%, #CC5500 80%, #8B3A00 100%)' }}
      >
        <div ref={stackRef} className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-12">
          <div className="flex flex-col items-center text-center space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isStack ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="font-greeting text-2xl text-background/60 -rotate-2"
            >
              tools I use
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isStack ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="font-hero text-4xl md:text-5xl uppercase text-white text-shadow-3d"
            >
              Stack
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {SKILLS.map(({ name, icon, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={isStack ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="comic-card bg-background/75 backdrop-blur-sm p-4 flex flex-col items-center gap-2 cursor-default hover:scale-105 transition-transform duration-200"
              >
                <span
                  className="text-2xl font-hero w-12 h-12 flex items-center justify-center rounded-xl border-2 border-current/20"
                  style={{ color, backgroundColor: `${color}18` }}
                >
                  {icon}
                </span>
                <span className="font-body text-sm text-primary/80 font-medium">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SKYLINE SEPARATOR ═══ */}
      <div style={{ lineHeight: 0, marginTop: '-1px' }} aria-hidden="true">
        <svg viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice" className="w-full block">
          <defs>
            <linearGradient id="sunset-ground" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#8B3A00" />
              <stop offset="30%"  stopColor="#CC5500" />
              <stop offset="58%"  stopColor="#FF7B1A" />
              <stop offset="78%"  stopColor="#CC4400" />
              <stop offset="92%"  stopColor="#3D1200" />
              <stop offset="100%" stopColor="#0D0805" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="300" fill="url(#sunset-ground)" />
          <rect x="0" y="210" width="1440" height="90" fill="#0D0805" />
          {/* Buildings */}
          {[
            [0,120,55],[65,90,38],[110,130,72],[192,85,48],[250,65,65],[325,105,42],
            [377,75,52],[438,118,85],[532,68,56],[598,95,78],[686,55,48],[744,88,62],
            [816,112,80],[906,72,52],[968,100,66],[1044,60,58],[1112,95,70],
            [1192,78,48],[1250,115,95],[1355,82,85],
          ].map(([x,y,w], i) => (
            <rect key={i} x={x} y={y} width={w} height={300 - y} fill="#0D0805" />
          ))}
          {/* Antennas */}
          {[[83,82],[554,60],[706,47],[1066,52],[1378,74]].map(([x,y],i) => (
            <rect key={i} x={x} y={y} width="4" height="14" fill="#0D0805" />
          ))}
          {/* Windows */}
          {([
            [10,130],[10,150],[35,130],[35,150],[75,105],[75,125],[75,145],
            [120,140],[120,160],[165,140],[165,160],[258,80],[258,100],[258,120],
            [285,80],[285,100],[540,85],[540,105],[540,125],[565,85],[565,105],
            [695,70],[695,90],[695,110],[916,88],[916,108],[916,128],[940,88],
            [1052,76],[1052,96],[1072,76],[1072,96],[1265,128],[1265,148],[1300,128],[1300,148],
          ] as [number,number][]).map(([wx,wy],i) => (
            <rect key={i} x={wx} y={wy} width="10" height="8" rx="1" fill="#D4A017" opacity="0.85" />
          ))}
        </svg>
      </div>

      {/* ═══ ZONE 2: EXPERIENCE (underground) ═══ */}
      <div
        className="relative w-full"
        style={{ background: '#0D0805' }}
      >
        {/* Brick texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 24px, #F5F0E0 24px, #F5F0E0 26px),
              repeating-linear-gradient(90deg, transparent, transparent 46px, #F5F0E0 46px, #F5F0E0 48px)
            `,
          }}
        />
        {/* Pipes */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 48" fill="none" className="w-full">
            <rect x="0" y="16" width="1440" height="14" rx="3" fill="#1f1307" stroke="#D4A017" strokeWidth="0.8" opacity="0.5" />
            {[180,540,900,1260].map((x) => (
              <rect key={x} x={x} y="10" width="14" height="24" rx="3" fill="#1f1307" stroke="#D4A017" strokeWidth="0.8" opacity="0.5" />
            ))}
          </svg>
        </div>

        <div ref={expRef} className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-24 space-y-12">
          <div className="flex flex-col items-center text-center space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isExp ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="font-greeting text-2xl text-accent/60 -rotate-2"
            >
              where I've been
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isExp ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="font-hero text-4xl md:text-5xl uppercase text-white text-shadow-3d"
            >
              Experience
            </motion.h2>
          </div>

          <div className="relative flex flex-col gap-6 pl-8 border-l-2 border-accent/20">
            {JOBS.map(({ role, company, period, desc, skills }, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, x: -18 }}
                animate={isExp ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.14 + i * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-accent border-2 border-underground shadow-[0_0_10px_rgba(212,160,23,0.6)]" />
                <div className="comic-card bg-background/60 p-5 hover:bg-background/75 transition-colors duration-300 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <p className="font-hero text-primary text-lg uppercase tracking-wide">{role}</p>
                    <p className="font-body text-accent text-sm font-semibold">{company}</p>
                    <span className="font-body text-primary/40 text-[10px] border border-primary/10 rounded-full px-3 py-0.5 mt-1">{period}</span>
                  </div>
                  <p className="font-body text-primary/55 text-sm leading-relaxed mb-5 max-w-lg">{desc}</p>
                  
                  {/* Skill pills for jobs */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent font-body text-[10px] uppercase font-bold tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
