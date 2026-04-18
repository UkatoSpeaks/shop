"use client";

import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set("q", search);
    } else {
      params.delete("q");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2.5rem] px-8 h-20 flex justify-between items-center gap-8 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer flex-shrink-0">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tighter">
              SHOP<span className="text-gray-400">.</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {["Collection", "New Arrivals", "Design", "About"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[13px] font-bold text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Search - Subtle Desktop */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xs hidden md:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-4 focus:ring-gray-900/5 transition-all text-xs font-bold uppercase tracking-wider"
              />
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative group">
              <button className="p-3 text-gray-500 hover:text-gray-900 transition-all duration-300">
                <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
              </button>
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-gray-900 border-2 border-white text-white text-[9px] font-black flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <button className="p-3 text-gray-500 hover:text-gray-900 transition-all group">
              <User size={22} className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="inline-flex lg:hidden p-3 text-gray-900">
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3 px-2">
          <form onSubmit={handleSearch} className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none text-sm font-medium shadow-sm"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
