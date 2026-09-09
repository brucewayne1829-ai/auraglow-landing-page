"use client";

import { useState } from 'react';

interface Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    category: "Arishtams",
    name: "AVP Aswagandharishtam (450ml)",
    desc: "Improves body strength, reduces fatigue, and boosts overall vitality.",
    price: "₹175",
    image: "https://avpayurveda.com/cdn/shop/files/4-1_a87edc5a-4c61-4c89-b2c3-9eeb11d4f06c.jpg?v=1758802157&width=800"
  },
  {
    id: 2,
    category: "Lehyam",
    name: "AVP Dasamoolarasayanam (200g)",
    desc: "Effective remedy for chronic cough, cold, and throat discomfort.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/5-2_11c50bc9-935b-4c5b-9fe3-b4126fbc5b1c.png?v=1758801654&width=800"
  },
  {
    id: 3,
    category: "Kashayams",
    name: "AVP Dhanwantharam Kashayam (200ml)",
    desc: "Trusted herbal decoction for joint pain, rheumatism, and body aches.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/Dhanwantharam-Kashayam-1.png?v=1758801683&width=800"
  },
  {
    id: 4,
    category: "Gulika",
    name: "AVP Manasamithra Vatakam (10 Tabs)",
    desc: "Helps calm the mind, reduces mental stress, and promotes quality sleep.",
    price: "₹275",
    image: "https://avpayurveda.com/cdn/shop/files/1_030b0fd9-a741-4418-99e4-0fd874f8758c.jpg?v=1762146451&width=800"
  },
  {
    id: 5,
    category: "Grithams",
    name: "AVP Saraswatha Gritham (150g)",
    desc: "Medicated ghee formulation that supports memory, focus, and brain health.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/1_9241b43e-733b-4c3d-a4b8-0a42398e0087.jpg?v=1777533541&width=800"
  },
  {
    id: 6,
    category: "Thailams",
    name: "AVP Dhanwantharam Thailam (200ml)",
    desc: "Classic massage oil for muscle relaxation, joint care, and physical strength.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/4-21-2.png?v=1758801824&width=800"
  },
  {
    id: 7,
    category: "Kashayam Tablets",
    name: "AVP Manjishtedi Kashayam Tablet (10 Tabs)",
    desc: "Blood purifying formula that supports healthy, clear skin conditions.",
    price: "₹75",
    image: "https://avpayurveda.com/cdn/shop/files/Manjishtadi-Kashayam-Tablet-1.png?v=1758802629&width=800"
  }
];

