import React from "react";
import Image from "next/image";

export default function DesignPage() {
  const designPrinciples = [
    {
      title: "Utility",
      description: "Meaningful functionality that solves real problems without unnecessary noise.",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800",
    },
    {
      title: "Purity",
      description: "Reducing every object to its essential form, celebrating the raw materials.",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800",
    },
    {
      title: "Durability",
      description: "Designing for longevity, creating artifacts that age gracefully over decades.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                The Philosophy
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                Design as <span className="italic font-normal serif text-gray-400">Standard</span>
              </h1>
              <p className="text-gray-500 text-xl leading-relaxed max-w-lg mb-8">
                We believe that good design is invisible. It should support your life 
                with quiet confidence, providing utility through structural integrity 
                and aesthetic restraint.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=1200" 
                alt="Design Concept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {designPrinciples.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-bold text-sm tracking-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
