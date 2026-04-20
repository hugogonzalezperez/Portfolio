# Plan Perfeccionado: Portfolio Top-Tier
> Versión refinada con `/3d-web-experience` · `/senior-frontend` · `/frontend-design` · `/ui-design-system` · `/ui-ux-pro-max`
> Fecha: 2026-04-11

---

## Estado Base (Hitos Confirmados)

| Ítem | Estado |
|------|--------|
| Design tokens (index.css) — Vercel/Linear light | ✅ Sólido |
| HeroSection — tipografía masiva, code accent, BlinkCursor | ✅ Sólido |
| R3F, Drei, Three.js, Lucide, Motion instaladas | ✅ |
| ThreeBackground.tsx — deprecado | ✅ Eliminado conceptualmente |

---

## Arquitectura Definitiva de Secciones

El orden se redefine para máximo impacto narrativo:

```
HeroSection         → Quién soy (ya implementado)
ProjectsSection     → El trabajo (subir: impacto inmediato tras Hero)
BentoSection        → Contexto: bio + stack + experiencia (fusión About + Experience)
ContactSection      → Llamada a la acción
```

> **Cambio clave:** Projects se mueve por encima de About/Experience.
> En portfolios de referencia (Vercel, Linear, Rauno), el trabajo viene inmediatamente después del hero.

---

## Fase 1 — ProjectsSection (3D + Minimal Table)

### 1A. Arquitectura de Componentes

```
src/components/
  ProjectsSection.tsx        ← Orquestador (sin lógica 3D)
  project-cards/
    KarviaCard.tsx            ← Canvas R3F con Cybertruck GLB
    ParkyCard.tsx             ← Canvas R3F con escena isométrica (primitivos)
    ProjectMiniTable.tsx      ← Lista minimalista de otros proyectos
```

### 1B. Karvia Card (Featured — 3D con GLB)

**Principio:** el canvas se monta SOLO cuando la card entra en el viewport.
Esto evita cargar WebGL en segundo plano mientras el usuario está en el Hero.

```tsx
// KarviaCard.tsx — patrón de carga diferida
const [inView, setInView] = useState(false);
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) setInView(true); },
    { threshold: 0.1 }
  );
  if (containerRef.current) observer.observe(containerRef.current);
  return () => observer.disconnect();
}, []);

// Preload del modelo antes de que el usuario llegue a la sección
useGLTF.preload('/models/cybertruck.glb');
```

**Setup de iluminación (Studio Light — estilo Linear):**
```tsx
// Dentro del Canvas
<ambientLight intensity={0.4} />
<directionalLight position={[5, 8, 3]} intensity={1.2} castShadow />
<pointLight position={[-4, 2, -3]} intensity={0.6} color="#e0e8ff" />
{/* Rim light trasero para profundidad */}
<pointLight position={[0, -2, -5]} intensity={0.3} color="#ffffff" />
```

**Interacciones:**
- Rotación automática suave (velocidad 0.003 rad/frame)
- Hover → pausa rotación → mouse parallax (rotation.x/y según posición del cursor)
- `prefers-reduced-motion` → sin rotación, pose estática
- Mobile (<768px) → Canvas deshabilitado, mostrar `KarviaStaticCard`

**Fallback mobile (estático pero elegante):**
```tsx
function KarviaStaticCard() {
  // Gradiente CSS que evoca el vehículo sin WebGL
  // Grid de líneas finas en perspectiva (CSS transform3d)
  // Sin Three.js, peso cero
}
```

**Optimización del modelo GLB:**
```bash
# Pipeline de compresión obligatorio antes de poner en /public
npm install -g @gltf-transform/cli
gltf-transform optimize cybertruck-raw.glb public/models/cybertruck.glb \
  --compress draco \
  --texture-compress webp \
  --texture-size 512
# Target: < 2MB. Si supera 4MB, bajar poly count en Blender primero.
```

