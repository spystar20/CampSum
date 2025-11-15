import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock, BookOpen, GraduationCap,  ArrowRight, Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account 🎓
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join <span className="font-semibold text-blue-500">CampSum</span> and connect with your campus!
        </p>

        {/* Google Signup */}
        <Button
          className="w-full flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl"
        >
          <FcGoogle size={20} />
          Signup with Google
        </Button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Full Name */}
          <div>
            <Label>Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                placeholder="Your full name"
                className="pl-10 py-5 rounded-xl"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 py-5 rounded-xl"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                type="password"
                placeholder="Create password"
                className="pl-10 py-5 rounded-xl"
              />
            </div>
          </div>

          {/* University Name */}
          <div>
            <Label>University / College</Label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                placeholder="e.g. Delhi University, BHU, AKTU..."
                className="pl-10 py-5 rounded-xl"
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <Label>Course / Branch</Label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                placeholder="e.g. BTech CSE, BSc, BA, MBA..."
                className="pl-10 py-5 rounded-xl"
              />
            </div>
          </div>

          {/* Signup Button */}
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-5 rounded-xl text-lg flex items-center justify-center gap-2">
            Create Account
            <ArrowRight size={18} />
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
