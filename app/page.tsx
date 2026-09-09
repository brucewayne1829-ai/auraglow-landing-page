"use client";

import React, { useState } from 'react';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const whatsappNumber = "9495562581"; 
  const doctorWhatsapp = "9942662959"; 
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

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

  const products = [
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

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  const docWaLink = `https://wa.me/${doctorWhatsapp}?text=${encodeURIComponent("Hi, I would like to book an appointment for consultation.")}`;

  return (
    <div className="min-h-screen bg-emerald-950 text-gray-800 font-sans flex flex-col justify-between">
      {/* Header */}
      <header className="bg-emerald-900 border-b border-emerald-800 text-white py-4 px-3 text-center shadow-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center">
            <img 
              src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747" 
              alt="AVP Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-base sm:text-xl font-bold tracking-wide">AVP Agency</h1>
            <p className="text-[10px] sm:text-xs text-emerald-300 tracking-wider font-medium">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
          </div>
        </div>
        <p className="mt-2 text-emerald-100 text-xs font-light italic">"Your Trusted Destination for Authentic Ayurvedic Medicines"</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-6 px-3 w-full">

        {/* Appointment WhatsApp Banner */}
        <section className="mb-6 bg-amber-500 border border-amber-600 rounded-2xl p-5 text-emerald-950 text-center shadow-xl">
          <h2 className="text-lg font-black mb-1">📅 Appointment WhatsApp</h2>
          <p className="text-xs font-medium mb-3">Click below to book your consultation appointment via WhatsApp.</p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-2.5 px-5 rounded-xl shadow-md transition-all active:scale-95 text-xs"
          >
            {/* WhatsApp SVG Logo */}
            <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Appointment WhatsApp</span>
          </a>
        </section>

        {/* Categories Section */}
        <section className="mb-8 bg-emerald-900/60 border border-emerald-800 rounded-2xl p-4 text-white text-center shadow-lg">
          <h2 className="text-base font-bold text-amber-300 mb-2">🌿 Select Medicine Category</h2>
          <p className="text-[11px] text-emerald-200 mb-4">Click on a category to filter products</p>
          
          <div className="flex flex-wrap justify-center gap-1.5">
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-amber-500 text-emerald-950 shadow-md scale-105 font-bold" 
                      : "bg-emerald-950 text-emerald-100 hover:bg-emerald-800 border border-emerald-700/60"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Products Grid */}
        <h2 className="text-base font-bold text-amber-300 mb-4 text-center">
          {selectedCategory === "All" ? "⭐ Available Medicines" : `⭐ ${selectedCategory}`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mb-8">
            {filteredProducts.map((item) => {
              const waMessage = encodeURIComponent(`Hi, I want to order ${item.name} (${item.price})`);
              const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100 flex flex-col justify-between hover:shadow-2xl transition-all">
                  <div>
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover bg-emerald-50" />
                    <div className="p-4 text-center">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{item.category}</span>
                      
                      <h3 className="text-base font-bold text-emerald-950 mt-2 mb-2">{item.name}</h3>

                      <p className="text-xs text-gray-700 font-medium mb-3 leading-relaxed">{item.desc}</p>

                      <p className="text-xl font-black text-emerald-700 mb-1">{item.price}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-95 text-xs"
                    >
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6 text-center text-white mb-8">
            <p className="text-xs mb-3">No products available under this category right now.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about AVP ${selectedCategory} products.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl text-xs transition-all"
            >
              Inquire via WhatsApp
            </a>
          </div>
        )}

        {/* Store Address Section */}
        <section className="bg-emerald-900 border border-emerald-800 rounded-2xl p-5 text-white text-center shadow-xl">
          <h2 className="text-base font-bold text-amber-300 mb-2">📍 Store Location & Details</h2>
          
          <div className="text-xs text-emerald-100 leading-relaxed max-w-lg mx-auto mb-4 space-y-1">
            <p className="font-bold text-white">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite to LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
            <p className="pt-2 text-xs text-emerald-300 font-semibold">📦 Pan-India Courier Delivery Available</p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-2 px-5 rounded-xl shadow-md transition-all active:scale-95 text-xs"
          >
            <span>Open in Google Maps</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-4 text-center text-[11px] border-t border-emerald-900 px-3">
        <p>© AVP Agency | Order directly via WhatsApp. (All-India Delivery Available | No Cash on Delivery)</p>
      </footer>
    </div>
  );
}
