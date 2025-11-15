'use client';

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dummyArticles = [
  {
    id: 1,
    title: "How to Ace Your Semester Exams",
    excerpt: "Proven study techniques, time-management hacks, and resources every student needs.",
    author: "Prof. Rina Mehta",
    date: "Nov 12, 2025",
    readTime: "5 min",
    category: "Study Tips",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Campus Bike Maintenance 101",
    excerpt: "Keep your cycle running smoothly without spending a fortune.",
    author: "Alex Johnson",
    date: "Nov 10, 2025",
    readTime: "7 min",
    category: "Campus Life",
    cover: "https://images.unsplash.com/photo-1558618665-f306b0493ac5?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Top 5 Free Tools for Coding Students",
    excerpt: "VS Code extensions, Git tricks, and online compilers you should know.",
    author: "Mike Chen",
    date: "Nov 8, 2025",
    readTime: "6 min",
    category: "Tech",
    cover: "https://images.unsplash.com/photo-1511385348-a52b4a5f0a8a?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Healthy Eating on a Student Budget",
    excerpt: "Meal prep ideas under ₹100 per day.",
    author: "Priya Singh",
    date: "Nov 5, 2025",
    readTime: "4 min",
    category: "Lifestyle",
    cover: "https://images.unsplash.com/photo-1498837167921-ddd2754d8c1e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Internship Hunting Guide 2026",
    excerpt: "Resume tips, LinkedIn hacks, and where to apply first.",
    author: "Sarah Lee",
    date: "Nov 3, 2025",
    readTime: "8 min",
    category: "Career",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Mental Health Tips for Exam Season",
    excerpt: "Simple mindfulness exercises you can do in 5 minutes.",
    author: "Emma Watson",
    date: "Nov 1, 2025",
    readTime: "5 min",
    category: "Wellness",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Study Tips", "Campus Life", "Tech", "Lifestyle", "Career", "Wellness"];

export default function StudentBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return dummyArticles.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-linear-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-7xl mx-auto mb-8 space-y-5"
      >
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Input
            placeholder="Search articles, authors, topics..."
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
          <TabsList className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-2 bg-white/80 backdrop-blur rounded-xl shadow-md mx-auto max-w-5xl">
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

      {/* Articles Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                {/* Cover Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={article.cover}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <Badge className="absolute top-3 left-3 bg-red-400 text-white text-xs">
                    {article.category}
                  </Badge>
                </div>

                {/* Content */}
                <CardHeader className="flex-1 pb-3">
                  <CardTitle className="text-lg line-clamp-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2 text-gray-600 mt-1">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <p className="mt-2 text-xs">
                    By <span className="font-medium text-blue-600">{article.author}</span>
                  </p>
                </CardContent>

                <div className="px-6 pb-4 mt-auto">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl">
                    Read Article
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No articles found. Try different filters!</p>
        </motion.div>
      )}
    </div>
  );
}