'use client';

import { useRef, useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface GeometricObjectProps {
  type: 'cube' | 'sphere' | 'cylinder';
  size: number;
  position: { x: string; y: string };
  color: string;
  glowColor: string;
  mousePosition: MousePosition;
}

export function GeometricObject({ type, size, position, color, glowColor, mousePosition }: GeometricObjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, opacity: 1 });
  const basePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const idlePhase = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    basePos.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }, []);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const cx = basePos.current.x;
      const cy = basePos.current.y;
      const dx = mousePosition.x - cx;
      const dy = mousePosition.y - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 350;

      // Subtle idle floating when mouse is far
      idlePhase.current += 0.02;
      const idleX = Math.sin(idlePhase.current * 0.7) * 3;
      const idleY = Math.cos(idlePhase.current * 0.5) * 2;

      if (distance > maxDist) {
        setTransform({
          x: idleX,
          y: idleY,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
        });
        return;
      }

      const normalizedDistance = 1 - distance / maxDist;
      const intensity = normalizedDistance * normalizedDistance;
      const moveX = idleX + (dx / maxDist) * 12 * intensity;
      const moveY = idleY + (dy / maxDist) * 12 * intensity;
      const rotateY = (dx / maxDist) * 6 * intensity;
      const rotateX = -(dy / maxDist) * 6 * intensity;

      setTransform({
        x: moveX,
        y: moveY,
        rotateX,
        rotateY,
        scale: 1 + intensity * 0.04,
        opacity: 0.7 + intensity * 0.3,
      });
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePosition]);

  const style: React.CSSProperties = {
    left: position.x,
    top: position.y,
    transform: `translate(${transform.x}px, ${transform.y}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
    willChange: 'transform',
    width: `${size}px`,
    height: `${size}px`,
  };

  const getShapeStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      boxShadow: `0 0 ${size * 0.4}px ${glowColor}, 0 0 ${size * 0.8}px ${glowColor}30`,
    };

    switch (type) {
      case 'cube':
        return { ...base, background: color, borderRadius: '4px', transformStyle: 'preserve-3d' as const };
      case 'sphere':
        return {
          ...base,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, ${glowColor}, ${color} 60%, ${color})`,
        };
      case 'cylinder':
        return {
          ...base,
          borderRadius: `${size * 0.2}px ${size * 0.2}px ${size * 0.1}px ${size * 0.1}px`,
          background: `linear-gradient(180deg, ${color}, ${color}cc, ${color}99)`,
          height: `${size * 0.7}px`,
        };
      default:
        return base;
    }
  };

  return (
    <div ref={ref} className="absolute" style={style}>
      <div style={getShapeStyle()} />
    </div>
  );
}