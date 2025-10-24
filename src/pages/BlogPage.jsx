import React from "react";
import { motion } from "framer-motion";
import { HeaderCard } from "../components/ui/HeaderCard";

export const BlogPage = () => {
  return(
    <div className="px-4 md:px-10 py-10 bg-white">
         {/* --- Header Section --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <HeaderCard header="Oru Blog" />
      </motion.div>   
</div>
  );
};
