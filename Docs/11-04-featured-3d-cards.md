# Log: 11-04 — Featured 3D Project Cards

## Hitos Implementados

### 3 Featured Project Cards con Canvas R3F local
Cada card monta su `<Canvas>` solo cuando entra en el viewport (IntersectionObserver).
Cero WebGL en background. Suspense + shimmer skeleton de carga.

**KarviaCard** (`src/components/project-cards/KarviaCard.tsx`)
- Modelo principal: `tesla_cybertruck_2.glb` (1.9MB, ganador del test visual)
- Acento secundario: `sport_wheel.glb` (207KB) rotando en esquina inferior derecha
- Normalización automática por BoundingBox (escala y centrado agnósticos al modelo)
- Iluminación studio 4-point (key, fill, rim, ground bounce)
- Auto-rotate lento (0.55 rad/s) + pausa en hover + mouse parallax (3D look)
- `prefers-reduced-motion` → sin rotación automática
- Mobile (<768px) → CSS wireframe wheel, cero WebGL

**ParkyCard** (`src/components/project-cards/ParkyCard.tsx`)
- Escena isométrica con `BoxGeometry` puro (carga instantánea, cero GLB)
- OrthographicCamera con zoom 42 y posición [10,10,10]
- Grid de 6 plazas de parking: 3 ocupadas (dark/teal cars) + 2 libres (teal glow)
- `Float` de drei (speed=1.4, rotationIntensity=0.08)
- Indicador de disponibilidad: círculo emissive teal con emissiveIntensity

**AlgoraCard** (`src/components/project-cards/AlgoraCard.tsx`)
- Network graph: 8 nodos `IcosahedronGeometry` + 12 aristas con `Line` de drei
- Nodo hub central sólido (negro) + 7 nodos satélite en wireframe
- Pulsado individual por nodo (scale breathing en useFrame con phase offset)
- Rotación lenta del grupo completo (y * 0.18 rad/s, x sin wave sutil)
- `Float` de drei (speed=1.2, rotationIntensity=0.06)

### Cybertruck Model Comparison Test
- Se compararon `tesla_cybertruck.glb` (398KB) vs `tesla_cybertruck_2.glb` (1.9MB) con Playwright
- **Ganador: cybertruck_2** — el 1 renderiza como silueta negra sin materiales definidos
- El 2 muestra el acabado metálico angular icónico del Cybertruck

### Estructura de Archivos Nuevos
```
src/components/project-cards/
  KarviaCard.tsx
  ParkyCard.tsx
  AlgoraCard.tsx
  ProjectMiniTable.tsx
public/models/
  sport_wheel.glb      (207KB)
  tesla_cybertruck.glb (398KB)
  tesla_cybertruck_2.glb (1.9MB)
```

### Cambios en existentes
- `ProjectsSection.tsx` — refactorizado completamente con nueva grid
- `App.tsx` — ProjectsSection subida (antes de About/Experience)
- `AboutSection.tsx` — numeración 03
- `index.css` — @keyframes shimmer, statusPulse, tokens --bento-*
- `package.json` — React 18.3.1 → 19.2.5 (requerido por R3F v9)

## Desafíos Técnicos

### R3F v9 requiere React 19
`@react-three/fiber v9` accede a internals de React 19 (`ReactCurrentBatchConfig.S`).
Con React 18.3.1 arrojaba `Cannot read properties of undefined (reading 'S')`.
Fix: `npm install react@19 react-dom@19`.

### Normalización de modelos GLB
Los modelos GLB tienen escalas y orígenes arbitrarios.
Se usa `Three.Box3.setFromObject()` para calcular tamaño real y centrar automáticamente,
evitando hardcodear `scale` o `position` dependientes del modelo.

### IntersectionObserver en headless browser
En tests con Playwright, `scrollIntoView` en el section header no triggerea el observer
de las cards inferiores (Parky/Algora). Se resolvió con scrolls adicionales y delays.

## Próximos Pasos
- BentoSection (fusión About + Experience) — ver Fase 2 del plan refinado
- Navbar: `rgba(255,255,255,0.72)` en lugar de `var(--bg)` sólido
- Footer: reescribir minimalista con iconos Lucide
