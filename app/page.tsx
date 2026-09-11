"use client";

import { useState } from 'react';
import { products, categories, Product } from '@/lib/products';

function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <svg width="140" height="20" viewBox="0 0 140 20" fill="none" className={className} aria-hidden="true">
      <path d="M0 10H54M86 10H140" stroke="currentColor" strokeWidth="1" />
      <path
        d="M70 10c-5-7-12-9-16-7 2 7 9 9 16 7zm0 0c5-7 12-9 16-7-2 7-9 9-16 7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  const whatsappNumber = "9495562581";
  const doctorWhatsapp = "9942662959";
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

  const filteredProducts = products.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuickBuy = (product: Product) => {
    const text = encodeURIComponent(`Hello, I want to order:\n1. ${product.name} (${product.price})`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleCartCheckout = () => {
    const itemList = cart.map((item, index) => `${index + 1}. ${item.name} - ${item.price}`).join('\n');
    const text = encodeURIComponent(`Hello, I want to order the following items:\n\n${itemList}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const docWaLink = `https://wa.me/${doctorWhatsapp}?text=${encodeURIComponent("Hi, I would like to book an appointment for consultation.")}`;

  return (
    <div className="min-h-screen bg-[#0F2A1E] text-[#F3EEDD] pb-24 pt-16 sm:pt-20" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Header */}
<header className="fixed top-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-b border-[#B8862F]/30 py-2.5 px-3 sm:px-6 z-50 shadow-lg">
  <div className="max-w-6xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-3 w-full">
      <div className="bg-[#F3EEDD] p-1.5 rounded-lg shrink-0">
        <img
          src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
          alt="AVP Ayurveda logo"
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg sm:text-2xl leading-tight text-[#F3EEDD] font-bold">AVP Agency</p>
          <span className="text-[10px] sm:text-xs text-[#C9BE9C] font-medium shrink-0">
            ENG · മലയാളം · தமிழ்
          </span>
        </div>
        <p className="text-[8.5px] sm:text-xs tracking-tight text-[#C9BE9C] uppercase font-semibold mt-0.5 whitespace-nowrap">
          THE ARYA VAIDYA PHARMACY (COIMBATORE) LIMITED
        </p>
      </div>
    </div>
  </div>
</header>



      {/* Trust Badge Bar */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6 pt-2 pb-1">
        <div className="bg-[#123626] border border-[#B8862F]/30 rounded-lg py-1.5 px-3 text-center flex items-center justify-center gap-2">
          <span className="text-xs">🌿</span>
          <p className="text-[10px] sm:text-xs text-[#C9BE9C] font-semibold tracking-wide flex items-center gap-1.5 flex-wrap justify-center">
            <span>100% Authentic AVP Formulations</span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              Direct Support via 
              <svg className="w-3.5 h-3.5 inline-block text-green-400 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </span>
          </p>
        </div>
      </section>

      {/* Doctor consultation banner */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6 py-2">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400/50 rounded-xl p-3 sm:p-4 text-emerald-950 text-center shadow-md relative overflow-hidden">
          <h2 className="font-display text-base sm:text-lg font-bold mb-1 flex items-center justify-center gap-2">
            <span>🩺</span> Expert Doctor Consultation <span>🩺</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium mb-2 text-emerald-950/90">Connect directly with our Senior Ayurveda Physician via WhatsApp for correct dosage.</p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold py-1.5 px-3.5 rounded-lg shadow transition-all text-xs border border-emerald-800"
          >
            <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Book Consultation via WhatsApp</span>
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-1">
        <LeafDivider className="text-[#B8862F]/50 mx-auto" />
      </div>

      {/* Medicines Section */}
      <section id="medicines" className="max-w-6xl mx-auto px-3 sm:px-6 py-3">
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-sm sm:text-base text-[#B8862F] font-semibold tracking-wide">
              Medicine List
            </h2>
            <span className="text-xs sm:text-sm text-[#B8862F] font-semibold">
              {selectedCategory}
            </span>
          </div>

          <div className="relative w-full">
            <label htmlFor="product-search" className="sr-only">Search medicine</label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#B8862F]">
              🔍
            </div>
            <input
              id="product-search"
              type="text"
              placeholder="Search medicine name (e.g. Arishtam, Kashayam)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#123626] border border-[#B8862F]/50 focus:border-[#B8862F] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#F3EEDD] placeholder-[#8FA192] shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F]/50"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 border-b border-[#B8862F]/20 pb-3" role="group" aria-label="Filter by category">
          {categories.map((cat, index) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`text-xs sm:text-sm pb-1 border-b-2 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] rounded-sm ${
                  isActive
                    ? "border-[#B8862F] text-[#F3EEDD] font-semibold"
                    : "border-transparent text-[#8FA192] hover:text-[#D9D0B4]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {filteredProducts.length > 0 ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <li key={item.id} className="relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-[#0F2A1E] border border-[#B8862F] z-10" />
                  
                  <div className="bg-[#F3EEDD] rounded-t-lg overflow-hidden">
                    <div className="p-4 pt-6 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-full h-72 sm:h-80 object-contain" />
                    </div>
                  </div>

                  <div className="bg-[#123626] border border-t-0 border-[#B8862F]/30 rounded-b-lg p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-xs tracking-wide text-[#B8862F]">{item.category}</p>
                      <span className="font-display text-lg text-[#B8862F] font-semibold">{item.price}</span>
                    </div>

                    <h3 className="font-display text-xl text-[#F3EEDD] mb-1.5 leading-snug">{item.name}</h3>
                    <p className="text-sm text-[#A9BAAC] mb-5 leading-relaxed">{item.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleQuickBuy(item)}
                        className="w-full bg-[#B8862F] text-[#0F2A1E] font-semibold py-2.5 px-2 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD] text-center truncate"
                      >
                        Quick Buy
                      </button>
                      <button
                        onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                        aria-pressed={isSelected}
                        className={`w-full py-2.5 px-2 rounded-full border motion-safe:transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] text-center truncate ${
                          isSelected
                            ? "border-[#9C4A34] text-[#E8A594]"
                            : "border-[#B8862F]/40 text-[#D9D0B4] hover:border-[#B8862F]"
                        }`}
                      >
                        {isSelected ? "Remove" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="border border-[#B8862F]/30 rounded-2xl p-10 text-center">
            <p className="text-[#D9D0B4] mb-6">Nothing matched that search — ask us directly instead.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to inquire about products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-3 px-7 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}
      </section>

      <div className="max-w-6xl mx-auto px-6 py-1">
        <LeafDivider className="text-[#B8862F]/50 mx-auto" />
      </div>

      {/* Store location & Delivery Details */}
      <section className="max-w-6xl mx-auto px-3 sm:px-6 py-6 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-[#B8862F] text-xs font-medium mb-2">Visit the dispensary</p>
          <h2 className="font-display text-lg sm:text-xl text-[#F3EEDD] mb-3">The Arya Vaidya Pharmacy (Coimbatore) Limited</h2>
          <div className="text-[#D9D0B4] leading-relaxed space-y-0.5 mb-4 text-xs sm:text-sm">
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#B8862F] border-b border-[#B8862F]/40 hover:border-[#B8862F] pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] rounded-sm text-xs"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="bg-[#123626] border border-[#B8862F]/30 rounded-xl p-5 flex flex-col justify-center">
          <p className="font-display text-base text-[#F3EEDD] mb-1.5">Delivery, pan-India</p>
          <p className="text-[#C9BE9C] leading-relaxed text-xs sm:text-sm mb-2">
            Direct delivery across India via secure prepaid WhatsApp orders.
          </p>
          <p className="text-[#B8862F] text-xs sm:text-sm font-semibold">
            No COD (No Cash on Delivery) &bull; Fast & Safe Shipping
          </p>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="border-t border-[#B8862F]/30 bg-[#0A2217] pt-8 pb-6 px-4 text-[#D9D0B4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 text-xs sm:text-sm">
          <div>
            <h3 className="font-display text-sm sm:text-base text-[#F3EEDD] font-bold mb-2">
              The Arya Vaidya Pharmacy (Coimbatore) Limited
            </h3>
            <p className="text-[#A9BAAC] leading-relaxed">
              Your trusted partner for authentic traditional Ayurvedic medicines and wellness solutions delivered directly to your home.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm sm:text-base text-[#F3EEDD] font-bold mb-2">Customer Support & Expert Guidance</h3>
            <p className="text-[#A9BAAC] leading-relaxed mb-3">
              All orders are verified and processed directly through WhatsApp with expert doctor's guidance to ensure personal care and correct product selection.
            </p>
            <div className="inline-block bg-[#123626] border border-[#B8862F]/40 px-3 py-1.5 rounded-lg text-xs text-[#C9BE9C]">
              Support: Mon - Sat (9:00 AM - 7:00 PM)
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-[#B8862F]/20 pt-4 text-center text-[11px] sm:text-xs text-[#7C8B7E]">
          <p>© {new Date().getFullYear()} The Arya Vaidya Pharmacy (Coimbatore) Limited. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating cart bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-t border-[#B8862F]/40 py-2.5 px-3 sm:px-6 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <p className="text-[#D9D0B4] text-xs sm:text-sm">
              <span className="text-[#F3EEDD] font-semibold">{cart.length}</span> item{cart.length > 1 ? "s" : ""} ready to send
            </p>
            <button
              onClick={handleCartCheckout}
              className="bg-[#B8862F] text-[#0F2A1E] font-semibold py-2 px-5 rounded-lg hover:bg-[#CB9B3F] motion-safe:transition-colors text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
            >
              Send cart to WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
