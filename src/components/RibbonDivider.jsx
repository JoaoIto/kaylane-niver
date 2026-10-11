import React from "react";

export function RibbonDivider({ variant = "standard", className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none py-6 ${className}`}>
      {/* Decorative Continuous Ribbon Curve */}
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 opacity-85 preserve-3d"
      >
        <defs>
          <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FAF8F5" stopOpacity="0" />
            <stop offset="15%" stopColor="#72091F" stopOpacity="0.4" />
            <stop offset="45%" stopColor="#5C0617" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#8B0021" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#72091F" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FAF2E3" stopOpacity="0" />
            <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#F3E8D2" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FAF2E3" stopOpacity="0" />
          </linearGradient>

          <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#5C0617" floodOpacity="0.2" />
          </filter>
        </defs>

        {variant === "flip" ? (
          <>
            {/* Upper Gold Highlight Line */}
            <path
              d="M0,80 C300,10 600,110 900,40 C1050,5 1150,70 1200,60"
              stroke="url(#goldSheen)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
            {/* Main Velvet Ribbon */}
            <path
              d="M0,85 C300,15 600,115 900,45 C1050,10 1150,75 1200,65"
              stroke="url(#ribbonGrad1)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#ribbonShadow)"
            />
          </>
        ) : (
          <>
            {/* Upper Gold Highlight Line */}
            <path
              d="M0,40 C250,110 550,10 850,90 C1020,130 1120,40 1200,60"
              stroke="url(#goldSheen)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
            />
            {/* Main Velvet Ribbon */}
            <path
              d="M0,45 C250,115 550,15 850,95 C1020,135 1120,45 1200,65"
              stroke="url(#ribbonGrad1)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#ribbonShadow)"
            />
          </>
        )}
      </svg>

      {/* Floating Center Monogram Pill */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
        <div className="flex items-center gap-2 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-1 rounded-full border border-[#E8D5B5]/60 shadow-sm">
          <span className="text-[#8B0021] text-xs font-editorial tracking-[0.2em] uppercase font-bold">
            Kaylane Almeida • 2025
          </span>
        </div>
      </div>
    </div>
  );
}

export function FloatingCherryBadge({ className = "", size = "md" }) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div
      className={`animate-float-cherries select-none pointer-events-none drop-shadow-md ${className}`}
    >
      <img
        src="/images/dark_cherries.png"
        alt="Cerejas"
        className={`${sizeMap[size]} object-contain drop-shadow-md`}
      />
    </div>
  );
}
