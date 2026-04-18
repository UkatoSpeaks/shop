import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function NewArrivalsPage() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-xs mb-4">
            Seasonal Selection
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6">
            New <span className="italic font-normal serif text-gray-400">Arrivals</span>
          </h1>
          <p className="max-w-xl text-gray-500 text-lg leading-relaxed">
            Discover our latest additions. Each piece is selected for its unique design 
            and exceptional craftsmanship, pushing the boundaries of modern utility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {newProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm mt-8">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              Coming Soon
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
