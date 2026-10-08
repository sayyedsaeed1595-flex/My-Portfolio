'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingObject {
  id: string;
  type: 'cube' | 'cylinder' | 'sphere';
  position: { x: number; y: number; z: number };
  size: number;
  color: string;
  glowColor: string;
  rotation: { x: number; y: number; z: number };
  baseRotation: { x: number; y: number; z: number };
}

const objectsConfig: Omit<FloatingObject, 'rotation' | 'baseRotation'>[] = [
  { id: 'cube-1', type: 'cube', position: { x: -35, y: -15, z: -20 }, size: 28, color: '#0f0f12', glowColor: 'rgba(245,158,11,0.15)' },
  { id: 'cube-2', type: 'cube', position: { x: 25, y: -25, z: 10 }, size: 20, color: '#121215', glowColor: 'rgba(245,158,11,0.12)' },
  { id: 'cube-3', type: 'cube', position: { x: -20, y: 5, z: -30 }, size: 24, color: '#0d0d0f', glowColor: 'rgba(245,158,11,0.1)' },
  { id: 'cube-4', type: 'cube', position: { x: 40, y: 10, z: -15 }, size: 16, color: '#151518', glowColor: 'rgba(245,158,11,0.1)' },
  { id: 'cube-5', type: 'cube', position: { x: -45, y: 20, z: 5 }, size: 18, color: '#0f0f12', glowColor: 'rgba(245,158,11,0.08)' },
  { id: 'cylinder-1', type: 'cylinder', position: { x: 15, y: -30, z: -25 }, size: 14, color: '#121215', glowColor: 'rgba(56,189,248,0.1)' },
  { id: 'cylinder-2', type: 'cylinder', position: { x: -30, y: -5, z: 20 }, size: 12, color: '#0d0d0f', glowColor: 'rgba(56,189,248,0.08)' },
  { id: 'cylinder-3', type: 'cylinder', position: { x: 35, y: 15, z: 25 }, size: 16, color: '#151518', glowColor: 'rgba(56,189,248,0.1)' },
  { id: 'sphere-1', type: 'sphere', position: { x: -10, y: -35, z: 0 }, size: 10, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.6)' },
  { id: 'sphere-2', type: 'sphere', position: { x: 30, y: -10, z: -35 }, size: 8, color: '#fbbf24', glowColor: 'rgba(251,191,36,0.5)' },
  { id: 'sphere-3', type: 'sphere', position: { x: -25, y: 15, z: 30 }, size: 12, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.5)' },
  { id: 'sphere-4', type: 'sphere', position: { x: 20, y: 25, z: -10 }, size: 7, color: '#fcd34d', glowColor: 'rgba(252,211,77,0.4)' },
  { id: 'sphere-5', type: 'sphere', position: { x: -40, y: 0, z: -5 }, size: 9, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.45)' },
];

