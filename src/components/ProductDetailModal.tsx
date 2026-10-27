import React, { useState } from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, ShieldCheck, Clock, MapPin, Sparkles, Check, MessageSquare } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, unstitchedBlouse: boolean) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onSelectRelated: (product: Product) => void;
  allProducts: Product[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onSelectRelated,
  allProducts,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [includeBlouse, setIncludeBlouse] = useState<boolean>(true);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAdd = () => {
    onAddToCart(product, quantity, includeBlouse);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Namaste House of Ekatra! I am interested in inquiring about the "${product.name}" (Price: ₹${product.price.toLocaleString('en-IN')}, SKU: ${product.id}). Could you share more details on availability and styling?`
    );
    window.open(`https://wa.me/919820012345?text=${text}`, '_blank');
  };

  const related = allProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-4xl bg-[#FAF6F0] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#B88A45]/40 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close Product Detail"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#211B18] flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="overflow-y-auto p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            
            {/* LEFT: GALLERY */}
            <div className="md:col-span-6 flex flex-col space-y-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#E8D8C4]/40 border border-[#E8D8C4]">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#063B2C] text-[#F8F1E7] text-[10px] font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-sm border border-[#B88A45]/40">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* THUMBNAILS */}
              {imagesList.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {imagesList.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImage === imgUrl ? 'border-[#063B2C] shadow-sm' : 'border-[#E8D8C4] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: DETAILS */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-sans text-[#B88A45] font-semibold uppercase tracking-wider mb-1.5">
                  <span>{product.category} Heritage Collection</span>
                  <span className="text-[#635A55] normal-case text-[11px]">SKU: {product.id}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#211B18] font-normal leading-tight">
                  {product.name}
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#635A55] mt-1 mb-4">
                  {product.subtitle}
                </p>

                {/* PRICING */}
                <div className="flex items-baseline gap-3 pb-4 border-b border-[#E8D8C4]">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#211B18]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-sans text-[#635A55] line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {product.discount && (
                    <span className="text-xs font-sans font-semibold text-[#063B2C] bg-[#063B2C]/10 px-2 py-0.5 rounded">
                      Save {product.discount}
                    </span>
                  )}
                </div>

                {/* SPECIFICATIONS GRID */}
                <div className="grid grid-cols-2 gap-2.5 py-4 border-b border-[#E8D8C4] font-sans text-xs">
                  <div className="bg-white/70 p-2.5 rounded-lg border border-[#E8D8C4]/60">
                    <span className="text-[#8C6527] font-semibold block text-[10px] uppercase">Fabric:</span>
                    <span className="text-[#211B18]">{product.fabric}</span>
                  </div>
                  <div className="bg-white/70 p-2.5 rounded-lg border border-[#E8D8C4]/60">
                    <span className="text-[#8C6527] font-semibold block text-[10px] uppercase">Zari Quality:</span>
                    <span className="text-[#211B18]">{product.zari}</span>
                  </div>
                  <div className="bg-white/70 p-2.5 rounded-lg border border-[#E8D8C4]/60">
                    <span className="text-[#8C6527] font-semibold block text-[10px] uppercase flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> Weaving Dedication:
                    </span>
                    <span className="text-[#211B18]">{product.specs.weaveTime}</span>
                  </div>
                  <div className="bg-white/70 p-2.5 rounded-lg border border-[#E8D8C4]/60">
                    <span className="text-[#8C6527] font-semibold block text-[10px] uppercase flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" /> Artisan Guild:
                    </span>
                    <span className="text-[#211B18]">{product.specs.origin}</span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="py-4 border-b border-[#E8D8C4]">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#211B18] mb-1.5">
                    Weave Description & Craft
                  </h4>
                  <p className="font-sans text-xs text-[#635A55] leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                {/* BLOUSE PIECE OPTION */}
                <div className="py-3.5 border-b border-[#E8D8C4] flex items-center justify-between font-sans text-xs">
                  <div>
                    <span className="font-semibold text-[#211B18] block">Unstitched Blouse Piece:</span>
                    <span className="text-[11px] text-[#635A55]">{product.specs.blousePiece}</span>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeBlouse}
                      onChange={(e) => setIncludeBlouse(e.target.checked)}
                      className="accent-[#063B2C] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-[#063B2C] font-medium">Included</span>
                  </label>
                </div>

                {/* QUANTITY & ACTIONS */}
                <div className="py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  
                  {/* Quantity */}
                  <div className="flex items-center border border-[#E8D8C4] rounded-full bg-white px-2 self-start sm:self-auto">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 text-[#211B18] font-bold text-sm hover:text-[#063B2C]"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-sans font-semibold text-xs text-[#211B18]">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 text-[#211B18] font-bold text-sm hover:text-[#063B2C]"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Bag */}
                  <button
                    onClick={handleAdd}
                    className={`grow px-6 py-3 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      addedSuccess
                        ? 'bg-[#063B2C] text-[#F8F1E7]'
                        : 'bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18]'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-[#B88A45]" />
                        <span>Added To Your Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Shopping Bag</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`w-11 h-11 rounded-full border border-[#E8D8C4] flex items-center justify-center shrink-0 transition-colors ${
                      isWishlisted ? 'bg-[#641B29] text-white border-[#641B29]' : 'bg-white hover:bg-[#F3EADB] text-[#211B18]'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                  </button>
                </div>

                {/* WHATSAPP CONSULTATION LINK */}
                <div className="mt-2">
                  <button
                    onClick={handleWhatsAppEnquiry}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#25D366]/60 bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 transition-colors text-xs font-sans font-medium flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire with Ekatra Concierge on WhatsApp</span>
                  </button>
                </div>

              </div>

              {/* CARE INSTRUCTIONS */}
              <div className="mt-5 pt-3 border-t border-[#E8D8C4] font-sans text-[11px] text-[#635A55]">
                <span className="font-semibold text-[#211B18] block mb-1">Care & Preservation:</span>
                <p>Dry clean only. Store wrapped in unbleached mulmul cloth. Refold periodically to protect fine gold zari.</p>
              </div>

            </div>

          </div>

          {/* RELATED PRODUCTS */}
          {related.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#E8D8C4]">
              <h4 className="font-serif text-lg text-[#211B18] mb-3">You May Also Admire</h4>
              <div className="grid grid-cols-3 gap-3">
                {related.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectRelated(rel);
                      setActiveImage(rel.image);
                    }}
                    className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-[#E8D8C4] hover:border-[#B88A45] cursor-pointer transition-colors"
                  >
                    <img src={rel.image} alt="" className="w-12 h-14 object-cover rounded" />
                    <div>
                      <div className="font-serif text-xs font-semibold text-[#211B18] line-clamp-1">{rel.name}</div>
                      <div className="font-serif text-xs font-bold text-[#063B2C] mt-0.5">₹{rel.price.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
