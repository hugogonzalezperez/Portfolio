import { motion } from 'motion/react';

const NAV_LINKS = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Stack' },
  { href: '#contact',  label: 'Contact' },
];

export function Navbar() {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-2"
      aria-label="Main navigation"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex gap-2 bg-background/90 backdrop-blur-sm border-[3px] border-background rounded-2xl px-3 py-2 shadow-[4px_5px_0px_#1f1307] transition-all hover:shadow-[6px_7px_0px_#1f1307]"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <motion.a
            key={href}
            href={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-hero text-sm md:text-base text-primary/80 hover:text-accent px-4 py-1.5 rounded-xl hover:bg-background/50 transition-all duration-200 uppercase tracking-hero"
          >
            {label}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
}
