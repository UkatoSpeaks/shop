import React, { Suspense } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductGrid from "../components/ProductGrid";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[4rem] bg-[#F8F5F2] flex items-center shadow-sm">
          {/* Content Layer */}
          <div className="relative z-10 w-full grid md:grid-cols-2 items-center h-full">
            <div className="px-12 md:px-20 py-16">
              <span className="flex items-center gap-2 mb-8 animate-slide-up">
                <span className="w-10 h-px bg-gray-900" />
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-[0.4em]">
                  Seasonal Artifacts
                </span>
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-10 animate-slide-up delay-100">
                TIMELESS <br/>
                <span className="italic font-light serif text-gray-600">Essence.</span>
              </h1>
              <p className="text-lg text-gray-600 font-medium mb-12 max-w-sm leading-relaxed animate-slide-up delay-200">
                Curating objects of exceptional quality and minimalist design for the refined individual.
              </p>
              <div className="flex items-center gap-8 animate-slide-up delay-300">
                <button className="px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-gray-900/20">
                  Explore Collection
                </button>
                <button className="text-[13px] font-black text-gray-900 uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                  Our Story
                </button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="hidden md:block h-full relative group">
              <img 
                src="/luxury_ecom_hero_vibe_image_1776517610943.png" 
                alt="Luxury Lifestyle"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F2] via-transparent to-transparent" />
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
