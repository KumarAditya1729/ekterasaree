import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { CornerMandala } from './Ornament';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onSelectCategory: (category: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onSelectCategory,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sareesDropdownOpen, setSareesDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="relative bg-[#063B2C] text-[#F8F1E7] text-xs py-2 px-4 overflow-hidden border-b border-[#B88A45]/30">
        <CornerMandala className="absolute -left-2 -top-1 w-16 h-10 pointer-events-none hidden sm:block" />
        <CornerMandala className="absolute -right-2 -top-1 w-16 h-10 pointer-events-none hidden sm:block" flip />

        <div className="max-w-7xl mx-auto flex items-center justify-center font-sans tracking-wider text-[11px] sm:text-xs">
          <span className="text-[#B88A45] mr-2">✦</span>
          <span className="font-medium text-[#F8F1E7]/90 text-center">
            Authentic Indian Handlooms <span className="text-[#B88A45]/60 mx-2">|</span> Heritage Weaves <span className="text-[#B88A45]/60 mx-2">|</span> Worldwide Shipping
          </span>
          <span className="text-[#B88A45] ml-2">✦</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full bg-[#FAF6F0] border-b border-[#E8D8C4] transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5 bg-[#FAF6F0]/95 backdrop-blur-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu trigger */}
            <button 
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#211B18] hover:text-[#063B2C] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* BRAND LOGO */}
            <div 
              onClick={() => onNavigateSection('hero')} 
              className="cursor-pointer flex items-center shrink-0 group py-1"
            >
              <img 
                src="/images/logo.png" 
                alt="House of Ekatra - Authentic Indian Handlooms" 
                className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback to high-res typographic mark if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = document.getElementById('logo-text-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div id="logo-text-fallback" className="hidden text-center">
                <span className="block text-[9px] tracking-[0.25em] text-[#B88A45] uppercase font-sans font-medium">House of</span>
                <span className="text-xl sm:text-2xl font-serif tracking-[0.15em] text-[#641B29] font-bold">EKATRA</span>
              </div>
            </div>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden lg:flex items-center space-x-7 font-sans text-[13px] tracking-wide text-[#211B18] font-medium">
              {/* Sarees Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setSareesDropdownOpen(true)}
                onMouseLeave={() => setSareesDropdownOpen(false)}
              >
                <button 
                  onClick={() => onSelectCategory('all')}
                  className="flex items-center gap-1 hover:text-[#063B2C] transition-colors group cursor-pointer"
                >
                  <span>Sarees</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#B88A45] transition-transform duration-200 ${sareesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {sareesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-[#FAF6F0] rounded-b-md shadow-luxury border border-[#E8D8C4] py-3 px-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#B88A45] font-semibold border-b border-[#E8D8C4]/60 mb-2">
                      By Handloom Weave
                    </div>
                    {[
                      { name: 'Banarasi Silk Sarees', cat: 'banarasi' },
                      { name: 'Kanjivaram Silk Sarees', cat: 'kanjivaram' },
                      { name: 'Kora Organza Sarees', cat: 'kora' },
                      { name: 'Chanderi Handloom Sarees', cat: 'chanderi' },
                      { name: 'All Handloom Sarees', cat: 'all' },
                    ].map((item) => (
                      <button
                        key={item.cat}
                        onClick={() => {
                          onSelectCategory(item.cat);
                          setSareesDropdownOpen(false);
                          onNavigateSection('catalog');
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-[#211B18] hover:bg-[#F0E6D8] hover:text-[#063B2C] rounded transition-colors flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <span className="text-[#B88A45] opacity-0 hover:opacity-100 text-xs">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Collections Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setCollectionsDropdownOpen(true)}
                onMouseLeave={() => setCollectionsDropdownOpen(false)}
              >
                <button 
                  onClick={() => onNavigateSection('collections')}
                  className="flex items-center gap-1 hover:text-[#063B2C] transition-colors group cursor-pointer"
                >
                  <span>Collections</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#B88A45] transition-transform duration-200 ${collectionsDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
                </button>

                {collectionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-60 bg-[#FAF6F0] rounded-b-md shadow-luxury border border-[#E8D8C4] py-3 px-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#B88A45] font-semibold border-b border-[#E8D8C4]/60 mb-2">
                      Curated Editions
                    </div>
                    {[
                      { name: 'The Ekatra Edit', anchor: 'catalog' },
                      { name: 'Festive Grandeur', anchor: 'occasions' },
                      { name: 'Royal Bridal Trousseau', anchor: 'occasions' },
                      { name: 'Heirloom Gifting', anchor: 'occasions' },
                      { name: 'Explore All Collections', anchor: 'collections' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateSection(item.anchor);
                          setCollectionsDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs text-[#211B18] hover:bg-[#F0E6D8] hover:text-[#063B2C] rounded transition-colors flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <span className="text-[#B88A45] opacity-0 hover:opacity-100 text-xs">→</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  onSelectCategory('all');
                  onNavigateSection('catalog');
                }}
                className="hover:text-[#063B2C] transition-colors relative group py-2 cursor-pointer"
              >
                <span>New Arrivals</span>
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button 
                onClick={() => onNavigateSection('story')}
                className="hover:text-[#063B2C] transition-colors relative group py-2 cursor-pointer"
              >
                <span>Our Story</span>
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button 
                onClick={() => onNavigateSection('craft')}
                className="hover:text-[#063B2C] transition-colors relative group py-2 cursor-pointer"
              >
                <span>Crafts</span>
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button 
                onClick={() => onNavigateSection('finder')}
                className="hover:text-[#063B2C] transition-colors relative group py-2 cursor-pointer flex items-center gap-1 text-[#063B2C]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B88A45]" />
                <span className="font-semibold">Saree Finder</span>
              </button>

              <button 
                onClick={() => onNavigateSection('footer')}
                className="hover:text-[#063B2C] transition-colors relative group py-2 cursor-pointer"
              >
                <span>Contact</span>
                <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-[#B88A45] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* RIGHT UTILITY ICONS */}
            <div className="flex items-center space-x-4 sm:space-x-5 text-[#211B18]">
              {/* Search */}
              <button 
                id="search-button"
                onClick={onOpenSearch}
                aria-label="Search Sarees"
                className="p-1.5 hover:text-[#063B2C] transition-colors hover:scale-105 duration-200"
              >
                <Search className="w-5 h-5 stroke-[1.7]" />
              </button>

              {/* Wishlist */}
              <button 
                id="wishlist-button"
                onClick={onOpenWishlist}
                aria-label="Wishlist"
                className="p-1.5 hover:text-[#641B29] transition-colors hover:scale-105 duration-200 relative"
              >
                <Heart className={`w-5 h-5 stroke-[1.7] ${wishlistCount > 0 ? 'fill-[#641B29] text-[#641B29]' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#641B29] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Account */}
              <button 
                id="account-button"
                onClick={onOpenAccount}
                aria-label="Customer Account"
                className="p-1.5 hover:text-[#063B2C] transition-colors hover:scale-105 duration-200 hidden sm:block"
              >
                <User className="w-5 h-5 stroke-[1.7]" />
              </button>

              {/* Shopping Bag with live count badge */}
              <button 
                id="cart-button"
                onClick={onOpenCart}
                aria-label="Shopping Bag"
                className="p-1.5 hover:text-[#063B2C] transition-colors hover:scale-105 duration-200 relative"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.7]" />
                <span className="absolute -top-1 -right-1.5 bg-[#063B2C] text-[#F8F1E7] text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold border border-[#B88A45]/40">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 bg-[#FAF6F0] z-50 border-t border-[#E8D8C4] overflow-y-auto px-6 py-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-5 text-base font-serif">
              <div className="border-b border-[#E8D8C4] pb-4">
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#B88A45]">Explore Weaves</span>
                <div className="grid grid-cols-2 gap-2 mt-3 font-sans text-sm">
                  <button 
                    onClick={() => { onSelectCategory('banarasi'); setMobileMenuOpen(false); onNavigateSection('catalog'); }}
                    className="text-left py-1.5 px-2.5 rounded bg-[#F0E6D8]/60 text-[#211B18] font-medium"
                  >
                    Banarasi Silk
                  </button>
                  <button 
                    onClick={() => { onSelectCategory('kanjivaram'); setMobileMenuOpen(false); onNavigateSection('catalog'); }}
                    className="text-left py-1.5 px-2.5 rounded bg-[#F0E6D8]/60 text-[#211B18] font-medium"
                  >
                    Kanjivaram
                  </button>
                  <button 
                    onClick={() => { onSelectCategory('kora'); setMobileMenuOpen(false); onNavigateSection('catalog'); }}
                    className="text-left py-1.5 px-2.5 rounded bg-[#F0E6D8]/60 text-[#211B18] font-medium"
                  >
                    Kora Organza
                  </button>
                  <button 
                    onClick={() => { onSelectCategory('chanderi'); setMobileMenuOpen(false); onNavigateSection('catalog'); }}
                    className="text-left py-1.5 px-2.5 rounded bg-[#F0E6D8]/60 text-[#211B18] font-medium"
                  >
                    Chanderi Handloom
                  </button>
                </div>
              </div>

              <button 
                onClick={() => { onNavigateSection('collections'); setMobileMenuOpen(false); }}
                className="text-left text-lg text-[#211B18] hover:text-[#063B2C] border-b border-[#E8D8C4]/60 pb-3"
              >
                All Collections
              </button>

              <button 
                onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); onNavigateSection('catalog'); }}
                className="text-left text-lg text-[#211B18] hover:text-[#063B2C] border-b border-[#E8D8C4]/60 pb-3"
              >
                The Ekatra Edit (Catalog)
              </button>

              <button 
                onClick={() => { onNavigateSection('story'); setMobileMenuOpen(false); }}
                className="text-left text-lg text-[#211B18] hover:text-[#063B2C] border-b border-[#E8D8C4]/60 pb-3"
              >
                Our Heritage Story
              </button>

              <button 
                onClick={() => { onNavigateSection('craft'); setMobileMenuOpen(false); }}
                className="text-left text-lg text-[#211B18] hover:text-[#063B2C] border-b border-[#E8D8C4]/60 pb-3"
              >
                The Art of Handloom
              </button>

              <button 
                onClick={() => { onNavigateSection('finder'); setMobileMenuOpen(false); }}
                className="text-left text-lg text-[#063B2C] font-semibold border-b border-[#E8D8C4]/60 pb-3 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#B88A45]" />
                Interactive Saree Finder
              </button>

              <button 
                onClick={() => { onNavigateSection('footer'); setMobileMenuOpen(false); }}
                className="text-left text-lg text-[#211B18] hover:text-[#063B2C] pb-3"
              >
                Contact & Concierge
              </button>

              <div className="pt-4 border-t border-[#E8D8C4] flex items-center justify-between font-sans text-xs text-[#635A55]">
                <span>Concierge: +91 98200 12345</span>
                <span>Worldwide Delivery</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