**Loading state (no pantalla en blanco):**
```tsx
function CanvasSkeleton() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(110deg, var(--bg-code) 30%, var(--bg-muted) 50%, var(--bg-code) 70%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s ease infinite',
      borderRadius: '12px',
    }} />
  );
}
// @keyframes shimmer en index.css
```

### 1C. Parky Card (Featured — Escena Isométrica con Primitivos R3F)

> No necesita GLB externo. La escena se construye con geometrías Three.js.
> Peso: ~0KB extra. Carga instantánea.

```tsx
function IsometricParking() {
  // BoxGeometry slots de parking
  // MeshStandardMaterial colores neutros/teal
  // OrthographicCamera para isométrico real
  // Float suave: useFrame → mesh.position.y = Math.sin(state.clock.elapsedTime) * 0.05
}
```

**Layout en la grid:**
```
Desktop: [Karvia 60%] | [Parky 40%]
Tablet:  [Karvia 100%] (full width)
         [Parky  100%] (stacked)
Mobile:  ambos static cards sin Canvas
```

### 1D. Minimal Project Table (Otros Proyectos)

Debajo de los featured cards, una tabla limpia estilo Linear/changelog:

```
Proyectos a incluir:
- Algora        → [nuevo] React/TS — descripción pendiente
- Pokedex       → [nuevo] React/TS — descripción pendiente
- Maze Generator → C++ — 2024
- Game of Life  → C++ / SDL2 — 2024
- Sort Algorithms → C++ / SDL2 — 2024
```

**Diseño tabla:**
```
┌─────────────────────────────────────────────────────────────┐
│ Other projects                                              │
├──────────────────────┬──────────┬────────────────┬─────────┤
│ Name                 │ Year     │ Tech           │ Link    │
├──────────────────────┼──────────┼────────────────┼─────────┤
│ Algora               │ 2025     │ React · TS     │ →       │
│ Pokedex              │ 2025     │ React · TS     │ →       │
│ Maze Generator       │ 2024     │ C++            │ →       │
│ Game of Life         │ 2024     │ C++ · SDL2     │ →       │
│ Sort Algorithms      │ 2024     │ C++ · SDL2     │ →       │
└──────────────────────┴──────────┴────────────────┴─────────┘
```

**UX de la tabla:**
- Hover sobre fila: `background: var(--bg-muted)`, sin box-shadow (no cards)
- `cursor: pointer` en cada fila clicable
- Flecha `→` aparece en hover (opacity 0 → 1), transición 150ms
- En mobile: scroll horizontal o columnas reducidas (name + link)

---

## Fase 2 — BentoSection (Fusión About + Experience)

### 2A. Layout Asimétrico (12 columnas)

```
Desktop (≥1024px):
┌──────────────────────────┬────────────────┐
│  Headline + Bio           │  Status Card   │  h: ~280px
│  (col-span 8)             │  (col-span 4)  │
├────────────────┬──────────┴────────────────┤
│  Stack Card    │  Experience Timeline Card  │  h: ~320px
│  (col-span 4)  │  (col-span 8)             │
└────────────────┴────────────────────────────┘

Tablet (768-1023px):
┌─────────────────┬─────────────────┐
│  Bio            │  Status         │  h: auto
│  (col-span 6)   │  (col-span 6)   │
├─────────────────┴─────────────────┤
│  Stack          │  Experience     │  h: auto
│  (col-span 4)   │  (col-span 8)   │
└─────────────────────────────────┘

Mobile (<768px): stack vertical, order: Bio → Status → Experience → Stack
```

### 2B. Definición de Cada Celda Bento

**Celda 1 — Bio (grande)**
```
- Headline: "Computer Engineer / Cybersecurity Analyst"
- 2-3 líneas bio compacta (max 65 caracteres/línea)
- Sin padding excesivo. Aireado pero denso de valor.
- Border: 1px solid var(--border)
- Background: var(--bg-card) con muy leve radial-gradient(ellipse at top left, rgba(0,0,0,0.02), transparent)
```

