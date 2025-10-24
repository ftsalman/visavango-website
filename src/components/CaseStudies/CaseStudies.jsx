import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/button/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudiesData = [
  {
    id: 1,
    title: "Emma’s study abroad dream",
    description:
      "Successfully navigated financial documentation issues and university requirements, enabling her to study at a top Canadian university.",
    image: "/imgs/6788b4c8ec6b2baa02e562dd_case-01.avif",
  },
  {
    id: 2,
    title: "Liam’s startup journey",
    description:
      "Helped him launch a tech startup with all legal documentation and global registration processes.",
    image: "/imgs/6788b40e0a99016e6627b505_case-02.avif",
  },
  {
    id: 3,
    title: "Sophia’s visa success",
    description:
      "Provided seamless visa support and university application guidance, making her dream of studying in Europe possible.",
    image: "/imgs/6788ca451d9d1df1f7dca582_case-03.avif",
  },
];

export const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === caseStudiesData.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? caseStudiesData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === caseStudiesData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-10 bg-white text-center relative overflow-hidden w-full">
      <h1 className="text-4xl text-black font-extrabold mb-10">
        Inspiring <span className="font-normal">client</span> case studies
      </h1>

      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={caseStudiesData[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8  p-6 lg:p-12  mx-4 lg:mx-10"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-96 rounded-xl overflow-hidden">
              <img
                src={caseStudiesData[currentIndex].image}
                alt={caseStudiesData[currentIndex].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
              <h3 className="text-3xl lg:text-4xl text-[#2B1700] font-semibold text-left">
                {caseStudiesData[currentIndex].title}
              </h3>

              <p className="text-lg lg:text-xl text-[#2B1700] text-left">
                {caseStudiesData[currentIndex].description}
              </p>

              <Button
                variant="secondary"
                className="bg-[#2B1700] hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-white text-lg lg:text-2xl px-6 lg:px-7 mt-4"
              >
                View Case Study
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute top- -translate-y-1/2 left-0 right-0 flex justify-between px-4"></div>
      </div>
    </div>
  );
};
