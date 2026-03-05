import { motion } from 'motion/react';

const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:hello@hugogonzalezperez.es' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        padding: '2rem',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{
        maxWidth: '1120px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        {/* Left */}
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--fg-5)',
          display: 'flex', alignItems: 'center', gap: '0.6rem',
        }}>
          <span>© {year} Hugo González Pérez</span>
          <span style={{ color: 'var(--border-2)' }}>·</span>
          <a
            href="https://hugogonzalezperez.es"
            style={{
              color: 'var(--fg-4)', textDecoration: 'none',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
            }}
          >
            hugogonzalezperez.es
          </a>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {FOOTER_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
                color: 'var(--fg-5)', textDecoration: 'none',
                padding: '0.3rem 0.6rem', borderRadius: '5px',
                transition: 'color 0.15s ease, background-color 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--fg-2)';
                e.currentTarget.style.backgroundColor = 'var(--bg-code)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--fg-5)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <span style={{ color: 'var(--border)', padding: '0 0.25rem' }}>·</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
              color: 'var(--fg-5)', padding: '0.3rem 0.6rem',
              borderRadius: '5px', transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--fg-2)';
              e.currentTarget.style.backgroundColor = 'var(--bg-code)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--fg-5)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ↑ Top
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
