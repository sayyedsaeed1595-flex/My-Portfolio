'use client';

import { useRef, useEffect, useState } from 'react';

interface FloatingObject {
  id: string;
  type: 'cube' | 'cylinder' | 'sphere';
  position: { x: number; y: number; z: number };
  size: number;
  color: string;
  glowColor: string;
  rotation: { x: number; y: number; z: number };
  baseRotation: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
}

const objectsConfig: Omit<FloatingObject, 'rotation' | 'baseRotation' | 'velocity'>[] = [
  { id: 'cube-1', type: 'cube', position: { x: -320, y: 80, z: -120 }, size: 140, color: '#0a0a0c', glowColor: 'rgba(245,158,11,0.12)' },
  { id: 'cube-2', type: 'cube', position: { x: 200, y: -40, z: 60 }, size: 100, color: '#0d0d10', glowColor: 'rgba(245,158,11,0.1)' },
  { id: 'cube-3', type: 'cube', position: { x: -180, y: 160, z: -200 }, size: 120, color: '#09090b', glowColor: 'rgba(245,158,11,0.08)' },
  { id: 'cube-4', type: 'cube', position: { x: 360, y: 60, z: -100 }, size: 80, color: '#0c0c0e', glowColor: 'rgba(245,158,11,0.08)' },
  { id: 'cube-5', type: 'cube', position: { x: -400, y: 220, z: 40 }, size: 90, color: '#0a0a0c', glowColor: 'rgba(245,158,11,0.06)' },
  { id: 'cylinder-1', type: 'cylinder', position: { x: 120, y: -100, z: -140 }, size: 70, color: '#0d0d10', glowColor: 'rgba(56,189,248,0.08)' },
  { id: 'cylinder-2', type: 'cylinder', position: { x: -260, y: 40, z: 120 }, size: 60, color: '#09090b', glowColor: 'rgba(56,189,248,0.06)' },
  { id: 'cylinder-3', type: 'cylinder', position: { x: 300, y: 140, z: 140 }, size: 80, color: '#0c0c0e', glowColor: 'rgba(56,189,248,0.08)' },
  { id: 'sphere-1', type: 'sphere', position: { x: -80, y: -160, z: 20 }, size: 50, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.7)' },
  { id: 'sphere-2', type: 'sphere', position: { x: 260, y: -60, z: -180 }, size: 40, color: '#fbbf24', glowColor: 'rgba(251,191,36,0.55)' },
  { id: 'sphere-3', type: 'sphere', position: { x: -220, y: 100, z: 160 }, size: 60, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.6)' },
  { id: 'sphere-4', type: 'sphere', position: { x: 180, y: 180, z: -60 }, size: 35, color: '#fcd34d', glowColor: 'rgba(252,211,77,0.45)' },
  { id: 'sphere-5', type: 'sphere', position: { x: -360, y: 20, z: -30 }, size: 45, color: '#f59e0b', glowColor: 'rgba(245,158,11,0.5)' },
];

