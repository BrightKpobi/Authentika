"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ChevronLeft } from 'lucide-react';

// Shadcn UI Imports
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const INITIAL_CART = [
    {
        id: '1',
        name: 'Apple AirPods Pro 2nd gen',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1588423770186-80f3ef9adad0?q=80&w=400',
        quantity: 1,
    },
    {
        id: '3',
        name: 'PlayStation 5 Console',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400',
        quantity: 1,
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 20.00;
    const total = subtotal + shipping;

    return (
        <main className="min-h-screen bg-background py-10">
            <div className="max-w-7xl mx-auto px-6">

                <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
                    <Link href="/">
                        <ChevronLeft className="mr-1 w-4 h-4" /> Back to shopping
                    </Link>
                </Button>

                <h1 className="text-2xl font-bold tracking-tight mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Items List - Using Shadcn Table for clean alignment */}
                    <div className="lg:col-span-8">
                        {cartItems.length > 0 ? (
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader className="bg-muted/50">
                                        <TableRow>
                                            <TableHead className="w-[400px]">Product</TableHead>
                                            <TableHead className="text-center">Quantity</TableHead>
                                            <TableHead className="text-right">Price</TableHead>
                                            <TableHead className="w-[50px]"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {cartItems.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative w-16 h-16 rounded-md bg-muted overflow-hidden border">
                                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                        </div>
                                                        <span className="font-medium text-sm line-clamp-1">{item.name}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-center gap-3">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-7 w-7 rounded-full shadow-none"
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </Button>
                                                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-7 w-7 rounded-full shadow-none"
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right font-semibold">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 text-muted-foreground hover:text-destructive transition-colors"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <Card className="border-dashed shadow-none">
                                <CardContent className="flex flex-col items-center justify-center py-12">
                                    <p className="text-sm text-muted-foreground mb-4">Your cart is currently empty.</p>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="/">Shop Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Order Summary - Using Shadcn Card */}
                    <div className="lg:col-span-4">
                        <Card className="shadow-none border bg-muted/20">
                            <CardContent className="p-6">
                                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Shipping</span>
                                        <span className="text-foreground font-medium">${shipping.toFixed(2)}</span>
                                    </div>

                                    <Separator className="my-4" />

                                    <div className="flex justify-between text-base font-bold">
                                        <span>Total</span>
                                        <span className="text-emerald-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button className="w-full mt-6 bg-[#4cbe42] hover:bg-[#3da832] text-white shadow-none h-11 rounded-full">
                                    Continue to Checkout
                                </Button>

                                <p className="text-[11px] text-center text-muted-foreground mt-4">
                                    Secure Checkout powered by Stripe
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </main>
    );
}