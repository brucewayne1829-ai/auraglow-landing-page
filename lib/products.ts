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
    id: 101,
    category: "Arishtams",
    name: "AVP Aragwadharishtam (450ml)",
    desc: "Skin health & blood purification",
    price: "₹140",
    image: "/images/aragwadharishtam.png"
  },
  {
    id: 102,
    category: "Arishtams",
    name: "AVP Khadirarishtam (450ml)",
    desc: "Skin disorders & blood cleansing",
    price: "₹150",
    image: "/images/khadirarishtam.png"
  },
  {
    id: 103,
    category: "Arishtams",
    name: "AVP Parthadyarishtam (450ml)",
    desc: "Heart health & cardiac support",
    price: "₹135",
    image: "/images/parthadyarishtam.png"
  },
  {
    id: 104,
    category: "Arishtams",
    name: "AVP Aswagandharishtam (450ml)",
    desc: "Relieves fatigue, reduces stress, and builds physical stamina & energy.",
    price: "₹175",
    image: "/images/aswagandharishtam.png"
  },
  {
    id: 105,
    category: "Arishtams",
    name: "AVP Dasamoolajeerakarishtam (450ml)",
    desc: "Excellent for post-delivery care (Prasava Raksha), improves digestion & immunity.",
    price: "₹165",
    image: "/images/dasamoolajeerakarishtam.png"
  },
  {
    id: 106,
    category: "Arishtams",
    name: "AVP Asokarishtam (450ml)",
    desc: "Regulates menstrual cycles, relieves period cramps, and supports women's health.",
    price: "₹110",
    image: "/images/asokarishtam.png"
  },
  {
    id: 107,
    category: "Arishtams",
    name: "AVP Saraswatharishtam Gold (200ml)",
    desc: "Enriched with Gold (Swarna). Enhances memory, focus, and speech clarity.",
    price: "₹580",
    image: "/images/saraswatharishtam_gold.png"
  },
  {
    id: 108,
    category: "Arishtams",
    name: "AVP Draksharishtam (450ml)",
    desc: "Cures anemia, improves digestion, and relieves physical weakness.",
    price: "₹150",
    image: "/images/draksharishtam.png"
  },
  {
    id: 109,
    category: "Arishtams",
    name: "AVP Vasarishtam (450ml)",
    desc: "Highly effective for chronic cough, asthma, and respiratory allergies.",
    price: "₹170",
    image: "/images/vasarishtam.png"
  },
  {
    id: 110,
    category: "Arishtams",
    name: "AVP Jeerakarishtam (450ml)",
    desc: "Soothes stomach issues, aids digestion, and essential for post-natal care.",
    price: "₹160",
    image: "/images/jeerakarishtam.png"
  },

  // --- Kashayams ---
  {
    id: 201,
    category: "Kashayams",
    name: "AVP Kallyanaka Kashayam (200ml)",
    desc: "Mental wellness & memory",
    price: "₹255",
    image: "/images/kallyanaka_kashayam.png"
  },
  {
    id: 202,
    category: "Kashayams",
    name: "AVP Rasnasaptakam Kashayam (200ml)",
    desc: "Joint pain & rheumatism",
    price: "₹150",
    image: "/images/rasnasaptakam_kashayam.png"
  },
  {
    id: 203,
    category: "Kashayams",
    name: "AVP Sahacharadi Kashayam (200ml)",
    desc: "Vata disorders & lower back pain",
    price: "₹140",
    image: "/images/sahacharadi_kashayam.png"
  },
  {
    id: 204,
    category: "Kashayams",
    name: "AVP Dhanwantharam Kashayam (200ml)",
    desc: "Best for joint pains, arthritis, backache, and nerve-related issues.",
    price: "₹200",
    image: "/images/dhanwantharam_kashayam.png"
  },
  {
    id: 205,
    category: "Kashayams",
    name: "AVP Katakakhadiradi Kashayam (200ml)",
    desc: "Excellent blood purifier. Helps manage skin allergies and high blood sugar.",
    price: "₹135",
    image: "/images/katakakhadiradi_kashayam.png"
  },
  {
    id: 206,
    category: "Kashayams",
    name: "AVP Punarnavadi Kashayam (200ml)",
    desc: "Reduces body swelling (edema), supports kidney function, and water retention.",
    price: "₹150",
    image: "/images/punarnavadi_kashayam.png"
  },
  {
    id: 207,
    category: "Kashayams",
    name: "AVP Rasnairandadi Kashayam (200ml)",
    desc: "Fast relief from severe joint stiffness, lower back pain, and muscle spasms.",
    price: "₹225",
    image: "/images/rasnairandadi_kashayam.png"
  },
  {
    id: 208,
    category: "Kashayams",
    name: "AVP Drakshadi Kashayam (200ml)",
    desc: "Relieves excessive body heat, fatigue, and weakness. Protects liver health.",
    price: "₹200",
    image: "/images/drakshadi_kashayam.png"
  },
  {
    id: 209,
    category: "Kashayams",
    name: "AVP Indukantham Kashayam (200ml)",
    desc: "Boosts natural immunity, cures chronic fevers, and relieves gas trouble.",
    price: "₹170",
    image: "/images/indukantham_kashayam.png"
  },
  {
    id: 210,
    category: "Kashayams",
    name: "AVP Gandharvahastadi Kashayam (200ml)",
    desc: "Mild laxative that clears bowel movements and relieves back pain.",
    price: "₹140",
    image: "/images/gandharvahastadi_kashayam.png"
  },

  // --- Choornams ---
  {
    id: 301,
    category: "Choornams",
    name: "AVP Amrutha Choornam (25g)",
    desc: "Blood sugar management & immunity",
    price: "₹100",
    image: "/images/amrutha_choornam.png"
  },
  {
    id: 302,
    category: "Choornams",
    name: "AVP Ashta Choornam (25g)",
    desc: "Digestion, gas & acidity relief",
    price: "₹65",
    image: "/images/ashta_choornam.png"
  },
  {
    id: 303,
    category: "Choornams",
    name: "AVP Rasnadi Choornam (25g)",
    desc: "Cold, headache & sinus care",
    price: "₹60",
    image: "/images/rasnadi_choornam.png"
  },
  {
    id: 304,
    category: "Choornams",
    name: "Vaidyaratnam Thaiketta Moos Brihat Thriphala Choornam (100g)",
    desc: "Aids digestion, detoxifies the body, and relieves constipation.",
    price: "₹112",
    image: "/images/vaidyaratnam_thaiketta_moos_brihat_thriphala_choornam.png"
  },

  // --- Gulika / Tablet ---
  {
    id: 401,
    category: "Gulika / Tablet",
    name: "AVP Chandraprabha Vati (10\u00A0nos)",
    desc: "Urinary tract & general vitality",
    price: "₹40",
    image: "/images/chandraprabha_vati.png"
  },
  {
    id: 402,
    category: "Gulika / Tablet",
    name: "AVP Kankayana Gutika (10\u00A0nos)",
    desc: "Piles & digestive wellness",
    price: "₹60",
    image: "/images/kankayana_gutika.png"
  },
  {
    id: 403,
    category: "Gulika / Tablet",
    name: "AVP Rajapravarthini Vati (100\u00A0Tablets)",
    desc: "Women's health & menstrual care",
    price: "₹600",
    image: "/images/rajapravarthini_vati.png"
  },
  {
    id: 404,
    category: "Gulika / Tablet",
    name: "AVP Manjishtadi Kashayam Tablet (10\u00A0Tablets)",
    desc: "Purifies blood to clear acne, pimples, and stubborn skin allergies.",
    price: "₹75",
    image: "/images/manjishtadi_kashayam_tablet.png"
  },
  {
    id: 405,
    category: "Gulika / Tablet",
    name: "AVP Manasamithra Vatakam (10\u00A0Tablets)",
    desc: "Reduces anxiety, mental stress, and promotes deep, uninterrupted sleep.",
    price: "₹275",
    image: "/images/manasamithra_vatakam.png"
  },
  {
    id: 406,
    category: "Gulika / Tablet",
    name: "AVP Vayu Gulika (10\u00A0Tablets)",
    desc: "Instant relief from gas trouble, stomach bloating, and acidity.",
    price: "₹110",
    image: "/images/vayu_gulika.png"
  },
  {
    id: 407,
    category: "Gulika / Tablet",
    name: "AVP Dhanwantharam Gulika (10\u00A0Tablets)",
    desc: "First-aid pill for chest congestion, breathlessness, and dizziness.",
    price: "₹35",
    image: "/images/dhanwantharam_gulika.png"
  },
  {
    id: 408,
    category: "Gulika / Tablet",
    name: "AVP Gorochanadi Gulika (10\u00A0Tablets)",
    desc: "Treats high fever, breathing issues in kids, and balances body temperature.",
    price: "₹160",
    image: "/images/gorochanadi_gulika.png"
  },
  {
    id: 409,
    category: "Gulika / Tablet",
    name: "AVP Suvarnamuktadi Gulika (10\u00A0Tablets)",
    desc: "Premium formulation for treating chronic fevers and improving immunity.",
    price: "₹180",
    image: "/images/suvarnamuktadi_gulika.png"
  },
  {
    id: 410,
    category: "Gulika / Tablet",
    name: "AVP Vilwadi Gulika (10\u00A0Tablets)",
    desc: "Excellent for food poisoning, stomach infections, and insect bites.",
    price: "₹50",
    image: "/images/vilwadi_gulika.png"
  },
  {
    id: 411,
    category: "Gulika / Tablet",
    name: "AVP Swasanandam Gulika (10\u00A0Tablets)",
    desc: "Provides immediate relief from asthma attacks and chest tightness.",
    price: "₹40",
    image: "/images/swasanandam_gulika.png"
  },
  {
    id: 412,
    category: "Gulika / Tablet",
    name: "Kottakkal Glysikot Tablet (60\u00A0Tablets)",
    desc: "Helps manage blood sugar levels and diabetes care.",
    price: "₹200",
    image: "/images/glysikot_tablet.png"
  },
  {
    id: 413,
    category: "Gulika / Tablet",
    name: "Kottakkal H.T. Kot (100\u00A0Tablets)",
    desc: "Supports hypertension and cardiovascular health.",
    price: "₹320",
    image: "/images/ht_kot.png" // Assumes standard naming if applicable, or you can adjust
  },

  // --- Lehyam ---
  {
    id: 501,
    category: "Lehyam",
    name: "AVP Narasimha Rasayanam (200g)",
    desc: "Hair growth & overall vitality",
    price: "₹160",
    image: "/images/narasimha_rasayanam.png"
  },
  {
    id: 502,
    category: "Lehyam",
    name: "AVP Vilwadi Lehyam (200g)",
    desc: "Diarrhea & digestive health",
    price: "₹150",
    image: "/images/vilwadi_lehyam.png"
  },
  {
    id: 503,
    category: "Lehyam",
    name: "AVP Sathavari Gulam (200g)",
    desc: "Women's health & hormonal balance",
    price: "₹165",
    image: "/images/sathavarigulam.png" // Matched to your list or pattern
  },
  {
    id: 504,
    category: "Lehyam",
    name: "AVP Dasamoola Rasayanam (200g)",
    desc: "Highly effective for breathing difficulties, asthma, and chronic cough.",
    price: "₹220",
    image: "/images/dasamoola_rasayanam.png"
  },
  {
    id: 505,
    category: "Lehyam",
    name: "AVP Aswagandhadi Lehyam (400g)",
    desc: "Weight gain supplement that builds muscle mass, strength, and stamina.",
    price: "₹350",
    image: "/images/aswagandhadi_lehyam.png"
  },
  {
    id: 506,
    category: "Lehyam",
    name: "AVP Sooranadi Lehyam (200g)",
    desc: "The best Ayurvedic remedy for all types of piles (hemorrhoids) and indigestion.",
    price: "₹170",
    image: "/images/sooranadi_lehyam.png"
  },
  {
    id: 507,
    category: "Lehyam",
    name: "AVP Agasthya Rasayanam (200g)",
    desc: "Protects against recurrent colds, allergies, and builds strong lung immunity.",
    price: "₹115",
    image: "/images/agasthya_rasayanam.png"
  },
  {
    id: 508,
    category: "Lehyam",
    name: "AVP Kalyanagulam (200g)",
    desc: "Safe laxative that detoxifies the body and helps treat skin disorders.",
    price: "₹110",
    image: "/images/kalyanagulam.png"
  },
  {
    id: 509,
    category: "Lehyam",
    name: "AVP Thrivril Lehyam (200g)",
    desc: "Excellent for treating severe constipation and ensuring smooth bowel clearance.",
    price: "₹145",
    image: "/images/thrivril_lehyam.png"
  },
  {
    id: 510,
    category: "Lehyam",
    name: "AVP Dasamoolaharitaki Lehyam (200g)",
    desc: "Reduces body swelling, aids weight loss, and improves liver health.",
    price: "₹115",
    image: "/images/dasamoolaharitaki_lehyam.png"
  },

  // --- Grithams ---
  {
    id: 601,
    category: "Grithams",
    name: "AVP Saraswatha Gritham (150g)",
    desc: "Medicated ghee that drastically improves memory, intelligence, and focus.",
    price: "₹200",
    image: "/images/saraswatha_gritham.png"
  },

  // --- Thailams ---
  {
    id: 701,
    category: "Thailams",
    name: "AVP Dhanwantharam Thailam (200ml)",
    desc: "Best massage oil for muscle cramps, joint care, and pregnancy body care.",
    price: "₹220",
    image: "/images/dhanwantharam_thailam.png"
  },
  {
    id: 702,
    category: "Thailams",
    name: "Kottakkal Rhukot Liniment (100ml)",
    desc: "Relief from joint pain, swelling, and muscular stiffness.",
    price: "₹250",
    image: "/images/rhukot_liniment.png"
  },

  // --- Other Home Made Products ---
  {
    id: 801,
    category: "Other/HomeMade Products",
    name: "Special Nadan Vaidyar Pain Relief Oil",
    desc: "Fast-acting homemade oil with Shallots & Pepper for severe joint/muscle pains.",
    price: "₹250",
    image: "/images/special_nadan_vaidyar_pain_relief_oil.png"
  }
];

export const categories = [
  "All",
  "Arishtams",
  "Kashayams",
  "Lehyam",
  "Gulika / Tablet",
  "Choornams",
  "Grithams",
  "Thailams",
  "Other/HomeMade Products"
];