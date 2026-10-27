import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS_DATA } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CollectionCarousel } from './components/CollectionCarousel';
import { CraftsmanshipBanner } from './components/CraftsmanshipBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandStory } from './components/BrandStory';
import { OccasionDiscovery } from './components/OccasionDiscovery';
import { SareeFinder } from './components/SareeFinder';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';

export const App: React.FC = () => {
  // 1. CART STATE (with localStorage persistence)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ekatra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ekatra_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // 2. WISHLIST STATE (with localStorage persistence)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('ekatra_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ekatra_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  // 3. UI MODALS & DRAWERS
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 4. FILTER STATE
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // TOAST NOTIFICATIONS
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // CART HANDLERS
  const handleAddToCart = (product: Product, quantity = 1, unstitchedBlouse = true) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, unstitchedBlouse }];
    });
    showToast(`Added "${product.name}" to your shopping bag.`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // WISHLIST HANDLERS
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some((p) => p.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((p) => p.id !== product.id));
      showToast(`Removed from your wishlist.`);
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Added to your favorites wishlist.`);
    }
  };

  const isWishlisted = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const handleMoveToCart = (product: Product) => {
    handleAddToCart(product, 1, true);
    setWishlist((prev) => prev.filter((p) => p.id !== product.id));
  };

  // NAVIGATION HANDLER
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCollection = (slug: string) => {
    if (slug === 'new-arrivals') {
      setSelectedCategory('all');
    } else {
      setSelectedCategory(slug);
    }
    scrollToSection('catalog');
  };

  const handleSelectOccasion = (occasionValue: string) => {
    setSelectedCategory('all');
    scrollToSection('catalog');
    showToast(`Filtering for ${occasionValue.toUpperCase()} handlooms.`);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col text-[#211B18] relative selection:bg-[#B88A45]/20 selection:text-[#063B2C]">
      
      {/* 1. TOP ANNOUNCEMENT & NAVIGATION BAR */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalog');
        }}
        onNavigateSection={scrollToSection}
      />

      {/* 2. HERO SECTION (High Priority Reference Match) */}
      <Hero
        onShopCollection={() => {
          setSelectedCategory('all');
          scrollToSection('catalog');
        }}
        onOurStory={() => scrollToSection('story')}
      />

      {/* 3. VALUE PROPOSITION / TRUST STRIP */}
      <TrustStrip />

      {/* 4. EXPLORE OUR COLLECTIONS (5 Visual Cards from Reference) */}
      <CollectionCarousel onSelectCollection={handleSelectCollection} />

      {/* 5. CRAFTSMANSHIP BANNER ("The Art of Handloom" Reference Match) */}
      <CraftsmanshipBanner onMeetArtisans={() => scrollToSection('story')} />

      {/* 6. FEATURED PRODUCTS CATALOG ("The Ekatra Edit") */}
      <ProductCatalog
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p) => handleAddToCart(p, 1, true)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isWishlisted}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* 7. WEAVES BY OCCASION */}
      <OccasionDiscovery onSelectOccasion={handleSelectOccasion} />

      {/* 8. INTERACTIVE SAREE FINDER RECOMMENDATION WIZARD */}
      <SareeFinder onSelectProduct={(p) => setSelectedProduct(p)} />

      {/* 9. BRAND STORYTELLING ("More Than a Saree. A Story Woven in Time.") */}
      <BrandStory onExploreHeritage={() => scrollToSection('craft')} />

      {/* 10. LUXURY FOOTER & NEWSLETTER SIGNUP */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToSection('catalog');
        }}
        onNavigateSection={scrollToSection}
      />

      {/* 11. FLOATING WHATSAPP CONCIERGE BUTTON */}
      <WhatsAppButton phoneNumber="919820012345" />

      {/* 12. PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onSelectRelated={(p) => setSelectedProduct(p)}
        allProducts={PRODUCTS_DATA}
      />

      {/* 13. CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onContinueShopping={() => scrollToSection('catalog')}
      />

      {/* 14. WISHLIST DRAWER */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveFromWishlist={(id) => setWishlist((prev) => prev.filter((p) => p.id !== id))}
        onMoveToCart={handleMoveToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 15. SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 16. ACCOUNT MODAL */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* 17. TOAST NOTIFICATION POPUP */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#063B2C] text-[#F8F1E7] border border-[#B88A45]/60 px-5 py-2.5 rounded-full shadow-2xl font-sans text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="text-[#B88A45]">✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default App;
