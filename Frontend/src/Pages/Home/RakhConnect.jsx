'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Calendar, Clock, MapPin, Heart, AlertCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const urgencyLevels = ["All", "Urgent", "Today", "This Week"];

const dummyRequests = [
  {
    id: 1,
    patientName: "Rohan Mehta",
    bloodGroup: "O+",
    units: 2,
    hospital: "City Hospital, Mumbai",
    location: "Andheri West",
    deadline: "Nov 15, 2025 (Today)",
    urgency: "Urgent",
    contact: "+91 98765 43210",
    postedBy: "Priya Mehta",
    avatar: "https://i.pravatar.cc/150?img=5",
    donors: 1,
  },
  {
    id: 2,
    patientName: "Ananya Sharma",
    bloodGroup: "B-",
    units: 1,
    hospital: "Apollo Clinic",
    location: "Kharghar",
    deadline: "Nov 17, 2025",
    urgency: "This Week",
    contact: "+91 91234 56789",
    postedBy: "Raj Sharma",
    avatar: "https://i.pravatar.cc/150?img=12",
    donors: 0,
  },
  {
    id: 3,
    patientName: "Vikram Singh",
    bloodGroup: "A+",
    units: 3,
    hospital: "Fortis Hospital",
    location: "Vashi",
    deadline: "Nov 16, 2025",
    urgency: "Today",
    contact: "+91 99887 76655",
    postedBy: "Neha Singh",
    avatar: "https://i.pravatar.cc/150?img=22",
    donors: 2,
  },
  {
    id: 4,
    patientName: "Kavya Nair",
    bloodGroup: "AB-",
    units: 1,
    hospital: "Lilavati Hospital",
    location: "Bandra",
    deadline: "Nov 20, 2025",
    urgency: "This Week",
    contact: "+91 87654 32109",
    postedBy: "Arun Nair",
    avatar: "https://i.pravatar.cc/150?img=30",
    donors: 0,
  },
  {
    id: 5,
    patientName: "Aarav Patel",
    bloodGroup: "O-",
    units: 2,
    hospital: "Nanavati Max",
    location: "Vile Parle",
    deadline: "Nov 15, 2025 (Today)",
    urgency: "Urgent",
    contact: "+91 76543 21098",
    postedBy: "Meera Patel",
    avatar: "https://i.pravatar.cc/150?img=11",
    donors: 0,
  },
];

export default function RaktConnect() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [selectedUrgency, setSelectedUrgency] = useState("All");
  const [donorList, setDonorList] = useState(new Set());

  const filteredRequests = useMemo(() => {
    return dummyRequests.filter((req) => {
      const matchesSearch =
        req.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBlood = selectedBloodGroup === "All" || req.bloodGroup === selectedBloodGroup;
      const matchesUrgency = selectedUrgency === "All" || req.urgency === selectedUrgency;

      return matchesSearch && matchesBlood && matchesUrgency;
    });
  }, [searchQuery, selectedBloodGroup, selectedUrgency]);

  const toggleDonate = (reqId) => {
    setDonorList((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reqId)) {
        newSet.delete(reqId);
      } else {
        newSet.add(reqId);
      }
      return newSet;
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
          RaktConnect
        </h1>
        <p className="mt-2 text-gray-600">Students saving lives — one donation at a time</p>
      </motion.div>

      {/* Search + Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto mb-8 space-y-5"
      >
        {/* Search */}
        <div className="relative">
          <Input
            placeholder="Search patient, hospital, location..."
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

        {/* Blood Group Tabs */}
        <Tabs value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
          <TabsList className="grid grid-cols-4 sm:grid-cols-8 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
            {["All", ...bloodGroups].map((bg) => (
              <TabsTrigger
                key={bg}
                value={bg}
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-lg text-xs"
              >
                {bg}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Urgency Tabs */}
        <Tabs value={selectedUrgency} onValueChange={setSelectedUrgency}>
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
            {urgencyLevels.map((level) => (
              <TabsTrigger
                key={level}
                value={level}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg text-xs"
              >
                {level}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Requests Feed */}
      <motion.div
        layout
        className="max-w-3xl mx-auto space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredRequests.map((req, index) => {
            const isDonating = donorList.has(req.id);
            const donorCount = req.donors + (isDonating ? 1 : 0);

            return (
              <motion.div
                key={req.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
                  {/* Urgency Banner */}
                  {req.urgency === "Urgent" && (
                    <div className="bg-red-500 text-white text-xs font-bold px-4 py-1 text-center">
                      URGENT — Needed Today
                    </div>
                  )}

                  {/* Header */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={req.avatar} />
                          <AvatarFallback>{req.postedBy[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-blue-900">{req.postedBy}</p>
                          <p className="text-xs text-gray-500">for {req.patientName}</p>
                        </div>
                      </div>
                      <Badge className="bg-red-500 text-white font-bold">
                        {req.bloodGroup}
                      </Badge>
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <span className="font-medium">{req.units} unit(s) needed</span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>{req.hospital}, {req.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-red-500" />
                        <span>{req.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-green-600" />
                        <span>{donorCount} student(s) donating</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">
                        Contact: <span className="font-medium">{req.contact}</span>
                      </p>
                    </div>
                  </CardContent>

                  {/* Action */}
                  <div className="px-6 pb-5">
                    <Button
                      onClick={() => toggleDonate(req.id)}
                      className={`w-full font-bold rounded-xl transition-all ${
                        isDonating
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-red-500 hover:bg-red-600 text-white"
                      }`}
                    >
                      {isDonating ? (
                        <>Donating</>
                      ) : (
                        <>I Can Donate</>
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
      {filteredRequests.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No blood requests found. Try adjusting filters!</p>
        </motion.div>
      )}
    </div>
  );
}