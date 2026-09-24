'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseProximity() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      rafRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return { mousePosition, isClient: true };
}

export function getProximityTransform(
  elementRect: DOMRect | null,
  mousePosition: MousePosition,
  maxDistance: number,
  maxMovement: number,
  rotationMax: number
) {
  if (!elementRect) return { x: 0, y: 0, rotation: 0, scale: 1 };

  const centerX = elementRect.left + elementRect.width / 2;
  const centerY = elementRect.top + elementRect.height / 2;

  const dx = mousePosition.x - centerX;
  const dy = mousePosition.y - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > maxDistance) return { x: 0, y: 0, rotation: 0, scale: 1 };

  const normalizedDistance = 1 - distance / maxDistance;
  const intensity = normalizedDistance * normalizedDistance;

  const moveX = (dx / maxDistance) * maxMovement * intensity;
  const moveY = (dy / maxDistance) * maxMovement * intensity;
  const rotation = (dx / maxDistance) * rotationMax * intensity;

  return {
    x: moveX,
    y: moveY,
    rotation,
    scale: 1 + normalizedDistance * 0.02,
  };
}