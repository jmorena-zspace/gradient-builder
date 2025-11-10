import { useState } from 'react';

// Tailwind color palette lookup table
const tailwindColors = {
  // Slate
  'slate-50': '#f8fafc', 'slate-100': '#f1f5f9', 'slate-200': '#e2e8f0', 'slate-300': '#cbd5e1',
  'slate-400': '#94a3b8', 'slate-500': '#64748b', 'slate-600': '#475569', 'slate-700': '#334155',
  'slate-800': '#1e293b', 'slate-900': '#0f172a', 'slate-950': '#020617',
  // Gray
  'gray-50': '#f9fafb', 'gray-100': '#f3f4f6', 'gray-200': '#e5e7eb', 'gray-300': '#d1d5db',
  'gray-400': '#9ca3af', 'gray-500': '#6b7280', 'gray-600': '#4b5563', 'gray-700': '#374151',
  'gray-800': '#1f2937', 'gray-900': '#111827', 'gray-950': '#030712',
  // Zinc
  'zinc-50': '#fafafa', 'zinc-100': '#f4f4f5', 'zinc-200': '#e4e4e7', 'zinc-300': '#d4d4d8',
  'zinc-400': '#a1a1aa', 'zinc-500': '#71717a', 'zinc-600': '#52525b', 'zinc-700': '#3f3f46',
  'zinc-800': '#27272a', 'zinc-900': '#18181b', 'zinc-950': '#09090b',
  // Neutral
  'neutral-50': '#fafafa', 'neutral-100': '#f5f5f5', 'neutral-200': '#e5e5e5', 'neutral-300': '#d4d4d4',
  'neutral-400': '#a3a3a3', 'neutral-500': '#737373', 'neutral-600': '#525252', 'neutral-700': '#404040',
  'neutral-800': '#262626', 'neutral-900': '#171717', 'neutral-950': '#0a0a0a',
  // Stone
  'stone-50': '#fafaf9', 'stone-100': '#f5f5f4', 'stone-200': '#e7e5e4', 'stone-300': '#d6d3d1',
  'stone-400': '#a8a29e', 'stone-500': '#78716c', 'stone-600': '#57534e', 'stone-700': '#44403c',
  'stone-800': '#292524', 'stone-900': '#1c1917', 'stone-950': '#0c0a09',
  // Red
  'red-50': '#fef2f2', 'red-100': '#fee2e2', 'red-200': '#fecaca', 'red-300': '#fca5a5',
  'red-400': '#f87171', 'red-500': '#ef4444', 'red-600': '#dc2626', 'red-700': '#b91c1c',
  'red-800': '#991b1b', 'red-900': '#7f1d1d', 'red-950': '#450a0a',
  // Orange
  'orange-50': '#fff7ed', 'orange-100': '#ffedd5', 'orange-200': '#fed7aa', 'orange-300': '#fdba74',
  'orange-400': '#fb923c', 'orange-500': '#f97316', 'orange-600': '#ea580c', 'orange-700': '#c2410c',
  'orange-800': '#9a3412', 'orange-900': '#7c2d12', 'orange-950': '#431407',
  // Amber
  'amber-50': '#fffbeb', 'amber-100': '#fef3c7', 'amber-200': '#fde68a', 'amber-300': '#fcd34d',
  'amber-400': '#fbbf24', 'amber-500': '#f59e0b', 'amber-600': '#d97706', 'amber-700': '#b45309',
  'amber-800': '#92400e', 'amber-900': '#78350f', 'amber-950': '#451a03',
  // Yellow
  'yellow-50': '#fefce8', 'yellow-100': '#fef9c3', 'yellow-200': '#fef08a', 'yellow-300': '#fde047',
  'yellow-400': '#facc15', 'yellow-500': '#eab308', 'yellow-600': '#ca8a04', 'yellow-700': '#a16207',
  'yellow-800': '#854d0e', 'yellow-900': '#713f12', 'yellow-950': '#422006',
  // Lime
  'lime-50': '#f7fee7', 'lime-100': '#ecfccb', 'lime-200': '#d9f99d', 'lime-300': '#bef264',
  'lime-400': '#a3e635', 'lime-500': '#84cc16', 'lime-600': '#65a30d', 'lime-700': '#4d7c0f',
  'lime-800': '#365314', 'lime-900': '#1a2e05', 'lime-950': '#0a0e03',
  // Green
  'green-50': '#f0fdf4', 'green-100': '#dcfce7', 'green-200': '#bbf7d0', 'green-300': '#86efac',
  'green-400': '#4ade80', 'green-500': '#22c55e', 'green-600': '#16a34a', 'green-700': '#15803d',
  'green-800': '#166534', 'green-900': '#14532d', 'green-950': '#052e16',
  // Emerald
  'emerald-50': '#ecfdf5', 'emerald-100': '#d1fae5', 'emerald-200': '#a7f3d0', 'emerald-300': '#6ee7b7',
  'emerald-400': '#34d399', 'emerald-500': '#10b981', 'emerald-600': '#059669', 'emerald-700': '#047857',
  'emerald-800': '#065f46', 'emerald-900': '#064e3b', 'emerald-950': '#022c22',
  // Teal
  'teal-50': '#f0fdfa', 'teal-100': '#ccfbf1', 'teal-200': '#99f6e4', 'teal-300': '#5eead4',
  'teal-400': '#2dd4bf', 'teal-500': '#14b8a6', 'teal-600': '#0d9488', 'teal-700': '#0f766e',
  'teal-800': '#115e59', 'teal-900': '#134e4a', 'teal-950': '#042f2e',
  // Cyan
  'cyan-50': '#ecfeff', 'cyan-100': '#cffafe', 'cyan-200': '#a5f3fc', 'cyan-300': '#67e8f9',
  'cyan-400': '#22d3ee', 'cyan-500': '#06b6d4', 'cyan-600': '#0891b2', 'cyan-700': '#0e7490',
  'cyan-800': '#155e75', 'cyan-900': '#164e63', 'cyan-950': '#083344',
  // Sky
  'sky-50': '#f0f9ff', 'sky-100': '#e0f2fe', 'sky-200': '#bae6fd', 'sky-300': '#7dd3fc',
  'sky-400': '#38bdf8', 'sky-500': '#0ea5e9', 'sky-600': '#0284c7', 'sky-700': '#0369a1',
  'sky-800': '#075985', 'sky-900': '#0c4a6e', 'sky-950': '#082f49',
  // Blue
  'blue-50': '#eff6ff', 'blue-100': '#dbeafe', 'blue-200': '#bfdbfe', 'blue-300': '#93c5fd',
  'blue-400': '#60a5fa', 'blue-500': '#3b82f6', 'blue-600': '#2563eb', 'blue-700': '#1d4ed8',
  'blue-800': '#1e40af', 'blue-900': '#1e3a8a', 'blue-950': '#172554',
  // Indigo
  'indigo-50': '#eef2ff', 'indigo-100': '#e0e7ff', 'indigo-200': '#c7d2fe', 'indigo-300': '#a5b4fc',
  'indigo-400': '#818cf8', 'indigo-500': '#6366f1', 'indigo-600': '#4f46e5', 'indigo-700': '#4338ca',
  'indigo-800': '#3730a3', 'indigo-900': '#312e81', 'indigo-950': '#1e1b4b',
  // Violet
  'violet-50': '#f5f3ff', 'violet-100': '#ede9fe', 'violet-200': '#ddd6fe', 'violet-300': '#c4b5fd',
  'violet-400': '#a78bfa', 'violet-500': '#8b5cf6', 'violet-600': '#7c3aed', 'violet-700': '#6d28d9',
  'violet-800': '#5b21b6', 'violet-900': '#4c1d95', 'violet-950': '#2e1065',
  // Purple
  'purple-50': '#faf5ff', 'purple-100': '#f3e8ff', 'purple-200': '#e9d5ff', 'purple-300': '#d8b4fe',
  'purple-400': '#c084fc', 'purple-500': '#a855f7', 'purple-600': '#9333ea', 'purple-700': '#7e22ce',
  'purple-800': '#6b21a8', 'purple-900': '#581c87', 'purple-950': '#3b0764',
  // Fuchsia
  'fuchsia-50': '#fdf4ff', 'fuchsia-100': '#fae8ff', 'fuchsia-200': '#f5d0fe', 'fuchsia-300': '#f0abfc',
  'fuchsia-400': '#e879f9', 'fuchsia-500': '#d946ef', 'fuchsia-600': '#c026d3', 'fuchsia-700': '#a21caf',
  'fuchsia-800': '#86198f', 'fuchsia-900': '#701a75', 'fuchsia-950': '#4a044e',
  // Pink
  'pink-50': '#fdf2f8', 'pink-100': '#fce7f3', 'pink-200': '#fbcfe8', 'pink-300': '#f9a8d4',
  'pink-400': '#f472b6', 'pink-500': '#ec4899', 'pink-600': '#db2777', 'pink-700': '#be185d',
  'pink-800': '#9f1239', 'pink-900': '#831843', 'pink-950': '#500724',
  // Rose
  'rose-50': '#fff1f2', 'rose-100': '#ffe4e6', 'rose-200': '#fecdd3', 'rose-300': '#fda4af',
  'rose-400': '#fb7185', 'rose-500': '#f43f5e', 'rose-600': '#e11d48', 'rose-700': '#be123c',
  'rose-800': '#9f1239', 'rose-900': '#881337', 'rose-950': '#4c0519',
};

