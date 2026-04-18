import React from "react";
import { MessageSquare, Camera, Code, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">S</span>
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">
                SHOP<span className="text-gray-400">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Curating objects of exceptional quality and minimalist design for the refined individual.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-3 text-gray-400 hover:text-gray-900 transition-all border border-transparent hover:border-gray-100 rounded-2xl">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 text-gray-400 hover:text-gray-900 transition-all border border-transparent hover:border-gray-100 rounded-2xl">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 text-gray-400 hover:text-gray-900 transition-all border border-transparent hover:border-gray-100 rounded-2xl">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 text-gray-400 hover:text-gray-900 transition-all border border-transparent hover:border-gray-100 rounded-2xl">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
          <p>© 2026 Shop Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
