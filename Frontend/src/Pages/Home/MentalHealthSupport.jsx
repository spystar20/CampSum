
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Phone, MessageCircle, MapPin, User } from "lucide-react";

export default function MentalHealthSupport() {
  // Dummy Data
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

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {supportResources.map((item, index) => (
        <motion.div
          key={index}
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
                <Phone size={18} /> {item.contact}
              </div>

              <div className="flex items-center gap-2">
                <User size={18} /> Support By: {item.counselor}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <HeartHandshake size={14} /> {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 rounded-xl">
                <MessageCircle size={18} /> Reach Out
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
