import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

/**
 * The signature 3D moment: a low-poly glowing "data node" octahedron with a
 * wireframe shell and rotating rings. Soft key + rim light, fog, shallow DoF,
 * LOW bloom so only the bright core glows. One heavy moment — lean everywhere else.
 *
 * `active` drives the frameloop so it stops rendering when scrolled off-screen.
 */
export function DataCore3D({ active }: { active: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={["#050510", 6, 14]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, -3, -4]} intensity={6} color="#38BDF8" />

      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.6}>
        <Core />
      </Float>
      <Rings />

      <Sparkles count={14} scale={7} size={6} speed={0.25} opacity={0.4} color="#8B5CF6" />

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.55} luminanceSmoothing={0.3} mipmapBlur />
        <DepthOfField focusDistance={0.02} focalLength={0.08} bokehScale={1.5} />
      </EffectComposer>
    </Canvas>
  );
}

function Core() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.3;
  });
  return (
    <group ref={ref}>
      {/* solid glowing crystal */}
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={1.4}
          flatShading
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      {/* energy wireframe shell */}
      <mesh scale={1.7}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function Rings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (a.current) a.current.rotation.z += dt * 0.18;
    if (b.current) b.current.rotation.x += dt * 0.12;
  });
  return (
    <group>
      <mesh ref={a} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.3, 0.015, 12, 120]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.6} />
      </mesh>
      <mesh ref={b} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[2.8, 0.01, 12, 120]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.4} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}
