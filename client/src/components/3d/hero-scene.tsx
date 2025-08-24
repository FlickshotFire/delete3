import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    objects: THREE.Mesh[];
    animationId: number | null;
  } | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Optimized Three.js scene with performance-first approach
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 30, 100); // Reduced fog distance

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200); // Reduced far plane

    // High-performance renderer configuration
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, // Disable for performance
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
      logarithmicDepthBuffer: false,
      preserveDrawingBuffer: false
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = false; // Disable shadows for performance
    renderer.toneMapping = THREE.NoToneMapping; // Disable tone mapping
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Enable frustum culling and optimize rendering
    renderer.sortObjects = false;
    renderer.autoClear = true;

    container.appendChild(renderer.domElement);

    const objects: THREE.Mesh[] = [];

    // Optimized geometry creation with reduced complexity
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1, 1, 1, 1), // Reduced segments
      new THREE.SphereGeometry(0.8, 8, 6), // Reduced segments
      new THREE.ConeGeometry(0.6, 1.2, 6), // Reduced segments
    ];

    // High-performance materials
    const materials = [
      new THREE.MeshBasicMaterial({ // Use MeshBasicMaterial instead of MeshStandardMaterial
        color: 0xFFD700,
        transparent: true,
        opacity: 0.8,
        wireframe: false
      }),
      new THREE.MeshBasicMaterial({
        color: 0xE5E4E2,
        transparent: true,
        opacity: 0.7
      }),
      new THREE.MeshBasicMaterial({
        color: 0xCD7F32,
        transparent: true,
        opacity: 0.6
      })
    ];

    // Create fewer objects for better performance
    for (let i = 0; i < 8; i++) { // Reduced from 15 to 8
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 10
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      scene.add(mesh);
      objects.push(mesh);
    }

    // Minimal lighting for performance
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    camera.position.z = 15;

    let time = 0;
    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    // Optimized animation loop with frame limiting
    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        time += 0.005; // Reduced animation speed

        // Simplified object animations
        objects.forEach((obj, index) => {
          obj.rotation.x += 0.002 + index * 0.0002;
          obj.rotation.y += 0.003 + index * 0.0003;
          obj.position.y += Math.sin(time + index) * 0.005;
        });

        // Simplified camera movement
        const mouseInfluence = 0.0001;
        camera.position.x = (mousePosition.x - window.innerWidth / 2) * mouseInfluence;
        camera.position.y = (mousePosition.y - window.innerHeight / 2) * -mouseInfluence;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        lastFrameTime = currentTime;
      }

      sceneRef.current!.animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Store references for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      objects,
      animationId: null
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (sceneRef.current) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }

        // Proper cleanup to prevent context loss
        sceneRef.current.objects.forEach(obj => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach(mat => mat.dispose());
            } else {
              obj.material.dispose();
            }
          }
        });

        geometries.forEach(geo => geo.dispose());
        materials.forEach(mat => mat.dispose());

        sceneRef.current.renderer.dispose();
        sceneRef.current.renderer.forceContextLoss();

        if (container.contains(sceneRef.current.renderer.domElement)) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [mousePosition.x, mousePosition.y, handleMouseMove]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ zIndex: 1 }}
    />
  );
}