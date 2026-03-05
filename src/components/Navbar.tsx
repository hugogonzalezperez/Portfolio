import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#jobs' },
  { label: 'Contact', href: '#contact' },
];

/* ── Dark mode helpers ── */
function getInitialDark() {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyDark(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  /* init dark mode on mount */
  useEffect(() => {
    const d = getInitialDark();
    setDark(d);
    applyDark(d);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    applyDark(next);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? 'rgba(var(--navbar-rgb, 255,255,255), 0.88)'
    : 'transparent';

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border 0.35s ease',
      }}
    >
      <nav style={{
        maxWidth: '1120px', margin: '0 auto',
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 0, fontFamily: 'var(--font-sans)',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}
        >
          <span style={{
            width: '32px', height: '32px', borderRadius: '8px',
            backgroundColor: 'var(--fg-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--bg)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '-0.02em',
            transition: 'background-color 0.3s',
          }}>
            HG
          </span>
          <span style={{
            color: 'var(--fg-1)', fontSize: '0.9rem', fontWeight: 500,
            letterSpacing: '-0.01em', transition: 'color 0.3s',
          }}>
            Hugo González
          </span>
        </button>

        {/* Desktop nav */}
        <ul style={{
          display: 'flex', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0,
          alignItems: 'center',
        }} className="nav-desktop">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <motion.button
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.2 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
                  fontWeight: 450, color: 'var(--fg-3)',
                  padding: '0.4rem 0.75rem', borderRadius: '6px',
                  transition: 'color 0.15s ease, background-color 0.15s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--fg-1)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-code)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--fg-3)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </motion.button>
            </li>
          ))}

          {/* Dark mode toggle */}
          <li>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              onClick={toggleDark}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                background: 'var(--fg)',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
                color: 'var(--bg)',
                marginLeft: '0.25rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {dark ? '☀' : '☾'}
            </motion.button>
          </li>

        </ul>

        {/* Mobile: dark toggle + hamburger */}
        <div className="nav-mobile-btn" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            onClick={toggleDark}
            style={{
              background: 'var(--fg)', border: 'none',
              borderRadius: '7px', cursor: 'pointer',
              width: '34px', height: '34px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.9rem', color: 'var(--bg)',
              transition: 'all 0.2s ease',
            }}
          >
            {dark ? '☀' : '☾'}
          </button>
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: '1px solid var(--border)',
              borderRadius: '7px', cursor: 'pointer', padding: '0.4rem 0.7rem',
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--fg-3)',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              backgroundColor: 'var(--bg)',
              borderTop: '1px solid var(--border)',
              backdropFilter: 'blur(14px)',
              overflow: 'hidden',
            }}
          >
            <ul style={{
              listStyle: 'none', margin: 0,
              padding: '0.75rem 2rem 1rem',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                      fontWeight: 400, color: 'var(--fg-2)', padding: '0.6rem 0',
                      width: '100%', textAlign: 'left',
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
