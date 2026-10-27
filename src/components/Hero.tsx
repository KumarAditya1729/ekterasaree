import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { HERO_SLIDES } from '../data/products';
import { GoldDivider } from './Ornament';

interface HeroProps {
  onShopCollection: () => void;
  onOurStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopCollection, onOurStory }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  // Auto advance slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlideIndex, isAnimating]);

  return (
    <section 
      id="hero" 
      className="relative w-full overflow-hidden bg-[#3B0C15] select-none"
      style={{ minHeight: '520px' }}
      aria-label="House of Ekatra Hero Banner"
    >
      {/* BACKGROUND GRADIENT & IMAGE CONTAINER */}
      <div className="relative w-full h-full min-h-[520px] lg:h-[600px] flex flex-col lg:flex-row">
        
        {/* LEFT TEXT PANEL (Dark burgundy / maroon heritage background) */}
        <div className="w-full lg:w-[48%] bg-gradient-to-r from-[#3B0C15] via-[#541421] to-[#641B29] lg:to-transparent z-10 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 lg:pr-8 py-12 lg:py-0 relative">
          
          {/* Subtle floral watermark in background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B88A45_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
            {/* Traditional Gold Ornament Divider */}
            <div className="flex justify-start mb-4">
              <GoldDivider className="scale-90 origin-left" />
            </div>

            {/* Editorial Serif Headline matching reference */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#F8F1E7] leading-[1.12] tracking-tight mb-5 font-normal">
              {currentSlide.titleLines.map((line, idx) => (
                <span key={idx} className="block italic">
                  {line}
                </span>
              ))}
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#F8F1E7]/85 font-sans leading-relaxed mb-8 max-w-md font-light">
              {currentSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Pill Button: Amber Gold with dark charcoal text */}
              <button
                id="hero-primary-cta"
                onClick={onShopCollection}
                className="bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18] font-sans font-medium text-xs sm:text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-gold-glow flex items-center gap-2 group cursor-pointer"
              >
                <span>{currentSlide.ctaText}</span>
              </button>

              {/* Secondary Pill Button: Maroon with gold border & Play icon */}
              <button
                id="hero-secondary-cta"
                onClick={onOurStory}
                className="bg-[#48111D]/80 hover:bg-[#641B29] text-[#F8F1E7] border border-[#B88A45]/60 hover:border-[#B88A45] font-sans text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group cursor-pointer backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 fill-[#B88A45] text-[#B88A45] transition-transform group-hover:scale-110" />
                <span>{currentSlide.secondaryCtaText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL (Hero Editorial Photograph) */}
        <div className="w-full lg:w-[52%] relative min-h-[360px] lg:min-h-[600px] overflow-hidden">
          {/* Subtle gradient feathering on left to blend smoothly with maroon background */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#3B0C15] to-transparent z-10 hidden lg:block pointer-events-none"></div>

          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlideIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.altText}
                className="w-full h-full object-cover object-center lg:object-right transition-transform duration-1000 ease-out"
                style={{
                  transform: idx === currentSlideIndex ? 'scale(1)' : 'scale(1.05)',
                }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              {/* Subtle warm amber/vignette overlay for editorial warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211B18]/50 via-transparent to-transparent lg:hidden"></div>
            </div>
          ))}
        </div>

        {/* PREVIOUS SLIDE ARROW BUTTON */}
        <button
          id="hero-prev-slide"
          onClick={goToPrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#211B18]/60 hover:bg-[#211B18]/90 border border-white/20 hover:border-[#B88A45] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* NEXT SLIDE ARROW BUTTON */}
        <button
          id="hero-next-slide"
          onClick={goToNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#211B18]/60 hover:bg-[#211B18]/90 border border-white/20 hover:border-[#B88A45] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* BOTTOM PAGINATION DOTS (matching the reference 5 dots style) */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-center space-x-2">
          {[0, 1, 2, 3, 4].map((dotIdx) => {
            const isActive = dotIdx === currentSlideIndex;
            return (
              <button
                key={dotIdx}
                onClick={() => {
                  if (dotIdx < HERO_SLIDES.length) {
                    setCurrentSlideIndex(dotIdx);
                  }
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-[#F8F1E7] shadow-sm'
                    : 'w-2 h-2 bg-[#F8F1E7]/40 hover:bg-[#F8F1E7]/70'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
