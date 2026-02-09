"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Twitter, Box } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reusable styles for consistency
  const sectionHeading =
    "text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white/90";
  const linkItem =
    "text-[11px] text-zinc-500 hover:text-white transition-all duration-300 uppercase tracking-widest list-none";

  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/img/aut-white-logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="mx-auto"
              />
            </Link>
            <p className="text-zinc-500 text-[11px] leading-[2.2] uppercase tracking-[0.15em] font-light max-w-sm">
              We create architectural silhouettes for the modern minimalist. Our
              pieces are designed in Accra and crafted to transcend seasons,
              fusing traditional Ghanaian soul with monochromatic purity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className={sectionHeading}>Shop</h3>
            <ul className="space-y-5">
              <li className={linkItem}>
                <Link href="/shop">New Arrivals</Link>
              </li>
              <li className={linkItem}>
                <Link href="/shop?category=Clothes">Clothes</Link>
              </li>
              <li className={linkItem}>
                <Link href="/shop?category=Shoes">Shoes</Link>
              </li>
              <li className={linkItem}>
                <Link href="/shop?category=Bags">Bags</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service */}
          <div className="lg:col-span-2">
            <h3 className={sectionHeading}>Assistance</h3>
            <ul className="space-y-5">
              <li className={linkItem}>
                <Link href="/account">Order Status</Link>
              </li>
              <li className={linkItem}>
                <Link href="/shipping">Shipping</Link>
              </li>
              <li className={linkItem}>
                <Link href="/returns">Returns</Link>
              </li>
              <li className={linkItem}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-4">
            <h3 className={sectionHeading}>The Newsletter</h3>
            <p className="text-zinc-500 text-[11px] mb-8 uppercase tracking-widest leading-relaxed">
              Join our list for exclusive collection previews and architectural
              inspiration.
            </p>
            <form
              className="relative group"
              onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-zinc-800 py-3 text-[10px] uppercase tracking-[0.3em] outline-none focus:border-white transition-colors placeholder-zinc-700"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-zinc-500 hover:text-white transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-zinc-900 mb-12" />

        {/* Bottom Bar: Socials & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Social Icons */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white transition-colors">
              <Box size={18} strokeWidth={1.5} />{" "}
              {/* Represents Pinterest/Archive */}
            </a>
          </div>

          {/* Copyright & Slogan */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[9px] tracking-[0.4em] text-zinc-600 uppercase mb-2">
              &copy; {currentYear} AUTHENTIKA GHANA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[8px] tracking-[0.5em] text-zinc-800 uppercase font-bold">
              Designed for the Uncompromising
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