**Celda 2 — Status (pequeña, esquina superior derecha)**
```
- Dot pulsante verde (keyframes: scale 1 → 1.4 → 1, opacity)
- "Open to work" o "Available for projects"
- Ubicación: Tenerife, España
- Año de graduación: 2025
- Token mono font, look de terminal
- Hover: subtly elevate (box-shadow)
```

**Celda 3 — Stack (columna izquierda inferior)**
```
- Título: "// tech_stack" en mono
- Lista vertical de tecnologías agrupadas:
  Languages   Python · Java · C++ · JS/TS
  Frontend    React · Tailwind · Vite
  Backend     Supabase · PostgreSQL
  Security    Fortinet · Palo Alto · IronPort
  Tools       Git · VS Code
- Sin iconos (texto mono puro, estilo .env file)
- Background: var(--bg-code) para diferenciar de las otras celdas
```

**Celda 4 — Experience (grande, derecha inferior)**
```
- Headline: "Academic + Professional"
- Timeline compacto (NO expandible en hover — ya no hay espacio)
- Cada item: dot + company + role + periodo
  ○ ULL                    Computer Engineering    2021—2025
  ○ SATEC                  Cybersecurity Analyst   2025—Present
- Skills como pills inline debajo de cada item
- Formato ticket/receipt: border izquierdo de 2px color accent
```

### 2C. Tokens CSS Adicionales para Bento

Añadir a `index.css`:
```css
/* ── Bento Grid ─────────────────────────────────── */
--bento-gap: 1rem;
--bento-radius: 16px;
--bento-border: 1px solid var(--border);
--bento-shadow: 0 1px 3px rgba(0,0,0,0.04);
--bento-shadow-hover: 0 4px 16px rgba(0,0,0,0.08);

/* ── Status pulse ───────────────────────────────── */
@keyframes statusPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.5); opacity: 0.5; }
}

/* ── Canvas shimmer ─────────────────────────────── */
@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

---

## Fase 3 — Navbar + Footer Polish

### Navbar (cambio quirúrgico)

El backdrop-filter ya existe. El único problema: `backgroundColor: scrolled ? 'var(--bg)' : 'transparent'`
usa el blanco sólido en lugar de translúcido.

**Fix:**
```tsx
// Antes:
backgroundColor: scrolled ? 'var(--bg)' : 'transparent',

