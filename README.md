# Hugo González Pérez — Portfolio

Personal portfolio and developer blog built with React, Motion (Framer), and Three.js.

🌐 [hugogonzalezperez.es](https://hugogonzalezperez.es)

## Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| UI        | React 18                           |
| Animations| Motion (Framer Motion)             |
| 3D        | Three.js                           |
| Bundler   | Vite                               |
| Fonts     | Inter + JetBrains Mono (Google Fonts) |

## Walkthrough

- [x] Tidy up `src/main.tsx`
- [x] Fix TypeScript configuration and lint errors (tsconfig, types)
- [x] Fix React key prop conflict in `ContactSection.tsx`
- [x] Update scroll indicator in `HeroSection.tsx` — mouse animation (centered)
- [x] Implement section-based background shapes in `ThreeBackground.tsx`
### Organic Background Transitions
Las transiciones entre formas geométricas ahora son mucho más fluidas y naturales:
- **Fase de Disolución:** La forma actual se encoge hacia el centro mientras aumenta su velocidad de rotación.
- **Intercambio:** El cambio de geometría ocurre cuando la forma es invisible (escala 0).
- **Fase de Formación:** La nueva forma emerge desde el centro recuperando su tamaño y velocidad normal.
- **Suavizado:** Se utiliza una función de easing cuadrática para que el movimiento sea elegante.
- [x] Refine background transitions to be organic (shrink/grow + spin)
- [x] Ensure scroll indicator is centered at `bottom: 1rem`
- [x] Update all components to use CSS vars for colors & UI components
- [ ] Implement dynamic geometries for background shapes

### Type Safety & Linting
El proyecto ahora es 100% Type-Safe:
- **TypeScript:** Añadidos `tsconfig.json` y `tsconfig.node.json` (antes ausentes).
- **Tipos:** Instalados `@types/react`, `@types/react-dom`, `@types/node` y `typescript`.
- **Configuración:** Configurado `moduleResolution: "Bundler"` y `vite-env.d.ts` para que el IDE reconozca todas las subrutas de React.
- **Correcciones:** Identificado y arreglado un error real de duplicación de props en `ContactSection.tsx`.

### Final Verification
- `npm run build`: ✅ PASSED
- `npx tsc --noEmit`: ✅ PASSED (0 errores)

The project is now fully reorganized, theme-capable, type-safe, and visually dynamic with organic transitions.

## Project structure

```
src/
  components/       # Page sections & UI components
  hooks/            # Custom React hooks
  styles/           # Global CSS (index.css, fonts.css)
  App.tsx           # Root component
  main.tsx          # Entry point
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production bundle → dist/
```