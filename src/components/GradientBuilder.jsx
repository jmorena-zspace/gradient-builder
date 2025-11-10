import { useState, useEffect, useRef } from 'react';

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
  // Number of blobs (2-10)
  const [blobCount, setBlobCount] = useState(3);
  
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
  
  // Blob positions and velocities (x, y, z in percentage/viewport units)
  const [blobPositions, setBlobPositions] = useState([]);
  const [blobVelocities, setBlobVelocities] = useState([]);
  const [blobDeformations, setBlobDeformations] = useState([]); // For collision deformation
  
  // Blob opacity (0-100, default 85)
  const [blobOpacity, setBlobOpacity] = useState(85);

  // Global animation speeds (0-200%, default 100%)
  const [globalMovementSpeed, setGlobalMovementSpeed] = useState(100);
  const [globalScaleSpeed, setGlobalScaleSpeed] = useState(100);
  
  // Animation time for size oscillation (using ref to avoid dependency issues)
  const animationTimeRef = useRef(0);
  
  // Modal state
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importCode, setImportCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Gradient type: 'blobs' or 'mesh'
  const [gradientType, setGradientType] = useState('blobs');

  // PNG image state
  const [importedImage, setImportedImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 }); // Percentage
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 }); // Pixels
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ width: 0, height: 0, x: 0, y: 0 });

  // Mesh gradient points state
  const [meshPoints, setMeshPoints] = useState([]);

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

  // Generate blob positions dynamically
  const generateBlobPositions = (count) => {
    const positions = [];
    const angleStep = (2 * Math.PI) / count;
    
    for (let i = 0; i < count; i++) {
      const angle = i * angleStep;
      // Distribute blobs in a circle, but vary the radius slightly
      const radius = 0.3 + (i % 3) * 0.1; // Vary between 0.3 and 0.5
      const x = 0.5 + radius * Math.cos(angle);
      const y = 0.5 + radius * Math.sin(angle);
      
      // Convert to Tailwind position classes
      let topClass = '';
      let leftClass = '';
      
      if (y < 0.25) topClass = 'top-1/4';
      else if (y < 0.5) topClass = 'top-1/3';
      else if (y < 0.75) topClass = 'top-2/3';
      else topClass = 'bottom-1/4';
      
      if (x < 0.25) leftClass = 'left-1/4';
      else if (x < 0.5) leftClass = 'left-1/3';
      else if (x < 0.75) leftClass = 'left-2/3';
      else leftClass = 'right-1/4';
      
      positions.push({ position: `${topClass} ${leftClass}` });
    }
    return positions;
  };

  // Handle blob count change
  const handleBlobCountChange = (newCount) => {
    setBlobCount(newCount);
    
    // Adjust blobColors array
    const newColors = [...blobColors];
    while (newColors.length < newCount) {
      // Default colors for new blobs
      const defaultColors = [
        ['emerald-400', 'emerald-600', 'emerald-400'],
        ['cyan-400', 'blue-500', 'indigo-500'],
        ['violet-400', 'fuchsia-500', 'violet-400'],
        ['rose-400', 'pink-500', 'rose-400'],
        ['amber-400', 'orange-500', 'amber-400'],
        ['teal-400', 'cyan-500', 'teal-400'],
        ['purple-400', 'indigo-500', 'purple-400'],
        ['green-400', 'emerald-500', 'green-400'],
        ['blue-400', 'sky-500', 'blue-400'],
        ['red-400', 'pink-500', 'red-400']
      ];
      newColors.push(defaultColors[newColors.length % defaultColors.length]);
    }
    newColors.length = newCount;
    setBlobColors(newColors);
    
    // Adjust animationSpeeds array
    const newSpeeds = [...animationSpeeds];
    while (newSpeeds.length < newCount) {
      // Default speeds: vary between 20-40 seconds
      newSpeeds.push(25 + (newSpeeds.length * 5) % 20);
    }
    newSpeeds.length = newCount;
    setAnimationSpeeds(newSpeeds);

    // Initialize positions and velocities for new blobs
    const newPositions = [...blobPositions];
    const newVelocities = [...blobVelocities];
    const newDeformations = [...blobDeformations];
    
    while (newPositions.length < newCount) {
      const angle = (newPositions.length * 2 * Math.PI) / newCount;
      const radius = 30;
      newPositions.push({
        x: 50 + radius * Math.cos(angle), // Percentage
        y: 50 + radius * Math.sin(angle), // Percentage
        z: 1 // Scale factor
      });
      newVelocities.push({
        vx: (Math.random() - 0.5) * 0.2, // Viewport units per frame
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.01
      });
      newDeformations.push({
        borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
        scale: 1
      });
    }
    
    newPositions.length = newCount;
    newVelocities.length = newCount;
    newDeformations.length = newCount;
    
    setBlobPositions(newPositions);
    setBlobVelocities(newVelocities);
    setBlobDeformations(newDeformations);
  };

  // Update blob velocity (x, y, z)
  const updateBlobVelocity = (blobIndex, axis, value) => {
    const newVelocities = [...blobVelocities];
    if (!newVelocities[blobIndex]) {
      newVelocities[blobIndex] = { vx: 0, vy: 0, vz: 0 };
    }
    newVelocities[blobIndex] = {
      ...newVelocities[blobIndex],
      [axis]: value
    };
    setBlobVelocities(newVelocities);
  };

  // Handle PNG image import
  const handleImageImport = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImportedImage(e.target.result);
        // Center the image initially
        setImagePosition({ x: 50, y: 50 });
        setImageSize({ width: 200, height: 200 });
      };
      reader.readAsDataURL(file);
    }
    // Reset input so same file can be selected again
    event.target.value = '';
  };

  // Handle image drag
  const handleImageMouseDown = (e) => {
    if (e.target.classList.contains('resize-handle')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - (imagePosition.x * window.innerWidth / 100),
      y: e.clientY - (imagePosition.y * window.innerHeight / 100)
    });
  };

  // Handle image resize
  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      width: imageSize.width,
      height: imageSize.height,
      x: e.clientX,
      y: e.clientY
    });
  };

  // Mouse move handlers
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = ((e.clientX - dragStart.x) / window.innerWidth) * 100;
      const newY = ((e.clientY - dragStart.y) / window.innerHeight) * 100;
      setImagePosition({
        x: Math.max(0, Math.min(100, newX)),
        y: Math.max(0, Math.min(100, newY))
      });
    } else if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      const aspectRatio = resizeStart.width / resizeStart.height;
      const newWidth = Math.max(50, Math.min(800, resizeStart.width + deltaX));
      const newHeight = newWidth / aspectRatio;
      setImageSize({
        width: newWidth,
        height: newHeight
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // Randomize blob animations
  const randomizeBlobAnimations = () => {
    const newSpeeds = animationSpeeds.map(() => Math.floor(Math.random() * 40) + 15); // 15-55 seconds
    setAnimationSpeeds(newSpeeds);
    
    // Generate random keyframes for each blob animation
    const generateRandomKeyframes = (index) => {
      const keyframes = [];
      const steps = [0, 25, 50, 75, 100];
      
      steps.forEach((step, i) => {
        const translateX = (Math.random() - 0.5) * 60; // -30vw to 30vw
        const translateY = (Math.random() - 0.5) * 60; // -30vh to 30vh
        const scale = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
        const borderRadius1 = 40 + Math.random() * 20; // 40-60
        const borderRadius2 = 40 + Math.random() * 20; // 40-60
        const borderRadius3 = 40 + Math.random() * 20; // 40-60
        const borderRadius4 = 40 + Math.random() * 20; // 40-60
        
        keyframes.push({
          step,
          transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale})`,
          borderRadius: `${borderRadius1}% ${borderRadius2}% ${borderRadius3}% ${borderRadius4}% / ${borderRadius3}% ${borderRadius4}% ${borderRadius1}% ${borderRadius2}%`
        });
      });
      
      return keyframes;
    };

    // Update CSS animations dynamically
    const styleSheet = document.styleSheets[0];
    const maxBlobs = Math.max(blobCount, 3);
    
    for (let i = 1; i <= maxBlobs; i++) {
      const animationName = `animate-blob-${i}`;
      const keyframes = generateRandomKeyframes(i);
      
      // Remove existing keyframes if they exist
      try {
        const existingRule = Array.from(styleSheet.cssRules).find(
          rule => rule.name === animationName
        );
        if (existingRule) {
          styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
        }
      } catch (e) {
        // Rule might not exist, continue
      }
      
      // Create new keyframes
      const keyframeRule = `@keyframes ${animationName} {
        ${keyframes.map(kf => 
          `${kf.step}% { 
            transform: ${kf.transform}; 
            border-radius: ${kf.borderRadius}; 
          }`
        ).join('\n        ')}
      }`;
      
      try {
        styleSheet.insertRule(keyframeRule, styleSheet.cssRules.length);
      } catch (e) {
        console.error('Error inserting keyframes:', e);
      }
    }
  };

  // Parse imported code and restore settings
  const handleImport = () => {
    try {
      const code = importCode.trim();
      
      // Extract blob size
      const sizeMatch = code.match(/width:\s*['"](\d+)rem['"]/);
      if (sizeMatch) {
        setBlobSize(parseInt(sizeMatch[1]));
      }
      
      // Extract opacity
      const opacityMatch = code.match(/opacity:\s*(\d+(?:\.\d+)?)/);
      if (opacityMatch) {
        setBlobOpacity(Math.round(parseFloat(opacityMatch[1]) * 100));
      }
      
      // Extract blob colors and count
      const blobMatches = code.matchAll(/background:\s*['"]radial-gradient\(circle,\s*([#\w]+)\s+0%,\s*([#\w]+)\s+50%,\s*([#\w]+)\s+100%\)['"]/g);
      const extractedColors = [];
      const extractedSpeeds = [];
      
      for (const match of blobMatches) {
        const [, fromHex, viaHex, toHex] = match;
        
        // Convert hex to Tailwind color name (approximate)
        const findTailwindColor = (hex) => {
          const normalizedHex = hex.toLowerCase();
          for (const [key, value] of Object.entries(tailwindColors)) {
            if (value.toLowerCase() === normalizedHex) {
              return key;
            }
          }
          // If not found, return a default
          return 'violet-500';
        };
        
        extractedColors.push([
          findTailwindColor(fromHex),
          findTailwindColor(viaHex),
          findTailwindColor(toHex)
        ]);
      }
      
      // Extract animation speeds from CSS variables or animation durations
      const speedMatches = code.matchAll(/--blob-(\d+)-speed['"]:\s*['"](\d+)s['"]/g);
      const speedMap = new Map();
      for (const match of speedMatches) {
        speedMap.set(parseInt(match[1]) - 1, parseInt(match[2]));
      }
      
      // Also try to extract from CSS code if present
      const cssSpeedMatches = code.matchAll(/animation:\s*animate-blob-\d+\s+(\d+)s/g);
      let cssSpeedIndex = 0;
      for (const match of cssSpeedMatches) {
        if (!speedMap.has(cssSpeedIndex)) {
          speedMap.set(cssSpeedIndex, parseInt(match[1]));
        }
        cssSpeedIndex++;
      }
      
      if (extractedColors.length > 0) {
        handleBlobCountChange(extractedColors.length);
        setBlobColors(extractedColors);
        
        // Set speeds if found
        if (speedMap.size > 0) {
          const newSpeeds = [];
          for (let i = 0; i < extractedColors.length; i++) {
            newSpeeds.push(speedMap.get(i) || 30);
          }
          setAnimationSpeeds(newSpeeds);
        }
      }
      
      setShowImportModal(false);
      setImportCode('');
    } catch (error) {
      alert('Error importing code. Please check the format and try again.');
      console.error('Import error:', error);
    }
  };

  // Generate React code for AnimatedBackground component
  const generateCode = () => {
    const blobElements = blobColors.map((gradient, index) => {
      const config = blobConfigs[index] || blobConfigs[0];
      const [from, via, to] = gradient;
      
      const fromHex = tailwindColors[from?.toLowerCase()] || '#34d399';
      const viaHex = tailwindColors[via?.toLowerCase()] || '#059669';
      const toHex = tailwindColors[to?.toLowerCase()] || '#34d399';
      
      const animationClass = `animate-blob-${(index % 3) + 1}`;
      
      return `        <div 
          className="absolute ${config.position} -translate-x-1/2 -translate-y-1/2 blur-[120px] ${animationClass}"
          style={{
            width: '${blobSize}rem',
            height: '${blobSize}rem',
            background: 'radial-gradient(circle, ${fromHex} 0%, ${viaHex} 50%, ${toHex} 100%)',
            opacity: ${blobOpacity / 100},
            borderRadius: '50%'
          }}
        ></div>`;
    }).join('\n');

    const cssVariables = blobColors.map((_, index) => 
      `          '--blob-${index + 1}-speed': '${animationSpeeds[index] || 30}s'`
    ).join(',\n');

    return `import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
      <div 
        className="relative h-full w-full"
        style={{
${cssVariables}
        }}
      >
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 z-20 mix-blend-soft-light" 
          style={{ 
            backgroundImage: \`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')\`, 
            opacity: 0.35
          }}
        ></div>
        
        {/* Blobs */}
${blobElements}
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

  // Generate blob configurations dynamically based on count
  const blobConfigs = generateBlobPositions(blobCount);

  // Initialize mesh points - create control points for each blob color
  useEffect(() => {
    if (gradientType === 'mesh') {
      const points = [];
      // Create multiple points per blob color for smoother mesh
      const pointsPerColor = 3;
      for (let colorIndex = 0; colorIndex < blobCount; colorIndex++) {
        for (let i = 0; i < pointsPerColor; i++) {
          // Distribute points more evenly but with some randomness
          const angle = (colorIndex * (2 * Math.PI / blobCount)) + (i * (2 * Math.PI / (blobCount * pointsPerColor)));
          const radius = 30 + Math.random() * 20; // 30-50% from center
          const x = 50 + radius * Math.cos(angle) + (Math.random() - 0.5) * 10;
          const y = 50 + radius * Math.sin(angle) + (Math.random() - 0.5) * 10;
          
          points.push({
            x: Math.max(5, Math.min(95, x)),
            y: Math.max(5, Math.min(95, y)),
            colorIndex: colorIndex,
            vx: (Math.random() - 0.5) * 0.3, // Slower, smoother movement
            vy: (Math.random() - 0.5) * 0.3
          });
        }
      }
      setMeshPoints(points);
    }
  }, [gradientType, blobCount]);

  // Initialize blob positions and velocities on mount
  useEffect(() => {
    if (blobPositions.length === 0 && blobCount > 0) {
      // Initialize positions and velocities
      const newPositions = [];
      const newVelocities = [];
      const newDeformations = [];
      
      for (let i = 0; i < blobCount; i++) {
        const angle = (i * 2 * Math.PI) / blobCount;
        const radius = 30;
        newPositions.push({
          x: 50 + radius * Math.cos(angle),
          y: 50 + radius * Math.sin(angle),
          z: 1
        });
        newVelocities.push({
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.01
        });
        newDeformations.push({
          borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
          scale: 1
        });
      }
      
      setBlobPositions(newPositions);
      setBlobVelocities(newVelocities);
      setBlobDeformations(newDeformations);
    }
  }, [blobCount]);

  // Animate blobs with collision detection and deformation
  useEffect(() => {
    if (gradientType !== 'blobs' || blobPositions.length === 0) return;

    const animate = () => {
      // Update animation time for size oscillation
      animationTimeRef.current += (globalScaleSpeed / 100) * 0.01;
      
      setBlobPositions(prevPositions => {
        const newPositions = prevPositions.map(p => ({ ...p }));
        
        setBlobVelocities(prevVelocities => {
          const newVelocities = prevVelocities.map(v => ({ ...v }));
          
          setBlobDeformations(prevDeformations => {
            const newDeformations = prevDeformations.map(d => ({
              borderRadius: d.borderRadius,
              scale: Math.max(0.95, d.scale * 0.98) // Gradually return to normal
            }));

            const blobRadius = blobSize * 0.5; // Approximate radius in rem
            const movementMultiplier = globalMovementSpeed / 100;

            // Calculate size oscillation (80% to 110% of base size)
            const baseSize = 1.0; // Base scale factor
            const sizeRange = 0.3; // 0.3 = 30% range (110% - 80% = 30%)
            const sizeOffset = 0.1; // Offset to center at 95% (80% + 15%)

            // Update positions and check collisions
            for (let i = 0; i < newPositions.length; i++) {
              // Update position with global movement speed multiplier
              newPositions[i].x += newVelocities[i].vx * movementMultiplier;
              newPositions[i].y += newVelocities[i].vy * movementMultiplier;
              
              // Update z scale with animation (oscillate between 0.8 and 1.1)
              // Each blob has a slight phase offset for variety
              const phaseOffset = (i * Math.PI * 2) / newPositions.length;
              const blobAnimatedSize = baseSize - sizeOffset + (Math.sin(animationTimeRef.current + phaseOffset) * sizeRange / 2) + (sizeRange / 2);
              newPositions[i].z = Math.max(0.5, Math.min(1.5, blobAnimatedSize));

              // Check edge collisions
              const edgeMargin = 10; // Percentage margin
              if (newPositions[i].x <= edgeMargin || newPositions[i].x >= 100 - edgeMargin) {
                newVelocities[i].vx = -newVelocities[i].vx;
                newPositions[i].x = Math.max(edgeMargin, Math.min(100 - edgeMargin, newPositions[i].x));
                // Deform on edge collision
                newDeformations[i] = {
                  borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
                  scale: 0.9
                };
              }
              if (newPositions[i].y <= edgeMargin || newPositions[i].y >= 100 - edgeMargin) {
                newVelocities[i].vy = -newVelocities[i].vy;
                newPositions[i].y = Math.max(edgeMargin, Math.min(100 - edgeMargin, newPositions[i].y));
                // Deform on edge collision
                newDeformations[i] = {
                  borderRadius: '50% 50% 60% 40% / 40% 50% 50% 60%',
                  scale: 0.9
                };
              }

              // Check blob-to-blob collisions
              for (let j = i + 1; j < newPositions.length; j++) {
                const dx = newPositions[i].x - newPositions[j].x;
                const dy = newPositions[i].y - newPositions[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = blobRadius * 0.3; // Collision threshold

                if (distance < minDistance && distance > 0) {
                  // Collision detected - bounce
                  const angle = Math.atan2(dy, dx);
                  const speed1 = Math.sqrt(newVelocities[i].vx ** 2 + newVelocities[i].vy ** 2);
                  const speed2 = Math.sqrt(newVelocities[j].vx ** 2 + newVelocities[j].vy ** 2);

                  // Simple elastic collision
                  newVelocities[i].vx = Math.cos(angle) * speed1 * 0.8;
                  newVelocities[i].vy = Math.sin(angle) * speed1 * 0.8;
                  newVelocities[j].vx = -Math.cos(angle) * speed2 * 0.8;
                  newVelocities[j].vy = -Math.sin(angle) * speed2 * 0.8;

                  // Deform both blobs
                  const deformation = {
                    borderRadius: '45% 55% 50% 50% / 55% 45% 50% 50%',
                    scale: 0.85
                  };
                  newDeformations[i] = deformation;
                  newDeformations[j] = deformation;

                  // Separate blobs
                  const separation = (minDistance - distance) / 2;
                  newPositions[i].x += Math.cos(angle) * separation;
                  newPositions[i].y += Math.sin(angle) * separation;
                  newPositions[j].x -= Math.cos(angle) * separation;
                  newPositions[j].y -= Math.sin(angle) * separation;
                }
              }
            }

            return newDeformations;
          });
          
          return newVelocities;
        });
        
        return newPositions;
      });
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [gradientType, blobPositions.length, blobSize, blobVelocities]);

  // Animate mesh points
  useEffect(() => {
    if (gradientType !== 'mesh') return;

    const animate = () => {
      setMeshPoints(prevPoints => 
        prevPoints.map(point => {
          let newX = point.x + point.vx;
          let newY = point.y + point.vy;
          let newVx = point.vx;
          let newVy = point.vy;

          // Bounce off edges and reverse velocity
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...point,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    };

    const interval = setInterval(animate, 50); // Update every 50ms
    return () => clearInterval(interval);
  }, [gradientType, meshPoints.length]);

  // Add event listeners for drag and resize
  useEffect(() => {
    if (isDragging || isResizing) {
      const handleMove = (e) => handleMouseMove(e);
      const handleUp = () => handleMouseUp();
      
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, imagePosition, imageSize]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background - matching AnimatedBackground.jsx */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
        <div 
          className="relative h-full w-full"
          style={{
            ...Object.fromEntries(
              animationSpeeds.map((speed, index) => [`--blob-${index + 1}-speed`, `${speed || 30}s`])
            )
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
          
          {/* Blobs or Mesh Gradient */}
          {gradientType === 'blobs' ? (
            // Blobs - JavaScript-controlled with collision detection
            blobColors.slice(0, blobCount).map((gradient, index) => {
              const [from, via, to] = gradient;
              
              // Convert Tailwind colors to hex for inline gradient
              const fromHex = tailwindColors[from?.toLowerCase()] || '#34d399';
              const viaHex = tailwindColors[via?.toLowerCase()] || '#059669';
              const toHex = tailwindColors[to?.toLowerCase()] || '#34d399';
              
              const position = blobPositions[index] || { x: 50, y: 50, z: 1 };
              const deformation = blobDeformations[index] || { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', scale: 1 };
              
              return (
                <div
                  key={index}
                  className="absolute blur-[120px]"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: `translate(-50%, -50%) scale(${position.z * deformation.scale})`,
                    width: `${blobSize}rem`,
                    height: `${blobSize}rem`,
                    background: `radial-gradient(circle, ${fromHex} 0%, ${viaHex} 50%, ${toHex} 100%)`,
                    opacity: blobOpacity / 100,
                    borderRadius: deformation.borderRadius,
                    transition: 'border-radius 0.1s ease-out, transform 0.1s ease-out'
                  }}
                ></div>
              );
            })
          ) : (
            // Mesh Gradient - Using large blurred radial gradients for smooth organic look
            <div className="absolute inset-0 w-full h-full" style={{ opacity: blobOpacity / 100 }}>
              {meshPoints.map((point, index) => {
                const gradient = blobColors[point.colorIndex % blobCount] || blobColors[0];
                const [from, via, to] = gradient;
                const fromHex = tailwindColors[from?.toLowerCase()] || '#34d399';
                const viaHex = tailwindColors[via?.toLowerCase()] || '#059669';
                const toHex = tailwindColors[to?.toLowerCase()] || '#34d399';
                
                // Large size for smooth blending - use rem units scaled by blobSize
                const size = blobSize * 2; // Make mesh gradients larger for better blending
                
                return (
                  <div
                    key={index}
                    className="absolute rounded-full"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: `${size}rem`,
                      height: `${size}rem`,
                      background: `radial-gradient(circle, ${fromHex} 0%, ${viaHex} 30%, ${toHex} 60%, transparent 85%)`,
                      filter: 'blur(120px)',
                      mixBlendMode: 'normal',
                      opacity: 0.8,
                      pointerEvents: 'none',
                      willChange: 'transform'
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Imported PNG Image Overlay */}
      {importedImage && (
        <div
          className="fixed z-30 cursor-move"
          style={{
            left: `${imagePosition.x}%`,
            top: `${imagePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
          onMouseDown={handleImageMouseDown}
        >
          <img
            src={importedImage}
            alt="Imported logo"
            className="w-full h-full object-contain pointer-events-none select-none"
            draggable={false}
          />
          {/* Resize handle */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 cursor-nwse-resize rounded-full border-2 border-white"
            onMouseDown={handleResizeMouseDown}
            style={{ transform: 'translate(50%, 50%)' }}
          />
          {/* Remove button */}
          <button
            onClick={() => setImportedImage(null)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
          >
            ×
          </button>
        </div>
      )}

          {/* Controls Panel */}
          <div className="relative z-10 min-h-screen flex">
            <div className="w-96 p-6 overflow-y-auto bg-white/5 backdrop-blur-sm border-r border-white/10">
              <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Gradient Builder
              </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl space-y-6">
            {/* Gradient Type Toggle */}
            <div>
              <label className="block text-white font-medium mb-3">
                Gradient Type
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setGradientType('blobs')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    gradientType === 'blobs'
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  Blobs
                </button>
                <button
                  onClick={() => setGradientType('mesh')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    gradientType === 'mesh'
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  Mesh
                </button>
              </div>
            </div>

            {/* Import Code */}
            <div className="space-y-2">
              <button
                onClick={() => setShowImportModal(true)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Import React Code
              </button>
              <label className="block w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 text-center cursor-pointer">
                Import PNG Logo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageImport}
                  className="hidden"
                />
              </label>
            </div>

            {/* Blob Count */}
            <div>
              <label className="block text-white font-medium mb-2">
                Number of Blobs: {blobCount}
              </label>
              <input
                type="range"
                min="2"
                max="10"
                value={blobCount}
                onChange={(e) => handleBlobCountChange(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

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

            {/* Global Animation Speeds */}
            <div className="space-y-3">
              <div>
                <label className="block text-white font-medium mb-2">
                  Global Movement Speed: {globalMovementSpeed}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={globalMovementSpeed}
                  onChange={(e) => setGlobalMovementSpeed(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-white/60 text-xs mt-1">Controls how fast blobs move</p>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Global Scale Animation Speed: {globalScaleSpeed}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={globalScaleSpeed}
                  onChange={(e) => setGlobalScaleSpeed(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-white/60 text-xs mt-1">Controls how fast blobs pulse (80%-110% size)</p>
              </div>
            </div>

            {/* Blob Movement Controls (X, Y, Z) */}
            <div>
              <label className="block text-white font-medium mb-3">
                Blob Movement Controls
              </label>
              <div className="space-y-4">
                {blobVelocities.slice(0, blobCount).map((velocity, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 space-y-2">
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Blob {index + 1}
                    </label>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-white/70 text-xs mb-1">
                          X Velocity: {velocity.vx?.toFixed(2) || 0}
                        </label>
                        <input
                          type="range"
                          min="-1"
                          max="1"
                          step="0.01"
                          value={velocity.vx || 0}
                          onChange={(e) => updateBlobVelocity(index, 'vx', parseFloat(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-xs mb-1">
                          Y Velocity: {velocity.vy?.toFixed(2) || 0}
                        </label>
                        <input
                          type="range"
                          min="-1"
                          max="1"
                          step="0.01"
                          value={velocity.vy || 0}
                          onChange={(e) => updateBlobVelocity(index, 'vy', parseFloat(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-xs mb-1">
                          Z Velocity (Scale): {velocity.vz?.toFixed(3) || 0}
                        </label>
                        <input
                          type="range"
                          min="-0.05"
                          max="0.05"
                          step="0.001"
                          value={velocity.vz || 0}
                          onChange={(e) => updateBlobVelocity(index, 'vz', parseFloat(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
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

            {/* Randomize Animations */}
            <div>
              <button
                onClick={randomizeBlobAnimations}
                className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-300"
              >
                Randomize Blob Movements
              </button>
            </div>

            {/* Blob Colors - 3-step gradients */}
            <div>
              <label className="block text-white font-medium mb-3">
                Blob Gradients (Tailwind)
              </label>
              <div className="space-y-4">
                {blobColors.slice(0, blobCount).map((gradient, index) => {
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

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1e1e1e] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col m-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold text-white">Import React Code</h2>
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportCode('');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Import Content */}
            <div className="flex-1 overflow-auto p-4 bg-[#1e1e1e]">
              <p className="text-white/70 text-sm mb-4">
                Paste the React code you previously generated. The tool will extract blob colors, sizes, speeds, and opacity.
              </p>
              <textarea
                value={importCode}
                onChange={(e) => setImportCode(e.target.value)}
                placeholder="Paste your AnimatedBackground.jsx code here..."
                className="w-full h-64 px-4 py-3 bg-[#252526] border border-gray-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end p-4 border-t border-gray-700 gap-3">
              <button
                onClick={() => {
                  setShowImportModal(false);
                  setImportCode('');
                }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
