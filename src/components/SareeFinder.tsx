import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { Sparkles, RotateCcw, ArrowRight, Check, Eye } from 'lucide-react';
import { GoldDivider } from './Ornament';

interface SareeFinderProps {
  onSelectProduct: (product: Product) => void;
}

export const SareeFinder: React.FC<SareeFinderProps> = ({ onSelectProduct }) => {
  const [step, setStep] = useState<number>(1);
  const [occasion, setOccasion] = useState<string>('wedding');
  const [color, setColor] = useState<string>('red');
  const [budget, setBudget] = useState<number>(60000);
  const [weave, setWeave] = useState<string>('any');

  const handleReset = () => {
    setStep(1);
    setOccasion('wedding');
    setColor('red');
    setBudget(60000);
    setWeave('any');
  };

  // Find matching products
  const matches = PRODUCTS_DATA.filter((p) => {
    const matchOccasion = p.occasion === occasion;
    const matchColor = color === 'any' || p.color === color;
    const matchBudget = p.price <= budget;
    const matchWeave = weave === 'any' || p.category === weave;
    return (matchOccasion || matchColor) && matchBudget;
  }).slice(0, 3);

  return (
    <section id="finder" className="w-full bg-[#FAF6F0] py-16 sm:py-24 border-t border-[#E8D8C4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <GoldDivider />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EADB] text-[#8C6527] text-xs font-sans font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B88A45]" />
            Bespoke Recommendation Wizard
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#211B18] tracking-tight">
            The Ekatra Saree Finder
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#635A55] max-w-md mx-auto mt-2">
            Tell us about your event, preferred tones, and budget — we will match you with authentic artisan weaves.
          </p>
        </div>

        {/* WIZARD CARD */}
        <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl border-2 border-[#E8D8C4] p-6 sm:p-10 shadow-luxury">
          
          {/* STEP INDICATORS */}
          <div className="flex items-center justify-between max-w-md mx-auto mb-8 border-b border-[#E8D8C4] pb-4">
            {[
              { num: 1, label: 'Occasion' },
              { num: 2, label: 'Palette' },
              { num: 3, label: 'Budget & Style' },
              { num: 4, label: 'Curated Matches' },
            ].map((s) => (
              <div 
                key={s.num} 
                onClick={() => { if (step > s.num) setStep(s.num); }}
                className={`flex flex-col items-center cursor-pointer transition-colors ${
                  step === s.num ? 'text-[#063B2C]' : step > s.num ? 'text-[#B88A45]' : 'text-[#635A55]/50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-bold mb-1 ${
                  step === s.num 
                    ? 'bg-[#063B2C] text-[#F8F1E7]' 
                    : step > s.num 
                    ? 'bg-[#E8D8C4] text-[#8C6527]' 
                    : 'bg-white border border-[#E8D8C4] text-[#635A55]'
                }`}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <span className="text-[10px] sm:text-xs font-sans font-medium hidden sm:inline">{s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: OCCASION */}
          {step === 1 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-serif text-xl sm:text-2xl text-[#211B18] text-center mb-6">
                What occasion are you dressing for?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {[
                  { id: 'wedding', label: 'Royal Wedding / Bridal', desc: 'Opulent Kanjivaram & Zari' },
                  { id: 'festive', label: 'Festive Celebration', desc: 'Diwali, Puja & Family Events' },
                  { id: 'gifting', label: 'Heirloom Gifting', desc: 'Shubh Agaman & Trousseau' },
                  { id: 'everyday', label: 'Everyday Luxury', desc: 'Chanderi & Breathable Weaves' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setOccasion(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                      occasion === item.id
                        ? 'border-[#063B2C] bg-[#063B2C]/5 shadow-sm ring-1 ring-[#063B2C]'
                        : 'border-[#E8D8C4] bg-white hover:border-[#B88A45]'
                    }`}
                  >
                    <div className="font-serif font-semibold text-sm text-[#211B18]">{item.label}</div>
                    <div className="text-[11px] font-sans text-[#635A55] mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end mt-8 max-w-2xl mx-auto">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-[#0A4D3A] transition-colors"
                >
                  <span>Next: Choose Color</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: COLOR */}
          {step === 2 && (
            <div className="animate-in fade-in duration-300">
              <h3 className="font-serif text-xl sm:text-2xl text-[#211B18] text-center mb-6">
                Choose your desired royal palette
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {[
                  { id: 'red', name: 'Crimson & Sindoor Red', bg: '#8B1E2D' },
                  { id: 'green', name: 'Emerald & Forest Green', bg: '#063B2C' },
                  { id: 'gold', name: 'Swarna Metallic Gold', bg: '#B88A45' },
                  { id: 'blue', name: 'Midnight Neelambari Blue', bg: '#1C2951' },
                  { id: 'pink', name: 'Gulabi Blush & Rani Pink', bg: '#D1587A' },
                  { id: 'purple', name: 'Rajvanshi Royal Purple', bg: '#4B1A59' },
                  { id: 'yellow', name: 'Basanti Marigold Yellow', bg: '#D89E13' },
                  { id: 'any', name: 'Surprise Me / Any Tone', bg: '#E8D8C4' },
                ].map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setColor(col.id)}
                    className={`p-3 rounded-xl flex items-center gap-3 border transition-all cursor-pointer ${
                      color === col.id
                        ? 'border-[#063B2C] bg-[#063B2C]/5 ring-1 ring-[#063B2C]'
                        : 'border-[#E8D8C4] bg-white hover:border-[#B88A45]'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full shrink-0 border border-black/10 shadow-inner"
                      style={{ backgroundColor: col.bg }}
                    ></span>
                    <span className="font-sans text-xs text-[#211B18] font-medium text-left">{col.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8 max-w-2xl mx-auto">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 border border-[#E8D8C4] text-[#211B18] rounded-full text-xs font-sans hover:bg-[#F3EADB]"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-[#0A4D3A] transition-colors"
                >
                  <span>Next: Budget & Weave</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET & WEAVE */}
          {step === 3 && (
            <div className="animate-in fade-in duration-300 max-w-2xl mx-auto">
              <h3 className="font-serif text-xl sm:text-2xl text-[#211B18] text-center mb-6">
                Refine by budget and preferred weave
              </h3>

              <div className="mb-6 bg-white p-5 rounded-xl border border-[#E8D8C4]">
                <div className="flex justify-between text-xs font-sans mb-2">
                  <span className="text-[#635A55]">Maximum Budget:</span>
                  <span className="font-bold text-[#063B2C] text-sm">₹{budget.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="65000"
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[#063B2C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#635A55] mt-1 font-sans">
                  <span>₹25,000</span>
                  <span>₹45,000</span>
                  <span>₹65,000+</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-sans font-semibold text-[#211B18] mb-2 uppercase tracking-wider">
                  Preferred Handloom Craft:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-sans">
                  {[
                    { id: 'any', label: 'All Heritage Weaves' },
                    { id: 'banarasi', label: 'Varanasi Banarasi Silk' },
                    { id: 'kanjivaram', label: 'Kanchipuram Silk' },
                    { id: 'kora', label: 'Kora Organza' },
                    { id: 'chanderi', label: 'Chanderi Handloom' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setWeave(w.id)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        weave === w.id
                          ? 'border-[#063B2C] bg-[#063B2C] text-[#F8F1E7]'
                          : 'border-[#E8D8C4] bg-white text-[#211B18] hover:border-[#B88A45]'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 border border-[#E8D8C4] text-[#211B18] rounded-full text-xs font-sans hover:bg-[#F3EADB]"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-7 py-2.5 bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18] font-bold rounded-full text-xs font-sans flex items-center gap-1.5 shadow-md"
                >
                  <span>See Curated Matches ✨</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CURATED MATCHES */}
          {step === 4 && (
            <div className="animate-in fade-in duration-300">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl text-[#211B18]">
                  Handpicked Weaves For Your Occasion
                </h3>
                <p className="text-xs font-sans text-[#635A55] mt-1">
                  Matched based on your preferred style and price criteria.
                </p>
              </div>

              {matches.length === 0 ? (
                <div className="text-center py-8">
                  <p className="font-serif text-base text-[#211B18]">No direct matches within this strict price range.</p>
                  <button
                    onClick={handleReset}
                    className="mt-3 px-5 py-2 bg-[#063B2C] text-white rounded-full text-xs font-sans"
                  >
                    Reset Saree Finder
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {matches.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="group bg-white rounded-xl overflow-hidden border border-[#E8D8C4] hover:border-[#B88A45] shadow-sm hover:shadow-luxury transition-all cursor-pointer flex flex-col"
                    >
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-2 left-2 bg-[#063B2C] text-[#F8F1E7] text-[9px] uppercase px-2 py-0.5 rounded font-sans">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-3.5 flex flex-col justify-between grow">
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-[#211B18] group-hover:text-[#063B2C] line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="font-sans text-[11px] text-[#635A55] mt-0.5 line-clamp-1">
                            {product.fabric}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#E8D8C4]/60 flex items-center justify-between">
                          <span className="font-serif font-bold text-sm text-[#211B18]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[11px] text-[#B88A45] font-semibold flex items-center gap-0.5">
                            <Eye className="w-3 h-3" /> View
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center mt-8">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 border border-[#E8D8C4] text-[#211B18] rounded-full text-xs font-sans hover:bg-[#F3EADB] flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3 text-[#B88A45]" />
                  <span>Start Again</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
