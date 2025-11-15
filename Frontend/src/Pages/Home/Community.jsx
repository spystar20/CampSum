
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Heart, MessageCircle, Share2, Calendar, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dummyPosts = [
  {
    id: 1,
    author: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Just sold my old cycle on Campusum for ₹2800! Great platform for students. Highly recommend!",
    image: "https://i.pinimg.com/736x/13/f9/b2/13f9b2ad99f676874f1c4560b08b277a.jpg",
    likes: 42,
    comments: 8,
    timestamp: "2 hours ago",
    category: "Marketplace",
  },
  {
    id: 2,
    author: "Priya Singh",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Looking for a study partner for Machine Learning. Anyone interested? DM me!",
    image: null,
    likes: 15,
    comments: 12,
    timestamp: "5 hours ago",
    category: "Study Group",
  },
  {
    id: 3,
    author: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Campus fest is coming! Who's performing? Any tips for first-timers?",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    likes: 89,
    comments: 34,
    timestamp: "1 day ago",
    category: "Events",
  },
  {
    id: 4,
    author: "Sarah Lee",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "Free workshop on Resume Building tomorrow at 4 PM in LH-201. Don't miss it!",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    likes: 120,
    comments: 22,
    timestamp: "2 days ago",
    category: "Career",
  },
  {
    id: 5,
    author: "Mike Chen",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "Anyone selling a second-hand laptop under ₹30k? Need it for coding projects.",
    image: null,
    likes: 28,
    comments: 19,
    timestamp: "3 days ago",
    category: "Marketplace",
  },
];

const categories = ["All", "Marketplace", "Study Group", "Events", "Career"];

export default function CommunityFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState(new Set());

  const filteredPosts = useMemo(() => {
    return dummyPosts.filter((post) => {
      const matchesSearch =
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleLike = (postId) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-linear-to-br from-blue-50 via-white to-red-50 min-h-screen">
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
            placeholder="Search posts, people, topics..."
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

      {/* Feed */}
      <motion.div
        layout
        className="max-w-3xl mx-auto space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, index) => {
            const isLiked = likedPosts.has(post.id);
            const likeCount = post.likes + (isLiked ? 1 : 0);

            return (
              <motion.div
                key={post.id}
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
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-blue-900">{post.author}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {post.timestamp}
                        </div>
                      </div>
                      <Badge className="ml-auto bg-red-400 text-white text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="space-y-3">
                    <p className="text-gray-800">{post.content}</p>
                    {post.image && (
                      <motion.img
                        src={post.image}
                        alt="Post"
                        className="w-full rounded-xl object-cover h-64"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </CardContent>

                  {/* Actions */}
                  <div className="px-6 pb-4 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      {/* Like Button */}
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                      >
                        <motion.div
                          animate={{ scale: isLiked ? [1, 1.3, 1] : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart
                            className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                          />
                        </motion.div>
                        <span className="font-medium">{likeCount} Likes</span>
                      </button>

                      {/* Comment */}
                      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments} Comments</span>
                      </button>

                      {/* Share */}
                      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-500">No posts found. Try different filters!</p>
        </motion.div>
      )}
    </div>
  );
}