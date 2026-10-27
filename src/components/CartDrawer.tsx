import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleDemoOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        
        {/* DRAWER CONTAINER */}
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl border-l border-[#B88A45]/30 flex flex-col">
          
          {/* HEADER */}
          <div className="p-5 border-b border-[#E8D8C4] flex items-center justify-between bg-[#F3EADB]/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#063B2C]" />
              <h3 className="font-serif text-lg font-semibold text-[#211B18]">
                Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="p-1 rounded-full text-[#635A55] hover:text-[#211B18]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="grow overflow-y-auto p-5">
            
            {/* 1. SUCCESS STATE */}
            {checkoutStep === 'success' && (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#063B2C] mx-auto mb-4" />
                <h4 className="font-serif text-2xl text-[#211B18]">Order Inquired Successfully!</h4>
                <div className="my-3 p-3 bg-[#E8D8C4]/40 rounded-lg text-xs font-sans text-[#635A55]">
                  <strong className="block text-[#063B2C] mb-1 font-semibold">Demo Order Notice</strong>
                  This is a demonstration order. No actual charge or card transaction has taken place. Our concierge team will connect on WhatsApp.
                </div>
                <p className="font-sans text-xs text-[#635A55] mt-3">
                  Thank you, <strong className="text-[#211B18]">{customerName || 'Esteemed Patron'}</strong>. We have logged your heirloom selection.
                </p>
                <button
                  onClick={() => {
                    setCheckoutStep('cart');
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-sans font-semibold"
                >
                  Return to Boutique
                </button>
              </div>
            )}

            {/* 2. DEMO CHECKOUT FLOW */}
            {checkoutStep === 'checkout' && (
              <form onSubmit={handleDemoOrderSubmit} className="space-y-4 font-sans text-xs">
                <div className="bg-[#E4C38E]/20 p-3 rounded-lg border border-[#B88A45]/40 text-[#8C6527]">
                  <strong>Interactive Demo Checkout:</strong> Place a reservation inquiry without live payment processing.
                </div>

                <div>
                  <label className="block text-[#211B18] font-semibold mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Maharani Gayatri Devi"
                    className="w-full p-2.5 rounded-lg border border-[#E8D8C4] bg-white focus:outline-none focus:ring-1 focus:ring-[#063B2C]"
                  />
                </div>

                <div>
                  <label className="block text-[#211B18] font-semibold mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="patron@ekatra.com"
                    className="w-full p-2.5 rounded-lg border border-[#E8D8C4] bg-white focus:outline-none focus:ring-1 focus:ring-[#063B2C]"
                  />
                </div>

                <div>
                  <label className="block text-[#211B18] font-semibold mb-1">Delivery City & Country</label>
                  <input
                    required
                    type="text"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="e.g. Mumbai, India or London, UK"
                    className="w-full p-2.5 rounded-lg border border-[#E8D8C4] bg-white focus:outline-none focus:ring-1 focus:ring-[#063B2C]"
                  />
                </div>

                <div className="pt-2 border-t border-[#E8D8C4]">
                  <div className="flex justify-between font-serif text-sm font-bold text-[#211B18] mb-4">
                    <span>Order Total:</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="w-1/2 py-2.5 rounded-full border border-[#E8D8C4] text-[#211B18] font-medium"
                    >
                      Back to Bag
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-2.5 rounded-full bg-[#063B2C] text-[#F8F1E7] font-semibold"
                    >
                      Confirm Demo Order
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* 3. NORMAL CART ITEMS LIST */}
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="py-16 text-center">
                    <ShoppingBag className="w-12 h-12 text-[#E8D8C4] mx-auto mb-3" />
                    <p className="font-serif text-lg text-[#211B18]">Your bag is currently empty.</p>
                    <p className="font-sans text-xs text-[#635A55] mt-1 max-w-xs mx-auto">
                      Explore our handloom collections to add timeless weaves to your wardrobe.
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        onContinueShopping();
                      }}
                      className="mt-5 px-6 py-2.5 bg-[#063B2C] text-[#F8F1E7] rounded-full text-xs font-sans font-semibold hover:bg-[#0A4D3A] transition-colors"
                    >
                      Explore Sarees
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-3.5 p-3 rounded-xl bg-white border border-[#E8D8C4] shadow-sm"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-24 object-cover rounded-lg shrink-0 border border-[#E8D8C4]/60"
                        />
                        <div className="flex flex-col justify-between grow">
                          <div>
                            <div className="flex items-start justify-between">
                              <h4 className="font-serif text-sm font-semibold text-[#211B18] line-clamp-1">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.product.id)}
                                className="text-[#635A55] hover:text-[#641B29] p-1 ml-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-[10px] font-sans text-[#8C6527] uppercase tracking-wider block">
                              {item.product.category} Silk
                            </span>
                            {item.unstitchedBlouse && (
                              <span className="text-[10px] text-[#063B2C] bg-[#063B2C]/10 px-1.5 py-0.5 rounded inline-block mt-0.5">
                                + Matching Blouse Fabric
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8D8C4]/50">
                            {/* Quantity controls */}
                            <div className="flex items-center border border-[#E8D8C4] rounded-full bg-[#FAF6F0] px-1.5 py-0.5 text-xs">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="px-1.5 font-bold hover:text-[#063B2C]"
                              >
                                -
                              </button>
                              <span className="px-2 font-semibold text-[#211B18]">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="px-1.5 font-bold hover:text-[#063B2C]"
                              >
                                +
                              </button>
                            </div>

                            <span className="font-serif font-bold text-sm text-[#211B18]">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

          </div>

          {/* FOOTER TOTAL & CHECKOUT BUTTON */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="p-5 border-t border-[#E8D8C4] bg-[#F3EADB]/40 space-y-3 font-sans">
              <div className="flex items-center justify-between text-xs text-[#635A55]">
                <span>Insured Doorstep Delivery:</span>
                <span className="text-[#063B2C] font-semibold">Complimentary (India & Global)</span>
              </div>

              <div className="flex items-baseline justify-between font-serif pt-1">
                <span className="text-sm font-semibold text-[#211B18]">Subtotal:</span>
                <span className="text-xl font-bold text-[#211B18]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                id="cart-checkout-button"
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18] font-sans font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#635A55]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B88A45]" />
                <span>100% Authentic Handloom Assurance Guarantee</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
