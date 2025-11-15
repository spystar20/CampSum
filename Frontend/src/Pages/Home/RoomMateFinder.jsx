import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, BedDouble, Phone } from "lucide-react";

export default function RoommateFinderList() {
  // Dummy Data Inside Component
  const roommateListings = [
    {
      name: "Aman Tiwari",
      description:
        "Looking for a clean and friendly roommate. Prefer someone who is focused on studies and keeps things organized.",
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {roommateListings.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-200">
            <div className="w-full h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <CardContent className="p-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>

              {/* Details */}
              <div className="space-y-2 text-sm text-gray-700 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-red-400" /> {item.location}
                </div>
                <div className="flex items-center gap-2">
                  <BedDouble size={18} className="text-blue-400" /> Budget:{" "}
                  {item.budget}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-red-400" /> {item.contact}
                </div>
              </div>

              {/* Preferences */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.preferences.map((pref, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-blue-100 text-blue-600 border border-blue-300 flex items-center gap-1"
                  >
                    <Users size={14} /> {pref}
                  </Badge>
                ))}
              </div>

              {/* Button */}
              <Button className="w-full mt-5 bg-linear-to-r from-red-400 to-blue-400 text-white font-medium rounded-xl shadow-md hover:opacity-90">
                Contact Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
