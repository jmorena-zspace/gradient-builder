import { useState } from 'react';

function GradientCard({ 
  title = "Card title",
  subtitle = "Subtitle",
  badge = "Badge",
  tags = ["Tag", "Tag", "Tag"],
  extraTagsCount = 3,
  imageUrl,
  onCodeClick
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isCodeHovered, setIsCodeHovered] = useState(false);

  return (
    <div
      className="bg-slate-900 border border-slate-700 rounded-md p-4 transition-all duration-200 cursor-pointer"
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' 
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        borderColor: isHovered ? 'rgb(148, 163, 184)' : 'rgb(51, 65, 85)' // slate-400 : slate-700
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 items-start">
        {/* Image Placeholder */}
        <div className="relative shrink-0 w-16 h-16">
          <div 
            className="absolute inset-0 rounded-2xl shadow-md"
            style={{
              background: imageUrl 
                ? `url(${imageUrl}) center/cover`
                : 'linear-gradient(180deg, #a78bfa 0%, #ec4899 100%)', // purple-400 to pink-500
            }}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col gap-0 min-w-0">
          {/* Header Row: Badge + Code Button */}
          <div className="flex items-start justify-between mb-1">
            {/* Badge */}
            <div className="bg-cyan-100 px-2 py-1 rounded text-cyan-950 text-xs font-medium">
              {badge}
            </div>

            {/* Code Button */}
            <button
              className="bg-slate-900 border border-slate-600 rounded-full px-2 py-1 flex items-center gap-1 text-slate-300 text-xs font-medium transition-all duration-200"
              style={{
                borderColor: isCodeHovered ? 'rgb(148, 163, 184)' : 'rgb(71, 85, 105)', // slate-400 : slate-600
                backgroundColor: isCodeHovered ? 'rgb(30, 41, 59)' : 'rgb(15, 23, 42)', // slate-800 : slate-900
                transform: isCodeHovered ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={() => setIsCodeHovered(true)}
              onMouseLeave={() => setIsCodeHovered(false)}
              onClick={onCodeClick}
            >
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                />
              </svg>
              <span>code</span>
            </button>
          </div>

          {/* Title */}
          <h3
            className="font-medium text-base leading-6 text-slate-50 mb-2 transition-colors duration-200 line-clamp-2"
            style={{
              color: isTitleHovered ? 'rgb(226, 232, 240)' : 'rgb(248, 250, 252)' // slate-200 : slate-50
            }}
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-slate-400 text-xs leading-4 mb-3">
            {subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 items-center pt-3">
            {tags.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className="border border-slate-700 rounded-full px-2 py-1 flex items-center gap-1 text-slate-300 text-xs"
              >
                <svg 
                  className="w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
                <span>{tag}</span>
              </div>
            ))}
            {extraTagsCount > 0 && (
              <div className="border border-slate-700 rounded-full px-2 py-1 text-slate-300 text-xs font-medium">
                +{extraTagsCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradientCard;

