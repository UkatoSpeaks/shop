import React from "react";
import { Package, MapPin, Settings, LogOut, ChevronRight, CreditCard } from "lucide-react";

export default function ProfilePage() {
  const accountSections = [
    {
      icon: <Package className="w-5 h-5" />,
      title: "Order History",
      description: "Track your current shipments and view past orders.",
      count: 3
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Shipping Addresses",
      description: "Manage your delivery locations and primary address.",
      count: 1
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment Methods",
      description: "Securely store and manage your cards for faster checkout.",
      count: 1
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Settings",
      description: "Update your profile details and security preferences.",
    }
  ];

  const recentOrders = [
    { id: "#SKU-82194", date: "Oct 12, 2024", status: "Delivered", total: 349.99 },
    { id: "#SKU-81022", date: "Sept 24, 2024", status: "In Transit", total: 125.00 }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <span className="text-gray-400 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
              Member Account
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
              Alex <span className="italic font-normal serif text-gray-400">Sterling</span>
            </h1>
            <p className="text-gray-500 font-bold mt-2">alex.sterling@premium.com</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-100 rounded-2xl text-gray-900 font-black uppercase tracking-widest text-xs hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {accountSections.map((section, index) => (
                <div key={index} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-900/5 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-gray-950 group-hover:text-white transition-colors">
                    {section.icon}
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      {section.title}
                    </h3>
                    {section.count && (
                      <span className="bg-gray-100 px-2.5 py-1 rounded-full text-[10px] font-black">
                        {section.count}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden">
              <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h3>
                <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID</th>
                      <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                      <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                      <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/30 transition-colors cursor-pointer group">
                        <td className="px-8 py-6 text-sm font-black text-gray-900">{order.id}</td>
                        <td className="px-8 py-6 text-sm font-bold text-gray-500">{order.date}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                            order.status === "Delivered" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-sm font-black text-gray-900">${order.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-gray-950 rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden relative">
              <div className="relative z-10">
                <span className="text-gray-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">
                  Studio Membership
                </span>
                <h3 className="text-3xl font-black tracking-tighter mb-4 leading-tight">
                  Premium Tier <br/>Benefit Access
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Your account status grants you complimentary shipping and early 
                  access to our limited artifact drops.
                </p>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="w-3/4 h-full bg-white rounded-full" />
                </div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                  Progress to Curator Status: 75%
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full" />
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10">
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-[0.2em] mb-6">Support Studio</h4>
              <div className="space-y-4">
                <button className="w-full flex justify-between items-center group">
                  <span className="text-gray-500 font-bold group-hover:text-gray-900 transition-colors">Help Center</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </button>
                <button className="w-full flex justify-between items-center group">
                  <span className="text-gray-500 font-bold group-hover:text-gray-900 transition-colors">Live Concierge</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </button>
                <button className="w-full flex justify-between items-center group">
                  <span className="text-gray-500 font-bold group-hover:text-gray-900 transition-colors">Return Policy</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
