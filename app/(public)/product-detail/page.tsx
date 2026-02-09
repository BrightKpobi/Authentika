"use client";
import React, { useState, useEffect } from "react";
import { Product, AppView } from "@/types/types";

interface ProductDetailProps {
  product: Product;
  addToCart: (product: Product, size: string, color: string) => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: boolean;
  navigate: (view: AppView) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  addToCart,
  toggleWishlist,
  isWishlisted,
  navigate,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [stylingAdvice, setStylingAdvice] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoadingAdvice(true);

      setStylingAdvice(advice);
      setLoadingAdvice(false);
    };
    fetchAdvice();
    setCurrentImage(0);
  }, [product]);

  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-12 text-[10px] tracking-widest font-bold uppercase flex space-x-2 text-gray-400">
        <button onClick={() => navigate("Home")} className="hover:text-black">
          Home
        </button>
        <span>/</span>
        <button onClick={() => navigate("Shop")} className="hover:text-black">
          {product.category}
        </button>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Gallery */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.images.map((img, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-brand-gray overflow-hidden cursor-zoom-in">
              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
          {/* If only one image, fill with placeholder for architectural feel */}
          {product.images.length === 1 && (
            <div className="aspect-[3/4] bg-brand-black flex items-center justify-center p-12 text-center">
              <p className="text-brand-white text-xs font-serif tracking-widest italic leading-relaxed opacity-50">
                "Purity in monochrome expression."
              </p>
            </div>
          )}
        </div>

        {/* Details Panel */}
        <div className="lg:w-[450px] space-y-12">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-serif">{product.name}</h1>
              <p className="text-2xl font-light">${product.price}</p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              {product.description}
            </p>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold tracking-widest uppercase">
                Select Size
              </h3>
              <button className="text-[10px] font-bold text-gray-400 underline uppercase hover:text-black">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] h-12 flex items-center justify-center border text-xs tracking-widest transition-all ${selectedSize === size ? "border-brand-black bg-brand-black text-brand-white" : "border-brand-gray text-brand-black hover:border-black"}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase mb-4">
              Color: {selectedColor}
            </h3>
            <div className="flex gap-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border p-0.5 transition-all ${selectedColor === color ? "border-brand-black" : "border-transparent"}`}>
                  <div
                    className={`w-full h-full rounded-full ${color.toLowerCase() === "black" ? "bg-black" : color.toLowerCase() === "off-white" ? "bg-gray-100" : "bg-gray-500"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4 pt-4">
            <button
              onClick={() => addToCart(product, selectedSize, selectedColor)}
              className="w-full bg-brand-black text-brand-white py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-800 transition-colors">
              Add to Bag
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className="w-full border border-brand-gray py-5 text-xs font-bold tracking-[0.4em] uppercase hover:border-black transition-colors flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${isWishlisted ? "fill-black" : "fill-none stroke-black"}`}
                viewBox="0 0 24 24"
                strokeWidth="1.5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
            </button>
          </div>

          {/* AI Styling Advice (Premium Feature) */}
          <div
            className="bg-brand-gray p-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1.5 h-1.5 bg-brand-black rounded-full" />
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase">
                Style Curator Notes
              </h3>
            </div>
            {loadingAdvice ? (
              <div className="h-20 flex flex-col justify-center">
                <div className="w-1/2 h-2 bg-gray-200 animate-pulse mb-2" />
                <div className="w-3/4 h-2 bg-gray-200 animate-pulse" />
              </div>
            ) : (
              <p className="text-xs italic font-serif leading-relaxed text-gray-700">
                "{stylingAdvice}"
              </p>
            )}
          </div>

          {/* Extra Info */}
          <div className="pt-12 border-t border-brand-gray space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xs font-bold tracking-widest uppercase">
                Product Details
                <span className="group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                <ul className="list-disc pl-4 space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                  <li>Signature Authentika GH embroidery</li>
                  <li>Made in Ghana</li>
                </ul>
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none text-xs font-bold tracking-widest uppercase">
                Shipping & Returns
                <span className="group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                <p>
                  Complementary standard shipping on all orders over $500.
                  Returns accepted within 14 days of delivery in original
                  packaging.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
