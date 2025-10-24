import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMMIGRATION_SERVICES } from "../../data/data";

export const Immigrations = () => {
  const scrollRef = useRef(null);

  // const services = [
  //   {
  //     title: "Visa Application Assistance",
  //     desc: "Expert guidance through every step of your visa application process.",
  //     img: "/imgs/677e7240e3e34d7fa6783b18_service-01.avif",
  //   },
  //   {
  //     title: "Permanent Residency Solutions",
  //     desc: "Helping you secure long-term residency in your desired country.",
  //     img: "/imgs/677e724aed0c2bd50318aff5_service-02.avif",
  //   },
  //   {
  //     title: "Citizenship Applications",
  //     desc: "Navigate the complexities of citizenship with personalized support.",
  //     img: "/imgs/677e72530d4acb3027e0ab80_service-03.avif",
  //   },
  //   {
  //     title: "Student Visa Assistance",
  //     desc: "We make studying abroad simpler with full student visa support.",
  //     img: "/imgs/677e724aed0c2bd50318aff5_service-02.avif",
  //   },
  //   {
  //     title: "Work Permit Solutions",
  //     desc: "Get help in securing your international work permits and sponsorships.",
  //     img: "/imgs/677e72530d4acb3027e0ab80_service-03.avif",
  //   },
  // ];

  // Scroll handler
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 sm:px-10 lg:px-24 py-16 bg-white text-gray-900 overflow-hidden">
      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="font-bold text-gray-900">Expert </span>
          <span className="italic text-gray-700">solutions</span> for your needs
        </h2>

        {/* Navigation Arrows */}
        <div className="hidden sm:flex gap-4">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("left")}
            className="p-3 border w-10 h-10 cursor-pointer flex items-center justify-center rounded-full text-gray-700 hover:bg-yellow-400 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll("right")}
            className="p-3 border w-10 h-10 flex cursor-pointer items-center justify-center rounded-full text-gray-700 hover:bg-yellow-400 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide pb-6"
      >
        {IMMIGRATION_SERVICES.map((service, index) => (
          <Link to={`/immigration-details/${service.id}`} key={index}>
            <motion.div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[380px] rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-blue-50 hover:shadow-xl h-[30rem] transition-all duration-500 cursor-pointer flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                />
                <motion.div
                  className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full"
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 hover:text-yellow-500 transition-colors duration-300">
                  {service.header}
                </h3>
                <p className="text-gray-600  md:text-lg max-w-sm ">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};
