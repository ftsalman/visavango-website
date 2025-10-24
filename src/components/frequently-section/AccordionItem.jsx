import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

export const AccordionItem = ({ question, answer }) => {
      const [open, setOpen] = useState(false);

  return (
        <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left text-lg font-semibold"
      >
        <span>{question}</span>
        <FaChevronRight
          className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 mt-3 text-gray-300" : "max-h-0"
        }`}
      >
        <p className="text-sm sm:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};
