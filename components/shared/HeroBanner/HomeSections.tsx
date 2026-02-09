"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/types";

interface Props {
  products: Product[];
  navigate: (view: string, product?: Product) => void;
}

const categories = ["CLOTHES", "SHOES", "BAGS", "ACCESSORIES"];
const images = [
  "/dresses/d1.jpg",
  "/dresses/d2.jpg",
  "/dresses/d3.jpg",
  "/dresses/d4.jpg",
];

const HomeSections = ({ products, navigate }: Props) => {
  return (
    <>
      {/* ================= CATEGORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer"
            onClick={() => navigate("Shop")}>
            <Image
              src={images[idx]}
              alt={cat}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 50vw, 25vw"
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

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 mb-1 block uppercase">
              Curated Picks
            </span>
            <h2 className="text-3xl font-serif">Featured Selection</h2>
          </div>

          <Link href="/shop">
            <button className="text-[10px] font-bold underline tracking-widest uppercase hover:text-zinc-500">
              View All
            </button>
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => navigate("ProductDetail", product)}>
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-3">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h4 className="text-[11px] font-bold uppercase tracking-wider">
                  {product.name}
                </h4>

                <p className="text-[11px] text-zinc-500 mt-0.5">
                  ¢{product.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest">
              No products available
            </p>
          </div>
        )}
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">
            Luxury is the absence of unnecessary detail.
          </h2>

          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-8 uppercase tracking-widest font-light">
            Founded in the heart of Ghana, Authentika GH merges traditional
            elegance with modern minimalist architecture. Every piece is a
            testament to simplicity and monochrome power.
          </p>

          <div className="flex justify-center">
            <div className="w-12 h-px bg-black" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
