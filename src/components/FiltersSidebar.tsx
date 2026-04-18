"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronRight } from "lucide-react";

const categories = ["electronics", "clothing", "books"];

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategories(category.split(","));
    } else {
      setSelectedCategories([]);
    }

    const price = searchParams.get("price");
    if (price) {
      const [min, max] = price.split("-");
      setMinPrice(min || "");
      setMaxPrice(max || "");
    } else {
      setMinPrice("");
      setMaxPrice("");
    }
  }, [searchParams]);

  const updateFilters = (newCategories: string[], min: string, max: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","));
    } else {
      params.delete("category");
    }

    if (min || max) {
      params.set("price", `${min || 0}-${max || 1000000}`);
    } else {
      params.delete("price");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    updateFilters(newCategories, minPrice, maxPrice);
  };

  const handlePriceChange = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters(selectedCategories, minPrice, maxPrice);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    router.push("/", { scroll: false });
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-28 bg-white/40 backdrop-blur-sm border border-gray-100 p-8 rounded-[2.5rem] shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <SlidersHorizontal className="w-4 h-4 text-white" />
            </div>
            <h2 className="font-black text-gray-900 tracking-tight">Filters</h2>
          </div>
          <button 
            onClick={clearFilters}
            className="text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Categories */}
        <div className="mb-10">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
            Explore Categories
          </h3>
          <div className="space-y-4">
            {categories.map((category) => (
              <label key={category} className="flex items-center group cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="peer appearance-none w-6 h-6 border-2 border-gray-100 rounded-xl checked:bg-gray-900 checked:border-gray-900 transition-all cursor-pointer"
                  />
                  <ChevronRight className="absolute left-1 w-4 h-4 text-white scale-0 peer-checked:scale-100 transition-transform" />
                </div>
                <span className="ml-4 text-sm font-bold text-gray-500 group-hover:text-gray-900 capitalize transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Price Range</h3>
          <form onSubmit={handlePriceChange} className="space-y-6">
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
              />
              <span className="text-gray-300 font-black">—</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gray-900 text-white text-sm font-black rounded-2xl hover:bg-blue-600 transform active:scale-95 transition-all shadow-xl shadow-gray-200"
            >
              Apply Filter
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
