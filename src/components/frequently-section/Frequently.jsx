import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/button/Button";
import { List } from "../ui/List";
import { IconPlus } from "@tabler/icons-react";
import { Minus } from "lucide-react";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "How long does the visa application process take?",
    answer:
      "The processing time depends on the visa type and the country you’re applying to. It can range from a few weeks to several months. We provide accurate timelines during the consultation phase.",
  },
  {
    id: 2,
    question: "What documents are required for a visa application?",
    answer:
      "Required documents vary by visa type but generally include a valid passport, proof of financial stability, and other relevant records like employment or study documents. We will guide you through the specific requirements for your application.",
  },
  {
    id: 3,
    question: "Can I apply for a visa online?",
    answer:
      "Yes, many countries offer online visa application portals. Our team can assist you in completing and submitting your application online for convenience and accuracy.",
  },
  {
    id: 4,
    question: "What happens if my visa application is rejected?",
    answer:
      "If your application is rejected, we will review the reasons for denial and help you reapply by addressing any issues or missing documentation.",
  },
  {
    id:5,
    question:"Do I need an immigration lawyer for my visa application?",
    answer:"While it’s not always required, having expert assistance can increase your chances of approval. We offer professional immigration consultations to ensure your application is complete and compliant."
  }
];

// Animation variants
const faqVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export const Frequently = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-16 w-full max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col items-center justify-center">
        {/* Right Section */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl text-gray-900 lg:text-4xl xl:text-5xl font-bold leading-snug">
              Frequently asked questions
            </h2>
            
          </motion.div>

          {/* Accordion List */}
          <List
            data={faqData}
            uniqueKey="id"
            className="flex flex-col space-y-4"
            render={(item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={faqVariants}
              >
                <AccordionItem item={item} defaultOpen={index === 0} />
              </motion.div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

// Accordion Item
const AccordionItem = ({ item, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#3a0b55] py-4">
      {/* Header */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-left text-base sm:text-lg font-semibold focus:outline-none hover:text-yellow-500 transition-colors duration-200"
        aria-expanded={open}
      >
        <span>{item?.question}</span>

        {/* Icon Animation */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 cursor-pointer"
        >
          <IconPlus className="w-5 h-5 text-yellow-500" />
        </motion.span>
      </button>

      {/* Expand Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-3 text-gray-700"
          >
            <p className="text-sm sm:text-base leading-relaxed pb-2">
              {item?.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
