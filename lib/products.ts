export interface Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  // --- Arishtams ---
  {
    id: 1,
    category: "Arishtams",
    name: "AVP Aswagandharishtam (450ml)",
    desc: "Improves body strength, reduces fatigue, and boosts overall vitality.",
    price: "₹175",
    image: "/aswagandharishtam.png"
  },
  {
    id: 2,
    category: "Arishtams",
    name: "AVP Dasamoolajeerakarishtam (450ml)",
    desc: "Traditional herbal decoction beneficial for post-natal care and digestion.",
    price: "₹165",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-6.png?v=1758801521&width=800"
  },
  {
    id: 3,
    category: "Arishtams",
    name: "AVP Asokarishtam (450ml)",
    desc: "Helps support women's health and regular menstrual cycles.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-10.png?v=1758802189&width=800"
  },
  {
    id: 4,
    category: "Arishtams",
    name: "AVP Saraswatharishtam Gold (200ml)",
    desc: "Special formulation with gold that supports memory, concentration, and cognitive functions.",
    price: "₹580",
    image: "https://avpayurveda.com/cdn/shop/files/ChatGPT_Image_Sep_5_2026_03_51_43_PM.png?v=1788603721&width=800"
  },

  // --- Kashayams ---
  {
    id: 5,
    category: "Kashayams",
    name: "AVP Dhanwantharam Kashayam (200ml)",
    desc: "Trusted herbal decoction for joint pain, rheumatism, and body aches.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/Dhanwantharam-Kashayam-1.png?v=1758801683&width=800"
  },
  {
    id: 6,
    category: "Kashayams",
    name: "AVP Khathakakhadiradi Kashayam (200ml)",
    desc: "Effective herbal remedy for skin health and blood purification.",
    price: "₹135",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-13.png?v=1758801832&width=800"
  },
  {
    id: 7,
    category: "Kashayams",
    name: "AVP Punarnavadi Kashayam (200ml)",
    desc: "Supports kidney health, manages water retention, and reduces swelling.",
    price: "₹150",
    image: "https://avpayurveda.com/cdn/shop/files/21_44077927-1715-4e60-8c6b-0775cb9cb0be.jpg?v=1763820118&width=800"
  },
  {
    id: 8,
    category: "Kashayams",
    name: "AVP Rasnairandadi Kashayam (200ml)",
    desc: "Classic decoction for joint stiffness, back pain, and rheumatism.",
    price: "₹225",
    image: "https://avpayurveda.com/cdn/shop/files/1_4cfc62b3-3570-459b-ba38-8528922e9efe.jpg?v=1763471327&width=800"
  },

  // --- Lehyam ---
  {
    id: 10,
    category: "Lehyam",
    name: "AVP Dasamoolarasayanam (200g)",
    desc: "Effective remedy for chronic cough, cold, and throat discomfort.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/5-2_11c50bc9-935b-4c5b-9fe3-b4126fbc5b1c.png?v=1758801654&width=800"
  },
  {
    id: 11,
    category: "Lehyam",
    name: "AVP Aswagandhadi Lehyam (400g)",
    desc: "Nourishing herbal jam that boosts strength, stamina, and energy.",
    price: "₹350",
    image: "https://avpayurveda.com/cdn/shop/files/3-2-12.png?v=1758802264&width=800"
  },
  {
    id: 12,
    category: "Lehyam",
    name: "AVP Soornanadi Lehyam (200g)",
    desc: "Supports digestive health and relieves gastric discomfort.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/1_38ee5251-9077-40e7-bebd-1c7e6e6c5d25.jpg?v=1766395193&width=800"
  },
  {
    id: 13,
    category: "Lehyam",
    name: "AVP Agasthya Rasayanam (200g)",
    desc: "Traditional rasayana for respiratory health, cough, and immunity.",
    price: "₹115",
    image: "https://avpayurveda.com/cdn/shop/files/Agasthyarasayanam-2.png?v=1758801427&width=800"
  },

  // --- Gulika / Tablet ---
  {
    id: 9,
    category: "Gulika / Tablet",
    name: "AVP Manjishtedi Kashayam Tablet (10 Tabs)",
    desc: "Blood purifying formula that supports healthy, clear skin conditions.",
    price: "₹75",
    image: "https://avpayurveda.com/cdn/shop/files/Manjishtadi-Kashayam-Tablet-1.png?v=1758802629&width=800"
  },
  {
    id: 14,
    category: "Gulika / Tablet",
    name: "AVP Manasamithra Vatakam (10 Tabs)",
    desc: "Helps calm the mind, reduces mental stress, and promotes quality sleep.",
    price: "₹275",
    image: "https://avpayurveda.com/cdn/shop/files/1_030b0fd9-a741-4418-99e4-0fd874f8758c.jpg?v=1762146451&width=800"
  },
  {
    id: 15,
    category: "Gulika / Tablet",
    name: "AVP Vayu Gulika (10 Tabs)",
    desc: "Effective remedy for flatulence, indigestion, and vata imbalances.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/Vayu-Gulika-1.png?v=1758803740&width=800"
  },
  {
    id: 16,
    category: "Gulika / Tablet",
    name: "AVP Dhanwantharam Gulika (10 Tabs)",
    desc: "Trusted Ayurvedic pill for respiratory issues, chest discomfort, and general wellness.",
    price: "₹35",
    image: "https://avpayurveda.com/cdn/shop/files/1_1_f50d264f-1c97-4f23-afde-ff40ab9bc848.jpg?v=1767438537&width=800"
  },
  {
    id: 17,
    category: "Gulika / Tablet",
    name: "AVP Gorochanadi Gulika (10 Tabs)",
    desc: "Beneficial for fever, pediatric complaints, and neurological wellness.",
    price: "₹160",
    image: "https://avpayurveda.com/cdn/shop/files/5-2.jpg?v=1758801764&width=800"
  },

  // --- Grithams ---
  {
    id: 18,
    category: "Grithams",
    name: "AVP Saraswatha Gritham (150g)",
    desc: "Medicated ghee formulation that supports memory, focus, and brain health.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/1_9241b43e-733b-4c3d-a4b8-0a42398e0087.jpg?v=1777533541&width=800"
  },

  // --- Thailams ---
  {
    id: 19,
    category: "Thailams",
    name: "AVP Dhanwantharam Thailam (200ml)",
    desc: "Classic massage oil for muscle relaxation, joint care, and physical strength.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/4-21-2.png?v=1758801824&width=800"
  }
];

export const categories = [
  "All",
  "Arishtams",
  "Kashayams",
  "Lehyam",
  "Gulika / Tablet",
  "Choornam",
  "Grithams",
  "Thailams"
];
