export type Product = {
  id: "ice-roller" | "gua-sha" | "combo-kit"
  name: string
  tagline: string
  price: number
  compareAt?: number
  image: string
  badge?: string
  benefits: string[]
}

export const products: Product[] = [
  {
    id: "combo-kit",
    name: "Glow Combo Kit",
    tagline: "Ice Roller + Gua Sha — the complete sculpting ritual",
    price: 499,
    compareAt: 548,
    image: "/products/combo-kit.png",
    badge: "Best Value · Save ₹49",
    benefits: [
      "Both bestsellers in one kit",
      "Full morning & night routine",
      "Free protective pouch",
    ],
  },
  {
    id: "ice-roller",
    name: "Ice Roller",
    tagline: "Cool away puffiness in 60 seconds",
    price: 299,
    image: "/products/ice-roller.png",
    benefits: ["De-puffs instantly", "Calms redness", "Shrinks pores"],
  },
  {
    id: "gua-sha",
    name: "Gua Sha Stone",
    tagline: "Sculpt cheekbones & lift the jawline",
    price: 249,
    image: "/products/gua-sha.png",
    benefits: ["Sculpts cheekbones", "Drains lymph", "Boosts glow"],
  },
]

export const productById = (id: string) => products.find((p) => p.id === id)

export const formatINR = (value: number) => `₹${value.toLocaleString("en-IN")}`
