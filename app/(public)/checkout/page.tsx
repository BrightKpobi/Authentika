"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CartItem } from "@/types/types";

interface CheckoutProps {
  cart?: CartItem[];
  total?: number;
  onComplete?: (details: any) => void;
}

const Checkout: React.FC<CheckoutProps> = ({
  cart = [],
  total = 0,
  onComplete = () => {},
}) => {
  const [step, setStep] = useState(1);
  const shipping = 15;
  const finalTotal = total + shipping;

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "Ghana",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else onComplete(formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-24">
      <div className="lg:col-span-7">
        <div className="flex items-center space-x-4 mb-12 text-[10px] tracking-widest font-bold uppercase">
          <span className={step >= 1 ? "text-black" : "text-zinc-300"}>
            01 SHIPPING
          </span>
          <span className="text-zinc-300">——</span>
          <span className={step >= 2 ? "text-black" : "text-zinc-300"}>
            02 PAYMENT
          </span>
          <span className="text-zinc-300">——</span>
          <span className={step >= 3 ? "text-black" : "text-zinc-300"}>
            03 REVIEW
          </span>
        </div>

        <form onSubmit={handleNext} className="space-y-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif">Shipping Details</h2>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL ADDRESS"
                className="w-full border-b border-zinc-200 py-4 text-[10px] outline-none focus:border-black uppercase tracking-widest"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="FIRST NAME"
                  className="w-full border-b border-zinc-200 py-4 text-[10px] outline-none focus:border-black uppercase tracking-widest"
                />
                <input
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="LAST NAME"
                  className="w-full border-b border-zinc-200 py-4 text-[10px] outline-none focus:border-black uppercase tracking-widest"
                />
              </div>
              <input
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="STREET ADDRESS"
                className="w-full border-b border-zinc-200 py-4 text-[10px] outline-none focus:border-black uppercase tracking-widest"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif">Secure Payment</h2>
              <input
                required
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="CARD NUMBER"
                className="w-full border-b border-zinc-200 py-4 text-[10px] outline-none focus:border-black tracking-[0.2em]"
              />
            </div>
          )}

          <div className="pt-12 flex space-x-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 border border-zinc-200 py-5 text-[10px] font-bold tracking-widest uppercase hover:border-black transition-colors">
                Back
              </button>
            )}
            <button
              type="submit"
              className="flex-[2] bg-black text-white py-5 text-[10px] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors">
              {step === 3 ? `Pay $${finalTotal}` : "Continue"}
            </button>
          </div>
        </form>
      </div>

      {/* Summary Area */}
      <div className="lg:col-span-5 bg-zinc-50 p-8 h-fit">
        <h3 className="text-[10px] font-bold tracking-widest uppercase mb-12">
          Order Summary
        </h3>
        <div className="space-y-6 mb-12">
          {cart.map((item) => (
            <div key={item.id} className="flex space-x-4">
              <div className="w-16 aspect-[3/4] bg-white relative shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h4 className="text-[10px] font-bold uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[10px] font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
                <p className="text-[9px] text-zinc-400 mt-1 uppercase italic">
                  {item.selectedSize} / Qty {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-8 border-t border-zinc-200">
          <div className="flex justify-between text-[10px] uppercase">
            <span className="text-zinc-400">Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-4 border-t border-zinc-200 uppercase">
            <span>Total</span>
            <span>${finalTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
