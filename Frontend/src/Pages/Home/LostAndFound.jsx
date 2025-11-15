import React from "react";
import { motion } from "framer-motion";
import { MapPin, Tag, Clock, User, Camera } from "lucide-react";

export default function LostAndFoundCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <h2 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h2>
      <p className="text-gray-600 text-sm mb-3">{item.description}</p>

      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} /> {item.location}
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} /> Posted on: {item.date}
        </div>
        <div className="flex items-center gap-2">
          <User size={18} /> Reported by: {item.foundBy}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Tag size={14} /> {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-medium shadow hover:opacity-90 transition">
        Contact Finder
      </button>
    </motion.div>
  );
}

// Dummy Data (Top)
const sampleItems = [
  {
    title: "Lost Backpack",
    description: "Black laptop backpack found near the library stairs.",
    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae0f87d?auto=format&fit=crop&w=800&q=60",
    location: "Central Library, Block A",
    date: "12 Nov 2025",
    foundBy: "Rahul Sharma",
    tags: ["Bag", "Black", "Laptop"],
  },
  {
    title: "Found AirPods Case",
    description: "White AirPods case found near cafeteria.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=60",
    location: "Main Cafeteria",
    date: "11 Nov 2025",
    foundBy: "Sneha Verma",
    tags: ["AirPods", "Apple", "White"],
  },
];

export function LostAndFoundList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {sampleItems.map((item, index) => (
        <LostAndFoundCard key={index} item={item} />
      ))}
    </div>
  );
}