const categories = [
  "All",
  "Arishtams",
  "Kashayams",
  "Kashayam Tablets",
  "Lehyam",
  "Gulika",
  "Choornam",
  "Grithams",
  "Thailams"
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<Product[]>([]);
  
  const whatsappNumber = "9495562581"; 
  const doctorWhatsapp = "9942662959"; 
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 text-gray-100 font-sans flex flex-col justify-between pb-28 selection:bg-amber-400 selection:text-emerald-950">
      
      {/* Luxury Header */}
      <header className="backdrop-blur-md bg-emerald-950/80 border-b border-emerald-800/50 text-white py-5 px-4 text-center sticky top-0 z-40 shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-4xl mx-auto">
          <div className="bg-white/95 p-2.5 rounded-2xl shadow-xl ring-1 ring-emerald-500/30 flex items-center justify-center">
            <img 
              src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747" 
              alt="AVP Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-2xl font-black tracking-wider text-white">AVP Agency</h1>
            <p className="text-[10px] sm:text-xs text-amber-300 tracking-widest font-semibold uppercase">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
          </div>
        </div>
        <p className="mt-2 text-emerald-200/90 text-xs font-light tracking-wide italic">"100% Genuine Ayurvedic Heritage • Direct Home Delivery"</p>
        <div className="mt-3 text-[11px] bg-emerald-900/90 inline-block px-4 py-1.5 rounded-full text-amber-200 border border-emerald-700/60 shadow-inner font-medium">
          💬 Support Languages: <strong>English | മലയാളം | தமிழ்</strong>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 w-full">

        {/* Ordering Guide Card */}
        <section className="mb-8 bg-emerald-900/40 backdrop-blur-xl border border-emerald-700/40 rounded-3xl p-6 text-emerald-100 shadow-2xl text-xs sm:text-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <p className="font-bold text-amber-300 mb-2 flex items-center gap-1.5 text-sm">
            <span>✨</span> Simple Ordering Guide:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-emerald-200/90 text-xs sm:text-sm">
            <li>Choose <strong>'Quick Buy'</strong> for instant single items, or <strong>'Add to Cart'</strong> for multi-item checkout.</li>
            <li>Your selection will automatically open in WhatsApp with a pre-formatted message.</li>
            <li>Simply press <strong>Send</strong> on WhatsApp to place your order instantly!</li>
          </ol>
        </section>

        {/* Doctor Appointment Banner */}
        <section className="mb-8 bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400/50 rounded-3xl p-6 text-emerald-950 text-center shadow-2xl relative overflow-hidden transform transition hover:scale-[1.01]">
          <h2 className="text-lg sm:text-xl font-black mb-1.5">📅 Expert Doctor Consultation</h2>
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

        {/* Categories Carousel / Grid */}
        <section className="mb-10 bg-emerald-900/50 backdrop-blur-md border border-emerald-700/40 rounded-3xl p-5 text-white text-center shadow-2xl">
          <h2 className="text-base sm:text-lg font-bold text-amber-300 mb-1">🌿 Select Medicine Category</h2>
          <p className="text-[11px] text-emerald-200/80 mb-4">Explore authentic formulations by category</p>
          
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

        {/* Products Grid Header */}
        <h2 className="text-lg font-bold text-amber-300 mb-6 text-center tracking-wide">
          {selectedCategory === "All" ? "⭐ Authentic Ayurvedic Formulary" : `⭐ ${selectedCategory}`}
        </h2>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mb-10">
            {filteredProducts.map((item) => {
              const isSelected = cart.some((cartItem) => cartItem.id === item.id);

              return (
                <div key={item.id} className="bg-emerald-900/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-emerald-700/40 flex flex-col justify-between hover:border-amber-400/50 transition-all group">
                  <div>
                    <div className="relative overflow-hidden bg-emerald-950/50 p-4">
                      <img src={item.image} alt={item.name} className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-500" />
                      <span className="absolute top-3 right-3 bg-amber-400/90 text-emerald-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">{item.category}</span>
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.name}</h3>
                      <p className="text-xs text-emerald-200/80 font-normal mb-4 leading-relaxed">{item.desc}</p>
                      <p className="text-xl font-black text-amber-300 mb-2">{item.price}</p>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="p-5 pt-0 flex gap-2.5">
                    <button
                      onClick={() => handleQuickBuy(item)}
                      className="flex-1 bg-amber-400 hover:bg-amber-500 text-emerald-950 font-black py-3 px-3 rounded-2xl shadow-xl transition-all active:scale-95 text-xs text-center"
                    >
                      Quick Buy
                    </button>
                    <button
                      onClick={() => (isSelected ? removeFromCart(item.id) : addToCart(item))}
                      className={`flex-1 text-xs font-bold py-3 px-3 rounded-2xl transition text-center shadow-lg ${
                        isSelected
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 hover:bg-rose-500/30'
                          : 'bg-emerald-950/80 text-emerald-100 border border-emerald-700/60 hover:bg-emerald-800'
                      }`}
                    >
                      {isSelected ? 'Remove Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-700/40 rounded-3xl p-8 text-center text-white mb-10 shadow-2xl">
            <p className="text-xs sm:text-sm mb-4 text-emerald-200">No products available under this category right now.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about AVP ${selectedCategory} products.`)}`}
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
          <h2 className="text-base sm:text-lg font-bold text-amber-300 mb-3">📍 Store Location & Details</h2>
          
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
        <div className="fixed bottom-0 left-0 right-0 bg-emerald-950/95 backdrop-blur-2xl border-t border-emerald-700/50 shadow-2xl p-4 z-50 animate-slide-up">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="text-white">
              <p className="text-xs sm:text-sm font-bold text-amber-300">{cart.length} item(s) in cart</p>
              <p className="text-[10px] text-emerald-200/80">Ready for instant WhatsApp checkout</p>
            </div>
            <button
              href="#"
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
