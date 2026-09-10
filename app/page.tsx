"use client";

import { useState } from 'react';
import { products, categories, Product } from '@/lib/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  const whatsappNumber = "9495562581";
  const doctorWhatsapp = "9942662959";
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

  // Filter products by Category and Search Query
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
    <div className="min-h-screen bg-[#0B2A1D] text-[#F5F8F6] font-sans flex flex-col justify-between pb-32 selection:bg-[#F2B705] selection:text-[#0B2A1D]">

      {/* Header */}
      <header className="bg-[#0B2A1D] border-b-4 border-[#F2B705] py-6 px-5 text-center sticky top-0 z-40 shadow-lg">
        <div className="flex flex-col items-center gap-3 max-w-3xl mx-auto">
          <div className="bg-white p-3 rounded-2xl shadow-md flex items-center justify-center">
            <img
              src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747"
              alt="AVP Ayurveda logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-wide text-white">AVP Agency</h1>
            <p className="text-base text-[#F2D26B] font-semibold mt-1">
              The Arya Vaidya Pharmacy (Coimbatore) Limited
            </p>
          </div>
        </div>
        <div className="mt-4 inline-flex flex-wrap justify-center gap-2 text-base bg-[#123626] px-5 py-2.5 rounded-full border-2 border-[#2C5943] font-semibold text-[#F5F8F6]">
          <span aria-hidden="true">💬</span>
          <span>We speak English, മലയാളം &amp; தமிழ்</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-8 px-5 w-full space-y-8">

        {/* Ordering Guide */}
        <section className="bg-[#123626] border-2 border-[#2C5943] rounded-3xl p-6 shadow-lg" aria-labelledby="guide-heading">
          <h2 id="guide-heading" className="text-xl font-black text-[#F2D26B] mb-4 flex items-center gap-2">
            <span aria-hidden="true">✨</span> How to order in 3 steps
          </h2>
          <ol className="space-y-4 text-lg leading-relaxed text-[#F5F8F6]">
            <li className="flex gap-3">
              <span className="flex-none w-9 h-9 rounded-full bg-[#F2B705] text-[#0B2A1D] font-black flex items-center justify-center text-lg" aria-hidden="true">1</span>
              <span>Tap <strong>Quick Buy</strong> for one item, or <strong>Add to Cart</strong> to order several things at once.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none w-9 h-9 rounded-full bg-[#F2B705] text-[#0B2A1D] font-black flex items-center justify-center text-lg" aria-hidden="true">2</span>
              <span>WhatsApp opens by itself with your order already typed out.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none w-9 h-9 rounded-full bg-[#F2B705] text-[#0B2A1D] font-black flex items-center justify-center text-lg" aria-hidden="true">3</span>
              <span>Press the green <strong>Send</strong> button in WhatsApp. That's it — order placed!</span>
            </li>
          </ol>
        </section>

        {/* Doctor Appointment */}
        <section className="bg-[#F2B705] rounded-3xl p-7 text-center shadow-lg" aria-labelledby="doctor-heading">
          <h2 id="doctor-heading" className="text-2xl font-black text-[#0B2A1D] mb-2">
            🩺 Talk to Our Ayurveda Doctor
          </h2>
          <p className="text-lg font-medium mb-5 text-[#0B2A1D]">
            Book a free consultation on WhatsApp with our Senior Physician.
          </p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-safe:transition-transform motion-safe:active:scale-95 inline-flex items-center justify-center gap-3 bg-[#0B2A1D] text-white font-black py-5 px-8 rounded-2xl shadow-md text-lg w-full sm:w-auto min-h-[64px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0B2A1D]/60"
          >
            <svg className="w-6 h-6 fill-current text-[#4ADE80]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Book on WhatsApp</span>
          </a>
        </section>

        {/* Search & Categories */}
        <section className="bg-[#123626] border-2 border-[#2C5943] rounded-3xl p-6 shadow-lg" aria-labelledby="search-heading">
          <h2 id="search-heading" className="text-xl font-black text-[#F2D26B] mb-4 text-center">
            🌿 Find a Medicine
          </h2>

          <label htmlFor="product-search" className="sr-only">Search medicines by name</label>
          <input
            id="product-search"
            type="text"
            placeholder="Type a medicine name, e.g. Draksharishtam"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0B2A1D] border-2 border-[#2C5943] rounded-2xl px-5 py-4 text-lg text-white placeholder-[#C9DDD0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B705] mb-5"
          />

          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter by category">
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                  className={`min-h-[52px] px-5 py-3 rounded-2xl text-lg font-bold border-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B705] ${
                    isActive
                      ? "bg-[#F2B705] text-[#0B2A1D] border-[#F2B705]"
                      : "bg-[#0B2A1D] text-white border-[#2C5943]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Products Heading */}
        <h2 className="text-2xl font-black text-[#F2D26B] text-center" aria-live="polite">
          {searchQuery
            ? `Results for "${searchQuery}"`
            : (selectedCategory === "All" ? "Our Medicines" : selectedCategory)}
        </h2>

        {/* Products List — single column for easy, unhurried scanning */}
        {filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <li key={item.id} className="bg-[#123626] rounded-3xl border-2 border-[#2C5943] shadow-lg overflow-hidden">
                  <div className="relative bg-white p-4">
                    <img src={item.image} alt={item.name} className="w-full h-56 object-contain" />
                    <span className="absolute top-3 right-3 bg-[#F2B705] text-[#0B2A1D] text-sm font-black px-3 py-1.5 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-black text-white mb-2">{item.name}</h3>
                    <p className="text-lg text-[#D9EAE0] mb-3 leading-relaxed">{item.desc}</p>
                    <p className="text-2xl font-black text-[#F2D26B] mb-5">{item.price}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleQuickBuy(item)}
                        className="motion-safe:transition-transform motion-safe:active:scale-95 flex-1 min-h-[64px] bg-[#F2B705] text-[#0B2A1D] font-black text-xl rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2D26B]"
                      >
                        Quick Buy on WhatsApp
                      </button>
                      <button
                        onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                        aria-pressed={isSelected}
                        className={`flex-1 min-h-[64px] text-xl font-bold rounded-2xl border-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2B705] ${
                          isSelected
                            ? 'bg-[#3A1712] text-[#FF9C89] border-[#E85D4F]'
                            : 'bg-[#0B2A1D] text-white border-[#2C5943]'
                        }`}
                      >
                        {isSelected ? 'Remove from Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="bg-[#123626] border-2 border-[#2C5943] rounded-3xl p-8 text-center shadow-lg">
            <p className="text-xl mb-5 text-[#F5F8F6]">We couldn't find that. Ask us directly instead:</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about products in AVP Agency.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[64px] px-8 bg-[#F2B705] text-[#0B2A1D] font-black text-xl rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2D26B]"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

        {/* Store Location */}
        <section className="bg-[#123626] border-2 border-[#2C5943] rounded-3xl p-6 text-center shadow-lg" aria-labelledby="location-heading">
          <h2 id="location-heading" className="text-xl font-black text-[#F2D26B] mb-4">📍 Visit Our Store</h2>

          <div className="text-lg text-[#F5F8F6] leading-relaxed max-w-md mx-auto mb-6 space-y-1">
            <p className="font-black text-white text-xl mb-2">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
            <p className="pt-3 text-[#F2D26B] font-bold">📦 We deliver anywhere in India</p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-safe:transition-transform motion-safe:active:scale-95 inline-flex items-center justify-center min-h-[64px] px-8 bg-[#F2B705] text-[#0B2A1D] font-black text-lg rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2D26B]"
          >
            Open in Google Maps
          </a>
        </section>
      </main>

      {/* Floating Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0B2A1D] border-t-4 border-[#F2B705] shadow-2xl p-4 z-50">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
            <p className="text-lg font-bold text-[#F2D26B] text-center sm:text-left">
              {cart.length} item{cart.length > 1 ? 's' : ''} in your cart
            </p>
            <button
              onClick={handleCartCheckout}
              className="motion-safe:transition-transform motion-safe:active:scale-95 w-full sm:w-auto min-h-[64px] bg-[#F2B705] text-[#0B2A1D] text-xl font-black px-8 rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2D26B]"
            >
              Send Cart to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0B2A1D] text-[#C9DDD0] py-6 text-center text-base border-t-2 border-[#2C5943] px-5">
        <p>© AVP Agency — Order by WhatsApp. Delivery all across India. No cash on delivery.</p>
      </footer>
    </div>
  );
}
