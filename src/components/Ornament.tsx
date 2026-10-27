import React from 'react';

// Central lotus/floral divider matching the reference screenshot: —— 🪷 ——
export const GoldDivider: React.FC<{ className?: string; text?: string }> = ({ className = '', text }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* Left ornament line */}
      <div className="flex items-center">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#B88A45]/80 inline-block mr-1"></span>
        <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B88A45]"></span>
      </div>

      {/* Center Lotus / Fleur Motif */}
      <svg className="w-6 h-6 text-[#B88A45] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 13.5 6 15.5 8C17 9.5 19.5 10 21.5 9.5C20.5 12 18 13.5 15.5 14C14.5 14.2 13 14.5 12 16C11 14.5 9.5 14.2 8.5 14C6 13.5 3.5 12 2.5 9.5C4.5 10 7 9.5 8.5 8C10.5 6 12 2 12 2Z" opacity="0.9" />
        <circle cx="12" cy="18.5" r="1.5" />
        <path d="M7 19C7 19 9.5 21 12 21C14.5 21 17 19 17 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>

      {/* Right ornament line */}
      <div className="flex items-center">
        <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B88A45]"></span>
        <span className="w-1.5 h-1.5 rotate-45 bg-[#B88A45]/80 inline-block ml-1"></span>
      </div>
    </div>
  );
};

// Corner Paisley / Mandala motif for Announcement Bar and Luxury Cards
export const CornerMandala: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => {
  return (
    <svg 
      className={`${className} ${flip ? '-scale-x-100' : ''}`} 
      viewBox="0 0 100 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,0 Q50,5 65,30 Q80,55 100,60" stroke="#B88A45" strokeWidth="0.8" opacity="0.35" />
      <path d="M0,10 Q40,15 50,35 Q60,55 75,60" stroke="#B88A45" strokeWidth="0.6" opacity="0.25" />
      <circle cx="20" cy="8" r="1.5" fill="#B88A45" opacity="0.4" />
      <circle cx="38" cy="16" r="2" fill="#B88A45" opacity="0.45" />
      <circle cx="55" cy="32" r="2.5" fill="#B88A45" opacity="0.5" />
      <path d="M10,2 Q25,20 15,35 Q5,50 0,55" stroke="#B88A45" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

// Intricate Traditional Mandala line-art used in Craftsmanship banner
export const CraftMandala: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" stroke="#B88A45" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="100" cy="100" r="75" stroke="#B88A45" strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="100" r="55" stroke="#B88A45" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="30" stroke="#B88A45" strokeWidth="1.2" opacity="0.7" />
      <circle cx="100" cy="100" r="8" fill="#B88A45" opacity="0.6" />
      
      {/* 8 Petal geometry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path d="M100,45 Q115,70 100,90 Q85,70 100,45 Z" stroke="#B88A45" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M100,25 Q125,60 100,85 Q75,60 100,25 Z" stroke="#B88A45" strokeWidth="0.6" fill="none" opacity="0.4" />
          <circle cx="100" cy="20" r="2" fill="#B88A45" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
};

// Trust Strip Heritage Icons matching reference
export const TrustIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-9 h-9' }) => {
  switch (type) {
    case 'handloom':
      // Geometric Handloom Weaving Motif
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88A45" strokeWidth="1.5">
          <rect x="6" y="6" width="28" height="28" rx="2" strokeWidth="1.2" />
          <path d="M6 14 H34 M6 20 H34 M6 26 H34" opacity="0.5" />
          <path d="M14 6 V34 M20 6 V34 M26 6 V34" opacity="0.5" />
          <polygon points="20,8 32,20 20,32 8,20" strokeWidth="1.6" fill="none" />
          <circle cx="20" cy="20" r="3" fill="#B88A45" />
        </svg>
      );
    case 'mandala':
      // Heritage Lotus Mandala
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88A45" strokeWidth="1.4">
          <circle cx="20" cy="20" r="14" strokeDasharray="2 2" />
          <circle cx="20" cy="20" r="8" />
          <path d="M20 6 C24 12 24 16 20 20 C16 16 16 12 20 6 Z" fill="#B88A45" fillOpacity="0.2" />
          <path d="M20 34 C24 28 24 24 20 20 C16 24 16 28 20 34 Z" fill="#B88A45" fillOpacity="0.2" />
          <path d="M6 20 C12 24 16 24 20 20 C16 16 12 16 6 20 Z" fill="#B88A45" fillOpacity="0.2" />
          <path d="M34 20 C28 24 24 24 20 20 C24 16 28 16 34 20 Z" fill="#B88A45" fillOpacity="0.2" />
          <circle cx="20" cy="20" r="2.5" fill="#B88A45" />
        </svg>
      );
    case 'shipping':
      // Globe with Silk Ribbon / World Weaves
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88A45" strokeWidth="1.4">
          <circle cx="20" cy="20" r="14" />
          <ellipse cx="20" cy="20" rx="6" ry="14" />
          <path d="M6 20 H34" />
          <path d="M9 13 Q20 17 31 13" opacity="0.6" />
          <path d="M9 27 Q20 23 31 27" opacity="0.6" />
        </svg>
      );
    case 'security':
      // Royal Padlock / Shield
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="#B88A45" strokeWidth="1.4">
          <rect x="10" y="17" width="20" height="16" rx="3" strokeWidth="1.5" />
          <path d="M14 17 V12 C14 8.7 16.7 6 20 6 C23.3 6 26 8.7 26 12 V17" strokeWidth="1.5" />
          <circle cx="20" cy="24" r="2" fill="#B88A45" />
          <path d="M20 26 V29" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
};
