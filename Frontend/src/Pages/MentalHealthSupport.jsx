import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Phone, MessageCircle, MapPin, User } from "lucide-react";

// Dummy Data (Top)
const supportResources = [
  {
    title: "University Mental Health Counselor",
    description:
      "Free confidential counseling available for all students. Book a session or walk in anytime.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=60",
    location: "Health Center, Block C",
    contact: "+91 98765 43210",
    counselor: "Dr. Radhika Mehra",
    tags: ["Counseling", "Support", "Stress"],
  },
  {
    title: "Peer Support Group — Talk Circle",
    description:
      "A safe space for students to talk, listen, and share experiences. Weekly sessions.",
    image:
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=60",
    location: "Community Hall, Block A",
    contact: "+91 99887 66554",
    counselor: "Student Wellness Club",
    tags: ["Peer Support", "Mental Health", "Community"],
  },
  {
    title: "24/7 Emotional Support Helpline",
    description:
      "Round-the-clock phone support for students dealing with anxiety, depression, or distress.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
    location: "Available Anywhere",
    contact: "1800-121-0000",
    counselor: "Certified Support Team",
    tags: ["Helpline", "Anxiety", "Immediate Help"],
  },
];

export default function MentalHealthCard({ item }) {
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
          <Phone size={18} /> {item.contact}
        </div>
        <div className="flex items-center gap-2">
          <User size={18} /> Support By: {item.counselor}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
          >
            <HeartHandshake size={14} /> {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-xl font-medium shadow hover:opacity-90 transition flex items-center justify-center gap-2">
        <MessageCircle size={18} /> Reach Out
      </button>
    </motion.div>
  );
}

export function MentalHealthSupportList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {supportResources.map((item, index) => (
        <MentalHealthCard key={index} item={item} />
      ))}
    </div>
  );
}