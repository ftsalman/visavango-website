import React, { useState } from "react";
import { InputGroup } from "../components/ui/InputGroup";
import Button from "../components/ui/button/Button";
import { IconPhoneCalling, IconMail, IconMapPin } from "@tabler/icons-react";
import { Card } from "../components/ui/Card";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Frequently } from "../components/frequently-section/Frequently";

export const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", form);
    setStatus("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
              color="#FBBF24"
              wireframe
              transparent
              opacity={0.1}
            />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate rotateSpeed={0.2} />
        </Canvas>
      </div>

      {/* Heading */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How can we help you today?
      </motion.h2>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 md:px-8">
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/imgs/contact.avif"
            alt="Contact"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Form */}
        <motion.form
          className="lg:w-1/2 flex flex-col gap-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup label="Full Name">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-full bg-blue-100/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B1700]"
                aria-label="Full Name"
              />
            </InputGroup>

            <InputGroup label="Email Address">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3  rounded-full bg-blue-100/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B1700]"
                // placeholder="Your email address"
                aria-label="Email Address"
              />
            </InputGroup>

            <InputGroup label="Phone Number">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3  rounded-full bg-blue-100/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B1700]"
                // placeholder="Your phone number"
                aria-label="Phone Number"
              />
            </InputGroup>

            <InputGroup label="Subject">
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-full bg-blue-100/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B1700] "
                // placeholder="Subject"
                aria-label="Subject"
              />
            </InputGroup>

            <InputGroup label="Message" className="md:col-span-2">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full h-32 p-3  rounded-2xl bg-blue-100/20  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B1700] resize-none"
                // placeholder="Write your message..."
                aria-label="Message"
              />
            </InputGroup>

            <div className="md:col-span-2 flex flex-col items-start gap-2">
              <Button
                type="submit"
                variant="secondary"
                className="bg-[#2B1700]  hover:bg-yellow-400 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
              >
                Send Message
              </Button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </div>
        </motion.form>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto px-4 md:px-8">
        <Card className="flex flex-col items-center gap-3 p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconPhoneCalling className="w-12 h-12 text-yellow-500" />
          <h1 className="text-2xl text-[#2B1700] font-bold">
            Quick phone & WhatsApp support
          </h1>
          <p className="text-lg">
            Reach us directly for immediate assistance with your queries.
          </p>
          <a
            href="https://wa.me/971567529006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2B1700] underline"
          >
            +971 56 752 9006 <br />
            +971 56 793 2301
          </a>
        </Card>

        <Card className="flex flex-col items-center gap-3 p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconMail className="w-12 h-12 text-yellow-500" />
          <h1 className="text-2xl text-[#2B1700] font-bold">
            Email for quick replies
          </h1>
          <p className="text-lg">
            Send an email, and our team will respond promptly.
          </p>
          <a
            href="mailto:sales@visavango.com"
            className="text-[#2B1700] underline"
          >
            sales@visavango.com
          </a>
        </Card>

        <Card className="flex flex-col items-center gap-3 p-6 text-center hover:scale-105 transition-transform duration-300">
          <IconMapPin className="w-12 h-12 text-yellow-500" />
          <h1 className="text-2xl text-[#2B1700] font-bold">
            Visit us for personal help
          </h1>
          <p className="text-lg text-center">
            Dubai, UAE <br /> Mon-Sat: 9 AM – 6 PM <br /> Sunday: Closed
          </p>
        </Card>
      </div>

      {/*  */}

      <Frequently />
    </section>
  );
};
