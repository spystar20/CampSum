'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Calendar, Clock, MapPin, Users, CheckCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dummyEvents = [
  {
    id: 1,
    title: "TechFest 2025",
    description: "Annual tech symposium with hackathon, workshops, and guest speakers from Google & Microsoft.",
    organizer: "Tech Club",
    organizerAvatar: "https://i.pravatar.cc/150?img=8",
    date: "Nov 28–30, 2025",
    time: "9:00 AM – 6:00 PM",
    location: "Main Auditorium",
    attendees: 320,
    image: "https://images.unsplash.com/photo-1515187029135-8e31f1f5d1b9?w=600&h=400&fit=crop",
    type: "Event",
    rsvp: false,
  },
  {
    id: 2,
    title: "Resume Building Workshop",
    description: "Learn ATS-friendly resumes, LinkedIn optimization, and mock interviews.",
    organizer: "Career Cell",
    organizerAvatar: "https://i.pravatar.cc/150?img=15",
    date: "Nov 18, 2025",
    time: "4:00 PM – 6:00 PM",
    location: "LH-201",
    attendees: 85,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    type: "Workshop",
    rsvp: false,
  },
  {
    id: 3,
    title: "Campus Cleanup Drive",
    description: "Join us to make our campus greener! Gloves and tools provided.",
    organizer: "Eco Warriors",
    organizerAvatar: "https://i.pravatar.cc/150?img=22",
    date: "Nov 22, 2025",
    time: "8:00 AM – 10:00 AM",
    location: "Central Lawn",
    attendees: 47,
    image: "https://images.unsplash.com/photo-1582213782179-1d0e1001f7a5?w=600&h=400&fit=crop",
    type: "Volunteer",
    rsvp: false,
  },
  {
    id: 4,
    title: "Library Timings Extended",
    description: "Due to exam season, central library will remain open till 2:00 AM starting Nov 20.",
    organizer: "Library Admin",
    organizerAvatar: "https://i.pravatar.cc/150?img=30",
    date: "Nov 20, 2025",
    time: "All Day",
    location: "Central Library",
    attendees: 0,
    image: null,
    type: "Update",
    rsvp: false,
  },
  {
    id: 5,
    title: "Cultural Night Auditions",
    description: "Singers, dancers, and performers — showcase your talent! Top 10 will perform on Dec 5.",
    organizer: "Cultural Committee",
    organizerAvatar: "https://i.pravatar.cc/150?img=11",
    date: "Nov 25, 2025",
    time: "5:00 PM – 8:00 PM",
    location: "Open Air Theatre",
    attendees: 110,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    type: "Event",
    rsvp: false,
  },
];

const categories = ["All", "Event", "Workshop", "Volunteer", "Update"];

export default function EventsUpdates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [rsvpList, setRsvpList] = useState(new Set());

  const filteredEvents = useMemo(() => {
    return dummyEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || event.type === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleRsvp = (eventId) => {
    setRsvpList((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto mb-8 space-y-5"
      >
        {/* Search */}
        <div className="relative">
          <Input
            placeholder="Search events, workshops, updates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 pl-14 pr-16 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-full shadow-inner"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-500" />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </Button>
          )}
          <Filter className="absolute right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-500" />
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg text-xs sm:text-sm"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Events Feed */}
      <motion.div
        layout
        className="max-w-3xl mx-auto space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, index) => {
            const isRsvp = rsvpList.has(event.id);
            const attendeeCount = event.attendees + (isRsvp ? 1 : 0);

            return (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Header */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={event.organizerAvatar} />
                        <AvatarFallback>{event.organizer[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-blue-900">{event.organizer}</p>
                        <Badge className="mt-1 bg-red-400 text-white text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Image */}
                  {event.image && (
                    <div className="px-6 pb-3">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 rounded-xl object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <CardContent className="space-y-3">
                    <h3 className="text-xl font-bold text-blue-900">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>

                    {/* Details */}
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 text-blue-500 ml-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span>{event.location}</span>
                      </div>
                      {event.attendees > 0 && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span>{attendeeCount} going</span>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Action */}
                  <div className="px-6 pb-5">
                    <Button
                      onClick={() => toggleRsvp(event.id)}
                      className={`w-full font-semibold rounded-xl transition-all ${
                        isRsvp
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {isRsvp ? (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Going
                        </>
                      ) : (
                        "I'm Interested"
                      )}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No events or updates found. Try adjusting filters!</p>
        </motion.div>
      )}
    </div>
  );
}