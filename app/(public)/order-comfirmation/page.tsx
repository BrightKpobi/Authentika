import React from "react";
import { Order, AppView } from "@/types/types";

interface OrderConfirmationProps {
  order: Order;
  navigate: (view: AppView) => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  order,
  navigate,
}) => {
  return (
    <div className="max-w-2xl mx-auto py-24 px-6 text-center animate-fade-in">
      <div className="flex justify-center mb-12">
        <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <h1 className="text-5xl font-serif mb-6">Confirmed.</h1>
      <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-12 leading-loose">
        Your architectural selection has been registered.
        <br />
        Order ID: <span className="text-black font-bold">{order.id}</span>
      </p>

      <div className="bg-brand-gray p-8 text-left mb-12 space-y-4">
        <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          What Happens Next
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          1. You will receive a confirmation email with your order receipt.
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          2. Our craftsmen will prepare your shipment for dispatch.
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          3. Tracking details will be provided via email once shipped.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          onClick={() => navigate("Account")}
          className="w-full bg-brand-black text-brand-white py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-zinc-800 transition-colors">
          Track Order
        </button>
        <button
          onClick={() => navigate("Shop")}
          className="w-full border border-brand-gray py-5 text-xs font-bold tracking-[0.4em] uppercase hover:border-black transition-colors">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
