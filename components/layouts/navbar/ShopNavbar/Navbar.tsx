"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X, ShoppingBag, User } from "lucide-react";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  // UI State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  // Internal Cart Logic
  const [cartItems, setCartItems] = useState<any[]>([
    {
      id: "1",
      name: "Handwoven Kente Scarf",
      price: 85,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1590038767624-dac5740a997b?q=80&w=500",
      selectedSize: "One Size",
      selectedColor: "Royal Blue",
    },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const linkBase =
    "text-[10px] md:text-xs font-bold tracking-[0.2em] hover:opacity-50 transition-all duration-300 uppercase";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 
        ${
          isScrolled || isMenuOpen || isCartOpen
            ? "bg-white/95 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-8"
        }`}>
        {/* Centering Container */}
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Left: Navigation Links */}
          <div className="flex items-center flex-1">
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={linkBase}>
                HOME
              </Link>
              <Link href="/shop" className={linkBase}>
                SHOP
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -ml-2">
              {isMenuOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <MenuIcon size={20} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="text-center flex-1">
            <Link href="/">
              <Image
                src="/img/aut-logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex space-x-5 md:space-x-8 items-center justify-end flex-1">
            <Link
              href="/account"
              className="hover:opacity-50 transition-opacity">
              <User size={18} strokeWidth={1.5} className="md:hidden" />
              <span className={`${linkBase} hidden md:block`}>ACCOUNT</span>
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative group flex items-center hover:opacity-50">
              <ShoppingBag size={18} strokeWidth={1.5} className="md:hidden" />
              <span className={`${linkBase} hidden md:block`}>BAG</span>
              {cartCount > 0 && (
                <span className="ml-1.5 text-[9px] bg-black text-white px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}>
        <div className="flex flex-col h-full pt-32 px-10 space-y-8 max-w-7xl mx-auto">
          <Link href="/" className="text-4xl font-serif">
            Home
          </Link>
          <Link href="/shop" className="text-4xl font-serif">
            Shop
          </Link>
          <Link href="/account" className="text-4xl font-serif">
            Account
          </Link>
        </div>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cartItems}
        onRemove={removeItem}
        onUpdateQty={updateQuantity}
        total={subtotal}
      />
    </>
  );
};

export default Navbar;
