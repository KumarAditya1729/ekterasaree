import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CraftMandala } from './Ornament';

interface CraftsmanshipBannerProps {
  onMeetArtisans: () => void;
}

export const CraftsmanshipBanner: React.FC<CraftsmanshipBannerProps> = ({ onMeetArtisans }) => {
  return (
    <section id="craft" className="w-full bg-[#FAF6F0] py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#063B2C] overflow-hidden shadow-luxury border border-[#B88A45]/30">
          
          <div className="flex flex-col lg:flex-row items-stretch min-h-[340px] sm:min-h-[380px]">
            
            {/* LEFT IMAGE: Hands weaving on the loom shuttle */}
            <div className="w-full lg:w-[48%] relative min-h-[240px] sm:min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src="/images/craft/weaving-loom.png"
                alt="Master artisan weaving authentic silk saree on traditional wooden loom"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Soft gradient mask toward forest green */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#063B2C] to-transparent hidden lg:block"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#063B2C] to-transparent lg:hidden"></div>
            </div>

            {/* RIGHT PANEL: Forest green background with gold mandala & copy */}
            <div className="w-full lg:w-[52%] relative p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              
              {/* Intricate Antique Gold Mandala overlay in the center background */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-45 hidden md:block">
                <CraftMandala className="w-64 h-64 text-[#B88A45]" />
              </div>

              <div className="relative z-10 max-w-lg">
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B88A45] font-semibold mb-2 block">
                  Preserving Generational Heritage
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#F8F1E7] tracking-tight mb-4 font-normal italic leading-tight">
                  The Art of Handloom
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#F8F1E7]/85 font-light leading-relaxed mb-8 max-w-md">
                  Woven by skilled artisans, each saree carries a legacy of tradition, culture and craftsmanship. Every warp and weft is counted by hand, creating heirlooms that outlast fleeting trends.
                </p>

                <div>
                  <button
                    id="meet-artisans-cta"
                    onClick={onMeetArtisans}
                    className="bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18] font-sans font-medium text-xs sm:text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-gold-glow inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Meet Our Artisans</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
