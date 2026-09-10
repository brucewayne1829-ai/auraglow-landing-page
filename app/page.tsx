"use client";

import { useState } from 'react';
import { products, categories, Product } from '@/lib/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  const whatsappNumber = "9495562581";
  const doctorWhatsapp = "9942662959";
  const mapUrl = "https://www.google.com/maps/place/No+505,+The+Arya+Vaidya+Pharmacy+Coimbatore+Limited,+Pournami'+Complex,+NSR+Rd,+opp.+to+LIC+Office,+S'Bend,+Nesavaalar+Colony,+Saibaba+Colony,+Coimbatore,+Tamil+Nadu+641011/@11.0268658,76.9467293,15z/data=!4m6!3m5!1s0x3ba858526b5c0591:0x135eacd0cdb95051!8m2!3d11.0268658!4d76.9467293!16s%2Fg%2F1vystznk";

  // Filter products by Category and Search Query
  const filteredProducts = products.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
