"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../../data/products";
import { useCartStore } from "../../../store/cartStore";
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RefreshCcw } from "lucide-react";
import ProductCard from "../../../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = products.find((p) => p.id === Number(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black text-gray-900 mb-4">Object Not Found</h1>
        <Link href="/" className="text-blue-600 font-bold hover:underline">Return to Collection</Link>
      </div>
    );
  }

  const recommendations = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      {/* Breadcrumb / Back */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors mb-12 group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </Link>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
        {/* Gallery */}
        <div className="relative aspect-[4/5] bg-[#F8F5F2] rounded-[4rem] overflow-hidden shadow-sm group">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            priority
          />
          <div className="absolute top-8 left-8">
            <span className="px-5 py-2 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
              {product.category}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating.rate) ? "fill-gray-900 text-gray-900" : "text-gray-200"}
                />
              ))}
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                ({product.rating.count} Verified Reviews)
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
              {product.title}
            </h1>
            
            <p className="text-3xl font-black text-gray-900 tracking-tighter mb-10">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg mb-12">
              {product.description}
            </p>
          </div>

          {/* Configuration */}
          <div className="space-y-10 mb-12">
            <div>
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Quantity</h3>
              <div className="flex items-center w-max bg-gray-50 rounded-full px-2 py-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-400 hover:text-gray-900"
                >
                  <Minus size={16} />
                </button>
                <span className="w-16 text-center text-lg font-black text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-400 hover:text-gray-900"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  for(let i=0; i<quantity; i++) addToCart(product);
                }}
                className="flex-1 py-6 bg-gray-900 text-white font-black rounded-full hover:bg-gray-800 transition-all transform active:scale-95 shadow-2xl shadow-gray-900/20 flex items-center justify-center gap-3"
              >
                <ShoppingCart size={20} />
                Add to Bag
              </button>
              <button className="px-10 py-6 bg-transparent border-2 border-gray-100 text-gray-900 font-black rounded-full hover:bg-gray-50 transition-all">
                Wishlist
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <Truck size={18} className="text-gray-900" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-tight">Fast Global<br/>Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck size={18} className="text-gray-900" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-tight">Secure<br/>Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <RefreshCcw size={18} className="text-gray-900" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-tight">30-Day Refined<br/>Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Sell */}
      {recommendations.length > 0 && (
        <section className="border-t border-gray-100 pt-32">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Complementary Objects</h2>
            <Link href="/" className="text-[11px] font-black text-gray-400 hover:text-gray-900 uppercase tracking-widest flex items-center gap-2">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recommendations.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function ChevronRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
