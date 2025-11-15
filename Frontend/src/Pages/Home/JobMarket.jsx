import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, IndianRupee, Building } from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechSpark Labs",
    location: "Varanasi",
    salary: "₹8,000/month",
    type: "Internship",
    mode: "Remote",
    logo: "https://i.imgur.com/4ZQZ4Zy.png",
  },
  {
    id: 2,
    title: "Campus Ambassador",
    company: "Swiggy",
    location: "Hybrid",
    salary: "₹10,000 + Incentives",
    type: "Part-time",
    mode: "Hybrid",
    logo: "https://i.imgur.com/h4W6nnE.png",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Bluestone Pvt Ltd",
    location: "Bangalore",
    salary: "₹4 - 6 LPA",
    type: "Full-time",
    mode: "On-site",
    logo: "https://i.imgur.com/1cH2Qht.png",
  },
];

export default function JobsPortal() {
  return (
    <div className="w-full px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Jobs & Internships</h2>

        <button className="bg-linear-to-r from-red-500 to-blue-500 text-white px-5 py-2 rounded-xl shadow hover:opacity-90 transition-all">
          Post a Job
        </button>
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
          >
            {/* Company Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={job.logo}
                alt={job.company}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Building size={15} /> {job.company}
                </p>
              </div>
            </div>

            {/* Job Info */}
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {job.location}
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={16} /> {job.salary}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} /> {job.type}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> {job.mode}
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-linear-to-r from-blue-600 to-red-600 text-white py-2 rounded-xl mt-4 shadow hover:opacity-90 transition-all text-sm font-medium">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
