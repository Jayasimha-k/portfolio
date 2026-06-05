"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const PARTICLE_DATA = (() => {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.4 + Math.random() * 1.6; // Distribute between radius 2.4 and 4.0

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
})();

export default function AICore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer; // Ranges from -1 to 1

    // Rotate and sway the outer core
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.15;
      coreRef.current.rotation.x = time * 0.08;
      
      // Subtle organic heartbeat pulse
      const pulse = 1.0 + Math.sin(time * 1.5) * 0.04;
      coreRef.current.scale.set(pulse, pulse, pulse);
      
      // Move core dynamically following the cursor
      coreRef.current.position.x = THREE.MathUtils.lerp(coreRef.current.position.x, pointer.x * 0.6, 0.05);
      coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, pointer.y * 0.6, 0.05);
    }

    // Spin inner wireframe in opposite direction
    if (innerRef.current) {
      innerRef.current.rotation.y = -time * 0.25;
      innerRef.current.rotation.z = time * 0.15;
      
      // Position tracking same as outer core to keep them aligned
      if (coreRef.current) {
        innerRef.current.position.copy(coreRef.current.position);
      }
    }

    // Spin particle cloud and sway with cursor
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.03;
      particlesRef.current.rotation.x = THREE.MathUtils.lerp(particlesRef.current.rotation.x, pointer.y * 0.15, 0.05);
      particlesRef.current.rotation.z = THREE.MathUtils.lerp(particlesRef.current.rotation.z, pointer.x * 0.15, 0.05);
    }
  });

  return (
    <group>
      {/* Lights tailored to create a dark neon aesthetic */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 3]} intensity={1.5} color="#00e5ff" />
      <pointLight position={[-8, -8, -5]} color="#9d4edd" intensity={2.0} />
      <pointLight position={[6, -6, 5]} color="#00ffa3" intensity={2.5} />

      {/* Floating Particle Network Nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[PARTICLE_DATA, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#00ffa3"
          transparent
          opacity={0.75}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Inner Torus Knot Wireframe */}
      <mesh ref={innerRef}>
        <torusKnotGeometry args={[0.55, 0.18, 120, 16]} />
        <meshBasicMaterial
          color="#9d4edd"
          wireframe
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Glassmorphic Outer Sphere (High IOR and Transmission) */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.15, 64, 64]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#002b3d"
          roughness={0.08}
          metalness={0.1}
          transmission={0.85}
          thickness={1.2}
          ior={1.45}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}
