import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Baby, BedDouble, Phone } from "lucide-react";

// Dummy Data (Top)
const roommateListings = [
  {
    name: "Aman Tiwari",
    description: "Looking for a clean and friendly roommate. Prefer someone who is focused on studies and keeps things organized.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=60",
    location: "Lanka, Varanasi",
    budget: "₹4,000 - ₹5,000",
    preferences: ["Non-smoker", "Student", "Clean"],
    contact: "+91 98723 55671",
  },
  {
    name: "Shreya Patel",
    description:
      "Need a female roommate near BHU gate. Prefer someone calm, respectful, and okay with shared study hours.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60",
    location: "BHU Gate, Varanasi",
    budget: "₹6,000",
    preferences: ["Female", "Calm", "Student"],
    contact: "+91 99800 11234",
  },
  {
    name: "Rohan Gupta",
    description:
      "I have a spare bed in my flat. Looking for someone friendly and chill. Preferably someone who loves cooking!",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=60",
    location: "Sigra, Varanasi",
    budget: "₹5,500",
    preferences: ["Male", "Foodie", "Friendly"],
    contact: "+91 77654 90876",
  },
];

export default function RoommateFinderCard({ item }) {
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
          <BedDouble size={18} /> Budget: {item.budget}
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} /> {item.contact}
        </div>
      </div>

      {/* Preferences */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.preferences.map((pref, idx) => (
          <span
            key={idx}
            className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <Users size={14} /> {pref}
          </span>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2.5 rounded-xl font-medium shadow hover:opacity-90 transition flex items-center justify-center gap-2">
        Contact Now
      </button>
    </motion.div>
  );
}

export function RoommateFinderList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {roommateListings.map((item, index) => (
        <RoommateFinderCard key={index} item={item} />
      ))}
    </div>
  );
}