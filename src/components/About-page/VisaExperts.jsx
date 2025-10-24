import React from "react";
import { motion } from "framer-motion";

export const VisaExperts = () => {
  const experts = [
    {
      name: "Sarah Mitchell",
      role: "Immigration Specialist",
      image: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bc1b57ee7224924a81e1_agent-01.avif",
    },
    {
      name: "David Carter",
      role: "Visa Consultant",
      image: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bc6b3a36bb370afd3a65_agent-02.avif",
    },
    {
      name: "Maria Gonzales",
      role: "Family Visa Specialist",
      image: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bca5585654292b078021_agent-03.avif",
    },
    {
      name: "Ahmed Khan",
      role: "Work Visa Expert",
      image: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bcec4318476fd06ca8d5_agent-04.avif",
    },
    {
      name: "Emily Johnson",
      role: "Study Abroad Consultant",
      image: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/6780bd221b2004191e6f7295_agent-05.avif",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* --- Heading --- */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12 px-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Our <span className="italic text-yellow-500 font-medium">Visa</span> Experts
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          Meet our experienced team dedicated to guiding you through your journey.
        </p>
      </motion.div>

      {/* --- Experts Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-12">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center cursor-pointer bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            <motion.img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{expert.name}</h3>
            <p className="text-gray-500 text-base">{expert.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
