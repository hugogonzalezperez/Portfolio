import { useState } from 'react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  year: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'parky',
    title: 'Parky',
    description:
      'Marketplace para la gestión de aparcamientos en Tenerife. Incluye mapas interactivos, disponibilidad en tiempo real y sistema de reservas seguro.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Leaflet'],
    github: 'https://github.com/hugogonzalezperez/TFG',
    year: '2025',
    featured: true,
  },
  {
    id: 'game-of-life',
    title: 'Game of Life',
    description:
      'Implementación del Juego de la Vida de Conway en C++ utilizando la biblioteca SDL2 para el renderizado gráfico de la simulación.',
    tech: ['C++', 'SDL2'],
    github: 'https://github.com/hugogonzalezperez/Game-Of-Life',
    year: '2024',
    featured: true,
  },
  {
    id: 'maze-generator',
    title: 'Maze Generator',
    description:
      'Generador de laberintos aleatorios implementado en C++, utilizando algoritmos de búsqueda para crear estructuras complejas.',
    tech: ['C++'],
    github: 'https://github.com/hugogonzalezperez/Maze-Generator',
    year: '2024',
  },
  {
    id: 'sort-algorithms',
    title: 'Sort Algorithms',
    description:
      'Visualizador de algoritmos de ordenación (Bubble, Quick, Merge, etc.) para analizar su eficiencia y comportamiento en tiempo real.',
    tech: ['C++'],
    github: 'https://github.com/hugogonzalezperez/Sort-Algorithms',
    year: '2024',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid',
        borderColor: hovered ? 'var(--border-2)' : 'var(--border)',
        borderRadius: '14px',
        padding: '1.75rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'all 0.22s ease',
        boxShadow: hovered
          ? '0 8px 30px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        cursor: 'default',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: hovered ? 'linear-gradient(90deg, var(--accent), #8b5cf6)' : 'transparent',
        transition: 'background 0.22s ease',
        borderRadius: '14px 14px 0 0',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
          fontWeight: 650, color: 'var(--fg-1)',
          margin: 0, letterSpacing: '-0.02em',
        }}>
          {project.title}
          {project.featured && (
            <span style={{
              marginLeft: '0.5rem',
              fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
              fontWeight: 500, color: 'var(--accent)',
              backgroundColor: 'var(--accent-bg)', border: '1px solid var(--accent-br)',
              borderRadius: '4px', padding: '0.1rem 0.4rem',
              verticalAlign: 'middle', letterSpacing: '0.02em',
            }}>
              Featured
            </span>
          )}
        </h3>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          color: 'var(--fg-5)', flexShrink: 0, paddingTop: '0.15rem',
        }}>
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.9rem',
        lineHeight: 1.65, color: 'var(--fg-3)',
        margin: 0, flex: 1, fontWeight: 400,
      }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'var(--fg-3)',
            backgroundColor: 'var(--bg-code)', border: '1px solid var(--border)',
            borderRadius: '5px', padding: '0.2rem 0.55rem',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.25rem', borderTop: '1px solid var(--border)' }}>
        {project.github && <ProjectLink href={project.github}>GitHub →</ProjectLink>}
        {project.live && <ProjectLink href={project.live} accent>Live demo →</ProjectLink>}
      </div>
    </motion.article>
  );
}

function ProjectLink({ children, href, accent = false }: { children: ReactNode; href: string; accent?: boolean }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.82rem',
        fontWeight: 500,
        color: h ? (accent ? 'var(--accent-2)' : 'var(--fg-1)') : (accent ? 'var(--accent)' : 'var(--fg-4)'),
        textDecoration: 'none', letterSpacing: '-0.01em',
        transition: 'color 0.15s ease',
      }}
    >
      {children}
    </a>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '7rem 2rem',
        backgroundColor: 'var(--bg-muted)',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-5)' }}>03</span>
            <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--border-2)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.8rem',
              fontWeight: 600, color: 'var(--fg-4)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Projects
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700, color: 'var(--fg)',
            letterSpacing: '-0.035em', margin: 0, lineHeight: 1.15,
          }}>
            Things I've built.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--fg-4)',
            margin: '0.75rem 0 0', maxWidth: '55ch', lineHeight: 1.6, fontWeight: 400,
          }}>
            A selection of personal projects — from productivity tools to creative experiments.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
