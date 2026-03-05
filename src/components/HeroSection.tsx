import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';

/** Blinking cursor for the code accent */
function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v: boolean) => !v), 560);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{
      display: 'inline-block', width: '2px', height: '0.9em',
      backgroundColor: 'var(--accent)', marginLeft: '2px',
      verticalAlign: 'middle', opacity: on ? 1 : 0,
      transition: 'opacity 0.08s',
    }} />
  );
}

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/** Animated mouse scroll indicator (tamal-sen style) */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      onClick={() => scrollTo('#about')}
      style={{
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.6rem',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Mouse outline */}
      <div style={{
        width: '38px', height: '58px',
        border: '2px solid var(--border-2)',
        borderRadius: '20px',
        display: 'flex', justifyContent: 'center',
        paddingTop: '6px',
        position: 'relative',
      }}>
        {/* Scrolling dot */}
        <div style={{
          width: '4px', height: '8px',
          backgroundColor: 'var(--accent)',
          borderRadius: '2px',
          animation: 'scrollDot 1.6s ease-in-out infinite',
        }} />
      </div>

      {/* Label */}
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.68rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--fg-5)',
        fontWeight: 500,
      }}>
        scroll
      </span>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 2rem 6rem',
        maxWidth: '1120px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontSize: 'clamp(2.6rem, 6vw, 4.75rem)',
          fontWeight: 700,
          color: 'var(--fg)',
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          margin: 0,
          fontFamily: 'var(--font-sans)',
          maxWidth: '16ch',
          transition: 'color 0.3s',
        }}
      >
        Hugo González
        <br />
        <span style={{ color: 'var(--fg-3)', fontWeight: 600 }}>Pérez.</span>
      </motion.h1>

      {/* Role line */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          fontWeight: 400,
          color: 'var(--fg-2)',
          margin: '1.25rem 0 0',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '-0.02em',
          lineHeight: 1.5,
          maxWidth: '560px',
          transition: 'color 0.3s',
        }}
      >
        Software Developer — Building modern, clean,
        <br className="hero-br" />
        and maintainable web applications.
      </motion.p>

      {/* Code accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        style={{ marginTop: '1.75rem' }}
      >
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0',
          backgroundColor: 'var(--bg-code)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          padding: '0.35rem 0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: 'var(--fg-3)',
          transition: 'background-color 0.3s, border-color 0.3s',
        }}>
          <span style={{ color: 'var(--accent)', marginRight: '0.4rem' }}>const</span>
          <span style={{ color: 'var(--fg-1)' }}>focus</span>
          <span style={{ color: 'var(--fg-4)', margin: '0 0.3rem' }}>=</span>
          <span style={{ color: '#059669' }}>"web development"</span>
          <BlinkCursor />
        </span>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.7 }}
        style={{ display: 'flex', gap: '0.75rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
      >
        <HeroButton primary onClick={() => scrollTo('#projects')}>
          View my work
        </HeroButton>
        <HeroButton onClick={() => scrollTo('#contact')}>
          Get in touch
        </HeroButton>
      </motion.div>

      {/* Animated mouse scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}

function HeroButton({
  children,
  onClick,
  primary = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        fontWeight: 500,
        letterSpacing: '-0.01em',
        padding: '0.65rem 1.4rem',
        borderRadius: '9px',
        cursor: 'pointer',
        border: primary ? 'none' : '1px solid var(--border)',
        backgroundColor: primary
          ? hovered ? 'var(--fg-3)' : 'var(--fg-1)'
          : hovered ? 'var(--bg-code)' : 'var(--bg)',
        color: primary ? 'var(--bg)' : 'var(--fg-2)',
        transition: 'all 0.18s ease',
        transform: hovered ? 'translateY(-1px)' : 'none',
        boxShadow: primary
          ? hovered ? '0 4px 16px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.12)'
          : hovered ? '0 2px 8px rgba(0,0,0,0.07)' : '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      {children}
    </button>
  );
}