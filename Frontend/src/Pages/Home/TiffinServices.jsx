"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils, MapPin, IndianRupee, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Dummy Data
export const tiffinServices = [
  {
    name: "Maa Ki Rasoi Tiffin Service",
    description:
      "Homemade food delivered daily. Includes dal, sabzi, roti, rice, salad & special dish on weekends.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgz7wk9B3zvmZeHxwU5wUpOipiaXEcO5uzRA&s",
    location: "Lanka, Varanasi",
    price: "₹2,500 / month",
    rating: 4.7,
    contact: "+91 98765 33445",
    tags: ["Veg", "Homemade", "Healthy"],
  },
  {
    name: "Annapurna Home Kitchen",
    description:
      "Fresh homemade meals with both veg & non-veg options. Weekly menu rotations and hygiene assured.",
    image:
      "https://images.unsplash.com/photo-1543352634-81e45884ccd5?auto=format&fit=crop&w=800&q=60",
    location: "BHU Gate, Varanasi",
    price: "₹3,000 / month",
    rating: 4.5,
    contact: "+91 77880 11223",
    tags: ["Veg/Non-Veg", "Weekly Menu", "Quality"],
  },
  {
    name: "Healthy Bite Tiffins",
    description:
      "Nutritious meals specially for students. Low oil, high protein, and customizable meal plans.",
    image:
      "https://images.unsplash.com/photo-1601315379737-425a8c8c51ff?auto=format&fit=crop&w=800&q=60",
    location: "Sigra, Varanasi",
    price: "₹3,200 / month",
    rating: 4.8,
    contact: "+91 90087 55643",
    tags: ["Healthy", "Student Friendly", "Customizable"],
  },
];

export default function TiffinServiceCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <h2 className="text-xl font-semibold text-blue-900 mb-1">{item.name}</h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.description}</p>

      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-red-400" /> {item.location}
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee size={18} className="text-blue-400" /> {item.price}
        </div>
        <div className="flex items-center gap-2">
          <Star size={18} className="text-yellow-500" /> {item.rating} / 5
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-green-500" /> {item.contact}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, idx) => (
          <Badge
            key={idx}
            variant="secondary"
            className="bg-blue-100 text-blue-600 border border-blue-200 flex items-center gap-1"
          >
            <Utensils size={14} /> {tag}
          </Badge>
        ))}
      </div>

      {/* Button */}
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">
        Contact Provider
      </Button>
    </motion.div>
  );
}

export function TiffinServicesList() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tiffinServices.map((item, index) => (
        <TiffinServiceCard key={index} item={item} />
      ))}
    </div>
  );
}
