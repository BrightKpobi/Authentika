import React from 'react';
import Image from 'next/image';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/shared/product/ProductGrid";

// Mock Data - In a real app, fetch this via product.slug
const PRODUCT = {
    name: "PlayStation 5",
    slug: "playstation-5",
    rating: 4.5,
    description: "The PlayStation 5 takes gaming to the next level with ultra-HD graphics, a powerful 825GB SSD, and ray tracing technology for realistic visuals. Whether you're into high-action games or immersive storytelling, the PS5 delivers fast loading times and stunning visuals.",
    price: 499.99,
    originalPrice: 599.99,
    brand: "Sony",
    color: "White/Black",
    category: "Gaming Consoles",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000"
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Back Link */}
                <Link href="/" className="flex items-center text-sm text-gray-500 hover:text-emerald-600 mb-8 transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Back to products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Left Side: Images */}
                    <div className="flex flex-col gap-6">
                        <div className="relative aspect-square rounded-[2rem] bg-[#F3F4F6] overflow-hidden">
                            <Image
                                src={PRODUCT.image}
                                alt={PRODUCT.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnail Row */}
                        <div className="flex gap-4">
                            <div className="w-24 h-24 relative rounded-2xl bg-[#F3F4F6] border-2 border-[#4cbe42] overflow-hidden cursor-pointer">
                                <Image src={PRODUCT.image} alt="thumb" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {PRODUCT.name}
                        </h1>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-[#4cbe42] text-[#4cbe42]' : 'text-gray-200'}`} />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-500 mt-1">(4.5)</span>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            {PRODUCT.description}
                        </p>

                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-4xl font-bold text-gray-900">${PRODUCT.price}</span>
                            <span className="text-2xl text-gray-300 line-through">${PRODUCT.originalPrice}</span>
                        </div>

                        <div className="space-y-4 mb-12 border-t border-b py-8 text-sm">
                            <div className="flex justify-between max-w-xs">
                                <span className="text-gray-400 uppercase tracking-wider font-semibold">Brand</span>
                                <span className="text-gray-900 font-bold">{PRODUCT.brand}</span>
                            </div>
                            <div className="flex justify-between max-w-xs">
                                <span className="text-gray-400 uppercase tracking-wider font-semibold">Color</span>
                                <span className="text-gray-900 font-bold">{PRODUCT.color}</span>
                            </div>
                            <div className="flex justify-between max-w-xs">
                                <span className="text-gray-400 uppercase tracking-wider font-semibold">Category</span>
                                <span className="text-gray-900 font-bold">{PRODUCT.category}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex-1 h-12 rounded-full bg-[#F3F4F6] hover:bg-gray-200 text-gray-900 font-bold text-lg shadow-none transition-all">
                                Add to Cart
                            </Button>
                            <Button className="flex-[2] h-12 rounded-full bg-[#4cbe42] hover:bg-[#3da832] text-white font-bold text-lg transition-all">
                                Buy now
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer Section: Popular Products */}
                <div className="border-t pt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">Popular products</h2>
                    <ProductGrid />
                </div>
            </div>
        </main>
    );
}