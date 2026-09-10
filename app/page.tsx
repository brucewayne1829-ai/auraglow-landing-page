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

  const docWaLink = `https://wa.me/${doctorWhatsapp}?text=${encodeURIComponent("Hi, I would like to consult the doctor.")}`;

  return (
    <div className="min-h-screen bg-[#0F2A1E] text-[#F3EEDD] pb-32" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Header */}
      <header className="border-b border-[#B8862F]/30 py-4 px-6 sticky top-0 bg-[#0F2A1E]/95 backdrop-blur z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#F3EEDD] p-2 rounded-lg">
              <img
                src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
                alt="AVP Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-display text-lg leading-none text-[#F3EEDD]">AVP Agency</p>
              <p className="text-[10px] text-[#C9BE9C]">Pan-India Delivery</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mild Support Languages Indicator */}
            <span className="hidden xs:inline-block text-[11px] text-[#C9BE9C] border border-[#B8862F]/30 px-2.5 py-1 rounded-lg">
              English · മലയാളം · தமிழ்
            </span>
            {/* Quick Doctor Button */}
            <a
              href={docWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#B8862F] text-[#0F2A1E] font-bold py-2 px-3.5 rounded-xl text-xs hover:bg-[#CB9B3F] transition-all shadow-md"
            >
              <span>🩺 Doctor</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 w-full">

        {/* Quick Search & Categories */}
        <section className="mb-8 bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-5 text-center shadow-md">
          <div className="max-w-md mx-auto mb-4">
            <input
              type="text"
              placeholder="Search medicines (e.g. Draksharishtam)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F2A1E] border border-[#B8862F]/40 rounded-xl px-4 py-3 text-sm text-[#F3EEDD] placeholder-[#7C8B7E] focus:outline-none focus:border-[#B8862F]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#B8862F] text-[#0F2A1E]"
                      : "bg-[#0F2A1E] text-[#D9D0B4] border border-[#B8862F]/30 hover:border-[#B8862F]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        <div className="my-6">
          <LeafDivider className="text-[#B8862F]/50 mx-auto" />
        </div>

        {/* Products Grid */}
        <h2 className="font-display text-xl text-[#F3EEDD] mb-6 text-center">
          {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory === "All" ? "All Remedies" : selectedCategory)}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <div key={item.id} className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="bg-[#F3EEDD] p-5 text-center">
                      <img src={item.image} alt={item.name} className="w-full h-40 object-contain" />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] tracking-wide text-[#B8862F] mb-1 uppercase font-semibold">{item.category}</p>
                      <h3 className="font-display text-base text-[#F3EEDD] mb-1.5">{item.name}</h3>
                      <p className="text-xs text-[#A9BAAC] mb-3 leading-relaxed">{item.desc}</p>
                      <p className="font-display text-base text-[#B8862F] mb-3">{item.price}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex gap-2">
                    <button
                      onClick={() => handleQuickBuy(item)}
                      className="flex-1 bg-[#B8862F] text-[#0F2A1E] font-bold py-2.5 rounded-xl hover:bg-[#CB9B3F] transition-colors text-xs shadow-md"
                    >
                      Quick Buy (WhatsApp)
                    </button>
                    <button
                      onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                      className={`py-2.5 px-4 rounded-xl border transition-colors text-xs ${
                        isSelected
                          ? "border-[#9C4A34] text-[#E8A594] bg-[#9C4A34]/10"
                          : "border-[#B8862F]/40 text-[#D9D0B4] hover:border-[#B8862F]"
                      }`}
                    >
                      {isSelected ? "Remove" : "Add"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-[#B8862F]/30 rounded-2xl p-8 text-center mb-10">
            <p className="text-[#D9D0B4] text-xs mb-3">No products found.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to inquire about products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-2 px-5 rounded-xl text-xs"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

        {/* Store location summary */}
        <section className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-5 text-center shadow-md">
          <p className="text-xs text-[#D9D0B4] mb-2">
            <strong>The Arya Vaidya Pharmacy (Coimbatore) Limited</strong> — Saibaba Colony, Coimbatore.
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#B8862F] underline hover:text-[#CB9B3F]"
          >
            Open Location in Google Maps
          </a>
        </section>
      </main>

      {/* Floating cart bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-t border-[#B8862F]/40 py-3 px-6 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <p className="text-[#D9D0B4] text-xs">
              <span className="text-[#F3EEDD] font-bold">{cart.length}</span> item(s) selected
            </p>
            <button
              onClick={handleCartCheckout}
              className="bg-[#B8862F] text-[#0F2A1E] font-bold py-2.5 px-6 rounded-xl hover:bg-[#CB9B3F] transition-colors text-xs shadow-md"
            >
              Send Cart to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#B8862F]/20 py-4 px-6 text-center text-[11px] text-[#7C8B7E]">
        <p>© AVP Agency | Pan-India Delivery via WhatsApp | No Cash on Delivery</p>
      </footer>
    </div>
  );
}
