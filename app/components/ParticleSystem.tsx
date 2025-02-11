"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface ParticleProps {
  count?: number
  shape?: "envelope" | "code" | "rocket" | "brain"
  mouseFollow?: boolean
  scrollDisperse?: boolean
  theme?: "light" | "dark"
}

const shapes = {
  envelope: [
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [-0.5, 0.5],
    [0.5, 0.5],
    [-0.75, 0.25],
    [-0.25, 0.25],
    [0.25, 0.25],
    [0.75, 0.25],
    [-0.75, -0.25],
    [-0.25, -0.25],
    [0.25, -0.25],
    [0.75, -0.25],
  ],
  code: [
    [-1, 0],
    [-0.5, 1],
    [-0.5, -1],
    [1, 0],
    [0.5, 1],
    [0.5, -1],
  ],
  rocket: [
    [0, 1],
    [-0.5, 0],
    [0.5, 0],
    [0, -1],
    [-0.25, -0.5],
    [0.25, -0.5],
  ],
  brain: [
    [0, 0.8],
    [-0.4, 0.6],
    [0.4, 0.6],
    [-0.6, 0],
    [0.6, 0],
    [-0.4, -0.6],
    [0.4, -0.6],
    [0, -0.8],
  ],
}

function ParticleCloud({
  count = 5000,
  shape = "envelope",
  mouseFollow = true,
  scrollDisperse = true,
  theme = "light",
}: ParticleProps) {
  const points = useRef<THREE.Points>(null)
  const { size, viewport } = useThree()
  const mouse = useRef([0, 0])
  const scroll = useRef(0)
  const targetPositions = useRef<Float32Array>()
  const originalPositions = useRef<Float32Array>()

  const [positions, setPositions] = useState<Float32Array | null>(null)

  useEffect(() => {
    const pos = new Float32Array(count * 3)
    const shapePoints = shapes[shape]
    const shapePointCount = shapePoints.length

    for (let i = 0; i < count; i++) {
      if (i < shapePointCount) {
        pos[i * 3] = shapePoints[i][0] + (Math.random() - 0.5) * 0.05
        pos[i * 3 + 1] = shapePoints[i][1] + (Math.random() - 0.5) * 0.05
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.05
      } else {
        const theta = Math.random() * Math.PI * 2
        const r = 1 + Math.random() * 0.5
        pos[i * 3] = r * Math.cos(theta)
        pos[i * 3 + 1] = r * Math.sin(theta)
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.05
      }
    }

    originalPositions.current = pos.slice()
    targetPositions.current = pos.slice()
    setPositions(pos)
  }, [count, shape])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (mouseFollow) {
        mouse.current = [(event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1]
      }
    }

    const handleScroll = () => {
      if (scrollDisperse) {
        scroll.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mouseFollow, scrollDisperse])

  useFrame((state, delta) => {
    if (!points.current || !positions || !targetPositions.current || !originalPositions.current) return

    const currentPositions = points.current.geometry.attributes.position.array as Float32Array
    const original = originalPositions.current
    const target = targetPositions.current

    for (let i = 0; i < currentPositions.length; i += 3) {
      if (mouseFollow) {
        const dx = (mouse.current[0] * viewport.width) / 2
        const dy = (mouse.current[1] * viewport.height) / 2
        target[i] = original[i] + dx * 0.05
        target[i + 1] = original[i + 1] + dy * 0.05
      }

      if (scrollDisperse) {
        const dispersionFactor = scroll.current * 0.1
        target[i] += (Math.random() - 0.5) * dispersionFactor * delta * 10
        target[i + 1] += (Math.random() - 0.5) * dispersionFactor * delta * 10
      }

      currentPositions[i] += (target[i] - currentPositions[i]) * 0.1
      currentPositions[i + 1] += (target[i + 1] - currentPositions[i + 1]) * 0.1
      currentPositions[i + 2] += (target[i + 2] - currentPositions[i + 2]) * 0.1
    }

    points.current.geometry.attributes.position.needsUpdate = true
    points.current.rotation.z += delta * 0.05
  })

  if (!positions) return null

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={theme === "dark" ? "#ffffff" : "#000000"}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export default function ParticleSystem({ shape, mouseFollow, scrollDisperse, theme = "light" }: ParticleProps) {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
      <ParticleCloud shape={shape} mouseFollow={mouseFollow} scrollDisperse={scrollDisperse} theme={theme} />
    </Canvas>
  )
}

