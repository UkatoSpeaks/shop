"use client";

import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { SearchX } from "lucide-react";

export default function ProductGrid() {
  const searchParams = useSearchParams();

  const filteredProducts = useMemo(() => {
    const q = searchParams.get("q")?.toLowerCase();
    const category = searchParams.get("category");
    const price = searchParams.get("price");

    return products.filter((product) => {
      // Search matching
      if (q && !product.title.toLowerCase().includes(q)) return false;

      // Category matching
      if (category) {
        const allowedCategories = category.split(",");
        if (!allowedCategories.includes(product.category)) return false;
      }

      // Price matching
      if (price) {
        const [min, max] = price.split("-").map(Number);
        if (product.price < (min || 0)) return false;
        if (max && product.price > max) return false;
      }

      return true;
    });
  }, [searchParams]);

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <SearchX className="w-10 h-10 text-gray-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500 max-w-xs mx-auto">
          We couldn't find any products matching your current filters. Try adjusting them.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 animate-fade-in">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
