import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Users, Settings } from "lucide-react";
import { List } from "../../ui/List";
import { Card } from "../../ui/Card";

const features = [
  {
    icon: <ThumbsUp className="w-12 h-12 text-yellow-400 mb-4" />,
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
  },
  {
    icon: <Users className="w-12 h-12 text-yellow-400 mb-4" />,
    title: "Personalized Solutions",
    description:
      "Every case is unique, and we tailor our services to meet your specific needs.",
  },
  {
    icon: <Settings className="w-12 h-12 text-yellow-400 mb-4" />,
    title: "Transparent Process",
    description: "Clear communication and guidance at every step.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-gray-900">Why </span>
        <span className="italic text-yellow-500">choose </span>
        <span className="text-gray-900">us</span>
      </motion.h2>

      {/* Feature Cards */}
      <List
        data={features}
        uniqueKey="title"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16"
        render={(item, index) => (
          <motion.div
            key={item.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-4xl font-semibold text-[#2B1700] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 max-w-[20rem] text-lg leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        )}
      />
    </section>
  );
};

export default WhyChooseUs
