import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderCard } from "../components/ui/HeaderCard";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/button/Button";
import { Link } from "react-router-dom";
import { COUNTRIES_DATA } from "../data/data";

export const CountriesPage = () => {
  const [data, setData] = useState(COUNTRIES_DATA);
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * itemsPerPage;
  const visibleCountries = data.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="px-4 md:px-10 py-10 bg-white overflow-hidden">
      {/* --- Header Section --- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderCard header="Countries We Serve" />
      </motion.div>

      {/* --- Animated Countries Grid --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
        >
          {visibleCountries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="space-y-4"
            >
              <Link to={`/countries/${item.id}`}>
                <Card className="overflow-hidden p-0 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.country}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center p-0 rounded-full px-2">
                      <img
                        src={item.flag}
                        alt={`${item.country} flag`}
                        className="w-10 h-10 object-cover rounded-full mr-2"
                      />
                    </div>
                  </div>
                </Card>
              </Link>
              <h2 className="text-2xl font-bold text-[#2B1700]">{item.country}</h2>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* --- Pagination --- */}
      <motion.div
        className="flex items-center justify-center gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-6 py-2 rounded-full ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#2B1700] text-white hover:bg-yellow-500"
          }`}
        >
          Prev
        </Button>

        <motion.p
          key={page}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-lg font-medium"
        >
          {page}/{totalPages}
        </motion.p>

        <Button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`px-6 py-2 rounded-full ${
            page === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#2B1700] text-white hover:bg-yellow-500"
          }`}
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
};


