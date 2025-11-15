import React from "react";
import { motion } from "framer-motion";
import { BookOpen, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    title: "Engineering Mathematics – GATE Edition",
    price: "350",
    condition: "Good",
    location: "Lanka, Varanasi",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Computer Networks – Tanenbaum",
    price: "420",
    condition: "Like New",
    location: "BHU Gate",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Data Structures in C – Schaum Series",
    price: "250",
    condition: "Used",
    location: "Assi, Varanasi",
    image:
      "https://images.unsplash.com/photo-1528208079127-0f132f05a88f?auto=format&fit=crop&w=800&q=60",
  },
];

export default function BookMarket() {
  return (
    <div className="w-full px-6 py-10 bg-[#0F172A] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Books Marketplace</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md text-sm font-medium">
          Sell Your Book
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-200"
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

              <p className="text-red-500 font-bold text-lg">₹ {item.price}</p>

              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Tag size={16} /> {item.condition}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} /> {item.location}
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl mt-3 shadow text-sm font-medium">
                View Details
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}