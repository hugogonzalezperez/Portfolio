import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Cloud } from '@/components/Cloud';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.7], ['0%', '-140%']);
  const rightX = useTransform(scrollYProgress, [0, 0.7], ['0%', '140%']);
  const opacity = useTransform(scrollYProgress, [0.35, 0.72], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full h-screen flex flex-row bg-sky-hero overflow-hidden max-md:flex-col relative"
    >
      {/* ── Animated background clouds ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Back layer — slow */}
        <div className="absolute top-[8%]  animate-cloud-xl  opacity-90 [animation-delay:-14s]"><Cloud variant={0} width={300} /></div>
        <div className="absolute top-[20%] animate-cloud-xl  opacity-75 [animation-delay:-34s]"><Cloud variant={2} width={190} /></div>
        {/* Mid layer */}
        <div className="absolute top-[5%]  animate-cloud-lg  opacity-95 [animation-delay:-20s]"><Cloud variant={1} width={250} /></div>
        <div className="absolute top-[30%] animate-cloud-rev opacity-70 [animation-delay:-7s]" ><Cloud variant={0} width={220} /></div>
        {/* Front layer — fast */}
        <div className="absolute top-[60%] animate-cloud-md  opacity-60 [animation-delay:-4s]" ><Cloud variant={2} width={170} /></div>
        <div className="absolute top-[75%] animate-cloud-rev-sm opacity-50 [animation-delay:-18s]"><Cloud variant={1} width={210} /></div>

        {/* ── Cartoon sun ── */}
        <div className="absolute top-6 right-10 md:right-16">
          <svg width="84" height="84" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line key={angle} x1="45" y1="13" x2="45" y2="4" stroke="#1f1307" strokeWidth="3" strokeLinecap="round" transform={`rotate(${angle} 45 45)`} />
            ))}
            <circle cx="45" cy="45" r="22" fill="#FFD700" stroke="#1f1307" strokeWidth="3.5" />
            <circle cx="38" cy="41" r="3" fill="#1f1307" />
            <circle cx="52" cy="41" r="3" fill="#1f1307" />
            <path d="M 37 50 Q 45 58 53 50" stroke="#1f1307" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Birds */}
        {[
          { top: '12%', left: '18%', scale: 1 },
          { top: '9%', left: '22%', scale: 0.72 },
          { top: '15%', left: '26%', scale: 0.55 },
        ].map(({ top, left, scale }, i) => (
          <svg key={i} style={{ position: 'absolute', top, left, transform: `scale(${scale})` }} width="24" height="14" viewBox="0 0 24 14" fill="none">
            <path d="M 0 8 Q 6 0 12 6 Q 18 0 24 8" stroke="#1f1307" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        ))}
      </div>

      {/* ── Left: Name ── */}
      <motion.div
        style={shouldReduce ? {} : { x: leftX, opacity }}
        className="flex-1 basis-1/2 flex flex-col justify-center items-center p-8 z-10 max-md:flex-none max-md:basis-auto max-md:h-[40vh]"
      >
        <span className="font-greeting text-fluid-greeting text-[#1f1307]/70 font-bold -mb-[1vh] -ml-[10vw] -rotate-6 z-[11] drop-shadow-sm">
          Hi, I'm
        </span>
        <h1 className="font-hero text-fluid-name leading-none text-white uppercase text-center tracking-hero whitespace-pre-line text-shadow-3d">
          {`HUGO\nGONZÁLEZ PÉREZ`}
        </h1>
        <p className="font-body text-[#1f1307]/60 text-base mt-6 text-center max-w-xs leading-relaxed">
          Front-end Developer · Tenerife, Spain
        </p>
      </motion.div>

      {/* ── Right: Avatar ── */}
      <motion.div
        style={shouldReduce ? {} : { x: rightX, opacity }}
        className="flex-1 basis-1/2 h-screen relative max-md:flex-none max-md:basis-auto max-md:h-[60vh]"
      >
        <img
          alt="Hugo González Pérez Avatar"
          className="w-full h-full object-contain object-center"
          src="/models/SinFONDO1.gif"
        />
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        style={shouldReduce ? {} : { opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#1f1307]/50 z-20"
        aria-hidden="true"
      >
        <span className="font-greeting text-xl">scroll</span>
        <svg className="animate-bounce-slow w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M10 3v11M5 9l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
