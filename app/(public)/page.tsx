"use client";

import HeroBanner from "@/components/shared/HeroBanner/HeroBanner";
import FeaturedGrid from "@/components/shared/HeroBanner/FeaturedGrid";
export default function Home() {
  return (
    <div className="space-y-5">
      <HeroBanner />

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold  text-gray-800 text-left mb-6 text-center">
            Texture is the new color.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed text-justify">
            In a world saturated with fast fashion and fleeting trends, we
            invite you to slow down and appreciate the artistry of the handmade.
            At Authentika, we believe that true style lies in the details—the
            intricate weave of Kente cloth, the rich patina of hand-tooled
            leather, and the timeless elegance of natural fibers. Our
            collections are a celebration of heritage, craftsmanship, and
            conscious consumption. Each piece tells a story of the artisan who
            created it, infusing every stitch and seam with intention and soul.
            Discover the beauty of imperfection, the luxury of authenticity, and
            the confidence that comes from wearing something truly special.
            Explore our latest collection of high-quality products.
          </p>
        </div>
      </section>
      <FeaturedGrid />
    </div>
  );
}
