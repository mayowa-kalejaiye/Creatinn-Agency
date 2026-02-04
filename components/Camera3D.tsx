"use client"
import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { useGLTF, ContactShadows } from '@react-three/drei'

function CameraModel() {
  const group = useRef<Group | null>(null)
  const body = useRef<Mesh | null>(null)
  const dragging = useRef(false)
  const lastX = useRef(0)

  useFrame((state, delta) => {
    if (group.current) {
      // apply a subtle idle rotation when not interacting
      if (!dragging.current) {
        group.current.rotation.y += delta * 0.35
        group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.06
      }
    }
  })

  // pointer handlers for drag-to-rotate
  const onPointerDown = (e: any) => {
    dragging.current = true
    lastX.current = e.clientX
    try { e.target.setPointerCapture(e.pointerId) } catch (err) {}
  }
  const onPointerMove = (e: any) => {
    if (!dragging.current || !group.current) return
    const dx = e.clientX - lastX.current
    lastX.current = e.clientX
    group.current.rotation.y += dx * 0.01
  }
  const onPointerUp = (e: any) => {
    dragging.current = false
    try { e.target.releasePointerCapture(e.pointerId) } catch (err) {}
  }

  return (
    // @ts-expect-error - React Three Fiber JSX elements
    <group ref={group} rotation={[0, 0, 0]} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}>
      {/* Body */}
      {/* @ts-expect-error - React Three Fiber JSX elements */}
      <mesh ref={body} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.6, 1.0, 0.6]} />
        <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.35} />
      </mesh>

      {/* Lens */}
      <mesh position={[0.9, 0, 0.15]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.25, 32]} />
        <meshStandardMaterial color="#93c5fd" metalness={0.6} roughness={0.2} emissive="#0ea5e9" emissiveIntensity={0.02} />
      </mesh>

      {/* Top viewfinder bump */}
      <mesh position={[-0.5, 0.35, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.45]} />
        <meshStandardMaterial color="#111827" metalness={0.2} roughness={0.4} />
      </mesh>

      {/* small red record button */}
      <mesh position={[0.7, -0.28, 0.28]}>
        <sphereGeometry args={[0.06, 16, 12]} />
        <meshStandardMaterial color="#fb7185" metalness={0.1} roughness={0.5} />
      </mesh>
    </group>
  )
}

export default function Camera3D({ className = '' }: { className?: string }) {
  const [modelAvailable, setModelAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    // check if a glTF model exists at the expected path; if present we'll load it
    fetch('/models/sony_a7iii/scene.gltf', { method: 'HEAD' }).then(res => {
      setModelAvailable(res.ok)
    }).catch(() => setModelAvailable(false))
  }, [])

  function ModelWrapper() {
    // load model via useGLTF (drei)
    try {
      const gltf = useGLTF('/models/sony_a7iii/scene.gltf') as any
      return <primitive object={gltf.scene} scale={[1.4, 1.4, 1.4]} position={[0, -0.15, 0]} />
    } catch (err) {
      return null
    }
  }

  return (
    <div className={`camera-3d ${className}`} style={{ width: '260px', height: '260px' }}>
      <Canvas camera={{ position: [2.8, 0.9, 2.4], fov: 45 }} style={{ width: '100%', height: '100%' }} shadows>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} />
        <directionalLight position={[-5, -2, -5]} intensity={0.25} />
        <Suspense fallback={<CameraModel />}>
          {modelAvailable ? <ModelWrapper /> : <CameraModel />}
          <ContactShadows position={[0, -0.9, 0]} opacity={0.6} scale={2} blur={1} />
        </Suspense>
      </Canvas>
    </div>
  )
}
