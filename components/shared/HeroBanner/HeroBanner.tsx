"use client";

import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Fashion"
          className="w-full h-full object-cover opacity-60 scale-105"
          width={2000}
          height={1000}
          priority
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-6 animate-fade-in tracking-tight">
          Authentika <br /> Online Shop
        </h1>

        <p className="text-white/70 text-xs md:text-sm max-w-md mb-8 uppercase tracking-[0.4em] font-light">
          Best Quality Products.
        </p>

        <Link href="/shop">
          <button className="bg-white text-black px-10 py-3.5 text-[10px] font-bold uppercase hover:bg-zinc-200 transition-colors">
            Explore Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
