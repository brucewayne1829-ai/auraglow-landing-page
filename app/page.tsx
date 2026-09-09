"use client";

import React from 'react';

export default function Page() {
  const whatsappNumber = "9715616987";

  const products = [
    {
      id: 1,
      name: "AVP Chyavanaprasam (400g)",
      desc: "പ്രതിരോധശേഷിയും ഊർജ്ജവും വർദ്ധിപ്പിക്കാൻ സഹായിക്കുന്ന പരമ്പരാഗത ആയുർവേദ ലേഹ്യം.",
      price: "₹215",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "AVP Dhanwantharam Thailam (200ml)",
      desc: "വാതസംബന്ധമായ വേദനകൾക്കും പേശി ബലഹീനതയ്ക്കും ശരീര മസാജിനും മികച്ച തൈലം.",
      price: "₹190",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-gray-800 font-sans">
      {/* Header with AVP Branding */}
      <header className="bg-emerald-900 border-b border-emerald-800 text-white py-6 px-4 text-center shadow-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-4xl mx-auto">
          {/* AVP Logo Badge */}
          <div className="bg-emerald-800 border-2 border-emerald-600 text-amber-300 font-serif font-black text-xl px-4 py-1.5 rounded-lg shadow-inner tracking-widest">
            AVP
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">AVP Agency</h1>
            <p className="text-xs text-emerald-300 tracking-wider">AUTHORISED DEALER - THE ARYA VAIDYA PHARMACY (COIMBATORE) LTD</p>
          </div>
        </div>
        <p className="mt-3 text-emerald-100 text-sm font-light italic">"One shop for all ayurvedic medicines"</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {products.map((item) => {
            const waMessage = encodeURIComponent(`Hi, I want to order ${item.name} (${item.price})`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            return (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100 flex flex-col justify-between hover:shadow-2xl transition-all">
                <div>
                  <img src={item.image} alt={item.name} className="w-full h-52 object-cover bg-gray-100" />
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
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-400 py-6 text-center text-xs border-t border-emerald-900">
        <p>© AVP Agency | Order directly via WhatsApp</p>
      </footer>
    </div>
  );
}
