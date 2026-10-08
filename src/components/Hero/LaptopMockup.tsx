'use client';

import { motion } from 'framer-motion';

export function LaptopMockup() {
  return (
    <div className="scene-3d relative w-full aspect-[4/3]">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 15, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1200px',
          transform: 'rotateX(-3deg) rotateY(5deg)',
        }}
      >
        <div className="laptop-shadow absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[85%] h-20 pointer-events-none">
          <div className="absolute inset-0 bg-black/40 blur-[60px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent blur-[40px] rounded-full" />
        </div>

        <div className="laptop-body relative w-full h-full" style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}>
          <div className="laptop-base absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-b-2xl border border-zinc-700/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]" style={{ transform: 'translateZ(-14px) rotateX(90deg)', transformOrigin: 'bottom center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-700/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-600/50 rounded-full" />
          </div>

          <div className="laptop-screen relative w-full h-[92%] bg-zinc-950 rounded-t-2xl border border-zinc-800 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.05)]" style={{ transform: 'translateZ(0)', transformStyle: 'preserve-3d' }}>
            <div className="screen-bezel absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-zinc-800 rounded-b-full" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-700/50" />
            </div>

            <div className="absolute inset-4 bg-[url('/images/projects/1789492968636.png')] bg-cover bg-center bg-no-repeat" style={{ filter: 'contrast(1.05) saturate(1.1)' }} />
            
            <div className="absolute inset-4 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-4 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="absolute inset-4 pointer-events-none">
              <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10" />
              <div className="absolute top-4 right-4 w-24 h-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10" />
            </div>
          </div>

          <div className="laptop-hinge absolute bottom-[8%] left-1/2 -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]" style={{ transform: 'translateZ(-12px)' }} />
        </div>

        <div className="screen-glow absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent rounded-t-2xl opacity-0 pointer-events-none animate-pulse-glow" style={{ filter: 'blur(40px)' }} />
      </motion.div>
    </div>
  );
}