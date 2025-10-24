import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/button/Button";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "January 6, 2025",
      title: "The ultimate guide to applying for a tourist visa",
      img: "/imgs/677b7fb1b33b5fd3ffd02f03_blog-01.avif",
    },
    {
      id: 2,
      date: "January 6, 2025",
      title: "How to fast-track your business visa application",
      img: "/imgs/677b7fca14c1cfdfe1aa907c_blog-02.avif",
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-16 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1700] text-center sm:text-left">
          Tips and Advice
        </h1>
        <Button
          variant="secondary"
          className="bg-[#2B1700] text-white text-lg rounded-full px-6 py-2 transition duration-300 hover:scale-105 hover:bg-yellow-500"
        >
          View all blog
        </Button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-3"
          >
            {/* Image with Motion */}
            <motion.img
              src={blog.img}
              alt={blog.title}
              className="w-full h- object-cover cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Blog Info */}
            <div className="px-2">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-2xl font-bold text-[#2B1700] mt-1 leading-snug cursor-pointer hover:text-yellow-500 transition-colors duration-200">
                {blog.title}
              </h3>

              {/* Read More Button */}
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Button
                  variant="link"
                  className="mt-2 text-lg text-[#2B1700] underline hover:no-underline font-medium hover:text-yellow-500 transition-colors"
                >
                  Read More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
