import React, { useState } from 'react';
import { 
  FaShoppingCart, FaTint, FaSearch, FaBook, FaBlog, 
  FaCalendarAlt, FaBrain, FaPercent, FaBriefcase, 
  FaUsers, FaBed, FaShoppingBag, FaUtensils, FaHome,
  FaBars, FaTimes, FaChartLine, FaUserShield, FaStore,
  FaCheckCircle, FaExclamationTriangle, FaBan, FaEye,
  FaEdit, FaTrash, FaCrown, FaFilter, FaDownload
} from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const services = [
  { 
    id: 1, 
    name: 'Marketplace', 
    icon: FaShoppingCart, 
    color: 'bg-blue-600',
    sellers: [
      { id: 1, name: 'Rahul Sharma', items: 23, sales: '₹12,450', rating: 4.5, status: 'active', joined: '2024-01-15' },
      { id: 2, name: 'Priya Patel', items: 45, sales: '₹28,900', rating: 4.8, status: 'active', joined: '2024-02-20' },
      { id: 3, name: 'Amit Kumar', items: 12, sales: '₹5,200', rating: 3.9, status: 'pending', joined: '2024-11-10' },
      { id: 4, name: 'Sneha Singh', items: 67, sales: '₹45,300', rating: 4.9, status: 'active', joined: '2023-12-05' },
    ]
  },
  { 
    id: 2, 
    name: 'Rakt Connect', 
    icon: FaTint, 
    color: 'bg-red-600',
    sellers: [
      { id: 1, name: 'Red Cross Society', donations: 156, fulfilled: 142, rating: 5.0, status: 'active', joined: '2023-11-01' },
      { id: 2, name: 'City Blood Bank', donations: 234, fulfilled: 218, rating: 4.7, status: 'active', joined: '2023-10-15' },
      { id: 3, name: 'Student Health Center', donations: 89, fulfilled: 76, rating: 4.4, status: 'active', joined: '2024-03-10' },
    ]
  },
  { 
    id: 3, 
    name: 'Lost & Found', 
    icon: FaSearch, 
    color: 'bg-blue-500',
    sellers: [
      { id: 1, name: 'Campus Security', items: 156, returned: 123, rating: 4.8, status: 'active', joined: '2023-09-01' },
      { id: 2, name: 'Student Council', items: 89, returned: 67, rating: 4.6, status: 'active', joined: '2023-10-20' },
      { id: 3, name: 'Hostel Committee', items: 45, returned: 34, rating: 4.4, status: 'active', joined: '2024-01-15' },
    ]
  },
  { 
    id: 4, 
    name: 'Book Selling', 
    icon: FaBook, 
    color: 'bg-red-500',
    sellers: [
      { id: 1, name: 'BookHub Store', items: 345, sales: '₹89,500', rating: 4.6, status: 'active', joined: '2024-01-05' },
      { id: 2, name: 'Academic Books Ltd', items: 567, sales: '₹1,23,400', rating: 4.8, status: 'active', joined: '2023-09-20' },
      { id: 3, name: 'Student Library', items: 234, sales: '₹56,700', rating: 4.5, status: 'active', joined: '2024-02-14' },
      { id: 4, name: 'Textbook Exchange', items: 123, sales: '₹34,200', rating: 4.2, status: 'suspended', joined: '2024-06-01' },
    ]
  },
  { 
    id: 5, 
    name: 'Blogs', 
    icon: FaBlog, 
    color: 'bg-blue-400',
    sellers: [
      { id: 1, name: 'Tech Writers Hub', posts: 45, views: '12.3K', rating: 4.7, status: 'active', joined: '2024-02-10' },
      { id: 2, name: 'Student Stories', posts: 67, views: '23.5K', rating: 4.9, status: 'active', joined: '2023-11-05' },
      { id: 3, name: 'Career Insights', posts: 34, views: '8.9K', rating: 4.5, status: 'pending', joined: '2024-10-20' },
    ]
  },
  { 
    id: 6, 
    name: 'Events & Updates', 
    icon: FaCalendarAlt, 
    color: 'bg-red-400',
    sellers: [
      { id: 1, name: 'Campus Events Team', events: 23, attendees: 1234, rating: 4.8, status: 'active', joined: '2023-08-15' },
      { id: 2, name: 'Cultural Committee', events: 34, attendees: 2345, rating: 4.9, status: 'active', joined: '2023-09-01' },
      { id: 3, name: 'Tech Fest Organizers', events: 12, attendees: 567, rating: 4.6, status: 'active', joined: '2024-03-10' },
    ]
  },
  { 
    id: 7, 
    name: 'Mental Health', 
    icon: FaBrain, 
    color: 'bg-blue-700',
    sellers: [
      { id: 1, name: 'Dr. Sarah Counseling', sessions: 156, clients: 89, rating: 4.9, status: 'active', joined: '2023-07-01' },
      { id: 2, name: 'Mind Wellness Center', sessions: 234, clients: 123, rating: 4.8, status: 'active', joined: '2023-08-20' },
      { id: 3, name: 'Student Support Services', sessions: 89, clients: 56, rating: 4.7, status: 'active', joined: '2024-01-05' },
      { id: 4, name: 'Therapy Hub', sessions: 45, clients: 34, rating: 4.5, status: 'pending', joined: '2024-11-01' },
    ]
  },
  { 
    id: 8, 
    name: 'Student Discounts', 
    icon: FaPercent, 
    color: 'bg-red-700',
    sellers: [
      { id: 1, name: 'Career Coaching Plus', offers: 12, redeemed: 456, rating: 4.7, status: 'active', joined: '2024-03-01' },
      { id: 2, name: 'IIT Academy', offers: 8, redeemed: 234, rating: 4.9, status: 'active', joined: '2023-12-10' },
      { id: 3, name: 'SkillUp Institute', offers: 15, redeemed: 678, rating: 4.6, status: 'active', joined: '2024-01-20' },
      { id: 4, name: 'Tech Bootcamp', offers: 5, redeemed: 123, rating: 4.3, status: 'pending', joined: '2024-11-05' },
    ]
  },
  { 
    id: 9, 
    name: 'Internships & Jobs', 
    icon: FaBriefcase, 
    color: 'bg-blue-600',
    sellers: [
      { id: 1, name: 'TechCorp India', listings: 23, hired: 12, rating: 4.8, status: 'active', joined: '2024-02-01' },
      { id: 2, name: 'Startup Hub', listings: 45, hired: 28, rating: 4.5, status: 'active', joined: '2023-11-15' },
      { id: 3, name: 'Finance Solutions', listings: 12, hired: 7, rating: 4.6, status: 'active', joined: '2024-05-10' },
    ]
  },
  { 
    id: 10, 
    name: 'Community', 
    icon: FaUsers, 
    color: 'bg-red-600',
    sellers: [
      { id: 1, name: 'Campus Influencers', posts: 234, followers: 5678, rating: 4.7, status: 'active', joined: '2023-10-01' },
      { id: 2, name: 'Student Content Creators', posts: 456, followers: 8912, rating: 4.8, status: 'active', joined: '2023-11-20' },
      { id: 3, name: 'Club Coordinators', posts: 123, followers: 3456, rating: 4.5, status: 'active', joined: '2024-02-15' },
      { id: 4, name: 'Social Media Team', posts: 89, followers: 2345, rating: 4.4, status: 'suspended', joined: '2024-06-10' },
    ]
  },
  { 
    id: 11, 
    name: 'Roommate Finder', 
    icon: FaBed, 
    color: 'bg-blue-500',
    sellers: [
      { id: 1, name: 'Roommate Connect', matches: 89, active: 56, rating: 4.6, status: 'active', joined: '2023-09-15' },
      { id: 2, name: 'Student Housing Services', matches: 123, active: 78, rating: 4.8, status: 'active', joined: '2023-10-20' },
      { id: 3, name: 'Campus Living Solutions', matches: 67, active: 45, rating: 4.5, status: 'pending', joined: '2024-10-15' },
    ]
  },
  { 
    id: 12, 
    name: 'Essentials', 
    icon: FaShoppingBag, 
    color: 'bg-red-500',
    sellers: [
      { id: 1, name: 'Campus Store', items: 456, sales: '₹67,800', rating: 4.4, status: 'active', joined: '2023-10-01' },
      { id: 2, name: 'Student Mart', items: 678, sales: '₹98,500', rating: 4.7, status: 'active', joined: '2023-09-15' },
      { id: 3, name: 'Daily Needs Shop', items: 234, sales: '₹45,600', rating: 4.3, status: 'active', joined: '2024-04-20' },
      { id: 4, name: 'Quick Essentials', items: 123, sales: '₹23,400', rating: 4.1, status: 'suspended', joined: '2024-07-10' },
    ]
  },
  { 
    id: 13, 
    name: 'Foods', 
    icon: FaUtensils, 
    color: 'bg-blue-400',
    sellers: [
      { id: 1, name: 'Campus Canteen', orders: 1234, revenue: '₹45,600', rating: 4.5, status: 'active', joined: '2023-08-01' },
      { id: 2, name: 'Tasty Bites', orders: 890, revenue: '₹34,500', rating: 4.7, status: 'active', joined: '2024-01-15' },
      { id: 3, name: 'Healthy Meals', orders: 567, revenue: '₹23,400', rating: 4.8, status: 'active', joined: '2024-03-20' },
      { id: 4, name: 'Snack Corner', orders: 345, revenue: '₹15,600', rating: 4.2, status: 'pending', joined: '2024-10-25' },
    ]
  },
  { 
    id: 14, 
    name: 'Accommodation', 
    icon: FaHome, 
    color: 'bg-red-400',
    sellers: [
      { id: 1, name: 'PG Solutions', listings: 34, bookings: 123, rating: 4.6, status: 'active', joined: '2023-07-01' },
      { id: 2, name: 'Student Housing Co', listings: 56, bookings: 234, rating: 4.8, status: 'active', joined: '2023-09-10' },
      { id: 3, name: 'Hostel Finder', listings: 23, bookings: 89, rating: 4.4, status: 'active', joined: '2024-02-05' },
      { id: 4, name: 'Room Rentals', listings: 12, bookings: 34, rating: 4.1, status: 'suspended', joined: '2024-08-15' },
    ]
  },
];