// Después:
backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.72)' : 'transparent',
// El backdrop-filter ya hace el trabajo. rgba(,,,0.72) da el efecto frosted glass.
```

También: el dark mode toggle con emoji `☾` / `☀` viola la regla de `/ui-ux-pro-max`
("No emoji como iconos — usar SVG"). Reemplazar con iconos Lucide `Moon` / `Sun`.

```tsx
import { Sun, Moon } from 'lucide-react';
// {dark ? <Sun size={16} /> : <Moon size={16} />}
```

### Footer (nuevo, minimal)

```tsx
// Layout: flex row, space-between
// Left:  © 2025 Hugo González Pérez
// Right: [GitHub icon] [LinkedIn icon] (Lucide o SVG inline)
// Border top: 1px solid var(--border)
// No backdrop-filter (footer es estático, no fixed)
// Background: var(--bg) — mismo que la página, sin contraste
// Padding: 2rem
```

---

## Fase 4 — Checklist UX/Accessibility (ui-ux-pro-max)

Antes de dar por implementada cada fase:

### Visual
- [ ] Touch targets mínimo 44×44px en todos los botones/links
- [ ] `cursor: pointer` en cards clicables de la tabla de proyectos
- [ ] `aria-label` en botones icon-only (dark toggle, social links en footer)
- [ ] Contraste mínimo 4.5:1 — `var(--fg-3)` (#666) sobre `var(--bg)` (#fff) = 5.74:1 ✅
- [ ] `alt=""` en imágenes decorativas, alt descriptivo en las relevantes

### Motion y 3D
- [ ] `prefers-reduced-motion` → sin auto-rotate en Cybertruck, sin shimmer en skeleton
- [ ] Canvas monta solo al entrar en viewport (IntersectionObserver)
- [ ] Suspense + skeleton para todos los Canvas
- [ ] Mobile (<768px) → zero Canvas, static fallback

### Performance (medido en Lighthouse)
- [ ] LCP < 2.5s → el Canvas de Karvia NO debe bloquear el render inicial
- [ ] No usar `import * from 'three'` — solo importar lo necesario
- [ ] GLB < 2MB tras compresión Draco
- [ ] `useGLTF.preload('/models/cybertruck.glb')` llamado a nivel módulo (fuera del componente)

### Responsive
- [ ] 375px · 768px · 1024px · 1440px — verificar Bento Grid en cada breakpoint
- [ ] ProjectsSection tabla: scroll horizontal en mobile o columnas ocultas
- [ ] No overflow-x visible en ninguna sección

---

## Fase 5 — Orden de Ejecución Recomendado

```
Sesión 1:  ProjectsSection → Karvia 3D Card (sin GLB real, usar BoxGeometry placeholder)
Sesión 2:  ProjectsSection → Parky Isometric Card + Minimal Table
Sesión 3:  BentoSection → Layout grid + 4 celdas (sin experiencia interactiva)
Sesión 4:  BentoSection → polish (animaciones entrada, hover states)
Sesión 5:  Navbar fix rgba + Moon/Sun icons · Footer nuevo
Sesión 6:  Integrar GLB real del Cybertruck (si disponible) · Optimizar con gltf-transform
Sesión 7:  QA final: Lighthouse · prefers-reduced-motion · mobile · a11y
```

---

## Estructura de Archivos Final

```
src/
  components/
    HeroSection.tsx           ✅ (no tocar)
    Navbar.tsx                ← Fase 3 (rgba bg + Lucide icons)
    Footer.tsx                ← Fase 3 (reescribir minimal)
    ProjectsSection.tsx       ← Fase 1 (orquestador)
    project-cards/
      KarviaCard.tsx          ← Fase 1 (R3F + GLB)
      ParkyCard.tsx           ← Fase 2 (R3F primitivos)
      ProjectMiniTable.tsx    ← Fase 1 (tabla minimal)
    BentoSection.tsx          ← Fase 2 (fusión About + Experience)
    ContactSection.tsx        ✅ (no tocar salvo polish menor)

  styles/
    index.css                 ← añadir tokens Bento + keyframes

public/
  models/
    cybertruck.glb            ← optimizado con gltf-transform

Docs/
  11-04-initial-setup.md     ✅
  11-04-refined-implementation-plan.md  ← este archivo
```

---

## Riesgos y Mitigaciones

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| GLB del Cybertruck demasiado pesado | Alta | Primero implementar con BoxGeometry, sustituir GLB cuando esté optimizado |
| Bento Grid roto en tablet | Media | Usar CSS Grid nativo con `grid-template-areas` named (más robusto que column counts) |
| Canvas causa layout shift | Media | Reservar espacio con `aspect-ratio` o `height` fija antes de montar |
| Dark mode roto en BentoSection | Baja | BentoSection debe usar solo `var(--*)` tokens, cero colores hardcoded |
| Mobile sin WebGL → crash | Baja | `useDetectGPU` de `@react-three/drei` + fallback condicional |

---

## Nota de Diseño — El Momento Inolvidable

Siguiendo `/frontend-design`: cada portfolio necesita **un momento que se recuerda**.

Para este portfolio:
> **La tarjeta Karvia**: el Cybertruck rotando sobre fondo blanco inmaculado con iluminación de estudio.
> Sin texto encima. Solo el modelo. El nombre del proyecto debajo, en mono.

Esto es lo que hace que alguien que visitó el portfolio lo mencione 3 días después.
Todo lo demás debe ser limpio y funcional para que ese momento destaque.
