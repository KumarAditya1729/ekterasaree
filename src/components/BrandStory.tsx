import React from 'react';
import { GoldDivider } from './Ornament';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface BrandStoryProps {
  onExploreHeritage: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onExploreHeritage }) => {
  return (
    <section id="story" className="w-full bg-[#FAF6F0] py-16 sm:py-24 border-t border-[#E8D8C4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Master Weaver Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-[#E8D8C4] group">
              <img
                src="/images/story/artisan-loom.jpg"
                alt="Master Indian handloom artisan weaving pure silk on traditional pit loom"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B18]/60 via-transparent to-transparent"></div>
              
              {/* Overlay quote card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FAF6F0]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#B88A45]/40 shadow-lg">
                <p className="font-serif italic text-sm sm:text-base text-[#211B18] leading-snug">
                  "A machine stitches fabric in minutes; an artisan breathes soul into silk over weeks. That soul endures across lifetimes."
                </p>
                <div className="mt-2 text-[11px] font-sans font-semibold uppercase tracking-wider text-[#B88A45]">
                  — Master Weaver Ramavatar, Varanasi Loom Guild
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Brand Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex justify-start mb-2">
              <GoldDivider className="scale-75 origin-left" />
            </div>

            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B88A45] font-semibold mb-2 block">
              The Philosophy of Ekatra
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-serif text-[#211B18] tracking-tight font-normal leading-tight mb-5">
              More Than a Saree. <br />
              <span className="italic text-[#641B29]">A Story Woven in Time.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#635A55] font-light leading-relaxed mb-4">
              At <strong className="text-[#211B18] font-medium">House of Ekatra</strong>, we believe every handloom saree is a living archive of Indian civilization. Originating from ancient weaving epicenters like Varanasi, Kanchipuram, and Chanderi, each creation honors the rhythmic harmony between the weaver’s hands, feet, and eyes.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#635A55] font-light leading-relaxed mb-8">
              We work directly with master craftspersons, rejecting mechanized mass reproduction in favor of genuine Mulberry silk, tested gold-dipped zari, and natural dyes. When you drape an Ekatra weave, you wear a legacy made to be passed down through mother, daughter, and generation.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E8D8C4] pt-6 mb-8 font-sans">
              <div>
                <div className="text-lg font-serif font-bold text-[#063B2C]">100%</div>
                <div className="text-xs font-semibold text-[#211B18] mt-0.5">Handloom Authenticity</div>
                <div className="text-[11px] text-[#635A55] mt-0.5">Direct weaver clusters</div>
              </div>

              <div>
                <div className="text-lg font-serif font-bold text-[#641B29]">180+</div>
                <div className="text-xs font-semibold text-[#211B18] mt-0.5">Hours Per Saree</div>
                <div className="text-[11px] text-[#635A55] mt-0.5">Intricate Kadwa & Korvai</div>
              </div>

              <div>
                <div className="text-lg font-serif font-bold text-[#B88A45]">50+</div>
                <div className="text-xs font-semibold text-[#211B18] mt-0.5">Global Destinations</div>
                <div className="text-[11px] text-[#635A55] mt-0.5">Insured white-glove transit</div>
              </div>
            </div>

            <div>
              <button
                id="brand-story-cta"
                onClick={onExploreHeritage}
                className="bg-[#063B2C] hover:bg-[#0A4D3A] text-[#F8F1E7] font-sans font-medium text-xs sm:text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 group cursor-pointer inline-flex"
              >
                <span>Explore Artisan Clusters</span>
                <span className="text-[#B88A45] transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
