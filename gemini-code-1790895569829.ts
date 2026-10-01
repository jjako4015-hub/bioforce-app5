import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function RotatingStar() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 1.5;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#39FF88"
          emissive="#39FF88"
          emissiveIntensity={1.2}
          wireframe
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export const GreenStar3D: React.FC = () => {
  return (
    <div className="w-10 h-10 inline-block vertical-middle ml-2">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} color="#52FF9A" intensity={2} />
        <RotatingStar />
        <Sparkles count={15} scale={2} size={3} speed={0.4} color="#39FF88" />
      </Canvas>
    </div>
  );
};