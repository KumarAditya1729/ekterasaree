import React from 'react';
import { OCCASIONS_DATA } from '../data/products';
import { GoldDivider } from './Ornament';
import { ArrowRight } from 'lucide-react';

interface OccasionDiscoveryProps {
  onSelectOccasion: (occasionValue: string) => void;
}

export const OccasionDiscovery: React.FC<OccasionDiscoveryProps> = ({ onSelectOccasion }) => {
  return (
    <section id="occasions" className="w-full bg-[#FAF6F0] py-16 sm:py-24 border-t border-[#E8D8C4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-2">
            <GoldDivider />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211B18] tracking-tight font-normal">
            Weaves by Occasion
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#635A55] max-w-md mx-auto mt-2">
            Every celebration deserves an authentic silhouette. Curated for your grandest chapters.
          </p>
        </div>

        {/* 4 OCCASION CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectOccasion(item.filterValue)}
              className="group relative rounded-2xl overflow-hidden shadow-luxury border border-[#E8D8C4] hover:border-[#B88A45] transition-all duration-300 aspect-[3/4] cursor-pointer flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Scrim for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B18] via-[#211B18]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>

              {/* Floating Tag */}
              <div className="relative z-10 mb-2">
                <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-[#E4C38E] bg-[#211B18]/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-[#B88A45]/30">
                  {item.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="relative z-10">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F8F1E7] font-normal tracking-tight group-hover:text-[#E4C38E] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#F8F1E7]/75 font-light mt-1 line-clamp-1">
                  {item.subtitle}
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs font-sans font-semibold text-[#B88A45] group-hover:text-[#F8F1E7] transition-colors">
                  <span>Discover Edits</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
