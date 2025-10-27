import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";
import { IconPhoneCall } from "@tabler/icons-react";
import { ImageBox } from "./ImageBox";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FFE6B3]/40 via-white to-white overflow-hidden">
      <div className="px-6 md:px-12 max-w-3xl space-y-6 mt-16">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#2B1700] leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore the World, <br />
          <span className="text-[#2B1700]">Your Journey Starts Here</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We make global immigration and travel simple, transparent, and smooth.
          Let our expert team help you achieve your visa goals effortlessly.
        </motion.p>

        <motion.div
          className="mt-8 flex whitespace-nowrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            variant="secondary"
            className="bg-[#2B1700] text-white px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-[#2B1700] transition-all duration-300"
            onClick={() => navigate("/contact")} // Navigate to ContactPage
          >
            Get Started
          </Button>

          <Button
            onClick={() => navigate("/contact")}
            variant="secondary"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300"
          >
            <IconPhoneCall size={20} />
            Free Consultation
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 w-full max-w-7xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <ImageBox />
      </motion.div>
    </section>
  );
};
