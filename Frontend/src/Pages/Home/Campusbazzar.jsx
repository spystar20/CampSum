'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart, Heart, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dummyProducts = [
  {
    id: 1,
    name: "Trek Mountain Bike",
    description: "Lightly used, serviced last month. Perfect for campus rides. Includes lock.",
    price: 120,
    seller: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1558618665-f306b0493ac5?w=400&h=300&fit=crop",
    category: "Cycle",
  },
  {
    id: 2,
    name: "Engineering Textbooks Set",
    description: "Semester 1-3 books in excellent condition. Notes included.",
    price: 45,
    seller: "Sarah Lee",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    category: "Books",
  },
  {
    id: 3,
    name: "Dell XPS 15 Laptop",
    description: "i7, 16GB RAM, 512GB SSD. Used for coding & light gaming. Charger included.",
    price: 450,
    seller: "Mike Chen",
    image: "https://images.unsplash.com/photo-1511385348-a52b4a5f0a8a?w=400&h=300&fit=crop",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Ergonomic Study Chair",
    description: "Adjustable height, breathable mesh. Ideal for long study sessions.",
    price: 30,
    seller: "Emma Watson",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
    category: "Furniture",
  },
  {
    id: 5,
    name: "Sony WH-1000XM4 Headphones",
    description: "Noise-cancelling, 25+ hours battery. Mint condition with case.",
    price: 60,
    seller: "David Kim",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Electronics",
  },
  {
    id: 6,
    name: "North Face Campus Backpack",
    description: 'Waterproof, 15" laptop sleeve. Used for 1 semester.',
    price: 25,
    seller: "Olivia Martinez",
    image: "https://images.unsplash.com/photo-1553065361-0c35c7d5a6e6?w=400&h=300&fit=crop",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Hero Splendor+ Bike",
    description: "2023 model, 8000 km, campus commute only. Full service history.",
    price: 280,
    seller: "Rahul Sharma",
    image: "https://images.unsplash.com/photo-1558981806-8d6d1d8b4c1c?w=400&h=300&fit=crop",
    category: "Cycle",
  },
  {
    id: 8,
    name: "Calculus & Physics Books",
    description: "IIT-JEE level, barely used. Highlighted key formulas.",
    price: 35,
    seller: "Priya Singh",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f3d89d3?w=400&h=300&fit=crop",
    category: "Books",
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
    <div className="p-4 sm:p-6 lg:p-8 bg-linear-to-br from-blue-50 via-white to-red-50">
      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-7xl mx-auto mb-8 space-y-5"
      >
        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <Input
            placeholder="Search cycles, laptops, books, sellers..."
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
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md mx-auto max-w-3xl">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <Badge className="absolute top-3 left-3 bg-red-400 text-white text-xs">
                    {product.category}
                  </Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-5 w-5 text-red-400" />
                  </Button>
                </div>

                {/* Content */}
                <CardHeader className="pb-3 flex-1">
                  <CardTitle className="text-lg line-clamp-1 text-blue-900">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2 text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  <p className="text-xs text-gray-500">
                    Sold by: <span className="font-medium">{product.seller}</span>
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-3 border-t bg-linear-to-r from-blue-50 to-red-50 mt-auto">
                  <p className="text-2xl font-bold text-red-400">${product.price}</p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl px-5">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No items found. Try adjusting your filters!</p>
        </motion.div>
      )}
    </div>
  );
}