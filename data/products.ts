import { Product } from "../types/types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Onyx Silk Blouse",
    category: "Clothes",
    price: 245,
    description:
      "A fluid silk blouse in deep onyx black, featuring a tailored collar and minimalist button detailing.",
    images: ["/dresses/dress1.jpg", "/dresses/d4.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Off-White"],
    features: ["100% Silk", "Mother of pearl buttons", "Regular fit"],
  },
  {
    id: "p2",
    name: "Architectural Heel",
    category: "Shoes",
    price: 450,
    description:
      "Leather pumps featuring a sharp geometric heel design and pointed toe.",
    images: ["/dresses/d2.jpg"],
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Black"],
    features: ["Calf leather", "Geometric 85mm heel", "Leather lining"],
  },
  {
    id: "p3",
    name: "Monolith Tote",
    category: "Bags",
    price: 890,
    description:
      "An oversized tote crafted from premium grained leather with a minimalist exterior.",
    images: ["/dresses/d5.jpg"],
    sizes: ["ONE SIZE"],
    colors: ["Black", "Slate"],
    features: ["Full-grain leather", "Internal zip pocket", "Magnetic closure"],
  },
  {
    id: "p4",
    name: "Obsidian Signet Ring",
    category: "Accessories",
    price: 180,
    description:
      "Solid sterling silver ring with a polished obsidian stone inlay.",
    images: ["/dresses/d6.jpg"],
    sizes: ["6", "7", "8", "9"],
    colors: ["Silver"],
    features: [
      "925 Sterling Silver",
      "Hand-polished obsidian",
      "Signature engraving",
    ],
  },
  {
    id: "p5",
    name: "Minimalist Wool Coat",
    category: "Clothes",
    price: 680,
    description:
      "Clean-cut virgin wool coat with hidden fastenings and a structured silhouette.",
    images: ["/dresses/d7.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    features: ["100% Virgin Wool", "Fully lined", "Italian fabric"],
  },
  {
    id: "p6",
    name: "Phantom Chelsea Boot",
    category: "Shoes",
    price: 380,
    description:
      "Classic Chelsea boot reimagined with a thicker sole and matte leather finish.",
    images: ["/dresses/d8.jpg"],
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Matte Black"],
    features: ["Elastic side panels", "Rubber lug sole", "Pull tab"],
  },
  {
    id: "p7",
    name: "Prism Clutch",
    category: "Bags",
    price: 320,
    description: "Structured clutch with sharp angles and a high-gloss finish.",
    images: ["/dresses/d9.jpg"],
    sizes: ["ONE SIZE"],
    colors: ["Black Gloss"],
    features: ["Hard shell", "Detachable chain strap", "Silk lining"],
  },
  {
    id: "p8",
    name: "Equinox Sunglasses",
    category: "Accessories",
    price: 210,
    description:
      "Bold rectangular frames in hand-polished acetate with UV protection.",
    images: ["/dresses/d10.jpg"],
    sizes: ["STANDARD"],
    colors: ["Black"],
    features: ["Handmade acetate", "100% UV Protection", "Includes case"],
  },
];

export const CATEGORIES = ["Clothes", "Shoes", "Bags", "Accessories"];
