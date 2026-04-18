import React from "react";
import { MessageSquare, Camera, Code, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Shop
            </h2>
            <p className="text-sm text-gray-500 max-w-xs">
              Premium products for your everyday life. Quality guaranteed.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
              <Code className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-all">
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
