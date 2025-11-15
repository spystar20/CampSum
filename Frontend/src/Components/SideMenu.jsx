import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, ShoppingCart, Newspaper, Users, Search, Heart, Droplet, BedDouble, Percent, Utensils } from 'lucide-react';

const menuItems = [
  { name: 'Accommodation', path: '/accomendation', icon: <Building size={20} /> },
  { name: 'Campus Bazaar', path: '/campusbazzar', icon: <ShoppingCart size={20} /> },
  { name: 'CMS', path: '/cms', icon: <Newspaper size={20} /> },
  { name: 'Community', path: '/community', icon: <Users size={20} /> },
  { name: 'Events & Updates', path: '/eventsupdates', icon: <Newspaper size={20} /> },
  { name: 'Lost & Found', path: '/lostandfound', icon: <Search size={20} /> },
  { name: 'Mental Health', path: '/mentalhealthsupport', icon: <Heart size={20} /> },
  { name: 'Rakt Connect', path: '/raktconnect', icon: <Droplet size={20} /> },
  { name: 'Roommate Finder', path: '/roommatefinder', icon: <BedDouble size={20} /> },
  { name: 'Student Discount', path: '/studentdiscount', icon: <Percent size={20} /> },
  { name: 'Tiffin Services', path: '/tiffinservices', icon: <Utensils size={20} /> },
];

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <img src="/src/assets/logo.png" alt="CampSum Logo" className="h-8" />
            <span className="text-2xl font-bold text-gray-800">CampSum</span>
          </Link>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
