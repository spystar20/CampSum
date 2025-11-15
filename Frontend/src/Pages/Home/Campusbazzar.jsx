"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, Filter } from "lucide-react";

import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dummyProducts = [
  {
    id: 1,
    name: "Trek Mountain Bike",
    description: "Lightly used, perfect for campus rides.",
    price: 120,
    seller: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1558618665-f306b0493ac5?w=400&h=300&fit=crop",
    category: "Cycle",
  },
  {
    id: 2,
    name: "Semester 1-3 Engineering Books",
    description: "Excellent condition, includes notes.",
    price: 45,
    seller: "Sarah Lee",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    category: "Books",
  },
  {
    id: 3,
    name: "Dell XPS 15",
    description: "i7, 16GB RAM, 512GB SSD. Great condition.",
    price: 450,
    seller: "Mike Chen",
    image: "https://images.unsplash.com/photo-1511385348-a52b4a5f0a8a?w=400&h=300&fit=crop",
    category: "Electronics",
  },
];

const categories = ["All", "Cycle", "Books", "Electronics", "Furniture", "Accessories"];

export default function MarketplaceGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return dummyProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seller.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="p-6 bg-linear-to-br from-blue-50 via-white to-red-50 min-h-screen">

      {/* 🔍 Search */}
      <div className="max-w-3xl mx-auto mb-8 relative">
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-14 pl-14 pr-14 text-lg border-2 border-blue-300 rounded-full shadow-sm"
        />

        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400" />
        <Filter className="absolute right-5 top-1/2 -translate-y-1/2 text-red-400" />
      </div>

      {/* 🏷️ Category Filters */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-3xl mx-auto mb-10">
        <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 bg-white shadow-md p-2 rounded-xl">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="data-[state=active]:bg-blue-400 data-[state=active]:text-white rounded-lg"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* 🛍️ Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300">

                {/* 🖼️ Image */}
                <div className="relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />

                  <Badge className="absolute top-3 left-3 bg-red-400 text-white">
                    {product.category}
                  </Badge>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white shadow opacity-0 group-hover:opacity-100 transition"
                  >
                    <Heart className="text-red-400" />
                  </Button>
                </div>

                {/* 📄 Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-500">
                    Seller: <span className="font-medium text-gray-700">{product.seller}</span>
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t bg-linear-to-r from-blue-50 to-red-50 mt-auto">
                  <p className="text-2xl font-bold text-red-400">${product.price}</p>

                  <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-xl px-5">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ❌ No Results */}
      {filteredProducts.length === 0 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-lg text-gray-500 mt-10">
          No matching items found.
        </motion.p>
      )}
    </div>
  );
}
