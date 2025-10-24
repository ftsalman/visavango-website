import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { COUNTRIES_DATA, VISA_DATA } from "../data/data";
import { motion } from "framer-motion";
import { List } from "../components/ui/List";
import { Card } from "../components/ui/Card";
import { InputGroup } from "../components/ui/InputGroup";
import Button from "../components/ui/button/Button";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";

export const VisaDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const visaDetails = VISA_DATA.find((c) => c.id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  if (!visaDetails) {
    return (
      <div className="text-center py-20 relative">
     
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold text-gray-700">Visa not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">

      <div className="relative z-10 px-6 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* --- LEFT --- */}
          <motion.div
            className="w-full lg:w-2/3 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={visaDetails.img}
              alt={visaDetails.label}
              className="w-full h-[500px] object-cover rounded-xl shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            <motion.h1
              className="text-3xl md:text-4xl font-mono font-extrabold text-[#2B1700] mb-5 italic"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {visaDetails.label}
            </motion.h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              {visaDetails.desc}
            </p>

            {/* --- Why Choose --- */}
            <div className="mt-10 space-y-8">
              {visaDetails.whyChoose && (
                <List
                  data={visaDetails.whyChoose}
                  uniqueKey="img"
                  className="space-y-8 flex "
                  render={(item) => (
                    <motion.div
                      className="flex flex-col md:flex-row items-start gap-6 p-6 backdrop-blur-md"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* --- Image Left --- */}
                      <div className="w-full md:w-1/2">
                        {item.img && (
                          <img
                            src={item.img}
                            alt="why choose"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        )}
                      </div>

                      {/* --- Content Right --- */}
                      <div className="w-full md:w-1/2">
                        {item.points && (
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {item.points.map((point, index) => (
                              <li key={index} className="text-lg font-medium">
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                />
              )}
            </div>
          </motion.div>
          

          {/* --- RIGHT (Form) --- */}
          <motion.div
            className="w-full lg:w-1/3 bg-[#2B1700] backdrop-blur-md border border-gray-200 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Get in touch with us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputGroup
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                labelClassName="text-white"
                inputClassName=" text-white"
                
              />
              <InputGroup
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                 labelClassName="text-white"
                   inputClassName=" text-white"
              />
              <InputGroup
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                 labelClassName="text-white"
                   inputClassName=" text-white"
              />
              <div>
                <label className="block text-white mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  labelClassName="text-white"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg placeholder:text-white px-3 py-2 focus:outline-none focus:ring-2"
                ></textarea>
              </div>

              <Button
              variant="secondary"
               type="submit" className="w-full bg-yellow-500  hover:scale-105 text-white">
                Send Message
              </Button>
            </form>

            <hr className="my-6" />

            <div className="space-y-2   text-white">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <p className="flex items-center gap-2">
                <IconPhoneCall />+971 56 793 2301 | +971 56 752 9006
              </p>
              <p className="flex items-center gap-2">
                <IconMail />  sales@visavango.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
