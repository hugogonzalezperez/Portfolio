import { motion } from 'motion/react';
import type { ReactNode } from 'react';

const SKILLS = [
  'TypeScript', 'React', 'Next.js', 'Node.js',
  'PostgreSQL', 'CSS / Tailwind', 'Git', 'Docker',
];

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1120px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Section heading */}
      <FadeUp>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-5)' }}>02</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-2)' }} />
          <h2 style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
            fontWeight: 600, color: 'var(--fg-4)',
            textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0,
          }}>
            About me
          </h2>
        </div>
      </FadeUp>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem', alignItems: 'start',
      }}>
        {/* Text column */}
        <div>
          <FadeUp delay={0.05}>
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)',
              fontWeight: 700, color: 'var(--fg)',
              letterSpacing: '-0.03em', lineHeight: 1.2,
              margin: '0 0 1.5rem',
            }}>
              Passionate about
              <br />
              <span style={{ color: 'var(--accent)' }}>crafting great</span>
              <br />
              software.
            </h3>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1rem',
              lineHeight: 1.75, color: 'var(--fg-3)',
              margin: '0 0 1rem', maxWidth: '50ch', fontWeight: 400,
            }}>
              I'm a software developer from Spain, focused on building clean,
              performant, and user-centric web applications. I care deeply about
              developer experience, accessibility, and writing code that's easy to
              maintain and a pleasure to work with.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1rem',
              lineHeight: 1.75, color: 'var(--fg-3)',
              margin: '0 0 2rem', maxWidth: '50ch', fontWeight: 400,
            }}>
              Currently looking for opportunities to work on meaningful projects
              with teams that value quality, clarity, and continuous improvement.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '0.6rem 1rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
            }}>
              <span style={{ color: 'var(--fg-5)', marginRight: '0.5rem' }}>{'// '}</span>
              <span style={{ color: 'var(--accent)' }}>available</span>
              <span style={{ color: 'var(--fg-4)', margin: '0 0.35rem' }}>:</span>
              <span style={{ color: '#059669' }}>true</span>
              <span style={{ color: 'var(--fg-5)', marginLeft: '0.5rem' }}>| Spain 🇪🇸</span>
            </div>
          </FadeUp>
        </div>

        {/* Skills column */}
        <div>
          <FadeUp delay={0.1}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
              fontWeight: 600, color: 'var(--fg-5)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              margin: '0 0 1.25rem',
            }}>
              Technologies
            </p>
          </FadeUp>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.15 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.12 } }}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
                  fontWeight: 450, color: 'var(--fg-2)',
                  backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '7px', padding: '0.4rem 0.85rem',
                  cursor: 'default',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  letterSpacing: '-0.01em',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Frontend Development', value: 'React, Next.js, TypeScript' },
                { label: 'Backend & APIs', value: 'Node.js, REST, PostgreSQL' },
                { label: 'Tooling & DevOps', value: 'Git, Docker, CI/CD' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', flexDirection: 'column', gap: '0.25rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '10px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.85rem',
                    fontWeight: 600, color: 'var(--fg-1)', letterSpacing: '-0.01em',
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-4)',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}