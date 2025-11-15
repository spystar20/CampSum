import React from "react";
import { motion } from "framer-motion";
import { MapPin, Home, Users } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Girls Hostel near Samne Ghat Road",
    price: "3,500/month",
    category: "Girls",
    location: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Girls Hostel Available near Lanka",
    price: "7,000/month",
    category: "Girls",
    location: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Boys Hostel Available in Lanka",
    price: "7,000/month",
    category: "Boys",
    location: "Varanasi",
    image:
      "https://dzfnmiboypqzoymrcmmj.supabase.co/storage/v1/object/public/accommodation-photos/1761215732124-img-20251023-wa0005.jpg",
  },
];

export default function Accommodation() {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Available Properties
        </h2>

        <button className="px-5 py-2.5 rounded-xl shadow-md text-white text-sm font-medium bg-linear-to-r from-blue-500 to-blue-600 hover:opacity-90 transition">
          Request a Room
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {properties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Price */}
              <p className="text-blue-600 font-bold text-lg">{item.price}</p>

              {/* Meta Icons */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Home size={16} /> Hostel
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} /> {item.category}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> {item.location}
                </div>
              </div>

              {/* Button */}
              <button className="w-full py-2.5 mt-3 rounded-xl text-white shadow bg-linear-to-r from-red-400 to-blue-500 hover:opacity-90 font-medium text-sm transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
