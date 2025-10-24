import React from "react";
import { motion } from "framer-motion";

export const StatsSection = () => {
  const stats = [
    { number: "10K+", label: "Achieving their global goals" },
    { number: "98%", label: "Successful visa outcomes" },
    { number: "18+", label: "Expert guidance" },
    { number: "15+", label: "Visa services" },
  ];

  return (
    <section className="py-16 bg-white">
      {/* ---- Top Images Section ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6"
      >
        <img
          src="/imgs/about.avif"
          alt="Team working together"
          className="rounded-3xl w-full lg:w-[45%] h-[380px] object-cover shadow-lg"
        />
        <img
          src="/imgs/about-img2.avif"
          alt="Consultation team"
          className="rounded-3xl w-full lg:w-[45%] h-[380px] object-cover shadow-lg"
        />
      </motion.div>

      {/* ---- Stats Section ---- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center px-6"
      >
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold text-yellow-400">{item.number}</h2>
            <p className="text-[#2B1700] mt-2 text-lg font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
