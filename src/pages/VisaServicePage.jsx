import React from "react";
import { motion } from "framer-motion";
import { HeaderCard } from "../components/ui/HeaderCard";
import { IconArrowRight } from "@tabler/icons-react"; // ✅ Fixed import — Tabler icons are reliable
import { List } from "../components/ui/List";
import { Card } from "../components/ui/Card";
import { VISA_DATA } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

// const VISA_TYPES = [
//   {
//     id: "1",
//     label: "Business Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf7da0d8bfb349ccaba3_visa-01.avif",
//   },
//   {
//     id: "2",
//     label: "Student Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf8606252d1756f9b0e8_visa-02.avif",
//   },
//   {
//     id: "3",
//     label: "Tourist Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf8e30ed5bf7c908ce31_visa-03.avif",
//   },
//   {
//     id: "4",
//     label: "Family Reunion Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbf9af8f858a8388b63a4_visa-04.avif",
//   },
//   {
//     id: "5",
//     label: "Work Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbfa3db80d62e63539da9_visa-05.avif",
//   },
//   {
//     id: "6",
//     label: "Visitor Visa",
//     img: "https://cdn.prod.website-files.com/6777c6ca4cd4fd1a5c59b3bf/677fbfb1529803f77a01f6b4_visa-06.avif",
//   },
// ];

export const VisaServicePage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-10 py-10 bg-white">
      {/* --- Header Section --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeaderCard header="Types of Visas We Specialize" />
      </motion.div>

      {/* --- Visa Type Cards --- */}
      <List
        data={VISA_DATA}
        uniqueKey="id"
        className="mt-10 grid gap-8  grid-cols-1 md:grid-cols-3  lg:grid-cols-3"
        render={(item, index) => (
          <Link to={`/visadetails/${item.id}`}>
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              {/* Card Image with hover zoom */}
              <Card className="p-0 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-500">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Card>

              {/* Label and Icon */}
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl md:text-2xl text-[#2B1700] font-bold group-hover:text-yellow-500 transition-colors duration-300 italic">
                  {item.label}
                </p>

                {/* Animated Arrow */}
                <motion.span
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-yellow-500"
                >
                  <IconArrowRight className="w-6 h-6" />
                </motion.span>
              </div>
            </motion.div>
          </Link>
        )}
      />
    </div>
  );
};
