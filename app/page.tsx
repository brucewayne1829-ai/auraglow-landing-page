"use client";

import React from 'react';

export default function Page() {
  const whatsappNumber = "9715616987";
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

  const products = [
    {
      id: 1,
      name: "AVP Chyavanaprasam (250g)",
      desc: "പ്രതിരോധശേഷിയും ഊർജ്ജവും വർദ്ധിപ്പിക്കാൻ സഹായിക്കുന്ന പരമ്പരാഗത ആയുർവേദ ലേഹ്യം.",
      price: "₹399",
      image: "https://avpayurveda.com/cdn/shop/files/Slide-1.jpg?v=1770813826&width=800"
    },
    {
      id: 2,
      name: "AVP Dhanwantharam Thailam (200ml)",
      desc: "വാതസംബന്ധമായ വേദനകൾക്കും പേശി ബലഹീനതയ്ക്കും ശരീര മസാജിനും മികച്ച തൈലം.",
      price: "₹190",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-gray-800 font-sans flex flex-col justify-between">
       {/* Header with AVP Logo */}
      <header className="bg-emerald-900 border-b border-emerald-800 text-white py-6 px-4 text-center shadow-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          
          {/* AVP LOGO IMAGE HERE */}
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
        <p className="mt-3 text-emerald-100 text-sm font-light italic">"One shop for all ayurvedic medicines"</p>
      </header>


      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mb-10">
          {products.map((item) => {
            const waMessage = encodeURIComponent(`Hi, I want to order ${item.name} (${item.price})`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100 flex flex-col justify-between hover:shadow-2xl transition-all">
                <div>
                  <img src={item.image} alt={item.name} className="w-full h-52 object-cover bg-emerald-50" />
                  <div className="p-6 text-center">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase">AVP Genuine</span>
                    <h3 className="text-xl font-bold text-emerald-950 mt-3 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
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

        {/* Store Address & Location Section */}
        <section className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-white text-center shadow-xl">
          <h2 className="text-xl font-bold text-amber-300 mb-3">📍 Visit Our Agency / Store Location</h2>
          
          <div className="text-sm text-emerald-100 leading-relaxed max-w-lg mx-auto mb-5 space-y-1">
            <p className="font-semibold text-white">The Arya Vaidya Pharmacy (Coimbatore) Limited</p>
            <p>No 505, 'Pournami' Complex, NSR Road,</p>
            <p>Opposite to LIC Office, S'Bend, Nesavaalar Colony,</p>
            <p>Saibaba Colony, Coimbatore, Tamil Nadu - 641011</p>
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
        <p>© AVP Agency | Order directly via WhatsApp. (no cash on delivery)</p>
      </footer>
    </div>
  );
}
