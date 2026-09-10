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
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 text-gray-100 pb-32 selection:bg-amber-400 selection:text-emerald-950" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Compact Luxury Header */}
      <header className="backdrop-blur-xl bg-emerald-950/90 border-b border-amber-500/30 py-3 px-4 sticky top-0 z-40 shadow-xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          
          {/* ഇടത് വശം: ലോഗോയും പേരും */}
          <div className="flex items-center gap-3">
            <div className="bg-white/95 p-1.5 rounded-xl shadow-md ring-1 ring-amber-400/30 flex items-center justify-center">
              <img 
                src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747" 
                alt="AVP Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="font-display text-base sm:text-lg font-bold tracking-wider text-white leading-tight">AVP Agency</h1>
              <p className="text-[9px] sm:text-[10px] text-amber-300 tracking-wide font-semibold uppercase">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            </div>
          </div>
          
          {/* വലത് വശം: സപ്പോർട്ട് ലാംഗ്വേജ് */}
          <div className="text-right">
            <span className="text-[9px] sm:text-[11px] text-emerald-200/90 bg-emerald-900/80 px-2.5 py-1 rounded-full border border-emerald-700/60 font-medium inline-block shadow-inner">
              English | മലയാളം | தமிழ்
            </span>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 w-full">

        {/* Doctor Appointment Banner */}
        <section className="mb-8 bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400/50 rounded-3xl p-6 text-emerald-950 text-center shadow-2xl relative overflow-hidden transform transition hover:scale-[1.01]">
          <h2 className="font-display text-lg sm:text-xl font-bold mb-1.5">🩺 Expert Doctor Consultation</h2>
          <p className="text-xs sm:text-sm font-medium mb-4 text-emerald-950/90">Connect directly with our Senior Ayurveda Physician via WhatsApp.</p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-bold py-3 px-6 rounded-2xl shadow-xl transition-all active:scale-95 text-xs sm:text-sm border border-emerald-800"
          >
            <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Book Consultation via WhatsApp</span>
          </a>
        </section>

        {/* Search Bar & Categories Section */}
        <section className="mb-10 bg-emerald-900/50 backdrop-blur-md border border-emerald-700/40 rounded-3xl p-5 text-white text-center shadow-2xl">
          <h2 className="font-display text-base sm:text-lg font-bold text-amber-300 mb-1">🌿 Search & Categories</h2>
          <p className="text-[11px] text-emerald-200/80 mb-4">Find authentic formulations quickly</p>
          
          <div className="max-w-md mx-auto mb-5">
            <input
              type="text"
              placeholder="Search medicines (e.g., Draksharishtem, Kashayam)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-950/85 border border-emerald-700/60 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-amber-400 text-emerald-950 shadow-lg scale-105 font-bold ring-2 ring-amber-300/50" 
                      : "bg-emerald-950/80 text-emerald-100 hover:bg-emerald-800 border border-emerald-700/60"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        <div className="my-6">
          <LeafDivider className="text-amber-400/40 mx-auto" />
        </div>

        {/* Products Grid Header */}
        <h2 className="font-display text-lg font-bold text-amber-300 mb-6 text-center tracking-wide">
          {searchQuery ? `🔍 Search Results for "${searchQuery}"` : (selectedCategory === "All" ? "⭐ Authentic Ayurvedic Formulary" : `⭐ ${selectedCategory}`)}
        </h2>

        {/* Products Grid with Original Clean Background Style */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mb-10">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <div key={item.id} className="bg-emerald-900 border border-emerald-700/30 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
                  <div>
                    <div className=" p-5 text-center">
                      <img src={item.image} alt={item.name} className="w-full h-44 object-contain" />
                    </div>
                    <div className="bg-[#F3EEDD]p-3">
                      <p className="text-[10px] tracking-wide text-amber-300 mb-1 uppercase font-semibold">{item.category}</p>
                      <h3 className="font-display text-base sm:text-lg text-white mb-2">{item.name}</h3>
                      <p className="text-xs text-emerald-200/80 mb-4 leading-relaxed">{item.desc}</p>
                      <p className="font-display text-lg text-amber-300 mb-2 font-bold">{item.price}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex gap-2.5">
                    <button
                      onClick={() => handleQuickBuy(item)}
                      className="flex-1 bg-amber-400 hover:bg-amber-500 text-emerald-950 font-black py-2.5 px-3 rounded-xl transition-colors text-xs shadow-md"
                    >
                      Quick Buy
                    </button>
                    <button
                      onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                      className={`flex-1 py-2.5 px-3 rounded-xl border transition-colors text-xs font-bold ${
                        isSelected
                          ? "border-rose-400 text-rose-300 bg-rose-500/10"
                          : "border-emerald-700 text-emerald-100 bg-emerald-950/60 hover:border-amber-400"
                      }`}
                    >
                      {isSelected ? "Remove" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/40 rounded-3xl p-8 text-center text-white mb-10 shadow-2xl">
            <p className="text-xs sm:text-sm mb-4 text-emerald-200">No products found matching your search or category.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about products in AVP Agency.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-emerald-950 font-black py-2.5 px-5 rounded-2xl text-xs transition-all shadow-lg"
            >
              Inquire via WhatsApp
            </a>
          </div>
        )}

        {/* Store Location Section */}
        <section className="bg-emerald-900/40 backdrop-blur-xl border border-emerald-700/40 rounded-3xl p-6 text-white text-center shadow-2xl">
          <h2 className="font-display text-base sm:text-lg font-bold text-amber-300 mb-3">📍 Store Location & Details</h2>
          
          <div className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-lg mx-auto mb-5 space-y-1">
            <p className="font-bold text-white text-base mb-1">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite to LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
            <p className="pt-3 text-xs text-amber-300 font-bold tracking-wide">📦 Pan-India Secure Courier Delivery Available</p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-emerald-950 font-black py-2.5 px-6 rounded-2xl shadow-xl transition-all active:scale-95 text-xs sm:text-sm"
          >
            <span>Open in Google Maps</span>
          </a>
        </section>
      </main>

      {/* Floating Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-emerald-950/95 backdrop-blur-2xl border-t border-emerald-700/50 shadow-2xl p-4 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="text-white">
              <p className="text-xs sm:text-sm font-bold text-amber-300">{cart.length} item(s) in cart</p>
              <p className="text-[10px] text-emerald-200/80">Ready for instant WhatsApp checkout</p>
            </div>
            <button
              onClick={handleCartCheckout}
              className="bg-amber-400 hover:bg-amber-500 text-emerald-950 text-xs sm:text-sm font-black px-6 py-3 rounded-2xl shadow-xl transition-all active:scale-95 ring-2 ring-amber-300/50"
            >
              Send Cart to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400/80 py-5 text-center text-[11px] border-t border-emerald-900/60 px-4">
        <p>© AVP Agency | Order directly via WhatsApp. (All-India Delivery Available | No Cash on Delivery)</p>
      </footer>
    </div>
  );
}
