import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { Heart, Eye, ShoppingBag, Filter, Sparkles, X, Check } from 'lucide-react';
import { GoldDivider } from './Ornament';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  selectedCategory,
  onCategoryChange,
}) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'all' && p.occasion !== selectedOccasion) {
        return false;
      }
      // Color filter
      if (selectedColor !== 'all' && p.color !== selectedColor) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured order
    });
  }, [selectedCategory, selectedOccasion, selectedColor, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setQuickAddedId(product.id);
    setTimeout(() => {
      setQuickAddedId(null);
    }, 1500);
  };

  const handleWishlistClick = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    setSelectedOccasion('all');
    setSelectedColor('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedOccasion !== 'all' || selectedColor !== 'all';

  return (
    <section id="catalog" className="w-full bg-[#FAF6F0] py-16 sm:py-20 border-t border-[#E8D8C4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <GoldDivider />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211B18] tracking-tight font-normal">
            The Ekatra Edit
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#635A55] max-w-md mx-auto mt-2">
            Exceptional weaves for moments worth remembering. Handloom authenticated pure silks.
          </p>
        </div>

        {/* FILTER & SORT CONTROLS BAR */}
        <div className="bg-[#F3EADB]/70 p-4 sm:p-5 rounded-2xl border border-[#E8D8C4] mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs font-sans">
              <span className="text-[#8C6527] font-semibold uppercase tracking-wider text-[11px] mr-1 hidden sm:inline">
                Weave:
              </span>
              {[
                { label: 'All Weaves', value: 'all' },
                { label: 'Banarasi', value: 'banarasi' },
                { label: 'Kanjivaram', value: 'kanjivaram' },
                { label: 'Kora Organza', value: 'kora' },
                { label: 'Chanderi', value: 'chanderi' },
                { label: 'Handloom Classic', value: 'handloom' },
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 font-medium ${
                    selectedCategory === cat.value
                      ? 'bg-[#063B2C] text-[#F8F1E7] shadow-sm'
                      : 'bg-white/70 text-[#211B18] hover:bg-white border border-[#E8D8C4]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Filter Dropdowns & Sorter */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
              {/* Occasion Filter */}
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                className="bg-white/80 border border-[#E8D8C4] rounded-lg px-3 py-1.5 text-[#211B18] focus:outline-none focus:ring-1 focus:ring-[#B88A45]"
              >
                <option value="all">All Occasions</option>
                <option value="wedding">Royal Wedding</option>
                <option value="festive">Festive Celebration</option>
                <option value="gifting">Heirloom Gifting</option>
                <option value="everyday">Everyday Elegance</option>
              </select>

              {/* Color Filter */}
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="bg-white/80 border border-[#E8D8C4] rounded-lg px-3 py-1.5 text-[#211B18] focus:outline-none focus:ring-1 focus:ring-[#B88A45]"
              >
                <option value="all">All Colors</option>
                <option value="red">Crimson Red</option>
                <option value="gold">Pure Gold Tissue</option>
                <option value="green">Emerald Green</option>
                <option value="blue">Midnight Blue</option>
                <option value="pink">Blush & Rani Pink</option>
                <option value="purple">Royal Purple</option>
                <option value="black">Midnight Black</option>
                <option value="yellow">Marigold Yellow</option>
              </select>

              {/* Sort Sorter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/80 border border-[#E8D8C4] rounded-lg px-3 py-1.5 text-[#211B18] focus:outline-none focus:ring-1 focus:ring-[#B88A45] font-medium"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>

              {/* Clear filters button if active */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-[#641B29] hover:underline flex items-center gap-1 font-medium ml-1"
                >
                  <X className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F3EADB]/30 rounded-2xl border border-dashed border-[#E8D8C4]">
            <Sparkles className="w-8 h-8 text-[#B88A45] mx-auto mb-3" />
            <p className="font-serif text-lg text-[#211B18]">No sarees match your selected combination.</p>
            <button
              onClick={clearAllFilters}
              className="mt-4 px-5 py-2 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-medium hover:bg-[#0A4D3A] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const wishlisted = isWishlisted(product.id);
              const isAdded = quickAddedId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-[#FAF6F0] rounded-xl overflow-hidden border border-[#E8D8C4] hover:border-[#B88A45]/80 transition-all duration-300 hover:shadow-luxury flex flex-col cursor-pointer"
                >
                  {/* Image container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#E8D8C4]/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#063B2C]/90 text-[#F8F1E7] text-[10px] uppercase font-sans tracking-wider px-2.5 py-1 rounded-sm backdrop-blur-sm border border-[#B88A45]/40 font-medium">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => handleWishlistClick(product, e)}
                      aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                        wishlisted
                          ? 'bg-[#641B29] text-white'
                          : 'bg-white/80 hover:bg-white text-[#211B18] hover:text-[#641B29]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? 'fill-white' : ''}`} />
                    </button>

                    {/* Quick View Overlay on Desktop Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProduct(product);
                        }}
                        className="px-4 py-1.5 bg-[#FAF6F0]/95 hover:bg-white text-[#211B18] rounded-full text-xs font-sans font-medium flex items-center gap-1.5 shadow-md transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#B88A45]" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-4 flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-sans text-[#B88A45] font-semibold uppercase tracking-wider mb-1">
                        <span>{product.category}</span>
                        <span className="text-[#635A55] normal-case text-[10px] font-normal">{product.fabric.split(' ')[0]} Silk</span>
                      </div>

                      <h3 className="font-serif text-base text-[#211B18] font-semibold group-hover:text-[#063B2C] transition-colors leading-snug line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="font-sans text-xs text-[#635A55] mt-1 line-clamp-1 font-light">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Price and Add to Bag */}
                    <div className="mt-4 pt-3 border-t border-[#E8D8C4]/60 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-lg font-bold text-[#211B18]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-[#635A55] line-through font-sans">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        {product.discount && (
                          <span className="text-[10px] font-sans font-semibold text-[#063B2C] block">
                            {product.discount}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        aria-label="Add to Bag"
                        className={`px-3 py-2 rounded-full font-sans text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                          isAdded
                            ? 'bg-[#063B2C] text-[#F8F1E7]'
                            : 'bg-[#F3EADB] hover:bg-[#063B2C] text-[#211B18] hover:text-[#F8F1E7] border border-[#E8D8C4]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#B88A45]" />
                            <span className="hidden sm:inline">Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
