import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground
 *
 * Animated scene:
 *  - Primary geometric shape (changes based on active scroll section)
 *  - Floating particle field (220 dots) with slow drift
 *  - Secondary floating torus knot (bottom-left)
 *  - Tertiary small octahedron drifting
 *  - Mouse parallax on all objects
 *  - Reacts to .dark class on <html> to switch color palette
 *  - IntersectionObserver to detect active section and switch primary geometry
 */
export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Scene & Camera ── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000);
    camera.position.z = 46;

    /* ── Geometries Map ── */
    const geometries: Record<string, THREE.BufferGeometry> = {
      hero: new THREE.IcosahedronGeometry(13, 2),
      about: new THREE.TetrahedronGeometry(13, 1),
      projects: new THREE.DodecahedronGeometry(13, 0),
      blog: new THREE.TorusGeometry(10, 3, 16, 100),
      contact: new THREE.OctahedronGeometry(13, 0),
    };

    /* ── Helper: create line material ── */
    const lineMat = (isDark: boolean, opacity: number) =>
      new THREE.LineBasicMaterial({
        color: isDark ? 0x818cf8 : 0x6366f1,
        opacity,
        transparent: true,
      });

    /* ── Primary: Dynamic Geometry ── */
    let currentGeoKey = 'hero';
    let targetGeoKey = 'hero';
    let transitionT = 0;

    const icoWire = new THREE.WireframeGeometry(geometries.hero);
    const icoMat = lineMat(false, 0.10);
    const primaryMesh = new THREE.LineSegments(icoWire, icoMat);
    primaryMesh.position.set(16, 2, 0);
    scene.add(primaryMesh);

    /* ── Secondary: torus knot ── */
    const knotGeo = new THREE.TorusKnotGeometry(4.5, 1.1, 90, 9, 2, 3);
    const knotWire = new THREE.WireframeGeometry(knotGeo);
    const knotMat = lineMat(false, 0.055);
    const knot = new THREE.LineSegments(knotWire, knotMat);
    knot.position.set(-20, -9, -6);
    scene.add(knot);

    /* ── Tertiary: small octahedron drifting ── */
    const octGeo = new THREE.OctahedronGeometry(3.5, 1);
    const octWire = new THREE.WireframeGeometry(octGeo);
    const octMat = lineMat(false, 0.07);
    const oct = new THREE.LineSegments(octWire, octMat);
    oct.position.set(-8, 12, -10);
    scene.add(oct);

    /* ── Particle field ── */
    const PARTICLE_COUNT = 220;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      velocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: 0,
      });
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.18,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Section Detection ── */
    const observerOptions = {
      root: null,
      threshold: 0.5, // 50% of the section must be visible
    };

    const handleSectionChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (geometries[id]) {
            targetGeoKey = id;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleSectionChange, observerOptions);
    ['hero', 'about', 'projects', 'blog', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    /* ── Theme sync ── */
    const syncTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      const c = dark ? 0x818cf8 : 0x6366f1;

      (primaryMesh.material as THREE.LineBasicMaterial).color.setHex(c);
      (primaryMesh.material as THREE.LineBasicMaterial).opacity = dark ? 0.13 : 0.10;

      (knot.material as THREE.LineBasicMaterial).color.setHex(c);
      (knot.material as THREE.LineBasicMaterial).opacity = dark ? 0.08 : 0.055;

      (oct.material as THREE.LineBasicMaterial).color.setHex(c);
      (oct.material as THREE.LineBasicMaterial).opacity = dark ? 0.10 : 0.07;

      (particles.material as THREE.PointsMaterial).color.setHex(c);
      (particles.material as THREE.PointsMaterial).opacity = dark ? 0.5 : 0.35;
    };

    const classObserver = new MutationObserver(syncTheme);
    classObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    /* ── Mouse parallax ── */
    let mx = 0, my = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── Animation loop ── */
    let animId: number;
    const clock = new THREE.Clock();
    let transitionState: 'none' | 'shrinking' | 'growing' = 'none';
    let progress = 1; // 1 = full size, 0 = invisible

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      /* ── Organic Transition Logic ── */
      if (currentGeoKey !== targetGeoKey && transitionState === 'none') {
        transitionState = 'shrinking';
      }

      if (transitionState === 'shrinking') {
        progress -= 0.04; // Shrink speed
        if (progress <= 0) {
          progress = 0;
          // Swap geometry at zero scale
          primaryMesh.geometry.dispose();
          primaryMesh.geometry = new THREE.WireframeGeometry(geometries[targetGeoKey]);
          currentGeoKey = targetGeoKey;
          transitionState = 'growing';
        }
      } else if (transitionState === 'growing') {
        progress += 0.04; // Grow speed
        if (progress >= 1) {
          progress = 1;
          transitionState = 'none';
        }
      }

      // Easing and speed effects
      const easedProgress = Math.pow(progress, 2); // Quadratic ease-in for shrink
      const rotationSpeedBoost = 1 + (1 - progress) * 4; // Spins fast when small

      const s = easedProgress;
      primaryMesh.scale.set(s, s, s);

      /* ── Shapes Animation ── */
      primaryMesh.rotation.x = t * 0.07 * rotationSpeedBoost + my * 0.04;
      primaryMesh.rotation.y = t * 0.11 * rotationSpeedBoost + mx * 0.04;

      knot.rotation.x = t * -0.05;
      knot.rotation.z = t * 0.08;
      knot.position.y = -9 + Math.sin(t * 0.4) * 1.5;

      oct.rotation.x = t * 0.09;
      oct.rotation.y = t * -0.07;
      oct.position.y = 12 + Math.sin(t * 0.3 + 1.2) * 2;
      oct.position.x = -8 + Math.cos(t * 0.25) * 1.5;

      /* Particles drift */
      const pos = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos.array[i * 3] += velocities[i].x;
        pos.array[i * 3 + 1] += velocities[i].y;

        if (Math.abs((pos.array as Float32Array)[i * 3]) > 45) (pos.array as Float32Array)[i * 3] *= -1;
        if (Math.abs((pos.array as Float32Array)[i * 3 + 1]) > 30) (pos.array as Float32Array)[i * 3 + 1] *= -1;
      }
      pos.needsUpdate = true;

      /* Camera parallax */
      camera.position.x += (mx * 1.2 - camera.position.x) * 0.03;
      camera.position.y += (-my * 0.8 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    /* ── Resize ── */
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      classObserver.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);

      Object.values(geometries).forEach(g => g.dispose());
      icoWire.dispose();
      icoMat.dispose();
      knotGeo.dispose();
      knotWire.dispose();
      knotMat.dispose();
      octGeo.dispose();
      octWire.dispose();
      octMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
