import React from 'react';
import { COLLECTIONS_DATA } from '../data/products';
import { GoldDivider } from './Ornament';
import { ArrowRight } from 'lucide-react';

interface CollectionCarouselProps {
  onSelectCollection: (categorySlug: string) => void;
}

export const CollectionCarousel: React.FC<CollectionCarouselProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="w-full bg-[#FAF6F0] py-14 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER WITH FLANKING GOLD ORNAMENTS */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B88A45]"></span>
            <svg className="w-5 h-5 text-[#B88A45]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 13.5 6 15.5 8C17 9.5 19.5 10 21.5 9.5C20.5 12 18 13.5 15.5 14C14.5 14.2 13 14.5 12 16C11 14.5 9.5 14.2 8.5 14C6 13.5 3.5 12 2.5 9.5C4.5 10 7 9.5 8.5 8C10.5 6 12 2 12 2Z" opacity="0.9" />
            </svg>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#211B18] tracking-tight font-normal px-2">
              Explore Our Collections
            </h2>
            <svg className="w-5 h-5 text-[#B88A45]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 13.5 6 15.5 8C17 9.5 19.5 10 21.5 9.5C20.5 12 18 13.5 15.5 14C14.5 14.2 13 14.5 12 16C11 14.5 9.5 14.2 8.5 14C6 13.5 3.5 12 2.5 9.5C4.5 10 7 9.5 8.5 8C10.5 6 12 2 12 2Z" opacity="0.9" />
            </svg>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B88A45]"></span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#635A55] max-w-md mx-auto">
            Discover the weave that tells your story. Authentic heritage textiles crafted for generations.
          </p>
        </div>

        {/* 5 COLLECTION CARDS GRID (HORIZONTAL SCROLL ON MOBILE, 5 COLUMNS ON DESKTOP) */}
        <div className="flex md:grid md:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
          {COLLECTIONS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCollection(item.slug)}
              className="group shrink-0 w-[240px] sm:w-[260px] md:w-auto snap-center bg-[#F3EADB]/60 rounded-xl overflow-hidden border border-[#E8D8C4] hover:border-[#B88A45]/70 transition-all duration-300 hover:shadow-luxury cursor-pointer flex flex-col"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#E8D8C4]/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Label and Action */}
              <div className="p-4 text-center flex flex-col justify-between grow">
                <h3 className="font-serif text-base sm:text-lg text-[#211B18] font-semibold group-hover:text-[#063B2C] transition-colors">
                  {item.name}
                </h3>
                
                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-sans font-medium text-[#B88A45] group-hover:text-[#8C6527] transition-colors">
                  <span>Explore</span>
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
