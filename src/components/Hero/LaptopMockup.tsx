'use client';

export function LaptopMockup() {
  return (
    <div
      className="relative"
      style={{
        width: '420px',
        perspective: '1200px',
      }}
    >
      {/* Screen */}
      <div
        className="relative rounded-t-2xl overflow-hidden border border-white/10"
        style={{
          width: '100%',
          height: '280px',
          background: '#0a0a0a',
          transform: 'rotateX(-5deg)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(245,200,66,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Webcam */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black z-10" />

        {/* FlexShop UI Screen */}
        <div className="p-4 h-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)' }}>
          {/* Navbar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded bg-amber-400" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">FlexShop</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-6 h-1 rounded bg-white/10" />
                <div className="w-6 h-1 rounded bg-white/10" />
                <div className="w-6 h-1 rounded bg-amber-400/50" />
              </div>
              <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-2">
            {/* Product Card 1 */}
            <div className="rounded-lg bg-zinc-900/60 border border-white/5 p-2">
              <div className="w-full aspect-square rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 mb-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-amber-500/20" />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
              <div className="h-1.5 w-1/2 rounded bg-white/5 mb-1" />
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-amber-500/20" />
                <div className="w-5 h-5 rounded bg-amber-500/30" />
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="rounded-lg bg-zinc-900/60 border border-white/5 p-2">
              <div className="w-full aspect-square rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 mb-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-blue-500/20" />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
              <div className="h-1.5 w-1/2 rounded bg-white/5 mb-1" />
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-blue-500/20" />
                <div className="w-5 h-5 rounded bg-blue-500/30" />
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="rounded-lg bg-zinc-900/60 border border-white/5 p-2">
              <div className="w-full aspect-square rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 mb-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-green-500/20" />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
              <div className="h-1.5 w-1/2 rounded bg-white/5 mb-1" />
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-green-500/20" />
                <div className="w-5 h-5 rounded bg-green-500/30" />
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="rounded-lg bg-zinc-900/60 border border-white/5 p-2">
              <div className="w-full aspect-square rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 mb-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-purple-500/20" />
              </div>
              <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
              <div className="h-1.5 w-1/2 rounded bg-white/5 mb-1" />
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-purple-500/20" />
                <div className="w-5 h-5 rounded bg-purple-500/30" />
              </div>
            </div>
          </div>

          {/* Cart Button */}
          <div className="mt-2 flex items-center justify-between">
            <div className="h-1.5 w-24 rounded bg-white/5" />
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="h-1.5 w-12 rounded bg-amber-400/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="mx-auto"
        style={{
          width: '80%',
          height: '8px',
          background: 'linear-gradient(180deg, #2a2a2a, #1a1a1a)',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
        }}
      />

      {/* Keyboard Base */}
      <div
        className="rounded-b-2xl mx-auto"
        style={{
          width: '440px',
          height: '20px',
          background: 'linear-gradient(180deg, #1a1a1a, #0f0f0f)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        }}
      >
        {/* Trackpad */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-10 rounded bg-zinc-800 border border-white/5" />
      </div>
    </div>
  );
}