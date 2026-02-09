"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Package,
  User as UserIcon,
  Heart,
  MapPin,
  ChevronRight,
  LogOut,
  Plus,
} from "lucide-react";

// --- GHANAIAN MOCK DATA ---
const MOCK_USER = {
  name: "Kofi Mensah",
  email: "k.mensah@authentika.com.gh",
  orders: [
    {
      id: "AUT-ACC-8821",
      date: "Feb 02, 2026",
      status: "In Transit",
      total: 3450,
      trackingNumber: "GHP-001-992",
      items: [
        { id: "1", name: "Kente Weave Overshirt", image: "/dresses/d2.jpg" },
      ],
    },
  ],
  addresses: [
    {
      id: "addr-1",
      region: "Greater Accra",
      city: "East Legon",
      digitalAddress: "GA-492-1234",
      street: "Lagos Avenue, Near Mensvic Hotel",
      isDefault: true,
    },
  ],
};

type Tab = "orders" | "details" | "wishlist" | "addresses";

export default function AccountPage() {
  const [user, setUser] = useState(MOCK_USER);
  const [activeTab, setActiveTab] = useState<Tab>("orders");

  if (!user) return null;

  return (
    <div className="w-full bg-white min-h-screen">
      {/* HEADER SECTION - Reduced padding for mobile */}
      <div className="border-b border-zinc-100 pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-1 md:space-y-2">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">
              Authentika Member
            </span>
            <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-zinc-900 leading-none">
              Welcome, Client
            </h1>
            <p className="text-[10px] md:text-[11px] text-zinc-400 tracking-widest uppercase">
              {user.name}
            </p>
          </div>

          <button className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:text-black">
            <LogOut className="h-3 w-3" />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-0 md:px-12 py-0 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-16">
          {/* MOBILE TABS NAVIGATION - Horizontal scroll on mobile, Vertical on Desktop */}
          <aside className="lg:col-span-3 sticky top-[60px] z-20 bg-white border-b lg:border-none border-zinc-100">
            <nav className="flex lg:flex-col overflow-x-auto no-scrollbar px-4 md:px-0">
              {[
                { id: "orders", label: "Orders", icon: Package },
                { id: "details", label: "Profile", icon: UserIcon },
                { id: "wishlist", label: "Wishlist", icon: Heart },
                { id: "addresses", label: "Shipping", icon: MapPin },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as Tab)}
                  className={`flex items-center gap-3 py-5 px-4 lg:px-0 lg:py-4 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap border-b-2 lg:border-b ${
                    activeTab === item.id
                      ? "text-black border-black lg:border-zinc-900"
                      : "text-zinc-400 border-transparent lg:border-transparent hover:text-zinc-600"
                  }`}>
                  <item.icon className="h-3.5 w-3.5 hidden md:block" />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 p-6 md:p-0">
            {/* 1. ORDER HISTORY */}
            {activeTab === "orders" && (
              <div className="space-y-8 md:space-y-12 animate-in fade-in duration-500">
                <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase border-b border-zinc-100 pb-4">
                  Archive History
                </h3>
                {user.orders.map((order) => (
                  <div
                    key={order.id}
                    className="border-b border-zinc-100 pb-8 md:pb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mb-8">
                      <div className="col-span-1">
                        <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest">
                          Order Ref
                        </p>
                        <p className="text-xs font-bold font-mono uppercase">
                          {order.id}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest">
                          Status
                        </p>
                        <p className="text-xs uppercase font-medium">
                          {order.status}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest">
                          Amount
                        </p>
                        <p className="text-xs font-bold">
                          GHS {order.total.toLocaleString()}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase tracking-widest">
                          Date
                        </p>
                        <p className="text-xs">{order.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 md:gap-4">
                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="w-24 md:w-28 aspect-[3/4] bg-zinc-50 relative overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover grayscale"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. DELIVERY ADDRESSES */}
            {activeTab === "addresses" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex justify-between items-center border-b border-zinc-100 pb-4">
                  <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase">
                    Ship To
                  </h3>
                  <button className="text-[9px] md:text-[10px] font-bold flex items-center gap-1 uppercase tracking-widest">
                    <Plus className="h-3 w-3" /> New Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {user.addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="border border-zinc-100 p-5 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <p className="text-[9px] font-bold tracking-widest text-zinc-300 uppercase">
                            {addr.region} Region
                          </p>
                          {addr.isDefault && (
                            <span className="text-[7px] font-bold tracking-[0.2em] bg-zinc-900 text-white px-2 py-0.5 uppercase">
                              Primary
                            </span>
                          )}
                        </div>
                        <div className="space-y-3 text-xs md:text-sm">
                          <p className="font-bold uppercase tracking-tight">
                            {addr.city}
                          </p>
                          <p className="text-zinc-500 leading-relaxed font-light">
                            {addr.street}
                          </p>
                          <div className="pt-2">
                            <span className="text-[8px] text-zinc-400 uppercase block tracking-widest mb-1">
                              Digital Address (GPS)
                            </span>
                            <p className="font-mono text-xs font-bold tracking-widest text-zinc-800">
                              {addr.digitalAddress}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex gap-6 border-t border-zinc-50 pt-4">
                        <button className="text-[9px] font-bold uppercase tracking-widest border-b border-black">
                          Edit
                        </button>
                        <button className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PROFILE DETAILS */}
            {activeTab === "details" && (
              <div className="max-w-xl space-y-10 animate-in fade-in duration-500">
                <h3 className="text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase border-b border-zinc-100 pb-4">
                  Member Data
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[9px] uppercase text-zinc-400 tracking-widest">
                      Email Address
                    </label>
                    <p className="text-xs md:text-sm font-medium border-b border-zinc-100 pb-2">
                      {user.email}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[9px] uppercase text-zinc-400 tracking-widest">
                      Phone Number
                    </label>
                    <p className="text-xs md:text-sm font-medium border-b border-zinc-100 pb-2">
                      +233 24 000 0000
                    </p>
                  </div>
                </div>
                <button className="w-full md:w-auto text-[10px] font-bold uppercase tracking-[0.3em] border border-zinc-900 px-10 py-4 hover:bg-black hover:text-white transition-all">
                  Update Account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
