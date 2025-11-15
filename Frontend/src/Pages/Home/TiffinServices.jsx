import React from "react";
import { motion } from "framer-motion";
import { Utensils, MapPin, IndianRupee, Phone, Star } from "lucide-react";

// Dummy Data (Top)
const tiffinServices = [
  {
    name: "Maa Ki Rasoi Tiffin Service",
    description:
      "Homemade food delivered daily. Includes dal, sabzi, roti, rice, salad & special dish on weekends.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df1144cfa4d3?auto=format&fit=crop&w=800&q=60",
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
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <h2 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{item.description}</p>

      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} /> {item.location}
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee size={18} /> {item.price}
        </div>
        <div className="flex items-center gap-2">
          <Star size={18} className="text-yellow-500" /> {item.rating} / 5
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} /> {item.contact}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Utensils size={14} /> {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <button className="w-full from-orange-600 to-red-600 text-white py-2.5 rounded-xl font-medium shadow hover:opacity-90 transition flex items-center justify-center gap-2">
        Contact Provider
      </button>
    </motion.div>
  );
}

export function TiffinServicesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tiffinServices.map((item, index) => (
        <TiffinServiceCard key={index} item={item} />
      ))}
    </div>
  );
}