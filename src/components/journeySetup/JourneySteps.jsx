import React from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { GlobalReach } from "../GlobalReach/GlobalReach";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Start with a personalized consultation where we assess your visa or immigration needs and the best approach for your case.",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    title: "Document Preparation",
    desc: "Our experts will guide you through gathering and organizing all required documents to ensure your application is accurate and complete.",
    color: "bg-gray-900",
  },
  {
    id: 3,
    title: "Application Submission",
    desc: "We submit your application to the appropriate authorities and monitor its progress.",
    color: "bg-yellow-500",
    icon: <Plane className="w-5 h-5 text-white animate-pulse" />,
  },
];

export const JourneySteps = () => {
  return (
    <section className="py-20 bg-white text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Immigration <span className="italic font-normal">journey</span> in{" "}
        <span className="font-extrabold text-gray-900">3 simple steps</span>
      </motion.h2>

      {/* Dotted Background Line */}
      <div className="absolute top-[170px] md:top-[180px] left-0 w-full flex justify-center z-10 pointer-events-none">
        <img
          src="/imgs/6778e316e8221903bac49617_vector-02.svg"
          alt="Journey path"
          className="w-full max-w-6xl"
        />
      </div>

      {/* Steps */}
      <div className="relative mt-20 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 gap-8 md:gap-16 z-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center md:w-1/3 relative"
          >
            {/* Number Circle */}
            <div
              className={`${step.color} text-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full text-xl md:text-2xl font-semibold mb-6 shadow-md relative`}
            >
              {String(step.id).padStart(2, "0")}
              {step.icon && (
                <div className="absolute -right-2 -top-2 md:-right-3 md:-top-3">
                  {step.icon}
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-3 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Global Reach Section */}
      <motion.div
        className="mt-20 flex items-center justify-center w-full px-4 sm:px-8 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-7xl">
          <GlobalReach />
        </div>
      </motion.div>
    </section>
  );
};
