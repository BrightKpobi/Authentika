"use client";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (e: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  isWishlisted,
  onToggleWishlist,
}) => {
  return (
    <div className="group cursor-pointer flex flex-col" onClick={onClick}>
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
        <Image
          src={product.images[0]} // Using images[0] from your new type
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Wishlist Button */}
        <button
          onClick={onToggleWishlist}
          className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-black hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-3.5 w-3.5 ${isWishlisted ? "fill-current" : "fill-none stroke-current"}`}
            viewBox="0 0 24 24"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        {/* Hover Action */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/20 to-transparent">
          <div className="bg-white py-3 text-center shadow-xl">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase">
              Add to Cart
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900">
            {product.name}
          </h3>
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            {product.category}
          </p>
        </div>
        <p className="text-xs font-bold text-zinc-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
