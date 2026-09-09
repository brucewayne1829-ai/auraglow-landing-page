"use client";

import React, { useState } from 'react';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const whatsappNumber = "9495562581"; // ഓർഡർ ചെയ്യാനുള്ള നമ്പർ
  const doctorWhatsapp = "9942662959"; // ഡോക്ടറുടെ കൺസൾട്ടേഷൻ നമ്പർ
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
      desc: "Improves physical strength, helps with fatigue, and supports general well-being.",
      price: "₹175",
      image: "https://avpayurveda.com/cdn/shop/files/4-1_a87edc5a-4c61-4c89-b2c3-9eeb11d4f06c.jpg?v=1758802157&width=800"
    },
    {
      id: 2,
      category: "Lehyam",
      name: "AVP Dasamoolarasayanam (200g)",
      desc: "Effective for respiratory care, cough, and throat related issues.",
      price: "₹220",
      image: "https://avpayurveda.com/cdn/shop/files/5-2_11c50bc9-935b-4c5b-9fe3-b4126fbc5b1c.png?v=1758801654&width=800"
    },
    {
      id: 3,
      category: "Kashayams",
      name: "AVP Dhanwantharam Kashayam (200ml)",
      desc: "Useful in postnatal care, rheumatic conditions, and neurological disorders.",
      price: "₹200",
      image: "https://avpayurveda.com/cdn/shop/files/Dhanwantharam-Kashayam-1.png?v=1758801683&width=800"
    },
    {
      id: 4,
      category: "Gulika",
      name: "AVP Manasamithra Vatakam (10 Tabs)",
      desc: "Supports mental wellness, memory, and helps relieve stress and anxiety.",
      price: "₹275",
      image: "https://avpayurveda.com/cdn/shop/files/1_030b0fd9-a741-4418-99e4-0fd874f8758c.jpg?v=1762146451&width=800"
    },
    {
      id: 5,
      category: "Grithams",
      name: "AVP Saraswatha Gritham (150g)",
      desc: "Traditional ghee formulation that supports cognitive functions and memory.",
      price: "₹200",
      image: "https://avpayurveda.com/cdn/shop/files/1_9241b43e-733b-4c3d-a4b8-0a42398e0087.jpg?v=1777533541&width=800"
    },
    {
      id: 6,
      category: "Thailams",
      name: "AVP Dhanwantharam Thailam (200ml)",
      desc: "Relieves body pain, joint pain, and muscle weakness. Best oil for body massage.",
      price: "₹220",
      image: "https://avpayurveda.com/cdn/shop/files/4-21-2.png?v=1758801824&width=800"
    },
    {
      id: 7,
      category: "Kashayam Tablets",
      name: "AVP Manjishtedi Kashayam Tablet (10 Tabs)",
      desc: "Helps purify blood and supports healthy skin conditions.",
      price: "₹75",
      image: "https://avpayurveda.com/cdn/shop/files/Manjishtadi-Kashayam-Tablet-1.png?v=1758802629&width=800"
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(item => item.category === selectedCategory);

  const docWaLink = `https://wa.me/${doctorWhatsapp}?text=${encodeURIComponent("Hi Doctor, I would like to book an online consultation.")}`;

  return (
    <div className="min-h-screen bg-emerald-950 text-gray-800 font-sans flex flex-col justify-between">
      {/* Header */}
      <header className="bg-emerald-900 border-b border-emerald-800 text-white py-6 px-4 text-center shadow-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center">
            <img 
              src="https://avpayurveda.com/cdn/shop/files/Group_1_1_700x.webp?v=1771240747" 
              alt="AVP Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">AVP Agency</h1>
            <p className="text-xs text-emerald-300 tracking-wider">AUTHORISED DEALER - THE ARYA VAIDYA PHARMACY (COIMBATORE) LTD</p>
          </div>
        </div>
        <p className="mt-3 text-emerald-100 text-sm font-light italic">"One shop for all original ayurvedic medicines"</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-4 w-full">

        {/* Doctor Online Consultation Banner */}
        <section className="mb-8 bg-amber-500 border border-amber-600 rounded-2xl p-6 text-emerald-950 text-center shadow-xl">
          <h2 className="text-xl font-black mb-2">🩺 Doctor Online Consultation</h2>
          <p className="text-xs sm:text-sm font-medium mb-4">Consult with our expert ayurvedic physician directly via WhatsApp.</p>
          <a
            href={docWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-950 hover:bg-emerald-900 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all active:scale-95 text-sm"
          >
            <span>Chat with Doctor ({doctorWhatsapp})</span>
          </a>
        </section>

        {/* Categories Section */}
        <section className="mb-10 bg-emerald-900/60 border border-emerald-800 rounded-2xl p-6 text-white text-center shadow-lg">
          <h2 className="text-xl font-bold text-amber-300 mb-2">🌿 Select Medicine Category</h2>
          <p className="text-xs text-emerald-200 mb-6">Click on a category to filter the medicines list.</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-amber-500 text-emerald-950 shadow-md scale-105" 
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
        <h2 className="text-xl font-bold text-amber-300 mb-6 text-center">
          {selectedCategory === "All" ? "⭐ Available Medicines" : `⭐ ${selectedCategory}`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mb-10">
            {filteredProducts.map((item) => {
              const waMessage = encodeURIComponent(`Hi, I want to order ${item.name} (${item.price})`);
              const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100 flex flex-col justify-between hover:shadow-2xl transition-all">
                  <div>
                    <img src={item.image} alt={item.name} className="w-full h-52 object-cover bg-emerald-50" />
                    <div className="p-6 text-center">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase">{item.category}</span>
                      <h3 className="text-xl font-bold text-emerald-950 mt-3 mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">{item.desc}</p>
                      <p className="text-2xl font-black text-emerald-700 mb-2">{item.price}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-95"
                    >
                      <span>Order via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-8 text-center text-white mb-10">
            <p className="text-sm mb-4">No products listed directly under this category right now.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to inquire about AVP ${selectedCategory} products.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-all"
            >
              Ask for {selectedCategory} via WhatsApp
            </a>
          </div>
        )}

        {/* Store Address Section */}
        <section className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-white text-center shadow-xl">
          <h2 className="text-xl font-bold text-amber-300 mb-3">📍 Visit Our Agency / Store Location</h2>
          
          <div className="text-sm text-emerald-100 leading-relaxed max-w-lg mx-auto mb-5 space-y-1">
            <p className="font-semibold text-white">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite to LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
            <p className="pt-2 text-xs text-emerald-300 font-medium">📦 All India Shipping Available</p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-2.5 px-6 rounded-xl shadow-md transition-all active:scale-95 text-sm"
          >
            <span>Open in Google Maps</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-6 text-center text-xs border-t border-emerald-900">
        <p>© AVP Agency | Order directly via WhatsApp. (All-India Delivery Available | No Cash on Delivery)</p>
      </footer>
    </div>
  );
}
