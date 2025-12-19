"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense } from "react"

function TeddyBearPlushie() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group>
        {/* Head */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.4, 1.7, 0]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.4, 1.7, 0]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Inner ears */}
        <mesh position={[-0.4, 1.65, 0.15]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.4, 1.65, 0.15]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Snout */}
        <mesh position={[0, 1.05, 0.45]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#F0E4D4" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 1.15, 0.7]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#3D2817" roughness={0.8} metalness={0.0} />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.2, 1.3, 0.5]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="#2C1810" roughness={0.5} metalness={0.0} />
        </mesh>
        <mesh position={[0.2, 1.3, 0.5]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="#2C1810" roughness={0.5} metalness={0.0} />
        </mesh>

        {/* Eye highlights */}
        <mesh position={[-0.18, 1.33, 0.56]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.22, 1.33, 0.56]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Belly patch */}
        <mesh position={[0, 0.1, 0.75]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#F0E4D4" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.7, 0.3, 0.2]} rotation={[0, 0, -0.4]}>
          <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.7, 0.3, 0.2]} rotation={[0, 0, 0.4]}>
          <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Paws on arms */}
        <mesh position={[-0.9, -0.2, 0.3]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.9, -0.2, 0.3]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Legs */}
        <mesh position={[-0.35, -0.85, 0.2]} rotation={[0.2, 0, 0]}>
          <capsuleGeometry args={[0.25, 0.5, 8, 16]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.35, -0.85, 0.2]} rotation={[0.2, 0, 0]}>
          <capsuleGeometry args={[0.25, 0.5, 8, 16]} />
          <meshStandardMaterial color="#E8D4C0" roughness={0.95} metalness={0.0} />
        </mesh>

        {/* Feet */}
        <mesh position={[-0.35, -1.2, 0.5]} rotation={[-0.3, 0, 0]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>
        <mesh position={[0.35, -1.2, 0.5]} rotation={[-0.3, 0, 0]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#D4B5A0" roughness={0.95} metalness={0.0} />
        </mesh>
      </group>
    </Float>
  )
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-pulse text-primary text-xl font-medium">Loading...</div>
    </div>
  )
}

export function Hero3DPlushie() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="touch-none">
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <TeddyBearPlushie />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
          <Environment preset="studio" />
        </Canvas>
      </Suspense>
    </div>
  )
}
