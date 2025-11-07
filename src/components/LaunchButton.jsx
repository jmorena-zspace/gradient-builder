export default function LaunchButton({ onClick, variant = 'contentHugging', className = '' }) {
  const baseClasses = "relative bg-violet-200 border-2 border-violet-300 flex gap-1 items-center justify-center px-3 h-8 rounded-full transition-all duration-500 ease-out cursor-pointer overflow-hidden group hover:border-violet-700";
  const variantClasses = variant === 'fullWidth' ? 'w-full' : 'w-auto';
  
  // Create noise pattern for organic edge
//   const noisePattern = `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Animated overlay with organic edge that slides from left on hover */}
      <span 
        className="absolute inset-0 bg-violet-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
        style={{
          // Create organic, irregular edge on the right side using noise pattern
        //   WebkitMaskImage: `${noisePattern}, linear-gradient(to right, black 0%, black 85%, transparent 100%)`,
        //   maskImage: `${noisePattern}, linear-gradient(to right, black 0%, black 85%, transparent 100%)`,
        //   WebkitMaskComposite: 'multiply',
          maskComposite: 'intersect',
          WebkitMaskSize: '30px 30px, 120% 120%',
          maskSize: '30px 30px, 120% 120%'
        }}
      ></span>
      
      {/* Text - dark on light background, light on dark background */}
      <p className="relative z-10 font-medium text-xs text-violet-900 group-hover:text-white transition-colors duration-300 ease-out">
        Launch
      </p>
      
      {/* Icon - dark on light background, light on dark background */}
      <svg className="relative z-10 w-3 h-3 text-violet-900 group-hover:text-white transition-colors duration-300 ease-out" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
