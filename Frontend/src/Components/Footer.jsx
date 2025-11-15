import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Learn More */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Learn More
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Connect */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            Connect with <span className="text-red-400">Camp</span>
            <span className="text-blue-400">Sum</span>
          </h3>

          <p className="text-gray-400 mb-4 max-w-sm">
            Follow us for updates, tips, and student community stories.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram />} bg="from-pink-500 to-purple-500" />
            <SocialIcon icon={<MessageCircle />} bg="bg-green-500" />
            <SocialIcon icon={<Mail />} bg="bg-red-500" />
            <SocialIcon icon={<Linkedin />} bg="bg-blue-600" />
            <SocialIcon icon={<Facebook />} bg="bg-blue-500" />
          </div>
        </div>

        {/* Explore Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore Services
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Our Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Help</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2025{" "}
        <span className="text-red-400 font-semibold">Camp</span>
        <span className="text-blue-400 font-semibold">Sum</span>. Making student life easier, one service at a time. ❤️
      </div>
    </footer>
  );
}

function SocialIcon({ icon, bg }) {
  return (
    <div
      className={`w-10 h-10 rounded-full ${bg} bg-linear-to-r flex items-center justify-center text-white cursor-pointer hover:scale-110 transition`}
    >
      {icon}
    </div>
  );
}
