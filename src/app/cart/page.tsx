"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch for persisted store
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 animate-fade-in">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4">Your bag is empty.</h1>
        <p className="text-gray-500 font-medium mb-10 text-center max-w-xs leading-relaxed">
          Looks like you haven't added any objects of desire yet. Start with our latest artifacts.
        </p>
        <Link 
          href="/"
          className="px-10 py-5 bg-gray-900 text-white font-black rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/10"
        >
          Explore Collection
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Your Bag</h1>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {totalItems()} Items
            </span>
          </div>

          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.id} className="group flex gap-8 pb-10 border-b border-gray-100 last:border-0">
                <div className="relative w-32 h-40 bg-gray-50 rounded-[1.5rem] overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-black text-gray-900 leading-tight mb-1 group-hover:text-gray-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <p className="text-lg font-black text-gray-900">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-gray-50 rounded-full px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-400 hover:text-gray-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm font-black text-gray-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-400 hover:text-gray-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-2 text-[11px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Side */}
        <div className="lg:w-96">
          <div className="glass p-10 rounded-[3rem] sticky top-32 border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 tracking-tighter mb-8">Summary</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between font-bold">
                <span className="text-gray-400 text-sm">Subtotal</span>
                <span className="text-gray-900">${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-400 text-sm">Shipping</span>
                <span className="text-gray-900 font-bold uppercase text-[10px] bg-green-50 text-green-600 px-3 py-1 rounded-full">Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-400 text-sm">Estimated Tax</span>
                <span className="text-gray-900">$0.00</span>
              </div>
              <div className="h-px bg-gray-100 my-6" />
              <div className="flex justify-between items-end">
                <span className="text-gray-600 font-black">Total</span>
                <span className="text-3xl font-black text-gray-900 tracking-tighter">
                  ${totalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full py-6 bg-gray-900 text-white font-black rounded-full hover:bg-gray-800 transition-all transform active:scale-95 shadow-2xl shadow-gray-900/20 flex items-center justify-center gap-3">
              Checkout
              <ArrowRight size={18} />
            </button>
            <p className="mt-8 text-[11px] text-center text-gray-400 font-bold uppercase tracking-[0.15em] leading-relaxed px-4">
              Secure checkout guaranteed with international artifact shipping.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
