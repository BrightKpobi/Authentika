import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
    {
        title: "Unparalleled Sound",
        description: "Experience crystal-clear audio with premium headphones.",
        src: "/img/item.png",
    },
    {
        title: "Stay Connected",
        description: "Compact and stylish earphones for every occasion.",
        src: "/img/item.png",
    },
    {
        title: "Power in Every Pixel",
        description: "Shop the latest laptops for work, gaming, and more.",
        src: "/img/item.png",
    },
]

export function FeaturedProducts() {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#2D3748]">
                    Featured Products
                </h2>
                <div className="h-1 w-20 bg-[#4cbe42] mt-2" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, idx) => (
                    <div
                        key={idx}
                        className="group relative overflow-hidden rounded-md aspect-[4/5] "
                    >
                        {/* Next.js Optimized Image */}
                        <Image
                            src={product.src}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={idx === 0} // Preloads the first image
                        />

                        {/* Dark Overlay for Text Legibility */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2 leading-tight">
                                {product.title}
                            </h3>
                            <p className="text-sm text-gray-100 mb-6 max-w-[250px]">
                                {product.description}
                            </p>

                            <Button
                                className="w-fit bg-[#4cbe42] hover:bg-[#3a9e30] text-white rounded-full px-8 py-6"
                            >
                                Buy now
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}