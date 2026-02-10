"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const FeaturedGrid = () => {
  const images = [
    "/dresses/item1.jpg",
    "/dresses/item2.jpg",
    "/dresses/item3.jpg",
    "/dresses/item4.jpg",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* LEFT SIDE: CONTENT */}
        <div className="flex flex-col items-start space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-400">
              New Season
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 tracking-tight leading-tight">
              The Artisan <br /> Essentials
            </h2>
          </div>

          <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-md">
            Discover a curated selection of handcrafted pieces designed for the
            modern minimalist. Each item reflects our commitment to authentic
            quality and timeless silhouette.
          </p>
          <Link href="/shop">
            <button className="bg-black hover:bg-black/80 text-white px-10 py-3.5 text-[12px] font-bold cursor-pointer uppercase transition-colors group flex items-center gap-3 font-bold rounded-none transition-all">
              Shop Now
              <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE: SQUARE GRID */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 md:order-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-zinc-100">
              <Image
                src={src}
                alt={`Featured piece ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
