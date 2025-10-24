import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { List } from "../ui/List";
import { VISA_DATA } from "../../data/data";
import { Link } from "react-router-dom";

export const VisaServices = () => {


  return (
    <div className="w-full p-0 mx-auto my-20 bg-blue-50 px-4 md:px-">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left - Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3xl w-full overflow-hidden "
        >
          <img
            src="/imgs/6778fbe3d2b779b4be4b967a_about-image-01.avif"
            alt="Visa Services"
            className="w-full h-full object-cover max-h-[500px]"
          />
        </motion.div>

        {/* Right - Visa List Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full p-10"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl  font-extrabold text-gray-900 mb-6">
            Types of <span className=" font-normal">Visas</span> We Specialize
            In
          </h2>

          {/* Visa List */}
         <List
  data={VISA_DATA}
  uniqueKey="id"
  className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
  render={(item) => (
    <Link
      key={item.id}
      to={`/visadetails/${item.id}`} // ✅ correct route
      className="group flex items-center justify-between py-3 text-lg text-gray-700 hover:text-[#2B1700] transition-colors duration-200 border-b border-gray-200"
    >
      <span className="relative flex items-center justify-between w-full">
        {/* Label with underline animation */}
        <span className="relative">
          {item.label}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2B1700] transition-all duration-300 group-hover:w-full"></span>
        </span>

        {/* Arrow — hidden by default, appears on hover */}
        <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#2B1700]" />
      </span>
    </Link>
  )}
/>

        </motion.div>
      </div>
    </div>
  );
};