export function Floating3DScene() {
  const [objects, setObjects] = useState<FloatingObject[]>(() =>
    objectsConfig.map(obj => ({
      ...obj,
      rotation: { x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360 },
      baseRotation: { x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360 },
    }))
  );
  
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const animate = () => {
      setObjects(prev => prev.map(obj => {
        const dx = mousePos.current.x;
        const dy = mousePos.current.y;
        
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxInfluence = 0.8;
        const influence = Math.max(0, 1 - distance / maxInfluence) * 0.15;
        
        const targetX = obj.baseRotation.x + dy * 15 * influence;
        const targetY = obj.baseRotation.y + dx * 15 * influence;
        const targetZ = obj.baseRotation.z + dx * 5 * influence;
        
        const currentX = obj.rotation.x;
        const currentY = obj.rotation.y;
        const currentZ = obj.rotation.z;
        
        const spring = 0.02;
        
        return {
          ...obj,
          rotation: {
            x: currentX + (targetX - currentX) * spring,
            y: currentY + (targetY - currentY) * spring,
            z: currentZ + (targetZ - currentZ) * spring,
          },
          baseRotation: {
            x: obj.baseRotation.x + (obj.type === 'sphere' ? 0.05 : 0.02),
            y: obj.baseRotation.y + (obj.type === 'cylinder' ? 0.03 : 0.015),
            z: obj.baseRotation.z + 0.01,
          },
        };
      }));
      
      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="scene-3d absolute inset-0 pointer-events-none" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {objects.map(obj => (
          <motion.div
            key={obj.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `
                translate(-50%, -50%)
                translate3d(${obj.position.x}px, ${obj.position.y}px, ${obj.position.z}px)
                rotateX(${obj.rotation.x}deg)
                rotateY(${obj.rotation.y}deg)
                rotateZ(${obj.rotation.z}deg)
              `,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {obj.type === 'cube' && (
              <Cube size={obj.size} color={obj.color} glowColor={obj.glowColor} />
            )}
            {obj.type === 'cylinder' && (
              <Cylinder size={obj.size} color={obj.color} glowColor={obj.glowColor} />
            )}
            {obj.type === 'sphere' && (
              <Sphere size={obj.size} color={obj.color} glowColor={obj.glowColor} />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-black/30 blur-[80px] rounded-full" />
      </div>
    </div>
  );
}

function Cube({ size, color, glowColor }: { size: number; color: string; glowColor: string }) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)`, bg: color },
    { transform: `translateZ(-${half}px) rotateY(180deg)`, bg: color },
    { transform: `translateX(${half}px) rotateY(90deg)`, bg: adjustBrightness(color, 0.85) },
    { transform: `translateX(-${half}px) rotateY(-90deg)`, bg: adjustBrightness(color, 0.75) },
    { transform: `translateY(-${half}px) rotateX(90deg)`, bg: adjustBrightness(color, 1.15) },
    { transform: `translateY(${half}px) rotateX(-90deg)`, bg: adjustBrightness(color, 0.65) },
  ];

  return (
    <div className="absolute" style={{ width: size, height: size, transformStyle: 'preserve-3d' }}>
      {faces.map((face, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: size,
            height: size,
            background: face.bg,
            border: '1px solid rgba(255,255,255,0.04)',
            transform: face.transform,
            transformOrigin: 'center center',
            boxShadow: `inset 0 0 ${size * 0.3}px ${glowColor}, 0 0 ${size * 0.5}px ${glowColor}`,
          }}
        />
      ))}
    </div>
  );
}

function Cylinder({ size, color, glowColor }: { size: number; color: string; glowColor: string }) {
  const height = size * 1.8;
  const radius = size / 2;
  const segments = 12;
  const segmentAngle = (2 * Math.PI) / segments;

  const sides = Array.from({ length: segments }, (_, i) => {
    const angle = i * segmentAngle;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const brightness = 0.7 + (Math.cos(angle) + 1) * 0.2;
    
    return (
      <div
        key={i}
        className="absolute"
        style={{
          width: (2 * Math.PI * radius) / segments + 1,
          height: height,
          background: adjustBrightness(color, brightness),
          border: '1px solid rgba(255,255,255,0.03)',
          transform: `translate3d(${x}px, 0, ${z}px) rotateY(${i * (360 / segments)}deg) translateZ(${radius}px)`,
          transformOrigin: 'center center',
          boxShadow: `inset 0 0 ${size * 0.2}px ${glowColor}`,
        }}
      />
    );
  });

  const topColor = adjustBrightness(color, 1.2);
  const bottomColor = adjustBrightness(color, 0.5);

  return (
    <div className="absolute" style={{ width: size, height: height, transformStyle: 'preserve-3d', top: -height / 2 }}>
      {sides}
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: topColor,
          border: '1px solid rgba(255,255,255,0.05)',
          transform: `translateY(-${height / 2}px) rotateX(90deg)`,
          transformOrigin: 'center center',
          borderRadius: '50%',
          boxShadow: `inset 0 0 ${size * 0.3}px ${glowColor}, 0 0 ${size * 0.4}px ${glowColor}`,
        }}
      />
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: bottomColor,
          border: '1px solid rgba(255,255,255,0.03)',
          transform: `translateY(${height / 2}px) rotateX(-90deg)`,
          transformOrigin: 'center center',
          borderRadius: '50%',
          boxShadow: `inset 0 0 ${size * 0.2}px ${glowColor}`,
        }}
      />
    </div>
  );
}

function Sphere({ size, color, glowColor }: { size: number; color: string; glowColor: string }) {
  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${adjustBrightness(color, 1.4)} 0%, ${color} 50%, ${adjustBrightness(color, 0.6)} 100%)`,
        boxShadow: `
          0 0 ${size * 0.8}px ${glowColor},
          0 0 ${size * 1.5}px ${glowColor.replace('0.6', '0.3').replace('0.5', '0.25').replace('0.45', '0.2').replace('0.4', '0.15')},
          inset 0 0 ${size * 0.5}px ${adjustBrightness(color, 0.4)}
        `,
        transform: 'translateZ(0)',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}

function adjustBrightness(hex: string, factor: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, Math.round(((num >> 16) & 255) * factor)));
  const g = Math.min(255, Math.max(0, Math.round(((num >> 8) & 255) * factor)));
  const b = Math.min(255, Math.max(0, Math.round((num & 255) * factor)));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}