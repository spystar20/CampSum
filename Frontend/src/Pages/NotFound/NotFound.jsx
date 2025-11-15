import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="w-full h-screen bg-[#0F172A] flex flex-col items-center justify-center text-center px-6">
      
      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-8xl font-bold text-white"
      >
        4
        <span className="text-red-400">0</span>
        <span className="text-blue-400">4</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-gray-400 mt-4 text-lg max-w-lg"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Return Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button
          onClick={() => window.location.href = "/"}
          className="mt-6 px-6 py-5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex gap-2 items-center font-medium"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </Button>
      </motion.div>

    </div>
  );
}
