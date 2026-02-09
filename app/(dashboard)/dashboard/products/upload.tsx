// app/(dashboard)/products/upload.tsx
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UploadProductPage() {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    // hard-coded categories
    const categories = ["Electronics", "Fashion", "Groceries"];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Product Uploaded: ${name}`);
        // TODO: connect to Prisma API
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Upload Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
                <Input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Slug (for URL)" value={slug} onChange={e => setSlug(e.target.value)} />
                <Textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <Input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <Input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />

                <Select onValueChange={setCategory}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Button type="submit" className="bg-emerald-600 text-white hover:bg-emerald-700">Upload Product</Button>
            </form>
        </div>
    );
}
