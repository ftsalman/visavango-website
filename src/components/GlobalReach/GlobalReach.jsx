import React from "react";
import { motion } from "framer-motion";
import { CardContainer } from "../ui/CardContainer";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";
const countries = [
  { name: "Netherlands", flag: "https://flagcdn.com/w40/nl.png" },
  { name: "Egypt", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Switzerland", flag: "https://flagcdn.com/w40/ch.png" },
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
  { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Bulgaria", flag: "https://flagcdn.com/w40/bg.png" },
  { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "New Zealand", flag: "https://flagcdn.com/w40/nz.png" },
];

const ScrollRow = ({ speed = 20, reverse = false }) => {
 
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...countries, ...countries].map((country, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#1a1f2e] hover:bg-[#23293d] transition-all rounded-2xl p-4 flex flex-col items-center justify-center shadow-md cursor-pointer min-w-[110px] hover:scale-105"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-12 h-12 rounded-full mb-2 object-cover"
            />
            <p className="text-sm font-medium text-center">{country.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const GlobalReach = () => {
   const  navigate =  useNavigate();
  return (
    <CardContainer className="relative w-full h-[30rem] bg-[#2B1700] bg-[url('/imgs/6778f334ad994bbae51fca27_vector-03.png')] bg-cover bg-center text-white py-16 rounded-3xl overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Global reach –{" "}
            <span className="italic font-normal text-gray-300">countries</span>{" "}
            we <span className="text-yellow-500 font-bold">serve</span>
          </h2>

          <Button 
          variant="secondary"
          onClick={()=> navigate('/countries')}
          
          className="mt-8 bg-[#252424] hover:bg-yellow-400 text-white hover:text-black px-6 py-3 rounded-full text-lg font-medium transition">
            Explore all
          </Button>

          <p className="mt-10 text-gray-300 text-lg">
            <span className="text-5xl font-extrabold text-yellow-500"></span>{" "}
            Visa services for major global destinations.
          </p>
        </div>

        {/* Right Side - Scrolling Flags */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 overflow-hidden">
          {/* Row 1 - Top (scrolls right) */}
          <ScrollRow speed={25} reverse={false} />

          {/* Row 2 - Center (scrolls left) */}
          <div className="ml-10">
            <ScrollRow speed={30} reverse={true} />
          </div>

          {/* Row 3 - Bottom (scrolls right again) */}
          <ScrollRow speed={35} reverse={false} />
        </div>
      </div>
    </CardContainer>
  );
};
