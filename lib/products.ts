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
    desc: "Relieves fatigue, reduces stress, and builds physical stamina & energy.",
    price: "₹175",
    image: "/aswagandharishtam.png"
  },
  {
    id: 102,
    category: "Arishtams",
    name: "AVP Dasamoolajeerakarishtam (450ml)",
    desc: "Excellent for post-delivery care (Prasava Raksha), improves digestion & immunity.",
    price: "₹165",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-6.png?v=1758801521&width=800"
  },
  {
    id: 103,
    category: "Arishtams",
    name: "AVP Asokarishtam (450ml)",
    desc: "Regulates menstrual cycles, relieves period cramps, and supports women's health.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-10.png?v=1758802189&width=800"
  },
  {
    id: 104,
    category: "Arishtams",
    name: "AVP Saraswatharishtam Gold (200ml)",
    desc: "Enriched with Gold (Swarna). Enhances memory, focus, and speech clarity.",
    price: "₹580",
    image: "https://avpayurveda.com/cdn/shop/files/ChatGPT_Image_Sep_5_2026_03_51_43_PM.png?v=1788603721&width=800"
  },
  {
    id: 105,
    category: "Arishtams",
    name: "AVP Draksharishtam (450ml)",
    desc: "Cures anemia, improves digestion, and relieves physical weakness.",
    price: "₹150",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-14.png?v=1758801960&width=800"
  },
  {
    id: 106,
    category: "Arishtams",
    name: "AVP Vasarishtam (450ml)",
    desc: "Highly effective for chronic cough, asthma, and respiratory allergies.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/SA101696-1-e1680771676592.jpg?v=1758802073&width=800"
  },
  {
    id: 107,
    category: "Arishtams",
    name: "AVP Jeerakarishtam (450ml)",
    desc: "Soothes stomach issues, aids digestion, and essential for post-natal care.",
    price: "₹160",
    image: "https://avpayurveda.com/cdn/shop/files/1_6256cf8e-4ac6-4b3e-9f70-a5af73b5d89e.png?v=1764229766&width=800"
  },

  // --- Kashayams (201 - 207) ---
  {
    id: 201,
    category: "Kashayams",
    name: "AVP Dhanwantharam Kashayam (200ml)",
    desc: "Best for joint pains, arthritis, backache, and nerve-related issues.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/Dhanwantharam-Kashayam-1.png?v=1758801683&width=800"
  },
  {
    id: 202,
    category: "Kashayams",
    name: "AVP Katakakhadiradi Kashayam (200ml)",
    desc: "Excellent blood purifier. Helps manage skin allergies and high blood sugar.",
    price: "₹135",
    image: "https://avpayurveda.com/cdn/shop/files/4-2-13.png?v=1758801832&width=800"
  },
  {
    id: 203,
    category: "Kashayams",
    name: "AVP Punarnavadi Kashayam (200ml)",
    desc: "Reduces body swelling (edema), supports kidney function, and water retention.",
    price: "₹150",
    image: "https://avpayurveda.com/cdn/shop/files/21_44077927-1715-4e60-8c6b-0775cb9cb0be.jpg?v=1763820118&width=800"
  },
  {
    id: 204,
    category: "Kashayams",
    name: "AVP Rasnairandadi Kashayam (200ml)",
    desc: "Fast relief from severe joint stiffness, lower back pain, and muscle spasms.",
    price: "₹225",
    image: "https://avpayurveda.com/cdn/shop/files/1_4cfc62b3-3570-459b-ba38-8528922e9efe.jpg?v=1763471327&width=800"
  },
  {
    id: 205,
    category: "Kashayams",
    name: "AVP Drakshadi Kashayam (200ml)",
    desc: "Relieves excessive body heat, fatigue, and weakness. Protects liver health.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/3-2-24.png?v=1758801729&width=800"
  },
  {
    id: 206,
    category: "Kashayams",
    name: "AVP Indukantham Kashayam (200ml)",
    desc: "Boosts natural immunity, cures chronic fevers, and relieves gas trouble.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/4_1_428a6692-86bd-4837-8251-d2339d617349.jpg?v=1764574197&width=800"
  },
  {
    id: 207,
    category: "Kashayams",
    name: "AVP Gandharvahastadi Kashayam (200ml)",
    desc: "Mild laxative that clears bowel movements and relieves back pain.",
    price: "₹140",
    image: "https://avpayurveda.com/cdn/shop/files/SA101726.jpg?v=1758801592&width=800"
  },

  // --- Lehyam (301 - 307) ---
  {
    id: 301,
    category: "Lehyam",
    name: "AVP Dasamoola Rasayanam (200g)",
    desc: "Highly effective for breathing difficulties, asthma, and chronic cough.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/5-2_11c50bc9-935b-4c5b-9fe3-b4126fbc5b1c.png?v=1758801654&width=800"
  },
  {
    id: 302,
    category: "Lehyam",
    name: "AVP Aswagandhadi Lehyam (400g)",
    desc: "Weight gain supplement that builds muscle mass, strength, and stamina.",
    price: "₹350",
    image: "https://avpayurveda.com/cdn/shop/files/3-2-12.png?v=1758802264&width=800"
  },
  {
    id: 303,
    category: "Lehyam",
    name: "AVP Sooranadi Lehyam (200g)",
    desc: "The best Ayurvedic remedy for all types of piles (hemorrhoids) and indigestion.",
    price: "₹170",
    image: "https://avpayurveda.com/cdn/shop/files/1_38ee5251-9077-40e7-bebd-1c7e6e6c5d25.jpg?v=1766395193&width=800"
  },
  {
    id: 304,
    category: "Lehyam",
    name: "AVP Agasthya Rasayanam (200g)",
    desc: "Protects against recurrent colds, allergies, and builds strong lung immunity.",
    price: "₹115",
    image: "https://avpayurveda.com/cdn/shop/files/Agasthyarasayanam-2.png?v=1758801427&width=800"
  },
  {
    id: 305,
    category: "Lehyam",
    name: "AVP Kalyanagulam (200g)",
    desc: "Safe laxative that detoxifies the body and helps treat skin disorders.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/1_e4e97d85-81f0-4e17-a18a-e99b5e971065.jpg?v=1765961301&width=800"
  },
  {
    id: 306,
    category: "Lehyam",
    name: "AVP Thrivril Lehyam (200g)",
    desc: "Excellent for treating severe constipation and ensuring smooth bowel clearance.",
    price: "₹145",
    image: "https://avpayurveda.com/cdn/shop/files/11_3212f2ba-a1f0-4a0b-af25-3cf5aaa9443b.jpg?v=1763819211&width=800"
  },
  {
    id: 307,
    category: "Lehyam",
    name: "AVP Dasamoolaharitaki Lehyam (200g)",
    desc: "Reduces body swelling, aids weight loss, and improves liver health.",
    price: "₹115",
    image: "https://avpayurveda.com/cdn/shop/files/1_122a9f18-34f2-48bb-b15f-bc2a57b6a0d7.jpg?v=1765954936&width=800"
  },

  // --- Gulika / Tablet (401 - 408) ---
  {
    id: 401,
    category: "Gulika / Tablet",
    name: "AVP Manjishtadi Kashayam Tablet (10\u00A0Tablets)",
    desc: "Purifies blood to clear acne, pimples, and stubborn skin allergies.",
    price: "₹75",
    image: "https://avpayurveda.com/cdn/shop/files/Manjishtadi-Kashayam-Tablet-1.png?v=1758802629&width=800"
  },
  {
    id: 402,
    category: "Gulika / Tablet",
    name: "AVP Manasamithra Vatakam (10\u00A0Tablets)",
    desc: "Reduces anxiety, mental stress, and promotes deep, uninterrupted sleep.",
    price: "₹275",
    image: "https://avpayurveda.com/cdn/shop/files/1_030b0fd9-a741-4418-99e4-0fd874f8758c.jpg?v=1762146451&width=800"
  },
  {
    id: 403,
    category: "Gulika / Tablet",
    name: "AVP Vayu Gulika (10\u00A0Tablets)",
    desc: "Instant relief from gas trouble, stomach bloating, and acidity.",
    price: "₹110",
    image: "https://avpayurveda.com/cdn/shop/files/Vayu-Gulika-1.png?v=1758803740&width=800"
  },
  {
    id: 404,
    category: "Gulika / Tablet",
    name: "AVP Dhanwantharam Gulika (10\u00A0Tablets)",
    desc: "First-aid pill for chest congestion, breathlessness, and dizziness.",
    price: "₹35",
    image: "https://avpayurveda.com/cdn/shop/files/1_1_f50d264f-1c97-4f23-afde-ff40ab9bc848.jpg?v=1767438537&width=800"
  },
  {
    id: 405,
    category: "Gulika / Tablet",
    name: "AVP Gorochanadi Gulika (10\u00A0Tablets)",
    desc: "Treats high fever, breathing issues in kids, and balances body temperature.",
    price: "₹160",
    image: "https://avpayurveda.com/cdn/shop/files/5-2.jpg?v=1758801764&width=800"
  },
  {
    id: 406,
    category: "Gulika / Tablet",
    name: "AVP Suvarnamuktadi Gulika (10\u00A0Tablets)",
    desc: "Premium formulation for treating chronic fevers and improving immunity.",
    price: "₹180",
    image: "https://avpayurveda.com/cdn/shop/files/51.jpg?v=1764254129&width=800"
  },
  {
    id: 407,
    category: "Gulika / Tablet",
    name: "AVP Vilwadi Gulika (10\u00A0Tablets)",
    desc: "Excellent for food poisoning, stomach infections, and insect bites.",
    price: "₹50",
    image: "https://avpayurveda.com/cdn/shop/files/11_89d49319-1684-4af5-a96a-fa55617b8550.jpg?v=1764255625&width=800"
  },
  {
    id: 408,
    category: "Gulika / Tablet",
    name: "AVP Swasanandam Gulika (10\u00A0Tablets)",
    desc: "Provides immediate relief from asthma attacks and chest tightness.",
    price: "₹40",
    image: "https://avpayurveda.com/cdn/shop/files/Swasanandam-Gulika-1-01.jpg?v=1758803937&width=800"
  },

  // --- Grithams (501) ---
  {
    id: 501,
    category: "Grithams",
    name: "AVP Saraswatha Gritham (150g)",
    desc: "Medicated ghee that drastically improves memory, intelligence, and focus.",
    price: "₹200",
    image: "https://avpayurveda.com/cdn/shop/files/1_9241b43e-733b-4c3d-a4b8-0a42398e0087.jpg?v=1777533541&width=800"
  },

  // --- Thailams (601) ---
  {
    id: 601,
    category: "Thailams",
    name: "AVP Dhanwantharam Thailam (200ml)",
    desc: "Best massage oil for muscle cramps, joint care, and pregnancy body care.",
    price: "₹220",
    image: "https://avpayurveda.com/cdn/shop/files/4-21-2.png?v=1758801824&width=800"
  },

  // --- Other Home Made Products (701) ---
  {
    id: 701,
    category: "Other/HomeMade Products",
    name: "Special Nadan Vaidyar Pain Relief Oil",
    desc: "Fast-acting homemade oil with Shallots & Pepper for severe joint/muscle pains.",
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
