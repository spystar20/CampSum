import React, { useState } from 'react';
import { 
  FaShoppingCart, FaTint, FaSearch, FaBook, FaBlog, 
  FaCalendarAlt, FaBrain, FaPercent, FaBriefcase, 
  FaUsers, FaBed, FaShoppingBag, FaUtensils, FaHome,
  FaBars, FaTimes, FaChartLine, FaUserShield
} from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const services = [
  { id: 1, name: 'Marketplace', icon: FaShoppingCart, color: 'bg-blue-600', stats: { users: 1247, active: 89, revenue: '₹45,230' } },
  { id: 2, name: 'Rakt Connect', icon: FaTint, color: 'bg-red-600', stats: { donors: 456, requests: 23, fulfilled: 198 } },
  { id: 3, name: 'Lost & Found', icon: FaSearch, color: 'bg-blue-500', stats: { items: 234, found: 156, pending: 78 } },
  { id: 4, name: 'Book Selling', icon: FaBook, color: 'bg-red-500', stats: { books: 3421, sold: 892, active: 2529 } },
  { id: 5, name: 'Blogs', icon: FaBlog, color: 'bg-blue-400', stats: { posts: 567, views: '45.2K', authors: 89 } },
  { id: 6, name: 'Events & Updates', icon: FaCalendarAlt, color: 'bg-red-400', stats: { events: 45, upcoming: 12, attendees: 3421 } },
  { id: 7, name: 'Mental Health', icon: FaBrain, color: 'bg-blue-700', stats: { sessions: 234, counselors: 12, active: 89 } },
  { id: 8, name: 'Student Discounts', icon: FaPercent, color: 'bg-red-700', stats: { offers: 156, partners: 34, redeemed: 892 } },
  { id: 9, name: 'Internships & Jobs', icon: FaBriefcase, color: 'bg-blue-600', stats: { listings: 234, applied: 1567, hired: 89 } },
  { id: 10, name: 'Community', icon: FaUsers, color: 'bg-red-600', stats: { members: 5678, posts: 8934, engagement: '78%' } },
  { id: 11, name: 'Roommate Finder', icon: FaBed, color: 'bg-blue-500', stats: { seekers: 345, matched: 123, active: 222 } },
  { id: 12, name: 'Essentials', icon: FaShoppingBag, color: 'bg-red-500', stats: { products: 2341, orders: 567, revenue: '₹1.2L' } },
  { id: 13, name: 'Foods', icon: FaUtensils, color: 'bg-blue-400', stats: { providers: 23, orders: 1234, revenue: '₹67K' } },
  { id: 14, name: 'Accommodation', icon: FaHome, color: 'bg-red-400', stats: { listings: 456, bookings: 234, available: 222 } }
];

export default function CampsumAdmin() {
  const [selectedService, setSelectedService] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-gray-950 border-r border-red-900/30 overflow-hidden`}>
        <div className="p-4 border-b border-red-900/30">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Campsum Admin
          </h1>
          <p className="text-xs text-gray-400 mt-1">Student Services Platform</p>
        </div>
        
        <nav className="p-2 overflow-y-auto h-[calc(100vh-100px)]">
          <button
            onClick={() => setSelectedService(null)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
              selectedService === null 
                ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            <FaChartLine />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                  selectedService?.id === service.id 
                    ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon />
                <span className="text-sm font-medium">{service.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-950 border-b border-red-900/30 p-4 flex items-center justify-between sticky top-0 z-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
              <FaUserShield className="text-red-500" />
              <span className="text-sm font-medium">Admin Panel</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {selectedService === null ? (
            <>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
                <p className="text-gray-400">Monitor all your services in one place</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium">Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">12,458</div>
                    <p className="text-red-100 text-xs mt-1">+12.5% from last month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium">Active Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">14</div>
                    <p className="text-blue-100 text-xs mt-1">All systems operational</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-500 to-blue-500 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">₹2.8L</div>
                    <p className="text-white/80 text-xs mt-1">This month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-red-900/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium">Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">87.3%</div>
                    <p className="text-gray-400 text-xs mt-1">Average across platform</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mb-4">All Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card 
                      key={service.id} 
                      className="bg-gray-900 border border-gray-800 hover:border-red-600 transition-all cursor-pointer group"
                      onClick={() => setSelectedService(service)}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`${service.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <CardTitle className="text-white text-base">{service.name}</CardTitle>
                            <CardDescription className="text-gray-500 text-xs">Click to view details</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-2">
                          {Object.entries(service.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-white">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedService(null)}
                className="mb-4 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
              >
                ← Back to Dashboard
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`${selectedService.color} p-4 rounded-xl`}>
                  {React.createElement(selectedService.icon, { size: 32 })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedService.name}</h2>
                  <p className="text-gray-400">Manage and monitor service activity</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {Object.entries(selectedService.stats).map(([key, value]) => (
                  <Card key={key} className="bg-gray-900 border border-gray-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-gray-400 text-sm capitalize">{key}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                        {value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="bg-gray-900 border border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription>Latest actions in this service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                          <div className="flex-1">
                            <div className="text-sm text-white">Activity #{i}</div>
                            <div className="text-xs text-gray-500">2 hours ago</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                    <CardDescription>Common management tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all">
                        <div className="text-sm font-medium">Add New</div>
                      </button>
                      <button className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all">
                        <div className="text-sm font-medium">View All</div>
                      </button>
                      <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                        <div className="text-sm font-medium">Export Data</div>
                      </button>
                      <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all">
                        <div className="text-sm font-medium">Settings</div>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}