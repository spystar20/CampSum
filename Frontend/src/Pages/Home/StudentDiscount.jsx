'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search, Calendar, Percent, MapPin, Bookmark, Filter
} from "lucide-react";
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

      const matchesCategory =
        selectedCategory === "All" || offer.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleSave = (offerId) => {
    setSavedOffers((prev) => {
      const newSet = new Set(prev);
      newSet.has(offerId) ? newSet.delete(offerId) : newSet.add(offerId);
      return newSet;
    });
  };

  return (
    <div className="p-5 sm:p-8 bg-linear-to-br from-blue-50 via-white to-red-50 min-h-screen">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
          Student Discounts
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Save smarter with exclusive student offers
        </p>
      </motion.div>

      {/* SEARCH */}
      <div className="max-w-2xl mx-auto mb-8 relative">
        <Input
          placeholder="Search discounts, brands or promo codes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-14 pl-14 pr-14 text-lg border-2 border-blue-300 focus:border-blue-500 rounded-full shadow"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600" />
        <Filter className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600" />
      </div>

      {/* CATEGORY TABS */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 max-w-4xl mx-auto bg-white/80 p-2 rounded-xl shadow">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md text-sm"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* OFFERS GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredOffers.map((offer, index) => {
            const isSaved = savedOffers.has(offer.id);

            return (
              <motion.div
                key={offer.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-200/50 bg-white/90 backdrop-blur">
                  <CardHeader className="pb-4 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border border-gray-200">
                        <AvatarImage src={offer.logo} />
                        <AvatarFallback>{offer.provider[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{offer.provider}</p>
                        <Badge className="bg-red-400 text-white text-xs mt-1">
                          {offer.category}
                        </Badge>
                      </div>
                    </div>

                    {/* SAVE BUTTON */}
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => toggleSave(offer.id)}
                    >
                      <motion.div
                        animate={{ scale: isSaved ? [1, 1.3, 1] : 1 }}
                      >
                        <Bookmark
                          className={`h-5 w-5 ${
                            isSaved ? "text-blue-600 fill-blue-600" : "text-gray-400"
                          }`}
                        />
                      </motion.div>
                    </Button>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-gray-900">
                      {offer.title}
                    </h3>

                    {/* DISCOUNT */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-extrabold text-red-500">
                        {offer.discount}
                      </span>

                      <div className="text-sm">
                        <span className="line-through text-gray-400">{offer.original}</span>
                        <span className="ml-2 font-bold text-green-600">
                          {offer.discounted}
                        </span>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        Valid till: <strong>{offer.validTill}</strong>
                      </div>

                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-red-500" />
                        {offer.location}
                      </div>
                    </div>

                    {/* PROMO CODE */}
                    <div className="p-4 bg-linear-to-r from-blue-50 to-red-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-gray-600">Use Code:</p>
                      <p className="font-mono font-semibold text-blue-700 text-lg">
                        {offer.code}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mt-2 rounded-xl">
                      <Percent className="h-5 w-5 mr-2" /> Grab Offer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
