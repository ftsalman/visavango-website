import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Button from "../ui/button/Button";
import { NavbarBackground } from "../three-js/NavbarBackground";
import { Link, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/visa-services" },
   ,
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-500/10 backdrop-blur-md shadow-md z-50">
      {/* Optional 3D background */}
      <NavbarBackground />

      <div className="container mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-3 cursor-pointer">
            <motion.img
              src="/imgs/logo.png"
              alt="Logo"
              className="w-5 sm:w-10 md:w-12 lg:w-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="text-2xl md:text-3xl text-[#2B1700] font-extrabold">
              VISA VANGO
            </h2>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((item, index) => (
            <motion.li
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.path} // ✅ Corrected property
                className="text-[#2B1700] hover:text-yellow-500 font-medium transition"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="secondary"
              size="md"
              className="bg-[#2B1700] px-7 py-2 text-center rounded-full text-white font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:text-[#2B1700]"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col gap-3 p-4">
              {NAV_LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block py-2 text-[#2B1700] hover:text-yellow-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <Button
                variant="secondary"
                className="bg-[#2B1700] px-7 text-center text-white font-semibold hover:bg-yellow-400 transition-all rounded-full duration-300 hover:scale-105 hover:text-[#2B1700] mt-3"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
