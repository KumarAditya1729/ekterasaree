import React from 'react';
import { TRUST_FEATURES } from '../data/products';
import { TrustIcon } from './Ornament';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF6F0] border-b border-[#E8D8C4] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_FEATURES.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3.5 sm:space-x-4 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
            >
              <div className="shrink-0 p-2 rounded-full bg-[#F3EADB]/70 text-[#B88A45]">
                <TrustIcon type={item.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-sans font-semibold text-xs sm:text-sm text-[#211B18] tracking-tight">
                  {item.title}
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-[#635A55] mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
