import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, TorusKnot, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface Props {
  type: string;
}

function BioMesh({ type }: { type: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.x += delta * 0.3;
  });

  if (type === 'dna') {
    return (
      <TorusKnot ref={meshRef} args={[0.8, 0.25, 128, 32]}>
        <meshStandardMaterial color="#39FF88" emissive="#18C875" wireframe roughness={0.1} />
      </TorusKnot>
    );
  }

  return (
    <Icosahedron ref={meshRef} args={[1, 2]}>
      <meshStandardMaterial color="#52FF9A" emissive="#0B3D24" roughness={0.3} wireframe />
    </Icosahedron>
  );
}

export const BiologyModel: React.FC<Props> = ({ type }) => {
  return (
    <div className="w-full h-48 rounded-xl bg-[#E8FFF1]/60 border border-[#39FF88]/40 my-3">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 3]} color="#39FF88" intensity={2} />
        <Float speed={2} rotationIntensity={1}>
          <BioMesh type={type} />
        </Float>
        <OrbitControls enableZoom autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};