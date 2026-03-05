import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

const JOBS: Job[] = [
  {
    id: 'job-1',
    company: 'Informatics Engineering Degree',
    role: 'Computer Science',
    period: '2021 — 2025',
    description: 'Studied Computer Science at the University of Granada. Gained extensive experience in modern web technologies and optimizing.',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'C/C++', 'C#', 'Python', 'SQL', 'React'],
  }, 
  {
    id: 'job-2',
    company: 'SATEC',
    role: 'Cybersecurity Analyst',
    period: '2025 — Present',
    description: 'Analyzing and mitigating security threats. Implementing and maintaining security systems. Collaborating with cross-functional teams to ensure the security of the organization.',
    skills: ['Fortinet', 'Palo Alto', 'IronPort', 'Vulnerability Assessment', 'Incident Response', 'Network Security', 'Bash'],
  },
];

function JobItem({ job, index, isLast }: { job: Job; index: number; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ display: 'flex', gap: '2rem', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Timeline spine */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        flexShrink: 0, position: 'relative', width: '12px'
      }}>
        {/* Dot */}
        <motion.div
          animate={{
            scale: hovered ? 1.4 : 1,
            backgroundColor: hovered ? 'var(--accent)' : 'var(--border-2)',
            boxShadow: hovered ? '0 0 12px var(--accent)' : 'none',
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: '12px', height: '12px', borderRadius: '50%',
            zIndex: 2, marginTop: '0.4rem', border: '2px solid var(--bg)',
          }}
        />
        {/* Line */}
        {!isLast && (
          <div style={{
            flex: 1, width: '2px', backgroundColor: 'var(--border)',
            position: 'absolute', top: '12px', bottom: '-2rem', left: '50%',
            transform: 'translateX(-50%)', zIndex: 1,
          }} />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ paddingBottom: '3.5rem', flex: 1 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 600,
            color: 'var(--fg-1)', margin: 0, cursor: 'default',
          }}>
            {job.company}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--fg-5)',
            fontWeight: 500,
          }}>
            {job.period}
          </span>
        </div>

        <AnimatePresence>
          {hovered ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '0.75rem' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500,
                  color: 'var(--accent)', margin: '0 0 0.5rem',
                }}>
                  {job.role}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.6,
                  color: 'var(--fg-4)', margin: '0 0 1rem', maxWidth: '60ch',
                }}>
                  {job.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {job.skills.map(skill => (
                    <span key={skill} style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.72rem',
                      fontWeight: 500, color: 'var(--fg-3)',
                      backgroundColor: 'var(--bg-code)', border: '1px solid var(--border)',
                      borderRadius: '5px', padding: '0.2rem 0.5rem',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                color: 'var(--fg-4)', margin: '0.25rem 0 0',
              }}
            >
              {job.role}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="jobs"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1120px',
        margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '4.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-5)' }}>04</span>
          <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-2)' }} />
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
            fontWeight: 600, color: 'var(--fg-4)',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Experience
          </span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700, color: 'var(--fg)',
          letterSpacing: '-0.035em', margin: 0, lineHeight: 1.15,
        }}>
          Academic and professional history.
        </h2>
      </motion.div>

      <div style={{ maxWidth: '800px' }}>
        {JOBS.map((job, i) => (
          <JobItem
            key={job.id}
            job={job}
            index={i}
            isLast={i === JOBS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
