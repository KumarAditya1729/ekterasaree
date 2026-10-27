import React, { useState } from 'react';
import { GoldDivider, CornerMandala } from './Ornament';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateSection }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="relative bg-[#063B2C] text-[#F8F1E7] overflow-hidden border-t-2 border-[#B88A45]/40">
      
      {/* CORNER ORNAMENTS */}
      <CornerMandala className="absolute top-0 left-0 w-32 h-20 pointer-events-none opacity-20 hidden md:block" />
      <CornerMandala className="absolute top-0 right-0 w-32 h-20 pointer-events-none opacity-20 hidden md:block" flip />

      {/* TOP NEWSLETTER SECTION */}
      <div className="border-b border-[#B88A45]/20 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-2">
            <GoldDivider />
          </div>
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#B88A45] block mb-2">
            The Ekatra Chronicle
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F8F1E7] font-normal tracking-tight">
            Invitations to Private Weave Releases
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#F8F1E7]/75 max-w-lg mx-auto mt-2 mb-6 font-light">
            Receive intimate stories from our master weavers, first access to limited loom edits, and invitations to regional textile exhibitions.
          </p>

          {subscribed ? (
            <div className="p-4 bg-[#F8F1E7]/10 backdrop-blur-md rounded-xl max-w-md mx-auto border border-[#B88A45]/40 text-xs font-sans text-[#E4C38E] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B88A45]" />
              <span>Thank you. Demo subscription registered for {email}.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for private salon notes..."
                  className="grow px-4 py-3 rounded-full bg-white/10 border border-[#B88A45]/40 text-sm text-[#F8F1E7] placeholder-[#F8F1E7]/50 focus:outline-none focus:border-[#B88A45] font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#E4C38E] hover:bg-[#D4AF37] text-[#211B18] font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>Join Salon</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {errorMsg && (
                <p className="text-[11px] font-sans text-red-300 mt-2 text-left sm:text-center">{errorMsg}</p>
              )}
              <span className="block text-[10px] font-sans text-[#F8F1E7]/50 mt-2">
                Demo Notice: Submissions are validated locally. No unsolicited spam is sent.
              </span>
            </form>
          )}
        </div>
      </div>

      {/* MAIN FOOTER NAVIGATION LINKS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="block text-[10px] tracking-[0.25em] text-[#B88A45] uppercase font-sans font-medium">House of</span>
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.15em] text-[#F8F1E7] font-bold">EKATRA</span>
            </div>
            
            <p className="font-serif italic text-sm text-[#E4C38E] mb-3">
              “Handwoven Heritage. Worn for Generations.”
            </p>

            <p className="font-sans text-xs text-[#F8F1E7]/70 font-light leading-relaxed max-w-sm mb-5">
              House of Ekatra is committed to safeguarding authentic Indian handlooms. We directly partner with master artisans across Varanasi, Kanchipuram, and Chanderi to bring museum-grade pure silks to discerning patrons worldwide.
            </p>

            <div className="flex items-center gap-3 font-sans text-xs text-[#E4C38E]">
              <ShieldCheck className="w-4 h-4 text-[#B88A45]" />
              <span>Silk Mark Certified • GI Registered Heritage</span>
            </div>
          </div>

          {/* COLUMN 1: SHOP HANDLOOMS */}
          <div>
            <h4 className="font-serif text-base text-[#F8F1E7] font-semibold mb-4 border-b border-[#B88A45]/30 pb-1.5">
              Handloom Weaves
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#F8F1E7]/75">
              {[
                { name: 'Banarasi Silk Sarees', cat: 'banarasi' },
                { name: 'Kanjivaram Silk Sarees', cat: 'kanjivaram' },
                { name: 'Kora Organza Sarees', cat: 'kora' },
                { name: 'Chanderi Handloom Sarees', cat: 'chanderi' },
                { name: 'Traditional Handloom Edit', cat: 'handloom' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onSelectCategory(link.cat);
                      onNavigateSection('catalog');
                    }}
                    className="hover:text-[#E4C38E] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: CURATED EDITIONS */}
          <div>
            <h4 className="font-serif text-base text-[#F8F1E7] font-semibold mb-4 border-b border-[#B88A45]/30 pb-1.5">
              Occasions & Edits
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#F8F1E7]/75">
              {[
                { name: 'The Ekatra Edit', anchor: 'catalog' },
                { name: 'Royal Bridal Trousseau', anchor: 'occasions' },
                { name: 'Festive Grandeur', anchor: 'occasions' },
                { name: 'Heirloom Gifting', anchor: 'occasions' },
                { name: 'Interactive Saree Finder', anchor: 'finder' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateSection(link.anchor)}
                    className="hover:text-[#E4C38E] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONCIERGE & CARE */}
          <div>
            <h4 className="font-serif text-base text-[#F8F1E7] font-semibold mb-4 border-b border-[#B88A45]/30 pb-1.5">
              Patron Concierge
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#F8F1E7]/75">
              <li>
                <span className="block text-[#E4C38E] font-medium">Loom Consultation:</span>
                <span className="text-[#F8F1E7]/60">+91 98200 12345</span>
              </li>
              <li>
                <span className="block text-[#E4C38E] font-medium">Boutique Inquiries:</span>
                <span className="text-[#F8F1E7]/60">concierge@houseofekatra.com</span>
              </li>
              <li>
                <button onClick={() => onNavigateSection('story')} className="hover:text-[#E4C38E] transition-colors">
                  Artisan Guild Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('craft')} className="hover:text-[#E4C38E] transition-colors">
                  The Art of Handloom
                </button>
              </li>
              <li>
                <span className="text-[#F8F1E7]/60">Worldwide Insured Transit</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-12 pt-6 border-t border-[#B88A45]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#F8F1E7]/60 gap-4">
          <div>
            © {new Date().getFullYear()} HOUSE OF EKATRA. All rights reserved. Handcrafted with reverence in India.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#E4C38E] cursor-pointer">Heritage Authenticity</span>
            <span className="hover:text-[#E4C38E] cursor-pointer">Silk Care Policy</span>
            <span className="hover:text-[#E4C38E] cursor-pointer">Terms of Privilege</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
