"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Tag, Clock, User } from "lucide-react";

export default function LostAndFound() {
  // Dummy data inside same file
  const items = [
    {
      id: 1,
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
      id: 2,
      title: "Found AirPods Case",
      description: "White AirPods case found near cafeteria.",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=60",
      location: "Main Cafeteria",
      date: "11 Nov 2025",
      foundBy: "Sneha Verma",
      tags: ["AirPods", "Apple", "White"],
    },
    {
      id: 3,
      title: "Lost ID Card",
      description: "College ID card found near parking area.",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=60",
      location: "Parking Zone C",
      date: "15 Nov 2025",
      foundBy: "Aman Yadav",
      tags: ["Card", "ID", "Student"],
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200">
            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <CardHeader>
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={18} /> {item.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} /> {item.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} /> Reported by: {item.foundBy}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
                Contact Finder
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
