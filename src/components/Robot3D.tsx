import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface RobotProps {
  mousePosition: { x: number; y: number };
}

function RobotModel({ mousePosition }: RobotProps) {
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  
  // Smooth mouse tracking
  useFrame(() => {
    if (headRef.current) {
      // Calculate rotation based on mouse position
      const targetRotationY = mousePosition.x * 0.5;
      const targetRotationX = -mousePosition.y * 0.3;
      
      // Smooth interpolation
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotationY,
        0.1
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotationX,
        0.1
      );
    }
    
    // Subtle body movement
    if (bodyRef.current) {
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(
        bodyRef.current.rotation.y,
        mousePosition.x * 0.1,
        0.05
      );
    }
    
    // Arm idle animation
    if (leftArmRef.current && rightArmRef.current) {
      const time = Date.now() * 0.001;
      leftArmRef.current.rotation.z = Math.sin(time) * 0.1 - 0.2;
      rightArmRef.current.rotation.z = Math.sin(time + Math.PI) * 0.1 + 0.2;
    }
  });

  return (
    <group ref={bodyRef} position={[0, -1, 0]}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#00d4ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Chest Light */}
      <mesh position={[0, 1.3, 0.41]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          emissive="#00d4ff"
          emissiveIntensity={2}
        />
        <pointLight color="#00d4ff" intensity={2} distance={3} />
      </mesh>
      
      {/* Head Group */}
      <group ref={headRef} position={[0, 2.2, 0]}>
        {/* Head */}
        <mesh>
          <boxGeometry args={[0.9, 0.9, 0.9]} />
          <meshStandardMaterial 
            color="#0f0f1e" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#00d4ff"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.25, 0.1, 0.46]}>
          <boxGeometry args={[0.15, 0.08, 0.02]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={3}
          />
          <pointLight color="#00ffff" intensity={1} distance={2} />
        </mesh>
        <mesh position={[0.25, 0.1, 0.46]}>
          <boxGeometry args={[0.15, 0.08, 0.02]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff"
            emissiveIntensity={3}
          />
          <pointLight color="#00ffff" intensity={1} distance={2} />
        </mesh>
        
        {/* Antenna */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.4]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff"
            emissiveIntensity={1}
          />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color="#ff00ff" 
            emissive="#ff00ff"
            emissiveIntensity={2}
          />
          <pointLight color="#ff00ff" intensity={2} distance={4} />
        </mesh>
      </group>
      
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.75, 1.2, 0]}>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial 
            color="#1a1a2e" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <boxGeometry args={[0.22, 0.4, 0.22]} />
          <meshStandardMaterial 
            color="#0f0f1e" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.75, 1.2, 0]}>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial 
            color="#1a1a2e" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <boxGeometry args={[0.22, 0.4, 0.22]} />
          <meshStandardMaterial 
            color="#0f0f1e" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.35, 1, 0.35]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.35, 1, 0.35]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function Robot3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
        <RobotModel mousePosition={mousePosition} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