export function Floating3DScene() {
  const [objects, setObjects] = useState<FloatingObject[]>(() =>
    objectsConfig.map(obj => ({
      ...obj,
      rotation: { x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360 },
      baseRotation: { x: Math.random() * 360, y: Math.random() * 360, z: Math.random() * 360 },
      velocity: { x: 0, y: 0, z: 0 },
    }))
  );
  
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
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
        const maxInfluence = 1.2;
        const influence = Math.max(0, 1 - distance / maxInfluence) * 0.08;
        
        const targetX = obj.baseRotation.x + dy * 12 * influence;
        const targetY = obj.baseRotation.y + dx * 12 * influence;
        const targetZ = obj.baseRotation.z + dx * 4 * influence;
        
        const spring = 0.015;
        const damping = 0.92;
        
        const newVelX = (obj.velocity.x + (targetX - obj.rotation.x) * spring) * damping;
        const newVelY = (obj.velocity.y + (targetY - obj.rotation.y) * spring) * damping;
        const newVelZ = (obj.velocity.z + (targetZ - obj.rotation.z) * spring) * damping;
        
        return {
          ...obj,
          rotation: {
            x: obj.rotation.x + newVelX,
            y: obj.rotation.y + newVelY,
            z: obj.rotation.z + newVelZ,
          },
          velocity: { x: newVelX, y: newVelY, z: newVelZ },
          baseRotation: {
            x: obj.baseRotation.x + (obj.type === 'sphere' ? 0.025 : 0.015),
            y: obj.baseRotation.y + (obj.type === 'cylinder' ? 0.02 : 0.01),
            z: obj.baseRotation.z + 0.005,
          },
        };
      }));
      
      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="scene-3d absolute inset-0 pointer-events-none" 
      style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {objects.map(obj => (
          <div
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
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[140px] bg-black/40 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

function Cube({ size, color, glowColor }: { size: number; color: string; glowColor: string }) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)`, bg: color, brightness: 1.0 },
    { transform: `translateZ(-${half}px) rotateY(180deg)`, bg: color, brightness: 0.9 },
    { transform: `translateX(${half}px) rotateY(90deg)`, bg: adjustBrightness(color, 0.85), brightness: 0.85 },
    { transform: `translateX(-${half}px) rotateY(-90deg)`, bg: adjustBrightness(color, 0.75), brightness: 0.75 },
    { transform: `translateY(-${half}px) rotateX(90deg)`, bg: adjustBrightness(color, 1.2), brightness: 1.2 },
    { transform: `translateY(${half}px) rotateX(-90deg)`, bg: adjustBrightness(color, 0.6), brightness: 0.6 },
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
            border: '1px solid rgba(255,255,255,0.03)',
            transform: face.transform,
            transformOrigin: 'center center',
            boxShadow: `inset 0 0 ${size * 0.4}px ${glowColor}, 0 0 ${size * 0.6}px ${glowColor}`,
          }}
        />
      ))}
    </div>
  );
}

function Cylinder({ size, color, glowColor }: { size: number; color: string; glowColor: string }) {
  const height = size * 2.2;
  const radius = size / 2;
  const segments = 16;
  const segmentAngle = (2 * Math.PI) / segments;

  const sides = Array.from({ length: segments }, (_, i) => {
    const angle = i * segmentAngle;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const brightness = 0.65 + (Math.cos(angle) + 1) * 0.25;
    
    return (
      <div
        key={i}
        className="absolute"
        style={{
          width: (2 * Math.PI * radius) / segments + 2,
          height: height,
          background: adjustBrightness(color, brightness),
          border: '1px solid rgba(255,255,255,0.02)',
          transform: `translate3d(${x}px, 0, ${z}px) rotateY(${i * (360 / segments)}deg) translateZ(${radius}px)`,
          transformOrigin: 'center center',
          boxShadow: `inset 0 0 ${size * 0.25}px ${glowColor}`,
        }}
      />
    );
  });

  const topColor = adjustBrightness(color, 1.3);
  const bottomColor = adjustBrightness(color, 0.45);

  return (
    <div className="absolute" style={{ width: size, height: height, transformStyle: 'preserve-3d', top: -height / 2 }}>
      {sides}
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: topColor,
          border: '1px solid rgba(255,255,255,0.04)',
          transform: `translateY(-${height / 2}px) rotateX(90deg)`,
          transformOrigin: 'center center',
          borderRadius: '50%',
          boxShadow: `inset 0 0 ${size * 0.4}px ${glowColor}, 0 0 ${size * 0.5}px ${glowColor}`,
        }}
      />
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: bottomColor,
          border: '1px solid rgba(255,255,255,0.02)',
          transform: `translateY(${height / 2}px) rotateX(-90deg)`,
          transformOrigin: 'center center',
          borderRadius: '50%',
          boxShadow: `inset 0 0 ${size * 0.25}px ${glowColor}`,
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
        background: `radial-gradient(circle at 30% 30%, ${adjustBrightness(color, 1.5)} 0%, ${color} 45%, ${adjustBrightness(color, 0.55)} 100%)`,
        boxShadow: `
          0 0 ${size * 1.0}px ${glowColor},
          0 0 ${size * 2.0}px ${glowColor.replace('0.7', '0.35').replace('0.55', '0.25').replace('0.6', '0.3').replace('0.45', '0.2').replace('0.5', '0.22')},
          inset 0 0 ${size * 0.6}px ${adjustBrightness(color, 0.35)}
        `,
        transform: 'translateZ(0)',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18) 0%, transparent 55%)',
          filter: 'blur(3px)',
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 70% 70%, transparent 0%, rgba(0,0,0,0.4) 100%)',
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