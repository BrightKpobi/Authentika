"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { MOCK_PRODUCTS } from "@/data/products";
import { Minus, Plus, ChevronRight, Heart, Share2 } from "lucide-react";

const ProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Find product
  const product = useMemo(() => MOCK_PRODUCTS.find((p) => p.id === id), [id]);

  // UI State
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="font-serif italic text-zinc-400">Piece not found.</p>
        <button
          onClick={() => router.push("/shop")}
          className="text-[10px] font-bold underline tracking-widest uppercase">
          Back to Collection
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size");
      return;
    }
    // Logic for cart would go here
    console.log("Added to cart:", {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-12">
        <button
          onClick={() => router.push("/shop")}
          className="hover:text-black">
          Shop
        </button>
        <ChevronRight size={10} />
        <span className="text-zinc-300">{product.category}</span>
        <ChevronRight size={10} />
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4">
          {/* Thumbnails (Desktop) */}
          <div className="hidden md:flex flex-col space-y-4 col-span-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-[3/4] overflow-hidden border transition-all ${selectedImage === idx ? "border-black" : "border-transparent opacity-60"}`}>
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="col-span-12 md:col-span-10 relative aspect-[3/4] bg-zinc-50 overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-b border-zinc-100 pb-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl md:text-4xl font-serif text-zinc-900">
                {product.name}
              </h1>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="pt-2">
                <Heart
                  size={20}
                  className={isWishlisted ? "fill-black" : "text-zinc-300"}
                />
              </button>
            </div>
            <p className="text-xl font-light text-zinc-600 mb-6">
              ¢{product.price.toLocaleString()}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 font-light max-w-md">
              {product.description}
            </p>
          </div>

          {/* Options */}
          <div className="py-8 space-y-8 border-b border-zinc-100">
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4">
                  Color: {selectedColor || "Select"}
                </h4>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-[10px] border tracking-widest uppercase transition-all
                        ${selectedColor === color ? "border-black bg-black text-white" : "border-zinc-200 text-zinc-400 hover:border-black"}`}>
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between mb-4">
                  <h4 className="text-[10px] font-bold tracking-widest uppercase">
                    Size
                  </h4>
                  <button className="text-[9px] font-bold underline tracking-widest uppercase text-zinc-400">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-[10px] border tracking-widest transition-all
                        ${selectedSize === size ? "border-black bg-black text-white" : "border-zinc-200 text-zinc-400 hover:border-black"}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4">
                Quantity
              </h4>
              <div className="flex items-center space-x-6 border border-zinc-200 w-fit px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-zinc-400 hover:text-black">
                  <Minus size={14} />
                </button>
                <span className="text-xs font-bold w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-zinc-400 hover:text-black">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="py-8 space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors">
              Add to Bag
            </button>
            <div className="flex space-x-4">
              <button className="flex-1 border border-zinc-200 py-4 text-[9px] font-bold tracking-widest uppercase flex items-center justify-center space-x-2 hover:border-black transition-colors">
                <Share2 size={14} />
                <span>Share Piece</span>
              </button>
            </div>
          </div>

          {/* Features Accordion Style */}
          <div className="pt-8 space-y-6">
            <div className="group">
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4">
                Details & Features
              </h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-zinc-400 font-light flex items-center space-x-2 uppercase tracking-tight">
                    <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section (Simple Placeholder) */}
      <section className="mt-32 pt-24 border-t border-zinc-100">
        <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-center mb-16">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.filter((p) => p.id !== id)
            .slice(0, 4)
            .map((p) => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => router.push(`/shop/${p.id}`)}>
                <div className="aspect-[3/4] relative overflow-hidden bg-zinc-50 mb-4">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h5 className="text-[10px] font-bold tracking-widest uppercase">
                  {p.name}
                </h5>
                <p className="text-[10px] text-zinc-400 mt-1">${p.price}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
