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
    <div className="min-h-screen bg-[#0F2A1E] text-[#F3EEDD] pb-28" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Header */}
      <header className="border-b border-[#B8862F]/30 py-4 px-6 sticky top-0 z-40 bg-[#0F2A1E]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="bg-[#F3EEDD] p-2 rounded-xl shadow-md">
              <img
                src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
                alt="AVP Ayurveda logo"
                className="h-11 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-display text-lg sm:text-xl font-bold leading-tight text-[#F3EEDD]">AVP Agency</p>
              <p className="text-[11px] tracking-wide text-[#B8862F] font-semibold mt-0.5">
                The Arya Vaidya Pharmacy (Coimbatore) Limited
              </p>
              <p className="text-[10px] tracking-wide text-[#C9BE9C] mt-0.5">
                100% Genuine Ayurvedic Products &bull; Direct Agency Support
              </p>
            </div>
          </div>
          
          <div className="text-[11px] text-[#C9BE9C] bg-[#123626] border border-[#B8862F]/40 px-3 py-1.5 rounded-full font-medium">
            EN · മലയാളം · தமிழ்
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <p className="text-[#B8862F] text-sm font-medium mb-4">Since generations · Traditional Ayurvedic formulations</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] text-[#F3EEDD] mb-6">
            Genuine Ayurveda,<br />ordered on WhatsApp.
          </h1>
          <p className="text-lg text-[#D9D0B4] max-w-md mb-8 leading-relaxed">
            Browse our formulary, pick what you need, and send it straight to us on WhatsApp.
            No accounts, no checkout forms — just a conversation with our pharmacy.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I would like to know more about your products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#B8862F] text-[#0F2A1E] font-semibold py-3.5 px-7 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
            >
              Message us on WhatsApp
            </a>
            <a
              href="#formulary"
              className="inline-flex items-center gap-2 text-[#F3EEDD] border border-[#B8862F]/40 py-3.5 px-7 rounded-full hover:border-[#B8862F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F]"
            >
              Browse the formulary
            </a>
          </div>
        </div>
        <BotanicalMark className="hidden md:block w-full h-72 text-[#B8862F] mx-auto" />
      </section>

      {/* Ordering steps */}
      <section className="bg-[#F3EEDD] text-[#16281F] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mb-10">How ordering works</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Choose your remedy", d: "Search or filter the formulary below and pick one item, or several." },
              { n: "02", t: "WhatsApp opens", d: "Your selection is written out for you, ready to send — nothing to type." },
              { n: "03", t: "Send, and we take it from there", d: "Our team confirms your order and delivery details on chat." },
            ].map((step) => (
              <div key={step.n}>
                <p className="font-display text-3xl text-[#B8862F] mb-3">{step.n}</p>
                <p className="font-semibold text-lg mb-2">{step.t}</p>
                <p className="text-[#3E4F44] leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor consultation */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
        <div>
          <p className="text-[#B8862F] text-sm font-medium mb-3">Physician consultation</p>
          <h2 className="font-display text-3xl text-[#F3EEDD] mb-4">Not sure what you need?</h2>
          <p className="text-[#D9D0B4] leading-relaxed mb-6 max-w-md">
            Speak with our Senior Ayurveda Physician directly on WhatsApp before you order —
            no clinic visit required.
          </p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-transparent border border-[#B8862F] text-[#B8862F] font-semibold py-3.5 px-7 rounded-full hover:bg-[#B8862F] hover:text-[#0F2A1E] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
          >
            Book a consultation
          </a>
        </div>
        <div className="bg-[#123626] border border-[#B8862F]/30 rounded-2xl p-8">
          <p className="font-display text-lg text-[#F3EEDD] mb-3">Trusted since the pharmacy's founding</p>
          <p className="text-[#C9BE9C] leading-relaxed">
            Every formulation is prepared to classical Ayurvedic standards, dispatched from our
            Coimbatore dispensary, and delivered anywhere in India.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <LeafDivider className="text-[#B8862F]/50 mx-auto" />
      </div>

      {/* Formulary */}
      <section id="formulary" className="max-w-6xl mx-auto px-6 py-14">
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
                    <p className="text-xs tracking-wide text-[#B8862F] font-bold mb-2 uppercase">{item.category}</p>
                    <h3 className="font-display text-2xl text-[#F3EEDD] mb-2 leading-snug font-bold">{item.name}</h3>
                    <p className="text-sm text-[#A9BAAC] mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-xl text-[#B8862F] font-bold">{item.price}</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => handleQuickBuy(item)}
                        className="w-full bg-[#B8862F] text-[#0F2A1E] font-bold py-3 rounded-full hover:bg-[#CB9B3F] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EEDD]"
                      >
                        Quick Buy
                      </button>
                      <button
                        onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                        aria-pressed={isSelected}
                        className={`w-full py-3 rounded-full border font-bold motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8862F] ${
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
            on WhatsApp — <strong className="text-amber-300">No cash on delivery.</strong>
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
