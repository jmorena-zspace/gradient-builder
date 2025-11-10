import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      <div className="relative h-full w-full">
        {/* Grain Overlay - Made more prominent */}
        <div 
          className="absolute inset-0 z-20 mix-blend-soft-light" 
          style={{ 
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')`, 
            opacity: 0.35
          }}
        ></div>
        
        {/* Blobs - Larger, more opaque, and with new animations */}
        <div className="absolute top-1/4 left-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 opacity-85 blur-[120px] animate-blob-1"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-85 blur-[120px] animate-blob-2"></div>
        <div className="absolute bottom-1/3 left-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-500 to-violet-400 opacity-85 blur-[120px] animate-blob-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;