// app/(dashboard)/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    // hard-coded products
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "iPhone 15",
            price: 999,
            image: "/img/iphone.png",
        },
        {
            id: "2",
            name: "MacBook Pro",
            price: 1999,
            image: "/img/macbook.png",
        },
    ]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">My Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="font-bold mt-1">${product.price}</p>
                        <div className="mt-auto flex gap-2">
                            <Button variant="outline" className="flex-1">Edit</Button>
                            <Button variant="destructive" className="flex-1">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <Link href="/dashboard/products/upload">
                    <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Upload New Product</Button>
                </Link>
            </div>
        </div>
    );
}
