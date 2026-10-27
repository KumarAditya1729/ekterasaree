import React, { useState } from 'react';
import { X, User, ShieldCheck, Package, Heart, LogOut } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#B88A45]/40 overflow-hidden p-6 sm:p-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-[#635A55] hover:text-[#211B18]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#F3EADB] flex items-center justify-center mx-auto mb-3 text-[#063B2C]">
            <User className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#211B18]">Ekatra Patron Privileges</h3>
          <p className="font-sans text-xs text-[#635A55] mt-1">
            Access private previews, bespoke handloom reservations, and order tracking.
          </p>
        </div>

        {isLoggedIn ? (
          <div className="space-y-4 font-sans text-xs">
            <div className="p-4 bg-white rounded-xl border border-[#E8D8C4]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[#211B18]">Patron Profile:</span>
                <span className="text-[#063B2C] font-bold">Gold Tier</span>
              </div>
              <div className="text-[#635A55]">{email || 'patron@houseofekatra.com'}</div>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-white rounded-lg border border-[#E8D8C4] flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#211B18]">
                  <Package className="w-4 h-4 text-[#B88A45]" />
                  <span>Past Curations & Inquiries</span>
                </span>
                <span className="text-[#635A55]">2 items</span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#E8D8C4] flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#211B18]">
                  <ShieldCheck className="w-4 h-4 text-[#063B2C]" />
                  <span>Silk Mark Guarantee Certificates</span>
                </span>
                <span className="text-[#063B2C] font-semibold">Verified</span>
              </div>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="w-full mt-4 py-2.5 border border-[#E8D8C4] text-[#641B29] rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#F3EADB]"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out of Demo Account</span>
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="space-y-4 font-sans text-xs"
          >
            <div>
              <label className="block text-[#211B18] font-semibold mb-1">Email or Phone Number</label>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email or WhatsApp number"
                className="w-full p-2.5 rounded-lg border border-[#E8D8C4] bg-white focus:outline-none focus:ring-1 focus:ring-[#063B2C]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#063B2C] text-[#F8F1E7] rounded-full font-semibold hover:bg-[#0A4D3A] transition-colors"
            >
              Access Patron Portal
            </button>

            <p className="text-[11px] text-center text-[#635A55]">
              Demo Mode: Enter any email to experience the patron profile.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
