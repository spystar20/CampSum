'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Calendar, Percent, MapPin, Bookmark, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Coaching", "Banking", "Food", "Shopping", "Travel", "Tech"];

const dummyOffers = [
  {
    id: 1,
    title: "50% Off JEE Mains Crash Course",
    provider: "Physics Wallah",
    logo: "https://logo.clearbit.com/physicswallah.in",
    discount: "50% OFF",
    original: "₹8000",
    discounted: "₹4000",
    validTill: "Nov 30, 2025",
    category: "Coaching",
    location: "Online + 5 Centers",
    code: "PWSTUDENT50",
    saved: false,
  },
  {
    id: 2,
    title: "Free NEET Test Series",
    provider: "Aakash Institute",
    logo: "https://logo.clearbit.com/aakash.ac.in",
    discount: "100% FREE",
    original: "₹5000",
    discounted: "Free",
    validTill: "Dec 15, 2025",
    category: "Coaching",
    location: "Pan India",
    code: "NEETFREE25",
    saved: false,
  },
  {
    id: 3,
    title: "Zero Fee Education Loan",
    provider: "SBI Student Plus",
    logo: "https://logo.clearbit.com/sbi.co.in",
    discount: "0% Processing Fee",
    original: "₹2000",
    discounted: "Free",
    validTill: "Mar 31, 2026",
    category: "Banking",
    location: "All Branches",
    code: "SBISTUDENT",
    saved: false,
  },
  {
    id: 4,
    title: "Buy 1 Get 1 on Domino's",
    provider: "Domino's Pizza",
    logo: "https://logo.clearbit.com/dominos.co.in",
    discount: "BOGO",
    original: "₹600",
    discounted: "₹300",
    validTill: "Nov 25, 2025",
    category: "Food",
    location: "Campus Outlets",
    code: "DOMSTUDENT",
    saved: false,
  },
  {
    id: 5,
    title: "30% Off on Laptops",
    provider: "Dell University Store",
    logo: "https://logo.clearbit.com/dell.com",
    discount: "30% OFF",
    original: "₹70,000",
    discounted: "₹49,000",
    validTill: "Dec 31, 2025",
    category: "Tech",
    location: "Online",
    code: "DELLUNI30",
    saved: false,
  },
  {
    id: 6,
    title: "₹500 Off on MakeMyTrip",
    provider: "MakeMyTrip",
    logo: "https://logo.clearbit.com/makemytrip.com",
    discount: "₹500 FLAT",
    original: "₹3000",
    discounted: "₹2500",
    validTill: "Jan 15, 2026",
    category: "Travel",
    location: "App Only",
    code: "MMTSTUDENT",
    saved: false,
  },
];

export default function StudentDiscounts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedOffers, setSavedOffers] = useState(new Set());

  const filteredOffers = useMemo(() => {
    return dummyOffers.filter((offer) => {
      const matchesSearch =
        offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || offer.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleSave = (offerId) => {
    setSavedOffers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(offerId)) {
        newSet.delete(offerId);
      } else {
        newSet.add(offerId);
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
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
          Student Discounts
        </h1>
        <p className="mt-2 text-gray-600">Exclusive offers for students — save big!</p>
      </motion.div>

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
            placeholder="Search offers, brands, codes..."
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
          <TabsList className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md">
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

      {/* Offers Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredOffers.map((offer, index) => {
            const isSaved = savedOffers.has(offer.id);

            return (
              <motion.div
                key={offer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Header */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={offer.logo} />
                          <AvatarFallback>{offer.provider[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-blue-900">{offer.provider}</p>
                          <Badge className="mt-1 bg-red-400 text-white text-xs">
                            {offer.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => toggleSave(offer.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <motion.div
                          animate={{ scale: isSaved ? [1, 1.3, 1] : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Bookmark
                            className={`h-5 w-5 ${isSaved ? "fill-blue-600 text-blue-600" : "text-gray-400"}`}
                          />
                        </motion.div>
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-blue-900 line-clamp-2">
                      {offer.title}
                    </h3>

                    {/* Pricing */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-red-500">{offer.discount}</span>
                      <div className="text-sm">
                        <span className="line-through text-gray-400">{offer.original}</span>
                        <span className="ml-2 font-semibold text-green-600">{offer.discounted}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-blue-500" />
                        Valid till: <span className="font-medium">{offer.validTill}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-red-500" />
                        {offer.location}
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-gray-600">Use Code:</p>
                      <p className="font-mono font-bold text-blue-700">{offer.code}</p>
                    </div>
                  </CardContent>

                  {/* CTA */}
                  <div className="px-6 pb-5">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl">
                      <Percent className="h-5 w-5 mr-2" />
                      Grab Offer
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredOffers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No offers found. Try different filters!</p>
        </motion.div>
      )}
    </div>
  );
}