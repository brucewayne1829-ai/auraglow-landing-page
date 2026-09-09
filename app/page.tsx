"use client";

import React from 'react';

export default function Page() {
  const whatsappNumber = "9715616987";

  const products = [
    {
      id: 1,
      name: "ആയുർവേദ പ്രൊഡക്റ്റ് 1",
      desc: "മരുന്നിന്റെ വിശദവിവരങ്ങൾ ഇവിടെ നൽകാം.",
      price: "₹250",
      image: "https://via.placeholder.com/300x200?text=Ayurvedic+Medicine+1"
    },
    {
      id: 2,
      name: "ആയുർവേദ പ്രൊഡക്റ്റ് 2",
      desc: "മരുന്നിന്റെ വിശദവിവരങ്ങൾ ഇവിടെ നൽകാം.",
      price: "₹450",
      image: "https://via.placeholder.com/300x200?text=Ayurvedic+Medicine+2"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-8 px-4 text-center shadow-md">
        <div className="flex justify-center items-center gap-4 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">AVP Agency</h1>
          <span className="bg-white text-emerald-900 text-xs font-bold px-3 py-1 rounded">LOGO</span>
        </div>
        <p className="mt-2 text-emerald-100 text-lg">One shop for all ayurvedic medicines</p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => {
            const waMessage = encodeURIComponent(`Hi, I want to order ${item.name}`);
            const waLink = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            return (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover bg-gray-200" />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                    <p className="text-lg font-bold text-emerald-600 mb-4">{item.price}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
