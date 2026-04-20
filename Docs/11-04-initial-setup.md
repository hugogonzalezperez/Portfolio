# Log de Cambios: 11-04 - Configuración Inicial y Hero

## Hitos Implementados
- **Estilos Base:** Se ha limpiado el archivo `index.css` de variables oscuras y pesadas. Ahora el portfolio sigue una paleta de blancos puros (`#FFFFFF`) y grises sutiles, siguiendo el diseño de Vercel/Linear.
- **Tipografía:** Se han configurado `Inter` y `JetBrains Mono` con espaciados (tracking) ajustados para un look premium.
- **HeroSection:** Se ha refactorizado completamente. Ahora presenta un diseño centrado, tipografía masiva con `font-weight: 600` y un bloque de código minimalista que usa un `BlinkCursor`.
- **Estructura 3D:** Se eliminó `ThreeBackground.tsx` como fondo global. El plan es usar instancias locales de `<Canvas>` en las tarjetas de proyecto para mejorar el rendimiento.
- **Dependencias:** Instalación de R3F, Drei, Three y Lucide-React completada.

## Desafíos Técnicos
- La eliminación del fondo global requirió ajustar los z-index de las secciones para que el blanco puro no oculte futuros elementos 3D.
- Se optó por separar los proyectos en "Destacados" y "Otros" para evitar sobrecarga visual y técnica.

## Próximos Pasos
- Implementación de `ProjectsSection.tsx` con el modelo Cybertruck para Karvia.
- Refactorización de About/Experience a Bento Grid.
