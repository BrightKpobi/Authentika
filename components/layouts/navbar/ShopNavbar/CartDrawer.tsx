"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, X } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSize?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  total: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onRemove,
  onUpdateQty,
  total,
}) => {
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l-0 z-[100] bg-white">
        <SheetHeader className="p-8 pb-4">
          <SheetTitle className="text-[10px] font-bold tracking-[0.2em] uppercase text-left">
            Shopping Bag ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <Separator className="bg-zinc-100" />

        <ScrollArea className="flex-grow px-8">
          <div className="py-8 space-y-8">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xs text-zinc-400 italic font-serif">
                  Your bag is empty.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 text-[10px] font-bold underline tracking-widest uppercase">
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-20 aspect-[3/4] bg-zinc-100 relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[10px] font-bold tracking-widest uppercase">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-zinc-400 hover:text-black">
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-[9px] text-zinc-500 uppercase">
                      {item.selectedSize}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-4 border border-zinc-200 px-2 py-1">
                        <button onClick={() => onUpdateQty(item.id, -1)}>
                          <Minus size={10} />
                        </button>
                        <span className="text-xs w-4 text-center">
                          {item.quantity}
                        </span>
                        <button onClick={() => onUpdateQty(item.id, 1)}>
                          <Plus size={10} />
                        </button>
                      </div>
                      <p className="text-xs font-bold">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        <div className="p-8 border-t border-zinc-100 bg-white">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] tracking-widest uppercase">
              Subtotal
            </span>
            <span className="text-lg font-bold">${total.toLocaleString()}</span>
          </div>

          <button className="w-full bg-black text-white py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-zinc-800 transition-colors">
            Checkout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
