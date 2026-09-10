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
    <div className="min-h-screen bg-[#0F2A1E] text-[#F3EEDD] pb-28 pt-32" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Sticky Header with Trust & Language Bar */}
      <header className="fixed top-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-b border-[#B8862F]/30 py-3 px-6 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#F3EEDD] p-1.5 rounded-lg">
              <img
                src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
                alt="AVP Ayurveda logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-display text-xl leading-none text-[#F3EEDD] font-bold">AVP Agency</p>
              <p className="text-[10px] tracking-wide text-[#C9BE9C] mt-0.5 uppercase font-semibold">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            </div>
          </div>
          <div>
            <span className="text-[11px] text-[#C9BE9C] bg-[#123626] border border-[#B8862F]/40 px-3 py-1 rounded-full font-medium">
              English · മലയാളം · தமிழ்
            </span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-2 pt-2 border-t border-[#B8862F]/20 text-center">
          <p className="text-[11px] text-[#C9BE9C] font-semibold tracking-wide">
            🌿 100% Authentic AVP Formulations &bull; Direct Agency Support via WhatsApp
          </p>
        </div>
      </header>

      {/* Doctor consultation (Amber/Yellow banner) */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400/50 rounded-2xl p-6 text-emerald-950 text-center shadow-xl relative overflow-hidden">
          <h2 className="font-display text-lg sm:text-xl font-bold mb-1">🩺 Expert Doctor Consultation</h2>
          <p className="text-xs sm:text-sm font-medium mb-4 text-emerald-950/90">Connect directly with our Senior Ayurveda Physician via WhatsApp.</p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold py-3 px-6 rounded-xl shadow-md transition-all text-xs sm:text-sm border border-emerald-800"
          >
            <span>Book Consultation via WhatsApp</span>
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <LeafDivider className="text-[#B8862F]/50 mx-auto" />
      </div>

      {/* Formulary */}
      <section id="formulary" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#B8862F] text-sm font-medium mb-2">The formulary</p>
            <h2 className="font-display text-3xl text-[#F3EEDD]">
              {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory === "All" ? "All remedies" : selectedCategory)}
            </h2>
          </div>
          <label htmlFor="product-search" className="sr-only">Search medicines</label>
          <input
            id="product-search"
            type="text"
            placeholder="Search, e.g. Draksharishtam"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-72 bg-transparent border-b border-[#B8862F]/40 focus:border-[#B8862F] px-1 py-2 text-[#F3EEDD] placeholder-[#7C8B7E] focus-visible:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 border-b border-[#B8862F]/20 pb-6" role="group" aria-label="Filter by category">
          {categories.map((cat, index) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`text-base pb-1 border-b-2 motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] rounded-sm ${
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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <li key={item.id} className="relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-[#0F2A1E] border border-[#B8862F] z-10" />
                  <div className="bg-[#F3EEDD] rounded-t-lg overflow-hidden">
                    <div className="p-6 pt-8">
                      <img src={item.image} alt={item.name} className="w-full h-44 object-contain" />
                    </div>
                  </div>
                  <div className="bg-[#123626] border border-t-0 border-[#B8862F]/30 rounded-b-lg p-6">
                    <p className="text-xs tracking-wide text-[#B8862F] mb-2">{item.category}</p>
                    <h3 className="font-display text-xl text-[#F3EEDD] mb-2 leading-snug">{item.name}</h3>
                    <p className="text-sm text-[#A9BAAC] mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-lg text-[#B8862F]">{item.price}</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => handleQuickBuy(item)}
                        className="w-full bg-[#B8862F] text-[#0F2A1E] font-semibold py-3 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
                      >
                        Quick Buy
                      </button>
                      <button
                        onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                        aria-pressed={isSelected}
                        className={`w-full py-3 rounded-full border motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] ${
                          isSelected
                            ? "border-[#9C4A34] text-[#E8A594]"
                            : "border-[#B8862F]/40 text-[#D9D0B4] hover:border-[#B8862F]"
                        }`}
                      >
                        {isSelected ? "Remove from cart" : "Add to cart"}
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
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to inquire about products in AVP Agency.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-3 px-7 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <LeafDivider className="text-[#B8862F]/50 mx-auto" />
      </div>

      {/* Store location */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-[#B8862F] text-sm font-medium mb-3">Visit the dispensary</p>
          <h2 className="font-display text-2xl text-[#F3EEDD] mb-5">The Arya Vaidya Pharmacy (Coimbatore) Limited</h2>
          <div className="text-[#D9D0B4] leading-relaxed space-y-1 mb-6">
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B8862F] border-b border-[#B8862F]/40 hover:border-[#B8862F] pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] rounded-sm"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-8 flex flex-col justify-center">
          <p className="font-display text-lg text-[#F3EEDD] mb-2">Delivery, pan-India</p>
          <p className="text-[#C9BE9C] leading-relaxed">
            We courier securely to any address in the country. Orders are confirmed and paid for
            on WhatsApp — no cash on delivery.
          </p>
        </div>
      </section>

      {/* Floating cart bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-t border-[#B8862F]/40 py-4 px-6 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <p className="text-[#D9D0B4]">
              <span className="text-[#F3EEDD] font-semibold">{cart.length}</span> item{cart.length > 1 ? "s" : ""} ready to send
            </p>
            <button
              onClick={handleCartCheckout}
              className="bg-[#B8862F] text-[#0F2A1E] font-semibold py-3 px-7 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
            >
              Send cart to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#B8862F]/20 py-8 px-6 text-center text-sm text-[#7C8B7E]">
        <p>© AVP Agency — orders placed by WhatsApp. Delivery across India. No cash on delivery.</p>
      </footer>
    </div>
  );
}