export default function GradientBuilder() {
  // Each blob has a 3-step gradient: [from, via, to]
  const [blobColors, setBlobColors] = useState([
    ['emerald-400', 'emerald-600', 'emerald-400'],
    ['cyan-400', 'blue-500', 'indigo-500'],
    ['violet-400', 'fuchsia-500', 'violet-400']
  ]);
  
  // Blob size in rem (default 40rem = 640px)
  const [blobSize, setBlobSize] = useState(40);
  
  // Animation speeds in seconds (default: 30s, 35s, 25s)
  const [animationSpeeds, setAnimationSpeeds] = useState([30, 35, 25]);
  
  // Blob opacity (0-100, default 85)
  const [blobOpacity, setBlobOpacity] = useState(85);
  
  // Modal state
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update individual gradient color in a blob (from, via, or to)
  const updateBlobGradientColor = (blobIndex, gradientIndex, color) => {
    const newColors = [...blobColors];
    if (!newColors[blobIndex]) {
      newColors[blobIndex] = ['violet-500', 'indigo-500', 'fuchsia-500'];
    }
    const newGradient = [...newColors[blobIndex]];
    newGradient[gradientIndex] = color;
    newColors[blobIndex] = newGradient;
    setBlobColors(newColors);
  };

  // Update animation speed for a specific blob
  const updateAnimationSpeed = (blobIndex, speed) => {
    const newSpeeds = [...animationSpeeds];
    newSpeeds[blobIndex] = speed;
    setAnimationSpeeds(newSpeeds);
  };

  // Generate React code for AnimatedBackground component
  const generateCode = () => {
    // Get hex colors for each blob
    const blob1Colors = blobColors[0] || ['emerald-400', 'emerald-600', 'emerald-400'];
    const blob2Colors = blobColors[1] || ['cyan-400', 'blue-500', 'indigo-500'];
    const blob3Colors = blobColors[2] || ['violet-400', 'fuchsia-500', 'violet-400'];
    
    const blob1From = tailwindColors[blob1Colors[0]?.toLowerCase()] || '#34d399';
    const blob1Via = tailwindColors[blob1Colors[1]?.toLowerCase()] || '#059669';
    const blob1To = tailwindColors[blob1Colors[2]?.toLowerCase()] || '#34d399';
    
    const blob2From = tailwindColors[blob2Colors[0]?.toLowerCase()] || '#22d3ee';
    const blob2Via = tailwindColors[blob2Colors[1]?.toLowerCase()] || '#3b82f6';
    const blob2To = tailwindColors[blob2Colors[2]?.toLowerCase()] || '#6366f1';
    
    const blob3From = tailwindColors[blob3Colors[0]?.toLowerCase()] || '#a78bfa';
    const blob3Via = tailwindColors[blob3Colors[1]?.toLowerCase()] || '#d946ef';
    const blob3To = tailwindColors[blob3Colors[2]?.toLowerCase()] || '#a78bfa';

    return `import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      <div className="relative h-full w-full">
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 z-20 mix-blend-soft-light" 
          style={{ 
            backgroundImage: \`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')\`, 
            opacity: 0.35
          }}
        ></div>
        
        {/* Blobs */}
        <div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 blur-[120px] animate-blob-1"
          style={{
            width: '${blobSize}rem',
            height: '${blobSize}rem',
            background: 'radial-gradient(circle, ${blob1From} 0%, ${blob1Via} 50%, ${blob1To} 100%)',
            opacity: ${blobOpacity / 100},
            borderRadius: '50%'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 blur-[120px] animate-blob-2"
          style={{
            width: '${blobSize}rem',
            height: '${blobSize}rem',
            background: 'radial-gradient(circle, ${blob2From} 0%, ${blob2Via} 50%, ${blob2To} 100%)',
            opacity: ${blobOpacity / 100},
            borderRadius: '50%'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] animate-blob-3"
          style={{
            width: '${blobSize}rem',
            height: '${blobSize}rem',
            background: 'radial-gradient(circle, ${blob3From} 0%, ${blob3Via} 50%, ${blob3To} 100%)',
            opacity: ${blobOpacity / 100},
            borderRadius: '50%'
          }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;`;
  };

  // Generate CSS code
  const generateCSSCode = () => {
    return `/* For animated background blobs */
@keyframes animate-blob-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20vw, -30vh) scale(1.1); }
  50% { transform: translate(-10vw, -10vh) scale(0.9); }
  75% { transform: translate(30vw, 20vh) scale(1.2); }
}

.animate-blob-1 { 
  animation: animate-blob-1 ${animationSpeeds[0]}s infinite alternate ease-in-out; 
}

@keyframes animate-blob-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-25vw, 20vh) scale(1.2); }
  50% { transform: translate(15vw, 30vh) scale(0.8); }
  75% { transform: translate(-20vw, -25vh) scale(1.1); }
}

.animate-blob-2 { 
  animation: animate-blob-2 ${animationSpeeds[1]}s infinite alternate ease-in-out; 
}

@keyframes animate-blob-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(10vw, 30vh) scale(1.1); }
  50% { transform: translate(-20vw, -20vh) scale(1); }
  75% { transform: translate(25vw, -15vh) scale(0.9); }
}

.animate-blob-3 { 
  animation: animate-blob-3 ${animationSpeeds[2]}s infinite alternate ease-in-out; 
}`;
  };

  // Copy code to clipboard
  const handleCopyCode = async () => {
    const code = generateCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Download React file
  const handleDownload = () => {
    const code = generateCode();
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AnimatedBackground.jsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Download CSS file
  const handleDownloadCSS = () => {
    const code = generateCSSCode();
    const blob = new Blob([code], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'animated-background.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Blob configurations matching AnimatedBackground.jsx
  const blobConfigs = [
    { position: 'top-1/4 left-1/4' },
    { position: 'bottom-1/4 right-1/4' },
    { position: 'top-1/2 left-1/2' } // Changed to center to keep it in viewport
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background - matching AnimatedBackground.jsx */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
        <div 
          className="relative h-full w-full"
          style={{
            '--blob-1-speed': `${animationSpeeds[0] || 30}s`,
            '--blob-2-speed': `${animationSpeeds[1] || 35}s`,
            '--blob-3-speed': `${animationSpeeds[2] || 25}s`,
          }}
        >
          {/* Grain Overlay - Made more prominent */}
          <div 
            className="absolute inset-0 z-20 mix-blend-soft-light" 
            style={{ 
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')`, 
              opacity: 0.35
            }}
          ></div>
          
          {/* Blobs - Matching AnimatedBackground.jsx structure */}
          {blobColors.map((gradient, index) => {
            const config = blobConfigs[index] || blobConfigs[0];
            const [from, via, to] = gradient;
            
            // Convert Tailwind colors to hex for inline gradient
            const fromHex = tailwindColors[from.toLowerCase()] || '#34d399';
            const viaHex = tailwindColors[via.toLowerCase()] || '#059669';
            const toHex = tailwindColors[to.toLowerCase()] || '#34d399';
            
            // Animation classes (mapped to avoid dynamic class issues)
            const animationClasses = ['animate-blob-1', 'animate-blob-2', 'animate-blob-3'];
            const animationClass = animationClasses[index] || 'animate-blob-1';
            
            return (
              <div
                key={index}
                className={`absolute ${config.position} -translate-x-1/2 -translate-y-1/2 blur-[120px] ${animationClass}`}
                style={{
                  width: `${blobSize}rem`,
                  height: `${blobSize}rem`,
                  background: `radial-gradient(circle, ${fromHex} 0%, ${viaHex} 50%, ${toHex} 100%)`,
                  opacity: blobOpacity / 100,
                  // Start with circular shape, animation will deform it
                  borderRadius: '50%'
                }}
              ></div>
            );
          })}
        </div>
      </div>

          {/* Controls Panel */}
          <div className="relative z-10 min-h-screen flex">
            <div className="w-96 p-6 overflow-y-auto bg-white/5 backdrop-blur-sm border-r border-white/10">
              <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Gradient Builder
              </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl space-y-6">
            {/* Blob Size */}
            <div>
              <label className="block text-white font-medium mb-2">
                Blob Size: {blobSize}rem
              </label>
              <input
                type="range"
                min="20"
                max="80"
                value={blobSize}
                onChange={(e) => setBlobSize(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Animation Speeds */}
            <div>
              <label className="block text-white font-medium mb-3">
                Animation Speeds
              </label>
              <div className="space-y-3">
                {animationSpeeds.map((speed, index) => (
                  <div key={index}>
                    <label className="block text-white/70 text-xs mb-1">
                      Blob {index + 1} Speed: {speed}s
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={speed}
                      onChange={(e) => updateAnimationSpeed(index, parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Blob Opacity */}
            <div>
              <label className="block text-white font-medium mb-2">
                Blob Opacity: {blobOpacity}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={blobOpacity}
                onChange={(e) => setBlobOpacity(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Blob Colors - 3-step gradients */}
            <div>
              <label className="block text-white font-medium mb-3">
                Blob Gradients (Tailwind)
              </label>
              <div className="space-y-4">
                {blobColors.map((gradient, index) => {
                  const gradientColors = Array.isArray(gradient) ? gradient : [gradient, gradient, gradient];
                  return (
                    <div key={index} className="space-y-2">
                      <label className="block text-white text-sm font-medium">
                        Blob {index + 1}
                      </label>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-white/70 text-xs mb-1">From</label>
                          <input
                            type="text"
                            value={gradientColors[0] || ''}
                            onChange={(e) => updateBlobGradientColor(index, 0, e.target.value)}
                            placeholder="e.g., emerald-400"
                            className="w-full px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-white/70 text-xs mb-1">Via</label>
                          <input
                            type="text"
                            value={gradientColors[1] || ''}
                            onChange={(e) => updateBlobGradientColor(index, 1, e.target.value)}
                            placeholder="e.g., emerald-600"
                            className="w-full px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-white/70 text-xs mb-1">To</label>
                          <input
                            type="text"
                            value={gradientColors[2] || ''}
                            onChange={(e) => updateBlobGradientColor(index, 2, e.target.value)}
                            placeholder="e.g., emerald-400"
                            className="w-full px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-white/60 text-xs mt-2">Enter Tailwind color names for 3-step gradients (from-via-to)</p>
            </div>

            {/* Show Code Button */}
            <div>
              <button
                onClick={() => setShowCodeModal(true)}
                className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Show React Code
              </button>
            </div>
          </div>
        </div>
        
        {/* Preview Area - Right Side */}
        <div className="flex-1"></div>
      </div>

      {/* Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1e1e1e] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col m-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">AnimatedBackground.jsx</h2>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e]">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-[#d4d4d4]">
                  {generateCode().split('\n').map((line, index) => {
                    // Simple but effective syntax highlighting
                    const trimmed = line.trim();
                    
                    // Comments
                    if (trimmed.startsWith('//') || trimmed.startsWith('{/*')) {
                      return (
                        <div key={index} className="text-[#6a9955]">
                          {line || ' '}
                        </div>
                      );
                    }
                    
                    // Keywords
                    if (trimmed.startsWith('import') || trimmed.startsWith('export') || trimmed.startsWith('default')) {
                      return (
                        <div key={index}>
                          <span className="text-[#c586c0]">{line.match(/^(import|export|default)\s+/)?.[0] || ''}</span>
                          <span className="text-[#d4d4d4]">{line.replace(/^(import|export|default)\s+/, '')}</span>
                        </div>
                      );
                    }
                    
                    // JSX tags
                    if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
                      const tagMatch = trimmed.match(/^<\/?(\w+)/);
                      if (tagMatch) {
                        const tagName = tagMatch[1];
                        return (
                          <div key={index}>
                            <span className="text-[#4ec9b0]">{line}</span>
                          </div>
                        );
                      }
                    }
                    
                    // Strings (simple detection)
                    if (line.includes("'") || line.includes('"') || line.includes('`')) {
                      const parts = line.split(/(['"`][^'"`]*['"`])/);
                      return (
                        <div key={index}>
                          {parts.map((part, partIndex) => {
                            if ((part.startsWith("'") && part.endsWith("'")) ||
                                (part.startsWith('"') && part.endsWith('"')) ||
                                (part.startsWith('`') && part.endsWith('`'))) {
                              return <span key={partIndex} className="text-[#ce9178]">{part}</span>;
                            }
                            // Check for keywords in non-string parts
                            const keywordMatch = part.match(/\b(const|let|var|function|return|className|style)\b/);
                            if (keywordMatch) {
                              const before = part.substring(0, part.indexOf(keywordMatch[0]));
                              const keyword = keywordMatch[0];
                              const after = part.substring(part.indexOf(keywordMatch[0]) + keyword.length);
                              return (
                                <span key={partIndex}>
                                  <span className="text-[#d4d4d4]">{before}</span>
                                  <span className="text-[#569cd6]">{keyword}</span>
                                  <span className="text-[#d4d4d4]">{after}</span>
                                </span>
                              );
                            }
                            return <span key={partIndex} className="text-[#d4d4d4]">{part}</span>;
                          })}
                        </div>
                      );
                    }
                    
                    // Default
                    return (
                      <div key={index} className="text-[#d4d4d4]">
                        {line || ' '}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-700 gap-3">
              <div className="flex gap-3">
                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download .jsx
                </button>
                <button
                  onClick={handleDownloadCSS}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download .css
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
