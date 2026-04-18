import React, { Suspense } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductGrid from "../components/ProductGrid";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-gray-900 px-8 py-20 md:px-20 md:py-32 shadow-2xl">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6 animate-slide-up">
              New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 animate-slide-up delay-100">
              ELITE <br/>
              <span className="text-blue-500">SELECTIONS.</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium mb-12 max-w-md animate-slide-up delay-200">
              Discover our curated collection of high-end essentials designed for the modern lifestyle.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <button className="px-8 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-black rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Sidebar */}
        <Suspense fallback={<div className="w-full lg:w-72 h-96 bg-white/50 animate-pulse rounded-[2.5rem]" />}>
          <FiltersSidebar />
        </Suspense>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter mb-1">
                Our Collection
              </h2>
              <p className="text-sm font-bold text-gray-400">
                Premium items crafted for perfection
              </p>
            </div>
            <div className="hidden sm:block">
              <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest px-4 py-2 bg-blue-50 rounded-full">
                Featured
              </span>
            </div>
          </div>

          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-white/50 animate-pulse rounded-[2.5rem]" />
              ))}
            </div>
          }>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
