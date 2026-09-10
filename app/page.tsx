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

function BotanicalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" fill="none" className={className} aria-hidden="true">
      <path d="M100 310V40" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M100 260c-24-10-40-30-42-56 26 2 44 18 50 42" fill="currentColor" opacity="0.85" />
      <path d="M100 260c24-10 40-30 42-56-26 2-44 18-50 42" fill="currentColor" opacity="0.85" />
      <path d="M100 190c-20-8-33-24-35-46 22 2 37 15 43 36" fill="currentColor" opacity="0.65" />
      <path d="M100 190c20-8 33-24 35-46-22 2-37 15-43 36" fill="currentColor" opacity="0.65" />
      <path d="M100 120c-16-6-27-19-29-37 18 2 30 12 35 29" fill="currentColor" opacity="0.45" />
      <path d="M100 120c16-6 27-19 29-37-18 2-30 12-35 29" fill="currentColor" opacity="0.45" />
      <circle cx="100" cy="34" r="7" fill="currentColor" />
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
    <div className="min-h-screen bg-[#0F2A1E] text-[#F3EEDD] pb-32" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Header */}
      <header className="border-b border-[#B8862F]/30 py-5 px-6 sticky top-0 bg-[#0F2A1E]/95 backdrop-blur z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#F3EEDD] p-2 rounded-lg">
              <img
                src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
                alt="AVP Ayurveda logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-display text-xl leading-none text-[#F3EEDD]">AVP Agency</p>
              <p className="text-[11px] tracking-wide text-[#C9BE9C] mt-0.5">Arya Vaidya Pharmacy, Coimbatore</p>
            </div>
          </div>
          <span className="text-xs text-[#C9BE9C] border border-[#B8862F]/40 rounded-full px-3 py-1.5">
            Pan-India Delivery
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-4 w-full">

        {/* Premium Doctor Consultation Banner */}
        <section className="mb-10 bg-gradient-to-r from-[#173b2b] via-[#123626] to-[#1f4a36] border-2 border-[#B8862F]/60 rounded-3xl p-6 md:p-8 text-[#F3EEDD] shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#B8862F]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6 items-center">
            <div>
              <span className="inline-block bg-[#B8862F]/20 text-[#B8862F] border border-[#B8862F]/40 text-xs px-3 py-1 rounded-full font-semibold mb-3 tracking-wide uppercase">
                Expert Guidance
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-3">Consult Our Senior Physician</h2>
              <p className="text-[#D9D0B4] text-sm leading-relaxed mb-6">
                Unsure about the right formulation for your health condition? Connect directly with our qualified Ayurveda Physician via WhatsApp for personalized advice before ordering.
              </p>
              <a
                href={docWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#B8862F] text-[#0F2A1E] font-bold py-3.5 px-7 rounded-2xl hover:bg-[#CB9B3F] transition-all text-sm shadow-xl active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Book Doctor Consultation
              </a>
            </div>
            <BotanicalMark className="hidden md:block w-full h-44 text-[#B8862F] mx-auto opacity-80" />
          </div>
        </section>

        {/* Simple Ordering Guide Card (English) */}
        <section className="mb-10 bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-6 text-[#F3EEDD] shadow-xl">
          <p className="font-display text-base text-[#B8862F] mb-3 flex items-center gap-2 font-semibold">
            <span>✨</span> How to Order:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-[#D9D0B4]">
            <li>Browse the formulations below and click <strong>'Quick Buy'</strong> for instant orders, or <strong>'Add to Cart'</strong> for multiple products.</li>
            <li>WhatsApp will open automatically with your selected items pre-filled in a message.</li>
            <li>Simply press <strong>Send</strong> on WhatsApp to place your order directly with our dispensary!</li>
          </ol>
        </section>

        {/* Search & Categories */}
        <section className="mb-10 bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-6 text-center shadow-md">
          <h2 className="font-display text-xl text-[#F3EEDD] mb-4">Browse Formulary</h2>
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Search medicines (e.g., Draksharishtam, Kashayam)..."
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
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
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

        <div className="my-8">
          <LeafDivider className="text-[#B8862F]/50 mx-auto" />
        </div>

        {/* Products Grid */}
        <h2 className="font-display text-2xl text-[#F3EEDD] mb-6 text-center">
          {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory === "All" ? "All Remedies" : selectedCategory)}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <div key={item.id} className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="bg-[#F3EEDD] p-6 text-center">
                      <img src={item.image} alt={item.name} className="w-full h-44 object-contain" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs tracking-wide text-[#B8862F] mb-1">{item.category}</p>
                      <h3 className="font-display text-lg text-[#F3EEDD] mb-2">{item.name}</h3>
                      <p className="text-xs text-[#A9BAAC] mb-4 leading-relaxed">{item.desc}</p>
                      <p className="font-display text-lg text-[#B8862F] mb-4">{item.price}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-3">
                    <button
                      onClick={() => handleQuickBuy(item)}
                      className="flex-1 bg-[#B8862F] text-[#0F2A1E] font-semibold py-2.5 rounded-xl hover:bg-[#CB9B3F] transition-colors text-xs shadow-md"
                    >
                      Quick Buy
                    </button>
                    <button
                      onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                      className={`flex-1 py-2.5 rounded-xl border transition-colors text-xs ${
                        isSelected
                          ? "border-[#9C4A34] text-[#E8A594] bg-[#9C4A34]/10"
                          : "border-[#B8862F]/40 text-[#D9D0B4] hover:border-[#B8862F]"
                      }`}
                    >
                      {isSelected ? "Remove" : "Add to cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-[#B8862F]/30 rounded-2xl p-10 text-center mb-12">
            <p className="text-[#D9D0B4] mb-4 text-sm">Nothing matched that search — ask us directly instead.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to inquire about products in AVP Agency.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-2.5 px-6 rounded-xl text-xs"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

        {/* Store location */}
        <section className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-6 md:p-8 text-center shadow-lg">
          <p className="text-[#B8862F] text-sm font-medium mb-2">Visit the dispensary</p>
          <h2 className="font-display text-xl text-[#F3EEDD] mb-4">The Arya Vaidya Pharmacy (Coimbatore) Limited</h2>
          <div className="text-[#D9D0B4] text-xs sm:text-sm leading-relaxed space-y-1 mb-6">
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
            <p className="pt-2 text-amber-300 font-semibold">📦 Secure Pan-India Courier Delivery Available</p>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-2.5 px-6 rounded-xl text-xs shadow-md"
          >
            Open in Google Maps
          </a>
        </section>
      </main>

      {/* Floating cart bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0F2A1E]/95 backdrop-blur border-t border-[#B8862F]/40 py-4 px-6 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <p className="text-[#D9D0B4] text-xs sm:text-sm">
              <span className="text-[#F3EEDD] font-semibold">{cart.length}</span> item{cart.length > 1 ? "s" : ""} ready
            </p>
            <button
              onClick={handleCartCheckout}
              className="bg-[#B8862F] text-[#0F2A1E] font-semibold py-2.5 px-6 rounded-xl hover:bg-[#CB9B3F] transition-colors text-xs sm:text-sm shadow-md"
            >
              Send cart to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#B8862F]/20 py-6 px-6 text-center text-xs text-[#7C8B7E]">
        <p>© AVP Agency — orders placed via WhatsApp. Pan-India Delivery. No cash on delivery.</p>
      </footer>
    </div>
  );
}