export default function SuperAdminDashboard() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  const totalSellers = services.reduce((acc, service) => acc + service.sellers.length, 0);
  const activeSellers = services.reduce((acc, service) => 
    acc + service.sellers.filter(s => s.status === 'active').length, 0
  );
  const pendingSellers = services.reduce((acc, service) => 
    acc + service.sellers.filter(s => s.status === 'pending').length, 0
  );
  const suspendedSellers = services.reduce((acc, service) => 
    acc + service.sellers.filter(s => s.status === 'suspended').length, 0
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-500 bg-green-500/10';
      case 'pending': return 'text-yellow-500 bg-yellow-500/10';
      case 'suspended': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <FaCheckCircle />;
      case 'pending': return <FaExclamationTriangle />;
      case 'suspended': return <FaBan />;
      default: return null;
    }
  };

  const filteredSellers = selectedService 
    ? selectedService.sellers.filter(s => filterStatus === 'all' || s.status === filterStatus)
    : [];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-gray-950 border-r border-red-900/30 overflow-hidden`}>
        <div className="p-4 border-b border-red-900/30">
          <div className="flex items-center gap-2 mb-2">
            <FaCrown className="text-yellow-500" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              SuperAdmin
            </h1>
          </div>
          <p className="text-xs text-gray-400">Monitor All Sellers & Providers</p>
        </div>
        
        <nav className="p-2 overflow-y-auto h-[calc(100vh-120px)]">
          <button
            onClick={() => { setSelectedService(null); setSelectedSeller(null); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
              selectedService === null 
                ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            <FaChartLine />
            <span className="text-sm font-medium">Overview</span>
          </button>
          
          <div className="text-xs text-gray-500 uppercase px-4 py-2 mt-4">Services</div>
          
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => { setSelectedService(service); setSelectedSeller(null); setFilterStatus('all'); }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-1 transition-all ${
                  selectedService?.id === service.id 
                    ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white' 
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon />
                  <span className="text-sm font-medium">{service.name}</span>
                </div>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">{service.sellers.length}</span>
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
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-yellow-600/10 border border-yellow-600/30 px-4 py-2 rounded-lg">
              <FaCrown className="text-yellow-500" />
              <span className="text-sm font-medium">SuperAdmin Access</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {!selectedService && !selectedSeller ? (
            <>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Seller & Provider Overview</h2>
                <p className="text-gray-400">Monitor all sellers and service providers across the platform</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium flex items-center gap-2">
                      <FaStore /> Total Sellers/Providers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{totalSellers}</div>
                    <p className="text-blue-100 text-xs mt-1">Across all services</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium flex items-center gap-2">
                      <FaCheckCircle /> Active
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{activeSellers}</div>
                    <p className="text-green-100 text-xs mt-1">{((activeSellers/totalSellers)*100).toFixed(1)}% of total</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-600 to-yellow-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium flex items-center gap-2">
                      <FaExclamationTriangle /> Pending Approval
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{pendingSellers}</div>
                    <p className="text-yellow-100 text-xs mt-1">Requires review</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-sm font-medium flex items-center gap-2">
                      <FaBan /> Suspended
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">{suspendedSellers}</div>
                    <p className="text-red-100 text-xs mt-1">Action required</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-bold mb-4">All Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const activeCount = service.sellers.filter(s => s.status === 'active').length;
                  const pendingCount = service.sellers.filter(s => s.status === 'pending').length;
                  
                  return (
                    <Card 
                      key={service.id} 
                      className="bg-gray-900 border border-gray-800 hover:border-red-600 transition-all cursor-pointer group"
                      onClick={() => setSelectedService(service)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`${service.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                              <Icon size={20} />
                            </div>
                            <div>
                              <CardTitle className="text-white text-base">{service.name}</CardTitle>
                              <CardDescription className="text-gray-500 text-xs">
                                {service.sellers.length} sellers
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded p-2 text-center">
                            <div className="text-lg font-bold text-green-500">{activeCount}</div>
                            <div className="text-xs text-gray-400">Active</div>
                          </div>
                          {pendingCount > 0 && (
                            <div className="flex-1 bg-yellow-500/10 border border-yellow-500/30 rounded p-2 text-center">
                              <div className="text-lg font-bold text-yellow-500">{pendingCount}</div>
                              <div className="text-xs text-gray-400">Pending</div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : selectedSeller ? (
            <>
              <button
                onClick={() => setSelectedSeller(null)}
                className="mb-4 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
              >
                ← Back to {selectedService.name}
              </button>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold">{selectedSeller.name}</h2>
                    <p className="text-gray-400">Seller/Provider Details</p>
                  </div>
                  <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${getStatusColor(selectedSeller.status)}`}>
                    {getStatusIcon(selectedSeller.status)}
                    <span className="font-medium capitalize">{selectedSeller.status}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {Object.entries(selectedSeller).filter(([key]) => 
                  !['id', 'name', 'status', 'joined'].includes(key)
                ).map(([key, value]) => (
                  <Card key={key} className="bg-gray-900 border border-gray-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-gray-400 text-sm capitalize">{key}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                        {value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <Card className="bg-gray-900 border border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-400">Joined Date</span>
                      <span className="text-white font-medium">{selectedSeller.joined}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-400">Service</span>
                      <span className="text-white font-medium">{selectedService.name}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-400">Seller ID</span>
                      <span className="text-white font-medium">#{selectedSeller.id}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Admin Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedSeller.status === 'pending' && (
                        <button className="p-3 bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2">
                          <FaCheckCircle />
                          <span className="text-sm font-medium">Approve</span>
                        </button>
                      )}
                      {selectedSeller.status === 'active' && (
                        <button className="p-3 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all flex items-center justify-center gap-2">
                          <FaBan />
                          <span className="text-sm font-medium">Suspend</span>
                        </button>
                      )}
                      {selectedSeller.status === 'suspended' && (
                        <button className="p-3 bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-2">
                          <FaCheckCircle />
                          <span className="text-sm font-medium">Reactivate</span>
                        </button>
                      )}
                      <button className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2">
                        <FaEdit />
                        <span className="text-sm font-medium">Edit</span>
                      </button>
                      <button className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                        <FaEye />
                        <span className="text-sm font-medium">View Details</span>
                      </button>
                      <button className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-2">
                        <FaTrash />
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedService(null)}
                className="mb-4 text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
              >
                ← Back to Overview
              </button>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${selectedService.color} p-4 rounded-xl`}>
                    {React.createElement(selectedService.icon, { size: 32 })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedService.name}</h2>
                    <p className="text-gray-400">{selectedService.sellers.length} Sellers/Providers</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg hover:from-red-700 hover:to-blue-700 transition-all flex items-center gap-2">
                    <FaDownload />
                    <span className="text-sm font-medium">Export</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    filterStatus === 'all' 
                      ? 'bg-gradient-to-r from-red-600 to-blue-600' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  All ({selectedService.sellers.length})
                </button>
                <button
                  onClick={() => setFilterStatus('active')}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterStatus === 'active' 
                      ? 'bg-gradient-to-r from-green-600 to-green-700' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <FaCheckCircle />
                  Active ({selectedService.sellers.filter(s => s.status === 'active').length})
                </button>
                <button
                  onClick={() => setFilterStatus('pending')}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterStatus === 'pending' 
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-700' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <FaExclamationTriangle />
                  Pending ({selectedService.sellers.filter(s => s.status === 'pending').length})
                </button>
                <button
                  onClick={() => setFilterStatus('suspended')}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    filterStatus === 'suspended' 
                      ? 'bg-gradient-to-r from-red-600 to-red-700' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <FaBan />
                  Suspended ({selectedService.sellers.filter(s => s.status === 'suspended').length})
                </button>
              </div>

              <div className="space-y-3">
                {filteredSellers.map((seller) => (
                  <Card 
                    key={seller.id} 
                    className="bg-gray-900 border border-gray-800 hover:border-red-600 transition-all cursor-pointer"
                    onClick={() => setSelectedSeller(seller)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                            {seller.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-lg font-semibold text-white">{seller.name}</h3>
                              <div className={`px-2 py-1 rounded text-xs flex items-center gap-1 ${getStatusColor(seller.status)}`}>
                                {getStatusIcon(seller.status)}
                                <span className="capitalize">{seller.status}</span>
                              </div>
                            </div>
                            <div className="flex gap-4 text-sm text-gray-400">
                              {Object.entries(seller).filter(([key]) => 
                                !['id', 'name', 'status', 'joined'].includes(key)
                              ).map(([key, value]) => (
                                <span key={key}>
                                  <span className="capitalize">{key}:</span>{' '}
                                  <span className="text-white font-medium">{value}</span>
                                </span>
                              ))}
                              <span>
                                Joined: <span className="text-white font-medium">{seller.joined}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSeller(seller);
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2"
                          >
                            <FaEye />
                            <span className="text-sm">View</span>
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredSellers.length === 0 && (
                <Alert className="bg-gray-900 border-gray-800">
                  <AlertDescription className="text-gray-400">
                    No sellers found with status: {filterStatus}
                  </AlertDescription>
                </Alert>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}