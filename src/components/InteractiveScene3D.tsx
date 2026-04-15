import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

// Custom hook to detect mobile viewports
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

interface SceneProps {
  isMobile: boolean;
}

function FloatingGeometry({ isMobile }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const shouldReduceMotion = useReducedMotion();

  useFrame((state) => {
    if (meshRef.current && !shouldReduceMotion) {
      // Reduce rotation speed on mobile to save battery
      const speedMultiplier = isMobile ? 0.05 : 0.1;
      
      meshRef.current.rotation.x = state.clock.elapsedTime * speedMultiplier;
      meshRef.current.rotation.y = state.clock.elapsedTime * (speedMultiplier * 1.5);
      
      // Gentle floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
            
      // Gentle reaction to pointer (disable on mobile where pointer is mostly touch)
      if (!isMobile) {
        meshRef.current.rotation.x += (state.pointer.y * 0.2 - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (state.pointer.x * 0.2 - meshRef.current.rotation.y) * 0.05;
      }
    }
  });

  // Scale down the geometry on mobile screens so it doesn't take up the whole screen
  const radius = isMobile ? 1.4 : 2.0;

  return (
    <Icosahedron ref={meshRef} args={[radius, 1]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#333333" wireframe transparent opacity={0.15} />
    </Icosahedron>
  );
}

function ParticleSystem({ isMobile }: SceneProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Heavily reduce particle count on mobile to maintain 60fps and save battery
  const particleCount = isMobile ? 150 : 500;
  
  // Random particles
  const particles = useMemo(() => {
    const temp = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        temp[i * 3] = (Math.random() - 0.5) * 15;
        temp[i * 3 + 1] = (Math.random() - 0.5) * 15;
        temp[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, [particleCount]);

  useFrame((state) => {
    if (pointsRef.current && !shouldReduceMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#666666" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
}

export default function InteractiveScene3D() {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }} aria-hidden="true">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        // Force DPR to 1 on mobile to save GPU cycles and battery.
        dpr={isMobile ? [1, 1] : [1, 2]} 
        gl={{ alpha: true, antialias: false, powerPreference: "default" }}
      >
        <ambientLight intensity={0.5} />
        {!shouldReduceMotion && <ParticleSystem isMobile={isMobile} />}
        <FloatingGeometry isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
