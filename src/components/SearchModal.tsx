import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS_DATA.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.zari.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        p.occasion.toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 flex items-start justify-center pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#B88A45]/40 overflow-hidden">
        
        {/* SEARCH INPUT BAR */}
        <div className="p-4 sm:p-5 border-b border-[#E8D8C4] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#B88A45] shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by weave, fabric, color, or occasion (e.g. 'Banarasi', 'Bridal', 'Gold Tissue')..."
            className="w-full bg-transparent font-sans text-sm sm:text-base text-[#211B18] placeholder-[#635A55]/60 focus:outline-none"
          />
          {query ? (
            <button onClick={() => setQuery('')} className="p-1 text-[#635A55] hover:text-[#211B18]">
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={onClose} className="p-1 text-[#635A55] hover:text-[#211B18]">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* QUICK SUGGESTIONS CHIPS */}
        <div className="px-5 py-3 bg-[#F3EADB]/40 border-b border-[#E8D8C4] flex items-center gap-2 overflow-x-auto text-xs font-sans">
          <span className="text-[#8C6527] font-semibold shrink-0">Popular:</span>
          {['Banarasi', 'Kanjivaram Bridal', 'Gold Tissue', 'Kora Organza', 'Emerald Green', 'Royal Purple'].map((chip) => (
            <button
              key={chip}
              onClick={() => setQuery(chip)}
              className="px-2.5 py-1 rounded-full bg-white border border-[#E8D8C4] hover:border-[#B88A45] text-[#211B18] shrink-0 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* RESULTS AREA */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="text-center py-10">
              <Sparkles className="w-8 h-8 text-[#B88A45] mx-auto mb-2" />
              <p className="font-serif text-base text-[#211B18]">Begin typing to explore our handloom archives</p>
              <p className="font-sans text-xs text-[#635A55] mt-1">Search over 9 curated authentic silk sarees</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-10">
              <p className="font-serif text-base text-[#211B18]">No handloom sarees found for "{query}".</p>
              <p className="font-sans text-xs text-[#635A55] mt-1">Try searching for "Banarasi", "Kora", "Silk", or "Red".</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E8D8C4]">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="py-3 flex items-center justify-between hover:bg-[#F3EADB]/40 px-2 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-12 h-14 object-cover rounded-md" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#211B18]">{product.name}</h4>
                      <p className="font-sans text-xs text-[#635A55]">{product.fabric}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-sm text-[#063B2C] block">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] font-sans text-[#B88A45] font-medium flex items-center justify-end gap-0.5">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
