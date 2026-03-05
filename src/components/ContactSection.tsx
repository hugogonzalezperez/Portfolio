import { useState } from 'react';
import { motion } from 'motion/react';

const LINKS = [
  { key: 'email', label: 'Email', value: 'hgonper03@gmail.com', href: 'mailto:hgonper03@gmail.com', icon: '✉' },
  { key: 'github', label: 'GitHub', value: 'github.com/hugogonzalezperez', href: 'https://github.com', icon: '◈' },
  { key: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/hugogonzalezperez', href: 'https://linkedin.com', icon: '◉' },
];

function ContactCard({ icon, label, value, href, index }: {
  icon: string; label: string; value: string; href: string; index: number;
}) {
  const [h, setH] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '1.1rem 1.25rem',
        backgroundColor: h ? 'var(--bg-card)' : 'var(--bg-muted)',
        border: '1px solid', borderColor: h ? 'var(--border-2)' : 'var(--border)',
        borderRadius: '12px', textDecoration: 'none',
        transition: 'all 0.2s ease',
        boxShadow: h ? '0 4px 16px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        transform: h ? 'translateY(-1px)' : 'none',
      }}
    >
      <div style={{
        width: '38px', height: '38px', borderRadius: '9px',
        backgroundColor: h ? 'var(--accent-bg)' : 'var(--bg-code)',
        border: '1px solid', borderColor: h ? 'var(--accent-br)' : 'var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', flexShrink: 0, transition: 'all 0.2s ease',
        color: h ? 'var(--accent)' : 'var(--fg-4)',
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', overflow: 'hidden' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
          fontWeight: 600, color: 'var(--fg-5)',
          textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
          color: h ? 'var(--fg-1)' : 'var(--fg-2)',
          transition: 'color 0.15s',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {value}
        </span>
      </div>
      <span style={{
        marginLeft: 'auto', color: h ? 'var(--accent)' : 'var(--border-2)',
        fontSize: '0.9rem', flexShrink: 0,
        transition: 'color 0.15s, transform 0.15s',
        transform: h ? 'translateX(2px)' : 'none', display: 'inline-block',
      }}>
        →
      </span>
    </motion.a>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@hugogonzalezperez.es').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 2rem 8rem',
        backgroundColor: 'var(--bg-muted)',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-5)' }}>05</span>
            <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-2)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
              fontWeight: 600, color: 'var(--fg-4)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Contact
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700, color: 'var(--fg)',
            letterSpacing: '-0.035em', margin: 0, lineHeight: 1.15,
          }}>
            Let's work together.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-4)',
            margin: '0.75rem 0 0', maxWidth: '50ch', lineHeight: 1.65, fontWeight: 400,
          }}>
            Open to new projects, freelance work, and full-time opportunities.
            Whether you have an idea or just want to say hello — I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>
          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {LINKS.map((link, i) => {
              const { key, ...props } = link;
              return <ContactCard key={key} {...props} index={i} />;
            })}
          </div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px', padding: '2rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 600,
                color: 'var(--fg-1)', letterSpacing: '-0.02em',
                margin: '0 0 0.5rem', lineHeight: 1.4,
              }}>
                Ready to connect?
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--fg-4)',
                margin: '0 0 1.5rem', lineHeight: 1.6,
              }}>
                The best way to reach me is by email. I typically reply within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:hello@hugogonzalezperez.es"
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    fontWeight: 500, color: 'var(--bg)',
                    backgroundColor: 'var(--fg-1)', border: 'none',
                    borderRadius: '8px', padding: '0.6rem 1.25rem',
                    textDecoration: 'none', cursor: 'pointer',
                    letterSpacing: '-0.01em', transition: 'opacity 0.15s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send email
                </a>

                <button
                  onClick={copyEmail}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.88rem',
                    fontWeight: 500,
                    color: copied ? '#059669' : 'var(--fg-3)',
                    backgroundColor: copied ? 'var(--green-bg)' : 'var(--bg-card)',
                    border: '1px solid', borderColor: copied ? 'var(--green-br)' : 'var(--border)',
                    borderRadius: '8px', padding: '0.6rem 1.25rem',
                    cursor: 'pointer', letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {copied ? '✓ Copied!' : 'Copy email'}
                </button>
              </div>
            </div>

            {/* Code accent */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.25rem 1.5rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: 1.9, color: 'var(--fg-5)' }}>
                <div><span style={{ color: 'var(--border-2)' }}>{'{'}</span></div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)' }}>available</span>
                  <span style={{ color: 'var(--border-2)' }}>: </span>
                  <span style={{ color: '#059669' }}>true</span>
                  <span style={{ color: 'var(--border-2)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)' }}>location</span>
                  <span style={{ color: 'var(--border-2)' }}>: </span>
                  <span style={{ color: '#d97706' }}>"Tenerife, Spain"</span>
                  <span style={{ color: 'var(--border-2)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)' }}>response</span>
                  <span style={{ color: 'var(--border-2)' }}>: </span>
                  <span style={{ color: '#d97706' }}>"&lt; 24h"</span>
                  <span style={{ color: 'var(--border-2)' }}>,</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)' }}>preferred</span>
                  <span style={{ color: 'var(--border-2)' }}>: </span>
                  <span style={{ color: '#d97706' }}>"TypeScript"</span>
                </div>
                <div><span style={{ color: 'var(--border-2)' }}>{'}'}</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
