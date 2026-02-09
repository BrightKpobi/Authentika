"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { MOCK_PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/shared/product-card/ProductCard";

// Shadcn UI Components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

const ShopPage = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("Newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredProducts = useMemo(() => {
    let res = [...MOCK_PRODUCTS].filter((p) => {
      const matchesCat =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (sortOrder === "PriceLow") res.sort((a, b) => a.price - b.price);
    if (sortOrder === "PriceHigh") res.sort((a, b) => b.price - a.price);

    return res;
  }, [selectedCategory, sortOrder, searchQuery]);

  const categoryTabs = Array.from(new Set(["All", ...CATEGORIES]));

  return (
    <div className="w-full bg-white">
      {/* HEADER BANNER - Added padding to provide "space around it" on mobile */}
      <div className="px-4 md:px-0 pt-24">
        <header className="relative max-w-7xl mx-auto h-[200px] md:h-[300px] overflow-hidden rounded-sm">
          <Image
            src="/banner2.jpg"
            alt="Authentika Collection"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-200 mb-2">
              The Collection
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
              Authentika Boutique
            </h2>
          </div>
        </header>
      </div>

      {/* CATEGORIES - This part scrolls away */}
      <nav className="w-full bg-white border-b border-zinc-100 mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center space-x-8 overflow-x-auto no-scrollbar py-4">
          {categoryTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] tracking-widest transition-all uppercase whitespace-nowrap pb-1 border-b-2 font-medium ${
                selectedCategory === cat
                  ? "border-black text-black"
                  : "border-transparent text-zinc-400 hover:text-zinc-600"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* STICKY SEARCH & SORT - Sticks to the very top (top-0) */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between gap-4">
          {/* Underlined Search - No Shadow */}
          <div className="relative flex-1 max-w-[200px] md:max-w-sm">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
            <Input
              placeholder="SEARCH..."
              className="pl-7 h-8 text-[10px] tracking-widest uppercase border-t-0 border-x-0 border-b border-zinc-200 rounded-none focus-visible:ring-0 focus-visible:border-black shadow-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <X
                className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 cursor-pointer text-zinc-400"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>

          {/* Sort Dropdown - No Shadow */}
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-fit min-w-[100px] border-none shadow-none h-8 text-[10px] tracking-widest uppercase font-bold focus:ring-0">
              <SelectValue placeholder="SORT" />
            </SelectTrigger>
            <SelectContent className="shadow-none rounded-none border-zinc-100">
              <SelectItem value="Newest" className="text-[10px] uppercase">
                Newest
              </SelectItem>
              <SelectItem value="PriceLow" className="text-[10px] uppercase">
                Price: Low
              </SelectItem>
              <SelectItem value="PriceHigh" className="text-[10px] uppercase">
                Price: High
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 pb-24 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => router.push(`/shop/${product.id}`)}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
              />
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                No matching pieces found.
              </p>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Ensure all Shadcn popovers have no shadows */
        [data-radix-popper-content-wrapper] {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default ShopPage;
