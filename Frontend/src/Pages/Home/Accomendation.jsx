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

export default function Accomendation() {
  return (
    <div className="w-full px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Available Properties</h2>
        <button className=" from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl shadow-md hover:opacity-90 transition-all text-sm font-medium">
          Request a Room
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.title}
              </h3>

              <p className="text-blue-600 font-bold text-lg">₹ {item.price}</p>

              <div className="flex items-center gap-3 text-gray-500 text-sm">
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

              <button className="w-full from-purple-600 to-blue-600 text-white py-2 rounded-xl mt-3 shadow hover:opacity-90 transition-all text-sm font-medium">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
