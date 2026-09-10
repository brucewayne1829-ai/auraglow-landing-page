export interface Product {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  // --- Arishtams (101 - 107) ---
  {
    id: 101,
    category: "Arishtams",
    name: "AVP Aswagandharishtam (450ml)",
    desc: "Improves body strength, reduces fatigue, and boosts overall vitality.",
    price: "₹175",
    image: "/aswagandharishtam.png"
  },
  {
    id: 102,
    category: "Arishtams",
    name: "AVP Dasamoolajeerakarishtam (450ml)",
    desc: "Traditional herbal decoction beneficial for post-natal care and digestion.",
    price: "₹165",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-6.png?v=1758801521&width=800"
  },
  {
    id: 103,
    category: "Arishtams",
    name: "AVP Asokarishtam (450ml)",
    desc: "Helps support women's health and regular menstrual cycles.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-10.png?v=1758802189&width=800"
  },
  {
    id: 104,
    category: "Arishtams",
    name: "AVP Saraswatharishtam Gold (200ml)",
    desc: "Special formulation with gold that supports memory, concentration, and cognitive functions.",
    price: "₹580",
    image: "https://avpayurveda.com/cdn/shop/files/ChatGPT_Image_Sep_5_2026_03_51_43_PM.png?v=1788603721&width=800"
  },
  {
    id: 105,
    category: "Arishtams",
    name: "Draksharishtem (450ml)",
    desc: "Traditional ayurvedic formulation for general health and digestion.",
    price: "₹150",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-14.png?v=1758801960&width=800"
  },
  {
    id: 106,
    category: "Arishtams",
    name: "Vasarishtem (450ml)",
    desc: "Effective herbal remedy for respiratory wellness and cough.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/SA101696-1-e1680771676592.jpg?v=1758802073&width=800"
  },
  {
    id: 107,
    category: "Arishtams",
    name: "Jeerakarishtem (450ml)",
    desc: "Classic tonic that supports digestive health and post-natal care.",
    price: "₹160",
    image: "https://avpayurveda.com/cdn/shop/files/1_6256cf8e-4ac6-4b3e-9f70-a5af73b5d89e.png?v=1764229766&width=800"
  },

  // --- Kashayams (201 - 207) ---
  {
    id: 201,
    category: "Kashayams",
    name: "AVP Dhanwantharam Kashayam (200ml)",
    desc: "Trusted herbal decoction for joint pain, rheumatism, and body aches.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/Dhanwantharam-Kashayam-1.png?v=1758801683&width=800"
  },
  {
    id: 202,
    category: "Kashayams",
    name: "AVP Khathakakathiradi Kashayam (200ml)",
    desc: "Effective herbal remedy for skin health and blood purification.",
    price: "₹135",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-13.png?v=1758801832&width=800"
  },
  {
    id: 203,
    category: "Kashayams",
    name: "AVP Punarnavadi Kashayam (200ml)",
    desc: "Supports kidney health, manages water retention, and reduces swelling.",
    price: "₹150",
    image: "https://avpayurveda.com/cdn/shop/files/21_44077927-1715-4e60-8c6b-0775cb9cb0be.jpg?v=1763820118&width=800"
  },
  {
    id: 204,
    category: "Kashayams",
    name: "AVP Rasnairandadi Kashayam (200ml)",
    desc: "Classic decoction for joint stiffness, back pain, and rheumatism.",
    price: "₹225",
    image: "https://avpayurveda.com/cdn/shop/files/1_4cfc62b3-3570-459b-ba38-8528922e9efe.jpg?v=1763471327&width=800"
  },
  {
    id: 205,
    category: "Kashayams",
    name: "Drakshedi Kashayam (200ml)",
    desc: "Herbal decoction traditionally used for fatigue and general debility.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/3-2-24.png?v=1758801729&width=800"
  },
  {
    id: 206,
    category: "Kashayams",
    name: "Indhukantham Kashayam (200ml)",
    desc: "Ayurvedic decoction for stomach discomfort and immune support.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/4_1_428a6692-86bd-4837-8251-d2339d617349.jpg?v=1764574197&width=800"
  },
  {
    id: 207,
    category: "Kashayams",
    name: "Gandharvahastedi Kashayam (200ml)",
    desc: "Traditional formulation helpful for digestive wellness and joint comfort.",
    price: "₹140",
    image: "https://avpayurveda.com/cdn/shop/files/SA101726.jpg?v=1758801592&width=800"
  },

  // --- Lehyam (301 - 307) ---
  {
    id: 301,
    category: "Lehyam",
    name: "AVP Dasamoolarasayanam (200g)",
    desc: "Effective remedy for chronic cough, cold, and throat discomfort.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/5-2_11c50bc9-935b-4c5b-9fe3-b4126fbc5b1c.png?v=1758801654&width=800"
  },
  {
    id: 302,
    category: "Lehyam",
    name: "AVP Aswagandhadi Lehyam (400g)",
    desc: "Nourishing herbal jam that boosts strength, stamina, and energy.",
    price: "₹350",
    image: "https://avpayurveda.com/cdn/shop/files/3-2-12.png?v=1758802264&width=800"
  },
  {
    id: 303,
    category: "Lehyam",
    name: "AVP Soornanadi Lehyam (200g)",
    desc: "Supports digestive health and relieves gastric discomfort.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/1_38ee5251-9077-40e7-bebd-1c7e6e6c5d25.jpg?v=1766395193&width=800"
  },
  {
    id: 304,
    category: "Lehyam",
    name: "AVP Agasthya Rasayanam (200g)",
    desc: "Traditional rasayana for respiratory health, cough, and immunity.",
    price: "₹115",
    image: "https://avpayurveda.com/cdn/shop/files/Agasthyarasayanam-2.png?v=1758801427&width=800"
  },
  {
    id: 305,
    category: "Lehyam",
    name: "Kalyanagulam (400g)",
    desc: "Herbal jam preparation supporting internal cleansing and wellness.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/1_e4e97d85-81f0-4e17-a18a-e99b5e971065.jpg?v=1765961301&width=800"
  },
  {
    id: 306,
    category: "Lehyam",
    name: "Thraivril Lehyam (400g)",
    desc: "Special ayurvedic electuary for vitality and overall health.",
    price: "₹145",
    image: "https://avpayurveda.com/cdn/shop/files/11_3212f2ba-a1f0-4a0b-af25-3cf5aaa9443b.jpg?v=1763819211&width=800"
  },
  {
    id: 307,
    category: "Lehyam",
    name: "Dasamoolahareethaki (400g)",
    desc: "Rejuvenating herbal jam combining the power of ten roots and harithaki.",
    price: "₹115",
    image: "https://avpayurveda.com/cdn/shop/files/1_122a9f18-34f2-48bb-b15f-bc2a57b6a0d7.jpg?v=1765954936&width=800"
  },

  // --- Gulika / Tablet (401 - 408) ---
  {
    id: 401,
    category: "Gulika / Tablet",
    name: "AVP Manjishtedi Kashayam Tablet (10 Tabs)",
    desc: "Blood purifying formula that supports healthy, clear skin conditions.",
    price: "₹75",
    image: "https://avpayurveda.com/cdn/shop/files/Manjishtadi-Kashayam-Tablet-1.png?v=1758802629&width=800"
  },
  {
    id: 402,
    category: "Gulika / Tablet",
    name: "AVP Manasamithra Vatakam (10 Tabs)",
    desc: "Helps calm the mind, reduces mental stress, and promotes quality sleep.",
    price: "₹275",
    image: "https://avpayurveda.com/cdn/shop/files/1_030b0fd9-a741-4418-99e4-0fd874f8758c.jpg?v=1762146451&width=800"
  },
  {
    id: 403,
    category: "Gulika / Tablet",
    name: "AVP Vayu Gulika (10 Tabs)",
    desc: "Effective remedy for flatulence, indigestion, and vata imbalances.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/Vayu-Gulika-1.png?v=1758803740&width=800"
  },
  {
    id: 404,
    category: "Gulika / Tablet",
    name: "AVP Dhanwantharam Gulika (10 Tabs)",
    desc: "Trusted Ayurvedic pill for respiratory issues, chest discomfort, and general wellness.",
    price: "₹35",
    image: "https://avpayurveda.com/cdn/shop/files/1_1_f50d264f-1c97-4f23-afde-ff40ab9bc848.jpg?v=1767438537&width=800"
  },
  {
    id: 405,
    category: "Gulika / Tablet",
    name: "AVP Gorochanadi Gulika (10 Tabs)",
    desc: "Beneficial for fever, pediatric complaints, and neurological wellness.",
    price: "₹160",
    image: "https://avpayurveda.com/cdn/shop/files/5-2.jpg?v=1758801764&width=800"
  },
  {
    id: 406,
    category: "Gulika / Tablet",
    name: "Suvarnamuktaedi Gulika (10 Nos)",
    desc: "Precious formulation containing mineral preparations for specialized care.",
    price: "₹180",
    image: "https://avpayurveda.com/cdn/shop/files/51.jpg?v=1764254129&width=800"
  },
  {
    id: 407,
    category: "Gulika / Tablet",
    name: "Vilwaedi Gulika (10 Nos)",
    desc: "Traditional herbal tablets useful for digestive balance.",
    price: "₹50",
    image: "https://avpayurveda.com/cdn/shop/files/11_89d49319-1684-4af5-a96a-fa55617b8550.jpg?v=1764255625&width=800"
  },
  {
    id: 408,
    category: "Gulika / Tablet",
    name: "Swasanandam Gulika (10 Nos)",
    desc: "Herbal pills traditionally used for respiratory comfort.",
    price: "₹40",
    image: "https://avpayurveda.com/cdn/shop/files/Swasanandam-Gulika-1-01.jpg?v=1758803937&width=800"
  },

  // --- Grithams (501) ---
  {
    id: 501,
    category: "Grithams",
    name: "AVP Saraswatha Gritham (150g)",
    desc: "Medicated ghee formulation that supports memory, focus, and brain health.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/1_9241b43e-733b-4c3d-a4b8-0a42398e0087.jpg?v=1777533541&width=800"
  },

  // --- Thailams (601) ---
  {
    id: 601,
    category: "Thailams",
    name: "AVP Dhanwantharam Thailam (200ml)",
    desc: "Classic massage oil for muscle relaxation, joint care, and physical strength.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/4-21-2.png?v=1758801824&width=800"
  },

  // --- Other Home Made Products (701) ---
  {
    id: 701,
    category: "Other/HomeMade Products",
    name: "Special Nadan Vaidyar Pain Relief Oil",
    desc: "Traditional homemade blend with Shallots, Thottavadi, and Black Pepper for joint and muscle relief.",
    price: "₹250",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60"
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
  "Thailams",
  "Other/HomeMade Products"
];
