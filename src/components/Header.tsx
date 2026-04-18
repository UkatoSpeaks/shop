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
    router.push(`?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2rem] px-6 h-20 flex justify-between items-center gap-4 shadow-2xl shadow-blue-500/5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black text-gradient tracking-tighter hover:scale-105 transition-transform block">
              SHOP.
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg hidden md:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-4 h-4" />
              <input
                type="text"
                placeholder="Find anything premium..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all text-sm font-medium"
              />
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all group">
              <ShoppingCart className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              {totalItems > 0 && (
                <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-[10px] font-black text-white ring-4 ring-white group-hover:bg-blue-600 transition-colors">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all group">
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
            <button className="inline-flex md:hidden p-3 text-gray-600 hover:bg-gray-100 rounded-2xl">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search - Only on Mobile */}
        <div className="md:hidden mt-3 px-2">
          <form onSubmit={handleSearch} className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/80 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 text-sm font-medium shadow-lg shadow-gray-100"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
