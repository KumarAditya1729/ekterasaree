import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onMoveToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl border-l border-[#B88A45]/30 flex flex-col">
          
          {/* HEADER */}
          <div className="p-5 border-b border-[#E8D8C4] flex items-center justify-between bg-[#F3EADB]/50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#641B29] fill-[#641B29]" />
              <h3 className="font-serif text-lg font-semibold text-[#211B18]">
                Saved Favorites ({wishlist.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#635A55] hover:text-[#211B18]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="grow overflow-y-auto p-5">
            {wishlist.length === 0 ? (
              <div className="py-16 text-center">
                <Heart className="w-12 h-12 text-[#E8D8C4] mx-auto mb-3" />
                <p className="font-serif text-lg text-[#211B18]">No favorites saved yet.</p>
                <p className="font-sans text-xs text-[#635A55] mt-1 max-w-xs mx-auto">
                  Click the heart icon on any saree to save it to your wishlist for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-6 py-2.5 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-sans font-semibold hover:bg-[#0A4D3A] transition-colors"
                >
                  Browse Catalogue
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-3.5 p-3 rounded-xl bg-white border border-[#E8D8C4] shadow-sm"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="w-20 h-24 object-cover rounded-lg shrink-0 cursor-pointer hover:opacity-90"
                    />
                    <div className="flex flex-col justify-between grow">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 
                            onClick={() => {
                              onSelectProduct(product);
                              onClose();
                            }}
                            className="font-serif text-sm font-semibold text-[#211B18] line-clamp-1 cursor-pointer hover:text-[#063B2C]"
                          >
                            {product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveFromWishlist(product.id)}
                            className="text-[#635A55] hover:text-[#641B29] p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] font-sans text-[#8C6527] uppercase tracking-wider block">
                          {product.category} Silk
                        </span>
                        <span className="font-serif font-bold text-sm text-[#211B18] block mt-1">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#E8D8C4]/50 flex justify-end">
                        <button
                          onClick={() => {
                            onMoveToCart(product);
                          }}
                          className="px-3 py-1.5 rounded-full bg-[#063B2C] text-[#F8F1E7] text-xs font-sans font-medium hover:bg-[#0A4D3A] transition-colors flex items-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move to Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
