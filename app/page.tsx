import { useState } from 'react';
import Head from 'next/head';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
}

const products: Product[] = [
  { id: '1', name: 'Indukantham Kashayam', category: 'Kashayam', price: '₹260', description: 'Supports digestive health and boosts immunity.' },
  { id: '2', name: 'Aswagandharishtam', category: 'Arishtam', price: '₹240', description: 'Improves vitality, strength, and physical stamina.' },
  { id: '3', name: 'Dhanwantharam Thailam', category: 'Oil', price: '₹310', description: 'Traditional herbal oil for joint and muscle care.' },
  { id: '4', name: 'Karpasasathy Thailam', category: 'Oil', price: '₹290', description: 'Useful for neurological and muscular wellness.' },
  { id: '5', name: 'Amritarishtam', category: 'Arishtam', price: '₹230', description: 'Helps recover from chronic fevers and low immunity.' },
  { id: '6', name: 'Balarishtam', category: 'Arishtam', price: '₹250', description: 'Promotes general strength and nervous system health.' },
  { id: '7', name: 'Gulguluthiktam Kashayam', category: 'Kashayam', price: '₹280', description: 'Traditional formula for skin health and joint comfort.' },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number

  const addToCart = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: string) => {
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      <Head>
        <title>AVP Agency | Authentic Ayurvedic Medicines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Trust & Support Banner */}
      <header className="bg-emerald-800 text-white py-4 px-6 text-center shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">The Arya Vaidya Pharmacy (AVP)</h1>
        <p className="text-sm text-emerald-100 mt-1">100% Genuine Products • Direct Delivery</p>
        <div className="mt-2 text-xs bg-emerald-700/60 inline-block px-3 py-1 rounded-full text-emerald-50">
          WhatsApp Support Available in: <strong>English, Malayalam (മലയാളം), Tamil (தமிழ்)</strong>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-xl mx-auto px-4 py-6">
        
        {/* Order Step Guide */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-900">
          <p className="font-semibold mb-1">Simple Ordering Guide:</p>
          <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm">
            <li>Choose 'Quick Buy' for a single item, or 'Add to Cart' for multiple items.</li>
            <li>Clicking will open WhatsApp automatically with your product list.</li>
            <li>Just press <strong>Send</strong> on WhatsApp to complete your order!</li>
          </ol>
        </section>

        {/* Doctor Consultation Banner */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Need Doctor Consultation?</h2>
            <p className="text-xs text-gray-600 mt-0.5">Chat directly with our expert physician.</p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to consult with the doctor.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-emerald-700 transition"
          >
            Consult Doctor
          </a>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Available Medicines</h2>
          
          {products.map((product) => {
            const isSelected = cart.some((item) => item.id === product.id);

            return (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">{product.name}</h3>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                {/* Dual Action Buttons */}
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => handleQuickBuy(product)}
                    className="flex-1 bg-emerald-600 text-white text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-emerald-700 transition text-center"
                  >
                    Quick Buy via WhatsApp
                  </button>
                  <button
                    onClick={() => (isSelected ? removeFromCart(product.id) : addToCart(product))}
                    className={`flex-1 text-sm font-medium py-2.5 px-3 rounded-lg border transition text-center ${
                      isSelected
                        ? 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        : 'bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {isSelected ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Cart Bar (Appears when items are added) */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">{cart.length} item(s) selected</p>
              <p className="text-xs text-gray-500">Ready to send via WhatsApp</p>
            </div>
            <button
              onClick={handleCartCheckout}
              className="bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition"
            >
              Send Cart to WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
