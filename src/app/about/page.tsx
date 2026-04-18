import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200" 
                alt="Our Workspace"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                Since 2024
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                Our <span className="italic font-normal serif text-gray-400">Context</span>
              </h1>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  SHOP was founded on the principle that the objects we surround ourselves 
                  with should be as meaningful as the experiences they support.
                </p>
                <p>
                  We are a small collective of designers and curators based in a quiet workshop, 
                  dedicated to the pursuit of structural perfection. Each product in our 
                  collection is a result of hundreds of hours of refinement, ensuring 
                  that what arrives at your door is an artifact of lasting value.
                </p>
                <p className="font-bold text-gray-900 border-l-4 border-gray-900 pl-6 italic">
                  "We don't just sell products; we curate the foundations of a 
                  modern, intentional lifestyle."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Support Section */}
        <section className="bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
            Let's Start a <span className="italic font-normal serif text-gray-400">Dialogue</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg">
            Whether you have a question about a specific piece or just want to 
            discuss our design philosophy, we're here to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:studio@shop.com" 
              className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Email the Studio
            </a>
            <button className="border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-colors">
              Our Instagram
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
