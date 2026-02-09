"use client";

import Image from "next/image";
import { AppView } from "@/types/types";

interface Props {
  navigate: (view: AppView) => void;
}

const categories = ["CLOTHES", "SHOES", "BAGS", "ACCESSORIES"];
const images = [
  "1434389677669-e08b4cac3105",
  "1549298916-b41d501d3772",
  "1548036328-c9fa89d128fa",
  "1515562141207-7a88fb7ce338",
];

const Categories = ({ navigate }: Props) => {
  return (
    <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {categories.map((cat, idx) => (
        <div
          key={cat}
          className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer"
          onClick={() => navigate("Shop")}>
          <Image
            src={`https://images.unsplash.com/photo-${images[idx]}?auto=format&fit=crop&q=80&w=800`}
            alt={cat}
            width={800}
            height={1067}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase">
              {cat}
            </h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
