import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Cloud } from '@/components/Cloud';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="comic-card bg-background/95 backdrop-blur-md p-6 flex flex-col gap-4 relative group overflow-hidden"
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-accent text-background font-hero text-[10px] px-3 py-1 rounded-bl-xl border-l-[3px] border-b-[3px] border-background uppercase tracking-wider z-10 shadow-sm">
          Featured
        </div>
      )}

      <div className="space-y-2 text-center">
        <h3 className="font-hero text-2xl text-primary flex justify-center items-center gap-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-body text-primary text-sm leading-relaxed opacity-90">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-md bg-accent/20 border border-accent/40 text-accent font-body text-[10px] uppercase font-bold tracking-wider">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center pt-6 border-t-[3px] border-background/20 mt-4 relative">
        {/* Horizontal divider that spans full width of card internal padding */}
        <div className="absolute -top-[3px] left-0 right-0 h-[3px] bg-background/30" />
        
        <div className="flex w-full divide-x-[3px] divide-background/20">
          <div className="flex-1 flex justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-hero text-xs text-accent hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-hero"
            >
              Code <span className="text-[10px]">→</span>
            </a>
          </div>
          {project.live && (
            <div className="flex-1 flex justify-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-hero text-xs text-accent hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-hero"
              >
                View <span className="text-[10px]">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const PROJECTS: Project[] = [
  {
    id: 'parky',
    title: 'Parky',
    description: 'Solución integral de movilidad para ciudades inteligentes. Marketplace de aparcamientos con mapas interactivos, gestión de reservas en tiempo real y pasarela de pagos segura.',
    tech: ['React', 'Supabase', 'Leaflet', 'Tailwind'],
    github: 'https://github.com/hugogonzalezperez/TFG',
    live: 'https://www.hugogonzalezperez.es/',
    featured: true,
  },
  {
    id: 'karvia',
    title: 'Karvia',
    description: 'Ecosistema digital para el mundo del motor. Gestión del ciclo de vida del vehículo, simulador de ITV y digitalización de facturas mediante IA integrada.',
    tech: ['React Native', 'Supabase', 'Gemini AI', 'Expo'],
    github: 'https://github.com/hugogonzalezperez/Karvia',
    featured: true,
  },
  {
    id: 'algora',
    title: 'Algora',
    description: 'Plataforma educativa para el dominio de estructuras de datos y algoritmos. Visualización interactiva de pathfinding, ordenación y generación de laberintos.',
    tech: ['React 19', 'TypeScript', 'Tailwind 4', 'Vite'],
    github: 'https://github.com/hugogonzalezperez/Algora',
    live: 'https://hugogonzalezperez.github.io/Algora/',
  },
  {
    id: 'pokedex',
    title: 'PokeDex',
    description: 'Prueba de rendimiento y carga masiva de datos. Enciclopedia interactiva que utiliza técnicas avanzadas de renderizado dinámico y fetching desde APIs externas.',
    tech: ['React', 'REST API', 'Lucide', 'Performance'],
    github: 'https://github.com/hugogonzalezperez/PokeDex',
    live: 'https://pokedex-swart-eight-77.vercel.app/',
  },
];

export function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView    = useInView(headerRef, { once: true });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #AAD8F0 40%, #87CEEB 100%)' }}
    >
      {/* Sparse clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[5%]  animate-cloud-rev     opacity-60 [animation-delay:-11s]"><Cloud variant={2} width={175} /></div>
        <div className="absolute top-[40%] animate-cloud-lg      opacity-50 [animation-delay:-28s]"><Cloud variant={0} width={220} /></div>
        <div className="absolute top-[72%] animate-cloud-rev-sm  opacity-40 [animation-delay:-3s]" ><Cloud variant={1} width={195} /></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <div ref={headerRef} className="mb-14 space-y-2">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-greeting text-accent text-2xl -rotate-2 inline-block"
          >
            what I've built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-hero text-4xl md:text-5xl text-background uppercase tracking-wide text-shadow-3d"
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
