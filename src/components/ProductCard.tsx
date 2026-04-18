"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../types/product";
import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=800";

  return (
    <div className="group bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50/50">
        <Image
          src={imageError ? fallbackImage : product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/5 transition-colors duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-tighter px-4 py-1.5 rounded-full shadow-xl shadow-black/5 ring-1 ring-black/5">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1.5 opacity-70">
            {product.brand}
          </p>
          <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-6">
          <div className="flex bg-yellow-50 px-2 py-0.5 rounded-lg border border-yellow-100">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating.rate)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400 font-bold">({product.rating.count})</span>
        </div>

        {/* Footer: Price and Add Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-black line-through mb-0.5">
              ${(product.price * 1.2).toFixed(2)}
            </span>
            <span className="text-xl font-black text-gray-900 tracking-tighter">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center w-12 h-12 bg-gray-950 text-white rounded-[1.25rem] hover:bg-blue-600 hover:scale-110 active:scale-90 transition-all shadow-xl shadow-gray-200 group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:-rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
