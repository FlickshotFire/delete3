import { useCursorPosition } from "@/hooks/use-cursor-position";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FloatingElements() {
  const { x, y } = useCursorPosition();
  const containerRef = useRef<HTMLDivElement>(null);

  const parallaxOffset = {
    x: (x - window.innerWidth / 2) * 0.006,
    y: (y - window.innerHeight / 2) * 0.006,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Create premium floating 3D elements
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Simple geometry for floating elements
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xFFD700, 
      transparent: true, 
      opacity: 0.6 
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };

    // Create luxury floating objects
    const floatingObjects = [];

    // Optimized geometries with reduced complexity
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.3, 8, 16); // Reduced segments
    const luxuryGoldMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      transparent: true,
      opacity: 0.6
    });

    // Reduced number of torus rings
    for (let i = 0; i < 2; i++) {
      const torus = new THREE.Mesh(torusGeometry, luxuryGoldMaterial);
      torus.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30 - 20
      );
      torus.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(torus);
      floatingObjects.push(torus);
    }

    // Simplified icosahedrons
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.8, 0); // Reduced detail
    const platinumMaterial = new THREE.MeshBasicMaterial({
      color: 0xE5E4E2,
      transparent: true,
      opacity: 0.5
    });

    // Reduced number of icosahedrons
    for (let i = 0; i < 3; i++) {
      const icosa = new THREE.Mesh(icosahedronGeometry, platinumMaterial);
      icosa.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 25 - 15
      );
      scene.add(icosa);
      floatingObjects.push(icosa);
    }

    // Simplified spheres instead of dodecahedrons
    const sphereGeometry = new THREE.SphereGeometry(0.6, 8, 6); // Low poly sphere
    const bronzeMaterial = new THREE.MeshBasicMaterial({
      color: 0xCD7F32,
      transparent: true,
      opacity: 0.4
    });

    for (let i = 0; i < 2; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, bronzeMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20 - 10
      );
      scene.add(sphere);
      floatingObjects.push(sphere);
    }

    // Simplified lighting system
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    camera.position.z = 35;

    // Optimized animation with reduced calculations
    let time = 0;
    const animateScene = () => {
      time += 0.008; // Slower animation

      floatingObjects.forEach((obj, index) => {
        // Simplified rotation
        obj.rotation.x += 0.002;
        obj.rotation.y += 0.003;

        // Simplified floating motion
        obj.position.y += Math.sin(time + index) * 0.008;
        obj.position.x += Math.cos(time * 0.5 + index) * 0.006;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animateScene);
    };

    animateScene();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // Create floating code elements with premium styling
  const codeSnippets = [
    { 
      text: "const magic = () => {\n  return 'innovation';\n};",
      x: -400,
      y: -200,
      rotation: -15,
      language: "javascript"
    },
    { 
      text: "function solve(problem) {\n  return creative.solution();\n}",
      x: 400,
      y: -100,
      rotation: 10,
      language: "javascript"
    },
    { 
      text: "const App = () => {\n  return <Dream />;\n};",
      x: -450,
      y: 150,
      rotation: 8,
      language: "react"
    },
    { 
      text: "class Innovation {\n  transform() {\n    return reality;\n  }\n}",
      x: 350,
      y: 200,
      rotation: -12,
      language: "typescript"
    },
    { 
      text: "await fetch('/api/future')\n  .then(transform)\n  .catch(innovate)",
      x: -350,
      y: 350,
      rotation: 15,
      language: "javascript"
    },
    { 
      text: "const result = data\n  .filter(creative)\n  .map(innovate)\n  .reduce(magic)",
      x: 420,
      y: 350,
      rotation: -8,
      language: "javascript"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    codeSnippets.forEach((snippet, index) => {
      const cardElement = document.createElement('div');
      const codeElement = document.createElement('pre');
      const headerElement = document.createElement('div');

      // Language indicator colors
      const languageColors = {
        javascript: '#f7df1e',
        react: '#61dafb',
        typescript: '#3178c6'
      };

      // Header with language indicator
      headerElement.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(255, 215, 0, 0.1);
      `;

      headerElement.innerHTML = `
        <div style="display: flex; gap: 6px;">
          <div style="width: 12px; height: 12px; background: #ff5f57; border-radius: 50%;"></div>
          <div style="width: 12px; height: 12px; background: #ffbd2e; border-radius: 50%;"></div>
          <div style="width: 12px; height: 12px; background: #28ca42; border-radius: 50%;"></div>
        </div>
        <span style="
          font-size: 10px; 
          color: ${languageColors[snippet.language] || '#ffd700'}; 
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        ">${snippet.language}</span>
      `;

      // Code content with syntax highlighting
      codeElement.style.cssText = `
        margin: 0;
        font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
        font-size: 11px;
        line-height: 1.4;
        color: #e5e7eb;
        white-space: pre-wrap;
        overflow: hidden;
      `;

      // Simple syntax highlighting
      let highlightedCode = snippet.text
        .replace(/(const|let|var|function|class|return|await|async)/g, '<span style="color: #c678dd;">$1</span>')
        .replace(/(=\s*>\s*|=>)/g, '<span style="color: #56b6c2;">$1</span>')
        .replace(/('[^']*'|"[^"]*"|`[^`]*`)/g, '<span style="color: #98c379;">$1</span>')
        .replace(/(\{|\}|\(|\)|\[|\])/g, '<span style="color: #ffd700;">$1</span>')
        .replace(/(\/\/.*$)/gm, '<span style="color: #5c6370; font-style: italic;">$1</span>');

      codeElement.innerHTML = highlightedCode;

      // Main card styling
      cardElement.style.cssText = `
        position: absolute;
        background: linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.9) 100%);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 215, 0, 0.15);
        border-radius: 16px;
        padding: 16px;
        transform: translate(${snippet.x}px, ${snippet.y}px) rotate(${snippet.rotation}deg);
        box-shadow: 
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(255, 215, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        z-index: 5;
        max-width: 280px;
        min-width: 220px;
        overflow: hidden;
        position: relative;
      `;

      // Add subtle gradient overlay
      const overlayElement = document.createElement('div');
      overlayElement.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, transparent 50%, rgba(192, 192, 192, 0.03) 100%);
        pointer-events: none;
        border-radius: 16px;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      cardElement.appendChild(overlayElement);
      cardElement.appendChild(headerElement);
      cardElement.appendChild(codeElement);

      // Enhanced hover effects
      cardElement.addEventListener('mouseenter', () => {
        cardElement.style.transform = `translate(${snippet.x}px, ${snippet.y}px) rotate(${snippet.rotation}deg) scale(1.08) translateZ(20px)`;
        cardElement.style.boxShadow = `
          0 20px 60px rgba(0, 0, 0, 0.6),
          0 0 0 1px rgba(255, 215, 0, 0.4),
          0 0 40px rgba(255, 215, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `;
        cardElement.style.borderColor = 'rgba(255, 215, 0, 0.4)';
        overlayElement.style.opacity = '1';
      });

      cardElement.addEventListener('mouseleave', () => {
        cardElement.style.transform = `translate(${snippet.x}px, ${snippet.y}px) rotate(${snippet.rotation}deg) scale(1)`;
        cardElement.style.boxShadow = `
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(255, 215, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        cardElement.style.borderColor = 'rgba(255, 215, 0, 0.15)';
        overlayElement.style.opacity = '0';
      });

      container.appendChild(cardElement);
    });
  }, [codeSnippets, x, y]);

  return (
    <div className="absolute inset-0 parallax-layer pointer-events-none">
      {/* 3D WebGL Container */}
      <div ref={containerRef} className="absolute inset-0" style={{ zIndex: 2 }} />

      {/* Enhanced Motion Elements with better positioning */}
      <motion.div
        className="absolute top-20 left-12 w-20 h-20 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          rotateZ: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFD700 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)',
          boxShadow: '0 0 25px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2)',
          transform: `translate(${parallaxOffset.x * 1.2}px, ${parallaxOffset.y * 1.2}px)`,
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 rounded-lg opacity-50"
        animate={{
          rotateX: [0, 180],
          rotateY: [0, 360],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(135deg, #E5E4E2 0%, rgba(229, 228, 226, 0.4) 70%, transparent 100%)',
          boxShadow: '0 0 20px rgba(229, 228, 226, 0.3), inset 0 0 10px rgba(229, 228, 226, 0.1)',
          transform: `translate(${parallaxOffset.x * -0.6}px, ${parallaxOffset.y * -0.6}px)`,
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 rounded-xl opacity-45"
        animate={{
          y: [0, 10, 0],
          rotateZ: [0, -360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'conic-gradient(from 45deg, #CD7F32, rgba(205, 127, 50, 0.4), #FFD700, rgba(255, 215, 0, 0.3), #CD7F32)',
          boxShadow: '0 0 30px rgba(205, 127, 50, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2)',
          transform: `translate(${parallaxOffset.x * -1}px, ${parallaxOffset.y * -1}px)`,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-14 h-14 opacity-40"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, #FFD700 0%, rgba(229, 228, 226, 0.6) 50%, transparent 100%)',
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
          transform: `translate(${parallaxOffset.x * 0.7}px, ${parallaxOffset.y * 0.7}px)`,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />

      {/* Enhanced floating particles with better distribution */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(i) * 30, 0],
            scale: [0.6, 1.4, 0.6],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 18 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          style={{
            width: i % 3 === 0 ? '6px' : '4px',
            height: i % 3 === 0 ? '6px' : '4px',
            left: `${10 + (i * 5.5)}%`,
            top: `${20 + (i * 4)}%`,
            background: i % 3 === 0 ? '#FFD700' : i % 2 === 0 ? '#E5E4E2' : '#CD7F32',
            boxShadow: `0 0 8px ${i % 3 === 0 ? 'rgba(255, 215, 0, 0.6)' : i % 2 === 0 ? 'rgba(229, 228, 226, 0.4)' : 'rgba(205, 127, 50, 0.5)'}`,
          }}
        />
      ))}

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-3/4 left-1/3 w-12 h-12 opacity-35"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(45deg, #FFD700 25%, transparent 25%, transparent 75%, #FFD700 75%), linear-gradient(45deg, #FFD700 25%, transparent 25%, transparent 75%, #FFD700 75%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px',
          boxShadow: '0 0 12px rgba(255, 215, 0, 0.3)',
          transform: `translate(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px)`,
        }}
      />
    </div>
  );
}