// app/(dashboard)/layout.tsx
import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:flex flex-col p-4">
                <h2 className="text-xl font-bold mb-6">Seller Dashboard</h2>
                <nav className="flex flex-col gap-3">
                    <Link href="/dashboard" className="px-3 py-2 rounded hover:bg-gray-100">Products</Link>
                    <Link href="/dashboard/products/upload" className="px-3 py-2 rounded hover:bg-gray-100">Upload Product</Link>
                    <Link href="/dashboard/orders" className="px-3 py-2 rounded hover:bg-gray-100">Orders</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
